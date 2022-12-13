import Banner from "../components/banner/Banner";
import BrandLogo from "../components/section/BrandLogo";
import Section2 from "../components/section/Section2";
import Services from "../components/section/Services";
import Testimonials from "../components/section/Testimonials";
import Hr from "../components/ui/hr/Hr";
import ContactFixed from "../components/ui/tele/ContactFixed";

export default function Home() {
  return (
    <div>
      <div className="mainWrapper">
        <Banner />
      </div>
      <Services />
      <div className="mt-5"/>
      <Hr />
      <div className="mt-5"></div>
      <Section2 />
      <div className="mt-5"></div>
      <Hr />
      <Testimonials />
      <BrandLogo />
      <ContactFixed />
    </div>
  );
}
