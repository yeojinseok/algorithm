const express = require('express')
const app = express()

const server = app.listen(3001, () => {
  const fs = require('fs')
  const filePath =
    process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'

  let [arr1, arr2] = fs.readFileSync(filePath).toString().split('\n')

  let [songct, dvdct] = arr1.split(' ')
  let song = arr2.split(' ')
  solution(song, dvdct)
  function solution(song, dvdct) {
    let lt = Math.max(...song)
    let rt = song.reduce((a, b) => (a += parseInt(b)), 0)
    // let mid = 0
    let answer = 0
    let m = 3
    while (lt <= rt) {
      // console.log(lt, rt)
      let mid = parseInt((lt + rt) / 2)
      if (count(mid, song) <= m) {
        answer = mid
        rt = mid - 1
      } else lt = mid + 1
    }
    console.log(answer)
  }
  function count(mid, song) {
    let sum = 0
    let count = 1
    song = song.map(data => +data)
    for (let x of song) {
      if (sum + x > mid) {
        sum = x
        count++
      } else sum += x
    }

    return count
  }
  // solution(81)
  // function solution(target, arr) {}
})
