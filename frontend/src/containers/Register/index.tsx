import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createAccount } from "../../utils/api";
import { createFromIconfontCN } from "@ant-design/icons";
import "./index.css";
import { useState } from "react";
import { RegisterCode } from "../../status-code";

const RegisterIcon = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_3303310_jzl7g2hidn.js",
});

const theme = createTheme();

export default function Register() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // 判断两次输入密码是否一致
    if (password !== confirmPassword) {
      alert("两次输入密码不一致");
    } else {
      const data = new FormData(event.currentTarget);
      const textData =
        `account=${data.get("email")}` +
        "&" +
        `password=${data.get("password")}`;
      // 调用createAccount api 发送请求
      const res = await createAccount(textData);
      if (res.code === RegisterCode.Existed) {
        alert("用户名已存在");
      } else {
        alert("注册成功");
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" style={{ paddingTop: 80 }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <RegisterIcon type="icon-a-huaban2fuben14" className="register-svg" />
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{
              mt: 3,
              border: "1px solid hsla(210,18%,87%,1);",
              padding: "40px",
              borderRadius: "6px",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="comfirm-password"
                  label="Comfirm password"
                  type="comfirm-password"
                  id="comfirm-password"
                  autoComplete="comfirm-password"
                  onChange={(event) => setConfirmPassword(event.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link
                  to="/login"
                  style={{
                    textDecoration: "none",
                    color: "#0969da",
                  }}
                >
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
