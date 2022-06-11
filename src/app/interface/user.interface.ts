export interface IUserCreate {
    name: string,
    email: string;
    password: string
    token?: string;
}

export interface IUserLogin {
    email: string;
    password: string;
    token?: string;
    name?: string;
    isAdmin?: boolean;
}