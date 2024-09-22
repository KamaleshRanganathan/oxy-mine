<script>
  import "../app.css";
  import Header from './Nav.svelte';
</script>
<header class="fixed top-0 left-0 w-full">
  <Header/>
</header>

<main>
  <slot />
</main>
