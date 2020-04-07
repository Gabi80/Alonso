let data=[
{principal: "2500", time: "1.8"},
{principal: "1000", time: "5"},
{principal: "3000", time: "1"},
{principal: "2000", time: "3"}
];
function interestCalculator(data) {
let interestData = [];
for (let i = 0; i < data.length; i++) {
let principal = data[i].principal;
let time = data[i].time;
if (principal>=2500 && time>1 && time<3) {
let rate=3;
interest=(principal*rate*time)/100;

newData={principal:principal, rate:rate, time:time, interest:interest};
interestData.push(newData);
}
else if (principal>=2500 && time>=3) {
let rate=4;
interest=(principal*rate*time)/100;

newData={principal:principal, rate:rate, time:time, interest:interest};
interestData.push(newData);
}
else if (principal<2500 || time<=1) {
let rate=2;
interest=(principal*rate*time)/100;

newData={principal:principal, rate:rate, time:time, interest:interest};
interestData.push(newData);
}
else{
let rate=1;
interest=(principal*rate*time)/100;

newData={principal:principal, rate:rate, time:time, interest:interest};
interestData.push(newData);
}
}
console.log(interestData);
return interestData;

}
interestCalculator(data);
