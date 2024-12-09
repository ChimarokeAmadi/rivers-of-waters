import Image from "next/image";
import AgendaPng from "../../public/Images/Agenda.png";

const methods = [
	{
		name: "Share Personal Stories",
		explanation:
			"You can help us a lot with sharing how our foundation have helped you. This can help illustrate the foundation’s impact and inspire others to fet involved.",
	},
	{
		name: "Participate in Campaigns",
		explanation:
			"This foundation would really appreciate it if you help us in solving our problems, hosting educational workshops.",
	},
	{
		name: "Create Shareable content",
		explanation:
			"Develop engaging posts, graphics, and videos highlighting the stories, and upcoming events. Use compelling visuals and hashtags to enhance reach.",
	},
	{
		name: "Participate in Fundraising",
		explanation:
			"Volunteering and donations mean a lot to us!!! whether one time or recurring monthly",
	},
];

export default function Advocate() {
	return (
		<div className='container lg:pt-[250px] pt-[72px]' id='Advocate'>
			<div className='mb-[30px] lg:mb-[100px]'>
				<p className='text-Orange text-center lg:text-[50px]'>
					How You Can Advocate
				</p>
			</div>
			<div className='grid grid-cols-2 gap-y-[70px] gap-x-5 lg:gap-[150px]'>
				{methods.map((method, index) => (
					<div
						className='bg-[#F8F1F1] text-center pt-[14px] px-6 pb-2 lg:px-20 lg:py-10 space-y-2'
						key={index}>
						<p className='text-Blue text-[11px] lg:text-[35px]'>
							{method.name}
						</p>
						<p className='text-[9px] lg:text-[30px]'>{method.explanation}</p>
					</div>
				))}
			</div>

			<div
				className='flex justify-between pt-[100px] lg:pt-[200px] items-center'
				id='Services'>
				<div className=' w-[154px] lg:w-[500px]'>
					<p className='text-Orange lg:text-[35px] mb-[7px]'>Our Agenda</p>
					<p className='lg:text-[30px] text-[10px]'>
						Our primary goal is to provide a gift or donation to an organization
						or an individual to benefit them in some way. Support a wide range
						of causes, whether it be religious, environmental, public interests,
						health-related or educational.
					</p>
				</div>
				<div className=''>
					<Image
						className='lg:w-[430.93px] lg:h-[287.9px] w-[131.68px] h-[87.97px]'
						src={AgendaPng}
						alt='Agenda Picture'
						height={287.9}
						width={430.93}
					/>
				</div>
			</div>
		</div>
	);
}
