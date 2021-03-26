import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

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

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default Naver;
