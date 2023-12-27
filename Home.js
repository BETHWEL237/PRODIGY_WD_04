import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { profilepic } from "../Details";
import { NavLink } from "react-router-dom";


function Home() {
  const {  img } = profilepic;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(
      h11.current,
      {
        x: "-100%",
        delay: 0.8,
        opacity: 0,
        duration: 2,
        ease: "Power3.easeOut",
      },
      "<"
    )
      .from(
        h12.current,
        {
          x: "-100%",
          delay: 0.05,
          opacity: 0,
          duration: 1,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        h13.current,
        {
          x: "-100%",
          delay: 0.1,
          opacity: 0,
          duration: 1,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        myimageref.current,
        {
          x: "200%",
          delay: 0.2,
          opacity: 0,
          duration: 1,
          ease: "Power3.easeOut",
        },
        "<"
      );
  }, []);

  return (
    <div>
    <main className="container mx-auto max-width section-home md:flex justify-between items-center ">
      <div>
        <h1
          className="text-2xl  text-[#D0D4CA] md:text-4xl xl:text-5xl  font-bold"
        >
          Hi,👋My Name is 
        </h1>
        <h1
         
          className="text-2xl bg-clip-text bg-gradient text-[red] md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
           Bethwel Njenga 
        </h1>
        <h2
          className="text-2xl text-[#D0D4CA] md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
Full Stack Developer <br />Based In Kenya.
            
       </h2>

            
      </div>
      <div className=" md:mt-0  ">
        <img ref={myimageref} className="w-[650px] md:ml-auto " src={img} alt="bethwel-profile" />
      </div>
      
    </main>
    <main className="container mx-auto max-width mt-12 flex  items-center mb-14 ">
    <div>
<NavLink to="/about">
    <button class="relative px-2 py-3 mr-4 overflow-hidden font-bold text-[white] border border-gray-100 rounded-lg shadow-inner group ">
<span class="relative transition-colors duration-300 delay-200 group-hover:text-[red] ease">ABOUT ME</span>
</button>
    </NavLink>
</div>
   
<div>
<NavLink to="/projects">
<button class="relative px-2 py-3 mr-4 overflow-hidden font-bold text-[white] border border-gray-100 rounded-lg shadow-inner group ">
<span class="relative transition-colors duration-300 delay-200 group-hover:text-[red] ease">PROJECTS</span>
</button>
    </NavLink>
</div>
    
<div>
<NavLink to="/contact">
<button class="relative px-2 py-3 mr-4 overflow-hidden font-bold text-[white] border border-gray-100 rounded-lg shadow-inner group ">
<span class="relative transition-colors duration-500 delay-200 group-hover:text-[red]  ease">CONTACTS</span>
</button>
    </NavLink>
</div>
   

   

      </main>
    </div>
   
  );
 
}

export default Home;