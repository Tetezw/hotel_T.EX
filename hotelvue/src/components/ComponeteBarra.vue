<template>
  <section>
    <h2 class="titulo-h2 courier">
      <span class="link-border-bottom"> MINHA RESERVA </span>
    </h2>
    <fieldset class="reserva">
      <form class="novoform" action="" method="get">
        <ul class="display-f">
          <li>
            <label for="check-in">Data do check-in</label><br />
            <input type="date" id="check-in" name="check-in" required />
          </li>
          <li>
            <label for="check-out">Data do check-out</label><br />
            <input type="date" id="check-out" name="check-out" required />
          </li>
          <li>
            <label for="adultos">Nº de pessoas</label><br />
            <input
              type="number"
              min="0"
              max="4"
              id="adultos"
              name="adultos"
              placeholder="0"
              required
            />
          </li>
        </ul>
      </form>
    </fieldset>
  </section>
</template>

<script>
export default {
  name: "ComponeteBarra"
};
</script>
