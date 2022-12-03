import { ButtonProps } from "./Button.Props";
import cn from "classnames";
import styles from "./Button.module.css";

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className,
  ...props
}) => {
  return (
    <button
      type="button"
      className={cn(styles.button, className, {
        [styles.primary]: variant === "primary",
        [styles.secondary]: variant === "secondary",
      })}
      {...props}
    >
      {children}
    </button>
  );
};
