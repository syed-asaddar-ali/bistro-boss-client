import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import featuredImg from "../../../assets/home/featured.jpg"; 
import './Featured.css';

const Featured = () => {
    return (
        <div className='featured-item bg-fixed  text-white pt-8 my-20'>
            <SectionTitle subHeading="check it out" heading="Featured Item"></SectionTitle>
            <div className='md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-60'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10 '>
                    <p>Aug 20, 2029</p>
                    <p className='uppercase'>Where can i get some</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate esse nihil, alias ratione recusandae accusamus veniam impedit provident quia? Maxime cupiditate molestiae repudiandae neque impedit dolore ducimus eligendi. Veritatis, iure a obcaecati cupiditate iusto nemo excepturi tempora quia quod ab illo fugiat inventore, ducimus assumenda soluta, voluptatibus deserunt aliquam! Perferendis.</p>
                    <button className='btn btn-outline border-0 border-b-4 mt-4'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;