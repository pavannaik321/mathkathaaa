// src/components/TestimonialsCarousel.tsx
"use client";
import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import Image from "next/image";
const testimonials = [
  {
    name: "Maadhurima Mondal",
    role: "Post Graduate Student (IIT Hyderabad)",
    feedback:
      "It was extremely descriptive and was made easily understandable.",
    image: "/Home/Carousal/Maadhurima.jpg",
  },
  {
    name: "Snehmay Ghosh",
    role: "Research Associate at IISc",
    feedback:
      "Mahesh Sir is an exceptional maths teacher. He explains every problem with such patience and clarity that the solution feels naturally embedded in your mind. He never hesitates to revisit a concept or clear a doubt, no matter how many times you ask, and he does it with a calm smile—never a hint of frustration. His genuine dedication to ensuring his students truly understand the subject makes learning not just easier, but also enjoyable. With him, maths doesn’t feel like a burden—it feels like a journey you actually want to take.",
    image: "/Home/Carousal/Snehmoy.jpg",
  },
  {
    name: "Sri Velaga",
    role: "First year Engineering at Loyola University Chicago",
    feedback:
      "The sessions were incredibly helpful for me in helping build my confidence in math. Before tests, I was able to stay calm because I knew we had practiced the concept as much as we could beforehand. I also learned test taking skills and improved the time that it would take me to complete problems.",
    image: "/Home/Carousal/Sri.jpg",
  },
  {
    name: "Diksha Prasad",
    role: "Fourth year of Engineering at IIT Palakkad",
    feedback:
      "Mahesh sir taught very well, he used to make me understand all the topics clearly and gave wonderful examples along with his teaching while also making us think outside the box. The sessions were very interactive and he gave a fair amount of practice problems as well which helped. Had a great learning experience and definitely helped me score better in math for boards, and some out of box thinking has helped me during my JEE prep too.",
    image: "/Home/Carousal/Deeksha.jpg",
  },
  {
    name: "Kaveri",
    role: "12th Grade Student at Stanford Online High School",
    feedback:
      "Till I met Mahesh Sir, math meant only numbers and arithmetic operations. However, he made math really fun for me. By introducing the history behind numbers and how math came to be in its current form, he opened up a new world of possibilities. He simultaneously strengthened my foundations and I got a really high score in my test.",
    image: "/Home/Carousal/Kaveri.jpg",
  },
  {
    name: "Tushar Halder",
    role: "Junior Research Fellow, University of Hyderabad",
    feedback:
      "The sessions were very interactive. Mahesh sir used to develop the intuition behind the subject matter, i.e; he used to give a motivation for studying the subject. The sessions contained interactive brainstorming followed by plenty of good exercise problems which tested our understanding of the subject matter. Since it was a bachelors level course, most of the sessions contained proofs. Unlike rote learning method, sir used to develop curiosity by explaining the sole idea behind the proofs. This has helped me a lot for what I am currently doing. I would say that I've learnt how to think mathematically and solve problems from those session.",
    image: "/Home/Carousal/Tushar.jpg",
  },
  {
    name: "Bina Mondal",
    role: "Environment and Forest Department",
    feedback:
      "Yes, definitely... When I was completing my bachelor degree I got backlog in Real analysis... But in masters I scored highest mark... The session was so useful, if I get chance in future definitely, I am gonna join the different courses from the same professor... The class never felt bored or hectic even my other classmates were also so excited to attend the same...",
    image: "/Home/Carousal/bina_mondal.jpg",
  },
];



export default function TestimonialsCarousel() {
  const speed = 40; // seconds for one full loop
  const controls = useAnimation();
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
        },
      },
    });
  }, [controls]);

  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-6 cursor-grab"
            style={{ width: "max-content" }}
            animate={controls}
            drag="x"
            dragConstraints={{ left: -9999, right: 9999 }} // allow free horizontal drag
            dragElastic={0.1} // subtle resistance
            onDragStart={() => controls.stop()} // stop auto scroll while dragging
            onDragEnd={() => {
              controls.start({
                x: ["0%", "-50%"],
                transition: {
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: speed,
                    ease: "linear",
                  },
                },
              });
            }}
            ref={carouselRef}
          >
            {[...testimonials, ...testimonials].map((t, index) => (
              <div
                key={index}
                className="min-w-[350px] max-w-sm bg-gray-50 rounded-2xl p-6 shadow-md flex-shrink-0"
              >
                <span className="text-5xl text-indigo-500 font-serif">“</span>
                <p className="text-gray-700 text-base mb-4">{t.feedback}</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 relative rounded-full overflow-hidden">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}







// src/components/TestimonialsCarousel.tsx
// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";

// const testimonials = [
//   {
//     name: "Maadhurima Mondal",
//     role: "Post Graduate Student",
//     age: 24,
//     sessions: "Graduation",
//     current: "Post graduate",
//     objective: "Olympiad",
//     feedback:
//       "It was extremely descriptive and was made easily understandable.",
//     image: "/Home/Carousal/Maadhurima.jpg",
//   },
//   {
//     name: "Snehmay Ghosh",
//     role: "Research Associate at IISc",
//     age: 25,
//     sessions: "Bachelor's",
//     current: "Research associate at IISc",
//     objective: "Bachelor's Mathematics",
//     feedback:
//       "Mahesh Sir is an exceptional maths teacher. He explains every problem with such patience and clarity that the solution feels naturally embedded in your mind. His genuine dedication makes maths feel like a journey you want to take.",
//     image: "/Home/Carousal/Snehmoy.jpg",
//   },
//   {
//     name: "Sri Velaga",
//     role: "First Year of College",
//     age: 18,
//     sessions: "11th and 12th",
//     current: "College 1st Year",
//     objective: "Accelerated Precalculus, SAT, AP Calculus BC",
//     feedback:
//       "The sessions were incredibly helpful in building my confidence in math. I learned test-taking skills and improved my speed while staying calm before exams.",
//     image: "/Home/Carousal/Sri.jpg",
//   },
//   {
//     name: "Diksha Prasad",
//     role: "4th Year B.Tech",
//     age: 21,
//     sessions: "11th and 12th grade",
//     current: "Final Year B.Tech",
//     objective: "General state board syllabus (Maths entire portion)",
//     feedback:
//       "Mahesh sir explained concepts clearly with wonderful examples and interactive sessions. His approach also helped me during JEE prep with out-of-box thinking.",
//     image: "/Home/Carousal/Deeksha.jpg",
//   },
//   {
//     name: "Kaveri",
//     role: "12th Grade Student",
//     age: 17,
//     sessions: "7th grade",
//     current: "12th grade",
//     objective: "SSAT Preparation",
//     feedback:
//       "Till I met Mahesh Sir, math meant only numbers. He made math really fun by connecting history with concepts, and I scored very high in my SSAT.",
//     image: "/Home/Carousal/Kaveri.jpg",
//   },
//   {
//     name: "Tushar Halder",
//     role: "Junior Research Fellow, University of Hyderabad",
//     age: 26,
//     sessions: "Bachelor’s program (Abstract Algebra & Geometry)",
//     current: "JRF at University of Hyderabad, working on Finite Group Theory",
//     objective: "General syllabus: Geometry, Group Theory, Ring Theory",
//     feedback:
//       "The sessions built intuition with motivation behind topics and plenty of exercises. Mahesh sir made proofs interesting and taught me how to think mathematically.",
//     image: "/Home/Carousal/Tushar.jpg",
//   },
//   {
//     name: "Bina Mondal",
//     role: "Environment and Forest Department",
//     age: 30,
//     sessions: "Masters",
//     current: "Government Service",
//     objective: "Real Analysis",
//     feedback:
//       "I once struggled with Real Analysis in my bachelor’s, but in masters I scored highest marks thanks to Mahesh Sir. His engaging teaching made classes exciting and effective.",
//     image: "/Home/Carousal/Bina.jpg",
//   },
// ];

// export default function TestimonialsCarousel() {
//   return (
//     <section className="bg-white py-16 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="relative w-full overflow-hidden">
//           <motion.div
//             className="flex gap-6"
//             animate={{ x: ["0%", "-100%"] }}
//             transition={{
//               repeat: Infinity,
//               duration: 40,
//               ease: "linear",
//             }}
//           >
//             {[...testimonials, ...testimonials].map((t, index) => (
//               <div
//                 key={index}
//                 className="min-w-[350px] max-w-sm bg-gray-50 rounded-2xl p-6 shadow-md flex-shrink-0"
//               >
//                 {/* Feedback */}
//                 <span className="text-5xl text-indigo-500 font-serif">“</span>
//                 <p className="text-gray-700 text-base mb-4">{t.feedback}</p>

//                 {/* Name + Role */}
//                 <div className="flex items-center gap-3 mb-4">
//                   <div className="w-12 h-12 relative rounded-full overflow-hidden">
//                     <Image
//                       src={t.image}
//                       alt={t.name}
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                   <div>
//                     <p className="font-semibold text-gray-900">{t.name}</p>
//                     <p className="text-sm text-gray-500">{t.role}</p>
//                   </div>
//                 </div>

//                 {/* Extra Details */}
//                 <div className="bg-gray-100 rounded-lg p-3 text-xs text-gray-600 space-y-1">
//                   <div className="grid grid-cols-2 gap-x-2">
//                     <p className="font-medium">Age:</p>
//                     <p>{t.age}</p>
//                   </div>
//                   <div className="grid grid-cols-2 gap-x-2">
//                     <p className="font-medium">Sessions:</p>
//                     <p>{t.sessions}</p>
//                   </div>
//                   <div className="grid grid-cols-2 gap-x-2">
//                     <p className="font-medium">Current:</p>
//                     <p>{t.current}</p>
//                   </div>
//                   <div className="grid grid-cols-2 gap-x-2">
//                     <p className="font-medium">Objective:</p>
//                     <p>{t.objective}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

