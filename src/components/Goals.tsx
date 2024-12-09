import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import CarouselInfo from "../../public/CarouselInfo";
import Image from "next/image";

export default function Goals() {
	return (
		<div className='container '>
			<div className=' lg:text-[25px] w-fit lg:w-[950px] lg:my-[100px] mt-4 mb-[44px]'>
				<h3 className='text-Orange font-bold mb-5'>A Glimpse into our Goals</h3>
				<p className='text-[10px] lg:text-[25px] font-bold'>
					Discover the impact we strive to create at Rivers of Waters Foundation
					through these inspiring examples. These videos illustrate the type of
					work we’re dedicated to from community support to health initiatives
					and reflect our vision of building stronger, more resilient
					communities.
				</p>
			</div>

			{/* <div className=''>
				<Carousel>
					<CarouselContent>
						{CarouselInfo.map((info, index) => (
							<CarouselItem className='basis-1/3 ' key={index}>
								<div className='w-full flex flex-col items-center space-y-4'>
									<Image
										src={info.image}
										alt=''
										width={386.88}
										height={249.25}
										className='lg:h-[250px] lg:w-[387px] w-[104px] h-[67px]'
									/>
									<p className='text-center text-[6px] lg:text-[20px] font-bold px-3'>
										{info.text}
									</p>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div> */}
		</div>
	);
}
