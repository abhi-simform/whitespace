import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProjectManagement from "../components/ProjectManagement";
import WorkTogether from "../components/WorkTogether";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProjectManagement />
      <WorkTogether />
      <Pricing />
      <Footer />
    </div>
  );
}
