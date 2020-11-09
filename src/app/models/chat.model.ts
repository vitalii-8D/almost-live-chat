export interface IMessage {
  body: string;
  createdAt: any;
  user_id: string;
  isMyMsg?: boolean;
}

export interface IChat {
  id?: string;
  messages?: IMessage[];
  members?: string[];
  createdAt?: any;
  updatedAt?: any;
}
