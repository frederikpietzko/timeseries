export interface LocalAuthenticationRequest {
  email: string;
  password: string;
}

export interface AuthenticationResponse {
  access_token: string;
}
