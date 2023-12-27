import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    html,
    css,
    nodejs,
    python,
    django,
    js,
    react,
    redux,
    tailwind,
    bootstrap,
    sass,
    vscode,
    git,
    github,
    npm,
    postman,
    figma,
    mongodb,
    mysql,
    expressjs,
    php
  } = techStackDetails;
  return (
    <main className="mt-10">
      <div>
        <h1 className="text-3xl  text-[#A6FF96]  md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <h3 className=" py-2 lg:max-w-3xl  text-[#F5F7F8] ">
          Technologies I've been working with recently
        </h3>
      </div>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6  gap-10 pt-6">
        <img src={html} title="html" alt="" />
        <img src={css} title="CSS" alt="" />
        <img src={js} title="JavaScript" alt="" />
        <img src={nodejs} title="nodejs" alt="" />
        <img src={php} title="php" alt="" />

        <img src={django} title="django" alt="" />
        <img src={python} title="python" alt="" />

        <img src={mongodb} title="mongodb" alt="" />
        <img src={mysql} title="mongodb" alt="" />

        <img src={expressjs} title="expressjs" alt="" />
        <img src={react} title="React" alt="" />
        <img src={redux} title="Redux" alt="" />
        <img src={tailwind} title="Tailwind CSS" alt="" />
        <img src={bootstrap} title="Bootstrap" alt="" />
        <img src={sass} title="SASS" alt="" />
      </section>
      <section>
        <h1 className="text-2xl  text-[#A6FF96] pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6  gap-10 pt-6">
        <img src={vscode} title="Visual Studio Code" alt="" />
        <img src={git} title="Git" alt="Git" />
        <img src={github} title="Github" alt="Github" />
        <img src={figma} title="Figma" alt="Figma" />
        <img src={npm} title="NPM" alt="NPM" />
        <img src={postman} title="Postman" alt="Postman" />
      </section>
    </main>
  );
}

export default Technologies;
