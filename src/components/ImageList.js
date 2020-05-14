import React from "react";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  let k = -1;
  if (props.images.length === 0) {
    console.log("no no");
  }
  let images = [];

  if (props.images.length !== 0) {
    images = props.images.map((image) => {
      k++;

      return <ImageCard key={image.id} keyId={k} image={image}></ImageCard>;
    });
  }
  return props.images.length !== 0 ? (
    <div className="z-1 pl-16 pr-16 grid grid-cols-1 row-gap-2 col-gap-4  col-gap-2 sm:grid-cols-1 md:grid-cols-4 mt-16 xl:grid-cols-3">
      {images}
    </div>
  ) : (
    <div className="flex justify-center h-full w-full p-10 mt-10">
      {<img src="/404.png" className="w-3/4"></img>}
    </div>
  );
};

export default ImageList;
