import * as React from 'react';
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function TemperatureConverter() {
  const [degreeC, setDegreeC] = useState("");
  const [degreeF, setDegreeF] = useState("");
  const [show, setShow] = useState();

  function clickHandler() {
    let temp = 0;
    if (degreeC !== "") {
      temp = (parseFloat(degreeC) * 9) / 5 + 32;
      setDegreeF(temp.toFixed(2));
    };
    if (degreeF !== "") {
      temp = (parseFloat(degreeF) - 32) * 5 / 9;
      setDegreeC(temp.toFixed(2));
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <TextField
        onChange={(e) => {
          setDegreeC(e.target.value);
          setDegreeF("");
        }}
        id="outlined-number"
        label="Градус Цельсия"
        type="number"
        variant="outlined"
        value={degreeC}
        style={{ marginBottom: 20 }}
        slotProps={{
          inputLabel: {
            shrink: true,
          },
        }}
      />
      <p> = </p>
      <TextField
        onChange={(e) => {
          setDegreeF(e.target.value);
          setDegreeC("");
        }}
        id="outlined-number"
        label="Градус Фаренгейта"
        type="number"
        variant="outlined"
        value={degreeF}
        style={{ marginBottom: 20 }}
        slotProps={{
          inputLabel: {
            shrink: true,
          },
        }}
      />
      <Button
        onClick={clickHandler}
        variant="contained"
        style={{ marginBottom: 20 }}
      >
        конвертировать
      </Button>
    </div>
  );
}

export default TemperatureConverter;