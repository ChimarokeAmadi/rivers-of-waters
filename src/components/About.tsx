import Image from "next/image";
import AboutImg from "../../public/Images/About.png";

export default function About() {
	return (
		<div
			className='container lg:pt-20 pt-16  space-y-3 lg:space-y-10'
			id='About'>
			<div className='w-full lg:text-[96px]  text-Orange '>
				<h1>About Us</h1>
			</div>
			<div className='flex justify-between items-center'>
				<div className='lg:w-[450px] w-[156px]'>
					<p className='lg:text-[25px] text-[10px]'>
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
						className='lg:h-[606.56px] lg:w-[526.28px] h-[118px] w-[136px]'
					/>
				</div>
			</div>
		</div>
	);
}
