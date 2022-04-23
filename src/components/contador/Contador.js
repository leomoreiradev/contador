import { useState } from "react";
import "./Contador.css";
export const Contador = () => {
  const [numero, setNumero] = useState(0);
  let numeroCrescente = numero + 1;
  let numeroDecrescente = numero - 1;

  if (numeroDecrescente === -1) {
    numeroDecrescente = 0;
  }
  return (
    <div>
      <div>
        <div className="painel">{numero}</div>
        <div className="box-button">
          <button onClick={() => setNumero(numeroDecrescente)}>-</button>
          <button onClick={() => setNumero(numeroCrescente)}>+</button>
        </div>
      </div>
    </div>
  );
};
