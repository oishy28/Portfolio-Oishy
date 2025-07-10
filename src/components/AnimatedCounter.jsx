import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import { counterItems } from "../../constants"; // Adjust the import path as necessary
import CountUp from "react-countup";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
  const counterRef = useRef(null);
  const countersRef = useRef([]);

  useGSAP(() => {
    countersRef.current.forEach((counter, index) => {
      const numberElement = counter.querySelector(".counter-number");
      const item = counterItems[index];

      // Set initial value to 0
      gsap.set(numberElement, { innerText: "0" });

      // Create the counting animation
      gsap.to(numberElement, {
        innerText: item.value,
        duration: 2.5,
        ease: "power2.out",
        snap: { innerText: 1 }, // Ensures whole numbers
        scrollTrigger: {
          trigger: "#counter",
          start: "top center",
        },
        // Add the suffix after counting is complete
        onComplete: () => {
          numberElement.textContent = `${item.value}${item.suffix}`;
        },
      });
    }, counterRef);
  }, []);

  return (
    <div id="counter" ref={counterRef} className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item, index) => (
          <div
          key={index}
          ref={(el) => el && (countersRef.current[index] = el)}
          className="relative bg-zinc-900 rounded-2xl p-10 flex flex-col justify-center border-[2px] border-[rgb(190,65,207)] overflow-hidden shadow-xl"
        >
          {/* Vignette border effect */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl border-[4px] border-transparent" style={{
            boxShadow: '0 0 40px 8px rgba(190, 65, 207, 0.3), inset 0 0 25px 8px rgba(190, 65, 207, 0.15)'
          }}></div>

          <div className="counter-number text-white-50 text-5xl font-bold mb-2">
            0 {item.suffix}
            <CountUp end={item.value} suffix={item.suffix} />
          </div>
          <div className="text-white-50 text-lg">{item.label}</div>
        </div>

        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;