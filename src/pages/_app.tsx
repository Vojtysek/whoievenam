import "../styles/globals.css";
import Navbar from "../components/Navbar";
import type { AppType } from "next/dist/shared/lib/utils";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Navbar />
    <div className="bg-[#121212] flex flex-col items-center text-white">
      <Component {...pageProps} />
    </div>
    </>
  );
};

export default MyApp;
