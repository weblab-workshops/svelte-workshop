<!-- Copy and paste this code into the Svelte REPL (https://svelte.dev/repl) to
see the output -->
<script>
  // Whatever is typed in the <input/> box
  // will be reflected here
  let inputValue = '';
</script>

<input type="text" bind:value={inputValue} />
<h1>{inputValue}</h1>
