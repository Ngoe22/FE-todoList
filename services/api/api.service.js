import axios from "axios";

const API_BASE_URL_SSR = "http://0.0.0.0:3001"

const API_BASE_URL = "http://api:3001";

//  CSR
const api_csr = axios.create({
  baseURL: API_BASE_URL_SSR,
  headers: {
    "Content-Type": "application/json",
  },
});

// Khởi tạo axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});


// ==================== PROJECTS ====================
export const projectAPI = {
  // Lấy tất cả projects
  getAll: () => api.get("/projects"),


  // Lấy project theo ID
  getById: (id) => api.get(`/projects/${id}`),

  // Tạo project mới
  create: (data) => api.post("/projects", data),

  // Cập nhật project
  update: (id, data) => api.put(`/projects/${id}`, data),

  // Xóa project (kèm tickets và tasks phụ thuộc)
  delete: async (id) => {
    try {
      // Lấy tất cả tickets của project
      const ticketsRes = await api.get(`/tickets?projectId=${id}`);
      const tickets = ticketsRes.data;

      // Xóa tất cả tasks của project
      await api.delete(`/tasks?projectId=${id}`);

      // Xóa tất cả tickets của project
      for (let ticket of tickets) {
        await api.delete(`/tickets/${ticket.id}`);
      }

      // Cuối cùng xóa project
      return api.delete(`/projects/${id}`);
    } catch (error) {
      console.error("Error deleting project:", error);
      throw error;
    }
  },


  //  ===========> CSR

  // Lấy tất cả projects
  getAllCsr: () => api_csr.get("/projects"),

  // Lấy project theo ID
  getByIdCsr: (id) => api_csr.get(`/projects/${id}`),

  // Tạo project mới
  createCsr: (data) => api_csr.post("/projects", data),

  // Cập nhật project
  updateCsr: (id, data) => api_csr.put(`/projects/${id}`, data),

  // Xóa project (kèm tickets và tasks phụ thuộc)
  deleteCsr: async (id) => {
    try {
      // Lấy tất cả tickets của project
      const ticketsRes = await api_csr.get(`/tickets?projectId=${id}`);
      const tickets = ticketsRes.data;

      // Xóa tất cả tasks của project
      await api_csr.delete(`/tasks?projectId=${id}`);

      // Xóa tất cả tickets của project
      for (let ticket of tickets) {
        await api_csr.delete(`/tickets/${ticket.id}`);
      }

      // Cuối cùng xóa project
      return api_csr.delete(`/projects/${id}`);
    } catch (error) {
      console.error("Error deleting project:", error);
      throw error;
    }
  },
  //  ===========> CSR
};




// ==================== TICKETS ====================
export const ticketAPI = {
  // Lấy tất cả tickets
  getAll: () => api.get("/tickets"),

  // Lấy tickets theo projectId
  getByProjectId: (projectId) =>  api.get(`/tickets?projectId=${projectId}`),

  // Lấy ticket theo ID
  getById: (id) => api.get(`/tickets/${id}`),

  // Tạo ticket mới api_csr
  create: (data) => api.post("/tickets", data),

  // Cập nhật ticket
  update: (id, data) => api.put(`/tickets/${id}`, data),


  // Xóa ticket (kèm tasks phụ thuộc)
  delete: async (id) => {
    try {
      // Xóa tất cả tasks của ticket
      await api.delete(`/tasks?ticketId=${id}`);

      // Xóa ticket
      return api.delete(`/tickets/${id}`);
    } catch (error) {
      console.error("Error deleting ticket:", error);
      throw error;
    }
  },

  //  ===========> CSR

  // Lấy tất cả tickets
  getAllCsr: () => api_csr.get("/tickets"),

  // Lấy tickets theo projectId
  getByProjectIdCsr: (projectId) =>  api_csr.get(`/tickets?projectId=${projectId}`),

  // Lấy ticket theo ID
  getByIdCsr: (id) => api_csr.get(`/tickets/${id}`),

  // Tạo ticket mới api_csr_csr
  createCsr: (data) => api_csr.post("/tickets", data),

  updateCsr: (id, data) => api_csr.put(`/tickets/${id}`, data),


  // Xóa ticket (kèm tasks phụ thuộc)
  deleteCsr: async (id) => {
    try {

      const tasksRes = await api_csr.get(`/tasks?ticketId=${id}`);

      const tasks = tasksRes.data;
      await Promise.all(tasks.map(task => api_csr.delete(`/tasks/${task.id}`)));

      // Xóa ticket
      return api_csr.delete(`/tickets/${id}`);


    } catch (error) {
      console.error("Error deleting ticket:", error);
      throw error;
    }
  },

  //  ===========> CSR

};

// ==================== TASKS ====================
export const taskAPI = {
  // Lấy tất cả tasks
  getAll: () => api.get("/tasks"),

  // Lấy tasks theo ticketId
  getByTicketId: (ticketId) => api.get(`/tasks?ticketId=${ticketId}`),

  // Lấy tasks theo projectId
  getByProjectId: (projectId) => api.get(`/tasks?projectId=${projectId}`),

  // Lấy task theo ID
  getById: (id) => api.get(`/tasks/${id}`),

  // Tạo task mới
  create: (data) => api.post("/tasks", data),

  // Cập nhật task
  update: (id, data) => api.put(`/tasks/${id}`, data),

  // Xóa task
  delete: (id) => api.delete(`/tasks/${id}`),


  //  ===========> CSR

  // Lấy tất cả tasks
  getAllCsr: () => api_csr.get("/tasks"),

  // Lấy tasks theo ticketId
  getByTicketIdCsr: (ticketId) => api_csr.get(`/tasks?ticketId=${ticketId}`),

  // Lấy tasks theo projectId
  getByProjectIdCsr: (projectId) => api_csr.get(`/tasks?projectId=${projectId}`),

  // Lấy task theo ID
  getByIdCsr: (id) => api_csr.get(`/tasks/${id}`),

  // Tạo task mới
  createCsr: (data) => api_csr.post("/tasks", data),

  // Cập nhật task
  updateCsr: (id, data) => api_csr.put(`/tasks/${id}`, data),

  // Xóa task
  deleteCsr: (id) => api_csr.delete(`/tasks/${id}`),


  //  ===========> CSR

};

// ==================== get ALL ====================
// export const batchAPI = {
//   // Lấy toàn bộ dữ liệu (projects, tickets, tasks)
//   getAll: async () => {
//     try {
//       const [projectsRes, ticketsRes, tasksRes] = await Promise.all([
//         api.get("/projects"),
//         api.get("/tickets"),
//         api.get("/tasks"),
//       ]);
//
//       return {
//         projects: projectsRes.data,
//         tickets: ticketsRes.data,
//         tasks: tasksRes.data,
//       };
//     } catch (error) {
//       console.error("Error fetching all data:", error);
//       throw error;
//     }
//   },
//
//   // Lấy project với tất cả tickets và tasks của nó
//   getProjectWithDetails: async (projectId) => {
//     try {
//       const [projectRes, ticketsRes, tasksRes] = await Promise.all([
//         api.get(`/projects/${projectId}`),
//         api.get(`/tickets?projectId=${projectId}`),
//         api.get(`/tasks?projectId=${projectId}`),
//       ]);
//
//       return {
//         project: projectRes.data,
//         tickets: ticketsRes.data,
//         tasks: tasksRes.data,
//       };
//     } catch (error) {
//       console.error("Error fetching project details:", error);
//       throw error;
//     }
//   },
//
//   // Lấy ticket với tất cả tasks của nó
//   getTicketWithTasks: async (ticketId) => {
//     try {
//       const [ticketRes, tasksRes] = await Promise.all([
//         api.get(`/tickets/${ticketId}`),
//         api.get(`/tasks?ticketId=${ticketId}`),
//       ]);
//
//       return {
//         ticket: ticketRes.data,
//         tasks: tasksRes.data,
//       };
//     } catch (error) {
//       console.error("Error fetching ticket with tasks:", error);
//       throw error;
//     }
//   },
// };
