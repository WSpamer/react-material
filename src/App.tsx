import blue from "@material-ui/core/colors/blue";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Projects from "./pages/Projects";
import ProjectStatus from "./pages/ProjectStatus";

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
        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route exact path="/">
            <ProjectStatus />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

export default App;
