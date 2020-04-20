function init2D() {
  const canvas = document.querySelector('canvas');
  const c2 = canvas.getContext('2d', {desynchronized: true, alpha: false});

  const setSizeAndRotation = () => {
    const angle = screen.orientation.angle % 360;
    canvas.style.transform = `rotateZ(${angle}deg)`;
    const dpr = devicePixelRatio;

    var dp_width = window.innerWidth;
    var dp_height = window.innerHeight;
    var pixel_width = Math.floor(dp_width * dpr);
    var pixel_height = Math.floor(dp_height * dpr);
    console.log('update:' + angle + ", size=" + dp_width + "x" + dp_height +
		" angle=" + screen.orientation.angle);

    if (angle % 180 == 90) {
      canvas.style.width = `${dp_height}px`;
      canvas.style.height = `${dp_width}px`;
      var offset = (dp_height - dp_width) / 2;
      canvas.style.left = `-${offset}px`;
      canvas.style.top = `${offset}px`;
      canvas.height = pixel_width;
      canvas.width = pixel_height;
    } else {
      canvas.style.width = `${dp_width}px`;
      canvas.style.height = `${dp_height}px`;
      canvas.style.left = "0px";
      canvas.style.top = "0px";
      canvas.width  = pixel_width;
      canvas.height = pixel_height;
    }

    c2.fillStyle = 'rgb(255,255,0)';
    c2.fillRect(0, 0, pixel_width, pixel_height);
    c2.strokeStyle = 'rgb(255,0,0)';
    c2.strokeRect(0, 0, pixel_width, pixel_height);

    c2.fillStyle = 'rgb(255,255,255)';
    c2.fillRect(100, 100, 200, 200);

    // Text
    c2.fillStyle = 'rgb(255,255,255)';
    c2.font = "40px Arial";
    c2.fillText(`pixel size=${pixel_width}x${pixel_height} dp size=${dp_width}x${dp_height} dpr=${dpr} angle=${angle}`, 10, 50);
    c2.strokeStyle = 'rgb(0,0,0)';
    c2.strokeText(`pixel size=${pixel_width}x${pixel_height} dp size=${dp_width}x${dp_height} dpr=${dpr} angle=${angle}`, 10, 50);

  };
  screen.orientation.addEventListener('change', setSizeAndRotation);
  window.addEventListener('resize',  setSizeAndRotation);
  setSizeAndRotation();
}
