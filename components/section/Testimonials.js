import { Carousel } from "react-responsive-carousel";
import classes from "./Testimonials.module.css";
import TestimonialsCard from "../ui/TestimonialsCard/TestimonialsCard";
import { testimonialData } from "../../utils/testimonialsText";

const data = testimonialData;

function Testimonials() {
  return (
    <div className={classes.testimonials}>
      <div>
        <h1 className={classes.header}>
          Testimonials
        </h1>
      </div>
      <Carousel
        className="mt-5"
        showArrows={true}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
        autoPlay={true}
        interval={10000}
      >
        <TestimonialsCard imageLink={data.c1.image} text={data.c1.text} name={data.c1.name}/>
        <TestimonialsCard imageLink={data.c2.image} text={data.c2.text} name={data.c2.name}/>
        <TestimonialsCard imageLink={data.c3.image} text={data.c3.text} name={data.c3.name}/>
      </Carousel>
    </div>
  );
}

export default Testimonials;
