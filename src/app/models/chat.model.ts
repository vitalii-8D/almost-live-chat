interface IMessage {
  body?: string;
  user_id?: string;
  createdAt?: any;
}

export interface IChat {
  id?: string;
  messages?: IMessage[];
  members?: string[];
  createdAt?: any;
  updatedAt?: any;
}
