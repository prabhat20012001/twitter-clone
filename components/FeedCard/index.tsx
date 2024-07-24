import React from "react";
import Image from "next/image";
import { BiComment, BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";

const FeedCard: React.FC = () => {
  return (
    <div className="border border-gray-600 hover:bg-slate-900 transition-all p-4 cursor-pointer">
      <div className="grid grid-cols-12">
        <div className="col-span-1 rounded-full">
          <Image
            src="https://avatars.githubusercontent.com/u/108868331?v=4"
            className="rounded-full"
            alt=""
            height={50}
            width={50}
          ></Image>
        </div>

        <div className="col-span-11 px-2">
          <h5 className="text-white">Prabhat Kumar</h5>
          <pre>
            <p className="text-white text-wrap text-xs">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              dolore non voluptate? .
            </p>
          </pre>
        </div>
       
      </div>
      <div className="text-white flex  justify-evenly items-center mt-3">
            <div>
                <BiMessageRounded/>
            </div>
            <div><FaRetweet/></div>
            <div><AiOutlineHeart/></div>
            <div><BiUpload/></div>
        </div>
    </div>
  );
};

export default FeedCard;
