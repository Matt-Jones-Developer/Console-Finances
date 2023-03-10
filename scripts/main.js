/*
Working with arrays - writing a program that outputs financial data
as set in the acceptance criteria.

Please note; my solution corresponds to the initial criteria output, 
not the revised (confused?) one.
*/

// the finances dataset (multi-dimensional array)

let finances = [
    ['Jan-2010', 867884],
    ['Feb-2010', 984655],
    ['Mar-2010', 322013],
    ['Apr-2010', -69417],
    ['May-2010', 310503],
    ['Jun-2010', 522857],
    ['Jul-2010', 1033096],
    ['Aug-2010', 604885],
    ['Sep-2010', -216386],
    ['Oct-2010', 477532],
    ['Nov-2010', 893810],
    ['Dec-2010', -80353],
    ['Jan-2011', 779806],
    ['Feb-2011', -335203],
    ['Mar-2011', 697845],
    ['Apr-2011', 793163],
    ['May-2011', 485070],
    ['Jun-2011', 584122],
    ['Jul-2011', 62729],
    ['Aug-2011', 668179],
    ['Sep-2011', 899906],
    ['Oct-2011', 834719],
    ['Nov-2011', 132003],
    ['Dec-2011', 309978],
    ['Jan-2012', -755566],
    ['Feb-2012', 1170593],
    ['Mar-2012', 252788],
    ['Apr-2012', 1151518],
    ['May-2012', 817256],
    ['Jun-2012', 570757],
    ['Jul-2012', 506702],
    ['Aug-2012', -1022534],
    ['Sep-2012', 475062],
    ['Oct-2012', 779976],
    ['Nov-2012', 144175],
    ['Dec-2012', 542494],
    ['Jan-2013', 359333],
    ['Feb-2013', 321469],
    ['Mar-2013', 67780],
    ['Apr-2013', 471435],
    ['May-2013', 565603],
    ['Jun-2013', 872480],
    ['Jul-2013', 789480],
    ['Aug-2013', 999942],
    ['Sep-2013', -1196225],
    ['Oct-2013', 268997],
    ['Nov-2013', -687986],
    ['Dec-2013', 1150461],
    ['Jan-2014', 682458],
    ['Feb-2014', 617856],
    ['Mar-2014', 824098],
    ['Apr-2014', 581943],
    ['May-2014', 132864],
    ['Jun-2014', 448062],
    ['Jul-2014', 689161],
    ['Aug-2014', 800701],
    ['Sep-2014', 1166643],
    ['Oct-2014', 947333],
    ['Nov-2014', 578668],
    ['Dec-2014', 988505],
    ['Jan-2015', 1139715],
    ['Feb-2015', 1029471],
    ['Mar-2015', 687533],
    ['Apr-2015', -524626],
    ['May-2015', 158620],
    ['Jun-2015', 87795],
    ['Jul-2015', 423389],
    ['Aug-2015', 840723],
    ['Sep-2015', 568529],
    ['Oct-2015', 332067],
    ['Nov-2015', 989499],
    ['Dec-2015', 778237],
    ['Jan-2016', 650000],
    ['Feb-2016', -1100387],
    ['Mar-2016', -174946],
    ['Apr-2016', 757143],
    ['May-2016', 445709],
    ['Jun-2016', 712961],
    ['Jul-2016', -1163797],
    ['Aug-2016', 569899],
    ['Sep-2016', 768450],
    ['Oct-2016', 102685],
    ['Nov-2016', 795914],
    ['Dec-2016', 60988],
    ['Jan-2017', 138230],
    ['Feb-2017', 671099]
    ];


// 1. Total number of months

// store total
let totalMonths = 0;
// iterate through the length of entries
for (let i = 0; i < finances.length; i++) {
    // adding 1 to count for each loop
    totalMonths++;
}


// 2. Net Total over period

// store net
let netTotal = 0
// iterate through the length of entries
for (let i = 0; i < finances.length; i++) {
    // add each indexed value to netTotal
    netTotal += finances[i][1];
}

// 3. average of the changes over period


// 3A: find the 'changes' between each month (x85)
let changes = []

// start from 1, since ~Jan2010 has no previous
for (let i = 1; i < finances.length; i++) {
    // var (e) = currentMonth - previousMonth
    const e = finances[i][1] - finances[i-1][1];
    // push result to new array
    changes.push(e);
}

// 3B: find the averageChange figure from 'changes' total

// store average 
let average = 0;
// iterate through each change
for (let i = 0; i < changes.length; i++) {
    // add the change to average /85
    average += changes[i] /85;
}
// log average 
// console.log(average)
// log friendly - correct decimals using toFixed
let averageChange = average.toFixed(2)


// 4. find the largest increase in profits (date and amount)

// current largest increase (month 1)
let greatestIncrease = finances[1][1] - finances[0][1];
// add a date variable - starting at month 2 (current)
let date = finances[1][0];


// iterate through finances
// ignore first entry
for (let i = 1; i < finances.length; i++) {
                    // current   -   // previous
    // store current - previous 
    let e = finances[i][1] - finances[i-1][1];
    // IF greatestIncrease > (finances[i][1] - finances[i-1][1] 
    if (greatestIncrease > e) {
        // set greatestIncrease = greatestIncrease
        greatestIncrease = greatestIncrease;
        // debug
        // console.log(greatestIncrease)
    }
    else {
        // add the new value from e
        greatestIncrease = e;
        // add corresponding date index
        date = finances[i][0];

        // debug else only - proves my code works and will not add a value lower than current high i.e Nov-2016
        // console.log(date)
        // console.log(greatestIncrease)
    }
}

// 5. calculate the greatest DECREASE 

// the largest decrease (month 1)
let greatestDecrease = finances[1][1] - finances[0][1];
// add a date - starting at month 2
let dateDecrease = finances[1][0];


// iterate through finances array
for (let i = 1; i < finances.length; i++) {
                    // current   -   // previous
    let e = finances[i][1] - finances[i-1][1];
    // IF greatestDecrease < (finances[i][1] - finances[i-1][1] 
    if (greatestDecrease < e) {
        // set greatestDecrease = greatestDecrease
        greatestDecrease = greatestDecrease;

    } else {
        // set new greatestDecrease
        greatestDecrease = e;
        // find the date
        dateDecrease = finances[i][0]; 

    }
}

// interpolated console log output 

console.log(`
Financial Analysis
-------------------

Total Months: ${totalMonths}
Total: $${netTotal}
Average Change: $${averageChange}
Greatest Increase: ${date} $${greatestIncrease}
Greatest Decrease: ${dateDecrease} $${greatestDecrease}

`)