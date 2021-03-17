import theme from '../styles/theme.style';

const bucket = {
  __typename: 'Bucket',
  categories: [{
    __typename: 'Category',
    id: '604ca4e87f7d89153b39d99f',
    label: "Hello",
    places: [],
  }],
  date_created: '2021-03-13T11:41:28.273Z',
  id: "604ca4e87f7d89153b39d9a0",
  notes: "Hello",
  title: "Hello",
}
const userA = {
  _typename: 'User',
  birthday: null,
  createdAt: '2021-03-12T12:05:53.895Z',
  email: 'A',
  emojis: ':) ;) :O',
  firstName: 'A',
  friends: [{
    __typename: "User",
      birthday: null,
      createdAt: "2021-03-11T17:25:27.762Z",
      email: 'B',
      firstName: 'B',
      id: '604a52875a22a656d698c988',
      lastName: null,
      username: 'B',
  }],
  id: '604b592130793c1bff327555',
  lastName: null,
  location: 'London',
  profile_pic: null,
  updatedAt: '2021-03-15T09:02:58.715Z',
  username: 'A',
  vibe: 'Beach'
}
const userB = {
  _typename: 'User',
  birthday: null,
  createdAt: '2021-03-12T12:10:53.895Z',
  email: 'B',
  emojis: ':) :O :P',
  firstName: 'B',
  friends: [{
    __typename: "User",
      birthday: null,
      createdAt: "2021-03-12T12:05:53.895Z",
      email: 'A',
      firstName: 'A',
      id: '604b592130793c1bff327555',
      lastName: null,
      username: 'A',
  }],
  id: '604a52875a22a656d698c988',
  lastName: null,
  location: 'London',
  profile_pic: null,
  updatedAt: '2021-03-15T09:02:58.715Z',
  username: 'B',
  vibe: 'Beach'
}

const place = {
  __typename: 'Place',
  description: 'locality, political',
  formatted_address: 'London, UK',
  id: '',
  imgArr: [
    'https://lh3.googleusercontent.com/p/AF1QipOmH4cmfDXKSZsY0ECNfEVo99-sJ9JiwW0hOE5y=s1600-h619',
    'https://lh3.googleusercontent.com/p/AF1QipPlfRNdjQbAgVXJ6CO8xm6ArPNtIyIK-SqHx4V1=s1600-h911',
    'https://lh3.googleusercontent.com/p/AF1QipMGBhjSmSICwYc2uMiFQ0l-bZm-Yx69est4gBvO=s1600-h1200',
    'https://lh3.googleusercontent.com/p/AF1QipMx47l1JKY-Nj9p6u5yFIj-TI7ubxM6m1_rdwSH=s1600-h1200',
    'https://lh3.googleusercontent.com/p/AF1QipO1gRyYKC04M2jwJh6mSeuDvzhXqks1BJZW7_Yw=s1600-h1200',
    'https://lh3.googleusercontent.com/p/AF1QipO5rYsQ8pjrN9Tmspu1uSKtLbyy4wZvO_bMyzH1=s1600-h1200',
    'https://lh3.googleusercontent.com/p/AF1QipNB7-V6PQypu5RSJnazhue3BNaHtiBA5bqqYI5Z=s1600-h1200',
    'https://lh3.googleusercontent.com/p/AF1QipNk5QU10zjui5OrIQ2WuMLuWChDJDmu0sGz-Zi7=s1600-h1200',
    'https://lh3.googleusercontent.com/p/AF1QipMRx0je916q6jCTwBi3lU5AcWNHIa4dHa91eDZq=s1600-h1200',
    'https://lh3.googleusercontent.com/p/AF1QipNKpEuPRT3zlCBdgjvK5zq1-LB1TlcOCNMAyhCl=s1600-h1200',
  ],
  international_phone_number: undefined,
  latitude: 51.5073509,
  longitude: -0.1277583,
  name: 'London',
  notes: '',
  open_now: undefined,
  rating: undefined,
  review: undefined,
  url: 'https://maps.google.com/?q=London,+UK&ftid=0x47d8a00baf21de75:0x52963a5addd52a99',
  user_ratings_total: undefined,
  weekday_text: undefined,
}

const category = {
  __typename: 'Category',
  id: '604b597030793c1bff327556',
  label: 'Music',
  places: [place],
}

const message = {
  __typename: 'Message',
  author: '604b592130793c1bff327555',
  content: 'TEST TEST TEST',
  createdAt: '2021-03-15T09:05:56.583Z',
  description: 'message',
  id: '604f23740ea199065c8a602f',
  photo: null,
  timeslots: []
}
const chat = {
  __typename: 'Chat',
  admin: null,
  createdAt: '2021-03-15T09:05:50.079Z',
  id: '604f236e0ea199065c8a602e',
  members: [userA, userB],
  messages: [message],
  name: 'B',
  updatedAt: '021-03-15T16:05:48.012Z',
}

const radioButtons = [
  {
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'Beach',
    value: 'option1',
    labelStyle: {
      color: theme.PRIMARY_COLOR_XLITE,
      fontSize: 20,
      fontFamily: 'Lato_300Light',
    },
    color: theme.PRIMARY_COLOR_XLITE,
    size: 20,
    containerStyle: {
      alignSelf: 'flex-start',
    },
  },
  {
    id: '2',
    label: 'Mountains',
    value: 'option2',
    color: theme.PRIMARY_COLOR_XLITE,
    labelStyle: {
      color: theme.PRIMARY_COLOR_XLITE,
      fontSize: 20,
      fontFamily: 'Lato_300Light',
    },
    size: 20,
  },
  {
    id: '3',
    label: 'City',
    value: 'option3',
    color: theme.PRIMARY_COLOR_XLITE,
    size: 20,
    labelStyle: {
      color: theme.PRIMARY_COLOR_XLITE,
      fontSize: 20,
      fontFamily: 'Lato_300Light',
    },
    selected: true,
  },
];

module.exports = { bucket, userA, userB, place, category, message, chat, radioButtons }