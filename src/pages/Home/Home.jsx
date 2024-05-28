import { Toaster } from "react-hot-toast";
import CalculatorUI from "./CalculatorUI";

const Home = () => {
  return (
    <div className="max-w-lg mx-auto my-10">
      <CalculatorUI />
      <Toaster />
    </div>
  );
};

export default Home;
