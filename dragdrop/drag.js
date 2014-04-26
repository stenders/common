// Generated by CoffeeScript 1.7.1
(function() {
  var Dragdrop;

  Dragdrop = (function() {
    function Dragdrop(selector) {
      var that;
      this.div = document.getElementById(selector);
      this.diffX = this.diffY = 0;
      that = this;
      this.div.onmousedown = function(e) {
        e = that.getEvent(e);
        that.diffX = e.offsetX;
        that.diffY = e.offsetY;
        document.onmousemove = function(e) {
          e = that.getEvent(e);
          that.div.style.left = e.clientX - that.diffX + 'px';
          return that.div.style.top = e.clientY - that.diffY + 'px';
        };
        document.onmouseup = function(e) {
          return document.onmousemove = document.onmouseup = null;
        };
        return false;
      };
    }

    Dragdrop.prototype.getEvent = function(event) {
      return event || window.event;
    };

    return Dragdrop;

  })();

  new Dragdrop('drag');

}).call(this);