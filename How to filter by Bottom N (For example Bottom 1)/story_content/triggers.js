function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5xYOxoXsbom":
        Script1();
        break;
      case "6i34lyTxUpX":
        Script2();
        break;
      case "6U4TfPoD5US":
        Script3();
        break;
      case "61qLH36wHpi":
        Script4();
        break;
      case "6CDUFLh7IaN":
        Script5();
        break;
      case "5VSFSEJBCmF":
        Script6();
        break;
      case "5r8pebRGCoN":
        Script7();
        break;
      case "6KcURdWAUdk":
        Script8();
        break;
      case "5lYKV52AZrj":
        Script9();
        break;
      case "6Y31lc4JNmt":
        Script10();
        break;
      case "6Snz2JqEGK4":
        Script11();
        break;
      case "5c28efsKbs4":
        Script12();
        break;
      case "5foEdAQpdw2":
        Script13();
        break;
      case "6lC3CB8R9OV":
        Script14();
        break;
      case "64Zh3m0kkaJ":
        Script15();
        break;
      case "61KIGVfM1Ej":
        Script16();
        break;
      case "6RDR9bTPP8c":
        Script17();
        break;
      case "5oxVaP6CgP6":
        Script18();
        break;
      case "62PjKVwekVG":
        Script19();
        break;
      case "5aAI4l9eqyP":
        Script20();
        break;
      case "5fZZw7ydp5v":
        Script21();
        break;
      case "5ZuJhqayEQZ":
        Script22();
        break;
      case "63o0vNzss2A":
        Script23();
        break;
      case "6rVsmdYp9Oy":
        Script24();
        break;
      case "6FlB1W0afMn":
        Script25();
        break;
      case "6QpvlWaRFid":
        Script26();
        break;
      case "5ubvCdvcE7P":
        Script27();
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

};
