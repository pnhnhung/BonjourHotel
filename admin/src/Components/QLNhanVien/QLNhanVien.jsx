import React from 'react'
import './QLNhanVien.css'
import iconsearch from '../Assets/icon-search.png'

const QLNhanVien = ({ openPopupCreate, openPopupUpdate }) => {
  return (
    <div className='ql-nhanvien'>
      <div className="container-ql-nhanvien">
        <div className="option-ql-nhanvien">
          <div className="search">
            <img src={iconsearch} alt="" />
            <input type="text" placeholder='Tìm kiếm...' />
          </div>
          <div>
            <label htmlFor="branch">Chi nhánh:</label>
            <select id='branch'>
              <option value="--Tất cả--">--Tất cả--</option>
              <option value="Đà Nẵng">Đà Nẵng</option>
              <option value="Nha Trang">Nha Trang</option>
              <option value="Phú Yên">Phú Yên</option>
            </select>
          </div>
          <button className="btn-create" onClick={openPopupCreate}>Thêm nhân viên</button>
        </div>
        <div className="content-table-ql-nhanvien">
          <div className="table-responsive-ql-nhanvien">
            <table>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Mã NV</th>
                  <th>Tên NV</th>
                  <th>Số điện thoại</th>
                  <th>Email</th>
                  <th>Giới tính</th>
                  <th>Ngày sinh</th>
                  <th>Địa chỉ</th>
                  <th>Ngày vào làm</th>
                  <th>Chi nhánh</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>NV001</td>
                  <td>Lê Thị Thu Diễm</td>
                  <td>0987612345</td>
                  <td>lttdiem98@gmail.com</td>
                  <td>Nữ</td>
                  <td>11/07/1998</td>
                  <td>Đồng Nai</td>
                  <td>13/06/2022</td>
                  <td>Nha Trang</td>
                  <td className='btn-action'>
                    <button class="btn-update" onClick={openPopupUpdate}>Cập nhật</button>
                    <button class="btn-delete">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>NV002</td>
                  <td>Trần Đăng Dương</td>
                  <td>0912345678</td>
                  <td>duongtran02@gmail.com</td>
                  <td>Nam</td>
                  <td>31/08/2000</td>
                  <td>Hải Dương</td>
                  <td>28/02/2023</td>
                  <td>Đà Nẵng</td>
                  <td className='btn-action'>
                    <button class="btn-update" onClick={openPopupUpdate}>Cập nhật</button>
                    <button class="btn-delete">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>NV003</td>
                  <td>Phạm Bảo Khang</td>
                  <td>0987654321</td>
                  <td>baokhangph@gmail.com</td>
                  <td>Nam</td>
                  <td>05/05/1999</td>
                  <td>Hồ Chí Minh</td>
                  <td>16/06/2022</td>
                  <td>Nha Trang</td>
                  <td className='btn-action'>
                    <button class="btn-update" onClick={openPopupUpdate}>Cập nhật</button>
                    <button class="btn-delete">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>NV004</td>
                  <td>Phạm Lưu Thùy Ngân</td>
                  <td>0912873465</td>
                  <td>nganthuy01gmail.com</td>
                  <td>Nữ</td>
                  <td>13/06/1988</td>
                  <td>Cần Thơ</td>
                  <td>30/07/2020</td>
                  <td>Phú Yên</td>
                  <td className='btn-action'>
                    <button class="btn-update" onClick={openPopupUpdate}>Cập nhật</button>
                    <button class="btn-delete">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>NV005</td>
                  <td>Phạm Anh Quân</td>
                  <td>0192837465</td>
                  <td>quanap@gmail.com</td>
                  <td>Nam</td>
                  <td>24/01/1997</td>
                  <td>Hà Nội</td>
                  <td>22/05/2021</td>
                  <td>Phú Yên</td>
                  <td className='btn-action'>
                    <button class="btn-update" onClick={openPopupUpdate}>Cập nhật</button>
                    <button class="btn-delete">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>NV006</td>
                  <td>Nguyễn Quang Anh</td>
                  <td>0123456789</td>
                  <td>anhnguyen18@gmail.com</td>
                  <td>Nam</td>
                  <td>18/03/2001</td>
                  <td>Thanh Hóa</td>
                  <td>07/08/2024</td>
                  <td>Nha Trang</td>
                  <td className='btn-action'>
                    <button class="btn-update" onClick={openPopupUpdate}>Cập nhật</button>
                    <button class="btn-delete">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>NV007</td>
                  <td>Đặng Thành An</td>
                  <td>0877123456</td>
                  <td>thanhandang@gmail.com</td>
                  <td>Nam</td>
                  <td>12/04/2001</td>
                  <td>Hồ Chí Minh</td>
                  <td>07/05/2023</td>
                  <td>Đà Nẵng</td>
                  <td className='btn-action'>
                    <button class="btn-update" onClick={openPopupUpdate}>Cập nhật</button>
                    <button class="btn-delete">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>NV008</td>
                  <td>Trần Phong Hòa</td>
                  <td>0823145769</td>
                  <td>phoatran@gmail.com</td>
                  <td>Nữ</td>
                  <td>06/03/1995</td>
                  <td>Hải Phòng</td>
                  <td>19/07/2021</td>
                  <td>Đà Nẵng</td>
                  <td className='btn-action'>
                    <button class="btn-update" onClick={openPopupUpdate}>Cập nhật</button>
                    <button class="btn-delete">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>NV009</td>
                  <td>Trần Minh Hiếu</td>
                  <td>0879651234</td>
                  <td>hieuminhtr99@gmail.com</td>
                  <td>Nam</td>
                  <td>28/09/1999</td>
                  <td>Hồ Chí Minh</td>
                  <td>15/03/2022</td>
                  <td>Phú Yên</td>
                  <td className='btn-action'>
                    <button class="btn-update" onClick={openPopupUpdate}>Cập nhật</button>
                    <button class="btn-delete">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>NV010</td>
                  <td>Nguyễn Trường Sinh</td>
                  <td>0729134568</td>
                  <td>nguyensinh@gmail.com</td>
                  <td>Nam</td>
                  <td>17/09/1991</td>
                  <td>Đồng Nai</td>
                  <td>27/08/2022</td>
                  <td>Đà Nẵng</td>
                  <td className='btn-action'>
                    <button class="btn-update" onClick={openPopupUpdate}>Cập nhật</button>
                    <button class="btn-delete">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>NV011</td>
                  <td>Lê Quang Hùng</td>
                  <td>0945127839</td>
                  <td>hunglee97@gmail.com</td>
                  <td>Nam</td>
                  <td>07/10/1997</td>
                  <td>Huế</td>
                  <td>01/11/2020</td>
                  <td>Nha Trang</td>
                  <td className='btn-action'>
                    <button class="btn-update" onClick={openPopupUpdate}>Cập nhật</button>
                    <button class="btn-delete">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>NV012</td>
                  <td>Hoàng Kim Long</td>
                  <td>0129834065</td>
                  <td>hoangklong@gmail.com</td>
                  <td>Nam</td>
                  <td>06/03/1994</td>
                  <td>Hà Nội</td>
                  <td>27/03/2019</td>
                  <td>Phú Yên</td>
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

export default QLNhanVien
