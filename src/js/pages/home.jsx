import React from "react";
import Navbar from "../component/navbar";
import Jumbotron from "../component/jumbotron";
import Card from "../component/card";
import Footer from "../component/footer";


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Jumbotron />
			<div className="d-flex justify-content-center">
				<Card title={"the strong green boy"} img={"https://hips.hearstapps.com/hmg-prod/images/bbyoda-1575303784.jpeg?resize=1200:*"}/>
				<Card img={"https://www.sideshow.com/cdn-cgi/image/quality=90,f=auto/https://www.sideshow.com/storage/product-images/400369/the-child_star-wars_gallery_63f96869ef49c.jpg"}/>
				<Card />
				<Card />
			</div>
			<Footer />
		</div>
	);
};

export default Home;
