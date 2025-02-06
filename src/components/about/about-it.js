import assets from '../../assets/assets';

import './about.scss';

const AboutIt = () => {
	return (
		<section className="about about_it" data-tab ='it'>
		<div className="wrapper">
			<div className="image"></div>
			<div className="about__info">
				<h2 className="section-title">About it</h2>
				<div className="divider">
						<img src={assets['beans_b.svg']}
						alt="coffe beans icon" 
						className="divider__img" />
				</div>
				<div className="about_it__details">
					<h3 className="text">
						<span>Country</span>: Brasil
					</h3>
					<p className="text">
						<span>Description</span>: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</p>
					<p className="text price">
						Price:&nbsp; &nbsp;<span>16.99$</span>
					</p>
				</div>
			</div>
		</div>
		</section>
	)
}

export default AboutIt;