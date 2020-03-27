import React, { useState } from "react";
import "./styles.css";

import api from "../../services/api";

import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";

export default function Register() {
    const history= useHistory()


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [city, setCity] = useState('')
  const [uf, setUf] = useState('')

 async function handleRegister(e) {
      e.preventDefault();


        const data = {
        name, 
        whatsapp,
        email,
        city,
        uf
         }
         try{
            const response = await api.post('ongs', data)
            alert(`Seu ID é ${response.data.id}`)


            history.push('/')
            
         } catch(err){
             alert('Erro no cadastro, tente novamente')
         }
        
         
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
            placeholder="Nome da ONG"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="email"
            value={email}
            placeholder="E-mail"
            onChange={e => setEmail(e.target.value)}
          />
          <input
            value={whatsapp}
            placeholder="Whatsapp"
            onChange={e => setWhatsapp(e.target.value)}
          />

          <div className="input-group">
            <input
              value={city}
              placeholder="Cidade"
              onChange={e => setCity(e.target.value)}
            />

            <input
              name="Uf"
              value={uf}
              placeholder="UF"
              style={{ width: 80 }}
              onChange={e => setUf(e.target.value)}
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
