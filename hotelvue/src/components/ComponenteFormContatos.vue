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
