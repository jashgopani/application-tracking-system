import React from 'react';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import '../static/Sidebar.css';

const Sidebar = ({ switchPage, handleLogout }) => {
	return (
		<div className='left-nav'>
			<div className='left-nav-item'>
				<div onClick={() => switchPage('SearchPage')}>
					<i className='fas fa-search left-nav-icon'></i>
					<span className='left-nav-label'>Search</span>
				</div>
				<div onClick={() => switchPage('ManageResumePage')}>
					<i className='fas fa-folder left-nav-icon'></i>
					<span className='left-nav-label'>Manage</span>
				</div>
				<div onClick={() => switchPage('MatchesPage')}>
					<i className='fas fa-check-double left-nav-icon'></i>
					<span className='left-nav-label'>Matches</span>
				</div>
				<div onClick={() => switchPage('ApplicationPage')}>
					<i className='fas fa-file-alt left-nav-icon'></i>
					<span className='left-nav-label'>Applications</span>
				</div>
				<div onClick={() => switchPage('ProfilePage')}>
					<i className='fas fa-user-alt left-nav-icon'></i>
					<span className='left-nav-label'>Profile</span>
				</div>
				<div onClick={() => handleLogout()}>
					<i className='fas fa-sign-out-alt left-nav-icon'></i>
					<span className='left-nav-label'>LogOut</span>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
