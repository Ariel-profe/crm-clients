import { FC, ReactElement } from "react";

interface Props{
    children: ReactElement;
};

export const Error:FC<Props> = ({children}) => {
  return (
    <div 
        className="text-center my-4 p-2 bg-red-600 font-bold text-white uppercase"
    >{children}
    </div>
  )
}
