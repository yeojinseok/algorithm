const express = require('express')
const app = express()

const server = app.listen(3001, () => {
  const fs = require('fs')
  const filePath =
    process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
  let input = fs.readFileSync(filePath).toString().split(' ')

  solution(input)

  function solution(input) {
    let answer = []
    for (let x of input) {
      let count = 0
      let testNum = Number(x.split('').reverse().join(''))
      // console.log(testNum)
      for (let i = 1; i <= testNum; i++) {
        if (testNum % i === 0) count++
      }
      if (count === 2) answer.push(testNum)
    }
    console.log(answer)
  }
})
