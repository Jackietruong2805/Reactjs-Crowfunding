import React, { Fragment } from "react";
import CampDesc from "./parts/CampDesc";
import CampMeta from "./parts/CampMeta";
import CampTitle from "./parts/CampTitle";
import CampCategory from "./parts/CampCategory";
import CampImage from "./parts/CampImage";
import { Button } from "components/button";
import CampViewAuthor from "./parts/CampViewAuthor";

const CampaignView = () => {
  return (
    <Fragment>
      <div
        className="h-[140px] mb-10 text-[40px] font-bold rounded-3xl bg-cover bg-no-repeat bg-opacity-40 flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80)",
        }}
      >
        <h1>Education</h1>
      </div>
      <div className="flex items-start gap-x-10 w-full max-w-[1066px]">
        <div className="flex-1">
          <CampImage className="h-[398px] mb-8"></CampImage>
          <div className="flex justify-center gap-x-5">
            {Array(4)
              .fill(0)
              .map((item, index) => (
                <img
                  src="https://source.unsplash.com/random"
                  alt=""
                  className="w-[89px] h-[70px] rounded-lg object-cover"
                />
              ))}
          </div>
        </div>
        <div className="flex-1 max-w-[443px]">
          <CampCategory className="text-sm" text="Architecture"></CampCategory>
          <CampTitle className="mb-4 text-xl font-bold">
            Remake - We Make architecture exhibition
          </CampTitle>
          <CampDesc className="mb-6 text-sm">
            Remake - We Make: an exhibition about architecture's social agency
            in the face of urbanisation
          </CampDesc>
          <CampViewAuthor></CampViewAuthor>
          <div className="w-full rounded-full bg-[#EFEFEF] h-[5px] mb-6">
            <div className="w-2/4 h-full rounded-full bg-primary"></div>
          </div>
          <div className="flex items-start justify-between mb-4 gap-x-5">
            <CampMeta size="big"></CampMeta>
            <CampMeta size="big"></CampMeta>
            <CampMeta size="big"></CampMeta>
          </div>
          <Button className="w-full text-white bg-primary">
            Back this project
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

export default CampaignView;
