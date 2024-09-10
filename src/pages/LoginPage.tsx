import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import LoginRegisterBox from "../components/LoginRegisterBox";
import { login } from "../utils/api/api";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();

  const handleAuth = async () => {
    try {
      setIsLoading(true);
      const response = await login(email, password);
      if (response.status !== 200) {
        setErrorMessage(response.data.message);
        throw new Error(response.data.message);
      }
      sessionStorage.setItem("token", response.data.token);
      sessionStorage.setItem("email", email);
      setIsLoading(false);
      navigate("/home");
    } catch (error: any) {
      setErrorMessage(error.message);
      setIsLoading(false);
    }
  };
  return (
    <Box
      sx={{
        display: "grid",
        placeItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <LoginRegisterBox>
        <Typography variant="h4" fontWeight="bold">
          CuidaFinanças
        </Typography>
        <Typography variant="body2">
          Controle suas finanças com facilidade!
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          margin="normal"
          size="small"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Senha"
          variant="outlined"
          type="password"
          margin="normal"
          size="small"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          variant="contained"
          color="primary"
          onClick={handleAuth}
          disabled={isLoading}
        >
          Entrar
        </Button>

        <Box sx={{ display: "flex", flexDirection: "row", gap: 5, ml: 1 }}>
          <Typography
            variant="body2"
            color="primary"
            sx={{ cursor: "pointer" }}
            onClick={handleAuth}
          >
            Registre-se
          </Typography>
          <Typography variant="body2" color="primary">
            Esqueceu a senha?
          </Typography>
        </Box>
        <Alert
          severity="error"
          sx={{ display: errorMessage ? "block" : "none" }}
        >
          {errorMessage}
        </Alert>
      </LoginRegisterBox>
    </Box>
  );
};

export default LoginPage;
