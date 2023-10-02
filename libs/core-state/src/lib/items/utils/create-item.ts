import { getId } from './id';

export interface Item {
  id: number;
  name: string;
  packed: boolean;
}

export const createItem = (name: string, packed = false): Item => ({
  id: getId(),
  name,
  packed,
});

