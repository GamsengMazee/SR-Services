import { ImHome3 } from "react-icons/im";
import { GrMail } from "react-icons/gr";
import { BsTelephoneFill } from "react-icons/bs";
import { contactData } from "../../utils/contactData";
import Image from "next/image";
import Link from "next/link";
import classes from "./footer.module.css";

function Footer() {
  return (
    <div>
      <div className={classes.container}>
        {/*----Footer---*/}
        <footer
          className="text-center text-lg-start text-white"
          style={{ backgroundColor: "#030836" }}
        >
          {/*-- Grid container --*/}
          <div className="container p-4 pb-0">
            {/*--Section: Links --*/}
            <section className="">
              <div className="row">
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <div className="mb-4" />
                  <Image
                    className={classes.stampImg}
                    src="/images/stamp.png"
                    width={170}
                    height={150}
                    alt="100% customer satisfaction"
                  />
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className={classes.header}>Services</h6>
                  <p>
                    <Link href="/Chimney Service">
                      <a className={classes.serviceList}>Chimney Service</a>
                    </Link>
                  </p>
                  <p>
                    <Link href="/AC Service">
                      <a className={classes.serviceList}>AC Service</a>
                    </Link>
                  </p>
                  <p>
                    <Link href="/HOB Repair and Service">
                      <a className={classes.serviceList}>
                        HOB Repair And Service
                      </a>
                    </Link>
                  </p>
                  <p>
                    <Link href="/Fridge Repair Service">
                      <a className={classes.serviceList}>
                        Fridge Repair Service
                      </a>
                    </Link>
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className={classes.header}>Useful links</h6>
                  <p>
                    <a className={classes.importantLink}>My Account</a>
                  </p>
                  <p>
                    <a className={classes.importantLink}>Affiliate</a>
                  </p>
                  <p>
                    <a className={classes.importantLink}>FAQ</a>
                  </p>
                  <p>
                    <a className={classes.importantLink}>Help</a>
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className={classes.header}>Contact</h6>
                  <p>
                    <ImHome3 /> Pratap Nagar, Jaipur
                  </p>
                  <p>
                    <GrMail /> info@gmail.com
                  </p>
                  <p>
                    <BsTelephoneFill /> +{contactData.phoneNumber}
                  </p>
                </div>
              </div>
            </section>

            <hr className="my-3" />

            {/*-- Section: Copyright --*/}
            <section className="p-3 pt-0">
              <div className="row d-flex align-items-center">
                <div className="col-md-7 col-lg-8 text-center text-md-start">
                  <div className="p-3">
                    © 2022 SR Service:
                    <a className="text-white" href="#">
                      All Rights Reserved
                    </a>
                  </div>
                </div>

                <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                  <a
                    className="btn btn-outline-light btn-floating m-1 text-white"
                    role="button"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>

                  <a
                    className="btn btn-outline-light btn-floating m-1 text-white "
                    role="button"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>

                  <a
                    className="btn btn-outline-light btn-floating m-1 text-white"
                    role="button"
                  >
                    <i className="fab fa-google"></i>
                  </a>

                  <a
                    className="btn btn-outline-light btn-floating m-1 text-white"
                    role="button"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
                {/**-- Grid column --*/}
              </div>
            </section>
            {/*-- Section: Copyright --*/}
          </div>
          {/*-- Grid container --*/}
        </footer>
        {/*-- Footer --*/}
      </div>
    </div>
  );
}

export default Footer;
