import Hero from "@/components/sections/hero/Hero";
import FeaturesBrief from "@/components/sections/features/FeaturesBrief";
import UserFlow from "@/components/sections/user-flow/UserFlow";
import Team from "@/components/sections/team/Team";
// import Pricing from "@/components/sections/pricing/Pricing";
import Newsletter from "@/components/sections/newsletter/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesBrief />
      <UserFlow />
      <Team />
      {/* <Pricing /> */}
      <Newsletter />
    </>
  );
}
