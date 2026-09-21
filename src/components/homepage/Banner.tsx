import Image from 'next/image';
import React from 'react';
import bannerImg from '@/assets/hero_img.jpg';

const Banner = () => {
  return (
    <section className="max-w-7xl mx-auto my-10 bg-slate-300 rounded-4xl">
      <div className="grid grid-cols-2 gap-4 items-center py-10  ">
        <div className="p-8 space-y-10">
          <h1 className="font-bold text-3xl">
            Books to freshen up <br /> your bookshelf
          </h1>
          <button className="btn btn-success">View The List</button>
        </div>

        <div>
          <Image className='p-4' src={bannerImg} alt='bannerImage'></Image>
        </div>
      </div>
    </section>
  );
};

export default Banner;
