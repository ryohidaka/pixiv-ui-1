export type User = {
  id: string;
  name: string;
  avatarURL: string;
};

export type Image = {
  src: string;
};

export type Illust = {
  id: string;
  image: {
    src: string;
  };
  pageCount: number;
  title: string;
  author: User;
};
