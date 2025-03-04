import Heading from "../../heading/Heading";
import TechList from "./TechLists";

const Tech = () => {
  return (
    <div className="  mt-24" id="tech">
      <div>
        <Heading>Technology</Heading>
      </div>
      <div className="max-w-[700px] mx-auto ">
        <TechList />
      </div>
    </div>
  );
};

export default Tech;
