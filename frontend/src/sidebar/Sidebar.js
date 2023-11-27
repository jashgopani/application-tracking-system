import React, { useState, useEffect } from 'react';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import '../static/Sidebar.css';

const Sidebar = ({ options }) => {
	return (
		<div className='left-nav'>
			<div className='left-nav-item'>
				{options &&
					options.length > 0 &&
					options.map((o) => (
						<div onClick={() => o.onClick()}>
							<i className={`${o.iconClass} left-nav-icon `}></i>
							<span className='left-nav-label'>{o.label}</span>
						</div>
					))}
			</div>
		</div>
	);
};

export default Sidebar;
