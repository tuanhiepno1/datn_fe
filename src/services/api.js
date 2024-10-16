import axios from 'axios';

// Tạo instance của axios
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL, // Sử dụng URL từ biến môi trường
    timeout: 5000, // Thời gian chờ (timeout) cho các request
    headers: {
        'Content-Type': 'application/json',
    }
});

// Hàm lấy token từ localStorage (hoặc có thể từ nơi khác)
const getToken = () => {
    return localStorage.getItem('token');
};

// Interceptor để thêm token vào headers của request (nếu có)
api.interceptors.request.use(
    (config) => {
        const token = getToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Xử lý lỗi trả về
api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            // Xử lý nếu bị lỗi 401 (Unauthorized)
            console.log('Unauthorized, redirecting to login...');
            // Có thể thêm logic điều hướng tới trang đăng nhập tại đây
        }
        return Promise.reject(error);
    }
);

// Hàm đăng nhập
export const login = (credentials) => {
    return api.post('/V1/auth/login', credentials);
};

// Hàm đăng ký
export const register = (userData) => {
    return api.post('/admin/accounts', userData);
};

// Hàm lấy thông tin tài khoản hiện tại
export const getCurrentUser = () => {
    return api.get('/v1/auth/me');
};

// Hàm đăng xuất
export const logout = () => {
    return api.post('/v1/auth/logout');
};

// Hàm lấy danh sách tài khoản (ví dụ)
export const getAllUsers = () => {
    return api.get('/accounts');
};

// Hàm cập nhật thông tin tài khoản (ví dụ)
export const updateUser = (id, updatedData) => {
    return api.put(`/accounts/${id}`, updatedData);
};

// Hàm xóa tài khoản (ví dụ)
export const deleteUser = (id) => {
    return api.delete(`/accounts/${id}`);
};