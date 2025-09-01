import { useState, useEffect } from "react";
import PortfolioPage from "./pages/PortfolioPage";
import { ReposProvider } from "./context/ReposContext";

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
      {page === "home" && <h1>Home</h1>}
      {page === "about" && <h1>About</h1>}
      {page === "portfolio" && <PortfolioPage />}
    </ReposProvider>
  );
}

export default App;
