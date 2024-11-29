import About from "@/components/About";
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
		</div>
	);
}
