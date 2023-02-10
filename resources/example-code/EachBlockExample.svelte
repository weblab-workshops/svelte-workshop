<!-- Copy and paste this code into the Svelte REPL (https://svelte.dev/repl) to
see the output -->
<script>
  let items = ['a', 'b', 'c', 'd'];
</script>

<ul>
  {#each items as item (item)}
    <li>{item}</li>
  {/each}
</ul>
