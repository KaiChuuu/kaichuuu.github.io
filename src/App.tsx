import { useState, useEffect } from "react";
import { ReposProvider } from "./context/ReposContext";

import PortfolioPage from "./pages/PortfolioPage";
import AboutMePage from "./pages/AboutMePage";

function App() {
  const [page, setPage] = useState(
    window.location.hash.slice(1) || "portfolio"
  );

  useEffect(() => {
    const onHashChange = () =>
      setPage(window.location.hash.slice(1) || "portfolio");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <ReposProvider>
      {(page === "home" || page.startsWith("portfolio")) && <PortfolioPage />}
      {page === "about" && <AboutMePage />}
    </ReposProvider>
  );
}

export default App;
