import { About, Banner, Projects } from "../";
import Contact from "./Contact/Contact";

function Home() {
  return (
    <div>
      <Banner />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
