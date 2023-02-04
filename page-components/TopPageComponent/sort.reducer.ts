import { SortEnum } from '@/components/Sort/Sort';

import { ProductModel } from '@/interfaces/product.interface';

export type SortType =
  | { type: SortEnum.Rating }
  | { type: SortEnum.Price }
  | { type: 'initState'; payload: ProductModel[] };

type initialState = {
  products: ProductModel[];
  sort: SortEnum;
};

export const sortReducer = (state: initialState, action: SortType) => {
  switch (action.type) {
    case SortEnum.Rating:
      return {
        sort: SortEnum.Rating,
        products: state.products.sort((a, b) => (a.initialRating > b.initialRating ? -1 : 1)),
      };
    case SortEnum.Price:
      return {
        sort: SortEnum.Price,
        products: state.products.sort((a, b) => (a.price > b.price ? 1 : -1)),
      };
    case 'initState':
      return {
        sort: SortEnum.Rating,
        products: action.payload,
      };
    default:
      throw new Error('Wrong sort type');
  }
};
