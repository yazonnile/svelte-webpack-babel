<script>
  import scrollStore from 'stores/scroll/scroll';
</script>

<div class="app">
  <header>
    {$scrollStore.top}
    <img src="/svg/logo.svg" alt="svelte">
  </header>
  <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus adipisci aperiam dolores expedita explicabo facere fugiat in ipsum iste iure minus nobis nulla porro quo, tempore tenetur, vitae voluptas!</div>
  <div>Aperiam architecto beatae commodi dignissimos dolores dolorum enim, error et, eum eveniet expedita fuga fugiat fugit in ipsa, minima modi necessitatibus neque praesentium quas quo ratione recusandae reprehenderit voluptate voluptatum?</div>
  <div>Animi distinctio eos similique tempore voluptates? Aperiam consectetur delectus, doloremque dolores enim et exercitationem fugiat fugit harum id illo, impedit in ipsum laborum maxime modi neque nostrum officiis praesentium sed.</div>
  <div>Delectus illum maiores, necessitatibus quas quo ratione voluptate voluptatem. A ab adipisci debitis dolore ea, ex, illo, in incidunt maxime non quod repellendus ut! Autem cum distinctio dolores quisquam ut?</div>
  <div>Aliquam asperiores consectetur consequuntur ea eaque earum eum fugit harum laboriosam minus molestiae, natus nesciunt non odit quae quam quibusdam quidem quod reiciendis sapiente sed sit tempore totam voluptatem voluptatum.</div>
  <div>Autem consequuntur corporis eum facilis illum inventore iusto labore libero molestias natus nemo nihil obcaecati quam quia quibusdam, quidem ratione reiciendis voluptatibus. At cumque debitis, error excepturi illum nobis quidem?</div>
  <div>Deserunt esse harum numquam? Culpa ea facilis magni odio officia. Alias blanditiis, commodi culpa deleniti dicta eius error incidunt itaque laborum magnam nemo numquam perspiciatis quas quasi quisquam repudiandae ullam?</div>
  <div>Accusantium asperiores corporis dolore doloribus excepturi expedita id iure magni nisi odit pariatur perspiciatis quam ratione, sapiente sed sit voluptate! Aliquid commodi corporis distinctio esse facere incidunt, perspiciatis qui quibusdam!</div>
  <div>Alias at commodi incidunt vitae voluptatibus! Consequuntur culpa, deleniti dolores est eum eveniet excepturi hic ipsam labore laboriosam magni numquam quae quidem soluta suscipit tempora tempore, vel! A, iure nobis?</div>
  <div>A architecto at, corporis eligendi, esse est facilis ipsam maxime nemo officia perferendis, reprehenderit tempora. A architecto, enim id iure labore libero maiores maxime molestiae obcaecati sit soluta totam veritatis.</div>
</div>

<style>
  :global(*) {
    margin: 0;
    padding: 0;
  }

  .app {
    font-size: 20px;
    line-height: 30px;
    padding: 81px 20px 20px;
  }

  img {
    height: 40px;
    vertical-align: top;
    width: auto;
  }

  header {
    background: #fff;
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
    line-height: 40px;
    left: 0;
    padding: 20px;
    position: fixed;
    top: 0;
    width: 100%;
  }

  div div {
    margin: 30px 0;
  }
</style>
