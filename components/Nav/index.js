import requests from "../../utils/requests";
import { useRouter } from "next/router";

function Nav() {
  const router = useRouter();

  return (
    <nav className="relative">
      <div className="flex text-2xl px-10 py-2 sm:px-20 whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => {
              router.push(`/?gener=${key}`);
            }}
            className="last:pr-24 cursor-pointer transition transform hover:scale-125 duration-300 hover:text-white active:text-red-500"
          >
            {title}
          </h2>
        ))}
        <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12"></div>
      </div>
    </nav>
  );
}

export default Nav;
