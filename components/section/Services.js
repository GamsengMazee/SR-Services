import Card from "../ui/card/Card";
import classes from './services.module.css';

function Services() {
  return (
    <div>
      <section id="content" className="content">
        <div className="mb-5">
           <h1 className={classes.header}>Our Services</h1>
           <p className={classes.info}>We Provide All Types Of Home Appliances Services & Repairing In Jaipur.</p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Card imgName='img4' title='Chimney Service & repair'/>
            </div>
            <div className="col-md-4">
            <Card imgName='img5'title="HOB Service & Repair"/>
            </div>
            <div className="col-md-4">
               <Card imgName='img6'title="Washing Machine Repair"/>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-4">
              <Card imgName='img7' title="Fridge Repair"/>
            </div>
            <div className="col-md-4">
            <Card imgName='img8' title="Electric Work"/>
            </div>
            <div className="col-md-4">
               <Card imgName='img9' title="Microwave"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;





