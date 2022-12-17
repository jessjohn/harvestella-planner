<script>
  import { draggable } from "@neodrag/svelte";

  const randomHexColorCode = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };

  let items = [...Array(22).keys()].map(b => {
    return { label: b, x: 0, y: 0, color: randomHexColorCode() };
  });
  let container;
  let horizontalGridIncrement = 25;
  let verticalGridIncrement = 25;

  function updatePositionData(item,	positionData) {
    item.x = positionData.offsetX;
    item.y = positionData.offsetY;
    items = [...items];
  }

  let blocks = Array(items.length);
  let options

  $: containerWidth = container?.getBoundingClientRect().width;
  $: horizontalGridIncrement = containerWidth * 0.01;
  $: verticalGridIncrement = horizontalGridIncrement;
  $: options = {
    bounds: 'parent',
    grid: [horizontalGridIncrement, verticalGridIncrement],
    onDragEnd: ({ offsetX, offsetY, domRect }) => {
      const { x, y } = domRect;
      console.log(offsetX, offsetY, domRect);
      console.log('x', x - (x - offsetX));
      console.log('y', y - (y - offsetY));
    }
  };

  function updateGridSize() {
    let containerHorizontalWidth = container?.getBoundingClientRect().width;
    if(containerHorizontalWidth){
      horizontalGridIncrement = containerHorizontalWidth  * 0.05;
      verticalGridIncrement = horizontalGridIncrement;
    }
  }
</script>

<svelte:window on:resize={updateGridSize} />
<div style="border: 2px solid #ccc">
  <div class="selection-container" bind:this={container}>
    {#each items as item, i}
      <div
        bind:this={blocks[i]}
        style={`background-color: ${item.color}`}
        class="square items selectable"
        use:draggable={options}
      >
        <p>{item.label}</p>
      </div>
    {/each}
  </div>
</div>

<style>
  .items {
    width: calc(80vh / 22);
    background: gray;
    font-size: smaller;
    font-weight: bold;
  }
  .square{
    aspect-ratio: 1 / 1;
  }
  .selection-container {
    position: relative;
    width: 80vh;
    height: 80vh;
    background-image:
      repeating-linear-gradient(#ccc 0 1px, transparent 1px 100%),
      repeating-linear-gradient(90deg, #ccc 0 1px, transparent 1px 100%);
    background-size: calc(80vh / 22) calc(80vh / 22);
  }
  p {
    text-align: center;
    margin: auto;
  }
</style>
