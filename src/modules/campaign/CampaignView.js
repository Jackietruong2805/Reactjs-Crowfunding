import React, { Fragment } from "react";

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
    </Fragment>
  );
};

export default CampaignView;
