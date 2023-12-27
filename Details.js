
import profile from "./assets/profilepic1.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import nodejs from "./assets/techstack/nodejs.png";
import django from "./assets/techstack/django.png";
import python from "./assets/techstack/python.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import mongodb from "./assets/techstack/mongodb.png";
import mysql from "./assets/techstack/mysql.png";
import expressjs from "./assets/techstack/expressjs.png";
import php from "./assets/techstack/php.png";



// Porject Images
import projectImage11 from "./assets/projects/projectimage11.png";
import projectImage22 from "./assets/projects/projectimage22.png";
import projectimage33 from "./assets/projects/projectimage33.png";
import projectimage44 from "./assets/projects/projectimage44.png";
import projectimage55 from "./assets/projects/projectimage55.png";
import projectimage66 from "./assets/projects/projectimage66.png";







export const profilepic = {
  img: profile,
};




//  Education 
export const eduDetails = [
  {
    Position: "2023 Complete Web Development Certification",
    Company: "Udemy",
    Location: "Online",
    Type: "Full Time",
    Duration: "March 2023",
  },
  {
    Position: "Bachelor Degree in Mathematics And Computer Science",
    Company: `Multimedia University Of Kenya`,
    Location: "Rongai, Kajiado County",
    Type: "Full Time",
    Duration: "sept 2018 - April 2023",
  },
  {
    Position: "Ajira Digital Certification",
    Company: "Ajira Digital Platform",
    Location: "Online",
    Type: "Full Time",
    Duration: "Jul 2022",
  }
 
  
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  python :python,
  nodejs:nodejs,
  js: js,
  django: django,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
  mongodb:mongodb,
  mysql:mysql,
  expressjs:expressjs,
  php:php
};

//  Project Details 
export const projectDetails = [
  {
    title: "Mern complete blogpost site",
    image: projectImage22,
    description: `This is sample project is a complete blogpost with user login, admin and user dashboard, comment and likes(only by logged in users), file upload
    .the site is using Mongo DB database and is hosted on render.com. the site is fully responsive on all devices`,
    techstack: "mongodb database, reactjs, expressjs, nodejs",
    previewLink: "https://blog-mern-stack.onrender.com/",
    githubLink: "https://github.com/bethwel-developer/Mern-complete-blogsite",
  },
  {
    title: "B_I.T solutions web services site",
    image: projectImage11,
    description: `This project is an IT services front end website created with React js and hosted on netlify.the site is fully responsive on all devices(customized for large devices such as desktops and small devices ie mobile phones.)
    `,
    techstack: "Reactjs,tailwindcss",
    previewLink: "https://techiebrand.netlify.app/",
    githubLink: "https://github.com/bethwel-developer/TECHBRAND",
  },
  
  {
    title: "Guesty real estate desktop website",
    image: projectimage44,
    description: `This is a multipage real estate website user interface responsive in desktop view with multiple pages ie blog, services,pricing and contact page.`,
    techstack: "reactjs,npm dependecies",
    previewLink: "https://guestyrealestates.netlify.app/",
    githubLink: "https://github.com/bethwel-developer/realestate-react-website-desktop-site.",
  },
  {
    title: "fully responsive Real estate website.",
    image: projectimage33,
    description: `This is sample project is a real estate website with a beautiful user interface created with reactjs and tailwind css. the site is fully responsive on all devices {desktop, tablet and mobile devices}. the
    site is hosted on netlify. `,
    techstack: "Reactjs, yarn",
    previewLink: "https://bethwelrealestate.netlify.app/",
    githubLink: "https://github.com/bethwel-developer/realestate-Reactjs-website.",
  },
  {
    title: "Integrating Lipa na Mpesa to Website using Daraja API & STK Push",
    image: projectimage55,
    description: `This project can be used to integrate Mpesa payment by customers whereby a customer receives an STK push to input pin and amount on goods from an 
    online store. The transactions creates a token and initiates a callback to safaricom Daaraja API`,
    techstack: "safaricom Daraja API, nodejs, express",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "vanilla javascript drumskit site",
    image: projectimage66,
    description: `This project is meant to showcase my vanilla javascript{javascript with no libraries} skills.The project is a simple drum sound site to play different beats`,
    techstack: "vanilla JavaScript, HTML/CSS",
    previewLink: "https://sweet-gumdrop-557942.netlify.app/",
    githubLink: "https://github.com/bethwel-developer/vanilla-javascript-drumskit-site",
  },
];

