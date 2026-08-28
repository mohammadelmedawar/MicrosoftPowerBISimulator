function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6ex9vhBbrv2":
        Script1();
        break;
      case "6b6zkMUKgXi":
        Script2();
        break;
      case "5lnbU2IM9gG":
        Script3();
        break;
      case "6pLqFbuh00B":
        Script4();
        break;
      case "6BK4tO8ik0I":
        Script5();
        break;
      case "6Y6Wb3Bi8jF":
        Script6();
        break;
      case "6Y93e7Kqdd8":
        Script7();
        break;
      case "5oNZcZHX21m":
        Script8();
        break;
      case "5fR0Fe2LgOQ":
        Script9();
        break;
      case "5eZDuCnO4OS":
        Script10();
        break;
      case "67UDHnSIson":
        Script11();
        break;
      case "5Wq99Bq5L1w":
        Script12();
        break;
      case "5k50btvrWA4":
        Script13();
        break;
      case "5srH9ouYq5u":
        Script14();
        break;
      case "5g56ZKl5O40":
        Script15();
        break;
      case "6O8YFaQvneO":
        Script16();
        break;
      case "5eiSbz3bWYk":
        Script17();
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
const target = object('5Y63KcUs1uS');
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
const target = object('6TLwLmIhnMm');
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
