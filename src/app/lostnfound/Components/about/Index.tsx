import { Carousel } from "../carousel/Index";
import { Tags } from "./Tags";

export const About = () => {
  const details = [
    "Understand the technology enabling machines to navigate our world seamlessly.",
    "Learn cutting-edge techniques in robotic planning, perception, and decision-making.",
    "Explore real-world applications where autonomous navigation is changing industries.",
    "Connect with fellow tech enthusiasts and experts in the field of robotics.",
  ];

  return (
    <div className="w-full h-max flex flex-col mt-12 gap-4">
      <h1 className="font-medium w-max text-[28px] before:w-[75%] before:h-[4px] before:rounded-full before:bg-[#67B5DC] relative before:absolute before:top-[100%]">
        About the Event
      </h1>
      <div className="text-[15px]">
        <p>
          Lost and Found: The Science Behind Autonomous Navigation is an
          exclusive webinar designed to demystify the technology guiding the
          future of robotics. Autonomous navigation is quietly becoming part of
          our daily lives, and this session explores the intricate science that
          makes it possible.
        </p>
        <br />
        <p>
          Every day, more robots are being designed to move, avoid obstacles,
          and complete tasks without human guidance. Whether you&apos;re a
          robotics enthusiast, a seasoned engineer, or simply curious about the
          future of tech, this webinar provides a unique opportunity to dive
          deep into how machines perceive and interact with their environments.
          <br />
          We believe that understanding the future of automation requires
          looking under the hood of today&apos;s cutting-edge systems. Join us
          to explore the complete journey of autonomous machines—from basic
          mobility to complex, real-time problem-solving.
        </p>
        <p className="mt-4">
          During the session, we&apos;ll cover key areas including:
        </p>
      </div>
      <Tags />
      <h1>Don&apos;t miss this opportunity to:</h1>
      <ul className="list-disc list-inside mt-2">
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
      <Carousel />
    </div>
  );
};
