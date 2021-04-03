type getChats = {
  id: String;
  name: String;
  admin: String;
  members: {
    id: String;
    firstName: String;
    lastName: String;
    username: String;
    email: String;
    birthday: String;
    createdAt: Date;
    location: String;
    vibe: String;
    emojis: String;
    profile_pic: String;
  };
  messages: {
    id: String;
    description: String;
    author: String;
    content: String;
    createdAt: Date;
  };
  updatedAt: Date;
};

export default getChats;
