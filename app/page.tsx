import './globals.css';
import React from 'react';
import tv from '@/public/travel.jpg';
interface Link {
	color: string;
	text: string;
	link: string;
}

const Home: React.FC = () => {
	const links: Link[] = [
		{
			color: "bg-red-300",
			text: "Buy me coffee ☕️",
			link: "https://github.com",
		},
		{
			color: "bg-sky-300",
			text: "Join My Newslatter 🗞",
			link: "https://github.com",
		},
		{
			color: "bg-pink-400",
			text: "Learn Code 💻",
			link: "https://github.com",
		},
	];

	return (
		<main className="w-full h-screen bg-yellow-300 flex justify-center items-center">
			<section className="max-w-2xl mx-auto flex flex-col gap-5">
				<article className="h-48 w-48 mx-auto">
					<div className=" aspect-w-1 aspect-h-1">
						<img
							src={tv.src}
							className=" rounded-full object-cover  object-center"
							alt="Rose"
						/>
					</div>
				</article>
				<div className="text-center p-3">
					<h1 className="text-4xl font-bold">Spread Hope Travels</h1>
					<p className="text-lg mt-3">
						Lorem Ipsum has been the industry's since the 500s.
					</p>
				</div>
				<article className="flex flex-col gap-10">
					{links.map(({ text, color, link }, index) => {
						return (
							<a href={link} key={index} target="_blank" rel="noopener noreferrer">
								<div
									className={`w-80 sm:w-96 mx-auto ${color} text-center text-xl font-bold py-3 border-2 border-black shadow-custom hover:shadow-none transition-all hover:translate-x-1 hover:translate-y-1`}
								>
									{text}
								</div>
							</a>
						);
					})}
				</article>
			</section>
		</main>
	);
}

export default Home;
