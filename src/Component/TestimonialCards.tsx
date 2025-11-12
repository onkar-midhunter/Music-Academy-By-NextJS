"use client";
import { cn } from "@/utils/cn";
import { motion } from "motion/react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
  {
    quote:
      "Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class!",
    name: "Alex Johnson",
    title: "Guitar Student",
  },
  {
    quote:
      "The community and support at this school are unmatched. I've grown not just as a pianist, but also as a performer, thanks to their comprehensive approach.",
    name: "Samantha Lee",
    title: "Piano Student",
  },
  {
    quote:
      "This school offered me the tools and confidence to take my singing to the next level. I'm endlessly grateful for the personalized coaching.",
    name: "Michael Chen",
    title: "Vocal Student",
  },
  {
    quote:
      "As a violinist, finding the right mentor can be challenging, but this school matched me with a teacher who truly understands my goals and challenges.",
    name: "Emily Taylor",
    title: "Violin Student",
  },
  {
    quote:
      "The production courses here opened my eyes to the intricacies of music production. Highly recommend for any aspiring producers!",
    name: "Chris Morales",
    title: "Music Production Student",
  },
];

export default function TestimonialsSection() {
  return (
    <div className="relative h-[50rem] w-full bg-white dark:bg-black overflow-hidden">
      {/* Background Grid */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center h-full">
        {/* Animated Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mt-12 mb-8"
        >
          Hear our Harmony: Voices of Success
        </motion.h2>

        {/* Moving Cards Centered Below */}
        <div className="flex-1 flex items-center justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 1,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="w-full max-w-6xl"
          >
            <InfiniteMovingCards
              items={musicSchoolTestimonials}
              direction="right"
              speed="normal"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );

}
