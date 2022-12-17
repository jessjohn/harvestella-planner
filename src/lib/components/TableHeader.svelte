<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let headers;

  const sortBy = header => {
    dispatch('sortBy', {
      sortBy: header
    });
  };
</script>

<thead class="bg-slate-50 dark:bg-slate-700">
  <tr>
    {#each headers as header}
      <th class="border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left" on:click={sortBy(header)}>{header}</th>
    {/each}
  </tr>
</thead>
