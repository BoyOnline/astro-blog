interface BasicData<T> {
  status: number;
  msg: string;
  data: T;
}

interface TimeTracking {
  created_at: string;
  updated_at: string;
  deleted_at: string;
}

interface List<T> {
  list: T[];
  total: number;
}

interface ArticleItem extends TimeTracking {
  id: number;
  cover: string;
  title: string;
  describe: string;
  comments: number;
}

export interface Article extends TimeTracking {
  id: number;
  cover: string;
  title: string;
  describe: string;
  content: string;
  comments: number;
}
