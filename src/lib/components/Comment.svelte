<script>
  export let id;
  export let user;
  export let title;
  export let body;

  import { CommentsStore } from '$lib/stores/store';

  import { fly } from 'svelte/transition';

  /**
   * Deletes this comment from the global store
   */
  const deleteComment = () => {
    CommentsStore.update((prevStore) => prevStore.filter((comment) => comment.id !== id));
  };
</script>

<article transition:fly={{ x: -200 }}>
  <h3>
    {user}
  </h3>
  <h2>{title}</h2>
  <p>{body}</p>
  <button on:click={deleteComment}>Delete {id}</button>
</article>

<style>
  article {
    background-color: lightblue;
    padding: 20px;
    border-radius: 20px;
    margin-bottom: 20px;
  }
</style>
