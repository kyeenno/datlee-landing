import Hero from "@/components/sections/Hero";
import FeaturesBrief from "@/components/sections/FeaturesBrief";
// import Features from "@/components/sections/Features";
import UserFlow from "@/components/sections/UserFlow";
import Team from "@/components/sections/Team";
import Pricing from "@/components/sections/Pricing";
import Newsletter from "@/components/sections/Newsletter";
// import Connections from "@/components/sections/Connections";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Connections /> */}
      <FeaturesBrief />
      {/* <Features /> */}
      <UserFlow />
      <Team />
      <Pricing />
      <Newsletter />
    </>
  );
}
