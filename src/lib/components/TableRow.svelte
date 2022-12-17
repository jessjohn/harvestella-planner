<script>
  export let row = {};

  const formatRowContent = rowContent => {
    if(Array.isArray(rowContent)) {
      return rowContent.join(", ");
    }
    return rowContent;
  }
</script>

<tr>
  {#each Object.values(row) as rowContent}
    <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 hover:bg-slate-50/25 select-all">{formatRowContent(rowContent)}</td>
  {/each}
</tr>
