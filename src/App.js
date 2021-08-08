import { Container, Typography } from "@material-ui/core";
import "@fontsource/roboto";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { validarSenha, validarCpf } from "./models/cadastro";
import validacoesCadastro from "./contexts/validacoesCadastro";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" align="center" component="h1">
        Formulário Cadastro
      </Typography>
      <validacoesCadastro.Provider
        value={{ cpf: validarCpf, senha: validarSenha }}
      >
        <FormularioCadastro aoEnviar={aoEnviarForm} />
      </validacoesCadastro.Provider>
    </Container>
  );
}

function aoEnviarForm(data) {
  console.log(data);
}

export default App;
