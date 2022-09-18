import ServiceIntro from "./ServiceIntro";
import classes from './article.module.css';

function Article(props) {
    const articleData = props.data;
  return (
    <div>
    <ServiceIntro headingImage={props.headingImage}/>
      <div className={classes.container}>
         <h1 className={classes.title}>{articleData.title}</h1>
         <div className={classes.articleWrapper}>
           <p className={classes.description}><span className={classes.paragraphSpacer}></span>{articleData.description}</p>
           <h1 className={classes.title}>Steps or process:</h1>
           <ul className={classes.steps}>
           {articleData.steps.map((steps, index) =>{
               return(
                  <li className="mt-2" key={index}>{steps}</li>
               )
           })}
           </ul>
         </div>
      </div>
    </div>
  )
}

export default Article