import { SelectedPage } from "../../shared/types";
import ActionButton from "../../shared/ActionButton";
import useMediaQuery from "../../hooks/useMediaQuery";
import HomePageText from "../../assets/HomePageText.png";
import HomePageGraphic from "../../assets/HomePageGraphic.png";
import SponsorRedBull from "../../assets/SponsorRedBull.png";
import SponsorForbes from "../../assets/SponsorForbes.png";
import SponsorFortune from "../../assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (newPage: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 md:h-full md:pb-0">
      {/* MAIN HEADER & IMAGE */}
      <motion.div 
      onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
        {/* Main Header */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* headings */}
          <motion.div
            initial="hidden"
            whileInView="visible" //final state
            viewport={{ once: true, amount: 0.5 }} //see 50% of div before animation is triggered
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="md:-mt-20"
          >
            <div className="before:absolute">
              <div className="before:relative before:top-14 before:-left-20 before:z-[-1]  content-evolvetext">
                <img src={HomePageText} alt="HomePageText" />
              </div>
            </div>
            <p className="mt-8 text-sm ">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </motion.div>
          {/* Actions */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="mt-8 flex items-center gap-8 "
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join now{" "}
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div className="flex basis-3/5 justify-center md:z-10 md:mt-20 md:ml-16 md:justify-items-end">
          <img src={HomePageGraphic} alt="HomePageGraphic"></img>
        </div>
      </motion.div>

      {/* SPONSORS */}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img src={SponsorRedBull} alt="SponsorRedBull"></img>
              <img src={SponsorForbes} alt="SponsorForbes"></img>
              <img src={SponsorFortune} alt="SponsorFortune"></img>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
