



const base = 1500
const percent = 40
const warcry = 10



const case1 = base * ((100 + percent + warcry)/100)

const case2 = (base * ((100 + percent)/100)) + (base * ((100+warcry)/100))


console.log(case1, case2)