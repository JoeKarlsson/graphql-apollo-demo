import React from 'react';

const Footer = () => {
	return (
		<footer className="bg-near-black white-80 pv5 pv6-l ph4">
			<p className="f6">
				<span className="dib mr4 mr5-ns">
					©{new Date().getFullYear()} Joe Karlsson
				</span>
				<a className="link white-80 hover-gold" href="/about">
					{' '}
					About{' '}
				</a>{' '}
				/
				<a className="link white-80 hover-green" href="https://joekarlsson.com">
					joekarlson.com{' '}
				</a>
			</p>
		</footer>
	);
};

export default Footer;
