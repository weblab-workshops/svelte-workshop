<script>
  import Comment from '$lib/components/Comment.svelte';
  // Hint: Don't forget to import the store!

  // Hint: You can remove this state
  let comments = [
    {
      id: 0,
      user: 'Username',
      title: 'Comment',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, perferendis!',
    },
  ];
</script>

<!-- TODO 6.3: Replace the comments state with the global store -->
<h1>Comments</h1>
<ul>
  {#each comments as comment (comment.id)}
    <li>
      <Comment {...comment} />
    </li>
  {/each}
</ul>
