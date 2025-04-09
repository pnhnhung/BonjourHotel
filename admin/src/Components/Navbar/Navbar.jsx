import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { FaHotel } from "react-icons/fa6";
import { MdRoomService } from "react-icons/md";
import { CgMenuLeftAlt } from "react-icons/cg";
import { IoBed } from "react-icons/io5";
import { FaClipboardList } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { MdEmojiPeople } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";

const Navbar = ({show}) => {
  return (
    <div className={show ? 'navbar active' : 'navbar'}>
      <ul>
        <li><NavLink to="/quan-ly-khach-san"><FaHotel />Quản lý khách sạn</NavLink></li>
      </ul>
      <ul>
        <li><NavLink to="/quan-ly-dich-vu"><MdRoomService />Quản lý dịch vụ</NavLink></li>
      </ul>
      <ul>
        <li><NavLink to="/quan-ly-loai-phong"><CgMenuLeftAlt />Quản lý loại phòng</NavLink></li>
      </ul>
      <ul>
        <li><NavLink to="/quan-ly-phong"><IoBed />Quản lý phòng</NavLink></li>
      </ul>
      <ul>
        <li><NavLink to="/quan-ly-don-dat-phong"><FaClipboardList />Quản lý đơn đặt phòng</NavLink></li>
      </ul>
      <ul>
        <li><NavLink to="/quan-ly-nhan-vien"><IoIosPeople />Quản lý nhân viên</NavLink></li>
      </ul>
      <ul>
        <li><NavLink to="/quan-ly-khach-hang"><MdEmojiPeople />Quản lý khách hàng</NavLink></li>
      </ul>
      <ul>
        <li><NavLink to="/quan-ly-tai-khoan"><MdManageAccounts />Quản lý tài khoản</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar
