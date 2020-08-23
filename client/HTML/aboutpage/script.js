; (function () {
  var throttle = function (type, name, obj) {
    var obj = obj || window;
    var running = false;
    var func = function () {
      if (running) { return; }
      running = true;
      requestAnimationFrame(function () {
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  };
  throttle("scroll", "optimizedScroll");
})();

var rOne = document.getElementById("fOne"),
  rTwo = document.getElementById("fTwo"),
  rThree = document.getElementById("fThree");

window.addEventListener("scroll", function () {
  rOne.style.transform = "translate(50%,-50%) rotate(" + window.pageYOffset + "deg)";
  rTwo.style.transform = "translate(50%,-50%) rotate(-" + window.pageYOffset + "deg)";
  rThree.style.transform = "translate(50%,-50%) rotate(" + window.pageYOffset + "deg)";
});
