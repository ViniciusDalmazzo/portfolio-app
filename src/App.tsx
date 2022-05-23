import GlobalContainer from "./Components/GlobalContainer";
import Header from "./Components/Header";
import AboutMe from "./Pages/AboutMe";
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

      <GlobalStyles />
    </>
  );
}

export default App;
