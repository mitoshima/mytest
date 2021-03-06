function initWebGL() {
  const canvas = document.querySelector('canvas');
  const gl = canvas.getContext('webgl', {desynchronized: true, alpha: false});

  gl.clearColor(1, 1, 0, 1);
  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.scissor(125, 63, 250, 125);
  gl.enable(gl.SCISSOR_TEST);

  let hue = 0;
  const raf = () => {
    hue += 1;
    r = Math.sin(0.05 * hue + 0) * 127 + 128;
    g = Math.sin(0.05 * hue + 2) * 127 + 128;
    b = Math.sin(0.05 * hue + 4) * 127 + 128;
    gl.clearColor(r / 255, g / 255, b / 255, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.flush();
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);

  const setSizeAndRotation = () => {
    const angle = screen.orientation.angle % 360;
    canvas.style.transform = `rotateZ(${angle}deg)`;
    const dpr = devicePixelRatio;
    //      canvas.style.border = `${1 / dpr}px solid black`;

    var dp_width = window.innerWidth;
    var dp_height = window.innerHeight;
    var pixel_width = Math.floor(dp_width * dpr);
    var pixel_height = Math.floor(dp_height * dpr);
    console.log('update:' + angle + ", size=" + dp_width + "x" + dp_height);

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
    /*
      c2.fillStyle = 'rgb(255,255,0)';
      c2.fillRect(0, 0, pixel_width, pixel_height);
      c2.strokeStyle = 'rgb(255,0,0)';
      c2.strokeRect(0, 0, pixel_width, pixel_height);

      c2.fillStyle = 'rgb(255,255,255)';
      c2.fillRect(100, 100, 200, 200);

      // Text
      c2.fillStyle = 'rgb(255,255,255)';
      c2.font = "40px Arial";
      c2.fillText(`pixel size=${pixel_width}x${pixel_height} dp size=${dp_width}x${dp_height} dpr=${dpr}`, 10, 50);
      c2.strokeStyle = 'rgb(0,0,0)';
      c2.strokeText(`pixel size=${pixel_width}x${pixel_height} dp size=${dp_width}x${dp_height} dpr=${dpr}`, 10, 50);
*/

    gl.disable(gl.SCISSOR_TEST);
    gl.clearColor(1, 1, 0.2, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.flush();
    gl.scissor(125, 63, 250, 125);
    //angle % 180 == 90 ? gl.scissor(63, 125, 125, 250)
    //    : gl.scissor(125, 63, 250, 125);
    gl.enable(gl.SCISSOR_TEST);
  };
  screen.orientation.addEventListener('change', setSizeAndRotation);
  window.addEventListener('resize',  setSizeAndRotation);
  setSizeAndRotation();
}
