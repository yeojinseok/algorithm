const express = require('express')
const app = express()

const server = app.listen(3001, () => {
  console.log(solution(3, [2, 4, 5, 8, 12], 6))
  function solution(count, numbers, m) {
    let answer = []
    let tmp = Array.from({ length: count }, () => 0)

    function dfs(L, start, sum) {
      if (L == count) {
        console.log(sum)
        if (sum % m == 0) answer.push(tmp.slice())
      } else {
        for (let i = start; i < numbers.length; i++) {
          tmp[L] = numbers[i]
          dfs(L + 1, i + 1, sum + numbers[i])
        }
      }
    }
    dfs(0, 0, 0)
    return answer.length
  }
})
