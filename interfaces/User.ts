export default interface User {
  _typename?: string | undefined;
  birthday?: null | string | undefined;
  createdAt?: string | undefined;
  email?: string | undefined;
  emojis?: string | null;
  firstName?: string | null | undefined;
  friends?: string[];
  id?: string | undefined;
  lastName?: null | string;
  location?: null | string;
  profile_pic?: string | undefined;
  updatedAt?: string | undefined;
  username?: string | undefined;
  vibe?: string | undefined;
}
