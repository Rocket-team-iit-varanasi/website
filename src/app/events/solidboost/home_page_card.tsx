"use client";

import { cn } from "@/lib/utils";

const HeroSection = () => {
  return (
    <section className="relative isolate rounded-lg">
      <div className="absolute inset-0">
        <img
          src="/rocket-launch.jpg"
          alt="Rocket Launch"
          className="h-full w-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black/50 rounded-lg" />
      </div>
      <div className="relative px-8 pt-14 pb-8 mx-auto max-w-2xl sm:max-w-7xl sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              SOLIDBOOST
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/70">
              A solid motor rocketry competition
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 p-6">
          <button
            className={cn(
              "group relative inline-block w-48 h-12 border border-transparent text-xl font-semibold text-black shadow-lg",
              "overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white",
              "bg-white"
            )}
          >
            <span
              className="absolute inset-0 w-full h-full bg-black transition-transform duration-300 ease-out group-hover:translate-x-0 -translate-x-full"
            />
            <span className="relative z-10 group-hover:text-white">Register Now</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;