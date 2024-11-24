import React from "react";
import styles from "./botaoCompra.module.css";

function BotaoCompra({ total }) {
  return (
    <button className={styles.botao}>
      Comprar
      <span className={styles.preco}>R$ {total.toFixed(2)}</span>
    </button>
  );
}

export default BotaoCompra;
