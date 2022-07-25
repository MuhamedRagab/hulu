import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";
import { memo } from "react";

function Content({ content }) {
  return (
    <FlipMove className="p-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {content.map((item) => (
        <Thumbnail key={item.id} item={item} />
      ))}
    </FlipMove>
  );
}

export default memo(Content);
