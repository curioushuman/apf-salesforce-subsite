$(document).ready(function() {

  var $element = $('input[type="range"]');
  var $handle;
  var $ruler = $('<div class="rangeslider__ruler" />');

  $element
    .rangeslider({
      polyfill: false,
      onInit: function() {

        // handle
        $handle = $('.rangeslider__handle', this.$range);
        updateHandle($handle[0], this.value);

        // ruler
        $ruler[0].innerHTML = getRulerRange(this.min, this.max, this.step);
        this.$range.prepend($ruler);
      }
    })
    .on('input', function() {
      updateHandle($handle[0], this.value);
    });

  function updateHandle(el, val) {
    el.textContent = val;
  }

  function getRulerRange(min, max, step) {
    var range = '';
    var i = min;

    while (i <= max) {
      range += i + ' ';
      i = i + step;
    }
    return range;
  }

});
