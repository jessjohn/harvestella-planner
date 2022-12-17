<script>
  import Table from "$lib/components/Table.svelte";
  import cropData from "$lib/data/crops.json";
  import Dropdown from "$lib/components/Dropdown.svelte";
  import NumberInput from "$lib/components/NumberInput.svelte";

  let season = "Spring"
  let amount = 10000;
  let day = 1;
  let farmSize = "Lvl 1 (22 squares)";
</script>

<svelte:head>
  <title>Crop Planner</title>
  <meta name="description" content="Crop Planner" />
</svelte:head>

<section>
  <h1 class="text-3xl font-bold">
    Crop Planner
  </h1>
</section>
<section class="grid grid-flow-row-dense grid-cols-5 grid-rows-1 items-end gap-x-4 my-4">
  <Dropdown label="Current Season" options={["Spring", "Summer", "Autumn", "Winter"]} selected={season}/>
  <NumberInput label="Day" amount={day} />
  <NumberInput label="Grilla to Spend" amount={amount} />
  <Dropdown label="Farm Size" options={["Lvl 1 (22 squares)", "Lvl 2 (44 squares)", "Lvl 3 (66 squares)", "Lvl 4 (88 squares)"]} selected={farmSize}/>
  <button class="bg-slate-500 self-end p-1.5 rounded">Maximize Profits</button>
</section>

<section>

</section>

<section>
  <Table
    headers={["Name","Season(s)","Normal Quality Sell Price", "High Quality Sell Price"]}
    rows={cropData}
    sortBy="sellPrice"
    sortDirection="desc"
  />
</section>
