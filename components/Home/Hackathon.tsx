import type { NextPage } from 'next';
import Head from 'next/head';
const Hackathon: NextPage = () => {
	return (
		<>
			<Head>
				<link rel='stylesheet' href='/css/home/hackathonSection.css' />
			</Head>
			<section className={'hackathonSection'}>
				<div className={'imageContainer'}>
					<img
						src='/images/hackathon.jpg'
						alt='Hackathon Image'
						className={'image'}
					/>
				</div>
				<div className={'descriptionContainer'}>
					<h2  className={'title text-center'}>Hackathons</h2>
					<p className={'description'}>
						The WebHacks virtual hackathon will bring together talented performance, developers, engineers,
						technologists to compete over 2 weeks to develop creative Solutions in web development. Participate now to
						gain experience and win amazing prizes.
					</p>
					<div className="flex justify-center">

					<button className='participateButton text-center'>
						<span className='buttonText'>Participate Now</span>
					</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default Hackathon;
