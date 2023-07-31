import { randomUUID } from 'node:crypto';

export class Contact {
  readonly id: string;
  name: string;
  email?: string | null;
  infos?: string | null;
  number: number;
  img_perfil?: string | null;
  userId: string;

  constructor() {
    this.id = randomUUID();
  }
}
