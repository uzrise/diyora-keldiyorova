import Image from "next/image";
import Logo from "./components/logo";
import Navbar from "./components/navbar";
import ContactForm from "./components/contact-us";
import Socials from "./components/socials";
import Link from "next/link";
import { getDictionary } from "./dictionaries";

export default async function Home({ params: { lang } }) {
  const t = await getDictionary(lang);
  const leaders = [
    {
      imgSrc: "/img/president.jpg",
      name: t.connections?.["1"].name,
      title: t.connections?.["1"].title,
    },
    {
      imgSrc: "/img/minister.jpeg",
      name: t.connections?.["2"].name,
      title: t.connections?.["2"].title,
    },
    {
      imgSrc: "/img/first-deputy.jpg",
      name: t.connections?.["3"].name,
      title: t.connections?.["3"].title,
    },
    {
      imgSrc: "/img/vice-president.jpg",
      name: t.connections?.["4"].name,
      title: t.connections?.["4"].title,
    },
    {
      imgSrc: "/img/judo-president.jpg",
      name: t.connections?.["5"].name,
      title: t.connections?.["5"].title,
    },
    {
      imgSrc: "/img/minister-of-defense.jpg",
      name: t.connections?.["6"].name,
      title: t.connections?.["6"].title,
    },
  ];
  return (
    <>
      <section className="bg-[url('/img/bg.png')] bg-cover bg-center bg-no-repeat h-screen flex flex-col">
        <Navbar t={t} />
        <div className="px-2 mx-auto flex flex-col xl:flex-row gap-[24px]  xl:gap-[64px] items-center mt-auto mb-[96px]">
          <h1
            className="text-center xl:text-right text-[44px] leading-[48px] xl:text-[64px] xl:leading-[72px] 2xl:text-8xl font-bold 2xl:leading-[110px]"
            dangerouslySetInnerHTML={{ __html: t.dk }}
          />
          <Image
            src={"/img/paris-olympic.png"}
            width={240}
            height={240}
            className="2xl:size-[240px] xl:size-[180px] size-[120px] object-cover"
            alt="olympic"
          />
          <div className="flex flex-col gap-3 text-center xl:text-left">
            <h2 className="font-bold 2xl:text-[64px] xl:text-[54px] text-[44px]">
              Paris 2024
            </h2>
            <p
              className="uppercase xl:text-2xl 2xl:text-[40px] font-normal text-base !leading-[48px]"
              dangerouslySetInnerHTML={{ __html: t.hero.desc }}
            />
          </div>
        </div>
      </section>
      <main className="pt-[120px] px-[64px] lg:p-10  xl:p-20 2xl:p-[160px] flex flex-col gap-[120px] lg:gap-[96px] 2xl:gap-[160px] ">
        <section className="flex-col xl:flex-row flex justify-between gap-[64px] ">
          <span
            className="text-2xl"
            dangerouslySetInnerHTML={{ __html: t.section.badge }}
          />
          <h1
            className="font-light 2xl:text-7xl xl:text-[48px] text-[36px]  tracking-[-2px] 2xl:max-w-[1100px] max-w-[864px]  gap-5"
            dangerouslySetInnerHTML={{ __html: t.section.title }}
          />
        </section>
        <section id="results">
          <div className="bg-[#252525] 2xl:p-[80px] p-[64px] rounded-[50px] text-white">
            <h1 className="text-center 2xl:text-7xl text-[56px]  font-semibold mb-14 2xl:mb-20">
              {t.results.title}
            </h1>
            <div className="lg:text-center text-[32px] 2xl:text-[36px] font-semibold">
              <div className="flex lg:items-center lg:flex-row flex-col mb-6">
                <p>{t.results?.["1"]}</p>
                <div className="flex-grow mx-4 lg:border-b border-dashed border-gray-500"></div>
                <div className="flex">
                  <span className="mx-2">
                    <Image
                      src={"/img/gold.png"}
                      width={64}
                      height={64}
                      alt="gold"
                    />
                  </span>
                </div>
              </div>
              <div className="flex lg:items-center lg:flex-row flex-col mb-6">
                <p>{t.results?.["2"]}</p>

                <div className="flex-grow mx-4 lg:border-b border-dashed border-gray-500"></div>
                <div className="flex">
                  <span className="mx-2">
                    <Image
                      src={"/img/gold.png"}
                      width={64}
                      height={64}
                      alt="gold"
                    />
                  </span>
                </div>
              </div>
              <div className="flex lg:items-center lg:flex-row flex-col mb-6">
                <p>{t.results?.["3"]}</p>
                <div className="flex-grow mx-4 lg:border-b border-dashed border-gray-500"></div>
                <div className="flex">
                  <span className="mx-2 flex">
                    <Image
                      src={"/img/silver.png"}
                      width={64}
                      height={64}
                      alt="silver"
                    />{" "}
                    <Image
                      src={"/img/silver.png"}
                      width={64}
                      height={64}
                      alt="silver"
                    />
                  </span>
                </div>
              </div>
              <div className="flex lg:items-center lg:flex-row flex-col mb-6">
                <p>{t.results?.["4"]}</p>
                <div className="flex-grow mx-4 lg:border-b border-dashed border-gray-500"></div>
                <div className="flex">
                  <span className="mx-2 flex">
                    <Image
                      src={"/img/gold.png"}
                      width={64}
                      height={64}
                      alt="gold"
                    />{" "}
                    <Image
                      src={"/img/gold.png"}
                      width={64}
                      height={64}
                      alt="gold"
                    />{" "}
                    <Image
                      src={"/img/gold.png"}
                      width={64}
                      height={64}
                      alt="gold"
                    />{" "}
                    <Image
                      src={"/img/gold.png"}
                      width={64}
                      height={64}
                      alt="gold"
                    />{" "}
                    <Image
                      src={"/img/gold.png"}
                      width={64}
                      height={64}
                      alt="gold"
                    />{" "}
                    <Image
                      src={"/img/gold.png"}
                      width={64}
                      height={64}
                      alt="gold"
                    />
                  </span>
                </div>
              </div>
              <div className="flex lg:items-center lg:flex-row flex-col mb-6">
                <p>{t.results?.["5"]}</p>
                <div className="flex-grow mx-4 lg:border-b border-dashed border-gray-500"></div>
                <div className="flex items-center">
                  <span className="mx-2 flex">
                    <Image
                      src={"/img/gold.png"}
                      width={64}
                      height={64}
                      alt="gold"
                    />
                    <Image
                      src={"/img/silver.png"}
                      width={64}
                      height={64}
                      alt="silver"
                    />
                    <Image
                      src={"/img/silver.png"}
                      width={64}
                      height={64}
                      alt="silver"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="w-[300px] h-[216px] rounded-[50px] bg-[#000000] z-40 relative p-2 mx-auto -mb-[108px]">
            <h1
              className="text-[36px] text-center text-[#DFDFDF] my-[55px]"
              dangerouslySetInnerHTML={{ __html: t.medals.title }}
            />
          </div>
          <div className="bg-[#252525] rounded-[50px] max-w-[960px] w-full flex flex-col mx-auto h-[725px]">
            <div className="mt-auto flex gap-[18px] w-full justify-center border-b-2 border-[#878787]">
              <div className="mt-auto flex flex-col font-bold text-[56px] 2xl:text-[72px] text-center ">
                6
                <Image
                  src={"/img/silver-card.png"}
                  width={180}
                  height={148}
                  alt="silver card"
                />
              </div>
              <div className="mt-auto flex flex-col font-bold text-[56px] 2xl:text-[72px] text-center">
                13
                <Image
                  src={"/img/gold-card.png"}
                  width={180}
                  height={302}
                  alt="silver card"
                />
              </div>

              <div className="mt-auto flex flex-col font-bold text-[56px] 2xl:text-[72px] text-center">
                7
                <Image
                  src={"/img/bronze-card.png"}
                  width={180}
                  height={195}
                  alt="silver card"
                />
              </div>
            </div>
            <div className="text-[#878787] font-bold text-[36px] uppercase text-center py-10">
              {t.medals.total}:26
            </div>
          </div>
        </section>
        <section
          id="about-me"
          className="flex flex-col-reverse lg:flex-row justify-between gap-5 items-center"
        >
          <div className="flex flex-col gap-10">
            <h1
              className="text-[56px] 2xl:text-[72px] font-semibold leading-[72px] 2xl:leading-[86px]"
              dangerouslySetInnerHTML={{ __html: t.dk }}
            />
            <p className="text-[#878787] text-[24px] max-w-[616px] 2xl:max-w-[762px] leading-[36px]">
              {t.about}
            </p>
          </div>
          <Image
            src={"/img/result-1.png"}
            width={720}
            height={824}
            className="2xl:w-[720px] 2xl:h-[824px] w-[480px] h-[550px] "
            alt="result-1"
          />
        </section>
        <section id="connections" className="flex flex-col gap-[100px]">
          <h1
            className="text-7xl font-semibold text-center"
            dangerouslySetInnerHTML={{ __html: t.connections.title }}
          />

          <div className="flex flex-wrap gap-8 2xl:gap-12 justify-center">
            {leaders.map((leader, index) => (
              <div
                key={index}
                className="w-[384px] 2xl:w-[490px] flex gap-1 flex-col bg-[#252525] rounded-[30px] overflow-hidden"
              >
                <Image
                  src={leader.imgSrc}
                  width={500}
                  height={360}
                  className="2xl:h-[360px] h-[280px]  object-cover"
                  alt={`result-${index + 1}`}
                />
                <div className="flex flex-col gap-3 2xl:p-10 p-9">
                  <h4 className="2xl:text-[30px] text-[27px]">{leader.name}</h4>
                  <p className="text-xl text-[#65676C]">{leader.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="gallery" className="flex flex-col  gap-[64px]">
          <div className="grid grid-cols-2 gap-8">
            <div className="col-span-1">
              {/* eslint-disable  */}
              <img
                src="/img/gallery-1.png"
                alt="Image 1"
                className="w-full 2xl:w-[775px] h-auto  border border-[#252525]  object-cover"
              />
            </div>

            <div className="row-span-2">
              <img
                src="/img/gallery-2.png"
                alt="Image 2"
                className="w-full 2xl:w-[775px] h-auto  border border-[#252525] object-cover"
              />
            </div>

            <div className="row-span-2">
              <img
                src="/img/gallery-3.png"
                alt="Image 3"
                className="w-full 2xl:w-[775px] h-auto  border border-[#252525] object-cover"
              />
            </div>

            <div>
              <img
                src="/img/gallery-4.png"
                alt="Image 4"
                className="w-full 2xl:w-[775px] h-auto  border border-[#252525] object-cover"
              />
            </div>
          </div>
          <Link href={`${lang}/gallery`} className="mx-auto">
            <button className="rounded-[50px] p-[20px_26px] border border-[#878787]  mx-auto">
              {t.view_more}
            </button>
          </Link>
        </section>
        <Socials t={t} />
        <ContactForm t={t} />
      </main>
    </>
  );
}
