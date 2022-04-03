<script>
  import { trackGoal } from 'fathom-client'
</script>

<div
  class="navbar rounded-box mb-10 bg-neutral text-neutral-content shadow-lg"
>
  <div class="navbar-start mx-2 px-2">
    <a href="/" on:click={trackGoal(`KWOYX0PK`)}>
      <span class="text-lg font-bold">SvelteKit and Fathom</span>
    </a>
  </div>
  <div class="navbar-center mx-2 hidden px-2 lg:flex">
    <div class="flex items-stretch">
      <a href="/pricing" class="btn btn-ghost btn-sm rounded-btn">
        Pricing
      </a>
      <a href="/contact" class="btn btn-ghost btn-sm rounded-btn">
        Contact Us
      </a>
      <a href="/about" class="btn btn-ghost btn-sm rounded-btn">
        About
      </a>
      <a href="/blog" class="btn btn-ghost btn-sm rounded-btn">
        Blog
      </a>
    </div>
  </div>
  <div class="navbar-end" />
</div>
