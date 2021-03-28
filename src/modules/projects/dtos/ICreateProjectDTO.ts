import Naver from '../../navers/entities/Naver';

export default interface ICreateProjectDTO {
  id?: string;
  name: string;
  user_id: string;
  navers?: Naver[];
}
