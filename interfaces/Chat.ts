import User from './User';
import Message from './Message';

export default interface Chat {
  __typename: string;
  admin: null;
  id: string;
  members: User[];
  messages?: Message[];
  name: string;
  updatedAt: string;
}