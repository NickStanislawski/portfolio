import { Colors } from "../Utilities/theme";
import { projects } from "../Entities/projects";
// import { labs } from "../Entities/labs";
import { Footer } from "../Components/footer";
import { Contact } from "../Components/contact";
import { HTBWriteups } from "../Components/HTBWriteups";
// import { CVEWriteups } from "../Components/CVEWriteups";
import Certifications from "../Components/Certifications";
import { Education } from "../Components/Education";
import { Skills } from "../Components/Skills";
import { Hero } from "../Components/Hero";
import { CardGrid } from "../Components/CardGrid";
import NavBar from "../Components/NavBar";

const App = () => {

  return (
    <div
      style={{
        fontFamily: "'Inter','Segoe UI',sans-serif",
        background: Colors.white,
        color: Colors.gray800,
      }}
    >
      <NavBar />
      <Hero />
      <CardGrid
        data={projects}
        label="// personal work"
        title="Projects"
        id="projects"
        style={"section"}
      />
      <Education style={"sectionAlt"}/>
      <Certifications style={"section"} />
      <Skills style={"sectionAlt"}/>
      
      {/* <CardGrid
        data={labs}
        label="// hands-on"
        title="Labs"
        id="labs"
        style={"sectionAlt"}
      /> */}
      {/* <CVEWriteups style={"section"}/> */}
      <HTBWriteups style={"section"} />
      <Contact style={"sectionAlt"}/>
      <Footer />
    </div>
  );
};

export default App;
