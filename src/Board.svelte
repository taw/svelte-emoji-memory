<script>
  import Tile from "./Tile.svelte";

  export let board;
  export let onclick;

  let board2 = (board.length <= 4);
  let board4 = (board.length <= 16 && board.length > 4);
  let board6 = (board.length > 16);
</script>

<style>
.board {
  display: grid;
  margin: auto;
  text-align: center;
  gap: 5px;
  padding: 5px;
  background: rgb(171, 120, 17);
  margin-bottom: 10px;
}

.board.board2 {
  width: calc(2*55px - 5px);
  grid-template-columns: repeat(2, 50px);
}

.board.board4 {
  width: calc(4*55px - 5px);
  grid-template-columns: repeat(4, 50px);
}

.board.board6 {
  width: calc(6*55px - 5px);
  grid-template-columns: repeat(6, 50px);
}
</style>

<div class="board" class:board2 class:board4 class:board6>
  {#each board as {tile, state}, i}
    <Tile tile={tile} hidden={state === "hidden"} onclick={() => onclick(i)} />
  {/each}
</div>
