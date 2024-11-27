import { AuroraBackgroundFunction } from "@/components/acternity/aurora-background";
import { DesignParallax } from "@/components/acternity/design-parallax";
import { Services } from "@/components/acternity/services";
import { Testimonials } from "@/components/acternity/testimonials";
import { products } from "@/data";
import React from "react";

const HomePage = () => {
  return (
    <div className="no-scrollbar overflow-x-hidden">
      <AuroraBackgroundFunction />
      <Services />
      <DesignParallax products={products} />
      <Testimonials />
    </div>
  );
};

export default HomePage;
