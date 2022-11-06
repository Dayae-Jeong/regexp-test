const str = `
010-1234-5678
dfsdfsdf@naver.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
Tomorrow is Monday.
aabbccd
`


const regexp = /Tomorrow/gi
console.log(regexp.test(str))