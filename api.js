const express = require('express')
const app = express()

const server = app.listen(3001, () => {
  let str = 'BACBACCACCBDEDE'

  console.log(solution(str))

  function solution(str) {
    let answer
    let st = new Map()
    for (let x of str) {
      if (st.has(x)) st.set(x, st.get(x) + 1)
      else st.set(x, 1)
    }
    let max = Number.MIN_SAFE_INTEGER
    for (let [key, val] of st) {
      if (max < val) {
        max = val
        answer = key
      }
    }

    return answer
  }
})
