import React from 'react';

import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,

  })


  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* img */}
          <motion.div
          variants={fadeIn('rigth', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 bg-about bg-contain bg-no-repeat h-[640px]
          mix-blend-lighten bg-top'></motion.div>
          {/* txt */}
          <motion.div
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
           className='flex-1'>
            <h2 className='h2 text-accent'>Sobre mim.</h2>
            <h3 className='h3 mb-4'>Eu sou um Desenvolvedor Front-End com 2 anos de experiencia.</h3>
            <p className='mb-6 '>Com minha experiência prévia como Programador, adquiri habilidades de infra e desenvolvimento de aplicativos da web usando JavaScript. 
              Tenho expertise em comunicação, o que me permite trabalhar de maneira eficiente em equipe. Meu projeto mais relevante como Desenvolvedor Front-End 
              já conta com 3 mil usuários ativos e tem como missão encontrar carros roubados. Conectar e ajudar pessoas.</p>

            <div className='flex gap-x-6 lg:gap-x-10 mb-12 '>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {
                    inView ?
                      <CountUp start={0} end={2} duration={4} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px] ' >
                  Anos de <br />
                  Experiencia
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {
                    inView ?
                      <CountUp start={0} end={15} duration={5} /> : null}
                  K+
                </div>
                <div className='font-primary text-sm tracking-[2px] ' >
                  Views em <br />
                  Projetos
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {
                    inView ?
                      <CountUp start={0} end={5} duration={4} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px] ' >
                  Projetos <br />
                  Realizados
                </div>
              </div>
            </div>

            <div className='flex gap-x-8 items-center mt-9'>
              <button className='btn btn-lg'>Entre em contato</button>
              <a href='#' className='text-gradient btn-link' >Meu Portifolio</a>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )

};

export default About;
