import Image from "next/image";
import classes from "./style.module.css";
function index() {
  return (
    <div>
      <div className="mainWrapper">
        <div className={classes.mainHeader}>
          <h1>About SR Service</h1>
          <p>Quality Service is never compromised</p>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6">
            <Image
              src="/images/img10.jpg"
              width={600}
              height={450}
              alt="sr service"
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
            <h1 className={classes.header}>Our Mission</h1>
            <p className={classes.paragraph}>
              We are one of the best Home Service provider at Jaipur with most
              disciplined and Professional employees.{" "}
            </p>
            <p className={classes.paragraph}>
              Our dream is to provide quality service at a very reasonable
              price. We are a team of hard working professionals and we have
              been serving in this industry for more than 5 years now.{" "}
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
            <h1 className={classes.header}>Dedicated Professionals Since 2017 !</h1>
            <p className={classes.paragraph}>We provide top notch service quality.</p>
            <p className={classes.paragraph}>
              We provide all types of Home Appliances Services and Repairing. We
              deals in all types of brand of appliances.{" "}
            </p>
          </div>
          <div className="col-md-6">
            <Image
              src="/images/about2.png"
              width={600}
              height={450}
              alt="sr service"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
