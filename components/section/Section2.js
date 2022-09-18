import { FaRupeeSign } from "react-icons/fa";
import { GiGears } from "react-icons/gi";
import Image from "next/image";
import classes from './section2.module.css';

function Section2() {
  return (
    <div className={classes.section2}>
      <div>
        <h1 className={classes.headerText}>Why us?</h1>
        <p className={classes.info}>___Quality service is our priority___</p>
      </div>
      <div className={classes.container}>
        <div className="row d-flex justify-content-around align-items-center w-100">
          <div className="col-md-4 mt-4  d-flex justify-content-around align-items-center flex-column">
            <FaRupeeSign  size={60} color='#fcad35'/>
            <h2 className={classes.title}>Affordable</h2>
            <p className={classes.detail}>
              We Provide all types Of Home Servicing And Repairing at
              Best/Affordable Prices.
            </p>
          </div>
          <div className="col-md-4 mt-4 d-flex justify-content-around align-items-center flex-column">
            <Image
              src="/images/24-7.png"
              width={70}
              height={60}
              alt="sr service 24x7"
            />
            <h2 className={classes.title}>Reach us Anytime</h2>
            <p className={classes.detail}> 24*7  Servicing  At Your Door Step.</p>
          </div>
          <div className="col-md-4 mt-5  d-flex justify-content-around align-items-center flex-column">
            <GiGears size={60} color="#054c"/>
            <h2 className={classes.title}>Professionals</h2>
            <p className={classes.detail}>
              All our technicians are educated and well mannered . We have the best
              Technicians.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
