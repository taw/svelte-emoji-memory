<script>
  import emoji from "./emoji.js";
  import Tile from "./Tile.svelte";
  import { unsort } from "array-unsort";

  function create_game(size) {
    let e = unsort(emoji).slice(0, size);
    return unsort([...e, ...e]);
  }

  let game2x2 = create_game(2)
  let game4x4 = create_game(8)
</script>

<style>
header {
  font-size: 200%;
  text-align: center;
}

.board {
  display: grid;
  margin: auto;
  text-align: center;
  gap: 5px;
  padding: 5px;
  background: rgb(171, 120, 17);

  margin-bottom: 10px;
}

.board.board-4x4 {
  width: 215px;
  grid-template-columns: 50px 50px 50px 50px;
}

.board.board-2x2 {
  width: 105px;
  grid-template-columns: 50px 50px;
}
</style>

<header>Emoji Memory Game</header>

<div class="board board-2x2">
  {#each game2x2 as g}
    <Tile text={g} visible={false} />
  {/each}
</div>

<div class="board board-4x4">
  {#each game4x4 as g}
    <Tile text={g} visible={false} />
  {/each}
 </div>
