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
Para realizar a construção do nosso projeto, utilizamos dois componentes, um para o assento e outro para o botão de compra
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
No arquivo page construimos a tela desta forma
``` tsx
export default function HomePage() {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    document.body.classList.toggle("dark", prefersDark);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleThemeChange = (e: MediaQueryListEvent) => {
      document.body.classList.toggle("dark", e.matches);
    };

    mediaQuery.addEventListener("change", handleThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleThemeChange);
    };
  }, []);

  const handleSelect = (isSelected) => {
    setTotal((prev) => (isSelected ? prev + filme.preco : prev - filme.preco));
  };
  const handleCompra = () => {
    if (total > 0) {
      alert("Compra realizada com sucesso!");
    } else {
      alert("Nenhum assento selecionado.");
    }
  };

  return (
    <main className="container">
      <h1 className="title">{filme.titulo}</h1>
      <h2 className="subtitulo">{filme.horario}</h2>
      <article>
        <section className="lugaresGrid">
          {filme.lugares.map((lugar) => (
            <Lugar
              key={lugar.id}
              reservado={lugar.reservado}
              onSelect={handleSelect}
            />
          ))}
        </section>
        <section className="info">
          <h5>sinopse do filme</h5>
          <p>{filme.sinopse}</p>
          <h5>data de lançamento</h5>
          <p>{filme.dataLancamento}</p>
          <h5>Direção</h5>
          <p>{filme.direcao}</p>
        </section>
      </article>
      <h6>tela</h6>
      <div className="tela"></div>
      <div className="legenda">
        <ul>
          <li>
            <span className="assento-livre"></span>livre
          </li>
          <li>
            <span className="assento-indisponivel"></span>indisponível
          </li>
          <li>
            <span className="assento-selecionado"></span>selecionado
          </li>
        </ul>
      </div>
      <BotaoCompra total={total} confirmarCompra={handleCompra} />
    </main>
  );
}
```

## 📎 Créditos
- Desenvolvido por [Mariana Chiorboli - 10435657](https://github.com/MarianaChiorboli).
- Desenvolvido por [Thiago Kauã - 10420686](https://github.com/ThiagoKauaPestana).
- Desenvolvido por [Murilo Franciscon Miotto - 10438787](https://github.com/seu-usuario).
