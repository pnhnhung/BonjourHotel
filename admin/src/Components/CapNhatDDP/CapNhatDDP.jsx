import React, { useState } from 'react'
import './CapNhatDDP.css'
import icondelete from '../Assets/icon-delete.png'

const CapNhatDDP = ({ closePopupUpdate }) => {

  const [roomRows, setRoomRows] = useState([
    { id: 'P001', name: 'Standard Double', price: '5.499.000', total: '5.499.000' },
  ]);

  const [serviceRows, setServiceRows] = useState([
    { id: 'DV001', name: 'Hồ bơi vô cực', price: '100.000' },
  ]);

  const [customerRows, setCustomerRows] = useState([
    { id: 'KH001', name: 'Nguyễn Văn A', roombooking: 'P001' },
  ]);

  // States for showing modals
  const [showRoomModal, setShowRoomModal] = useState(false);
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [showCustomerModal, setShowCustomerModal] = useState(false);

  // Available items
  const [availableRooms, setAvailableRooms] = useState([
    { id: 'P002', name: 'Deluxe Room', price: '7.500.000' },
    { id: 'P003', name: 'Suite Room', price: '10.000.000', },
  ]);

  const [availableServices, setAvailableServices] = useState([
    { id: 'DV002', name: 'Spa', price: '200.000' },
    { id: 'DV003', name: 'Gym', price: '150.000' },
  ]);

  const [availableCustomers, setAvailableCustomers] = useState([
    { id: 'KH002', name: 'Trần Thị B', roombooking: 'P001' },
    { id: 'KH003', name: 'Lê Văn C', roombooking: 'P002' },
  ]);

  const handleAddRoom = (room) => {
    setRoomRows(prevRows => [...prevRows, { ...room, total: room.price }]);
    setAvailableRooms(prevRooms => prevRooms.filter(r => r.id !== room.id));
  };

  const handleAddService = (service) => {
    setServiceRows(prevRows => [...prevRows, { ...service }]);
    setAvailableServices(prevServices => prevServices.filter(s => s.id !== service.id));
  };

  const handleAddCustomer = (customer) => {
    setCustomerRows(prevRows => [...prevRows, { ...customer }]);
    setAvailableCustomers(prevCustomers => prevCustomers.filter(c => c.id !== customer.id));
  };

  const handleCloseRoomModal = () => setShowRoomModal(false);
  const handleCloseServiceModal = () => setShowServiceModal(false);
  const handleCloseCustomerModal = () => setShowCustomerModal(false);

  const handleDeleteRow = (itemId, itemType, setRows, setAvailableItems) => {
    // Hiển thị thông báo xác nhận
    const confirmed = window.confirm("Bạn có chắc chắn muốn xoá dòng này?");
    if (confirmed) {
      // Xoá dòng dữ liệu khỏi danh sách tương ứng (rooms, services, customers)
      setRows(prevRows => prevRows.filter(row => row.id !== itemId));

      // Tìm và thêm lại vào danh sách có sẵn nếu cần thiết
      const deletedItem = itemType.find(row => row.id === itemId);
      setAvailableItems(prevItems => [
        ...prevItems,
        { id: deletedItem.id, name: deletedItem.name, price: deletedItem.price },
      ]);
    }
  };

  // Hàm xoá dòng phòng
  const handleDeleteRoom = (roomId) => {
    handleDeleteRow(roomId, roomRows, setRoomRows, setAvailableRooms);
  };

  // Hàm xoá dòng dịch vụ
  const handleDeleteService = (serviceId) => {
    handleDeleteRow(serviceId, serviceRows, setServiceRows, setAvailableServices);
  };

  // Hàm xoá dòng khách hàng
  const handleDeleteCustomer = (customerId) => {
    handleDeleteRow(customerId, customerRows, setCustomerRows, setAvailableCustomers);
  };

  // Calculate grand total
  const calculateGrandTotal = () => {
    const roomTotal = roomRows.reduce((sum, row) => {
      const totalValue = parseFloat(row.total.replace(/\./g, '').replace(',', '.')) || 0;
      return sum + totalValue;
    }, 0);

    const serviceTotal = serviceRows.reduce((sum, row) => {
      const priceValue = parseFloat(row.price.replace(/\./g, '').replace(',', '.')) || 0;
      return sum + priceValue;
    }, 0);

    return (roomTotal + serviceTotal).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  };

  return (
    <div className='capnhat-ddp'>
      <div className="container-capnhat-ddp">
        <h2>Cập nhật đơn đặt phòng</h2>
        <div className="form-container-capnhat-ddp">

          <div className="form-section-capnhat-ddp">
            <div className="form-group-capnhat-ddp">
              <label htmlFor="ma-ddp">
                Mã DDP:<span>*</span>
              </label>
              <input type="text" id='ma-ddp' name='ma-ddp' required />
            </div>
            <div className="form-group-capnhat-ddp">
              <label htmlFor="ngay-dat-phong">Ngày đặt phòng:</label>
              <input type="date" id="ngay-dat-phong" name="ngay-dat-phong" />
            </div>
            <div className="form-group-capnhat-ddp">
              <label htmlFor="so-dem-o">Số đêm ở:</label>
              <input type="text" id="so-dem-o" name="so-dem-o" />
            </div>
          </div>

          <div className="form-section-capnhat-ddp">
            <div className="form-group-capnhat-ddp">
              <label htmlFor="ten-kh">
                Tên KH:<span>*</span>
              </label>
              <input type="text" id='ten-kh' name='ten-kh' required />
            </div>
            <div className="form-group-capnhat-ddp">
              <label htmlFor="ngay-nhan-phong">Ngày nhận phòng:</label>
              <input type="date" id="ngay-nhan-phong" name="ngay-nhan-phong" />
            </div>
            <div className="form-group-capnhat-ddp">
              <label htmlFor="ngay-tra-phong-thuc">Ngày trả phòng thực tế:</label>
              <input type="date" id="ngay-tra-phong-thuc" name="ngay-tra-phong-thuc" />
            </div>
          </div>

          <div className="form-section-capnhat-ddp">
            <div className="form-group-capnhat-ddp">
              <label htmlFor="sdt-kh">
                Số điện thoại:<span>*</span>
              </label>
              <input type="text" id='sdt-kh' name='sdt-kh' required />
            </div>

            <div className="form-group-capnhat-ddp">
              <label htmlFor="ngay-tra-phong">Ngày trả phòng:</label>
              <input type="date" id="ngay-tra-phong" name="ngay-tra-phong" />
            </div>

            <div className="form-group-capnhat-phong">
              <label htmlFor="trang-thai-ddp">Trạng thái:</label>
              <select name="trang-thai-ddp" id="trang-thai-ddp">
                <option value="Đã đặt phòng">Đã đặt phòng</option>
                <option value="Đã thanh toán">Đã thanh toán</option>
                <option value="Đã nhận phòng">Đã nhận phòng</option>
                <option value="Đã trả phòng">Đã trả phòng</option>
              </select>
            </div>
          </div>
        </div>

        <div className='danhsach-phong'>
          <div className="header-dachsach-phong">
            <h3>Danh sách phòng</h3>
            <button className='btn-capnhat-phong-vao-ddp' onClick={() => setShowRoomModal(true)}>Thêm phòng</button>
          </div>
          <div className="table-container-capnhatddp">
            <table>
              <thead>
                <tr>
                  <th className='stt'>STT</th>
                  <th>Mã phòng</th>
                  <th>Tên phòng</th>
                  <th>Giá</th>
                  <th>Thành tiền</th>
                  <th className='icon-delete'></th>
                </tr>
              </thead>
              <tbody>
                {roomRows.map((row, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td> {/* Số thứ tự tự tăng */}
                    <td>{row.id}</td>
                    <td>{row.name}</td>
                    <td>{row.price}</td>
                    {/* <td>{row.quantity}</td> */}
                    {/* <td>
                                            <input
                                                type="number"
                                                value={row.quantity}
                                                min="1" // Giá trị tối thiểu của số lượng là 1
                                                onChange={(e) => handleQuantityChange(e, row.id)} // Gọi hàm khi giá trị thay đổi
                                            />
                                        </td> */}
                    <td>{row.total}</td>
                    <td>
                      <img
                        src={icondelete}
                        alt="Delete"
                        onClick={() => handleDeleteRoom(row.id)} // Gọi hàm xoá khi nhấn icon delete
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal danh sách phòng */}
        {showRoomModal && (
          <div className="room-modal">
            <div className="room-modal-content">
              <div className="header-room-modal-content">
                <h3>Chọn phòng</h3>
                <button onClick={handleCloseRoomModal}>Đóng</button>
              </div>
              <div className="available-rooms">
                <ul>
                  {availableRooms.map((room) => (
                    <li key={room.id}>
                      <span>{room.name}</span>
                      <span>{room.price}</span>
                      <button className='btn-add-room' onClick={() => handleAddRoom(room)}>Thêm</button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        <div className='danhsach-dichvu'>
          <div className="header-danhsach-dichvu">
            <h3>Danh sách dịch vụ</h3>
            <button onClick={() => setShowServiceModal(true)}>Thêm dịch vụ</button>
          </div>
          <div className="table-container-capnhatddp">
            <table>
              <thead>
                <tr>
                  <th className='stt'>STT</th>
                  <th>Mã dịch vụ</th>
                  <th>Tên dịch vụ</th>
                  <th>Giá</th>
                  <th className='icon-delete'></th>
                </tr>
              </thead>
              <tbody>
                {serviceRows.map((row, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td> {/* Số thứ tự tự tăng */}
                    <td>{row.id}</td>
                    <td>{row.name}</td>
                    <td>{row.price}</td>
                    <td>
                      <img
                        src={icondelete}
                        alt="Delete"
                        onClick={() => handleDeleteService(row.id)} // Gọi hàm xoá khi nhấn icon delete
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Service Modal */}
        {showServiceModal && (
          <div className="service-modal">
            <div className="service-modal-content">
              <div className="header-service-modal-content">
                <h3>Chọn dịch vụ</h3>
                <button onClick={handleCloseServiceModal}>Đóng</button>
              </div>
              <div className="available-services">
                <ul>
                  {availableServices.map((service) => (
                    <li key={service.id}>
                      <span>{service.name}</span>
                      <span>{service.price}</span>
                      <button className='btn-add-service' onClick={() => handleAddService(service)}>Thêm</button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        <div className="danhsach-nguoithue">
          <div className="header-danhsach-nguoithue">
            <h3>Danh sách người thuê</h3>
            <button onClick={() => setShowCustomerModal(true)}>Thêm người thuê</button>
          </div>
          <div className="table-container-capnhatddp">
            <table>
              <thead>
                <tr>
                  <th className='stt'>STT</th>
                  <th>Họ và tên</th>
                  <th>Phòng thuê</th>
                  <th className='icon-delete'></th>
                </tr>
              </thead>
              <tbody>
                {customerRows.map((row, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td> {/* Số thứ tự tự tăng */}
                    <td>{row.name}</td>
                    <td>{row.roombooking}</td>
                    {/* <td>{row.quantity}</td> */}
                    <td>
                      <img
                        src={icondelete}
                        alt="Delete"
                        onClick={() => handleDeleteCustomer(row.id)} // Gọi hàm xoá khi nhấn icon delete
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Customer Modal */}
        {showCustomerModal && (
          <div className="customer-modal">
            <div className="customer-modal-content">
              <div className="header-customer-modal-content">
                <h3>Chọn người thuê</h3>
                <button onClick={handleCloseCustomerModal}>Đóng</button>
              </div>
              <div className="available-customers">
                <ul>
                  {availableCustomers.map((customer) => (
                    <li key={customer.id}>
                      <span>{customer.name}</span>
                      {/* <span>{customer.quantity}</span> */}
                      <button className='btn-add-customer' onClick={() => handleAddCustomer(customer)}>Thêm</button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        <div className="total-ddp">
          <p><span>Tổng cộng:</span> {calculateGrandTotal()}</p>
        </div>

        <div className="upload-action">
          <div className='btn-action-capnhat-ddp'>
            <button className='btn-popup-update'>Cập nhật</button>
            <button className='btn-popup-back' onClick={closePopupUpdate}>Quay lại</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CapNhatDDP
