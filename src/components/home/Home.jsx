import { About, Banner, Projects } from "../";
import Contact from "./Contact/Contact";
import Tech from "./teckStack/Tech";

function Home() {
  return (
    <div>
      <Banner />
      <Projects />
      <About />
      <Tech />
      <Contact />
    </div>
  );
}

export default Home;
