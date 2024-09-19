"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const Socials = ({ t }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1025) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    // Dastlabki yuklanishda o'lchamni tekshirish
    handleResize();

    // Ekran o'lchami o'zgarganda eshituvchini qo'shish
    window.addEventListener("resize", handleResize);

    // Tozalash funksiyasi
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="flex xl:flex-row flex-col items-center justify-center gap-8">
      <Image
        src={
          isMobile ? "/img/socials-left-mobile.png" : "/img/socials-left.png"
        }
        width={385}
        height={588}
        alt="socials"
        className="w-full xl:w-auto xl:max-w-[385px]"
      />
      <div className="flex flex-col gap-10">
        <h1 className="text-center text-[56px] font-bold">{t.follow}</h1>
        <div className="flex items-end justify-center gap-3 xl:gap-0">
          <a
            href="https://www.instagram.com/diyora_keldiyorova?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==l"
            target="_blank"
          >
            <Image
              src={"/img/instagram.png"}
              width={202}
              height={202}
              alt="socials"
              className="2xl:size-[202px]  size-[80px] lg:size-[120px] "
            />
          </a>
          <a href="https://t.me/diyora_keldiyorovaofficial" target="_blank">
            <Image
              src={"/img/telegram.png"}
              width={202}
              height={202}
              alt="socials"
              className="2xl:size-[202px]  size-[80px] lg:size-[120px] xl:mb-[50px]"
            />
          </a>
          <a
            href="https://www.youtube.com/@Keldiyorova_Diyoraofficial"
            target="_blank"
          >
            <Image
              src={"/img/youtube.png"}
              width={202}
              height={202}
              alt="socials"
              className="2xl:size-[202px]  size-[80px] lg:size-[120px] "
            />
          </a>
        </div>
      </div>
      <Image
        src={
          isMobile ? "/img/socials-right-mobile.png" : "/img/socials-right.png"
        }
        width={385}
        height={588}
        alt="socials"
        className="w-full xl:w-auto xl:max-w-[385px]"
      />
    </section>
  );
};

export default Socials;
