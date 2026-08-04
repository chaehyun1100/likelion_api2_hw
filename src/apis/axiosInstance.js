import axios from "axios";

// TODO: 모든 API 요청에서 공통으로 사용할 axios 인스턴스를 완성하세요!
export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    // timeout: 5000,
});
