export interface FormProps {
  img: FileList;
  title: string;
  price: string;
  contents: string;
  time: string;
  servings: string;
  radioOption: string;
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
