'use client'
import { useFormStatus } from "react-dom";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
}

const Button = ({ children, className, type }: ButtonProps) => {
  const { pending } = useFormStatus(); 
  return (
  <button
    type={type}
    disabled={pending && type === "submit"}
    className={`font-medium sm:text-[20px] text-[17px] text-center outline-none bg-primary hover:bg-black text-white
    px-6 py-3 shadow-sm shadow-black rounded-tr-none rounded-full capitalize transition ease-in-out
    hover:-translate-y-1 hover:scale-105 duration-200 min-width-[100px] max-width-[300px] ${className}`}
  >
    {children}
  </button>
)};

export default Button;
// ${pending? "bg-black scale-105 translate-y-1" : ""}