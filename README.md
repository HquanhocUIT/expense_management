# 💸 Expense Management - Ứng dụng Quản lý Chi tiêu bằng ReactJS

Ứng dụng đơn giản giúp bạn **thêm, chỉnh sửa, xóa và tính tổng chi tiêu cá nhân**, được xây dựng bằng ReactJS. Dữ liệu được lưu bằng **localStorage**, đảm bảo không mất khi reload trang.

---

## 1. TÍNH NĂNG CHÍNH

- Thêm khoản chi tiêu mới (tên, số tiền, ngày)
- Hiển thị danh sách các khoản đã chi
- Ngày chi (tùy chọn, mặc định là hôm nay)
- Sửa và xóa khoản chi
- Tính tổng chi tiêu
- Lưu dữ liệu vào `localStorage` để không mất khi reload
- Giao diện gồm 3 phần:
   + Expense Info
   + Expense List
   + Total Expense

---

## 2. CẤU TRÚC THƯ MỤC CHÍNH

src/
├── components/
│ ├── ExpenseForm.jsx
│ ├── ExpenseList.jsx
│ └── TotalExpense.jsx
├── App.jsx
├── App.css


---

## 3. CÁCH CHẠY PROJECT

# Clone project về máy
git clone https://github.com/HquanhocUIT/expense_management.git

# Di chuyển vào thư mục 
cd expense_management

# Cài đặt dependencies cần thiết
npm install

# Khởi chạy server phát triển (dev server)
npm run dev
