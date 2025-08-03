import React from "react";
import { FaRegFileLines } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { motion, scale } from "motion/react"


const Card = ({ data , reference  }) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={0.2} className="w-60 h-80 bg-amber-200 rounded-[35px] relative overflow-hidden p-5">
      <FaRegFileLines />
      <p className="text-md mt-5 leading-tight">{data.desc}</p>
      <div className="footer absolute bottom-0 left-0 w-full  ">
        <div className="flex items-center justify-between px-2 py-1 mb-3">
          <h5>{data.fileSize}</h5>
          <span className="p-2 w-7 h-7 flex items-center justify-center rounded-full bg-zinc-800  ">
            {data.close ? (
              <IoMdClose color="#fff" />
            ) : (
              <IoMdDownload color="#fff" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" :"bg-green-600" } flex items-center justify-center`}>
            <h3 className="text-white text-md font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
