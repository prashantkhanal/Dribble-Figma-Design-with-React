import Banner from "./pages/Banner";
import "./App.css";
import Vision from "./pages/Vision";
import { Box } from "@material-ui/core";

function App() {
  return (
    <Box style={{ backgroundColor: "#eee" }}>
      <Banner />
      <Vision />
    </Box>
  );
}

export default App;
