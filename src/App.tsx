import AppProvider from "./providers/povider";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import HomePage from "./components/pages/HomePage";

function App() {
  return (
    <AppProvider>
      <Navbar />
      <HomePage />
      <Footer />
    </AppProvider>
  );
}
export default App;
