import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Work = () => {
  return (
      <section className='section' id='work'>
          <div className='container mx-auto'>
              <div>
                  <div>
                      {/*Text */}
                      <div>
                          <h2 className='h2 leading-tight text-accent'>Meus trabalhos<br />
                          mais recentes.
                          </h2>
                          <p className='max-w-sm mb-16 '>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
                          type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                          </p>
                          <button className='btn btn-sm'>Ver todos os projetos</button>
                      </div>
                      {/* image*/}
                      <div>
                          {/*Overlay */}
                          <div></div>
                          {/* Img */}
                          <img  src='' alt=''/>
                          {/*Pretitulo */}
                          <div>UI/UX Designer</div>
                          {/*Titulo */}
                          <div>Nome do Projeto</div>
                      </div>
                  </div>
                  <div>2</div>
              </div>
          </div>
      </section>
  );
};

export default Work;
