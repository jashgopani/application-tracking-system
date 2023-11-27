import './static/App.css';
import React, { useState, useEffect } from 'react';
import Sidebar from './sidebar/Sidebar';
import ApplicationPage from './application/ApplicationPage';
import SearchPage from './search/SearchPage';
import LoginPage from './login/LoginPage';
import ManageResumePage from './resume/ManageResumePage';
import ProfilePage from './profile/ProfilePage';
import axios from 'axios';
import MatchesPage from './matches/MatchesPage';

const App = () => {
	const mapRouter = {
		SearchPage: <SearchPage />,
		ApplicationPage: <ApplicationPage />,
		LoginPage: <LoginPage />,
		ManageResumePage: <ManageResumePage />,
		ProfilePage: <ProfilePage />,
		MatchesPage: <MatchesPage />
	};

	const [currentPage, setCurrentPage] = useState(<LoginPage />);
	const [sidebar, setSidebar] = useState(false);
	const [userProfile, setUserProfile] = useState(null);

	const updateProfile = (profile) => {
		setUserProfile(profile);
		setCurrentPage(<ProfilePage profile={profile} updateProfile={updateProfile} />);
	};

	useEffect(() => {
		const fetchData = async () => {
			if (localStorage.getItem('token')) {
				const userId = localStorage.getItem('userId');
				try {
					const res = await axios.get('http://localhost:5000/getProfile', {
						headers: {
							userid: userId,
							Authorization: `Bearer ${localStorage.getItem('token')}`
						}
					});
					sidebarHandler(res.data);
				} catch (err) {
					console.log(err.message);
				}
			}
		};

		fetchData();
	}, []); // Empty dependency array means useEffect runs once after the initial render

	const sidebarHandler = (user) => {
		console.log(user);
		setCurrentPage(<ProfilePage profile={user} updateProfile={updateProfile} />);
		setSidebar(true);
		setUserProfile(user);
	};

	const handleLogout = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('userId');
		setSidebar(false);
	};

	const switchPage = (pageName) => {
		const currentPage =
			pageName === 'ProfilePage' ? (
				<ProfilePage profile={userProfile} updateProfile={updateProfile} />
			) : (
				mapRouter[pageName]
			);
		setCurrentPage(currentPage);
	};

	const sidebarOptions = [
		{ label: 'Search', iconClass: 'fas fa-search', onClick: () => switchPage('SearchPage') },
		{
			label: 'Manage',
			iconClass: 'fas fa-folder',
			onClick: () => switchPage('ManageResumePage')
		},
		{
			label: 'Matches',
			iconClass: 'fas fa-check-double',
			onClick: () => switchPage('MatchesPage')
		},
		{
			label: 'Applications',
			iconClass: 'fas fa-file-alt',
			onClick: () => switchPage('ApplicationPage')
		},
		{
			label: 'Profile',
			iconClass: 'fas fa-user-alt',
			onClick: () => switchPage('ProfilePage')
		},
		{ label: 'Logout', iconClass: 'fas fa-sign-out-alt', onClick: () => handleLogout() }
	];
	const renderApp = () => {
		if (sidebar) {
			return (
				<div className='main-page'>
					<Sidebar options={sidebarOptions} />
					<div className='main'>
						<div className='content'>
							<div className=''>
								<h1
									className='text-center'
									style={{ marginTop: '2%', fontWeight: '300' }}
								>
									Application Tracking System
								</h1>
							</div>
							{currentPage}
						</div>
					</div>
				</div>
			);
		} else {
			return (
				<div className='main-page'>
					<div className='main'>
						<div className='content'>
							<h1
								className='text-center'
								style={{
									marginTop: 30,
									padding: 0.4 + 'em',
									fontWeight: '300'
								}}
							>
								Application Tracking System
							</h1>
							<div className=''></div>
							<LoginPage side={sidebarHandler} />
						</div>
					</div>
				</div>
			);
		}
	};

	return renderApp();
};

export default App;
