import React, { FC } from "react";
import ThumbnailPresenter from "./ThumbnailPresenter";

interface IThumbnailContainerProps {
  items: {
    itemId: string;
    imageId: string;
    title: string;
    price: number;
    description: string;
    salePrice: number;
  }[];
}

const ThumbnailContainer: FC<IThumbnailContainerProps> = (
  props: IThumbnailContainerProps
) => {
  const { items } = props;

  return (
    <div className="home-component">
      <ThumbnailPresenter items={items} />
    </div>
  );
};

export default ThumbnailContainer;
