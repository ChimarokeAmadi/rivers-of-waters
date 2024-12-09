import Image from "next/image";
import ContactPng from "../../public/Images/Contact.png";

export default function ContactUs() {
	return (
		<div className='container lg:py-[100px] pt-20 mb-[18px]' id='Contact'>
			<div className='flex justify-between lg:mt-[200px] items-center'>
				<div className='lg:w-[600px] w-[190px]'>
					<p className='text-Orange font-bold lg:text-[35px] mb-[15px] lg:mb-[22px]'>
						Contact Us
					</p>
					<p className='lg:text-[30px] text-[10px] font-bold'>
						We’d love to hear from you! Whether you have questions, want to get
						involved through{" "}
						<span className='text-Blue'>donations and volunteering</span>, or
						you need more information and insight about our work, please don’t
						hesitate to <span className='text-Blue'>reach out</span> via our
						details specified in the footer of this website, thank you.
					</p>
				</div>
				<div className=''>
					<Image
						className='w-[133.66px] h-[89.11px] lg:w-[506.57px] lg:h-[337.72px]'
						src={ContactPng}
						alt='Agenda Picture'
						height={287.9}
						width={430.93}
					/>
				</div>
			</div>
		</div>
	);
}
