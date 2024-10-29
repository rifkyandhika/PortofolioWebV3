import Preloader from "@/src/components/Preloader";
import Switcher from "@/src/components/Switcher";
import RifkyAndhikamHead from "@/src/RifkyAndhikamHead";
import "@/styles/globals.css";
import { Fragment } from "react";

const App = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <RifkyAndhikamHead />
      <Switcher />
      <Preloader />
      <Component {...pageProps} />
    </Fragment>
  );
};
export default App;
