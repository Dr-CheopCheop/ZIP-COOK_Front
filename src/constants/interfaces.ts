export interface FormProps {
  img: FileList;
  title: string;
  price: string;
  discountPrice: string;
  contents: string;
  cookTimes: string;
  place: string;
  quantity: string;
  difficulty: string;
  foods: string[];
  manuals: string[];
}

export interface addressProps {
  sido: string;
  sigugun: string;
  dong: string;
}

export interface buttonProps {
  children: React.ReactNode;
  color?: string;
  active?: boolean;
}

export interface inputProps {
  placeholder?: string;
  value?: string;
  color?: string;
  active?: boolean;
}

export interface requestConfigDataProps {
  url: string;
  method: string;
  headers: object;
  data: object | null;
}
export interface levelViewProps {
  isView: boolean;
}
export interface PostListProps {
  category: string;
}
export interface levelActiveProps {
  isActive: boolean;
}
