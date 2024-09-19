import "../globals.css";
import { Sora } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Logo from "./components/logo";
import { redirect } from "next/navigation";
const sora = Sora({ subsets: ["latin"] });

export default function Layout({ children, params }) {
  const { lang } = params;

  if (!lang) {
    redirect("/en");
  }
  return (
    <html lang={params.lang} className={sora.className}>
      <body>
        {children}
        <footer className="pt-[100px] pb-[40px] px-16 2xl:px-0 bg-[#252525]">
          <div className=" max-w-[1600px] mx-auto">
            <div className="flex justify-between items-center">
              <Logo />
              <div className="flex gap-8">
                <a
                  href="https://www.instagram.com/diyora_keldiyorova?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==l"
                  target="_blank"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 6.16094C19.2063 6.16094 19.5859 6.175 20.8469 6.23125C22.0188 6.28281 22.6516 6.47969 23.0734 6.64375C23.6313 6.85938 24.0344 7.12188 24.4516 7.53906C24.8734 7.96094 25.1313 8.35938 25.3469 8.91719C25.5109 9.33906 25.7078 9.97656 25.7594 11.1437C25.8156 12.4094 25.8297 12.7891 25.8297 15.9906C25.8297 19.1969 25.8156 19.5766 25.7594 20.8375C25.7078 22.0094 25.5109 22.6422 25.3469 23.0641C25.1313 23.6219 24.8687 24.025 24.4516 24.4422C24.0297 24.8641 23.6313 25.1219 23.0734 25.3375C22.6516 25.5016 22.0141 25.6984 20.8469 25.75C19.5813 25.8062 19.2016 25.8203 16 25.8203C12.7938 25.8203 12.4141 25.8062 11.1531 25.75C9.98125 25.6984 9.34844 25.5016 8.92656 25.3375C8.36875 25.1219 7.96563 24.8594 7.54844 24.4422C7.12656 24.0203 6.86875 23.6219 6.65313 23.0641C6.48906 22.6422 6.29219 22.0047 6.24063 20.8375C6.18438 19.5719 6.17031 19.1922 6.17031 15.9906C6.17031 12.7844 6.18438 12.4047 6.24063 11.1437C6.29219 9.97187 6.48906 9.33906 6.65313 8.91719C6.86875 8.35938 7.13125 7.95625 7.54844 7.53906C7.97031 7.11719 8.36875 6.85938 8.92656 6.64375C9.34844 6.47969 9.98594 6.28281 11.1531 6.23125C12.4141 6.175 12.7938 6.16094 16 6.16094ZM16 4C12.7422 4 12.3344 4.01406 11.0547 4.07031C9.77969 4.12656 8.90313 4.33281 8.14375 4.62812C7.35156 4.9375 6.68125 5.34531 6.01563 6.01562C5.34531 6.68125 4.9375 7.35156 4.62813 8.13906C4.33281 8.90313 4.12656 9.775 4.07031 11.05C4.01406 12.3344 4 12.7422 4 16C4 19.2578 4.01406 19.6656 4.07031 20.9453C4.12656 22.2203 4.33281 23.0969 4.62813 23.8563C4.9375 24.6484 5.34531 25.3188 6.01563 25.9844C6.68125 26.65 7.35156 27.0625 8.13906 27.3672C8.90313 27.6625 9.775 27.8687 11.05 27.925C12.3297 27.9812 12.7375 27.9953 15.9953 27.9953C19.2531 27.9953 19.6609 27.9812 20.9406 27.925C22.2156 27.8687 23.0922 27.6625 23.8516 27.3672C24.6391 27.0625 25.3094 26.65 25.975 25.9844C26.6406 25.3188 27.0531 24.6484 27.3578 23.8609C27.6531 23.0969 27.8594 22.225 27.9156 20.95C27.9719 19.6703 27.9859 19.2625 27.9859 16.0047C27.9859 12.7469 27.9719 12.3391 27.9156 11.0594C27.8594 9.78438 27.6531 8.90781 27.3578 8.14844C27.0625 7.35156 26.6547 6.68125 25.9844 6.01562C25.3188 5.35 24.6484 4.9375 23.8609 4.63281C23.0969 4.3375 22.225 4.13125 20.95 4.075C19.6656 4.01406 19.2578 4 16 4Z"
                      fill="white"
                    />
                    <path
                      d="M16 9.83594C12.5969 9.83594 9.83594 12.5969 9.83594 16C9.83594 19.4031 12.5969 22.1641 16 22.1641C19.4031 22.1641 22.1641 19.4031 22.1641 16C22.1641 12.5969 19.4031 9.83594 16 9.83594ZM16 19.9984C13.7922 19.9984 12.0016 18.2078 12.0016 16C12.0016 13.7922 13.7922 12.0016 16 12.0016C18.2078 12.0016 19.9984 13.7922 19.9984 16C19.9984 18.2078 18.2078 19.9984 16 19.9984Z"
                      fill="white"
                    />
                    <path
                      d="M23.8469 9.5922C23.8469 10.3891 23.2 11.0313 22.4078 11.0313C21.6109 11.0313 20.9688 10.3844 20.9688 9.5922C20.9688 8.79533 21.6156 8.15314 22.4078 8.15314C23.2 8.15314 23.8469 8.80002 23.8469 9.5922Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@Keldiyorova_Diyoraofficial"
                  target="_blank"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.522 10.1854C27.3863 9.67482 27.1189 9.20883 26.7465 8.83407C26.3741 8.4593 25.9099 8.18891 25.4002 8.04996C23.5238 7.54541 16.0238 7.54541 16.0238 7.54541C16.0238 7.54541 8.5238 7.54541 6.64744 8.04996C6.13773 8.18891 5.67346 8.4593 5.30109 8.83407C4.92872 9.20883 4.66131 9.67482 4.52562 10.1854C4.0238 12.07 4.0238 16 4.0238 16C4.0238 16 4.0238 19.93 4.52562 21.8145C4.66131 22.3251 4.92872 22.7911 5.30109 23.1658C5.67346 23.5406 6.13773 23.811 6.64744 23.95C8.5238 24.4545 16.0238 24.4545 16.0238 24.4545C16.0238 24.4545 23.5238 24.4545 25.4002 23.95C25.9099 23.811 26.3741 23.5406 26.7465 23.1658C27.1189 22.7911 27.3863 22.3251 27.522 21.8145C28.0238 19.93 28.0238 16 28.0238 16C28.0238 16 28.0238 12.07 27.522 10.1854Z"
                      fill="white"
                    />
                    <path
                      d="M13.5693 19.5686V12.4314L19.842 16L13.5693 19.5686Z"
                      fill="#252525"
                    />
                  </svg>
                </a>
                <a
                  href="https://t.me/diyora_keldiyorovaofficial"
                  target="_blank"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_64_5025)">
                      <path
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.24248 15.8309C11.9068 13.7988 15.0171 12.459 16.5733 11.8117C21.0167 9.96359 21.94 9.64255 22.5418 9.63195C22.6741 9.62962 22.9701 9.66242 23.1618 9.81797C23.3237 9.94931 23.3682 10.1267 23.3895 10.2513C23.4108 10.3758 23.4373 10.6595 23.4163 10.8811C23.1755 13.4111 22.1336 19.5507 21.6035 22.3843C21.3792 23.5833 20.9376 23.9853 20.5101 24.0247C19.5809 24.1102 18.8754 23.4106 17.9754 22.8207C16.5672 21.8976 15.7717 21.323 14.4048 20.4222C12.8251 19.3812 13.8491 18.8091 14.7494 17.874C14.985 17.6293 19.0789 13.9056 19.1581 13.5678C19.168 13.5256 19.1772 13.3681 19.0836 13.285C18.9901 13.2018 18.852 13.2302 18.7524 13.2529C18.6111 13.2849 16.3615 14.7718 12.0035 17.7136C11.3649 18.1521 10.7866 18.3657 10.2683 18.3545C9.69706 18.3422 8.59814 18.0315 7.78121 17.766C6.77921 17.4403 5.98284 17.2681 6.05218 16.7149C6.0883 16.4268 6.48507 16.1321 7.24248 15.8309Z"
                        fill="#252525"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_64_5025">
                        <rect width="32" height="32" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>
            </div>
            <div className="border-t border-white pt-[30px] text-lg text-center justify-center flex xl:flex-row flex-col w-full mt-[100px] gap-5">
              <p>
                © 2024 Diyora Keldiyorova.{" "}
                {params.lang === "uz"
                  ? "Barcha huquqlar himoyalangan"
                  : params.lang === "ru"
                  ? "Все права защищены"
                  : "All rights reserved"}
              </p>
              <p className="xl:flex hidden">|</p>
              <div className="flex gap-5 justify-center">
                <a href="mailto:media.keldiyorova@gmail.com">
                  media.keldiyorova@gmail.com
                </a>
                |<a href="tel:+998770900919"> +998(77) 090-09-19</a>
              </div>
            </div>
          </div>
        </footer>
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
