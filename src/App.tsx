import "./App.css";
import Header from "./components/organisms/header";
import HeroSection from "./components/organisms/hero-section";
import SelectSkipSection from "./components/organisms/select-skip-section";
import { ThemeProvider } from "./components/provider/theme-provider";
import CenteredContainer from "./components/templates/centered-container";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <CenteredContainer>
        <Header />
        <HeroSection />
        <SelectSkipSection />
      </CenteredContainer>
    </ThemeProvider>
  );
}

export default App;
