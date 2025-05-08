export interface UserDTO {
    email: string;
    password: string;
}

export interface LoginResponseDTO{
    token: string;
    expiresIn: number;
}