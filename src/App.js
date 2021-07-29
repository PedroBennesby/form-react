import { Container, Typography } from "@material-ui/core";
import "@fontsource/roboto";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" align="center" component="h1">
        Formulário Cadastro
      </Typography>
      <FormularioCadastro onSubmit={handleSubmit} validarCpf={validarCpf} />
    </Container>
  );
}

function handleSubmit(data) {
  console.log(data);
  alert("Obrigado por se cadastrar!");
}

function validarCpf(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: "CPF deve ter 11 dígitos" };
  } else {
    return { valido: true, texto: "" };
  }
}

export default App;
