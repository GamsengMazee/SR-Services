import Image from "next/image";
import classes from './style.module.css'

function TestimonialsCard(props) {
  return (
    <div className={classes.container}>
      <div className={classes.imageWrapper}>
        <Image
          className={classes.image}
          src={`/images/${props.imageLink}`}
          width={100}
          height={100}
          alt="sr service"
        />
      </div>
      <p className={classes.text}>{props.text}</p>
      <p className={classes.name}>- {props.name}</p>
    </div>
  );
}

export default TestimonialsCard;
