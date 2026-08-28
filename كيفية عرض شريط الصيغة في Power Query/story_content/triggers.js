function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5kCVq8KPlLm":
        Script1();
        break;
      case "6p0XZ5w0nOl":
        Script2();
        break;
      case "6UaDKYQqWMW":
        Script3();
        break;
      case "60GizeZkQRS":
        Script4();
        break;
      case "6iBytCAhXRC":
        Script5();
        break;
      case "6XoUqS4kssC":
        Script6();
        break;
      case "6fLrmZutkJ3":
        Script7();
        break;
      case "5tiRiLEgkle":
        Script8();
        break;
      case "5rg1ULwBbGP":
        Script9();
        break;
      case "5tdlK4DCc8s":
        Script10();
        break;
      case "5ZrEGL2EJIv":
        Script11();
        break;
      case "5mabbzOTt8Y":
        Script12();
        break;
      case "6MFGUY7UGRR":
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
const target = object('6gXSngFirdJ');
const duration = 750;
const easing = 'ease-out';
const id = '5qShSNqnyTe';
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
const target = object('6FYvJPbal94');
const duration = 750;
const easing = 'ease-out';
const id = '6UuQlvh9Hwj';
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
