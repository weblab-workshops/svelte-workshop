<script>
  import Comment from '$lib/components/Comment.svelte';
  import { CommentsStore } from '$lib/stores/store';

  // Hint: Create a state that tracks the current input text
  // Hint: Create a function addComment that updates the global store
</script>

<h1>Comments</h1>
<!-- TODO 7.2: Create a "new comment" form that adds new comments  -->
<!-- Hint: Bind the state you created to an input tag using bind:value -->
<ul>
  {#each $CommentsStore as comment (comment.id)}
    <li>
      <Comment {...comment} />
    </li>
  {/each}
</ul>
