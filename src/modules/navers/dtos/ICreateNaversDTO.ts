import User from '../../users/entities/User';

export default interface ICreateNaversDTO {
  name: string;
  birthdate: Date;
  admission_date: Date;
  job_role: string;
  user_id: string;
}
