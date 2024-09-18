import Image from "next/image";
import { getDictionary } from "./dictionaries";

export default async function Home({ params: { lang } }) {
  const t = await getDictionary(lang);

  return (
    <>
      <section className="bg-[url('/img/bg.png')] bg-cover bg-center bg-no-repeat h-screen flex flex-col">
        <header className="bg-transparent h-[120px] max-w-[1600px] px-16 2xl:p-0 w-full mx-auto flex items-center justify-between">
          <span>
            <svg
              width="257"
              height="36"
              viewBox="0 0 257 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.35995 28.12V24.16H10.89C12.03 24.16 13.04 23.99 13.92 23.65C14.82 23.29 15.58 22.79 16.2 22.15C16.82 21.51 17.29 20.76 17.61 19.9C17.95 19.02 18.12 18.05 18.12 16.99C18.12 15.89 17.95 14.91 17.61 14.05C17.29 13.17 16.82 12.42 16.2 11.8C15.58 11.18 14.82 10.71 13.92 10.39C13.04 10.07 12.03 9.90998 10.89 9.90998H6.35995V5.94998H10.62C12.6 5.94998 14.33 6.23998 15.81 6.81998C17.29 7.39998 18.52 8.19998 19.5 9.21998C20.48 10.22 21.21 11.37 21.69 12.67C22.19 13.95 22.44 15.28 22.44 16.66V17.32C22.44 18.64 22.19 19.94 21.69 21.22C21.21 22.5 20.48 23.66 19.5 24.7C18.52 25.74 17.29 26.57 15.81 27.19C14.33 27.81 12.6 28.12 10.62 28.12H6.35995ZM2.69995 28.12V5.94998H6.95995V28.12H2.69995Z"
                fill="white"
              />
              <path
                d="M24.7046 28V11.71H28.8746V28H24.7046ZM22.4246 14.83V11.71H28.8746V14.83H22.4246ZM26.2346 9.75998C25.4146 9.75998 24.8046 9.54998 24.4046 9.12998C24.0246 8.68998 23.8346 8.14998 23.8346 7.50998C23.8346 6.82998 24.0246 6.27998 24.4046 5.85998C24.8046 5.43998 25.4146 5.22998 26.2346 5.22998C27.0546 5.22998 27.6546 5.43998 28.0346 5.85998C28.4146 6.27998 28.6046 6.82998 28.6046 7.50998C28.6046 8.14998 28.4146 8.68998 28.0346 9.12998C27.6546 9.54998 27.0546 9.75998 26.2346 9.75998Z"
                fill="white"
              />
              <path
                d="M31.2005 34.42V30.85H34.2605C34.8405 30.85 35.3205 30.77 35.7005 30.61C36.1005 30.47 36.4305 30.23 36.6905 29.89C36.9505 29.57 37.1505 29.12 37.2905 28.54L41.6705 11.71H45.6605L40.8305 29.44C40.5105 30.66 40.0605 31.63 39.4805 32.35C38.9005 33.09 38.1505 33.62 37.2305 33.94C36.3305 34.26 35.2105 34.42 33.8705 34.42H31.2005ZM36.2705 27.64V24.34H39.7505V27.64H36.2705ZM34.8605 27.64L29.5805 11.71H33.7805L38.7905 27.64H34.8605Z"
                fill="white"
              />
              <path
                d="M54.0046 28.57C52.5646 28.57 51.2946 28.34 50.1946 27.88C49.0946 27.42 48.1646 26.8 47.4046 26.02C46.6446 25.22 46.0646 24.32 45.6646 23.32C45.2846 22.32 45.0946 21.28 45.0946 20.2V19.57C45.0946 18.45 45.2946 17.39 45.6946 16.39C46.1146 15.37 46.7046 14.47 47.4646 13.69C48.2446 12.89 49.1846 12.27 50.2846 11.83C51.3846 11.37 52.6246 11.14 54.0046 11.14C55.3846 11.14 56.6246 11.37 57.7246 11.83C58.8246 12.27 59.7546 12.89 60.5146 13.69C61.2946 14.47 61.8846 15.37 62.2846 16.39C62.6846 17.39 62.8846 18.45 62.8846 19.57V20.2C62.8846 21.28 62.6846 22.32 62.2846 23.32C61.9046 24.32 61.3346 25.22 60.5746 26.02C59.8146 26.8 58.8846 27.42 57.7846 27.88C56.6846 28.34 55.4246 28.57 54.0046 28.57ZM54.0046 25C55.0246 25 55.8846 24.78 56.5846 24.34C57.2846 23.88 57.8146 23.27 58.1746 22.51C58.5346 21.73 58.7146 20.85 58.7146 19.87C58.7146 18.87 58.5246 17.99 58.1446 17.23C57.7846 16.45 57.2446 15.84 56.5246 15.4C55.8246 14.94 54.9846 14.71 54.0046 14.71C53.0246 14.71 52.1746 14.94 51.4546 15.4C50.7546 15.84 50.2146 16.45 49.8346 17.23C49.4546 17.99 49.2646 18.87 49.2646 19.87C49.2646 20.85 49.4446 21.73 49.8046 22.51C50.1846 23.27 50.7246 23.88 51.4246 24.34C52.1246 24.78 52.9846 25 54.0046 25Z"
                fill="white"
              />
              <path
                d="M64.536 28V11.71H67.836V18.61H67.746C67.746 16.27 68.246 14.5 69.246 13.3C70.246 12.1 71.716 11.5 73.656 11.5H74.256V15.13H73.116C71.716 15.13 70.626 15.51 69.846 16.27C69.086 17.01 68.706 18.09 68.706 19.51V28H64.536Z"
                fill="white"
              />
              <path
                d="M84.8278 28V23.17H84.1378V17.8C84.1378 16.86 83.9078 16.16 83.4478 15.7C82.9878 15.24 82.2778 15.01 81.3178 15.01C80.8178 15.01 80.2178 15.02 79.5178 15.04C78.8178 15.06 78.1078 15.09 77.3878 15.13C76.6878 15.15 76.0578 15.18 75.4978 15.22V11.68C75.9578 11.64 76.4778 11.6 77.0578 11.56C77.6378 11.52 78.2278 11.5 78.8278 11.5C79.4478 11.48 80.0278 11.47 80.5678 11.47C82.2478 11.47 83.6378 11.69 84.7378 12.13C85.8578 12.57 86.6978 13.26 87.2578 14.2C87.8378 15.14 88.1278 16.37 88.1278 17.89V28H84.8278ZM79.5778 28.42C78.3978 28.42 77.3578 28.21 76.4578 27.79C75.5778 27.37 74.8878 26.77 74.3878 25.99C73.9078 25.21 73.6678 24.27 73.6678 23.17C73.6678 21.97 73.9578 20.99 74.5378 20.23C75.1378 19.47 75.9678 18.9 77.0278 18.52C78.1078 18.14 79.3678 17.95 80.8078 17.95H84.5878V20.44H80.7478C79.7878 20.44 79.0478 20.68 78.5278 21.16C78.0278 21.62 77.7778 22.22 77.7778 22.96C77.7778 23.7 78.0278 24.3 78.5278 24.76C79.0478 25.22 79.7878 25.45 80.7478 25.45C81.3278 25.45 81.8578 25.35 82.3378 25.15C82.8378 24.93 83.2478 24.57 83.5678 24.07C83.9078 23.55 84.0978 22.85 84.1378 21.97L85.1578 23.14C85.0578 24.28 84.7778 25.24 84.3178 26.02C83.8778 26.8 83.2578 27.4 82.4578 27.82C81.6778 28.22 80.7178 28.42 79.5778 28.42Z"
                fill="white"
              />
              <path
                d="M109.589 28L101.579 17.77H98.4892L107.999 6.09998H112.889L104.309 16.6L104.189 14.5L114.779 28H109.589ZM95.3992 28V6.09998H99.6592V28H95.3992Z"
                fill="white"
              />
              <path
                d="M121.717 28.57C120.317 28.57 119.087 28.33 118.027 27.85C116.987 27.37 116.117 26.73 115.417 25.93C114.737 25.11 114.217 24.2 113.857 23.2C113.517 22.2 113.347 21.18 113.347 20.14V19.57C113.347 18.49 113.517 17.45 113.857 16.45C114.217 15.43 114.737 14.53 115.417 13.75C116.117 12.95 116.977 12.32 117.997 11.86C119.017 11.38 120.197 11.14 121.537 11.14C123.297 11.14 124.767 11.53 125.947 12.31C127.147 13.07 128.047 14.08 128.647 15.34C129.247 16.58 129.547 17.92 129.547 19.36V20.86H115.117V18.31H126.937L125.647 19.57C125.647 18.53 125.497 17.64 125.197 16.9C124.897 16.16 124.437 15.59 123.817 15.19C123.217 14.79 122.457 14.59 121.537 14.59C120.617 14.59 119.837 14.8 119.197 15.22C118.557 15.64 118.067 16.25 117.727 17.05C117.407 17.83 117.247 18.77 117.247 19.87C117.247 20.89 117.407 21.8 117.727 22.6C118.047 23.38 118.537 24 119.197 24.46C119.857 24.9 120.697 25.12 121.717 25.12C122.737 25.12 123.567 24.92 124.207 24.52C124.847 24.1 125.257 23.59 125.437 22.99H129.277C129.037 24.11 128.577 25.09 127.897 25.93C127.217 26.77 126.347 27.42 125.287 27.88C124.247 28.34 123.057 28.57 121.717 28.57Z"
                fill="white"
              />
              <path
                d="M131.24 28V6.09998H135.41V28H131.24ZM129.2 9.21998V6.09998H135.41V9.21998H129.2Z"
                fill="white"
              />
              <path
                d="M144.921 28.54C143.781 28.54 142.731 28.33 141.771 27.91C140.811 27.49 139.981 26.9 139.281 26.14C138.581 25.38 138.041 24.5 137.661 23.5C137.281 22.48 137.091 21.38 137.091 20.2V19.57C137.091 18.41 137.271 17.32 137.631 16.3C138.011 15.28 138.531 14.39 139.191 13.63C139.871 12.87 140.681 12.28 141.621 11.86C142.581 11.42 143.641 11.2 144.801 11.2C146.081 11.2 147.201 11.48 148.161 12.04C149.141 12.58 149.921 13.4 150.501 14.5C151.081 15.6 151.401 16.98 151.461 18.64L150.231 17.2V6.09998H154.401V28H151.101V21.07H151.821C151.761 22.73 151.421 24.12 150.801 25.24C150.181 26.34 149.361 27.17 148.341 27.73C147.341 28.27 146.201 28.54 144.921 28.54ZM145.851 25.03C146.671 25.03 147.421 24.85 148.101 24.49C148.781 24.11 149.321 23.57 149.721 22.87C150.141 22.15 150.351 21.31 150.351 20.35V19.15C150.351 18.19 150.141 17.39 149.721 16.75C149.301 16.09 148.751 15.59 148.071 15.25C147.391 14.89 146.651 14.71 145.851 14.71C144.951 14.71 144.151 14.93 143.451 15.37C142.771 15.79 142.231 16.39 141.831 17.17C141.451 17.95 141.261 18.86 141.261 19.9C141.261 20.94 141.461 21.85 141.861 22.63C142.261 23.39 142.801 23.98 143.481 24.4C144.181 24.82 144.971 25.03 145.851 25.03Z"
                fill="white"
              />
              <path
                d="M157.927 28V11.71H162.097V28H157.927ZM155.647 14.83V11.71H162.097V14.83H155.647ZM159.457 9.75998C158.637 9.75998 158.027 9.54998 157.627 9.12998C157.247 8.68998 157.057 8.14998 157.057 7.50998C157.057 6.82998 157.247 6.27998 157.627 5.85998C158.027 5.43998 158.637 5.22998 159.457 5.22998C160.277 5.22998 160.877 5.43998 161.257 5.85998C161.637 6.27998 161.827 6.82998 161.827 7.50998C161.827 8.14998 161.637 8.68998 161.257 9.12998C160.877 9.54998 160.277 9.75998 159.457 9.75998Z"
                fill="white"
              />
              <path
                d="M164.423 34.42V30.85H167.483C168.063 30.85 168.543 30.77 168.923 30.61C169.323 30.47 169.653 30.23 169.913 29.89C170.173 29.57 170.373 29.12 170.513 28.54L174.893 11.71H178.883L174.053 29.44C173.733 30.66 173.283 31.63 172.703 32.35C172.123 33.09 171.373 33.62 170.453 33.94C169.553 34.26 168.433 34.42 167.093 34.42H164.423ZM169.493 27.64V24.34H172.973V27.64H169.493ZM168.083 27.64L162.803 11.71H167.003L172.013 27.64H168.083Z"
                fill="white"
              />
              <path
                d="M187.227 28.57C185.787 28.57 184.517 28.34 183.417 27.88C182.317 27.42 181.387 26.8 180.627 26.02C179.867 25.22 179.287 24.32 178.887 23.32C178.507 22.32 178.317 21.28 178.317 20.2V19.57C178.317 18.45 178.517 17.39 178.917 16.39C179.337 15.37 179.927 14.47 180.687 13.69C181.467 12.89 182.407 12.27 183.507 11.83C184.607 11.37 185.847 11.14 187.227 11.14C188.607 11.14 189.847 11.37 190.947 11.83C192.047 12.27 192.977 12.89 193.737 13.69C194.517 14.47 195.107 15.37 195.507 16.39C195.907 17.39 196.107 18.45 196.107 19.57V20.2C196.107 21.28 195.907 22.32 195.507 23.32C195.127 24.32 194.557 25.22 193.797 26.02C193.037 26.8 192.107 27.42 191.007 27.88C189.907 28.34 188.647 28.57 187.227 28.57ZM187.227 25C188.247 25 189.107 24.78 189.807 24.34C190.507 23.88 191.037 23.27 191.397 22.51C191.757 21.73 191.937 20.85 191.937 19.87C191.937 18.87 191.747 17.99 191.367 17.23C191.007 16.45 190.467 15.84 189.747 15.4C189.047 14.94 188.207 14.71 187.227 14.71C186.247 14.71 185.397 14.94 184.677 15.4C183.977 15.84 183.437 16.45 183.057 17.23C182.677 17.99 182.487 18.87 182.487 19.87C182.487 20.85 182.667 21.73 183.027 22.51C183.407 23.27 183.947 23.88 184.647 24.34C185.347 24.78 186.207 25 187.227 25Z"
                fill="white"
              />
              <path
                d="M197.759 28V11.71H201.059V18.61H200.969C200.969 16.27 201.469 14.5 202.469 13.3C203.469 12.1 204.939 11.5 206.879 11.5H207.479V15.13H206.339C204.939 15.13 203.849 15.51 203.069 16.27C202.309 17.01 201.929 18.09 201.929 19.51V28H197.759Z"
                fill="white"
              />
              <path
                d="M215.981 28.57C214.541 28.57 213.271 28.34 212.171 27.88C211.071 27.42 210.141 26.8 209.381 26.02C208.621 25.22 208.041 24.32 207.641 23.32C207.261 22.32 207.071 21.28 207.071 20.2V19.57C207.071 18.45 207.271 17.39 207.671 16.39C208.091 15.37 208.681 14.47 209.441 13.69C210.221 12.89 211.161 12.27 212.261 11.83C213.361 11.37 214.601 11.14 215.981 11.14C217.361 11.14 218.601 11.37 219.701 11.83C220.801 12.27 221.731 12.89 222.491 13.69C223.271 14.47 223.861 15.37 224.261 16.39C224.661 17.39 224.861 18.45 224.861 19.57V20.2C224.861 21.28 224.661 22.32 224.261 23.32C223.881 24.32 223.311 25.22 222.551 26.02C221.791 26.8 220.861 27.42 219.761 27.88C218.661 28.34 217.401 28.57 215.981 28.57ZM215.981 25C217.001 25 217.861 24.78 218.561 24.34C219.261 23.88 219.791 23.27 220.151 22.51C220.511 21.73 220.691 20.85 220.691 19.87C220.691 18.87 220.501 17.99 220.121 17.23C219.761 16.45 219.221 15.84 218.501 15.4C217.801 14.94 216.961 14.71 215.981 14.71C215.001 14.71 214.151 14.94 213.431 15.4C212.731 15.84 212.191 16.45 211.811 17.23C211.431 17.99 211.241 18.87 211.241 19.87C211.241 20.85 211.421 21.73 211.781 22.51C212.161 23.27 212.701 23.88 213.401 24.34C214.101 24.78 214.961 25 215.981 25Z"
                fill="white"
              />
              <path
                d="M229.431 28L224.331 11.71H228.621L233.511 28H229.431ZM230.661 28V24.58H235.071V28H230.661ZM232.311 28L236.511 11.71H240.531L236.121 28H232.311Z"
                fill="white"
              />
              <path
                d="M251.345 28V23.17H250.655V17.8C250.655 16.86 250.425 16.16 249.965 15.7C249.505 15.24 248.795 15.01 247.835 15.01C247.335 15.01 246.735 15.02 246.035 15.04C245.335 15.06 244.625 15.09 243.905 15.13C243.205 15.15 242.575 15.18 242.015 15.22V11.68C242.475 11.64 242.995 11.6 243.575 11.56C244.155 11.52 244.745 11.5 245.345 11.5C245.965 11.48 246.545 11.47 247.085 11.47C248.765 11.47 250.155 11.69 251.255 12.13C252.375 12.57 253.215 13.26 253.775 14.2C254.355 15.14 254.645 16.37 254.645 17.89V28H251.345ZM246.095 28.42C244.915 28.42 243.875 28.21 242.975 27.79C242.095 27.37 241.405 26.77 240.905 25.99C240.425 25.21 240.185 24.27 240.185 23.17C240.185 21.97 240.475 20.99 241.055 20.23C241.655 19.47 242.485 18.9 243.545 18.52C244.625 18.14 245.885 17.95 247.325 17.95H251.105V20.44H247.265C246.305 20.44 245.565 20.68 245.045 21.16C244.545 21.62 244.295 22.22 244.295 22.96C244.295 23.7 244.545 24.3 245.045 24.76C245.565 25.22 246.305 25.45 247.265 25.45C247.845 25.45 248.375 25.35 248.855 25.15C249.355 24.93 249.765 24.57 250.085 24.07C250.425 23.55 250.615 22.85 250.655 21.97L251.675 23.14C251.575 24.28 251.295 25.24 250.835 26.02C250.395 26.8 249.775 27.4 248.975 27.82C248.195 28.22 247.235 28.42 246.095 28.42Z"
                fill="white"
              />
            </svg>
          </span>
          <nav>
            <ul className="text-[#878787] text-xl font-normal flex gap-[60px]">
              <li>About me</li>
              <li>Results</li>
              <li>Gallery</li>
              <li>Key connections</li>
            </ul>
          </nav>
        </header>
        <div className="px-2 mx-auto flex gap-[64px] items-center mt-auto mb-[96px]">
          <h1 className="text-right text-[64px] leading-[72px] 2xl:text-8xl font-bold">
            Diyora <br /> Keldiyorova
          </h1>
          <Image
            src={"/img/paris-olympic.png"}
            width={240}
            height={240}
            className="2xl:size-[240px] size-[180px] object-cover"
            alt="olympic"
          />
          <div className="flex flex-col gap-3">
            <h2 className="font-bold 2xl:text-[64px] text-[54px] ">
              Paris 2024
            </h2>
            <p className="uppercase text-2xl 2xl:text-[40px] font-normal leading-tight">
              the uzbeksitan`s first-ever <br /> Olympic judo gold
            </p>
          </div>
        </div>
      </section>
      <main className="lg:p-10 xl:p-20 2xl:p-[160px] flex flex-col gap-[96px] 2xl:gap-[160px] ">
        <section className=" flex justify-between">
          <span className="text-2xl">
            Anything <br />
            is possible!
          </span>
          <h1 className="font-light 2xl:text-7xl text-[48px]  tracking-[-2px] 2xl:max-w-[1100px] max-w-[864px]  gap-5  ">
            I’m glad that i’m the first to bring an olympic gold medal to the
            history of uzbek judo. I proved that women are capable of anything.
          </h1>
        </section>
        <section>
          <div className="bg-[#252525] 2xl:p-[80px] p-[64px] rounded-[50px] text-white">
            <h1 className="text-center 2xl:text-7xl text-[56px]  font-semibold mb-14 2xl:mb-20">
              Best Results
            </h1>
            <div className="text-center text-[32px] 2xl:text-[36px] font-semibold">
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
            <div className="text-[#878787] font-bold text-[36px]  text-center py-10">
              TOTAL:26
            </div>
          </div>
        </section>
        <section className="flex justify-between gap-5 items-center">
          <div className="flex flex-col gap-10">
            <h1 className="text-[56px] 2xl:text-[72px] font-semibold leading-[72px] 2xl:leading-[86px]">
              Diyora <br /> Keldiyorova
            </h1>
            <p className="text-[#878787] text-[24px] max-w-[616px] 2xl:max-w-[762px] leading-[36px]">
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
            className="2xl:w-[720px] 2xl:h-[824px] w-[480px] h-[550px] "
            alt="result-1"
          />
        </section>
        <section className="flex flex-col gap-[100px]">
          <h1 className="text-7xl font-semibold text-center">
            Key connections
          </h1>
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
        <section>
          <div class="grid grid-cols-2 gap-8">
            <div class="col-span-1">
              {/* eslint-disable  */}
              <img
                src="/img/gallery-1.png"
                alt="Image 1"
                class="w-full 2xl:w-[775px] h-auto object-cover"
              />
            </div>

            <div class="row-span-2">
              <img
                src="/img/gallery-2.png"
                alt="Image 2"
                class="w-full 2xl:w-[775px] h-auto object-cover"
              />
            </div>

            <div class="row-span-2">
              <img
                src="/img/gallery-3.png"
                alt="Image 3"
                class="w-full 2xl:w-[775px] h-auto object-cover"
              />
            </div>

            <div>
              <img
                src="/img/gallery-4.png"
                alt="Image 4"
                class="w-full 2xl:w-[775px] h-auto object-cover"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

const leaders = [
  {
    imgSrc: "/img/president.jpg",
    name: "HE Shavkat Mirziyoyev",
    title: "President of the Republic of Uzbekistan.",
  },
  {
    imgSrc: "/img/minister.jpeg",
    name: "Mr. Adkham Ikramov",
    title: "Minister of Sports of the Republic of Uzbekistan.",
  },
  {
    imgSrc: "/img/first-deputy.jpg",
    name: "Shahnoza Mirziyoyeva",
    title:
      "First Deputy Director of the National Agency for Social Protection of Uzbekistan.",
  },
  {
    imgSrc: "/img/vice-president.jpg",
    name: "Mr. Otabek Umarov",
    title: "Vice-president of the Olympic Council of Asia.",
  },
  {
    imgSrc: "/img/judo-president.jpg",
    name: "Mr. Azizion Kamilov",
    title: "Chairman of the Uzbekistan Judo Federation.",
  },
  {
    imgSrc: "/img/minister-of-defense.jpg",
    name: "Mr. Bahodir Qurbonov",
    title: "Minister of Defense of Uzbekistan.",
  },
];
