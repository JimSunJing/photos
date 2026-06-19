export interface Photo {
  id: string;
  src: string;
  alt: string;
  category: string;
  productId: string;
  dateAdded: string;
}

export const categories = [
  "全部",
  "脂包肌叉腰20cm",
  "肌肉展示中20cm",
  "肌肉展示上色20cm",
  "脂包肌稍息12cm",
  "脂包肌稍息25cm",
  "抱胸大叔15cm",
  "抱胸大叔20cm",
  "龟甲缚大叔15cm",
  "肌肉男香插15cm",
  "硅胶捏捏",
  "配件",
  "其他",
] as const;

export type Category = (typeof categories)[number];

export function productSlug(id: string): string {
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    const char = id.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return Math.abs(hash).toString(36);
}

export function productIdFromSlug(slug: string): string {
  const map = new Map<string, string>();
  for (const p of photos) {
    if (!map.has(productSlug(p.productId))) {
      map.set(productSlug(p.productId), p.productId);
    }
  }
  return map.get(slug) ?? "";
}

export const photos: Photo[] = [
  {
    id: "1",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8n7jfoOzpn5Jt6Epgw89zD0j7TQ2ha1Xr4MyZH",
    alt: "肤色脂包肌叉腰20cm侧面",
    category: "脂包肌叉腰20cm",
    productId: "脂包肌叉腰20cm",
    dateAdded: "2025-12-01",
  },
  {
    id: "2",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8n7JyF0bpn5Jt6Epgw89zD0j7TQ2ha1Xr4MyZH",
    alt: "肤色脂包肌叉腰20cm正面",
    category: "脂包肌叉腰20cm",
    productId: "脂包肌叉腰20cm",
    dateAdded: "2025-12-01",
  },
  {
    id: "3",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8n0PZla65QAg0bTDIMG2eCEQxtn9odfqw7mV3j",
    alt: "大理石色脂包肌叉腰20cm正面",
    category: "脂包肌叉腰20cm",
    productId: "脂包肌叉腰20cm",
    dateAdded: "2025-12-05",
  },
  {
    id: "4",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8ndY9p6EGO819YvMVm3rc4oLzn7SWeZy0g26iX",
    alt: "大理石色脂包肌叉腰20cm背面",
    category: "脂包肌叉腰20cm",
    productId: "脂包肌叉腰20cm",
    dateAdded: "2025-12-05",
  },
  {
    id: "5",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8nAgg6RztOmv8nw3jxFY0i4PSNrVytgQB9KURD",
    alt: "配件图概览",
    category: "配件",
    productId: "配件",
    dateAdded: "2026-01-10",
  },
  {
    id: "6",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8nm2uENZPTwOBXahnUZtKR9eGpsLDbldPkugcq",
    alt: "配件图细节1",
    category: "配件",
    productId: "配件",
    dateAdded: "2026-01-10",
  },
  {
    id: "7",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8nWYjl3NSU1nK4oOMC0cazH8qyfSbV7h3gExB5",
    alt: "配件图细节2",
    category: "配件",
    productId: "配件",
    dateAdded: "2026-01-10",
  },
  {
    id: "8",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8nAhDv61tOmv8nw3jxFY0i4PSNrVytgQB9KURD",
    alt: "牛牛钥匙扣6cm，可晃动",
    category: "其他",
    productId: "其他",
    dateAdded: "2026-02-01",
  },
  {
    id: "9",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8n7Rf7Bapn5Jt6Epgw89zD0j7TQ2ha1Xr4MyZH",
    alt: "肌肉展示中20cm正面",
    category: "肌肉展示中20cm",
    productId: "肌肉展示中20cm",
    dateAdded: "2026-02-15",
  },
  {
    id: "10",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8n3TX9ihKGTK7dgnB8yJtOAUoMb1v6FPakS0cR",
    alt: "上色版脂包肌叉腰20cm正面",
    category: "脂包肌叉腰20cm",
    productId: "脂包肌叉腰20cm",
    dateAdded: "2026-03-01",
  },
  {
    id: "11",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8nnQuap4ISiApaUVLIoEM562ermFNWjDYhRKzc",
    alt: "上色版脂包肌叉腰正面20cm仰视",
    category: "脂包肌叉腰20cm",
    productId: "脂包肌叉腰20cm",
    dateAdded: "2026-03-01",
  },
  {
    id: "12",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8nqrPELZzxBQHDdSrbRYmLva2XAK9zPeFOU47V",
    alt: "上色版脂包肌叉腰20cm背面",
    category: "脂包肌叉腰20cm",
    productId: "脂包肌叉腰20cm",
    dateAdded: "2026-03-05",
  },
  {
    id: "13",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8nOcmzaQA1KaEGOwJjhU9iPmzu5ZcnyHlN4vrg",
    alt: "上色版脂包肌叉腰20cm侧面",
    category: "脂包肌叉腰20cm",
    productId: "脂包肌叉腰20cm",
    dateAdded: "2026-03-05",
  },
  {
    id: "14",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8nW7rnnmSU1nK4oOMC0cazH8qyfSbV7h3gExB5",
    alt: "脂包肌稍息12cm侧面",
    category: "脂包肌稍息12cm",
    productId: "脂包肌稍息12cm",
    dateAdded: "2026-03-20",
  },
  {
    id: "15",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8n7EKQmfpn5Jt6Epgw89zD0j7TQ2ha1Xr4MyZH",
    alt: "脂包肌稍息12cm正面",
    category: "脂包肌稍息12cm",
    productId: "脂包肌稍息12cm",
    dateAdded: "2026-03-20",
  },
  {
    id: "16",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8nlaG2xYLAOMSHY0VfnmC2cQqlD8PIusTygFBE",
    alt: "脂包肌稍息12cm侧面2",
    category: "脂包肌稍息12cm",
    productId: "脂包肌稍息12cm",
    dateAdded: "2026-03-25",
  },
  {
    id: "17",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8ndoxv07hGO819YvMVm3rc4oLzn7SWeZy0g26i",
    alt: "脂包肌稍息25cm与12cm对比",
    category: "脂包肌稍息12cm",
    productId: "脂包肌稍息12cm",
    dateAdded: "2026-03-28",
  },
  {
    id: "18",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8nNd8465ZCgDF3nVquTl5Mb1ySotZEdeIwfAYj",
    alt: "脂包肌稍息12cm上手背面",
    category: "脂包肌稍息12cm",
    productId: "脂包肌稍息12cm",
    dateAdded: "2026-04-01",
  },
  {
    id: "19",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8nhfWhBZrTRUALKJofi1Pw9n2qVZvcsXS0pIEY",
    alt: "脂包肌稍息12cm上手正面",
    category: "脂包肌稍息12cm",
    productId: "脂包肌稍息12cm",
    dateAdded: "2026-04-01",
  },
  {
    id: "20",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8n5LB64EXz6U2EPGx3uv8mrY01H7BXVnIkOboC",
    alt: "肌肉展示中20cm正面",
    category: "肌肉展示中20cm",
    productId: "肌肉展示中20cm",
    dateAdded: "2026-04-15",
  },
  {
    id: "21",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8ngFLNt7a5oSkzjdnpVTMFPbHQLeImAc7g94yt",
    alt: "肌肉展示中黑头盔20cm正面",
    category: "肌肉展示中20cm",
    productId: "肌肉展示中20cm",
    dateAdded: "2026-04-15",
  },
  {
    id: "22",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8nACvzyxtOmv8nw3jxFY0i4PSNrVytgQB9KURD",
    alt: "肌肉展示中20cm侧面",
    category: "肌肉展示中20cm",
    productId: "肌肉展示中20cm",
    dateAdded: "2026-04-20",
  },
  {
    id: "23",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8nw25bu1Eq2HOKmU0ApSPigdIb9s1GTCfErhN3",
    alt: "肌肉展示中黑头盔20cm侧面",
    category: "肌肉展示中20cm",
    productId: "肌肉展示中20cm",
    dateAdded: "2026-04-20",
  },
  {
    id: "24",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8n1QJy3kljTgPABusxXKiGhSFW3ENVwC65z1Z2",
    alt: "脂包肌稍息25cm正面",
    category: "脂包肌稍息25cm",
    productId: "脂包肌稍息25cm",
    dateAdded: "2026-05-01",
  },
  {
    id: "25",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8n7MPNB5pn5Jt6Epgw89zD0j7TQ2ha1Xr4MyZH",
    alt: "脂包肌稍息25cm背面",
    category: "脂包肌稍息25cm",
    productId: "脂包肌稍息25cm",
    dateAdded: "2026-05-01",
  },
  {
    id: "26",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8n1QrNaNQjTgPABusxXKiGhSFW3ENVwC65z1Z2",
    alt: "抱胸大叔15cm正面",
    category: "抱胸大叔15cm",
    productId: "抱胸大叔15cm",
    dateAdded: "2026-05-15",
  },
  {
    id: "27",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8nyaW4WVhGdAwMPyuricRa2okqnUYZWf7gHBm6",
    alt: "抱胸大叔15cm侧面",
    category: "抱胸大叔15cm",
    productId: "抱胸大叔15cm",
    dateAdded: "2026-05-20",
  },
  {
    id: "28",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8n3IVBspKGTK7dgnB8yJtOAUoMb1v6FPakS0cR",
    alt: "抱胸大叔15cm背面",
    category: "抱胸大叔15cm",
    productId: "抱胸大叔15cm",
    dateAdded: "2026-05-25",
  },
  {
    id: "29",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8n7eo8sypn5Jt6Epgw89zD0j7TQ2ha1Xr4MyZH",
    alt: "硅胶肌肉展示中7cm半身",
    category: "硅胶捏捏",
    productId: "硅胶捏捏",
    dateAdded: "2026-06-09",
  },
  {
    id: "30",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8n99YutBMGIFiUXQElM8OHhCmfo1dwNK9ZjpV7",
    alt: "硅胶肌肉展示中7cm半身正面",
    category: "硅胶捏捏",
    productId: "硅胶捏捏",
    dateAdded: "2026-06-09",
  },
  {
    id: "31",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8n7U0OOopn5Jt6Epgw89zD0j7TQ2ha1Xr4MyZH",
    alt: "硅胶肌肉展示中7cm半身背面",
    category: "硅胶捏捏",
    productId: "硅胶捏捏",
    dateAdded: "2026-06-09",
  },
  {
    id: "32",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8nAPAb4tOmv8nw3jxFY0i4PSNrVytgQB9KURDZ",
    alt: "抱胸大叔20cm正面",
    category: "抱胸大叔20cm",
    productId: "抱胸大叔20cm",
    dateAdded: "2026-06-08",
  },
  {
    id: "33",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8nLq0nKIkT60GEYe7P4xUFXDsnbRJgVrAvkNhf",
    alt: "抱胸大叔20cm侧面",
    category: "抱胸大叔20cm",
    productId: "抱胸大叔20cm",
    dateAdded: "2026-06-08",
  },
  {
    id: "34",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8nP6haId4q5GjguEDa2mCUNLnp0xTohyFWbd94",
    alt: "龟甲缚大叔15cm正面",
    category: "龟甲缚大叔15cm",
    productId: "龟甲缚大叔15cm",
    dateAdded: "2026-06-09",
  },
  {
    id: "35",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8nUJesw1qF78qWcyhKoVM0OGn9BgdjR6X3zxuI",
    alt: "龟甲缚大叔15cm背面",
    category: "龟甲缚大叔15cm",
    productId: "龟甲缚大叔15cm",
    dateAdded: "2026-06-09",
  },
  {
    id: "36",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8nxlLNqH6hZy5jkTlzpntvNC8M7Rf3EIoexVKc",
    alt: "肌肉展示上色版本特写",
    category: "肌肉展示上色20cm",
    productId: "肌肉展示上色20cm",
    dateAdded: "2026-06-14",
  },
  {
    id: "37",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8nO65t3KA1KaEGOwJjhU9iPmzu5ZcnyHlN4vrg",
    alt: "肌肉展示上色版本侧45度",
    category: "肌肉展示上色20cm",
    productId: "肌肉展示上色20cm",
    dateAdded: "2026-06-14",
  },
  {
    id: "38",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8nOFvwWI7A1KaEGOwJjhU9iPmzu5ZcnyHlN4vr",
    alt: "肌肉展示上色版本侧45度背面",
    category: "肌肉展示上色20cm",
    productId: "肌肉展示上色20cm",
    dateAdded: "2026-06-14",
  },
  {
    id: "39",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8nNAPU8IZCgDF3nVquTl5Mb1ySotZEdeIwfAYj",
    alt: "肌肉展示上色版本正面",
    category: "肌肉展示上色20cm",
    productId: "肌肉展示上色20cm",
    dateAdded: "2026-06-14",
  },
  {
    id: "40",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8n5ThGhOXz6U2EPGx3uv8mrY01H7BXVnIkOboC",
    alt: "肌肉展示上色版本背面特写",
    category: "肌肉展示上色20cm",
    productId: "肌肉展示上色20cm",
    dateAdded: "2026-06-14",
  },
  {
    id: "41",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8n35w9C0KGTK7dgnB8yJtOAUoMb1v6FPakS0cR",
    alt: "肌肉男香插侧面",
    category: "肌肉男香插15cm",
    productId: "肌肉男香插15cm",
    dateAdded: "2026-06-18",
  },
  {
    id: "42",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8n73T1yZpn5Jt6Epgw89zD0j7TQ2ha1Xr4MyZH",
    alt: "肌肉男香插正面",
    category: "肌肉男香插15cm",
    productId: "肌肉男香插15cm",
    dateAdded: "2026-06-18",
  },
  {
    id: "43",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8nJJ13KVxdqHkuRfTyKpmOUar05MSiXxn4WlvG",
    alt: "肌肉男香插背面",
    category: "肌肉男香插15cm",
    productId: "肌肉男香插15cm",
    dateAdded: "2026-06-18",
  },
  {
    id: "44",
    src: "https://os84zrjblr.ufs.sh/f/A3OWyvtOmv8n8OxkV6cV7wkEHQvnxJzYWSqs3cmf6X4DRGpA",
    alt: "肌肉男香插斜45度",
    category: "肌肉男香插15cm",
    productId: "肌肉男香插15cm",
    dateAdded: "2026-06-18",
  },
];
