import { writable } from 'svelte/store';

export const CommentsStore = writable([
  {
    id: 0,
    user: 'Username',
    title: 'Comment',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, perferendis!',
  },
]);
