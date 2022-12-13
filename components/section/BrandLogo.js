import Slider from "react-slick";
import classes from './brandLogo.module.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { brandLogoData as logo } from "../../utils/brandLogoData";
import LogoComponent from "../ui/logo/LogoComponent";

function BrandLogo() {
  let settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 520,
        settings: {
          slidesToShow: 3
        }
      }]
  
  };
  
  return (
    <div className={classes.wrapper}>
    <h1 className={classes.text}>We deals with any <span className={classes.spanText}>BRAND</span></h1>
      <div className={classes.slider}>
      <Slider {...settings}>
        <LogoComponent imgSrc={logo.a1} />
        <LogoComponent imgSrc={logo.a2} />
        <LogoComponent imgSrc={logo.a3} />
        <LogoComponent imgSrc={logo.a4} />
        <LogoComponent imgSrc={logo.a5} />
        <LogoComponent imgSrc={logo.a6} />
        <LogoComponent imgSrc={logo.a7} />
        <LogoComponent imgSrc={logo.a8} />
        <LogoComponent imgSrc={logo.a9} />
        <LogoComponent imgSrc={logo.a10} />
      </Slider>
      </div>
      </div>
    
  );
}

export default BrandLogo;
