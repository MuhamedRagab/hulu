import Image from "next/image";
import HeaderItem from "./HeaderIcons";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  SearchIcon,
  LightningBoltIcon,
  UserIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header className="flex justify-between items-center flex-col sm:flex-row">
      <div className="flex flex-grow justify-evenly items-center max-w-2xl m-5">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTION" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
        alt=""
      />
    </header>
  );
}

export default Header;
