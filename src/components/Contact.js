import React from 'react';
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Contact = () => {
  return (
    <section className='section py-16 lg:selection' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/*text */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex justify-start items-center'>
            <div>
              <h4 className='text-x1 uppercase text-accent font-medium mb-2 tracking-wide'>
                Entrar em contato
              </h4>
              <h2 className=' text-[45px] lg:text-[90px] leading-none mb-12'>
                Vamos trabalhar<br />juntos!
              </h2>
            </div>
          </motion.div>
          {/*form */}
          <motion.form
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 border rounded-md flex flex-col gap-y-6 pb-24 p-6 items-start'>
            <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='text'
              placeholder='Seu nome'
            />
            <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='text'
              placeholder='Seu email'
            />

            <textarea className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
              placeholder='Sua menssagem:' ></textarea>
            <button className='btn btn-lg'>Enviar menssagem</button>
          </motion.form>

        </div>
      </div>

    </section>
  )
};

export default Contact;
