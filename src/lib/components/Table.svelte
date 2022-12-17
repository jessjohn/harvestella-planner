<script>
  import TableHeader from "./TableHeader.svelte";
  import TableRow from "./TableRow.svelte";

  const headerMapping = {
    name: "Name",
    farmableSeasons: "Season(s)",
    sellPrice: "Normal Quality Sell Price",
    highQualitySellPrice: "High Quality Sell Price"
  };

  const sort = rows => {
    if(sortBy && rows.length > 0) {
      if(sortDirection === "desc") {
        const wat = rows.sort((a, b) => {
          if(b[sortBy] > a[sortBy]) {
            return 1;
          }
          if(a[sortBy] > b[sortBy]) {
            return -1;
          }
          return 0;
        });
        return wat;
      }

      return rows.sort((a, b) => {
        if(a[sortBy] > b[sortBy]) {
          return 1;
        }
        if(b[sortBy] < a[sortBy]) {
          return -1;
        }
        return 0;
      });
    }
    return rows;
  }

  export let headers = [], rows = [], sortBy = null, sortDirection = "desc";
  let sortedRows = sort(rows) || [];

  const handleSort = event => {
    const sortKey = Object.entries(headerMapping).map(([k, v]) => {
      if(v === event.detail.sortBy) {
        return k;
      }
    });
    sortBy = sortKey.find(sk => sk !== undefined);
    sortedRows = sort(rows) || [];
  }

</script>



<table class="table-auto border-collapse w-full border border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 text-sm shadow-sm">
  <TableHeader headers={headers} on:sortBy={handleSort}/>
  <tbody>
    {#each sortedRows as rowContent}
      <TableRow row={rowContent} />
    {/each}
  </tbody>
</table>
