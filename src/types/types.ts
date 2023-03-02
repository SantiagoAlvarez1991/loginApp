export interface User {
  id: number | null;
  email: string;
  password: string;
  name: string;
  role: string;
  avatar: string
}

export interface AuthenticationToken {
  access_token: string;
  refresh_token: string;
  statusCode : number | null;
  message: string
}

export interface ErrorAuthentication {
  statusCode : number | null;
  message: string
}

export interface CreateUserInput {
  name: string;
  email: string;
  password: string;
  repeatPassword?: string;
  avatar: string
}

export interface IsLogged {
  isLogged : boolean
}