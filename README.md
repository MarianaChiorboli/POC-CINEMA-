# 🎥 Projeto Cinema

## 📰 Descrição
Este projeto consiste em uma simulação de um aplicativo de cinema, permitindo que os usuários escolham seus assentos de forma interativa.

## 🚀 Tecnologias utilizadas
- React NextJS
- CSS

## 💻 Demonstração
## Modo Claro
![Tela PC Modo Claro](https://github.com/user-attachments/assets/69214e6e-ea4e-4f58-a821-5655fd2466fe)
## Modo Escuro
![Tela PC Modo escuro](https://github.com/user-attachments/assets/804d5003-d186-46d5-aac9-c8aab687765a)

## Metodologia
Para realizar a construção do nosso projeto, utilizamos 2 componentes, um para o assento e outro para o botão de compra
Cada um com seu modulo CSS

Botão de Compra
``` jsx
import React from "react";
import styles from "./botaoCompra.module.css";

function BotaoCompra({ total, confirmarCompra }) {
  const handleClick = () => {
    alert("Compra realizada com sucesso!");
  };
  return (
    <button className={styles.botao} onClick={confirmarCompra}>
      Comprar
      <span className={styles.preco}>R$ {total.toFixed(2)}</span>
    </button>
  );
}

export default BotaoCompra;
```

Assento (Lugar)
``` jsx
import React, { useState } from "react";
import styles from "./Lugar.module.css";

function Lugar({ reservado, onSelect }) {
  const [selecionado, setSelecionado] = useState(false);

  const reservarAssento = () => {
    if (!reservado) {
      const novoEstado = !selecionado;
      setSelecionado(!selecionado);
      onSelect(novoEstado);
    }
  };

  return (
    <div
      className={`${styles.lugar} ${
        reservado ? styles.reservado : selecionado ? styles.selecionado : ""
      }`}
      onClick={reservarAssento}
    />
  );
}

export default Lugar;
```



## 📎 Créditos
- Desenvolvido por [Mariana Chiorboli - 10435657](https://github.com/MarianaChiorboli).
- Desenvolvido por [Thiago Kauã - 10420686](https://github.com/ThiagoKauaPestana).
- Desenvolvido por [Murilo Franciscon Miotto - 10438787](https://github.com/seu-usuario).
