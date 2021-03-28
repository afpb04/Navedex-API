import Project from '../../projects/entities/Project';

export default interface ICreateNaversDTO {
  id?: string;
  name: string;
  birthdate: Date;
  admission_date: Date;
  job_role: string;
  user_id: string;
  projects?: Project[];
}
