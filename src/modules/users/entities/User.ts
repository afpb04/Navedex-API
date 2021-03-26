import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

import Naver from '../../navers/entities/Naver';
import Project from '../../projects/entities/Project';

@Entity('users')
class User {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => Naver, naver => naver.user)
  navers: Naver[];

  @OneToMany(() => Project, project => project.user)
  projects: Project[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
export default User;
