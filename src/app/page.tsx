import About from "@/components/About";
import Advocate from "@/components/Advocate";
import Agenda from "@/components/Agenda";
import Banner from "@/components/Banner";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Goals from "@/components/Goals";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import WhyRWF from "@/components/WhyRWL";

export default function Home() {
	return (
		<div>
			<Navbar />
			<Hero />
			<About />
			<WhyRWF />
			<Advocate />
			<Agenda />
			<Banner />
			<Goals />
			<ContactUs />
			<Footer />
		</div>
	);
}
