import React from "react";
import { eduDetails } from "../Details";
import Technologies from "../pages/Technologies";
import { FaDownload } from "react-icons/fa";
import Education from "../components/Education"



function About() {
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-3xl   text-[#A6FF96]   md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          About Me
        </h1>
        <h2 className=" py-8 lg:max-w-3xl font-bold  italic text-[#D0D4CA]  ">Hi am Bethwel,
a passionate FULL stack developer with a strong foundation in JavaScript and experience in building web applications. I specialize in creating 
responsive and interactive user interfaces using React.js and integrating them with backend APIs built with Node.js, Express.js and php. With a keen 
eye for detail and a commitment to writing clean, maintainable code, I strive to create high-quality software that not only meets the client's
 requirements but also adheres to industry best practices. I am constantly seeking opportunities to learn and grow, as I believe that continuous
  improvement is key to staying ahead in the fast-paced world of web development. I am a firm believer in the importance of teamwork and effective 
  communication. I enjoy collaborating with cross-functional teams, including designers, product managers, and fellow developers, to bring ideas to 
  life and deliver successful projects.</h2>
      </section>
      
      <div className="flex ">
      <span class="pr-6 text-[yellow] text-[24px]"><FaDownload/></span> 
      <a  class=" text-[yellow] text-[24px]" href="https://docdro.id/9G5BpJA" target="_blank" rel="noreferrer noopener">Download Resume`</a>

</div>
      <section>
        <h1 className="text-2xl pt-10 text-[#A6FF96]   md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Education
        </h1>
        <div>
        {React.Children.toArray(
          eduDetails.map(({ Position, Company, Location, Type, Duration }) => (
           <Education
              position={<span className="text-[#F5F7F8]">{Position}</span>}
              company={<span className="text-[#D0D4CA]">{Company}</span>}
              location={<span className="text-[#D0D4CA]">{Location}</span>}
              type= {Type}
              duration={<span className="text-[#D0D4CA]">{Duration}</span>}
            />
          ))
        )}


        </div>
        
      </section>
      <Technologies />
    </main>
  );
}

export default About;
