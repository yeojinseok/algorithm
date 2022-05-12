const express = require('express')
const app = express()

const server = app.listen(3001, () => {
  const fs = require('fs')
  const filePath =
    process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
  let input = fs.readFileSync(filePath).toString().split('\n')

  // let [count, ...arr] = input

  // const times = arr.map(num => num.split(' ').map(num => +num))

  let arr = [23, 85, 65, 12, 57, 32, 99, 81, 23]
  solution(81, arr)
  function solution(target, arr) {
    let answer
    let lt = 0
    let rt = arr.length - 1

    arr.sort((a, b) => a - b)
    console.log(arr)
    while (true) {
      mid = Math.floor((lt + rt) / 2)
      if (arr[mid] === target) {
        answer = mid
        break
      } else if (arr[mid] < target) {
        lt = mid + 1
      } else if (arr[mid] > target) {
        rt = mid - 1
      }

      console.log(mid)
    }
    console.log(answer + 1)
  }
})
