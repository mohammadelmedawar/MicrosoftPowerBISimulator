function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6qbpmvT1kzI":
        Script1();
        break;
      case "6OHKCfHuOwJ":
        Script2();
        break;
      case "6Sv0bxOsH7i":
        Script3();
        break;
      case "6iQLpDLS5OP":
        Script4();
        break;
      case "5v2oYEyLEAg":
        Script5();
        break;
      case "5u92UtF9LCS":
        Script6();
        break;
      case "6UL1UCxXAXD":
        Script7();
        break;
      case "68Z9NTCruhI":
        Script8();
        break;
      case "6OEHV5sIBgU":
        Script9();
        break;
      case "5hpAawcveyB":
        Script10();
        break;
      case "6RXm6tikfGO":
        Script11();
        break;
      case "6XykNfVq7Xa":
        Script12();
        break;
      case "5fK8pZPrH7U":
        Script13();
        break;
      case "6fYKKAfNvgv":
        Script14();
        break;
      case "6ELyEZqmRIw":
        Script15();
        break;
      case "6IRlvLne48z":
        Script16();
        break;
      case "6ZA9a2I4H7S":
        Script17();
        break;
      case "61R4vQF1IvT":
        Script18();
        break;
      case "5Xvh1URvq1N":
        Script19();
        break;
      case "6MkRpBCoiNz":
        Script20();
        break;
      case "60dTdSgSBQk":
        Script21();
        break;
      case "6fEoeVatF8z":
        Script22();
        break;
      case "6E2ypwnLXQb":
        Script23();
        break;
      case "5x0N1GZhonu":
        Script24();
        break;
      case "5XPa1DTkmQT":
        Script25();
        break;
      case "635gjpZl6JN":
        Script26();
        break;
      case "67hrqqG40o7":
        Script27();
        break;
      case "6VwINNqdToM":
        Script28();
        break;
      case "6V2DNxTkjtW":
        Script29();
        break;
      case "6BqipCRTjmp":
        Script30();
        break;
      case "5ul5nEf10Rq":
        Script31();
        break;
      case "5UkWC4UEV7T":
        Script32();
        break;
      case "6OJAL86GBG6":
        Script33();
        break;
      case "6RxHteJCgAp":
        Script34();
        break;
      case "6mrIQGrcQI4":
        Script35();
        break;
      case "5oJwVwzrL8b":
        Script36();
        break;
      case "5Y0BL4bCU0D":
        Script37();
        break;
      case "5jYdTNsMu7F":
        Script38();
        break;
      case "6AFulwNKqEL":
        Script39();
        break;
      case "6ftxxxxK6PZ":
        Script40();
        break;
      case "5avRle7Ql0z":
        Script41();
        break;
      case "6ddQ87l8dsB":
        Script42();
        break;
      case "5zL9vbRpwht":
        Script43();
        break;
      case "6VpFR2hIus5":
        Script44();
        break;
      case "5yYiDiuOMJ7":
        Script45();
        break;
      case "6cQ9SiF87au":
        Script46();
        break;
      case "60Hrktc2bPD":
        Script47();
        break;
      case "6HAVbwbqJLR":
        Script48();
        break;
      case "6hOJEmnYeAG":
        Script49();
        break;
      case "652HRczwEyX":
        Script50();
        break;
      case "5l5ZK8odZ1j":
        Script51();
        break;
      case "6OMQGrCC3N3":
        Script52();
        break;
      case "61q7ppvnY5F":
        Script53();
        break;
      case "6a1VsPjrX2X":
        Script54();
        break;
      case "6AyrMozbN7s":
        Script55();
        break;
      case "66sXQH3QMDa":
        Script56();
        break;
      case "5n2KtlYB4Wq":
        Script57();
        break;
      case "5vVP8rYMDpt":
        Script58();
        break;
      case "6WraZ0D4Btp":
        Script59();
        break;
      case "6kZNSk2vVmh":
        Script60();
        break;
      case "5qBkfxikEAt":
        Script61();
        break;
      case "5f0fq60lO0N":
        Script62();
        break;
      case "6dPjeV0xdk7":
        Script63();
        break;
      case "6Xpl9rjbgG6":
        Script64();
        break;
      case "6qorxNAQh3b":
        Script65();
        break;
      case "67Ydg5qZp1C":
        Script66();
        break;
      case "5Wx4uE59IEr":
        Script67();
        break;
      case "6dzVSBx3vMc":
        Script68();
        break;
      case "5yeTrzJbLSJ":
        Script69();
        break;
      case "5iPpoXR0sT6":
        Script70();
        break;
      case "5w2ojBNtZpN":
        Script71();
        break;
      case "5cjrW6c0hzu":
        Script72();
        break;
      case "6OOFWpiUlej":
        Script73();
        break;
      case "6kkpL3S8TiM":
        Script74();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  player.once(() => {
const target = object('5bUagXNICeM');
const duration = 750;
const easing = 'ease-out';
const id = '6lGyykdsAYG';
const shakeAmount = 2;
const delay = 250;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  player.once(() => {
const target = object('6eye4zD4N2J');
const duration = 750;
const easing = 'ease-out';
const id = '5bsZKaQOtuA';
const shakeAmount = 2;
const delay = 0;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script3 = function()
{
  player.once(() => {
const target = object('5ocTIvfj01k');
const duration = 750;
const easing = 'ease-out';
const id = '5dzPPVhxegP';
const shakeAmount = 2;
const delay = 0;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script4 = function()
{
  player.once(() => {
const target = object('5qdFrqjLG13');
const duration = 750;
const easing = 'ease-out';
const id = '6qN3kiGGD0N';
const shakeAmount = 2;
const delay = 0;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script5 = function()
{
  player.once(() => {
const target = object('6KWGjj3GXUB');
const duration = 750;
const easing = 'ease-out';
const id = '6Dcj1qOt0sC';
const shakeAmount = 2;
const delay = 0;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
