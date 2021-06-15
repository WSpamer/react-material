import Header from "./components/Header";
import Projects from "./components/Projects";


import { Container, Paper, Typography } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";

const App = () => {
  const theme = createMuiTheme({
    palette: {
      primary: blue,
      type: "light",
    },
  });

  
  return (
    <ThemeProvider theme={theme}>
      <div style={{ textAlign: "center" }}>
      <Paper>
        <Header />

        <Container >
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            align="center"
            // className="section-header"
          >
            Projects
          </Typography>
          
        <Projects />
        </Container>
      </Paper>
      </div>
    </ThemeProvider>
  );
};

export default App;
