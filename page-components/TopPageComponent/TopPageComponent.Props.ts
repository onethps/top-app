import React, { ButtonHTMLAttributes, HTMLAttributes } from 'react';

import { TopLevelCategory, TopPageModel } from '@/interfaces/page.interface';
import { ProductModel } from '@/interfaces/product.interface';

export interface TopPageComponentProps extends HTMLAttributes<HTMLDivElement> {
  firstCategory: TopLevelCategory;
  page: TopPageModel;
  products: ProductModel[];
}
