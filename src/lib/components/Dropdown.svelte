<script>
  export let label;
  export let options = [];
  export let selected = null;
</script>

<label class="block">
  <span class="block text-sm font-medium text-slate-700">
    {label}
  </span>
  <select name={label} bind:value={selected} class="p-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1">
    {#each options as option}
      <option value="{option}">{option}</option>
    {/each}
  </select>
</label>
