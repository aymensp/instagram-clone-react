import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import { getOpenModal, openModal } from "../slices/appSlice";
function Header() {

  const dispatch = useDispatch();
  const setOpen = () => {
    dispatch(openModal({ modal: true }));
  }
  return (
    <div className=" shadow-md border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between  max-w-6xl mx-5 xl:mx-auto  ">
        <div className="relative hidden  lg:inline-grid w-24 cursor-pointer ">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className=" w-10 relative lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="max-w-xs">
          <div className="relative p-3 rounded-md  mt-1">
            <div className="flex pointer-events-none items-center absolute inset-y-0 pl-3">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navButton" />
          <div className="relative navButton">
            <PaperAirplaneIcon className="navButton rotate-45" />
            <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white">
              3
            </div>
          </div>
          <PlusCircleIcon className="navButton" onClick={setOpen} />
          <UserGroupIcon className="navButton" />
          <HeartIcon className="navButton" />
          <img
            src="https://lh3.googleusercontent.com/fife/AAWUweVgKetpyUMTuaYLfTlzPxzLU388zZ-KYOq8-giLZNhN2rJjM2qZnrORdyRIH7jjpm4JHJZ9UNLvRi1gh4Y9jfwG21WT80ZfKJoAyQh13xrUtXBL446Cy3KlDwzr7mMkxuuC3xr-QduBvUtzuVeu-kyXA3je9RFGDCTWoUcHwA9nHiISz7UVJq9qAXyKp-nn03Z8iYpglyoFd2YwW24e0EGofCBJNkcRNZUWbU0UR4Q39c-ZtMLaE7MJwZLdyrTfgKolBBQOrmtBwEkw_czWk5xB-Ed4J0ORV0MHwm53WALi126ehdH-vQ4HsDpl6e9j5kWCOVMv69ao4lNvLLGeGbHafzdPrInsrAd1ZJCXMqguJljWDLdKW_nuTuTUxa7Im2jzh3VcRPPG3YYPaxNVuKy6KTbP30dOL1tG5wlr1rAuIuHmQO8SDOvxzvIO_9wKS_gc3eUW6JwRwKAMmsJAvUU6OqpAvcwwcxIseS47lq_19k7J8uzXZuLPTlQFFGvBFDHqC2vxEMmVo_tZjNI5yn8aPocOtr1ek03dsFQQEzGrKQRC5Wi9MH0daXeiGzFBhcGJdoTa1D4P5XFHTGurkMSHDB7c9E8BRKXU9Yo9zUg3WY-bFG6_oqjMsWPzKImny5nucVYB05RPsCzH0W4Jb0gYzRBM2KgpXO4uqUPvYZH6zOappB8Opo___Mhf15P1O97cMoYhg91BoPJLb7wfVEzR7FXS4uUG4LIO8TjO--ddXw=s64-c"
            className="h-10 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
