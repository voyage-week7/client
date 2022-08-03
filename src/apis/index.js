import axios from 'axios';

const SERVER_URL = 'http://52.79.98.62:8080';

export const instance = axios.create({
  baseURL: SERVER_URL,
  withCredentials: true,
});

axios.get('http://52.79.98.62:8080/api/stores?filter=&sort=&word=&minPrice=&maxPrice=').then((response) => {
  console.log(response);
});

instance.interceptors.request.use((config) => {
  config = config.headers = {
    Authorization: window.localStorage.getItem('token'), // FIXME: cookie 로 변경
  };
  return config;
});

const stores = [
  {
    id: 1,
    storename: '가게이름',
    storeImageUrl: ['https:~~~', 'https:~~~', 'https:~~~'],
    category: '오마카세',
    region: '부산 해운대',
    launchPrice: '3만원',
    dinnerPrice: '4만원',
    phone: 9192912,
    description: '매장설명',
    lat: 128.3,
    long: 27.2,
    reviewAvg: 3.4,
    reviews: [
      {
        id: 1,
        storeId: 1,
        storename: '가게이름',
        title: '제목',
        content: '내용',
        rate: 3.3,
        image: ['https://…', 'https://…'],
        createdAt: '작성일자',
      },
    ],
    reservations: [],
  },
];

export const apis = {
  login: async (email, password) => ({
    id: '유저아이디',
    username: email + 'user',
    token: 'wekljfiwejfwje@efw',
  }),
  getStores: async () => stores,
};
