<script>
  import Comment from '$lib/components/Comment.svelte';
  import { CommentsStore } from '../../store';
</script>

<h1>Comments</h1>
<ul>
  {#each $CommentsStore as comment (comment.id)}
    <li>
      <Comment {...comment} />
    </li>
  {/each}
</ul>
