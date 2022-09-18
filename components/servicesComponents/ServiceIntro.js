import Image from "next/image";
import { GiCheckMark } from "react-icons/gi";
import classes from "./serviceIntro.module.css";

function ServiceIntro(props) {
  return (
    <div>
      <div className={classes.headerWrapper}>
        <h1 className={classes.heading}>{props.headingImage.heading}</h1>
      </div>

      <div className="row">
        <div className="col-md-8">
          <Image
            src={props.headingImage.image}
            height={500}
            width={1200}
            alt=""
          />
        </div>
        <div className="col-md-4">
          <div className={classes.captionWrapper}>
            <div className={classes.caption}>
              <div className="mt-5 mx-4 d-flex flex-row ">
                <GiCheckMark color="green" size={30} />
                <h2 className="mx-4"> Installation</h2>
              </div>
              <div className="mt-5 mx-4 d-flex flex-row ">
                <GiCheckMark color="green" size={30} />
                <h2 className="mx-4">Deep Cleaning</h2>
              </div>
              <div className="mt-5 mx-4 d-flex flex-row ">
                <GiCheckMark color="green" size={30} />
                <h2 className="mx-4"> Repair</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceIntro;
