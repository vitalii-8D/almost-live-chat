export interface IMessage {
  body: string;
  createdAt: any;
  user_id: string;
}

export interface IChat {
  id?: string;
  messages?: IMessage[];
  members?: string[];
  createdAt?: any;
  updatedAt?: any;
}
