import { axiosInstance } from "./axiosInstance";

// TODO: 아래 API 함수들을 완성하세요.
// 글 작성/수정 요청은 이미지 파일을 포함할 수 있으므로 FormData로 전송합니다.

export const getPosts = async () => {
    const res = await axiosInstance.get("/posts");
    return res.data;
};

export const getPost = async (postId) => {
    const res = await axiosInstance.get(`/posts/${postId}`);
    return res.data;
};

export const createPost = async (formData) => {
    const res = await axiosInstance.post("/posts", formData);
    return res.data;
};

export const updatePost = async (postId, formData) => {
    const res = await axiosInstance.patch(`/posts/${postId}`, formData);
    return res.data;
};

export const deletePost = async (postId) => {
    await axiosInstance.delete(`/posts/${postId}`);
};
