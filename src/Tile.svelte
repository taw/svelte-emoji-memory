<script>
  export let hidden;
  export let tile;
  export let onclick;
</script>

<style>
.tile {
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 36px;
  perspective: 1000px;
  cursor: pointer;
}

.tile * {
  transition: 0.5s ease;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.hidden .front {
  transform: rotateY(-180deg);
}

.hidden .back {
  transform: rotateY(-360deg);
}

.front {
  position: absolute;
  height: 50px;
  width: 50px;
  background: #4a8;
}

.back {
  position: absolute;
  height: 50px;
  width: 50px;
  background: #a4a;
  transform: rotateY(-180deg);
}
</style>

<div class="tile" class:hidden on:click={onclick}>
  <div class="back">?</div>
  <div class="front">{tile}</div>
</div>
