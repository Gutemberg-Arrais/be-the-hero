import React, { useState } from "react";
import "./styles.css";

import api from "../../services/api";

import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    city: "",
    state: ""
  });

  function handleRegister(e) {
    e.preventDefault();
    console.log(form);
  }

  function handleChangeForm({ target }) {
    const newForm = { ...form };
    newForm[target.name] = target.value;
    setForm(newForm);
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude as pessoas a
            encontrarem os casos da sua ONG.
          </p>
          <Link className="back-link" to="/">
            <FiArrowLeft sice={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input
            name="name"
            placeholder="Nome da ONG"
            onChange={handleChangeForm}
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            onChange={handleChangeForm}
          />
          <input
            name="number"
            placeholder="Whatsapp"
            onChange={handleChangeForm}
          />

          <div className="input-group">
            <input
              name="city"
              placeholder="Cidade"
              onChange={handleChangeForm}
            />

            <input
              name="state"
              placeholder="UF"
              style={{ width: 80 }}
              onChange={handleChangeForm}
            />
          </div>
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
