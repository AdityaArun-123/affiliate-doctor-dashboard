import React, { useContext, useEffect, useRef, useState } from 'react';
import './sidebar.css';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContextProvider';

export const Sidebar = () => {

    const [showAffiliateDropDown, setShowAffiliateDropDown] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(""); // Track active submenu
    const { showSideBar, hideSideBarInMobile } = useContext(AppContext);
    const sidebarRef = useRef(null);

    const navigate = useNavigate();

    const handleSubmenuClick = (itemName) => {
        setActiveSubmenu(itemName);
        hideSideBarInMobile();
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            const hamburgerMenuIcon = document.getElementById("hamburger-menu-icon");
            if (
                showSideBar &&
                sidebarRef.current &&
                !sidebarRef.current.contains(e.target) &&
                !(hamburgerMenuIcon && hamburgerMenuIcon.contains(e.target))
            ) {
                hideSideBarInMobile();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showSideBar]);

    return (
        <>
            <div className={showSideBar ? "sidebar active" : "sidebar"} ref={sidebarRef}>
                <div className='sidebar-content'>
                    {
                        showSideBar ? "" : <h4>Main</h4>
                    }

                    <div className="profile-and-notification-section">
                        <div className="notification-and-settings-box">
                            <div className="notification-box">
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
                            </div>
                            <div className="setting-box">
                                <div className="icon-circle">
                                    <img
                                        src="/Gallery/setting.png"
                                        alt="settings"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className=" profile user-profile-box">
                            <img
                                className="profile-img"
                                src="/Gallery/boy_avatar.png"
                                alt="profile"
                            />
                            <div className="profile-info">
                                <span className="name">Dr.Liam Michael</span>
                                <span className="role">Doctor</span>
                            </div>
                        </div>
                    </div>
                    <ul className="menu">
                        <li>
                            <div className="icon-box">
                                <img
                                    src="/Gallery/dashboard.png"
                                    alt=""
                                />
                            </div>
                            <span className="menu-text">Dashboard</span>
                        </li>
                        <li>
                            <div className="icon-box">
                                <img
                                    src="/Gallery/patient.png"
                                    alt=""
                                />
                            </div>
                            <span className="menu-text">Patients</span>
                        </li>
                        <li>
                            <div className="icon-box">
                                <img
                                    src="/Gallery/calendar.png"
                                    alt=""
                                />
                            </div>
                            <span className="menu-text">Doctor Schedule</span>
                        </li>
                        <li>
                            <div className="icon-box">
                                <img
                                    src="/Gallery/calendar.png"
                                    alt=""
                                />
                            </div>
                            <span className="menu-text">Appointments</span>
                        </li>
                        <li>
                            <div className="icon-box">
                                <img
                                    src="/Gallery/chat.png"
                                    alt=""
                                />
                            </div>
                            <span className="menu-text">Chat</span>
                        </li>
                        <li>
                            <div className="icon-box">
                                <img
                                    src="/Gallery/consultation.png"
                                    alt=""
                                />
                            </div>
                            <span className="menu-text">Consultation</span>
                        </li>
                        <li className='wallet-li'>
                            <div className='wallet'>
                                <div className='icon-box'>
                                    <img src="/Gallery/wallet.png" alt="" />
                                </div>
                                <span className='menu-text'>Wallet</span>
                                <img src="/Gallery/right-arrow.png" alt="" className='right-icon' />
                            </div>
                        </li>
                        <li onClick={() => { setShowAffiliateDropDown(!showAffiliateDropDown); setActiveSubmenu(""); }} className='affiliate-li'>
                            <div className='affiliate'>
                                <div className='icon-box'>
                                    <img src="/Gallery/wallet.png" alt="" />
                                </div>
                                <span className={showAffiliateDropDown ? "menu-text active" : "menu-text"}>Affiliate</span>
                                <img src="/Gallery/right-arrow.png" alt="" className={showAffiliateDropDown ? "right-icon active" : "right-icon"} />
                            </div>
                            <ul className={showAffiliateDropDown ? "submenu active" : "submenu"}>
                                <li
                                    className={activeSubmenu === "Dashboard" ? "active" : ""}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleSubmenuClick("Dashboard");
                                        navigate("/affiliate/dashboard");
                                    }}
                                >
                                    Dashboard
                                </li>
                                <li
                                    className={activeSubmenu === "Referral Tool" ? "active" : ""}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleSubmenuClick("Referral Tool");
                                        navigate("/affiliate/referal-tool");
                                    }}
                                >
                                    Referral Tool
                                </li>
                                <li
                                    className={activeSubmenu === "Earning History" ? "active" : ""}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleSubmenuClick("Earning History");
                                        navigate("/affiliate/earning-history");
                                    }}
                                >
                                    Earning History
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
