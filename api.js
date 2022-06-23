const express = require('express')
const app = express()

const server = app.listen(3001, () => {
  console.log(solution(11))
  function solution(number) {
    let answer = []
    let count = 1
    divide(1, count)
    function divide(number, count) {
      if (count == 4) return
      else {
        count++
        divide(number * 2, count)

        divide(number * 2 + 1, count)
        console.log(number)
      }
    }
    return answer.join('')
  }
})
