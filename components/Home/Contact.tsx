import type { NextPage } from 'next';
import Head from 'next/head';
const Contact: NextPage = () => {
	return (
		<>
			<Head>
				<link rel='stylesheet' href='/css/home/Contact.css' />
			</Head>
			<div className="background lead-con white" id="contact-us">
                <div className="container cont">

                    <h1 className="head-text">Contact Us</h1>
                    <div className="screen">
                        <div className="screen-header">
                            <div className="screen-header-left">
                                <div className="screen-header-button maximize"></div>
                                <div className="screen-header-button minimize"></div>
                                <div className="screen-header-button close_btn"></div>
                            </div>
                            <div className="screen-header-right">
                                <div className="screen-header-ellipsis"></div>
                                <div className="screen-header-ellipsis"></div>
                                <div className="screen-header-ellipsis"></div>
                            </div>
                        </div>
                        <div className="screen-body">
                            <div className="screen-body-item left">
                                <div className="app-title">
                                    <span>CONTACT</span>
                                    <span>US</span>
                                </div>
                                {/* <!-- <div className="app-contact">CONTACT INFO : +62 81 314 928 595</div> --> */}
                            </div>

                            <div className="screen-body-item right">
                                <div className="app-form">
                                    <div className="app-form-group">
                                        <input className="app-form-control" type="text" placeholder="Name" id="name" required name="entry.2005620554"/>
                                    </div>
                                    <div className="app-form-group">
                                        <input className="app-form-control" type="text" placeholder="Email" id="email" required name="entry.1045781291"/>
                                    </div>
                                    <div className="app-form-group">
                                        <input className="app-form-control" type="text" placeholder="Contact No." id="phone" required name="entry.1166974658"/>
                                    </div>
                                    <div className="app-form-group message">
                                        <textarea className="app-form-control" typeof='text' placeholder="Message" id="message" required name="entry.839337160" rows={5}></textarea>
                                    </div>
                                    <div className="app-form-group buttons">
                                        {/* <!-- <button className="app-form-button">CANCEL</button> --> */}
                                        <button type="submit" className="app-form-button">SEND</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
		</>
	);
};

export default Contact;
