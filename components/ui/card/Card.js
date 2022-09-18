import Image from 'next/image';
import classes from './card.module.css';

function Card(props) {
  return (
    <>
      <div className={classes.card}>
         <Image src={`/images/${props.imgName}.png`} width={300} height={200} alt='sr services'/>
         <p className='mt-4'>{props.title}</p>
      </div>
    </>
  )
}

export default Card