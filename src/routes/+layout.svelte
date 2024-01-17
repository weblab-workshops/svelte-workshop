<script>
  import '../app.css';
  import Navbar from '$lib/components/Navbar.svelte';

  import { onNavigate } from '$app/navigation';

  onNavigate((navigation) => {
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
</script>

<Navbar />
<slot />

<style>
  @keyframes fade-in {
    from {
      opacity: 0;
    }
  }

  @keyframes fade-out {
    to {
      opacity: 0;
    }
  }

  @keyframes slide-from-right {
    from {
      transform: translateY(30px);
    }
  }

  @keyframes slide-to-left {
    to {
      transform: translateY(-30px);
    }
  }

  :root::view-transition-old(root) {
    animation:
      90ms ease both fade-out,
      300ms ease both slide-to-left;
  }

  :root::view-transition-new(root) {
    animation:
      210ms ease 90ms both fade-in,
      300ms ease both slide-from-right;
  }
</style>
