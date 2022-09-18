import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Article from "./Article";
import { descriptionData, imagePath } from "../../utils/serviceDescription";

function ArticleMain() {
  const [articleData, setArticleData] = useState();  //store the article and update with query
  const [headImage, setHeadImage] = useState(); //image path and heading
  const [isArticleReady, setIsArticleReady] = useState(false);  //check if article is loaded

  const router = useRouter();
  const path = router.query;

  //Update article data as per query
  useEffect(() => {
    if (router.isReady) {
      if (path.services == "Chimney Service") {
        setArticleData(descriptionData.chimney_service);
        setHeadImage({
          heading: "Chimney Service",
          image: imagePath.img1
        })
      }
      if (path.services == "Oven Service") {
        setArticleData(descriptionData.oven_service);
        setHeadImage({
          heading: "Oven Service",
          image: imagePath.img2

        })
      }
      if (path.services == "AC Service") {
        setArticleData(descriptionData.ac_service);
        setHeadImage({
          heading: "AC Service",
          image: imagePath.img3

        })
      }
      if (path.services == "HOB Repair and Service") {
        setArticleData(descriptionData.hob_service)
        setHeadImage({
          heading: "HOB Repair and Service",
          image: imagePath.img4

        })
      }
      if (path.services == "Washing Machine Service") {
        setArticleData(descriptionData.washing_service)
        setHeadImage({
          heading: "Washing Machine Service",
          image: imagePath.img5

        })

      }
      if (path.services == "Fridge Repair Service") {
        setArticleData(descriptionData.fridge_service)
        setHeadImage({
          heading: "Fridge Repair Service",
          image: imagePath.img6

        })
      }

      setIsArticleReady(true);
    }
  }, [path.services, router.isReady]);

  const Loading = (
    <div>
      <h1>Loading...</h1>
    </div>
  );

  return <div>{isArticleReady ? <Article data={articleData} headingImage={headImage}/> : Loading}</div>;
}

export default ArticleMain;
