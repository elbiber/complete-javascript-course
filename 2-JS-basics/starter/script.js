/* johnsTeamAvg = (116 + 94 + 123) / 3
mikesTeamAvg = (116 + 34 + 123) / 3
marysTeamAvg = 

if (johnsTeamAvg > mikesTeamAvg) {
  console.log(`John's Team won with an Average of ${johnsTeamAvg} points.`)
} else if (johnsTeamAvg < mikesTeamAvg) {
  console.log(`Mikes's Team won with an Average of ${mikesTeamAvg} points.`)
} else {
  console.log('Both teams draw.')
}
 */
// Function declaration

/* function whatDoYouDo(job, firstName) {

}

whatToDo = function(job, firstName) {
  switch(job) {
    case 'teacher':
      return `${firstName} teaches kids how to code.`
    case 'driver':
      return `${firstName} drives a cab.`
    case 'designer':
      return `${firstName} designs beautiful websites.`
    default:
      return `${firstName} does something else.`
  }
}

console.log() */

/* bill = [124, 48, 268]

calculateTip = function(amount) {
  switch(amount) {
    case amount < 50:
      return amount * 0.2
    case amount >= 50 && amount <= 200:
      return amount * 0.15
    default:
      return amount * 0.1
  }
}

tips = [calculateTip(bill[0]), calculateTip(bill[1]), calculateTip(bill[2])]

console.log(bill,tips) */

tipping = {
  bills : [124, 48, 268, 180, 42],
  tips : [],
  totalBill : [],
  calculateTips : function() {
    for (let index = 0; index < this.bills.length; index++) {
      amount = this.bills[index]
      switch(amount) {
        case amount < 50:
          this.tips.push(amount * 0.2)
        case amount >= 50 && amount <= 200:
          this.tips.push(amount * 0.15)
        default:
          this.tips.push(amount * 0.1)
      }      
      this.totalBill.push(this.tips[index] + this.bills[index])      
    }
  }
}

function calcAvg(tips) {
  sum = 0
  for (let index = 0; index < tips.length; index++) {
    sum += tips[index]    
  }
  return sum / tips.length
}

tipping.calculateTips()
console.log(tipping.tips)
console.log(tipping.totalBill)
console.log(calcAvg(tipping.tips))