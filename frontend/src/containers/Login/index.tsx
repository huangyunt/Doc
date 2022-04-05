import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import {
  createTheme,
  ThemeProvider,
} from "@mui/material/styles";
import PasswordText from "./components/PasswordText/PasswordText";
import AccountText from "./components/AccountText/AccountText";
import { authenAccount } from "../../utils/api";
import { createFromIconfontCN } from "@ant-design/icons";
import "./index.css";

const LoginIcon = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_3303310_jzl7g2hidn.js",
});

const theme = createTheme();

export default function Login() {
  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const textData =
      `account=${data.get("email")}` +
      "&" +
      `password=${data.get("password")}`;
    const res = await authenAccount(textData);
    console.log(res);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        maxWidth="xs"
        style={{ paddingTop: 80 }}
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <LoginIcon
            type="icon-a-huaban2fuben15"
            className="login-svg"
          />
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              mt: 1,
              border: "1px solid hsla(210,18%,87%,1);",
              padding: "40px",
              borderRadius: "6px",
            }}
          >
            <AccountText />
            <PasswordText />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item>
                <Link
                  to="/register"
                  style={{
                    textDecoration: "none",
                    color: "#0969da",
                  }}
                >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
