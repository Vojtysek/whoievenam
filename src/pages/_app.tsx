import "../styles/globals.css";
import Navbar from "../components/Navbar";
import type { AppType } from "next/dist/shared/lib/utils";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className="bg-gray-800">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
