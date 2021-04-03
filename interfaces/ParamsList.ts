import User from './User';
import Bucket from './Bucket';

type ParamList = {
  Explore: undefined;
  Map?: undefined;
  Camera: undefined;
  Buckets: undefined;
  Place: undefined;
  Categories: Bucket;
  Inbox: undefined;
  Friends: User;
  Postcard: { photo: any, value: any };
  Profile: undefined;
  TabStack: undefined;
  ChatRoom: undefined;
  FriendProfile: { friendUser: User };
  Logout: undefined;
  Login: undefined;
  Register: undefined;
}

export default ParamList;