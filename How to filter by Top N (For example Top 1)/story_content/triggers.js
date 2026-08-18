function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6jq92Xa5WTE":
        Script1();
        break;
      case "6mPmTLcGPpa":
        Script2();
        break;
      case "5orlzvVmhlV":
        Script3();
        break;
      case "6WbWjhhkRuz":
        Script4();
        break;
      case "6FGdLIteQGm":
        Script5();
        break;
      case "6oIOHiR2rJ1":
        Script6();
        break;
      case "5kUEWS1im1j":
        Script7();
        break;
      case "66ZKBK2BF1A":
        Script8();
        break;
      case "5wK6WpeO44v":
        Script9();
        break;
      case "6NaKA5tAEMR":
        Script10();
        break;
      case "6pWhsZIv190":
        Script11();
        break;
      case "5rNibQJ6gSV":
        Script12();
        break;
      case "68yV6fXawrI":
        Script13();
        break;
      case "6O0N5pDDJTe":
        Script14();
        break;
      case "6GS9DD6IbnT":
        Script15();
        break;
      case "6Z0zkO2k4re":
        Script16();
        break;
      case "5smROWm9Bpk":
        Script17();
        break;
      case "5ZGBfwOhwl9":
        Script18();
        break;
      case "6kkN3bSLpCJ":
        Script19();
        break;
      case "6JI858dPl9Z":
        Script20();
        break;
      case "6GGlhguMtgF":
        Script21();
        break;
      case "6HpRFiw1Jtr":
        Script22();
        break;
      case "5mZmxhaih6Q":
        Script23();
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
const target = object('6iMT9OgmdAC');
const duration = 750;
const easing = 'ease-out';
const id = '6Pj9oj5SFMH';
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
const target = object('5xLwwev5Jxe');
const duration = 750;
const easing = 'ease-out';
const id = '5g7gVO2qksx';
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

};
