import Marquee from "react-fast-marquee";
import SectionHeading from "./section-heading";

// Resolve default import issue in Vite ESM
const MarqueeComp = (Marquee as any).default || Marquee;

export default function Testimonials() {
  const data = [
    {
      quote:
        "Arijit is an exceptional developer with a keen eye for detail. His ability to turn complex requirements into clean, efficient code is truly impressive.",
      name: "Sarah Johnson",
      avatar:
        "https://plus.unsplash.com/premium_photo-1739786996040-32bde1db0610?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1480",
    },
    {
      quote:
        "Working with Arijit has been a game-changer for our team. His problem-solving skills and dedication to quality are unmatched.",
      name: "Michael Chen",
      avatar:
        "https://images.unsplash.com/photo-1728577740843-5f29c7586afe?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHwy&auto=format&fit=crop&q=60&w=900",
    },
    {
      quote:
        "Arijit's passion for technology and continuous learning makes him a valuable asset to any project. Highly recommended!",
      name: "Emily Rodriguez",
      avatar:
        "https://images.unsplash.com/photo-1740252117027-4275d3f84385?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGF2YXRhcnxlbnwwfHwwfHx8Mg%3D%3D&auto=format&fit=crop&q=60&w=900",
    },
  ];
  return (
    <div id="testimonials" className="py-6 px-4 md:px-6 mb-6 border-t border-neutral-200/20">
      <SectionHeading className="mb-4">People love my work</SectionHeading>
      <div className="flex items-stretch [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <MarqueeComp speed={25} pauseOnHover className="py-4">
          {data.map((item, idx) => (
            <TestimonialCard key={idx} {...item} />
          ))}
        </MarqueeComp>
      </div>
    </div>
  );
}

const TestimonialCard = ({
  quote,
  name,
  avatar,
}: {
  quote: string;
  name: string;
  avatar: string;
}) => {
  return (
    <div className="flex flex-col justify-between mx-4 gap-4 p-5 max-w-[17rem] w-full h-52 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm">
      <p className="text-xs text-neutral-500 dark:text-neutral-400 italic">"{quote}"</p>
      <div className="flex items-center gap-3 mt-2">
        <img
          src={avatar}
          alt={name}
          width={32}
          height={32}
          className="rounded-full object-cover"
        />
        <p className="text-xs font-bold text-neutral-900 dark:text-neutral-100">{name}</p>
      </div>
    </div>
  );
};

