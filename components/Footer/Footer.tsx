import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
// import { Icon } from "@iconify/react";
// import { FaBeer } from 'react-icons/fa';

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaMailBulk, FaGithub, FaInstagram, FaYoutube, FaMedium, FaDiscord, FaMapMarker, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <Head>
				<link rel='stylesheet' href='/css/home/Footer.css' />
			</Head>
    <footer className="footer-distributed">

            <div className="footer-left">
                <a href="./" className="flex items-center">
                    <img className="img-fluid" style={{width:"140px"}} src="/Transparent_LOGO.PNG" alt="dsc_logo"/>
                    <p className="text-white">Lorem, sint obcaecati minus excepturi debitis vel, quibusdam ex, provident distinctio fugiat aut eum voluptatem vitae labore eos quos mollitia quae?</p>
                </a>
                {/* <!-- <p className="footer-links">
            <a href="#">Home</a>
            <a href="#">Blog</a>
            <a href="#">Projects</a>
            <a href="#">Events</a>
            <a href="#">Team</a>
         </p> --> */}
                {/* <!-- <p className="footer-company-name">Bangin &copy; 2018</p> --> */}
            </div>

            <div className="footer-center">
                <div className="flex text-white items-center  contact">
                    <i className="flex justify-center  items-center" ><FaMapMarker /></i>
                    <p className="text-start"><span>666, Upper Indira Nagar, Bibwewadi,</span> Pune, Maharashtra 411037</p>
                </div>
                <div className="flex items-center text-white  contact">
                    <i className="flex justify-center items-center" >< FaPhone/></i>
                    <p>+91 7387082678</p>
                </div>
                <div className="flex items-center text-white  contact">
                    <i className="flex justify-center items-center"> <FaMailBulk /></i>
                    <p><a href="mailto:dsc@vit.edu">dsc@vit.edu</a></p>
                </div>
            </div>

            <div className="footer-right ">
               
                <p className="footer-company-about">Connect | Learn | Grow</p>
                <div className="footer-icons flex items-center justify-center">
                    <a style={{display:"flex", justifyContent:"center", alignItems:"center"}} className="facebook" href="https://www.facebook.com/dscvitpune" target="_blank"><FaFacebookF /></a>
                    <a style={{display:"flex", justifyContent:"center", alignItems:"center"}} className="twitter" href="https://twitter.com/dscvitpune" target="_blank"><FaTwitter /></a>
                    <a style={{display:"flex", justifyContent:"center", alignItems:"center"}} className="linkedin" href="https://www.linkedin.com/company/dscvitpune/" target="_blank"><FaLinkedinIn /></a>
                    <a style={{display:"flex", justifyContent:"center", alignItems:"center"}} className="github" href="https://github.com/dscvitpune" target="_blank"><FaGithub /></a>
                    <a style={{display:"flex", justifyContent:"center", alignItems:"center"}} className="instagram" href="https://www.instagram.com/dscvitpune/" target="_blank"><FaInstagram /></a>
                    <a style={{display:"flex", justifyContent:"center", alignItems:"center"}} className="youtube" href="https://www.youtube.com/c/dscvitpune" target="_blank"><FaYoutube /></a>
                    <a style={{display:"flex", justifyContent:"center", alignItems:"center"}} className="medium_social" href="https://medium.com/dscvitpune" target="_blank"><FaMedium /></a>
                    <a style={{display:"flex", justifyContent:"center", alignItems:"center"}} className="discord" href="http://bit.ly/dscvitpunediscord" target="_blank"><FaDiscord /></a>
                </div>
            </div>
        </footer>
        </>
  );
};

export default Footer;
