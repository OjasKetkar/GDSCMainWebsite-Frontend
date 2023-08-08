import type { NextPage } from 'next';
import Head from 'next/head';
const OurMission: NextPage = () => {
	return (
		<>
			<Head>
				<link rel='stylesheet' href='/css/home/OurMission.css' />
			</Head>
			<section className={'ourMissionSection'}>
				<div className={'ourMission_imageContainer'}>
					<img src='/images/our_mission.jpg' alt='Hackathon Image' className={'ourMission_image'} />
				</div>
				<div className={'ourMission_descriptionContainer'}>
					<h2 className={'ourMission_title text-center'}>Our Mission</h2>
					<p className={'ourMission_description'}>
						Our mission at GDSC is to empower students with the technical skills and knowledge needed to thrive in the
						world of technology. We are a community of problem-solvers, innovators, and builders, dedicated to creating
						real-world solutions that make a difference.
					</p>
					<div className='ourMission_buttonContainer flex justify-center'>
						<button className='ourMission_participateButton'>
							<span className='ourMission_buttonText'>Join Now</span>
						</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default OurMission;
