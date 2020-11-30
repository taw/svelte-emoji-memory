<script>
  import Tile from "./Tile.svelte";
</script>

<style>
header {
  font-size: 400%;
  text-align: center;
}

.board {
  display: grid;
  width: 105px;
  margin: auto;
  text-align: center;
  grid-template-columns: 50px 50px;
  gap: 5px;
  padding: 5px;
  background: brown;
}
</style>

<header>Emoji Memory Game</header>

<div class="board">
  <Tile text="🐈" visible={false} />
  <Tile text="🐈" visible={true} />
  <Tile text="🐄" visible={false} />
  <Tile text="🐄" visible={true} />
</div>
