<script>
  import Board from "./Board.svelte";
  import { create_board, is_won } from "./game.js"

  let playing = true
  let won = false
  let board = create_board(4, 4)
  let first = null
  let second = null

  function win_game() {
    playing = false
    won = true
  }

  function is_match() {
    return board[first].tile === board[second].tile
  }

  function choose_first(i) {
    first = i
    board[i].state = "first"
  }

  function choose_second(i) {
    second = i
    board[i].state = "second"

    if (is_match()) {
      board[first].state = "known"
      board[second].state = "known"
      first = null
      second = null
      if (is_won(board)) {
        win_game()
      }
    }
  }

  function clear_previous_selection() {
    if (first !== null) {
      board[first].state = "hidden"
      first = null
    }
    if (second !== null) {
      board[second].state = "hidden"
      second = null
    }
  }

  function onclick(i) {
    if (board[i].state !== "hidden") return;
    if (first === null) {
      choose_first(i)
    } else if (second === null) {
      choose_second(i)
    } else {
      clear_previous_selection()
      choose_first(i)
    }
  }

</script>

<style>
header {
  font-size: 200%;
  text-align: center;
}
</style>

<header>Emoji Memory Game</header>

<Board board={board} onclick={onclick} />
{#if won}
  <header>Victory!</header>
{/if}
