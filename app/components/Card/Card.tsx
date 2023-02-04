import cn from 'classnames';

import { CardProps } from './Card.Props';
import styles from './Card.module.css';

export const Card: React.FC<CardProps> = ({ children, color = 'white', className, ...props }) => {
  return (
    <div
      className={cn(styles.card, className, {
        [styles.blue]: color === 'blue',
      })}
      {...props}
    >
      {children}
    </div>
  );
};
