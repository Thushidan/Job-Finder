import { BrowserRouter, Route, Routes } from "react-router-dom";
import JobListingPage from "../pages/job-listings-page/JobListingPage";
import AddJobPage from "../pages/add-job-page/AddJobPage";
import JobDetailPage from "../pages/job-detail-page/JobDetailPage";
import SearchJobsPage from "../pages/serach-page/SearchJobsPage";
import RegisterPage from "../pages/register-page/RegisterPage";
import LoginPage from "../pages/login-page/LoginPage";
import PrivateRoute from "./private-route/PrivateRoute";
import UnAuthorizedPage from "../pages/unauthorized-page/UnAuthorizedPage";
import NotFound from "../pages/not-found/NotFound";

const MainNavigation = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" Component={JobListingPage}/>
        <Route path="/register" Component={RegisterPage}/>
        <Route path="/login" Component={LoginPage}/>
        <Route path="/add/job" element={<PrivateRoute page={<AddJobPage />}/>}/>
        <Route path="/search/:title/:company" Component={SearchJobsPage}/>
        <Route path="/job/:jobId" Component={JobDetailPage}/>
        <Route path="/unauthorized" Component={UnAuthorizedPage}/>
        <Route path="*" Component={NotFound}/>
      </Routes>
    </BrowserRouter>
  );
}

export default MainNavigation;