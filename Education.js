import React from "react";

function Work({ position, company, location, type, duration }) {
  return (
    <article className="pt-8 border-b-2 border-dark-content pb-5  border-opacity-20 dark:border-opacity-20">
      <div className="flex justify-between items-center">
        <h1 className="text-content md:text-lg lg:text-xl font-semibold">{position}</h1>
        <div className="btn bg-greenbg text-green-text text-xs inline-block rounded-3xl px-3 py-1 min-w-fit ">
          {type}
        </div>
      </div>
      <div className="flex justify-between pt-2">
        <div className="flex flex-col md:flex-row">
          <div className="flex items-center pr-5">
            <p className="text-content text-xs md:text-sm font-semibold pl-1">{company}</p>
          </div>
          <div className="flex items-center">
          


            <p className="text-content text-xs md:text-sm font-semibold pl-1">{location}</p>
          </div>
        </div>
        <p className="text-content text-xs md:text-sm font-semibold pl-1 min-w-fit">{duration}</p>
      </div>
    </article>
  );
}

export default Work;
