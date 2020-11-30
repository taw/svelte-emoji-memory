<script>
  export let visible;
  export let text;

  function handleClick() {

  }
</script>

<style>
.tile {
  width: 50px;
  height: 50px;
  /* border: 5px solid black; */
  line-height: 50px;
  text-align: center;
  font-size: 36px;
  perspective: 1000px;
}

.tile * {
  transition: 0.5s ease;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

:hover .front {
  transform: rotateY(-180deg);
}

:hover .back {
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

<div on:click={handleClick} class="tile">
  <div class="back">?</div>
  <div class="front">{text}</div>
</div>
