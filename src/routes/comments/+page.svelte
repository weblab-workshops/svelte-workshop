<script>
  import Comment from '$lib/components/Comment.svelte';
  import { CommentsStore } from '$lib/stores/store';

  let newCommentTitle = '';

  const addComment = () => {
    const newComment = {
      id: Math.floor(Math.random() * 10000),
      user: 'Temp',
      title: newCommentTitle,
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, fuga.',
    };

    CommentsStore.update((prevStore) => [newComment, ...prevStore]);

    newCommentTitle = '';
  };
</script>

<h1>Comments</h1>

<form on:submit|preventDefault={addComment}>
  <input type="text" bind:value={newCommentTitle} />
  <button type="submit">Add Comment</button>
</form>
<ul>
  {#each $CommentsStore as comment (comment.id)}
    <li>
      <Comment {...comment} />
    </li>
  {/each}
</ul>
