import type { LoginResponseDTO, UserDTO } from "../types/auth.types";
import apiClient from "./apiClient";

const AUTH_URL = '/auth';

export const registerUser = (registerUser: UserDTO) => {
    return apiClient.post<LoginResponseDTO>(AUTH_URL + '/signup', registerUser);
};


export const loginUser = (registerUser: UserDTO) => {
    return apiClient.post<LoginResponseDTO>(AUTH_URL + '/login', registerUser);
};