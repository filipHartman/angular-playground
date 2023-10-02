/**
 * Interface for the 'Auth' data
 */
export interface AuthEntity {
  id: string | number; // Primary ID
  name: string;
}

export interface User {
  username: string;
  password: string;
}

export interface AuthState {
  user: User | null;
}
