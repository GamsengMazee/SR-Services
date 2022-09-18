import { locationData as address } from "../../utils/locationData";
import classes from "./location.module.css";

function ServiceLocation() {
  return (
    <div className="container-fluid mt-5 mb-5">
      <h1 className={classes.header}>Across Jaipur:</h1>
      <div className="row">
        <div className="col-md-8">
          <div className="d-flex justify-content-around">
            {/*Column-1*/}
            <ul className={classes.listItems}>
              {address.a1.map((addressData, index) => {
                return <li key={index}>{addressData}</li>;
              })}
            </ul>
            {/*Column-2*/}
            <ul className={classes.listItems}>
              {address.a2.map((addressData, index) => {
                return <li key={index}>{addressData}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className="col-md-4 d-flex">
          {/*Column-3*/}
          <ul className={classes.listItems}>
            {address.a3.map((addressData, index) => {
              return <li key={index}>{addressData}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ServiceLocation;
