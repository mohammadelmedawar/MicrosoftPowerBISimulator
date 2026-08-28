function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6goEEQSynf0":
        Script1();
        break;
      case "6Gant84exHs":
        Script2();
        break;
      case "5s6VzVRKi3x":
        Script3();
        break;
      case "6G1amVUGF6h":
        Script4();
        break;
      case "60Eig7ZncLK":
        Script5();
        break;
      case "6gfJEC0UlfJ":
        Script6();
        break;
      case "5rFbvedWouv":
        Script7();
        break;
      case "6Ul9P5hOprk":
        Script8();
        break;
      case "6BH47J6R4E3":
        Script9();
        break;
      case "5m5cItUpHkx":
        Script10();
        break;
      case "6I6aHIKV0It":
        Script11();
        break;
      case "6pGfAulEafy":
        Script12();
        break;
      case "5znXiSFOh7A":
        Script13();
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
const target = object('6ICbaAqpfSP');
const duration = 750;
const easing = 'ease-out';
const id = '6Zw98JUSskO';
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

window.Script2 = function()
{
  player.once(() => {
const target = object('62GZiogMlAA');
const duration = 750;
const easing = 'ease-out';
const id = '62ES4bfgINX';
const shakeAmount = 2;
const delay = 500;
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
const target = object('5mSYxYTmhsG');
const duration = 750;
const easing = 'ease-out';
const id = '5s3OZeuR4rj';
const shakeAmount = 2;
const delay = 750;
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
const target = object('6BIwYLD1QEh');
const duration = 750;
const easing = 'ease-out';
const id = '6iyxk04EqRp';
const shakeAmount = 2;
const delay = 1000;
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
