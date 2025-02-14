
// export default MyPathSecond;
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import rocketimg from "../../../../../assets/images/Rocket.webp"; // Update the path
import MyPathCard from "../MyPathCard/MyPathCard";
import IntroVideo from "../../IntroVideo/IntroVideo";

import { cn } from "@/lib/utils";
import { FlickeringGrid } from "../../../../../components/magicui/flickering-grid";
import { Meteors } from "../../../../../components/magicui/meteors";
import { ShineBorder } from "../../../../../components/magicui/shine-border";
import { IconCloud } from "../../../../../components/magicui/icon-cloud";
import FancyText from '@carefully-coded/react-text-gradient';
import Lottie from "lottie-react";
import robotlotty from "../../../../../assets/lotty/robotlotty.json";


// icon cloude code



const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];


gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

const MyPathSecond = () => {
  useEffect(() => {
    gsap.to("#rocket", {
      scrollTrigger: {
        trigger: "#motionPath",
        start: "top center",
        end: "bottom center",
        scrub: 1, // Makes it smooth
        autoRotate: true,
      },
      motionPath: {
        path: "#motionPath",
        align: "#motionPath",
        alignOrigin: [0.5, 0.5],
        autoRotate: true, // Keeps the rocket's head aligned
      },
    });
  }, []);




  // icon cloude 


  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (




    <div className="  bg-gradient-to-t to-[#2a6154] from-[#010313]  text-center py-40 ">
      <IntroVideo></IntroVideo>
      <div className=" w-auto mt-32 pb-48 border-t-4 border-l border-r border-green-300 shadow-2xl shadow-green-200  mx-20 rounded-2xl bg-gradient-to-t to-[#1F4842] from-[#010313]" color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>




      <Lottie className="h-32 mt-7 " animationData={robotlotty} loop={true} />;
        <div className=" mb-40">
          <FancyText
            gradient={{ from: '#F858E0', to: '#77156C', type: 'linear' }}
            animateTo={{ from: '#6DEDD0', to: '#7AE23A' }}
            animateDuration={2000}
            className=" text-5xl font-bold w-1/2 uppercase " 
            style={{ fontFamily: 'Bokor, serif' }}
          >
            My full journey
          </FancyText>
          <br />
          <FancyText
            gradient={{ from: '#F858E0', to: '#77156C', type: 'linear' }}
            animateTo={{ from: '#020515', to: '#1F6FA9' }}
            animateDuration={2000}
            className=" text-5xl font-bold w-1/2 uppercase mt-2" 
            style={{ fontFamily: 'Bungee, serif' }}
          >
            that I am achieving
          </FancyText>
        </div>

        <MyPathCard className=" absolute "></MyPathCard>

        <div className="relative w-full flex-col items-center justify-center overflow-hidden rounded-lg ">
          <Meteors number={100} />
          <div className="  w-full mx-auto flex items-center justify-center pt-40 max-w-screen-xl " >


            <svg width="584" class="svgclass" height="2402" viewBox="0 0 584 2402" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id="motionPath" class="svgclass" d="M0 2H492C534.426 2 555.64 2 568.82 15.1802C582 28.3604 582 49.5736 582 92V234.142C582 276.569 582 297.782 568.82 310.962C555.64 324.142 534.426 324.142 492 324.142H139.105C96.6789 324.142 75.4657 324.142 62.2855 337.323C49.1053 350.503 49.1053 371.716 49.1053 414.142V553.15C49.1053 595.576 49.1053 616.789 62.2855 629.969C75.4657 643.15 96.6789 643.15 139.105 643.15H492C534.426 643.15 555.64 643.15 568.82 656.33C582 669.51 582 690.723 582 733.15V905.86C582 948.287 582 969.5 568.82 982.68C555.64 995.86 534.426 995.86 492 995.86H139.105C96.6789 995.86 75.4657 995.86 62.2855 1009.04C49.1053 1022.22 49.1053 1043.43 49.1053 1085.86V1255.44C49.1053 1297.86 49.1053 1319.08 62.2855 1332.26C75.4657 1345.44 96.6789 1345.44 139.105 1345.44H492C534.426 1345.44 555.64 1345.44 568.82 1358.62C582 1371.8 582 1393.01 582 1435.44V1613.63C582 1656.06 582 1677.27 568.82 1690.45C555.64 1703.63 534.426 1703.63 492 1703.63H139.105C96.6789 1703.63 75.4657 1703.63 62.2855 1716.81C49.1053 1729.99 49.1053 1751.21 49.1053 1793.63V1943.61C49.1053 1986.04 49.1053 2007.25 62.2855 2020.43C75.4657 2033.61 96.6789 2033.61 139.105 2033.61H301.5C343.926 2033.61 365.14 2033.61 378.32 2046.79C391.5 2059.97 391.5 2081.19 391.5 2123.61V2402"
                stroke="#00D4FF" stroke-width="2" stroke-dasharray="5 5" />
            </svg>

            {/* Rocket */}
            <img
              src={rocketimg}
              id="rocket"
              alt="Rocket"
              style={{
                position: "absolute",
                width: "50px",

              }}
              className=" -mt-3"
            />
          </div>
        </div>

      </div>

    </div>
  );
};

export default MyPathSecond;
