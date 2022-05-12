const express = require('express')
const app = express()

const server = app.listen(3001, () => {
  const fs = require('fs')
  const filePath =
    process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
  let input = fs.readFileSync(filePath).toString().split('\n')

  let [count, ...arr] = input

  const times = arr.map(num => num.split(' ').map(num => +num))

  solution(times)

  function solution(arr) {
    let answer = 0

    arr.sort((a, b) => {
      if (a[1] === b[1]) return a[0] - b[0]
      else return a[1] - b[1]
    })
    console.log(arr)
    let endTime = 0
    for (let x of arr) {
      if (x[0] >= endTime) {
        answer++

        endTime = x[1]
      }
    }
  }
})
