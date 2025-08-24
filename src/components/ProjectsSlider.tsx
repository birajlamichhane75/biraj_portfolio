"use client";

import { Navigation, Autoplay, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  video: string;
  title: string;
}

export default function ProjectsSlider({
  preview = 1,
  projects,
}: {
  preview?: number;
  projects: Project[];
}) {
  return (
      <Swiper
        modules={[Keyboard, Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={preview}
        loop={true}
        navigation={{
          nextEl: ".forward",
          prevEl: ".back",
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        keyboard={{ enabled: true }}
        className="w-full"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className="flex flex-col items-center">
            {/* Card container with fixed height */}
            <div className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden w-full flex flex-col">
              
              {/* Video: 50% height */}
              <div className="relative w-full">
                <video
                  src={project.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title section: remaining 50% */}
              <div className="flex-1 flex items-center justify-center py-5">
                <h3 className="font-semibold text-white text-center text-lg px-4">
                  {project.title}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Arrows */}
        <div className="w-full absolute z-50 flex justify-between top-1/2 px-3">
          <div className="back left slide-btn cursor-pointer text-white"><ChevronLeft size={30} /></div>
          <div className="forward right slide-btn cursor-pointer text-white"><ChevronRight size={30} /></div>
        </div>
      </Swiper>
  );
}
