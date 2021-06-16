import { Container, Paper } from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Header from "./components/Header";
import Projects from "./components/Projects";

const App = () => {
  const theme = createMuiTheme({
    palette: {
      primary: blue,
      type: "dark",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper variant="outlined" style={{ textAlign: "center" }}>
        <Paper>
          <Header />

          <Container>
            <Projects />
          </Container>
        </Paper>
      </Paper>
    </ThemeProvider>
  );
};

export default App;
