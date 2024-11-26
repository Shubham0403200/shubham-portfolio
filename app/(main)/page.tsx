import { AuroraBackgroundFunction } from "@/components/acternity/aurora-background";
import { Services } from "@/components/acternity/services";
import { Testimonials } from "@/components/acternity/testimonials";
import React from "react";

const HomePage = () => {
  return (
    <div className="no-scrollbar">
      <AuroraBackgroundFunction />
      <Testimonials />
      <Services />
    </div>
  );
};

export default HomePage;
