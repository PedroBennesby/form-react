import React from "react";
import { Button, FormControlLabel, Switch, TextField } from "@material-ui/core";

function FormularioCadastro() {
  return (
    <div>
      <form>
        <TextField
          id="nome"
          label="Nome"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          id="sobrenome"
          label="Sobrenome"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          id="cpf"
          label="CPF"
          variant="outlined"
          fullWidth
          margin="normal"
        />

        <FormControlLabel
          label="Promoções"
          control={<Switch name="Promoções" defaultChecked color="primary" />}
        />

        <FormControlLabel
          label="Novidades"
          control={<Switch name="Novidades" defaultChecked color="primary" />}
        />

        <Button type="submit" variant="contained" color="primary">
          Cadastrar
        </Button>
      </form>
    </div>
  );
}

export default FormularioCadastro;
