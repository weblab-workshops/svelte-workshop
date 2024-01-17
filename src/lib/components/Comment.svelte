<script>
  export let id;
  export let user;
  export let title;
  export let body;
</script>

<article>
  <h3>
    {user}
  </h3>
  <h2>{title}</h2>
  <p>{body}</p>
</article>

<style>
  article {
    background-color: lightblue;
    padding: 20px;
    border-radius: 20px;
    margin-bottom: 20px;
  }
</style>
