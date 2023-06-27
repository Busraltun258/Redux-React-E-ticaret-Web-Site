import React from 'react'
import Slider from 'react-slick';

const SliderComp = () => {
    const settings = {
        //dots: true,
        infinite: true,
        speed: 500,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1
    };
  return (
    <div>
        <Slider {...settings}>
        <div className='!flex items-center bg-gray-100 px-6'>
          <div>
          <div className='text-6xl font-bold'>Apple Telefon Modelleri</div>
          <div className='text-lg my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus corporis quisquam culpa dolorem ad dolores porro quibusdam architecto molestias? Nemo error dolor perferendis, labore accusamus iure hic ipsum! Facere, nemo?</div>
           <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200'>incele</div>
           </div>
            <img className= 'w-[500px]'src="https://www.pngmart.com/files/15/Apple-iPhone-11-PNG-Photo.png" alt="" />
          </div>
          <div className='!flex items-center bg-gray-100 px-6'> 
          <div >
          <div className='text-6xl font-bold'>Apple Telefon Modelleri</div>
          <div className='text-lg my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus corporis quisquam culpa dolorem ad dolores porro quibusdam architecto molestias? Nemo error dolor perferendis, labore accusamus iure hic ipsum! Facere, nemo?</div>
           <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200'>incele</div>
           </div>
          <div>
            <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pink-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1645572315935" alt="" />
          </div>
          </div>
        
        </Slider>
    </div>
  )
}

export default SliderComp