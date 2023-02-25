import React, { useState } from 'react'

const Formulario = () => {
  const [username, setUsername] = useState('Insira seu Nome');
  const [email, setEmail] = useState('Digite seu e­mail');
  const [departamento, setDepartamento] = useState('');
  const [mensagem, setMensagem] = useState('Digite aqui a requisição...');

  const [error, setError] = useState('');
  const [disabledBtn, setDisabledBtn] = useState(true);


  const resetDefault = () => {
    setUsername('Insira seu nome');
    setDepartamento('');
    setMensagem('Digite aqui a requisição...');
    setError('');
    setDisabledBtn(true);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    alert('Dados enviados com sucesso!');
    resetDefault();
    document.getElementById('myForm').reset();

  };

  const validateEmail = () => {
    var pattern = new RegExp(/.*@.*\..*/i);
    if (!pattern.test(document.getElementById('emailform').value)) {
      setError('*Entre com um e­mail válido.');
      setDisabledBtn(true);
    } else {
      setError('');
      setDisabledBtn(false);
    }
  };

  return (
    <>
      <form id="myForm" className="form" onSubmit={onSubmit}>
        <div className="inputfield">
          <label htmlFor="nameform"> Nome:</label>
          <br />
          <input
            type="text"
            id="nameform" name="nameform"
            className="input"
            placeholder={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </div>
        <br/><br/>

        <div className="inputfield">
          <label htmlFor="emailform">E-mail:</label>
          <input type="email" name="emailform" id="emailform" placeholder={email}
            onChange={ (e) => {
              validateEmail();
              setEmail(e.target.value);
             }
            }
          />
        </div>

        <div className="inputfield">
          <label htmlFor="selform">Departamento:</label>
            <div className="custom_select">
              <select id="selform" onChange={(e) => setDepartamento(e.target.value)}>
                <option value="">...</option>
                <option value="Financeiro">Financeiro</option>
                <option value="RH">RH</option>
                <option value="TI">TI</option>
              </select>
            </div>
        </div>


        <br /><br/>
        <div className="inputfield">
          <label htmlFor="msgform">Descrição</label>
          <br />
          <textarea
          id="msgform" className="textarea" placeholder={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          ></textarea>
        </div>
        <br /><br />
        <div className="inputfield">
          <button className="btn" type="submit" disabled={disabledBtn}>
            Enviar
          </button>
        </div>
      </form>
    </>
  )
}

export default Formulario
