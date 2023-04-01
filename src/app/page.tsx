import Image from 'next/image';
import Education from './components/education';
import Projects from './components/projects';
import Skills from './components/skills';
import Social from './components/social';
import Experience from './components/experience';
import Avatar from '../../assets/images/diwash-dahal.jpg';

const Page = () => {

	return (
		<div className="flex flex-col gap-8 mx-4 my-16 md:mx-0">
			<div className="flex flex-col-reverse gap-8 md:flex-row">
				<div className="flex flex-col gap-4">
					<h1 className="text-4xl font-medium">
						Diwash <span className="text-primary">Dahal</span>
					</h1>
					<p>
						Software Developer | <span className="font-bold">Open Source</span>
					</p>
					<p>Namaskar!</p>
					<p className="text-justify">
						My name is Diwash Dahal and I'm an undergraduate computer science student based in Jhapa, Nepal. I enjoy developing
						web applications and, in my free time, I like to contribute to open-source projects.
						When I'm not coding or studying, I'm usually playing games and making YouTube content.
					</p>
				</div>
				<Image
					src={Avatar}
					alt="Diwash Dahal"
					className="object-cover w-auto h-32 md:w-32 md:h-auto grayscale"
					width={300}
					height={300}
				/>
			</div>
			
			<Experience />

			<Education />

			<Projects />

			<Skills />

			<Social />

			<div className="flex flex-col gap-4">
				<h2 className="text-2xl font-medium">Contact</h2>
				<ul className="list-inside">
					<li>
						<span>Email: </span>
						<a href="mailto:diwashdahal75@gmail.com" className="italic underline text-primary">
							diwashdahal75@gmail.com
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Page;