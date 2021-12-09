import { UserSource } from '../../user/user-source';

export interface JwtPayload {
  userId: string;
  email: string;
  userSource: UserSource;
}
