import AppProvider from "./providers/povider";
import Navbar from "./components/ui/Navbar";
import HomePage from "./components/pages/HomePage";

function App() {
  return (
    <AppProvider>
      <Navbar />
      <HomePage />
    </AppProvider>
  );
}
export default App;
