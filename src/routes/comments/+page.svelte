<script>
  import Comment from '../../components/Comment.svelte';

  let comments = [
    {
      id: 0,
      user: 'Username',
      title: 'Comment',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, perferendis!',
    },
  ];
</script>

<h1>Comments</h1>
<ul>
  {#each comments as comment (comment.id)}
    <li>
      <Comment {...comment} />
    </li>
  {/each}
</ul>
