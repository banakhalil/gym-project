import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "../../assets/Logo.png";

type Props = {};
const NavBar = (props: Props) => {
  const flexBetween = "flex items-center justify-between"; //a variable that contains a bunch of classes that we'll use a lot

  return (
    <>
      <nav>
        <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
          <div className={`${flexBetween} mx-auto w-5/6`}>
            {/*left side of inner div */}
            <div className={`${flexBetween} w-full gap-16`}>
              <img src="Logo" alt="logo"></img>
            </div>
            {/*right side of inner div */}
            <div className={`${flexBetween} w-full`}>
              {/*links */}
              <div className={`${flexBetween} gap-8 text-sm`}>
                <p>bana</p>
                <p>bana</p>
                <p>bana</p>
                <p>bana</p>
              </div>
              {/*sign in */}
              <div className={`${flexBetween} gap-8` }>
                <p>sign in</p>
                <button className="">Become a member</button>
              </div>
            </div>
          </div>
        </div>
        {/* بضل ثابت بأعلى الصفحة لما اعمل سكرول، وبضل اعلى شي بالصفحة يعني محدا يجي فوقو*/}
      </nav>
    </>
  );
};

export default NavBar;
