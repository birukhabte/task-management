export type TaskStatus = 'pending' | 'completed';

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  createdAt: string;
  userId: string;
}

export interface CreateTaskDto {
  title: string;
  description: string;
  status: TaskStatus;
}

export interface UpdateTaskDto extends CreateTaskDto {
  id: string;
}

export interface UpdateTaskStatusDto {
  id: string;
  status: TaskStatus;
}
// Updated on 2024-01-17 11:36:00
// Updated on 2024-01-09 15:58:00
// Updated on 2024-01-27 13:09:00
