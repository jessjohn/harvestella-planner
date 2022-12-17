<script>
  export let label = "";
  export let amount = 0;
</script>

<label class="block">
  <span class="block text-sm font-medium text-slate-700">
    {label}
  </span>
  <input class="p-1.5 rounded" type="number" value={amount} />
</label>
