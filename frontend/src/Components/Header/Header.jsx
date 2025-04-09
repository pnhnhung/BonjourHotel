import React, { useEffect, useState } from 'react';
import './Header.css'
import logo from '../Assets/logo.png';
import profile from '../Assets/profile.png';
import avatar from '../Assets/avt-customer.jpg';
import vietnamFlag from '../Assets/vietnam-flag.png';
import { Link } from 'react-router-dom';

const Header = () => {
    const [activeLink, setActiveLink] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Kiểm tra trạng thái đăng nhập

    useEffect(() => {
        const loggedInStatus = localStorage.getItem('loggedIn') === 'true';
        setIsLoggedIn(loggedInStatus);
    }, []);

    const handleLinkClick = (link) => {
        setActiveLink(link);
        if (link === 'room') {
            setIsDropdownOpen(!isDropdownOpen);
        } else {
            setIsDropdownOpen(false);
        }
    };

    return (
        <header>
            <div className="logo">
                <img src={logo} alt="Bonjour Hotel Logo" />
            </div>
            <div className="nav-profile">
                <nav>
                    <ul>
                        <li>
                            <Link
                                to="/"
                                className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
                                onClick={() => handleLinkClick('home')}
                            >
                                TRANG CHỦ
                            </Link>
                        </li>
                        <li className="dropdown">
                            <Link
                                href="#"
                                className={`nav-link ${activeLink === 'room' ? 'active' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleLinkClick('room');
                                }}
                            >
                                PHÒNG
                            </Link>
                            {isDropdownOpen && (
                                <ul className="dropdown-menu">
                                    <li><Link to="/chi-nhanh-da-nang" onClick={() => {
                                        setActiveLink('room');
                                        setIsDropdownOpen(false);
                                    }}>Đà Nẵng</Link>
                                    </li>
                                    <li><Link to="/chi-nhanh-nha-trang" onClick={() => {
                                        setActiveLink('room');
                                        setIsDropdownOpen(false);
                                    }}>Nha Trang</Link>
                                    </li>
                                    <li><Link to="/chi-nhanh-phu-yen" onClick={() => {
                                        setActiveLink('room');
                                        setIsDropdownOpen(false);
                                    }}>Phú Yên</Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <Link
                                to="/dich-vu" // Thay đổi link cho dịch vụ nếu cần
                                className={`nav-link ${activeLink === 'service' ? 'active' : ''}`}
                                onClick={() => handleLinkClick('service')}
                            >DỊCH VỤ
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="flag">
                    <img src={vietnamFlag} alt="Vietnam Flag" />
                </div>
                <div className="profile">
                    {isLoggedIn ? (
                        <Link to="/thong-tin-ca-nhan">
                            <img src={avatar} alt="Profile" />
                        </Link>  // Hiển thị profile khi đã đăng nhập
                    ) : (
                        <div className='btn-dangnhap'>
                            <Link to="/login">
                                <button>ĐĂNG NHẬP</button>
                            </Link>
                        </div>  // Hiển thị "Đăng nhập" khi chưa đăng nhập
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
