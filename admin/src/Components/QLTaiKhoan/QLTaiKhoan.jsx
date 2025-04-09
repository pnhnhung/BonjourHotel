import React from 'react'
import './QLTaiKhoan.css'
import iconsearch from '../Assets/icon-search.png'

const QLTaiKhoan = ({ openPopupCreate, openPopupUpdate }) => {
  return (
    <div className='ql-taikhoan'>
      <div className="container-ql-taikhoan">
        <div className="option-ql-taikhoan">
          <div className="search">
            <img src={iconsearch} alt="" />
            <input type="text" placeholder='Tìm kiếm...' />
          </div>
          <div>
            <label htmlFor="role">Vai trò:</label>
            <select id='role'>
              <option value="--Tất cả--">--Tất cả--</option>
              <option value="Admin">Admin</option>
              <option value="Nhân viên">Nhân viên</option>
              <option value="Khách hàng">Khách hàng</option>
            </select>
          </div>
          <button className="btn-create" onClick={openPopupCreate}>Thêm tài khoản</button>
        </div>
        <div className="content-table-ql-taikhoan">
          <div className="table-responsive-ql-taikhoan">
            <table>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tên đăng nhập</th>
                  <th>Tên người dùng</th>
                  <th>Vai trò</th>
                  <th>Trạng thái</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>user1</td>
                  <td>Nguyễn Thanh Tùng</td>
                  <td>Khách hàng</td>
                  <td>Đang hoạt động</td>
                  <td className='btn-action'>
                    <button class="btn-update" onClick={openPopupUpdate}>Cập nhật</button>
                    <button class="btn-delete">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>user1</td>
                  <td>Nguyễn Thanh Tùng</td>
                  <td>Khách hàng</td>
                  <td>Đang hoạt động</td>
                  <td className='btn-action'>
                    <button class="btn-update" onClick={openPopupUpdate}>Cập nhật</button>
                    <button class="btn-delete">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>user1</td>
                  <td>Nguyễn Thanh Tùng</td>
                  <td>Khách hàng</td>
                  <td>Đang hoạt động</td>
                  <td className='btn-action'>
                    <button class="btn-update" onClick={openPopupUpdate}>Cập nhật</button>
                    <button class="btn-delete">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>user1</td>
                  <td>Nguyễn Thanh Tùng</td>
                  <td>Khách hàng</td>
                  <td>Đang hoạt động</td>
                  <td className='btn-action'>
                    <button class="btn-update" onClick={openPopupUpdate}>Cập nhật</button>
                    <button class="btn-delete">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>user1</td>
                  <td>Nguyễn Thanh Tùng</td>
                  <td>Khách hàng</td>
                  <td>Đang hoạt động</td>
                  <td className='btn-action'>
                    <button class="btn-update" onClick={openPopupUpdate}>Cập nhật</button>
                    <button class="btn-delete">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>user1</td>
                  <td>Nguyễn Thanh Tùng</td>
                  <td>Khách hàng</td>
                  <td>Đang hoạt động</td>
                  <td className='btn-action'>
                    <button class="btn-update" onClick={openPopupUpdate}>Cập nhật</button>
                    <button class="btn-delete">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>user1</td>
                  <td>Nguyễn Thanh Tùng</td>
                  <td>Khách hàng</td>
                  <td>Đang hoạt động</td>
                  <td className='btn-action'>
                    <button class="btn-update" onClick={openPopupUpdate}>Cập nhật</button>
                    <button class="btn-delete">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>user1</td>
                  <td>Nguyễn Thanh Tùng</td>
                  <td>Khách hàng</td>
                  <td>Đang hoạt động</td>
                  <td className='btn-action'>
                    <button class="btn-update" onClick={openPopupUpdate}>Cập nhật</button>
                    <button class="btn-delete">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>user1</td>
                  <td>Nguyễn Thanh Tùng</td>
                  <td>Khách hàng</td>
                  <td>Đang hoạt động</td>
                  <td className='btn-action'>
                    <button class="btn-update" onClick={openPopupUpdate}>Cập nhật</button>
                    <button class="btn-delete">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>user1</td>
                  <td>Nguyễn Thanh Tùng</td>
                  <td>Khách hàng</td>
                  <td>Đang hoạt động</td>
                  <td className='btn-action'>
                    <button class="btn-update" onClick={openPopupUpdate}>Cập nhật</button>
                    <button class="btn-delete">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>user1</td>
                  <td>Nguyễn Thanh Tùng</td>
                  <td>Khách hàng</td>
                  <td>Đang hoạt động</td>
                  <td className='btn-action'>
                    <button class="btn-update" onClick={openPopupUpdate}>Cập nhật</button>
                    <button class="btn-delete">Xóa</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QLTaiKhoan
