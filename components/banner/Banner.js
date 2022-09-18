import Image from "next/image";
import classes from "./banner.module.css";
import { FiPhoneCall } from "react-icons/fi";
import { contactData } from "../../utils/contactData";

function Banner() {
  return (
    <div className={classes.banner}>
    <div className="container p-5">
      <div className="row align-items-center justify-content-center">
        <div className="col-sm-12 col-md-6">
          <div className={classes.bannerImage}>
            <Image
              src="/images/img2.jpg"
              width={700}
              height={600}
              alt="ss service"
            />
          </div>
        </div>
        <div className="col-sm-12 col-md-6 ">
          <div className={classes.bannerText}>
            <h1>All <span className={classes.txtColor}>Home Appliances Service</span> & Repairing Solutions.</h1>
            <p>A House of complete repair and solutions at Jaipur.</p>
            <div className={classes.btnContainer}>
            <a
              className="d-flex justify-content-center align-items-center"
              href={`tel:+${contactData.phoneNumber}`}
            >
              <FiPhoneCall className="" />
              Book a Service
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Banner