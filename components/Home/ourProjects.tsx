import type { NextPage } from 'next';
import Head from 'next/head';
const OurProjects: NextPage = () => {
	return (
		<>
			<Head>
				<link rel='stylesheet' href='/css/home/OurProjects.css' />
			</Head>
			<section className={'ourProjectsSection'}>
				<div className={'imageContainer'}>
					<img
						src='/images/projects.jpg'
						alt='Hackathon Image'
						className={'ourProjects_image'}
					/>
				</div>
				<div className={'ourProjects_descriptionContainer'}>
					<h2 className={'ourProjects_title text-center'}>Projects</h2>
					<p className={'ourProjects_description'}>
                        We do projects which have a social impact, while not charging anything for the solutions developed.
                        <br />
                        If you need help with your problem, DSC VIT Pune is ready to help you with a competent solution.
					</p>
					<div className="flex justify-center">

					<button className='ourProjects_participateButton'>
						<span className='ourProjects_buttonText'>View Projects</span>
					</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default OurProjects;
