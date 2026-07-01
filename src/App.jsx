import React from "react";
import { Routes, Route } from "react-router-dom";
import favicon from "./assets/image.png";
import Assessment from "./pages/Assessment/Assessment";
import BussinessCareer from "./pages/Bussiness/Bussiness";
import Careers from "./pages/Careers/Careers";
import Contact from "./pages/Contact/Contact";
import HealthcareCareer from "./pages/Healthcare/Healthcare";
import Home from "./pages/Home/Home";
import Resources from "./pages/Resources/Resources";
import SoftwareCareer from "./pages/Software/Software";
import Header from "./pages/Header/Header";
import Footer from "./pages/Footer/Footer";
import AssessmentResult from "./pages/AssessmentResult/AssessmentResult";
import Roadmap from "./pages/Roadmap/Roadmap";
import CareerCompare from "./components/CareerCompare/CareerCompare";
import FAQ from "./components/FAQ/FAQ";
import Scholarship from "./pages/Resources/Scholarship";
import InterviewGuide from "./pages/Resources/InterviewGuide";
import ResumeKit from "./pages/Resources/ResumeKit";
import EducationPathway from "./pages/Resources/EducationPathway";
import TeachingCareer from "./pages/Teaching/Teaching";
import EngineeringCareer from "./pages/Engineering/Engineering";
import ArtsCareer from "./pages/Arts/Arts";
export default function App() {
  return (
    <div className="app">
      <Header />

      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/result" element={<AssessmentResult />} />
          <Route path="/roadmap/:career" element={<Roadmap />} />
          <Route path="/bussiness-career" element={<BussinessCareer />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/healthcare-career" element={<HealthcareCareer />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/software-career" element={<SoftwareCareer />} />
          <Route path="/compare" element={<CareerCompare />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/engineering-career" element={<EngineeringCareer />} />

          <Route path="/arts-career" element={<ArtsCareer />} />

          <Route path="/teaching-career" element={<TeachingCareer />} />

          <Route path="/resources/Scholarship" element={<Scholarship />} />

          <Route
            path="/resources/InterviewGuide"
            element={<InterviewGuide />}
          />

          <Route path="/resources/ResumeKit" element={<ResumeKit />} />

          <Route
            path="/resources/EducationPathway"
            element={<EducationPathway />}
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
