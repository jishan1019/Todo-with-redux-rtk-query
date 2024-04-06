import { ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
};

export default function Container({ children }: TContainerProps) {
  return <div>{children}</div>;
}
