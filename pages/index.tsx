import type { NextPage } from 'next';
import GDSCLogo from '../components/Home/GDSCLogo';
import Head from 'next/head';
import Hackathon from '../components/Home/Hackathon';
import OurMission from '../components/Home/OurMission';
import OurVision from '../components/Home/OurVision';
import Events from '../components/Home/Events';
import OurProjects from '../components/Home/ourProjects';
import Contact from '../components/Home/Contact';
import { useEffect } from 'react';

const Home: NextPage = () => {

  return (

    <>
     
			{/* Logo Section Start */}
      <br />
			<GDSCLogo />
			{/* Logo Section End */}
      {/* Hackathon Part Start */}
      <Hackathon />
      {/* Hackathon Part End */}
      <br />
      <br />
      {/* Our Mission Start */}
      <OurMission />
      {/* Our Mission End */}
      <br />
      <br />
      {/* Our Vision Start */}
      <OurVision />
      {/* Our Vision End */}
      <br />
      <br />
      {/* Our Events Start*/}
      <Events />
      {/* Our Events End*/}
      <br />
      <br />
      {/* Our Projects Start*/}
      <OurProjects />
      {/* Our Projects End*/}
      <br />
      <br />
      {/* Contact Us Start*/}
      {/* <Contact /> */}
      {/* Contact Us End*/}
      {/* Footer Start */}
        
      {/* Footer Ends */}
		</>
	);
};

export default Home;
