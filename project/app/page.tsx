import Hero from "@/components/sections/hero/Hero";
import FeaturesBrief from "@/components/sections/FeaturesBrief";
import UserFlow from "@/components/sections/UserFlow";
import Team from "@/components/sections/Team";
import Pricing from "@/components/sections/Pricing";
import Newsletter from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesBrief />
      <UserFlow />
      <Team />
      <Pricing />
      <Newsletter />
    </>
  );
}
