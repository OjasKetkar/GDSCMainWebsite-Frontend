import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Script from 'next/script';

function GDSCLogo() {
	const [loc, setLoc] = useState("/js/script.js")
		
	useEffect(() => {
		const script = document.createElement('script');	
		script.src = loc;
		script.async = true;
	  
		// Check if the script has already been added
		const existingScript = document.querySelector(`[src="${script.src}"]`);
		if (!existingScript) {
		  document.head.appendChild(script);
		}
		setLoc("")
		return () => {
		  document.head.removeChild(script);
		}
	  }, []);

	return (
		<>
			<>
				<Head>
					<>
						{/* AOS Animations CSS */}
						<link rel='stylesheet' href='https://unpkg.com/aos@next/dist/aos.css' />
						{/* Custom CSS */}
						<link rel='stylesheet' href='/css/home/GDSCLogo.css' />
						<link rel='stylesheet' href='/css/home/OurMission.css' />
					</>
				</Head>
			</>
			<main role='main' id='main'>
				<div className='intro-carousel'>
					<div className='intro-cell'>
						<img
							src='data:image/jpeg;base64,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'
							className='intro-graphic'
						/>
						<div className='intro-text'>
							<h1>
								<span style={{ color: '#EB4338' }}>G</span>
								<span style={{ color: '#FFBA02' }}>D</span>
								<span style={{ color: '#01A2F2' }}>S</span>
								<span style={{ color: '#7DBB02' }}>C</span>
								<span> </span>
								<span style={{ color: '#F85514' }}>V</span>
								<span style={{ color: '#4087F3' }}>I</span>
								<span style={{ color: '#EB4338' }}>T</span>
								<span> </span>
								<span style={{ color: '#34A853' }}>P</span>
								<span style={{ color: '#F85514' }}>U</span>
								<span style={{ color: '#FFBA02' }}>N</span>
								<span style={{ color: '#4087F3' }}>E</span>
							</h1>
							<br />
							<i>
								<p style={{fontWeight: "bold"}}>
									<span style={{ color: '#4087F3' }}>CONNECT</span> - <span style={{ color: '#EB4338' }}>INFORM</span> -{' '}
									<span style={{ color: '#FFBA02' }}>INSPIRE</span>{' '}
								</p>
							</i>
							<p className='para mt-3'>
								<span style={{ color: '#EB4338' }}>Changes</span>{ ' '}
								<span style={{ color: '#01A2F2' }}>call</span>{ ' '}
								<span style={{ color: '#FFBA02' }}>for</span>{ ' '}
								<span style={{ color: '#7DBB02' }}>innovation,</span>{ ' '}
								<span style={{ color: '#FFBA02' }}>and</span>{ ' '}
								<span style={{ color: '#EB4338' }}>leads</span>{ ' '}
								<span style={{ color: '#34A853' }}>to</span>{ ' '}
								<span style={{ color: '#4087F3' }}>progress</span>
							</p>
						</div>
					</div>
				</div>
			</main>

			<Script
				strategy='beforeInteractive'
				src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'
			></Script>
			<Script
				strategy='beforeInteractive'
				src='https://cdn.jsdelivr.net/jquery.counterup/1.0/jquery.counterup.min.js'
			></Script>
			<Script
				strategy='beforeInteractive'
				src='https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js'
			></Script>
			<Script
				strategy='beforeInteractive'
				src='https://cdnjs.cloudflare.com/ajax/libs/three.js/89/three.min.js'
			></Script>
			{/* <Script src='https://unpkg.com/flickity@2.1.1/dist/flickity.pkgd.min.js'></Script> */}
			{/* <Script src='https://cdnjs.cloudflare.com/ajax/libs/waypoints/2.0.3/waypoints.min.js'></Script> */}

			<Script strategy='beforeInteractive' src='https://unpkg.com/aos@next/dist/aos.js'></Script>
			{/* <Script src='https://finbyz.tech/assets/finbyzweb/js/combine.min.js'></Script> */}

			{/* <Script strategy='afterInteractive' src='/js/script.js'></Script> */}
		</>
	);
}

export default GDSCLogo;
