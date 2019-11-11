# Angel problem
In combinatorial game theory there is a problem posed by John Horton Conway (creator of Conway's Game of Life), it requires an infinite grid of squares and two players. It is called the angel problem or Angel and Demon problem.

The basic idea is as follows, the angel is at the origin and devil is in arbitrary location. The angel can move up to k squares in any direction (called the power of the angel), and the devil can move anywhere it likes. However, each time the devil moves, it 'caputes' the square it lands on (it cannot caputre the square the angel is currently on), as such creating portions of the grid that are unplayable to the angel.

The problem is: can an angel with a high enough power win?

[*Wikipedia Article*](https://en.wikipedia.org/wiki/Angel_problem)

JavaScript + p5.js Implementation
---
This is an interactive implementation of the angel problem, although not using an infinite grid, a very large and scalable one. There are several ways to play, either as the angel or demon with the computer playing the other, or alternatively, you play as both or the computer plays as both.

This version of the problem is implemented in JavaScript utilising the [p5.js](https://p5js.org/) library in tandem with HTML5 and CSS3

There are several settings for this game:
- **Grid Size:**
  - X: *Integer value*
  - Y: *Integer value*
- **Players (Angel vs Demon):**
  - Computer vs Computer
  - Computer vs Player
  - Player vs Computer
  - Player vs Player
