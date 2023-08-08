import type { NextPage } from 'next';
import Head from 'next/head';
const OurVision: NextPage = () => {
	return (
		<>
			<Head>
				<link rel='stylesheet' href='/css/home/ourVision.css' />
			</Head>
			<section className={'ourVisionSection'}>
				<div className={'imageContainer'}>
					<img
						src='/images/our_vision.png'
						alt='Hackathon Image'
						className={'ourVision_image'}
					/>
				</div>
				<div className={'ourVision_descriptionContainer'}>
					<h2 className={'ourVision_title text-center'}>Our Vision</h2>
					<p className={'ourVision_description'}>
                    The main aim of our team is about empowering students and developers to learn about a wide range of technologies and apply their new learnings to build great solutions for real-world problems.
					</p>
					<div className="flex justify-center">

					<button className='ourVision_participateButton '>
						<span className='ourVision_buttonText'>Join Us</span>
					</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default OurVision;
