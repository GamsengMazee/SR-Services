//sticky call button

import classes from "./style.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import { contactData } from "../../../utils/contactData";

function ContactFixed() {
  return (
    <div className={classes.container}>
    {/*Whatsapp*/}
      <a
        className="d-flex justify-content-center align-items-center"
        href={`https://wa.me/${contactData.phoneNumber}`}
      >
        <div className={classes.iconWhatsapp}>
          <ImWhatsapp size={30} color={"#fff"} />
        </div>
      </a>
      {/*Phone*/}
      <a
        className="d-flex justify-content-center align-items-center mt-3"
        href={`tel:+ ${contactData.phoneNumber}`}
      >
        <div className={classes.iconPhone}>
          <FaPhoneAlt size={30} color={"#fff"} />
        </div>
      </a>
    </div>
  );
}

export default ContactFixed;
