import { Container } from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";

const App = () => {
  const theme = createMuiTheme({
    palette: {
      primary: blue,
      type: "dark",
    },
  });

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div style={{ textAlign: "center" }}>
          <Navbar />
          <Container>
            <Switch>
              <Route path="/">
                <Projects />
              </Route>
            </Switch>
          </Container>
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;
