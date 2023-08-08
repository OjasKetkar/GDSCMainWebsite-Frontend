import type { NextPage } from 'next';
import Head from 'next/head';
const Events: NextPage = () => {
	return (
		<>
			<Head>
				<link rel='stylesheet' href='/css/home/Events.css' />
			</Head>
			<section className={'eventsSection'}>
				<div className={'events_imageContainer'}>
					<img src='/images/events.jpg' alt='Hackathon Image' className={'ourMission_image'} />
				</div>
				<div className={'events_descriptionContainer'}>
					<h2 className={'events_title text-center'}>Events</h2>
					<p className={'events_description'}>
                    Our archive of events contains workshops on Machine Learning and Cloud Computing, with sessions on Git, Python and other required technologies being conducted frequently.
					</p>
					<div className='events_buttonContainer flex justify-center'>
						<button className='events_participateButton'>
							<span className='events_buttonText'>Know more</span>
						</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default Events;
