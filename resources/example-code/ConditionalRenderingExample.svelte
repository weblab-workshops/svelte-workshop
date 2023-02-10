<!-- Copy and paste this code into the Svelte REPL (https://svelte.dev/repl) to
see the output -->
<script>
  let user = { loggedIn: false };
</script>

{#if user.loggedIn}
  <h1>Content</h1>
{:else}
  <h1>Please log in to see the content!</h1>
{/if}
