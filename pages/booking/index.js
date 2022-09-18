import classes from "./style.module.css";

function booking() {
  return (
    <div>
      <div className="mainWrapper">
        <div className={classes.header}>
          <h1>Book a Service</h1>
        </div>
      </div>
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <div className={classes.formContainer}>
          <h1 className="text-center">Enter Details for booking</h1>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 font1 inputSize">
                <form>
                  <div className="form-group">
                    <label>Name:</label>
                    <input
                      type="text"
                      className="form-control shadow-none"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone No.</label>
                    <input
                      type="number"
                      className="form-control shadow-none"
                      placeholder="Phone No."
                    />
                  </div>
                  <div className="form-group">
                    <label>Address:</label>
                    <input
                      type="text"
                      className="form-control shadow-none"
                      placeholder="Address"
                    />
                  </div>
                  <div className="form-group">
                    <label>Type of service:</label>
                    <select
                      className="form-control"
                      id="exampleFormControlSelect1"
                    >
                      <option>Select</option>
                      <option>Chimney Service & Repair</option>
                      <option>AC Service</option>
                      <option>HOB Service & Repair</option>
                      <option>Washing Machine Repair</option>
                      <option>Fridge Repair</option>
                      <option>Others</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Message:</label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="5"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary font1">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default booking;
