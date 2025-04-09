import React from 'react'
import './QLLoaiPhong.css'
import iconsearch from '../Assets/icon-search.png'

const QLLoaiPhong = ({ openPopupCreate, openPopupUpdate }) => {
  return (
    <div className='ql-loaiphong'>
      <div className="container-ql-loaiphong">
        <div className="option-ql-loaiphong">
          <div className="search">
            <img src={iconsearch} alt="" />
            <input type="text" placeholder='Tìm kiếm...' />
          </div>

          <button className="btn-create" onClick={openPopupCreate}>Thêm loại phòng</button>
        </div>
        <div className="content-table-ql-loaiphong">
          <div className="table-responsive-ql-loaiphong">
            <table>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Mã loại phòng</th>
                  <th>Tên loại phòng</th>
                  <th>Số lượng</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>LP001</td>
                  <td>Phòng đơn</td>
                  <td>60</td>
                  <td className='btn-action'>
                    <button class="btn-update" onClick={openPopupUpdate}>Cập nhật</button>
                    <button class="btn-delete">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>LP002</td>
                  <td>Phòng đôi</td>
                  <td>60</td>
                  <td className='btn-action'>
                    <button class="btn-update" onClick={openPopupUpdate}>Cập nhật</button>
                    <button class="btn-delete">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>LP003</td>
                  <td>Phòng gia đình</td>
                  <td>42</td>
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

export default QLLoaiPhong
