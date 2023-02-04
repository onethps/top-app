import React, { ButtonHTMLAttributes, HTMLAttributes } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  color?: 'white' | 'blue';
}
