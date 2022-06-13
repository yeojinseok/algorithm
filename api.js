const express = require('express')
const app = express()

const server = app.listen(3001, () => {
  let str = 'AbaAeCe'
  let str2 = 'baeeACA'

  console.log(solution(str, str2))

  // function solution(str1, str2) {  내가 푼 답이지만 옳지못함.
  //   let answer = ''
  //   const strMap1 = new Map()
  //   const strMap2 = new Map()
  //   for (let x of str1) {
  //     if (strMap1.has(x)) strMap1.set(x, strMap1.get(x) + 1)
  //     else strMap1.set(x, 1)
  //   }
  //   for (let x of str2) {
  //     if (strMap2.has(x)) strMap2.set(x, strMap2.get(x) + 1)
  //     else strMap2.set(x, 1)
  //   }
  //   for (let [key, value] of strMap1) {
  //     if (!strMap2.has(key)) {
  //       answer = 'NO'
  //       break
  //     } else if (strMap1.get(key) == strMap2.get(key)) {
  //       console.log(strMap1.get(key), strMap2.get(key))
  //       answer = 'YES'
  //     } else {
  //       answer = 'NO'
  //       break
  //     }
  //   }
  //   return answer
  // }
  function solution(str1, str2) {
    let answer = 'YES'
    const strMap1 = new Map()
    for (let x of str1) {
      if (strMap1.has(x)) strMap1.set(x, strMap1.get(x) + 1)
      else strMap1.set(x, 1)
    }
    for (let x of str2) {
      if (!strMap1.has(x) || strMap1.get(x) == 0) return 'NO'
      strMap1.set(x, strMap1.get(x) - 1)
    }
    return answer
  }
})
