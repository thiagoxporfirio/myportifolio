import React from "react";
import Image from "../assets/avatar.svg";
import { FaGithub, FaYoutube, FaDribbble } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section className="section " id="home">
      <div className="container mx-auto">
        <div>
          {/* txt */}
          <div>
            <h1>
              THIAGO <span>PORFIRIO</span>
            </h1>
            <div className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1] ">
              <span className=" text-white mr-4">Eu sou um</span>
              <TypeAnimation
                sequence={[
                  "Desenvolvedor Front-end",
                  2000,
                  "UI/UX Designer",
                  2000,
                  "Streamer",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </div>
          </div>
          {/* image */}
          <div>
            <img alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
