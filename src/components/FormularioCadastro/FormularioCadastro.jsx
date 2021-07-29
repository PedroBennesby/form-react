import React, { useState } from "react";
import { Button, FormControlLabel, Switch, TextField } from "@material-ui/core";

function FormularioCadastro({ onSubmit, validarCpf }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } });

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit({ nome, sobrenome, cpf, promocoes, novidades });
        }}
      >
        <TextField
          value={nome}
          onChange={(event) => {
            setNome(event.target.value);
          }}
          id="nome"
          label="Nome"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          value={sobrenome}
          onChange={(event) => {
            setSobrenome(event.target.value);
          }}
          id="sobrenome"
          label="Sobrenome"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          value={cpf}
          onChange={(event) => {
            setCpf(event.target.value);
          }}
          onBlur={(event) => {
            const ehValido = validarCpf(cpf);
            setErros({
              cpf: ehValido,
            });
          }}
          error={!erros.cpf.valido}
          helperText={erros.cpf.texto}
          id="cpf"
          label="CPF"
          variant="outlined"
          fullWidth
          margin="normal"
        />

        <FormControlLabel
          label="Promoções"
          control={
            <Switch
              checked={promocoes}
              onChange={(event) => {
                setPromocoes(event.target.checked);
              }}
              name="Promoções"
              color="primary"
            />
          }
        />

        <FormControlLabel
          label="Novidades"
          control={
            <Switch
              checked={novidades}
              onChange={(event) => {
                setNovidades(event.target.checked);
              }}
              name="Novidades"
              color="primary"
            />
          }
        />

        <Button type="submit" variant="contained" color="primary">
          Cadastrar
        </Button>
      </form>
    </div>
  );
}

export default FormularioCadastro;
