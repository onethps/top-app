import React, { useEffect } from 'react';

import Star from '../../assets/Star.svg';
import { RatingProps } from './Rating.Props';

export const Rating: React.FC<RatingProps> = ({ ...props }) => {
  const [ratingArray, setRatingArray] = React.useState<JSX.Element[]>(new Array(5).fill(<></>));

  useEffect(() => {
    constructRating(5);
  }, []);

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
      return <Star />;
    });
    setRatingArray(updatedArray);
  };

  return (
    <div>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};
