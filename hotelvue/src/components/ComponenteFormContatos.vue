<template>
    <form class="form-contato">
        <h2>CONTATE-NOS</h2>
        <p class="nome-contato">
            <span>Nome:</span>
            <input
                type="text"
                id="name"
                placeholder="Digite seu nome"
                autofocus
                required
            />
        </p>
        <p class="email-contato">
            <span>E-mail:</span>
            <input
                type="email"
                id="email"
                placeholder="Digite seu e-mail"
                required
            />
        </p>
        <p class="telefone-contato">
            <span>Telefone:</span>
            <input
                type="tel"
                id="phone"
                placeholder="(00) 90000-0000"
                required
                maxlength="11"
            />
        </p>
        <p class="assunto-contato">
            <span>Assunto:</span>
            <select name="subject" id="subject">
                <option label="Selecione..." hidden></option>
                <option value="1">Cancelamento de Reserva</option>
                <option value="2">Ouvidoria</option>
                <option value="3">Departamento Financeiro</option>
            </select>
        </p>
        <p class="comentários-contato">
            <span>Comentários:</span>
            <textarea
                name="message"
                id="message"
                placeholder="Digite seus comentários"
            ></textarea>
        </p>
        <div class="send-message display-f justify-csb">
            <button class="btn-enviar-contato" id="send">ENVIAR</button>
            <div class="linha-final">
                <a href="mailto:reservas@hotel.com.br"
                    ><i class="fa-regular fa-envelope"></i
                    ><span>recantodoscodigos@contato.com</span></a
                >
            </div>
        </div>
    </form>
</template>

<script>
export default {
    name: 'ComponenteFormContatos',
}
</script>

<style scoped>
/* PÁGINA CONTATO */
/* PÁGINA CONTATO */

.form-contato {
    width: 40%;
    height: auto;
    font-size: 14px;
    background: #063f57;
    border-radius: 8px;
    margin: 0 auto;
    box-shadow: 0 0 40px -10px #063f57;
    padding: 20px 30px;
    box-sizing: border-box;
    color: #ffffff;
    letter-spacing: 0.5px;
}
.form-contato h2 {
    margin: 10px 0;
    padding-bottom: 10px;
    width: 60%;
    border-bottom: 3px solid #a35700;
    font-size: 2rem;
    font-weight: 700;
    line-height: 42px;
}
.form-contato p {
    font-size: 1.2rem;
    font-weight: 700;
}
.form-contato p before {
    content: attr(type);
    display: block;
    margin: 28px 0 0;
    font-size: 14px;
}
.form-contato p input {
    width: 100%;
    height: 50px;
    padding: 10px;
    font-size: 0.9rem;
    resize: none;
    border: 0;
    transition: all 0.3s;
    border-radius: 3px;
    outline: none;
}

.telefone-contato {
    width: 49%;
    display: inline-block;
}

.assunto-contato {
    width: 50%;
    display: inline-block;
}
.assunto-contato select {
    width: 100%;
    height: 50px;
    border-radius: 3px;
    padding: 10px;
    cursor: pointer;
    border: none;
    outline: none;
}

.comentários-contato > textarea {
    width: 100%;
    height: 100px;
    padding: 10px;
    font-family: 'Noto Sans', sans-serif;
    font-size: 0.9rem;
    border: 1px solid #176485;
    border-radius: 3px;
    resize: none;
    outline: none;
}

.send-message {
    gap: 5px;
}

.btn-enviar-contato {
    width: 100px;
    height: 50px;
    margin-top: 28px;
    border: none;
    background-color: #176485;
    color: #ffffff;
    padding: 16px 0 16px 0;
    font-weight: 700;
    border-radius: 3px;
    cursor: pointer;
}

.btn-enviar-contato:hover {
    background-color: #a35700;
    transition: 0.2s;
    box-shadow: 10px 10px 40px -14px #063f57;
}

div.linha-final {
    text-align: center;
    width: 100%;
    height: 50px;
    padding: 16px 0 16px 0;
    margin-top: 28px;
    background: #176485;
    color: #ffffff;
    border-radius: 3px;
    box-shadow: 10px 10px 40px -14px #063f57;
}

div.linha-final > a {
    text-decoration: none;
    color: #ffffff;
}

div.linha-final a i {
    margin-right: 8px;
}
</style>
