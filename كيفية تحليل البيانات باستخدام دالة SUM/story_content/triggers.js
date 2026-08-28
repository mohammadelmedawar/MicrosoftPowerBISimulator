function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6CRZpF3A7LP":
        Script1();
        break;
      case "5yFeIyEtpzQ":
        Script2();
        break;
      case "6NFtaP7ayOo":
        Script3();
        break;
      case "6eliJwJUzH5":
        Script4();
        break;
      case "5vaopGMJ4P7":
        Script5();
        break;
      case "5ns9hJuV2hG":
        Script6();
        break;
      case "5dmR5E7bFR5":
        Script7();
        break;
      case "6eApumafUoJ":
        Script8();
        break;
      case "5ffKzxVehRk":
        Script9();
        break;
      case "6OurqK1qzLA":
        Script10();
        break;
      case "6MzavnaftKC":
        Script11();
        break;
      case "6XUeKIijm2p":
        Script12();
        break;
      case "64NtQfbQOO7":
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
const target = object('6aZQwIgwQPE');
const duration = 750;
const easing = 'ease-out';
const id = '6Ogkg8PmM6S';
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
const target = object('5epOoDxZ2kr');
const duration = 750;
const easing = 'ease-out';
const id = '5xge0hmFItC';
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
