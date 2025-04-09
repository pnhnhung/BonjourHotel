import React from 'react'
import './QLPhong.css'
import iconsearch from '../Assets/icon-search.png'

const QLPhong = ({ openPopupCreate, openPopupUpdate }) => {
  return (
    <div className='ql-phong'>
      <div className="container-ql-phong">
        <div className="option-ql-phong">
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
          <button className="btn-create" onClick={openPopupCreate}>Thêm phòng</button>
        </div>
        <div className="content-table-ql-phong">
          <div className="table-responsive-ql-phong">
            <table>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Mã phòng</th>
                  <th>Tên phòng</th>
                  <th>Giá</th>
                  <th>Trạng thái</th>
                  <th>SL người</th>
                  <th>SL giường</th>
                  <th>SL phòng tắm</th>
                  <th>Chi nhánh</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>P001</td>
                  <td>Standard Double</td>
                  <td>5.499.000</td>
                  <td>Trống</td>
                  <td>02</td>
                  <td>01 đôi</td>
                  <td>01</td>
                  <td>Đà Nẵng</td>
                  <td className='btn-action'>
                    <button class="btn-update" onClick={openPopupUpdate}>Cập nhật</button>
                    <button class="btn-delete">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>P002</td>
                  <td>Twin Bed Suite</td>
                  <td>5.499.000</td>
                  <td>Đang thuê</td>
                  <td>02</td>
                  <td>01 đôi</td>
                  <td>01</td>
                  <td>Đà Nẵng</td>
                  <td className='btn-action'>
                    <button class="btn-update" onClick={openPopupUpdate}>Cập nhật</button>
                    <button class="btn-delete">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>P003</td>
                  <td>Junior</td>
                  <td>7.499.000</td>
                  <td>Đã đặt</td>
                  <td>04</td>
                  <td>02 đôi</td>
                  <td>02</td>
                  <td>Nha Trang</td>
                  <td className='btn-action'>
                    <button class="btn-update" onClick={openPopupUpdate}>Cập nhật</button>
                    <button class="btn-delete">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>P004</td>
                  <td>Family Suite</td>
                  <td>9.499.000</td>
                  <td>Trống</td>
                  <td>04</td>
                  <td>02 đôi</td>
                  <td>02</td>
                  <td>Nha Trang</td>
                  <td className='btn-action'>
                    <button class="btn-update" onClick={openPopupUpdate}>Cập nhật</button>
                    <button class="btn-delete">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>P005</td>
                  <td>Superior Twin</td>
                  <td>7.499.000</td>
                  <td>Đang thuê</td>
                  <td>04</td>
                  <td>02 đôi</td>
                  <td>01</td>
                  <td>Đà Nẵng</td>
                  <td className='btn-action'>
                    <button class="btn-update" onClick={openPopupUpdate}>Cập nhật</button>
                    <button class="btn-delete">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>P006</td>
                  <td>Deluxe Double</td>
                  <td>5.499.000</td>
                  <td>Đã đặt</td>
                  <td>02</td>
                  <td>01 đôi</td>
                  <td>01</td>
                  <td>Phú Yên</td>
                  <td className='btn-action'>
                    <button class="btn-update" onClick={openPopupUpdate}>Cập nhật</button>
                    <button class="btn-delete">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>P007</td>
                  <td>Standard Double</td>
                  <td>5.499.000</td>
                  <td>Trống</td>
                  <td>02</td>
                  <td>01 đôi</td>
                  <td>01</td>
                  <td>Phú Yên</td>
                  <td className='btn-action'>
                    <button class="btn-update" onClick={openPopupUpdate}>Cập nhật</button>
                    <button class="btn-delete">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>P008</td>
                  <td>Twin Bed Suite</td>
                  <td>5.499.000</td>
                  <td>Đã đặt</td>
                  <td>02</td>
                  <td>01 đôi</td>
                  <td>01</td>
                  <td>Nha Trang</td>
                  <td className='btn-action'>
                    <button class="btn-update" onClick={openPopupUpdate}>Cập nhật</button>
                    <button class="btn-delete">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>P009</td>
                  <td>Junior</td>
                  <td>7.499.000</td>
                  <td>Đã đặt</td>
                  <td>04</td>
                  <td>02 đôi</td>
                  <td>02</td>
                  <td>Nha Trang</td>
                  <td className='btn-action'>
                    <button class="btn-update" onClick={openPopupUpdate}>Cập nhật</button>
                    <button class="btn-delete">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>P010</td>
                  <td>Family Suite</td>
                  <td>9.499.000</td>
                  <td>Đang thuê</td>
                  <td>04</td>
                  <td>02 đôi</td>
                  <td>02</td>
                  <td>Đà Nẵng</td>
                  <td className='btn-action'>
                    <button class="btn-update" onClick={openPopupUpdate}>Cập nhật</button>
                    <button class="btn-delete">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>P011</td>
                  <td>Superior Twin</td>
                  <td>7.499.000</td>
                  <td>Đã đặt</td>
                  <td>04</td>
                  <td>02 đôi</td>
                  <td>01</td>
                  <td>Phú Yên</td>
                  <td className='btn-action'>
                    <button class="btn-update" onClick={openPopupUpdate}>Cập nhật</button>
                    <button class="btn-delete">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>P012</td>
                  <td>Deluxe Double</td>
                  <td>5.499.000</td>
                  <td>Đang thuê</td>
                  <td>02</td>
                  <td>01 đôi</td>
                  <td>01</td>
                  <td>Nha Trang</td>
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

export default QLPhong
