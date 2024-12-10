import React, { FC } from "react"

interface IThumbnailProps {
    image: string
    title: string
}

const Thumbnail: FC<IThumbnailProps> = (props: IThumbnailProps) => {

    const { image , title } = props

    return (
        <a 
          data-cy="thumbnail"
          className="thumbnail-component"
        >
            <div>
                <img  src={image} alt={title} />
            </div>
            <p>{title}</p>
        </a>
    )
}

export default Thumbnail