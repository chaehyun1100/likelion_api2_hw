import { axiosInstance } from "./axiosInstance";

// TODO: 아래 댓글 API 함수들을 완성하세요.
// 댓글 작성 요청은 application/json 형식으로 전송합니다.

export const getComments = async (postId) => {
    const res = await axiosInstance.get(`/posts/${postId}/comments`);
    return res.data;
};

export const createComment = async (postId, content) => {
    const res = await axiosInstance.post(`/posts/${postId}/comments`, content);
    return res.data;
};

export const deleteComment = async (commentId) => {
    await axiosInstance.delete(`comments/${commentId}`);
};
