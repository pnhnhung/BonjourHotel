import React from 'react'
import './QLKhachHang.css'
import iconsearch from '../Assets/icon-search.png'

const QLKhachHang = ({ openPopupCreate, openPopupUpdate }) => {
  return (
    <div className='ql-khachhang'>
      <div className="container-ql-khachhang">
        <div className="option-ql-khachhang">
          <div className="search">
            <img src={iconsearch} alt="" />
            <input type="text" placeholder='Tìm kiếm...' />
          </div>
          <button className="btn-create" onClick={openPopupCreate}>Thêm khách hàng</button>
        </div>
        <div className="content-table-ql-khachhang">
          <div className="table-responsive-ql-khachhang">
            <table>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Mã KH</th>
                  <th>Tên KH</th>
                  <th>Số điện thoại</th>
                  <th>Email</th>
                  <th>Giới tính</th>
                  <th>Ngày sinh</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>KH001</td>
                  <td>Phạm Anh Duy</td>
                  <td>0192837465</td>
                  <td>anhduypham@gmail.com</td>
                  <td>Nam</td>
                  <td>13/01/1992</td>
                  <td className='btn-action'>
                    <button class="btn-update" onClick={openPopupUpdate}>Cập nhật</button>
                    <button class="btn-delete">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>KH002</td>
                  <td>Trần Huyền My</td>
                  <td>0945678321</td>
                  <td>huyenmee00@gmail.com</td>
                  <td>Nữ</td>
                  <td>23/03/2000</td>
                  <td className='btn-action'>
                    <button class="btn-update" onClick={openPopupUpdate}>Cập nhật</button>
                    <button class="btn-delete">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>KH003</td>
                  <td>Lê Trung Thành</td>
                  <td>0703987654</td>
                  <td>leetrungthanh@gmail.com</td>
                  <td>Nam</td>
                  <td>13/10/1997</td>
                  <td className='btn-action'>
                    <button class="btn-update" onClick={openPopupUpdate}>Cập nhật</button>
                    <button class="btn-delete">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>KH004</td>
                  <td>Nguyễn Minh Hằng</td>
                  <td>0768912345</td>
                  <td>minminhang12@gmail.com</td>
                  <td>Nữ</td>
                  <td>07/12/1988</td>
                  <td className='btn-action'>
                    <button class="btn-update" onClick={openPopupUpdate}>Cập nhật</button>
                    <button class="btn-delete">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>KH005</td>
                  <td>Nguyễn Thảo Linh</td>
                  <td>0749956712</td>
                  <td>tlinhnguyen@gmail.com</td>
                  <td>Nữ</td>
                  <td>07/10/2000</td>
                  <td className='btn-action'>
                    <button class="btn-update" onClick={openPopupUpdate}>Cập nhật</button>
                    <button class="btn-delete">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>KH006</td>
                  <td>Bùi Anh Tú</td>
                  <td>0543216780</td>
                  <td>anhtubuii93@gmail.com</td>
                  <td>Nam</td>
                  <td>03/10/1993</td>
                  <td className='btn-action'>
                    <button class="btn-update" onClick={openPopupUpdate}>Cập nhật</button>
                    <button class="btn-delete">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>KH007</td>
                  <td>Lê Thượng Long</td>
                  <td>0838612345</td>
                  <td>thuonglong98@gmail.com</td>
                  <td>Nam</td>
                  <td>07/10/1998</td>
                  <td className='btn-action'>
                    <button class="btn-update" onClick={openPopupUpdate}>Cập nhật</button>
                    <button class="btn-delete">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>KH008</td>
                  <td>Nguyễn Lê Minh Huy</td>
                  <td>0954637281</td>
                  <td>huynguyen04@gmail.com</td>
                  <td>Nam</td>
                  <td>04/12/1996</td>
                  <td className='btn-action'>
                    <button class="btn-update" onClick={openPopupUpdate}>Cập nhật</button>
                    <button class="btn-delete">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>KH009</td>
                  <td>Trần Thị Phương Thảo</td>
                  <td>0987162534</td>
                  <td>phuongthaoHz@gmail.com</td>
                  <td>Nữ</td>
                  <td>05/02/1999</td>
                  <td className='btn-action'>
                    <button class="btn-update" onClick={openPopupUpdate}>Cập nhật</button>
                    <button class="btn-delete">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>KH010</td>
                  <td>Nguyễn Hoàng Long</td>
                  <td>0951753842</td>
                  <td>hoanglongng@gmail.com</td>
                  <td>Nam</td>
                  <td>09/01/2001</td>
                  <td className='btn-action'>
                    <button class="btn-update" onClick={openPopupUpdate}>Cập nhật</button>
                    <button class="btn-delete">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>KH011</td>
                  <td>Trần Hải Đăng</td>
                  <td>0985274136</td>
                  <td>dangrangto@gmail.com</td>
                  <td>Nam</td>
                  <td>05/04/2002</td>
                  <td className='btn-action'>
                    <button class="btn-update" onClick={openPopupUpdate}>Cập nhật</button>
                    <button class="btn-delete">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>KH012</td>
                  <td>Nguyễn Thanh Hưng</td>
                  <td>0914362587</td>
                  <td>ngthanhhung@gmail.com</td>
                  <td>Nam</td>
                  <td>30/10/1991</td>
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

export default QLKhachHang
