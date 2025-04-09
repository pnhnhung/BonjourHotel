import React from 'react'
import './QLDichVu.css'
import iconsearch from '../Assets/icon-search.png'

const QLDichVu = ({ openPopupCreate, openPopupUpdate }) => {
  return (
    <div className='ql-dichvu'>
      <div className="container-ql-dichvu">
        <div className="option-ql-dichvu">
          <div className="search">
            <img src={iconsearch} alt="" />
            <input type="text" placeholder='Tìm kiếm...' />
          </div>

          <button className="btn-create" onClick={openPopupCreate}>Thêm dịch vụ</button>
        </div>
        <div className="content-table-ql-dichvu">
          <div className="table-responsive-ql-dichvu">
            <table>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Mã dịch vụ</th>
                  <th>Tên dịch vụ</th>
                  <th>Giá</th>
                  {/* <th>Mô tả</th> */}
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>DV001</td>
                  <td>Hồ bơi vô cực</td>
                  <td>100.000</td>
                  {/* <td>Bể bơi vô cực với hàng dừa soi mình nơi mặt nước cùng khu vườn xanh ngát bao quanh sẽ cho bạn cảm giác như được bơi trong lòng khu rừng nhiệt đới thu nhỏ cùng khung cảnh đại dương bao la.</td> */}
                  <td className='btn-action'>
                    <button class="btn-update" onClick={openPopupUpdate}>Cập nhật</button>
                    <button class="btn-delete">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>DV002</td>
                  <td>Đưa đón sân bay</td>
                  <td>200.000</td>
                  {/* <td>Khách hàng sẽ được đón và tiễn tận nơi bởi đội ngũ lái xe chuyên nghiệp, giúp tiết kiệm thời gian và giảm bớt lo lắng về việc di chuyển. Dịch vụ này thường được đặt trước, đảm bảo khách có thể bắt đầu và kết thúc chuyến đi một cách thoải mái và suôn sẻ.</td> */}
                  <td className='btn-action'>
                    <button class="btn-update" onClick={openPopupUpdate}>Cập nhật</button>
                    <button class="btn-delete">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>DV003</td>
                  <td>Giặt là quần áo</td>
                  <td>350.000</td>
                  {/* <td>Khách hàng có thể thoải mái lựa chọn các hình thức giặt ủi, giặt hấp và giặt khô cao cấp phù hợp theo nhu cầu của mình. Bộ phận giặt là của khách sạn sẽ thực hiện theo quy trình chuyên nghiệp từ khâu nhận đồ đến giao đồ, để đảm bảo sự hài lòng của khách hàng.</td> */}
                  <td className='btn-action'>
                    <button class="btn-update" onClick={openPopupUpdate}>Cập nhật</button>
                    <button class="btn-delete">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>DV004</td>
                  <td>24/24</td>
                  <td>500.000</td>
                  {/* <td>Dễ dàng gọi món ăn từ thực đơn phong phú, bao gồm các món ăn địa phương và quốc tế, bất cứ lúc nào trong ngày hoặc đêm. Đội ngũ phục vụ chuyên nghiệp, mang đồ ăn đến tận phòng, đảm bảo chất lượng và sự tươi ngon.</td> */}
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

export default QLDichVu
