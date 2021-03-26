import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

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

  constructor() {
    if (this.id) {
      this.id = uuid();
    }
  }
}

export default Project;
