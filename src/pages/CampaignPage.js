import { Button } from "components/button";
import Heading from "components/common/Heading";
import LayoutDashboard from "layout/LayoutDashboard";
import CampaignFeature from "modules/campaign/CampaignFeature";
import CampaignGrid from "modules/campaign/CampaignGrid";
import React from "react";

const CampaignPage = () => {
  return (
    <LayoutDashboard>
      <div className="flex items-center justify-between px-10 py-8 mb-10 bg-white rounded-3xl">
        <div className="flex items-start gap-x-6">
          <div className="flex items-center justify-center text-white rounded-full bg-secondary w-14 h-14 bg-opacity-60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokewidth="1.5"
              stroke="currentColor"
              classname="w-6 h-6"
            >
              <path
                strokelinecap="round"
                strokelinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
          <div className="flex-1">
            <h1 className="text-[22px] font-semibold mb-2">Create Your Campaign</h1>
            <p className="mb-2 text-sm text-text3">Jump right into out editor and create your first Virtue campaign!</p>
            <a href="/" className="text-sm text-primary">
                Need any help? Learm More
            </a>
          </div>
        </div>
        <Button text="secondary" className="bg-secondary bg-opacity-20" type="button">Create campaign</Button>
      </div>
      <Heading number={4}>Your campaign</Heading>
      <CampaignGrid type="secondary">
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
      </CampaignGrid>
    </LayoutDashboard>
  );
};

export default CampaignPage;
