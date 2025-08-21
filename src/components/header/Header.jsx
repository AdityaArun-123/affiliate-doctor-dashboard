import React, { useContext } from 'react';
import './header.css';
import { AppContext } from '../../context/AppContextProvider';

export const Header = () => {

    const { hideSideBarInMobile, showSideBar } = useContext(AppContext);

    return (
        <div className="navbar">
            <div className="left-section">
                <div className="logo">AMRUTAM</div>
                <div className="menu-icon" onClick={hideSideBarInMobile} id='hamburger-menu-icon'>
                    <img src={showSideBar ? "/Gallery/cross.png" : "/Gallery/hamburger_menu.png"} alt="" />
                </div>
                <div className="search-box">
                    <img src="/Gallery/search.png" alt="" />
                    <input type="text" placeholder="Search here" />
                </div>
            </div>
            <div className="right-section">
                <div className="icon-circle">
                    <img
                        src="/Gallery/email.png"
                        alt="mail"
                    />
                    <span className="badge-dot" />
                </div>
                <div className="icon-circle">
                    <img
                        src="/Gallery/notification.png"
                        alt="notif"
                    />
                    <span className="badge-dot" />
                </div>
                <div className="profile">
                    <div className="profile-info">
                        <span className="name">Dr.Liam Michael</span>
                        <span className="role">Doctor</span>
                    </div>
                    <img
                        className="profile-img"
                        src="/Gallery/boy_avatar.png"
                        alt="profile"
                    />
                </div>
                <div className="icon-circle">
                    <img
                        src="/Gallery/setting.png"
                        alt="settings"
                    />
                </div>
            </div>
        </div>
    )
}
