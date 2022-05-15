const express = require('express')
const app = express()

const server = app.listen(3001, () => {
  const fs = require('fs')
  const filePath =
    process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'

  let [arr1, arr2] = fs.readFileSync(filePath).toString().split('\n')

  let [songct, holes] = arr1.split(' ')
  let home = arr2.split(' ').map(data => +data)
  solution(+holes, home)

  function solution(holes, home) {
    home.sort((a, b) => a - b)
    console.log(home)

    let lt = 1
    let rt = Math.max(...home)
    let answer = 0
    while (lt <= rt) {
      let mid = parseInt((lt + rt) / 2)
      if (count(home, mid) >= holes) {
        lt = mid + 1
        answer = mid
        // console.log(mid)
      } else rt = mid - 1
    }
    console.log(answer)
  }
  function count(home, mid) {
    let ed = home[0]
    let holesCount = 1
    for (let i = 1; i < home.length; i++) {
      if (home[i] - ed >= mid) {
        holesCount++
        ed = home[i]
      }
    }
    return holesCount
  }
})
