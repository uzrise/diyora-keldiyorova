"use client";
import Image from "next/image";
import { useState } from "react";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Dummy image data (you can replace these with actual image URLs)
  const tabs = [
    {
      name: "Highlights",
      images: [
        "/img/gallery/1.jpg",
        "/img/gallery/2.jpg",
        "/img/gallery/3.jpg",
        "/img/gallery/4.jpg",
        "/img/gallery/5.jpg",
        "/img/gallery/6.jpg",
        "/img/gallery/7.jpg",
        "/img/gallery/8.jpg",
        "/img/gallery/9.jpg",
        "/img/gallery/10.jpg",
        "/img/gallery/11.jpg",
        "/img/gallery/12.jpeg",
        "/img/gallery-1.png",
        "/img/gallery-2.png",
        "/img/gallery-3.png",
        "/img/gallery-4.png",
      ],
    },
    {
      name: "Grand Slam 1",
      images: [],
    },
    {
      name: "Grand Slam 2",
      images: [],
    },
    {
      name: "Grand Slam 3",
      images: [],
    },
  ];

  return (
    <div className="flex gap-[32px] px-8 xl:px-16 2xl:p-0 flex-col lg:flex-row justify-center my-20 ">
      <div className="lg:block flex w-full  overflow-x-auto lg:overflow-hidden h-fit lg:w-[320px] lg:mb-0 mb-8 lg:sticky top-0 whitespace-nowrap">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`block md:w-full text-left py-[18px] w-fit px-4 text-[14px] sm:text-xl ${
              activeTab === index ? "bg-[#252525]" : "hover:bg-[#252525]"
            }`}
            dangerouslySetInnerHTML={{ __html: tab.name }}
          />
        ))}
      </div>

      <div className="lg:w-3/4 w-full max-w-[1248px] flex flex-wrap  gap-2  justify-center lg:justify-start">
        {tabs[activeTab].images.map((img, idx) => (
          <Image
            key={idx}
            width={480}
            height={410}
            src={img}
            alt={`Gallery Image ${idx + 1}`}
            className=" 2xl:w-[410px] 2xl:h-[480px] sm:w-[280px] sm:h-[320px] w-full object-center object-cover rounded"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
