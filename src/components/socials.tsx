import SectionHeading from "./section-heading";
import { Subheading } from "./subheading";
import type { Social } from "../types/socials";
import { IconArrowRight } from "@tabler/icons-react";

const socials: Social[] = [
	{
		name: "Github",
		href: "https://github.com/banerjee-arijit",
		account: "@banerjee-arijit",
		image: "/socials/github.webp",
	},
	{
		name: "Linkedin",
		href: "https://www.linkedin.com/in/banerjee-arijit/",
		account: "@banerjee-arijit",
		image: "/socials/linkedin.webp",
	},
	{
		name: "X (Twitter)",
		href: "https://x.com/ArijitBane24217",
		account: "@ArijitBane24217",
		image: "/socials/x.webp",
		color: "#000000",
		darkColor: "#ffffff",
	},
];

export default function Socials() {
	return (
		<div className="flex flex-col md:py-6 py-4 shadow-section border-t border-neutral-200/20">
			<SectionHeading className="ml-4 md:ml-6">Letâ€™s Connect</SectionHeading>
			<Subheading className="mb-4 ml-4 md:ml-6">
				Prefer reaching out directly? You can find me on these platforms or just
				drop me an email.
			</Subheading>

			<div className="grid md:grid-cols-[24px_1fr_24px] grid-cols-[16px_1fr_16px] items-stretch">
				{/* LEFT RAIL */}
				<div className="grid h-full grid-rows-3 md:gap-6 gap-4 border-r border-neutral-200 dark:border-neutral-800">
					{socials.map((social) => (
						<div key={social.href} className="border-y border-neutral-200 dark:border-neutral-800"></div>
					))}
				</div>

				{/* CENTER CONTENT */}
				<div className="grid grid-cols-1 md:gap-6 gap-4">
					{socials.map((social) => (
						<a
							key={social.href}
							href={social.href}
							target="_blank"
							rel="noreferrer"
							className="group flex items-center gap-4 p-4 pr-2 border-y border-neutral-200 dark:border-neutral-800 hover:bg-[#f4f4f5]/50 dark:bg-neutral-900/20 dark:hover:bg-neutral-800/20 transition duration-300"
						>
							<div className="relative size-12 shrink-0">
								<img
									src={social.image}
									alt={social.name}
									width={48}
									height={48}
									className="rounded-xl border border-neutral-200 dark:border-neutral-800 object-cover"
								/>
							</div>

							<div className="flex-1">
								<h3 className="font-semibold text-sm group-hover:underline underline-offset-4">
									{social.name}
								</h3>
								<p className="text-xs text-neutral-500 dark:text-neutral-400">
									{social.account}
								</p>
							</div>

							<IconArrowRight
								strokeWidth={1}
								className="transition-all duration-300 group-hover:-rotate-45"
							/>
						</a>
					))}
				</div>

				{/* RIGHT RAIL */}
				<div className="grid h-full grid-rows-3 md:gap-6 gap-4 border-l border-neutral-200 dark:border-neutral-800">
					{socials.map((social) => (
						<div key={social.href} className="border-y border-neutral-200 dark:border-neutral-800"></div>
					))}
				</div>
			</div>
		</div>
	);
}


