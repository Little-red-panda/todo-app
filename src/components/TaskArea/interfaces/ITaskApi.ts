import { Priority } from './../../CreateTaskForm/enums/Priority';
import { Status } from '../../CreateTaskForm/enums/Status';

export interface ITaskApi {
  id: string;
  date: string;
  title: string;
  description: string;
  priority: `${Priority}`;
  status: `${Status}`;
}
