export interface IMessage {
  body: string;
  createdAt: any;
  user_id: number;
}

export interface IChat {
  id?: number;
  messages?: IMessage[];
  members?: number[];
  createdAt?: any;
  updatedAt?: any;
}
