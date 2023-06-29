import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { BsArrowUpRight } from 'react-icons/bs';

const services = [
  {
    name: "Desenvolvedor Front-End",
    description: "",
    link: "Saiba mais"
  },
  {
    name: "UI/UX Design",
    description: "",
    link: "Saiba mais"
  },
  {
    name: "Streamer",
    description: "",
    link: "Saiba mais"
  }
]

const Services = () => {
  return (
    <section className='section ' id='services'>
      <div className='container mx-auto'>
        <div>
            {/*Text */}
            <div></div>
            {/*Services */}
            <div></div>
        </div>
      </div>
    </section>
  )
};

export default Services;
