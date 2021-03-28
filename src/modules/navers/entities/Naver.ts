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

import Project from '../../projects/entities/Project';
import User from '../../users/entities/User';

@Entity('navers')
class Naver {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  birthdate: Date;

  @Column()
  admission_date: Date;

  @Column()
  job_role: string;

  @Column()
  user_id: string;

  @ManyToOne(() => User, user => user.navers)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToMany(() => Project, project => project.navers)
  @JoinTable({ name: 'navers_projects' })
  projects: Project[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default Naver;
