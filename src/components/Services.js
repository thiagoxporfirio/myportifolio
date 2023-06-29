import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { BsArrowUpRight } from 'react-icons/bs';

const services = [
  {
    name: "Desenvolvedor Front-End",
    description: "Com minha habilidade como Desenvolvedor, busco ajudar pessoas a resolver problemas na Web e impactar suas vidas de forma direta e indireta.",
    link: "Saiba mais"
  },
  {
    name: "UI/UX Design",
    description: "Depois de cursos e preparamentos com muita pratica em UI/UX Designer estou pronto para construir os melhores padroes de layouts responsivos.",
    link: "Saiba mais"
  },
  {
    name: "Streamer",
    description: "Jogando a noite transmitindo jogos em que eu curto no tempo livre.",
    link: "Saiba mais"
  }
]

const Services = () => {
  return (
    <section className='section ' id='services'>
      <div className='container mx-auto'>
        <div className=' flex flex-col lg:flex-row'>
            {/*Text */}
            <div className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
                <h2 className='h2 text-accent mb-6'>Oque eu faço?</h2>
                <h3 className='h3 max-w-[455pc] mb-16'>
                  
                  Eu sou um Desenvolvedor Front-End com 2 anos de experiencia.
                </h3>
                <button className='btn btn-sm '>Veja meu trabalho</button>
            </div>
            {/*Services */}
            <div className='flex-1 '>
              {/*Services e list */}
              <div>
                  {services.map((service, index) => {

                    const {name, description, link} = service
                      return (
                      <div key={index}>
                        <div className='max-w-[250px]'>
                          <h4 className='text-[20px] tracking-wide font-primary font-semibold mb-6'>{name}</h4>
                          <p className='font-secondary leading-tight'>{description}</p>
                        </div>
                        <div>links</div>
                      </div>
                      );
                  })};
              </div>
            </div>
        </div>
      </div>
    </section>
  )
};

export default Services;
