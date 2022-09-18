
import ArticleMain from "../../components/servicesComponents/ArticleMain";
import ServiceLocation from "../../components/serviceLocation/ServiceLocation";
function index() {
  return (
    <div>
      <div className="container mt-90">
        {/* Article content*/}
        <ArticleMain />

        {/* Service Location address*/}
        <ServiceLocation />
      </div>
    </div>
  );
}

export default index;
