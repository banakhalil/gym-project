import type { SelectedPage } from "../../../shared/types";
import ActionButton from "../../../shared/ActionButton";
import useMediaQuery from "../../../hooks/useMediaQuery";
import HomePageText from "../../assets/HomePageText.png";
import HomePageGraphic from "../../assets/HomePageText.png";
import SponsorRedBull from "../../assets/HomePageText.png";
import SponsorForbes from "../../assets/HomePageText.png";
import SponsorFortion from "../../assets/HomePageText.png";
type Props = {
  setSelectedPage: (newPage: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return
  <section id="home" className="gap-16 bg-gray-20 ">

  </section>>
};

export default Home;
