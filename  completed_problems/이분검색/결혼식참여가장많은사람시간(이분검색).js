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
    let answer = Number.MIN_SAFE_INTEGER
    let time_line = []
    let time_count = 0
    arr.map((data, index) => {
      time_line.push([data[0], 's'])
      time_line.push([data[1], 'e'])
    })
    time_line.sort((a, b) => {
      if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt()
      else return a[0] - b[0]
    })

    time_line.map(data => {
      if (data[1] === 's') {
        time_count++
      } else {
        time_count--
      }
      answer = Math.max(answer, time_count)
    })
    console.log(answer)
  }
})
