import Logo from "../components/logo";
import Navbar from "../components/navbar";
import { getDictionary } from "../dictionaries";
import GalleryComponent from "./gallery-component";

export default async function Gallery({ params: { lang } }) {
  const t = await getDictionary(lang);

  return (
    <>
      <Navbar t={t} />
      <main>
        <GalleryComponent />
      </main>
    </>
  );
}
