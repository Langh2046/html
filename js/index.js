// var i = 0;
//   var str = "不如不见面.";
//   //自动打字效果
//   function typing() {
//     var mydiv = document.getElementById("text");
//     document.getElementById("bar").style.cssText = "display:none";
//     mydiv.innerText = str.substring(0, i++) + (i > str.length ? "" : "|");
//     var typingTimer = setTimeout(typing, 200);
//     if (i > str.length) {
//       clearTimeout(typingTimer);
//       // 竖杠闪烁效果
//       var twinkleTimer = setInterval(twinkle, 200);
//       setTimeout(function () {
//         clearInterval(twinkleTimer);
//         document.getElementById("bar").style.cssText = "display:none";
//         //自动删除文字效果
//         deleteText();
//       }, 3000);
//     }
//   }
//   typing();
  
//   //自动删除文字效果
//   function deleteText() {
//     var mydiv = document.getElementById("text");
//     mydiv.innerText = str.substring(0, i--) + "|";
//     var deleteTextTimer = setTimeout(deleteText, 50);
//     if (i < 0) {
//       clearTimeout(deleteTextTimer);
//       //删除完后，自动打字，达到循环
//       typing();
//     }
//   }
  
//   // 竖杠闪烁效果
//   var flag = 0;
//   function twinkle() {
//     if (flag) {
//       document.getElementById("bar").style.cssText = "color:#fff;";
//       flag = 0;
//     } else {
//       document.getElementById("bar").style.cssText = "color:#ffffff47;";
//       flag = 1;
//     }
//   }