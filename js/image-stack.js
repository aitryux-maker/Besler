/* ============================================
   Vertical Image Stack — vanilla JS
   Adapted from React VerticalImageStack component
   ============================================ */
(function () {
  const stack = document.getElementById('imageStack');
  if (!stack) return;

  const cards = Array.from(stack.querySelectorAll('.stack-card'));
  const dots = document.querySelectorAll('#stackDots .stack-dot');
  const counterCurrent = document.querySelector('.stack-counter-current');
  const total = cards.length;

  let currentIndex = 0;
  let lastNav = 0;
  const cooldown = 400;

  function getCardTransform(index) {
    let diff = index - currentIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    if (diff === 0) {
      return { y: 0, scale: 1, opacity: 1, z: 5, rx: 0 };
    } else if (diff === -1) {
      return { y: -140, scale: 0.82, opacity: 0.6, z: 4, rx: 8 };
    } else if (diff === -2) {
      return { y: -240, scale: 0.7, opacity: 0.3, z: 3, rx: 15 };
    } else if (diff === 1) {
      return { y: 140, scale: 0.82, opacity: 0.6, z: 4, rx: -8 };
    } else if (diff === 2) {
      return { y: 240, scale: 0.7, opacity: 0.3, z: 3, rx: -15 };
    } else {
      return {
        y: diff > 0 ? 360 : -360,
        scale: 0.6,
        opacity: 0,
        z: 0,
        rx: diff > 0 ? -20 : 20,
      };
    }
  }

  function render() {
    cards.forEach(function (card, i) {
      var s = getCardTransform(i);
      card.style.transform =
        'translate(-50%, -50%) translateY(' + s.y + 'px) scale(' + s.scale + ') rotateX(' + s.rx + 'deg)';
      card.style.opacity = s.opacity;
      card.style.zIndex = s.z;
      card.style.pointerEvents = i === currentIndex ? 'auto' : 'none';
    });

    dots.forEach(function (dot, i) {
      dot.classList.toggle('active', i === currentIndex);
    });

    if (counterCurrent) {
      counterCurrent.textContent = String(currentIndex + 1).padStart(2, '0');
    }
  }

  function navigate(dir) {
    var now = Date.now();
    if (now - lastNav < cooldown) return;
    lastNav = now;

    if (dir > 0) {
      currentIndex = currentIndex === total - 1 ? 0 : currentIndex + 1;
    } else {
      currentIndex = currentIndex === 0 ? total - 1 : currentIndex - 1;
    }
    render();
  }

  function goTo(idx) {
    if (idx === currentIndex) return;
    var now = Date.now();
    if (now - lastNav < cooldown) return;
    lastNav = now;
    currentIndex = idx;
    render();
  }

  /* --- Wheel --- */
  var stackRect;
  function updateRect() {
    stackRect = stack.closest('.image-stack-wrapper').getBoundingClientRect();
  }
  window.addEventListener('resize', updateRect);
  updateRect();

  window.addEventListener('wheel', function (e) {
    /* only respond when the stack is in view */
    updateRect();
    if (
      e.clientX >= stackRect.left &&
      e.clientX <= stackRect.right &&
      e.clientY >= stackRect.top &&
      e.clientY <= stackRect.bottom
    ) {
      if (Math.abs(e.deltaY) > 30) {
        e.preventDefault();
        navigate(e.deltaY > 0 ? 1 : -1);
      }
    }
  }, { passive: false });

  /* --- Touch / drag on current card --- */
  var startY = 0;
  var dragging = false;

  stack.addEventListener('pointerdown', function (e) {
    var card = e.target.closest('.stack-card');
    if (!card || Number(card.dataset.index) !== currentIndex) return;
    startY = e.clientY;
    dragging = true;
    card.setPointerCapture(e.pointerId);
  });

  stack.addEventListener('pointermove', function (e) {
    /* visual feedback could be added here */
  });

  stack.addEventListener('pointerup', function (e) {
    if (!dragging) return;
    dragging = false;
    var dy = e.clientY - startY;
    if (Math.abs(dy) > 40) {
      navigate(dy < 0 ? 1 : -1);
    }
  });

  /* --- Dots --- */
  dots.forEach(function (dot) {
    dot.addEventListener('click', function () {
      goTo(Number(dot.dataset.goto));
    });
  });

  /* --- Init --- */
  render();
})();
