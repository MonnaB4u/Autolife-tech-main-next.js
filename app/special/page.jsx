"use client";
import React, { useState, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
function Page() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="">
      <section id="heroOne">
        <div className="mx-auto">
          <div className="">
            <div className="relative m-auto ">
              <video
                className="mx-auto h-auto w-full bg-gray-400 dark:bg-slate-700"
                src="/Home.mp4"
                width={1024}
                height={607}
                sizes="(max-width: 1024px) 100vw, 1024px"
                controls
                autoPlay
                muted
                loop
              />
            </div>

            {/* <div className="relative m-auto max-w-5xl pt-3">
              <iframe
                className="mx-auto h-auto w-full aspect-video bg-gray-400 dark:bg-slate-700"
                src="https://www.youtube.com/embed/dftKArsWaCs"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div> */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4">
        <div className="flex flex-col items-center md:flex-row md:gap-16">
          <div className=" md:mt-0 md:w-1/2">
            <div className="relative m-auto max-w-4xl">
              <img
                className="mx-auto w-2/3 rounded-lg"
               src="./special.jpg"
                width={828}
                height={828}
                sizes="(max-width: 768px) 100vw, 432px"
                placeholder="blur"
                quality={50}
              />
            </div>
          </div>

          {/* <p className="text-lg sm:text-xl text-gray-600 italic">
                "A smart home isn’t just about convenience—it’s about creating a
                space that adapts to you, making life easier, safer, and more
                efficient." – Sky
              </p> */}

          <div className="self-center md:w-1/2">
            <div className="mb-8 lg:mb-12 text-lg text-gray-600">
              <h1 className="text-2xl sm:text-3xl font-semibold leading-tight">
                Smart Home, Smarter Living! And Smart life{" "}
                <span className="text-blue-400">🏡</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-600">
                Discover how your home can be smarter with a custom smart home
                concept designed just for you! Get a personalized automation PDF
                with ideas for lighting, security, energy savings, and more.
              </p>

              <ul className="text-md pt-2">
                <li>1. Solutions to existing home problems</li>
                <li>2. Interactive floorplan sample</li>
                <li>3. Ideas for a smarter home</li>
              </ul>

              <button
                onClick={() =>
                  window.open("https://wa.me/+6592212224", "_blank")
                }
                class=" mt-4 flex items-center bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-600 focus:outline-none transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg space-x-2"
              >
                <FaWhatsapp className="w-6 h-6" />
                <span>WhatsApp for PDF Plans</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
