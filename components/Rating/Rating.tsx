import { RatingProps } from "./Rating.Props";
import Star from "./Star.svg";
import React from "react";

export const Rating: React.FC<RatingProps> = ({ ...props }) => {
  return (
    <div>
      <Star />
    </div>
  );
};
