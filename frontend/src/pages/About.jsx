import { assets } from '../assets/frontend_assets/assets';
import NewsLetter from '../components/NewsLetter';
import Title from '../components/Title'
import React from 'react';
const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
      <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-justify text-gray-600'>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quos ut incidunt quidem corrupti amet at explicabo, magni possimus voluptas est voluptatem, alias exercitationem reprehenderit voluptate quae cupiditate expedita. Omnis.
      </p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti aut vitae provident enim cupiditate tenetur ratione a adipisci cumque, harum laboriosam blanditiis! Voluptatem quos nisi soluta magnam iusto quo explicabo?</p>
      <b className='text-gray-800 text-justify'>Our Mission</b>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ut in enim sit. Voluptatibus, mollitia fuga ad sit sint beatae provident aut, ipsa quas officia possimus magnam atque asperiores. Natus.</p>
      </div>
      </div>
      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20 '>
        <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>
            Quality Assurance:
          </b>
          <p className="text-gray-600 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam asperiores error distinctio eveniet, eaque ratione, quaerat a ex, dicta consequatur sunt nesciunt nihil! Eligendi beatae tempore debitis quo, optio perferendis!</p>
        </div>
        <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>
            Convenience:
          </b>
          <p className="text-gray-600 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam asperiores error distinctio eveniet, eaque ratione, quaerat a ex, dicta consequatur sunt nesciunt nihil! Eligendi beatae tempore debitis quo, optio perferendis!</p>
        </div>
        <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>
            Exceptional Customer Service :
          </b>
          <p className="text-gray-600 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam asperiores error distinctio eveniet, eaque ratione, quaerat a ex, dicta consequatur sunt nesciunt nihil! Eligendi beatae tempore debitis quo, optio perferendis!</p>
        </div>
      </div>
      <NewsLetter/>
    </div>
  )
}

export default About
