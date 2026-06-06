import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

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
};

// ==================== TICKETS ====================
export const ticketAPI = {
  // Lấy tất cả tickets
  getAll: () => api.get("/tickets"),

  // Lấy tickets theo projectId
  getByProjectId: (projectId) => api.get(`/tickets?projectId=${projectId}`),

  // Lấy ticket theo ID
  getById: (id) => api.get(`/tickets/${id}`),

  // Tạo ticket mới
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
};

// ==================== get ALL ====================
export const batchAPI = {
  // Lấy toàn bộ dữ liệu (projects, tickets, tasks)
  getAll: async () => {
    try {
      const [projectsRes, ticketsRes, tasksRes] = await Promise.all([
        api.get("/projects"),
        api.get("/tickets"),
        api.get("/tasks"),
      ]);

      return {
        projects: projectsRes.data,
        tickets: ticketsRes.data,
        tasks: tasksRes.data,
      };
    } catch (error) {
      console.error("Error fetching all data:", error);
      throw error;
    }
  },

  // Lấy project với tất cả tickets và tasks của nó
  getProjectWithDetails: async (projectId) => {
    try {
      const [projectRes, ticketsRes, tasksRes] = await Promise.all([
        api.get(`/projects/${projectId}`),
        api.get(`/tickets?projectId=${projectId}`),
        api.get(`/tasks?projectId=${projectId}`),
      ]);

      return {
        project: projectRes.data,
        tickets: ticketsRes.data,
        tasks: tasksRes.data,
      };
    } catch (error) {
      console.error("Error fetching project details:", error);
      throw error;
    }
  },

  // Lấy ticket với tất cả tasks của nó
  getTicketWithTasks: async (ticketId) => {
    try {
      const [ticketRes, tasksRes] = await Promise.all([
        api.get(`/tickets/${ticketId}`),
        api.get(`/tasks?ticketId=${ticketId}`),
      ]);

      return {
        ticket: ticketRes.data,
        tasks: tasksRes.data,
      };
    } catch (error) {
      console.error("Error fetching ticket with tasks:", error);
      throw error;
    }
  },
};
