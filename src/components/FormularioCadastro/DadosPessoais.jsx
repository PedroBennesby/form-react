import React, { useState, useContext } from "react";
import { Button, FormControlLabel, Switch, TextField } from "@material-ui/core";
import validacoesCadastro from "../../contexts/validacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosPessoais({ aoEnviar }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const validacoes = useContext(validacoesCadastro);

  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (possoEnviar()) {
            aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
          }
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
          required
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
          required
        />
        <TextField
          value={cpf}
          onChange={(event) => {
            setCpf(event.target.value);
          }}
          onBlur={validarCampos}
          name="cpf"
          error={!erros.cpf.valido}
          helperText={erros.cpf.texto}
          id="CPF"
          label="CPF"
          variant="outlined"
          margin="normal"
          fullWidth
          required
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
          Próximo
        </Button>
      </form>
    </div>
  );
}

export default DadosPessoais;
