import React, { FC } from "react";
import Thumbnail from "../../../blocks/Thumbnail/Thumbnail";

interface IThumbnailPresenterProps {
  items: {
    itemId: string
    imageId: string
    title: string
    price: number
    description: string
    salePrice: number
  }[]
}

const ThumbnailPresenter: FC<IThumbnailPresenterProps> = (
  props: IThumbnailPresenterProps
) => {
  const { items } = props;

  return (
    <div>
      {items.map((item) => (
        <Thumbnail key={item.itemId} image={item.imageId} title={item.title} />
      ))}
    </div>
  );
};

export default ThumbnailPresenter;
