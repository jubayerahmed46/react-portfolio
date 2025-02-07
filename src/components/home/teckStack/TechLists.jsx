import css from "../../../assets/tech/css.webp";
import express from "../../../assets/tech/expressjs.webp";
import git from "../../../assets/tech/git.webp";
import github from "../../../assets/tech/github.webp";
import html from "../../../assets/tech/html.webp";
import js from "../../../assets/tech/js.webp";
import mongodb from "../../../assets/tech/mongodb.webp";
import node from "../../../assets/tech/node-js.webp";
import react from "../../../assets/tech/react.webp";
import tailwind from "../../../assets/tech/tailwindcss.webp";
import vscode from "../../../assets/tech/vscode.webp";
import jwt from "../../../assets/tech/jwt.png";
import stripe from "../../../assets/tech/stripe.jpeg";
import daisyUi from "../../../assets/tech/daisyui.png";
import nodemailer from "../../../assets/tech/nodemailer.png";

const TechList = () => {
  return (
    <div className=" mt-10 flex flex-wrap justify-center gap-10">
      <div className="flex md:flex-row flex-col gap-13">
        <div className="grid grid-cols-3 gap-5 border p-4 rounded-md border-gray-500/40">
          <img
            data-aos="zoom-in"
            src={html}
            alt="html"
            className="w-20 cursor-pointer rounded-xl transition-all hover:scale-105"
          />
          <img
            data-aos="zoom-in"
            src={css}
            alt="css"
            className="w-20 cursor-pointer rounded-xl transition-all hover:scale-105"
          />

          <img
            data-aos="zoom-in"
            src={tailwind}
            alt="tailwind"
            className="w-20 cursor-pointer rounded-xl transition-all hover:scale-105"
          />
          <img
            data-aos="zoom-in"
            src={js}
            alt="js"
            className="w-20 cursor-pointer rounded-xl transition-all hover:scale-105"
          />

          <img
            data-aos="zoom-in"
            src={react}
            alt="react"
            className="w-20 cursor-pointer rounded-xl transition-all hover:scale-105"
          />
          <img
            data-aos="zoom-in"
            src={daisyUi}
            alt="daisyui"
            className="w-20 cursor-pointer rounded-xl transition-all hover:scale-105"
          />
        </div>
        <div className="grid grid-cols-3 gap-5  border p-4 rounded-md border-gray-500/40">
          <img
            data-aos="zoom-in"
            src={node}
            alt="node"
            className="w-20 cursor-pointer rounded-xl transition-all hover:scale-105"
          />
          <img
            data-aos="zoom-in"
            src={express}
            alt="express"
            className="w-20 cursor-pointer rounded-xl transition-all hover:scale-105"
          />
          <img
            data-aos="zoom-in"
            src={mongodb}
            alt="mongodb"
            className="w-20 cursor-pointer rounded-xl transition-all hover:scale-105"
          />
          <img
            data-aos="zoom-in"
            src={jwt}
            alt="jwt"
            className="w-20 cursor-pointer rounded-xl transition-all hover:scale-105"
          />
          <img
            data-aos="zoom-in"
            src={stripe}
            alt="stripe"
            className="w-20 cursor-pointer rounded-xl transition-all hover:scale-105"
          />
          <img
            data-aos="zoom-in"
            src={nodemailer}
            alt="nodemailer"
            className="w-20 cursor-pointer rounded-xl transition-all hover:scale-105"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5   border p-4 rounded-md border-gray-500/40">
        <img
          data-aos="zoom-in"
          src={vscode}
          alt="vscode"
          className="w-20 cursor-pointer rounded-xl transition-all hover:scale-105"
        />
        <img
          data-aos="zoom-in"
          src={git}
          alt="git"
          className="w-20 cursor-pointer rounded-xl transition-all hover:scale-105"
        />
        <img
          data-aos="zoom-in"
          src={github}
          alt="github"
          className="w-20 cursor-pointer rounded-xl transition-all hover:scale-105"
        />
      </div>
    </div>
  );
};

export default TechList;
