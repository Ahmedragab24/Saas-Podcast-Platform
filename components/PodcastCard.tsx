import Image from "next/image";
import React from "react";

interface Props {
  podcastID: number;
  title: string;
  imgURl: string;
  description: string;
}

const PodcastCard = ({ podcastID, title, imgURl, description }: Props) => {
  return (
    <div className="cursor-pointer">
      <figure className="flex flex-col gap-2">
        <Image
          src={imgURl}
          width={174}
          height={174}
          alt={title}
          className="aspect-square h-fit w-full rounded-xl 2xl:size-[200px]"
        />
        <div className="flex flex-col">
          <h1 className="text-16 truncate font-bold text-white-1"> {title}</h1>
          <h2 className="text-12 truncate text-white-4 capitalize">
            {description}
          </h2>
        </div>
      </figure>
    </div>
  );
};

export default PodcastCard;
