import React from "react";
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
  const techs = [
    html,
    css,
    tailwind,
    js,
    react,
    daisyUi,
    node,
    express,
    mongodb,
    jwt,
    stripe,
    nodemailer,
    vscode,
    git,
    github,
  ];

  return (
    <div className="mt-10 flex justify-center">
      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-8">
        {techs.map((tech, index) => (
          <img
            key={index}
            data-aos="zoom-in"
            src={tech}
            alt={`tech-${index}`} // Added alt text
            className="w-20 cursor-pointer rounded-xl transition-all hover:scale-105"
          />
        ))}
      </div>
    </div>
  );
};

export default TechList;
