import Image from "next/image";
import AboutImg from "../../public/Images/About.png";

export default function About() {
	return (
		<div className='container pt-20 space-y-10' id='About'>
			<div className='w-full text-[96px] text-Orange text-'>
				<h1>About Us</h1>
			</div>
			<div className='flex justify-between items-center'>
				<div className='w-[450px]'>
					<p className='text-[25px]'>
						The Rivers of Waters Foundation is a nonprofit organization
						dedicated to transforming lives and uplifting communities by
						providing essential resources, opportunities for those in need.
						Founded on the principles of compassion, equality, and empowerment,
						our foundation aims to bridge the gap between under deserved
						communities and sustainable development.
					</p>
				</div>
				<div className=''>
					<Image
						alt='About image'
						src={AboutImg}
						height={606.56}
						width={526.28}
					/>
				</div>
			</div>
		</div>
	);
}
