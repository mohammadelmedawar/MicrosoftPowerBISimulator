function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6i1iRmFbaTu":
        Script1();
        break;
      case "6JcmAk0N4N0":
        Script2();
        break;
      case "6VEvsxpxBMX":
        Script3();
        break;
      case "6iWMIWs0xHJ":
        Script4();
        break;
      case "6VkhdCcZ3JP":
        Script5();
        break;
      case "6leDnKLNc6u":
        Script6();
        break;
      case "6qF9QcXBqpn":
        Script7();
        break;
      case "6CkBMqgcwR2":
        Script8();
        break;
      case "6SZGURtNMXB":
        Script9();
        break;
      case "6k6YcaaTiE1":
        Script10();
        break;
      case "5XvGkVRoeju":
        Script11();
        break;
      case "6TMVjS4gvEy":
        Script12();
        break;
      case "5gvhZh7wE2b":
        Script13();
        break;
      case "6WfDed9j01t":
        Script14();
        break;
      case "6npyIIvsyoM":
        Script15();
        break;
      case "6Q9bT5Zw4jE":
        Script16();
        break;
      case "69hiuGgNxqU":
        Script17();
        break;
      case "6bvlAi1v6tm":
        Script18();
        break;
      case "6Fw0p2b5GxS":
        Script19();
        break;
      case "6DUkYqzJgO7":
        Script20();
        break;
      case "6OyronoPz2D":
        Script21();
        break;
      case "5u357cd2I3C":
        Script22();
        break;
      case "659kedJBl3E":
        Script23();
        break;
      case "5xeOcYpnIPS":
        Script24();
        break;
      case "6onD0RGa39x":
        Script25();
        break;
      case "5jpC8lo29rx":
        Script26();
        break;
      case "5uo0Aau8zX1":
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
