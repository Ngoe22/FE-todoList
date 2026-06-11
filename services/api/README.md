# API CRUD Service với Axios

## 📋 Cấu trúc dữ liệu

Projects (1)
├─ id  
├─ name  
├─ description  
└─ deadline: "2026-06-21"
Tickets (many)
├─ id
├─ projectId
├─ title
├─ description
└─ deadline: "2026-06-21"
Tasks (many)
├─ id
├─ projectId
├─ ticketId
├─ title
├─ status: todo / doing / done
└─ deadline: "2026-06-21"

## 🔥 khi tạo thì chú ý đưa dữ liệu vào cho đủ nhé

### 1. **Cascade Delete** (Xóa liên tầng)

- **Xóa Project** → Xóa tất cả Tickets + Tasks
- **Xóa Ticket** → Xóa tất cả Tasks phụ thuộc

### 2. **CRUD Operations** (Create, Read, Update, Delete)

- Projects: Tạo, lấy, cập nhật, xóa
- Tickets: Tạo, lấy, cập nhật, xóa
- Tasks: Tạo, lấy, cập nhật, xóa

- projectAPI
  - getAll()
  - getById(id)
  - create(data)
  - update(id, data)
  - delete(id) # Xóa Pj và tất cả tickets + tasks phụ thuộc

- ticketAPI
  - getAll()
  - getByProjectId(projectId) return array[ticket]
  - getById(id)
  - create(data)
  - update(id, data)
  - delete(id) # xóa ticket và tất cả tasks phụ thuộc

- taskAPI
  - getAll()
  - getByTicketId(ticketId) return array[task]
  - getByProjectId(projectId) return array[task]
  - getById(id)
  - create(data)
  - update(id, data)
  - delete(id)


