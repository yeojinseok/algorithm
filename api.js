const express = require('express')
const app = express()

const server = app.listen(3001, () => {
  let str = 'CBA'
  let str2 = 'CBDAGE'

  console.log(solution(str, str2))
  function solution(must, dolist) {
    let answer
    let mustList = new Set(must)
    let checkList = ''
    for (let i = 0; i < dolist.length; i++) {
      if (mustList.has(dolist[i])) checkList = checkList + dolist[i]
    }
    if (checkList == must) {
      answer = 'YES'
    } else answer = 'NO'
    return answer
  }
})
