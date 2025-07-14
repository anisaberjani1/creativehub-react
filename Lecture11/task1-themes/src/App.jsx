import Layout from "./components/Layout";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

const AppWrapper = () => {
  const { theme } = useTheme();
  return (
    <div
      className={
        theme === "light"
          ? "bg-white text-black min-h-screen"
          : "bg-black text-white min-h-screen"
      }
    >
      <Layout />
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppWrapper />
    </ThemeProvider>
  );
};

export default App;
