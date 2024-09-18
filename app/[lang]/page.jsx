import Image from "next/image";
import { getDictionary } from "./dictionaries";

export default async function Home({ params: { lang } }) {
  const t = await getDictionary(lang);

  return (
    <>
      <section className="bg-[url('/img/bg.png')] bg-cover bg-no-repeat h-screen flex flex-col">
        <header className="bg-transparent h-[120px] max-w-[1600px] w-full mx-auto flex items-center justify-between">
          <span className="text-3xl font-semibold">DK</span>
          <nav>
            <ul className="text-[#878787] text-xl font-normal flex gap-[60px]">
              <li>About me</li>
              <li>Results</li>
              <li>Gallery</li>
              <li>Key connections</li>
            </ul>
          </nav>
        </header>
        <div className="max-w-[1600px] mx-auto flex gap-[64px] mt-auto mb-[96px]">
          <h1 className="text-right text-8xl font-bold">Diyora Keldiyorova</h1>
          <Image
            src={"/img/paris-olympic.png"}
            width={240}
            height={240}
            alt="olympic"
          />
          <div className="flex flex-col gap-3">
            <h2 className="font-bold text-[64px]">Paris 2024</h2>
            <p className="uppercase text-[40px] font-normal">
              the country`s first-ever Olympic judo gold
            </p>
          </div>
        </div>
      </section>
      <main className="p-[160px] flex flex-col gap-[160px] ">
        <section className=" flex justify-between">
          <span className="text-2xl">
            Anything <br />
            is possible!
          </span>
          <h1 className="font-light text-7xl tracking-[-2px] max-w-[1100px]  gap-5  ">
            I’m glad that i’m the first to bring an olympic gold medal to the
            history of uzbek judo. I proved that women are capable of anything.
          </h1>
        </section>
        <section>
          <div className="bg-[#252525] p-[80px] rounded-[50px] text-white">
            <h1 className="text-center text-7xl font-semibold mb-20">
              Best Results
            </h1>
            <div className="text-center  text-[36px] font-semibold">
              <div className="flex items-center mb-6">
                <p>Paris Olympic Games 2024</p>
                <div className="flex-grow mx-4 border-b border-dashed border-gray-500"></div>
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
              <div className="flex items-center mb-6">
                <p>19th Asian Games Hangzhou 2022</p>
                <div className="flex-grow mx-4 border-b border-dashed border-gray-500"></div>
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
              <div className="flex items-center mb-6">
                <p>World Championships 2023, 2024</p>
                <div className="flex-grow mx-4 border-b border-dashed border-gray-500"></div>
                <div className="flex">
                  <span className="mx-2 flex">
                    {" "}
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
              <div className="flex items-center mb-6">
                <p>Grand Slam</p>
                <div className="flex-grow mx-4 border-b border-dashed border-gray-500"></div>
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
              <div className="flex items-center mb-6">
                <p>Grand Prix</p>
                <div className="flex-grow mx-4 border-b border-dashed border-gray-500"></div>
                <div className="flex items-center">
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
                    <Image
                      src={"/img/gold.png"}
                      width={64}
                      height={64}
                      alt="gold"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="w-[300px] h-[216px] rounded-[50px] bg-[#252525] p-2 mx-auto -mb-[108px]">
            <Image
              src={"/img/result.png"}
              width={284}
              height={200}
              alt="result"
            />
          </div>
          <div className="bg-[#252525] rounded-[50px] max-w-[960px] w-full flex flex-col mx-auto h-[725px]">
            <div className="mt-auto flex gap-[18px] w-full justify-center border-b-2 border-[#878787]">
              <div className="mt-auto flex flex-col font-bold text-[72px] text-center ">
                6
                <Image
                  src={"/img/silver-card.png"}
                  width={180}
                  height={148}
                  alt="silver card"
                />
              </div>
              <div className="mt-auto flex flex-col font-bold text-[72px] text-center">
                13
                <Image
                  src={"/img/gold-card.png"}
                  width={180}
                  height={302}
                  alt="silver card"
                />
              </div>

              <div className="mt-auto flex flex-col font-bold text-[72px] text-center">
                7
                <Image
                  src={"/img/bronze-card.png"}
                  width={180}
                  height={195}
                  alt="silver card"
                />
              </div>
            </div>
            <div className="text-[#878787] font-bold text-[36px]  text-center py-10">
              TOTAL:26
            </div>
          </div>
        </section>
        <section className="flex justify-between gap-5 items-center">
          <div className="flex flex-col gap-10">
            <h1 className="text-[72px] font-semibold leading-[86px]">
              Diyora <br /> Keldiyorova
            </h1>
            <p className="text-[#878787] text-[24px] max-w-[762px] leading-[36px]">
              Olympic champion in Judo, Diyora Keldiyorova became a national
              hero in Uzbekistan on 28 July by winning the country`s first-ever
              Olympic judo gold in the -52kg category at Paris 2024. Beyond her
              impressive athletic achievements, including two World Championship
              silver medals, Keldiyorova embodies the Olympic values of
              excellence, friendship and respect. She is a role model, inspiring
              countless women and girls, showing them the power of determination
              and the possibilities that lie ahead.
            </p>
          </div>
          <Image
            src={"/img/result-1.png"}
            width={720}
            height={824}
            alt="result-1"
          />
        </section>
        <section className="flex flex-col gap-[100px]">
          <h1 className="text-7xl font-semibold text-center">
            Key connections
          </h1>
          <div className="flex flex-wrap gap-12 justify-center">
            <div className="w-[490px]  flex gap-1 flex-col bg-[#252525] rounded-[30px] overflow-hidden">
              <Image
                src={"/img/president.jpg"}
                width={500}
                height={360}
                className="h-[360px] object-cover"
                alt="result-1"
              />
              <div className="flex flex-col gap-3 p-10">
                <h4 className="text-[30px]">HE Shavkat Mirziyoyev</h4>
                <p className="text-xl text-[#65676C]">
                  President of the Republic of Uzbekistan.
                </p>
              </div>
            </div>
            <div className="w-[490px]  flex gap-1 flex-col bg-[#252525] rounded-[30px] overflow-hidden">
              <Image
                src={"/img/minister.jpeg"}
                width={500}
                height={360}
                className="h-[360px] object-cover"
                alt="result-1"
              />
              <div className="flex flex-col gap-3 p-10">
                <h4 className="text-[30px]">Mr. Adkham Ikramov</h4>
                <p className="text-xl text-[#65676C]">
                  Minister of Sports of the Republic of Uzbekistan.{" "}
                </p>
              </div>
            </div>
            <div className="w-[490px]  flex gap-1 flex-col bg-[#252525] rounded-[30px] overflow-hidden">
              <Image
                src={"/img/first-deputy.jpg"}
                width={500}
                height={360}
                className="h-[360px] min-h-[360px] object-cover"
                alt="result-1"
              />
              <div className="flex flex-col gap-3 p-10">
                <h4 className="text-[30px]">Shahnoza Mirziyoyeva</h4>
                <p className="text-xl text-[#65676C]">
                  First Deputy Director of the National Agency for Social
                  Protection of Uzbekistan.
                </p>
              </div>
            </div>
            <div className="w-[490px]  flex gap-1 flex-col bg-[#252525] rounded-[30px] overflow-hidden">
              <Image
                src={"/img/vice-president.jpg"}
                width={500}
                height={360}
                className="h-[360px] object-cover"
                alt="result-1"
              />
              <div className="flex flex-col gap-3 p-10">
                <h4 className="text-[30px]">Mr. Otabek Umarov</h4>
                <p className="text-xl text-[#65676C]">
                  Vice-president of the Olympic Council of Asia.
                </p>
              </div>
            </div>{" "}
            <div className="w-[490px]  flex gap-1 flex-col bg-[#252525] rounded-[30px] overflow-hidden">
              <Image
                src={"/img/judo-president.jpg"}
                width={500}
                height={360}
                className="h-[360px] object-cover"
                alt="result-1"
              />
              <div className="flex flex-col gap-3 p-10">
                <h4 className="text-[30px]"> Mr. Azizion Kamilov</h4>
                <p className="text-xl text-[#65676C]">
                  Chairman of the Uzbekistan Judo Federation{" "}
                </p>
              </div>
            </div>{" "}
            <div className="w-[490px]  flex gap-1 flex-col bg-[#252525] rounded-[30px] overflow-hidden">
              <Image
                src={"/img/minister-of-defense.jpg"}
                width={500}
                height={360}
                className="h-[360px] object-cover"
                alt="result-1"
              />
              <div className="flex flex-col gap-3 p-10">
                <h4 className="text-[30px]"> Mr. Bahodir Qurbonov</h4>
                <p className="text-xl text-[#65676C]">
                  Minister of Defense of Uzbekistan
                </p>
              </div>
            </div>
          </div>
        </section>
        <section></section>
      </main>
    </>
  );
}
