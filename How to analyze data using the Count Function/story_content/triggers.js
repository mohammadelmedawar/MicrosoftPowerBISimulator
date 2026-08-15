function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6ltHjIxkydA":
        Script1();
        break;
      case "65vQVUqgUtB":
        Script2();
        break;
      case "6UcxO24gePL":
        Script3();
        break;
      case "6Q4HQzWdWVQ":
        Script4();
        break;
      case "5vCnOdSxLQH":
        Script5();
        break;
      case "6gSSSrJ3wG3":
        Script6();
        break;
      case "65ijeSHsG90":
        Script7();
        break;
      case "6J6ylUnMrXc":
        Script8();
        break;
      case "5UmOUyECHpw":
        Script9();
        break;
      case "5sGiyuGuqA1":
        Script10();
        break;
      case "5yRuh8bHteI":
        Script11();
        break;
      case "67n2jW9j9Cc":
        Script12();
        break;
      case "6Qwfnj8sOzW":
        Script13();
        break;
      case "6XMBcYOwKrQ":
        Script14();
        break;
      case "6WZf3UDr1Ch":
        Script15();
        break;
      case "5tfxjz5RGYz":
        Script16();
        break;
      case "6cuNqw5dF8H":
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
