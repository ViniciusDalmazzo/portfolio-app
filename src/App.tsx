import Footer from "./Components/Footer";
import GlobalContainer from "./Components/GlobalContainer";
import Header from "./Components/Header";
import AboutMe from "./Pages/AboutMe";
import Experience from "./Pages/Experience";
import Home from "./Pages/Home";
import { COLORS, GlobalStyles } from "./styles/GlobalStyles";

function App() {
    return (
    <>
      <GlobalContainer color={COLORS.dark}>
        <Header />
      </GlobalContainer>


      <GlobalContainer color={COLORS.dark}>
        <Home />
      </GlobalContainer>
      <GlobalContainer color={COLORS.dark200}>
        <AboutMe />
      </GlobalContainer>
      <GlobalContainer color={COLORS.dark}>
        <Experience />
      </GlobalContainer>

      <GlobalContainer color={COLORS.dark}>
      <Footer />
      </GlobalContainer>

      <GlobalStyles />
    </>
  );
}

export default App;
