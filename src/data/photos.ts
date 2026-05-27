export interface Photo {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export const categories = [
  "全部",
  "脂包肌叉腰20cm",
  "肌肉展示中20cm",
  "脂包肌稍息12cm",
  "脂包肌稍息25cm",
  "抱胸大叔15cm",
  "配件",
  "其他",
] as const;

export type Category = (typeof categories)[number];

export const photos: Photo[] = [
  {
    id: "1",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8n7jfoOzpn5Jt6Epgw89zD0j7TQ2ha1Xr4MyZH",
    alt: "肤色脂包肌叉腰20cm侧面",
    category: "脂包肌叉腰20cm",
  },
  {
    id: "2",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8n7JyF0bpn5Jt6Epgw89zD0j7TQ2ha1Xr4MyZH",
    alt: "肤色脂包肌叉腰20cm正面",
    category: "脂包肌叉腰20cm",
  },
  {
    id: "3",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8n0PZla65QAg0bTDIMG2eCEQxtn9odfqw7mV3j",
    alt: "大理石色脂包肌叉腰20cm正面",
    category: "脂包肌叉腰20cm",
  },
  {
    id: "4",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8ndY9p6EGO819YvMVm3rc4oLzn7SWeZy0g26iX",
    alt: "大理石色脂包肌叉腰20cm背面",
    category: "脂包肌叉腰20cm",
  },
  {
    id: "5",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8nAgg6RztOmv8nw3jxFY0i4PSNrVytgQB9KURD",
    alt: "配件图概览",
    category: "配件",
  },
  {
    id: "6",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8nm2uENZPTwOBXahnUZtKR9eGpsLDbldPkugcq",
    alt: "配件图细节1",
    category: "配件",
  },
  {
    id: "7",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8nWYjl3NSU1nK4oOMC0cazH8qyfSbV7h3gExB5",
    alt: "配件图细节2",
    category: "配件",
  },
  {
    id: "8",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8nAhDv61tOmv8nw3jxFY0i4PSNrVytgQB9KURD",
    alt: "牛牛钥匙扣6cm，可晃动",
    category: "其他",
  },
  {
    id: "9",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8n7Rf7Bapn5Jt6Epgw89zD0j7TQ2ha1Xr4MyZH",
    alt: "肌肉展示中20cm正面",
    category: "肌肉展示中20cm",
  },
  {
    id: "10",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8n3TX9ihKGTK7dgnB8yJtOAUoMb1v6FPakS0cR",
    alt: "上色版脂包肌叉腰20cm正面",
    category: "脂包肌叉腰20cm",
  },
  {
    id: "11",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8nnQuap4ISiApaUVLIoEM562ermFNWjDYhRKzc",
    alt: "上色版脂包肌叉腰正面20cm仰视",
    category: "脂包肌叉腰20cm",
  },
  {
    id: "12",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8nqrPELZzxBQHDdSrbRYmLva2XAK9zPeFOU47V",
    alt: "上色版脂包肌叉腰20cm背面",
    category: "脂包肌叉腰20cm",
  },
  {
    id: "13",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8nOcmzaQA1KaEGOwJjhU9iPmzu5ZcnyHlN4vrg",
    alt: "上色版脂包肌叉腰20cm侧面",
    category: "脂包肌叉腰20cm",
  },
  {
    id: "14",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8nW7rnnmSU1nK4oOMC0cazH8qyfSbV7h3gExB5",
    alt: "脂包肌稍息12cm侧面",
    category: "脂包肌稍息12cm",
  },
  {
    id: "15",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8n7EKQmfpn5Jt6Epgw89zD0j7TQ2ha1Xr4MyZH",
    alt: "脂包肌稍息12cm正面",
    category: "脂包肌稍息12cm",
  },
  {
    id: "16",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8nlaG2xYLAOMSHY0VfnmC2cQqlD8PIusTygFBE",
    alt: "脂包肌稍息12cm侧面2",
    category: "脂包肌稍息12cm",
  },
  {
    id: "17",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8ndoxv07hGO819YvMVm3rc4oLzn7SWeZy0g26i",
    alt: "脂包肌稍息25cm与12cm对比",
    category: "脂包肌稍息12cm",
  },
  {
    id: "18",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8nNd8465ZCgDF3nVquTl5Mb1ySotZEdeIwfAYj",
    alt: "脂包肌稍息12cm上手背面",
    category: "脂包肌稍息12cm",
  },
  {
    id: "19",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8nhfWhBZrTRUALKJofi1Pw9n2qVZvcsXS0pIEY",
    alt: "脂包肌稍息12cm上手正面",
    category: "脂包肌稍息12cm",
  },
  {
    id: "20",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8n5LB64EXz6U2EPGx3uv8mrY01H7BXVnIkOboC",
    alt: "肌肉展示中20cm正面",
    category: "肌肉展示中20cm",
  },
  {
    id: "21",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8ngFLNt7a5oSkzjdnpVTMFPbHQLeImAc7g94yt",
    alt: "肌肉展示中黑头盔20cm正面",
    category: "肌肉展示中20cm",
  },
  {
    id: "22",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8nACvzyxtOmv8nw3jxFY0i4PSNrVytgQB9KURD",
    alt: "肌肉展示中20cm侧面",
    category: "肌肉展示中20cm",
  },
  {
    id: "23",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8nw25bu1Eq2HOKmU0ApSPigdIb9s1GTCfErhN3",
    alt: "肌肉展示中黑头盔20cm侧面",
    category: "肌肉展示中20cm",
  },
  {
    id: "24",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8n1QJy3kljTgPABusxXKiGhSFW3ENVwC65z1Z2",
    alt: "脂包肌稍息25cm正面",
    category: "脂包肌稍息25cm",
  },
  {
    id: "25",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8n7MPNB5pn5Jt6Epgw89zD0j7TQ2ha1Xr4MyZH",
    alt: "脂包肌稍息25cm背面",
    category: "脂包肌稍息25cm",
  },
  {
    id: "26",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8n1QrNaNQjTgPABusxXKiGhSFW3ENVwC65z1Z2",
    alt: "抱胸大叔15cm正面",
    category: "抱胸大叔15cm",
  },
  {
    id: "27",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8nyaW4WVhGdAwMPyuricRa2okqnUYZWf7gHBm6",
    alt: "抱胸大叔15cm侧面",
    category: "抱胸大叔15cm",
  },
  {
    id: "28",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8n3IVBspKGTK7dgnB8yJtOAUoMb1v6FPakS0cR",
    alt: "抱胸大叔15cm背面",
    category: "抱胸大叔15cm",
  },
];
