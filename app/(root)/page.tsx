import PodcastCard from "@/components/PodcastCard";
import { podcastData } from "@/constants";
import React from "react";

function Home() {
  return (
    <div className="mt-9 flex flex-col gap-9 ">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Trending Podcasts</h1>
        <div className="podcast_grid">
          {podcastData.map(({ id, title, imgURL, description }) => (
            <PodcastCard
              key={id}
              podcastID={id}
              imgURl={imgURL}
              title={title}
              description={description}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
