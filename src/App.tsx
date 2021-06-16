import { Container, Paper } from "@material-ui/core";
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
        <Paper variant="outlined" style={{ textAlign: "center" }}>
          <Paper>
            <Navbar />
            <Container>
              <Switch>
                <Route path="/">
                  <Projects />
                </Route>
              </Switch>
            </Container>
          </Paper>
        </Paper>
      </ThemeProvider>
    </Router>
  );
};

export default App;
