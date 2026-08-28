function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5xNeHsIpzQJ":
        Script1();
        break;
      case "6Y3pGCXD2wk":
        Script2();
        break;
      case "6DkuC9PcZPM":
        Script3();
        break;
      case "5kszWuPGyQ1":
        Script4();
        break;
      case "6oh5HQoiy6X":
        Script5();
        break;
      case "5ZWFYMiXScY":
        Script6();
        break;
      case "5kJ5XS1K62r":
        Script7();
        break;
      case "69YbjKLjP2O":
        Script8();
        break;
      case "6YE1axoZahE":
        Script9();
        break;
      case "6b4O9MTv5Mh":
        Script10();
        break;
      case "6h8iiKIsbCk":
        Script11();
        break;
      case "5sOXszEfdgA":
        Script12();
        break;
      case "6eod3Q3um3I":
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
const target = object('5qJzbPpwPDc');
const duration = 750;
const easing = 'ease-out';
const id = '5slVwBhhJSe';
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

window.Script2 = function()
{
  player.once(() => {
const target = object('6CcnmGyJDGe');
const duration = 750;
const easing = 'ease-out';
const id = '5slVwBhhJSe';
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
