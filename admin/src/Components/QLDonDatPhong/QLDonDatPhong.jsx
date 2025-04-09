import React from 'react'
import './QLDonDatPhong.css'
import iconsearch from '../Assets/icon-search.png'

const QLDonDatPhong = ({ openPopupCreate, openPopupUpdate }) => {
  return (
    <div className='ql-dondatphong'>
      <div className="container-ql-dondatphong">
        <div className="option-ql-dondatphong">
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
          <button className="btn-create" onClick={openPopupCreate}>Thêm đơn đặt phòng</button>
        </div>
        <div className="content-table-ql-dondatphong">
          <div className="table-responsive-ql-dondatphong">
            <table>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Mã DDP</th>
                  <th>Tên KH</th>
                  <th>Ngày đặt phòng</th>
                  <th>Trạng thái</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>DDP012</td>
                  <td>Nguyễn Hoàng Long</td>
                  <td>19/10/2024</td>
                  <td>Đã đặt</td>
                  <td className='btn-action'>
                    <button class="btn-update" onClick={openPopupUpdate}>Cập nhật</button>
                    <button class="btn-delete">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>DDP012</td>
                  <td>Nguyễn Hoàng Long</td>
                  <td>19/10/2024</td>
                  <td>Đã đặt</td>
                  <td className='btn-action'>
                    <button class="btn-update" onClick={openPopupUpdate}>Cập nhật</button>
                    <button class="btn-delete">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>DDP012</td>
                  <td>Nguyễn Hoàng Long</td>
                  <td>19/10/2024</td>
                  <td>Đã đặt</td>
                  <td className='btn-action'>
                    <button class="btn-update" onClick={openPopupUpdate}>Cập nhật</button>
                    <button class="btn-delete">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>DDP012</td>
                  <td>Nguyễn Hoàng Long</td>
                  <td>19/10/2024</td>
                  <td>Đã đặt</td>
                  <td className='btn-action'>
                    <button class="btn-update" onClick={openPopupUpdate}>Cập nhật</button>
                    <button class="btn-delete">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>DDP012</td>
                  <td>Nguyễn Hoàng Long</td>
                  <td>19/10/2024</td>
                  <td>Đã đặt</td>
                  <td className='btn-action'>
                    <button class="btn-update" onClick={openPopupUpdate}>Cập nhật</button>
                    <button class="btn-delete">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>DDP012</td>
                  <td>Nguyễn Hoàng Long</td>
                  <td>19/10/2024</td>
                  <td>Đã đặt</td>
                  <td className='btn-action'>
                    <button class="btn-update" onClick={openPopupUpdate}>Cập nhật</button>
                    <button class="btn-delete">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>DDP012</td>
                  <td>Nguyễn Hoàng Long</td>
                  <td>19/10/2024</td>
                  <td>Đã đặt</td>
                  <td className='btn-action'>
                    <button class="btn-update" onClick={openPopupUpdate}>Cập nhật</button>
                    <button class="btn-delete">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>DDP012</td>
                  <td>Nguyễn Hoàng Long</td>
                  <td>19/10/2024</td>
                  <td>Đã đặt</td>
                  <td className='btn-action'>
                    <button class="btn-update" onClick={openPopupUpdate}>Cập nhật</button>
                    <button class="btn-delete">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>DDP012</td>
                  <td>Nguyễn Hoàng Long</td>
                  <td>19/10/2024</td>
                  <td>Đã đặt</td>
                  <td className='btn-action'>
                    <button class="btn-update" onClick={openPopupUpdate}>Cập nhật</button>
                    <button class="btn-delete">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>DDP012</td>
                  <td>Nguyễn Hoàng Long</td>
                  <td>19/10/2024</td>
                  <td>Đã đặt</td>
                  <td className='btn-action'>
                    <button class="btn-update" onClick={openPopupUpdate}>Cập nhật</button>
                    <button class="btn-delete">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>DDP012</td>
                  <td>Nguyễn Hoàng Long</td>
                  <td>19/10/2024</td>
                  <td>Đã đặt</td>
                  <td className='btn-action'>
                    <button class="btn-update" onClick={openPopupUpdate}>Cập nhật</button>
                    <button class="btn-delete">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>DDP012</td>
                  <td>Nguyễn Hoàng Long</td>
                  <td>19/10/2024</td>
                  <td>Đã đặt</td>
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

export default QLDonDatPhong
