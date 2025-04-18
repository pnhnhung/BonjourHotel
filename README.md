# BonjourHotel 🏨

Một ứng dụng web quản lý khách sạn đơn giản, cho phép người dùng tìm kiếm, đặt phòng, thanh toán và quản lý thông tin khách hàng.

🔗 Link Figma thiết kế giao diện:
https://www.figma.com/design/G1zYZGLhsJffcx8An0AzpV/CNPM-N%C3%A2ng-Cao?t=NmjQdOSV3wLxqnrU-1

## 🚀 Tính năng chính
- Đặt phòng khách sạn trực tuyến
- Thanh toán qua VNPay
- Quản lý thông tin khách hàng & phòng
- Phân quyền người dùng (Admin - User)
- Chat thời gian thực (sử dụng Pusher)
- Giao diện thân thiện với người dùng

## 🛠️ Công nghệ sử dụng
- **Frontend**: React.js, TailwindCSS, MUI
- **Backend**: Spring Boot, Node.js
- **Khác**: Cloudinary, VNPay, Pusher, Java Mail, Git

## 📦 Cấu trúc thư mục
BonjourHotel/
├── frontend/       # Giao diện người dùng
├── admin/          # Trang quản trị
├── api/            # API backend
├── node_modules/
├── package.json
├── package-lock.json

## 👥 Thành viên thực hiện

| Họ và Tên               | Vai trò             |
|-------------------------|----------------------|
| Phạm Nguyễn Hồng Nhung  | Lập trình frontend, Thiết kế giao diện, Kiểm thử phần mềm |
| Dương Duy Kha           | Lập trình backend, quản lý cơ sở dữ liệu, tích hợp API |
| Lê Nguyễn Trúc Quỳnh    | Lập trình frontend, Thiết kế giao diện, Kiểm thử phần mềm |
| Đặng Thị Kim Ngân       | Lập trình backend, quản lý cơ sở dữ liệu, tích hợp API |

## ⚙️ Cách chạy project
```bash
# Cài đặt dependencies
npm install

# Chạy frontend
cd frontend
npm start

# Backend chạy bằng Spring Boot (qua IDE hoặc terminal)
./mvnw spring-boot:run
