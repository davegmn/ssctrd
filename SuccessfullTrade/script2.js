document.addEventListener('DOMContentLoaded', function() {
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function onVisibilityChange(el, callback) {
      return function() {
        if (isElementInViewport(el)) {
          callback(el);
        }
      }
    }

    var elements = document.querySelectorAll('.feature__content');
    var handler = function(el) {
      el.classList.add('visible');
    };

    elements.forEach(function(element) {
      window.addEventListener('scroll', onVisibilityChange(element, handler));
    });

    // Trigger the event once to show elements already in view
    window.dispatchEvent(new Event('scroll'));
  });