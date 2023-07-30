import { BrowserRouter } from "react-router-dom";
import { multiLazy } from "./utils/multiLazy";

const [
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas
] = multiLazy([
  () => import("./components/About"),
  () => import("./components/Contact"),
  () => import("./components/Experience"),
  () => import("./components/Feedbacks"),
  () => import("./components/Hero"),
  () => import("./components/Navbar"),
  () => import("./components/Tech"),
  () => import("./components/Works"),
  () => import("./components/canvas/Stars"),
]);


const App = () => {
  return (
    <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          {/*<Feedbacks />*/}
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
    </BrowserRouter>
  );
};

export default App;
