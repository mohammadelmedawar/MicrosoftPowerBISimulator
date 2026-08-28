function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6PbT5axB3sH":
        Script1();
        break;
      case "6XJV22qpAzy":
        Script2();
        break;
      case "6Qygvk7geIV":
        Script3();
        break;
      case "6mE9T8JNgqo":
        Script4();
        break;
      case "5zkXFTKKutN":
        Script5();
        break;
      case "5opIRbDK4Mb":
        Script6();
        break;
      case "5ilE2apXkiE":
        Script7();
        break;
      case "5mne7wZIKSV":
        Script8();
        break;
      case "65LGIgh41DG":
        Script9();
        break;
      case "6lgYw0nGEtF":
        Script10();
        break;
      case "6TZPgw4TvVa":
        Script11();
        break;
      case "5W4YJKHHUz2":
        Script12();
        break;
      case "611otbCFLT1":
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
const target = object('5srNa85C3Lt');
const duration = 750;
const easing = 'ease-out';
const id = '60ab20zto6q';
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

window.Script2 = function()
{
  player.once(() => {
const target = object('6kNpZgqK62K');
const duration = 750;
const easing = 'ease-out';
const id = '6kbEeVwG6Kd';
const shakeAmount = 2;
const delay = 1250;
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
