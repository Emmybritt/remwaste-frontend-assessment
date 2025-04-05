import { cn } from "@/lib/utils";

interface IButton {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  children: React.ReactNode;
}
const Button = ({ onClick, className, children }: IButton) => {
  return (
    <button
      onClick={onClick}
      className={cn(className, "w-full rounded-sm hover:opacity-65")}
    >
      {children}
    </button>
  );
};

export default Button;
