import { TopPageComponentProps } from 'page-components/TopPageComponent/TopPageComponent.Props';
import { SortType, sortReducer } from 'page-components/TopPageComponent/sort.reducer';
import React, { useEffect, useReducer } from 'react';

import AdvantageIcon from '@/assets/icons/menu/advantage.svg';

import { Card } from '@/components/Card/Card';
import { Sort, SortEnum } from '@/components/Sort/Sort';

import styles from '../TopPageComponent/TopPageComponent.module.css';

export const TopPageComponent = ({ page, firstCategory, products }: TopPageComponentProps) => {
  const [{ products: sortedProducts, sort }, dispatch] = useReducer(sortReducer, {
    products,
    sort: SortEnum.Rating,
  });

  useEffect(() => {
    dispatch({ type: 'initState', payload: products });
  }, [products]);

  const sortProductsHandler = (action: SortEnum) => {
    dispatch({ type: action });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.headerPage}>
        <h1 className={styles.headerTitle}>{page.title}</h1>
        {products && <span className={styles.productsCount}>{products.length}</span>}
        <Sort sort={sort} setSort={sortProductsHandler} />
      </div>
      <div>
        {sortedProducts.map((p) => (
          <div key={p._id}>{p.title}</div>
        ))}
      </div>
      <div className={styles.jobsBlock}>
        <div className={styles.jobsHeader}>
          <h2>Вакансии - Photoshop</h2>
          <span className={styles.hhLogo}>hh.ru</span>
        </div>

        <div className={styles.jobsCardsContainer}>
          <Card className={styles.countCard}>
            <h4 className={styles.title}>Всего вакансий</h4>
            <span className={styles.count}>1 210</span>
          </Card>
          <Card className={styles.jobCard}>
            <div>
              <h4 className={styles.jobCardTitle}>Начальный</h4>
              <span className={styles.jobPrice}>110 000 ₽</span>
            </div>
            <div>
              <h4 className={styles.jobCardTitle}>Начальный</h4>
              <span className={styles.jobPrice}>110 000 ₽</span>
            </div>
            <div>
              <h4 className={styles.jobCardTitle}>Начальный</h4>
              <span className={styles.jobPrice}>110 000 ₽</span>
            </div>
          </Card>
        </div>
      </div>
      <div className={styles.advantagesBlock}>
        <h2>Преимущества</h2>

        {page.advantages.map((item) => {
          return (
            <div key={item._id} className={styles.advantages}>
              <AdvantageIcon />
              <h3>{item.title}</h3>
              <hr className={styles.vline} />
              <div className={styles.advBody}>{item.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
