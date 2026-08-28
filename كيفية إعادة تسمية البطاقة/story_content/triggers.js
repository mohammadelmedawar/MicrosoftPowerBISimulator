function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6JsccEeGVEL":
        Script1();
        break;
      case "63vrlv5PTFa":
        Script2();
        break;
      case "5kXiAu76QCI":
        Script3();
        break;
      case "6HlAD01iKec":
        Script4();
        break;
      case "6ia1eRIcYPk":
        Script5();
        break;
      case "68nDOg9n7T5":
        Script6();
        break;
      case "6f1971JAcGU":
        Script7();
        break;
      case "6BJty6lPr1R":
        Script8();
        break;
      case "6FJQfVn8rHJ":
        Script9();
        break;
      case "6k8qdcCXTng":
        Script10();
        break;
      case "6kTbwYmualK":
        Script11();
        break;
      case "6hCTYOQQsF0":
        Script12();
        break;
      case "5yBbf1VAHP1":
        Script13();
        break;
      case "6CGLGseBITT":
        Script14();
        break;
      case "5YGbNqHSMr0":
        Script15();
        break;
      case "6UHs3sNalpT":
        Script16();
        break;
      case "6h0uh1QO76A":
        Script17();
        break;
      case "5i6TswAMZUF":
        Script18();
        break;
      case "6pCH8QeDgtm":
        Script19();
        break;
      case "6Hq5pwSHain":
        Script20();
        break;
      case "5gocLOpkydd":
        Script21();
        break;
      case "6OPp7j6MxNu":
        Script22();
        break;
      case "5bVDwepKSNl":
        Script23();
        break;
      case "6GX7jVMKK4J":
        Script24();
        break;
      case "5hv2EGicoha":
        Script25();
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
const target = object('6GfmNA3gk1y');
const duration = 750;
const easing = 'ease-out';
const id = '6FfJyAFAb3P';
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
const target = object('6VloFkKVlhu');
const duration = 750;
const easing = 'ease-out';
const id = '5of9MjnMr3R';
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
