import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import LoginRegisterBox from "../components/LoginRegisterBox";
import { useNavigate } from "react-router-dom";
import { register } from "../utils/api/api";

const RegisterPage = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [balance, setBalance] = React.useState(0);
  const [totalIncome, setTotalIncome] = React.useState(0);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();

  const handleAuth = async () => {
    try {
      setIsLoading(true);
      const response = await register(
        name,
        email,
        password,
        balance,
        totalIncome
      );
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
      <LoginRegisterBox gap={10}>
        <Box
          sx={{
            padding: 5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: 1,
            flex: "1 1 50%",
          }}
        >
          <Typography variant="h4" fontWeight="bold">
            CuidaFinanças
          </Typography>
          <Typography variant="body2">
            Controle suas finanças com facilidade!
          </Typography>

          <TextField
            label="Nome"
            variant="outlined"
            margin="normal"
            size="small"
            onChange={(e) => setName(e.target.value)}
          />
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
          <TextField
            label="Saldo"
            variant="outlined"
            margin="normal"
            size="small"
            type="number"
            onChange={(e) => setBalance(Number(e.target.value))}
          />
          <TextField
            label="Renda Total"
            variant="outlined"
            margin="normal"
            size="small"
            type="number"
            onChange={(e) => setTotalIncome(Number(e.target.value))}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleAuth}
            disabled={isLoading}
          >
            Registrar
          </Button>
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

export default RegisterPage;
