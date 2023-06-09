import { defaultImage } from "constants/global";
import React from "react";
import CampTitle from "./parts/CampTitle";

const CampaignPerk = () => {
  return (
    <div className="bg-white shadow-sm rounded-xl">
      <img
        src={defaultImage}
        className="h-[232px] object-cover rounded-xl w-full"
        alt=""
      />
      <div className="p-5">
        <span className="inline-block px-3 py-1 mb-5 text-xs text-white rounded-sm bg-secondary">
          Featured
        </span>
        <CampTitle className="mb-1 text-xl font-semibold">
          Special One Camera
        </CampTitle>
        <div className="flex items-center mb-4 gap-x-3">
          <span className="text-xl font-bold text-text1">$2,274 USD</span>{" "}
          <span className="text-sm font-medium text-error">$1,504 USD</span>
          <span className="text-sm font-medium text-error">(12% OFF)</span>
        </div>
        <div className="flex flex-col mb-4 gap-y-3">
          <strong>Estimated Shipping</strong>{" "}
          <span className="text-text2">October 2022</span>
        </div>
        <p className="mb-4 text-text2">
          <strong className="text-text1">05</strong> claimed
        </p>
        <p className="text-text2">Ships worldwide</p>
      </div>
    </div>
  );
};

export default CampaignPerk;
