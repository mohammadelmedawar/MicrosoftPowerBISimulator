function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6S3c8rletxu":
        Script1();
        break;
      case "6laa0tiL6Lu":
        Script2();
        break;
      case "6KBaLEgOPc5":
        Script3();
        break;
      case "5YnU0e8u2Gj":
        Script4();
        break;
      case "5Wm3rGYXIap":
        Script5();
        break;
      case "6qXBOAbnXpP":
        Script6();
        break;
      case "668zNmQEZqQ":
        Script7();
        break;
      case "5sBP3KKrzmC":
        Script8();
        break;
      case "5ge0okXQaWf":
        Script9();
        break;
      case "6CEWh5BjyMm":
        Script10();
        break;
      case "6a5xaB4oyZk":
        Script11();
        break;
      case "6reAVCGFPJF":
        Script12();
        break;
      case "6mQGOCwhUGI":
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
