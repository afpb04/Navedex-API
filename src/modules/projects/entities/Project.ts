import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

import Naver from '../../navers/entities/Naver';
import User from '../../users/entities/User';

@Entity('projects')
class Project {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  user_id: string;

  @ManyToOne(() => User, user => user.projects)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToMany(() => Naver, naver => naver.projects)
  navers: Naver[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default Project;
