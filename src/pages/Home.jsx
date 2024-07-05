import Banner from "./Banner";
import Category from "./Category";
import CraftItems from "./CraftItems";
import Reviews from "./Reviews";
import Sale from "./Sale";


const Home = () => {
  return (
    <div className="mt-8 mb-8">
      <Banner></Banner>
      <CraftItems></CraftItems>
      <Category></Category>
      <Sale></Sale>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
