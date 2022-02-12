<script>
  import Check from '$lib/icons/check.svelte'
</script>

<div
  class="relative mx-auto mt-8 max-w-2xl px-4 pb-8 sm:mt-12 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-0"
>
  <!-- Decorative background -->
  <div
    aria-hidden="true"
    class="absolute inset-0 top-4 bottom-6 left-8 right-8 hidden rounded-tl-lg rounded-tr-lg bg-primary lg:block"
  />

  <div class="relative space-y-6 lg:grid lg:grid-cols-3 lg:space-y-0">
    <div
      class="rounded-lg bg-primary px-6 pt-6 pb-3 lg:bg-transparent lg:px-8 lg:pt-12"
    >
      <div>
        <h3 class="text-sm font-semibold uppercase tracking-wide">
          Starter
        </h3>
        <div
          class="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start"
        >
          <div class="mt-3 flex items-center">
            <p class=" text-4xl font-extrabold tracking-tight">$5</p>
            <div class="ml-4">
              <p class=" text-sm">USD / mo</p>
              <p class="text-sm">Billed yearly ($56)</p>
            </div>
          </div>
          <a
            href="/"
            class="mt-6 inline-block w-full rounded-md border border-transparent bg-white py-2 px-8 text-center text-sm font-medium text-primary shadow-sm sm:mt-0 sm:w-auto lg:mt-6 lg:w-full"
            >Buy Starter</a
          >
        </div>
      </div>
      <h4 class="sr-only">Features</h4>
      <ul
        class="mt-7 divide-y divide-opacity-75 border-t  lg:border-t-0"
      >
        <li class="flex items-center py-3">
          <Check />
          <span class=" ml-4 text-sm font-medium"
            >Basic invoicing</span
          >
        </li>

        <li class="flex items-center py-3">
          <Check />
          <span class=" ml-4 text-sm font-medium"
            >Easy to use accounting</span
          >
        </li>

        <li class="flex items-center py-3">
          <Check />
          <span class=" ml-4 text-sm font-medium">Mutli-accounts</span
          >
        </li>
      </ul>
    </div>

    <div
      class="rounded-lg bg-white px-6 pt-6 pb-3 shadow-md ring-2 ring-secondary lg:px-8 lg:pt-12"
    >
      <div>
        <h3
          class="text-sm font-semibold uppercase tracking-wide text-primary"
        >
          Scale
        </h3>
        <div
          class="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start"
        >
          <div class="mt-3 flex items-center">
            <p
              class="text-4xl font-extrabold tracking-tight text-primary"
            >
              $19
            </p>
            <div class="ml-4">
              <p class="text-sm text-primary">USD / mo</p>
              <p class="text-sm text-primary">Billed yearly ($220)</p>
            </div>
          </div>
          <a
            href="/"
            class="mt-6 inline-block w-full rounded-md border border-transparent bg-primary py-2 px-8 text-center text-sm font-medium shadow-sm hover:bg-primary sm:mt-0 sm:w-auto lg:mt-6 lg:w-full"
          >
            Buy Scale
          </a>
        </div>
      </div>
      <h4 class="sr-only">Features</h4>
      <ul
        class="mt-7 divide-y divide-gray-200 border-t border-gray-200 lg:border-t-0"
      >
        <li class="flex items-center py-3">
          <Check />
          <span class="ml-4 text-sm font-medium text-gray-600">
            Advanced invoicing
          </span>
        </li>

        <li class="flex items-center py-3">
          <Check />
          <span class="ml-4 text-sm font-medium text-gray-600">
            Easy to use accounting
          </span>
        </li>

        <li class="flex items-center py-3">
          <Check />
          <span class="ml-4 text-sm font-medium text-gray-600"
            >Mutli-accounts</span
          >
        </li>

        <li class="flex items-center py-3">
          <Check />
          <span class="ml-4 text-sm font-medium text-gray-600"
            >Tax planning toolkit</span
          >
        </li>

        <li class="flex items-center py-3">
          <Check />
          <span class="ml-4 text-sm font-medium text-gray-600"
            >VAT &amp; VATMOSS filing</span
          >
        </li>

        <li class="flex items-center py-3">
          <Check />
          <span class="ml-4 text-sm font-medium text-gray-600"
            >Free bank transfers</span
          >
        </li>
      </ul>
    </div>

    <div
      class="rounded-lg bg-primary px-6 pt-6 pb-3 lg:bg-transparent lg:px-8 lg:pt-12"
    >
      <div>
        <h3 class=" text-sm font-semibold uppercase tracking-wide">
          Growth
        </h3>
        <div
          class="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start"
        >
          <div class="mt-3 flex items-center">
            <p class=" text-4xl font-extrabold tracking-tight">$12</p>
            <div class="ml-4">
              <p class=" text-sm">USD / mo</p>
              <p class="text-sm">Billed yearly ($140)</p>
            </div>
          </div>
          <a
            href="/"
            class="mt-6 inline-block w-full rounded-md border border-transparent bg-white py-2 px-8 text-center text-sm font-medium text-primary shadow-sm sm:mt-0 sm:w-auto lg:mt-6 lg:w-full"
            >Buy Growth</a
          >
        </div>
      </div>
      <h4 class="sr-only">Features</h4>
      <ul
        class="mt-7 divide-y divide-opacity-75 border-t  lg:border-t-0"
      >
        <li class="flex items-center py-3">
          <Check />
          <span class=" ml-4 text-sm font-medium"
            >Basic invoicing</span
          >
        </li>

        <li class="flex items-center py-3">
          <Check />
          <span class=" ml-4 text-sm font-medium"
            >Easy to use accounting</span
          >
        </li>

        <li class="flex items-center py-3">
          <Check />
          <span class=" ml-4 text-sm font-medium">Mutli-accounts</span
          >
        </li>

        <li class="flex items-center py-3">
          <Check />
          <span class=" ml-4 text-sm font-medium"
            >Tax planning toolkit</span
          >
        </li>
      </ul>
    </div>
  </div>
</div>
