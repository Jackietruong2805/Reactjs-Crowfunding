import React, { Suspense, lazy } from "react";
import {Routes, Route} from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import DashboardPage from "pages/DashboardPage";
import CampaignPage from "pages/CampaignPage";

const SignUpPage = lazy(() => import("./pages/SignUpPage"))

function App() {
  return (
    <Suspense>
      <Routes>
          <Route path="/" element={<DashboardPage></DashboardPage>}></Route>
          <Route path="/campaign" element={<CampaignPage></CampaignPage>}></Route>
          <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
          <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
