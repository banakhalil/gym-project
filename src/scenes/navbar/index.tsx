import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "../../assets/Logo.png";
import Link from "./Link";
import type { SelectedPage } from "../../shared/types";
import useMediaQuery from "../../hooks/useMediaQuery";
import { useState } from "react";
import ActionButton from "../../shared/ActionButton";
import { div } from "framer-motion/client";

type Props = {
  isTopPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (newpage: SelectedPage) => void;
};
const NavBar = ({ isTopPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between"; //a variable that contains a bunch of classes that we'll use a lot
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navBarBG = isTopPage ? "" : "bg-primary-100 drop-shadow";

  return (
    <>
      <nav>
        <div className={`${navBarBG} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
          <div className={`${flexBetween} mx-auto w-5/6`}>
            {/*left side of inner div */}
            <div className={`${flexBetween} w-full gap-16`}>
              <img src={Logo} alt="logo"></img>
            </div>
            {/*right side of inner div */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                {/*links */}
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                {/*sign in */}
                <div className={`${flexBetween} gap-8`}>
                  <p>sign in</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-d text-white"></Bars3Icon>
              </button>
            )}
          </div>
          {/* MOBILE MENU MODAL */}
          {!isAboveMediumScreens && isMenuToggled && (
            <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
              <div className="flex justify-end p-12">
                <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                  <XMarkIcon className="h-6 w-6 text-gray-400" />
                </button>
              </div>
              {/* MENU ITEMS */}
              <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Benefits"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Our Classes"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Contact Us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
            </div>
          )}
        </div>
        {/* بضل ثابت بأعلى الصفحة لما اعمل سكرول، وبضل اعلى شي بالصفحة يعني محدا يجي فوقو*/}
      </nav>
    </>
  );
};

export default NavBar;
