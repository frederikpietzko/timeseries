export interface LocalAuthenticationRequest {
  email: string;
  password: string;
}

export interface AuthenticationResponse {
  access_token: string;
}

export interface LocalRegisterRequest {
  email?: string;
  password?: string;
  firstname?: string;
  lastname?: string;
}
