export type CustomElement = {
  type: string;
  children: CustomText[];
  align?: string;
};
export type CustomText = {
  text: string;
  bold?: boolean;
  italic?: boolean;
  code?: boolean;
};
