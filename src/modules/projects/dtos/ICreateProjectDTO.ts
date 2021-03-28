import Naver from '../../navers/entities/Naver';

export default interface ICreateProjectDTO {
  name: string;
  user_id: string;
  navers?: Naver[];
}
