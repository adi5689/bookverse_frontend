'use client';
import React from 'react';
import { Footer } from 'flowbite-react';
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import {FaBookBookmark} from "react-icons/fa6";


const FooterContainer = () => {
  return (
    <Footer container className='bg-[#1d1d1d]'>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className='mb-4'>
          <Link to="/" className='text-2xl font-bold text-[#fffc4c] items-center gap-2'>
                <FaBookBookmark className='inline-block'/> BooK<span className='text-white'>VersE</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">BooKVersE</Footer.Link>
                <Footer.Link href="#">Offline Store</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Instagram</Footer.Link>
                <Footer.Link href="#">Facebook</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="BooKVersE™" year={2023} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} className='hover:text-[blue]' />
            <Footer.Icon href="#" icon={BsInstagram} className='hover:text-[#ff5aac]' />
            <Footer.Icon href="#" icon={BsTwitter} className='hover:text-[#5d93ff]'/>
            <Footer.Icon href="#" icon={BsGithub} className='hover:text-[#e144a2]'/>
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default FooterContainer;
