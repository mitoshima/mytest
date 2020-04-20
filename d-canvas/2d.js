function init2D() {
  const canvas = document.querySelector('canvas');
  const c2 = canvas.getContext('2d', {desynchronized: true, alpha: false});

  const setSizeAndRotation = () => {
    const angle = screen.orientation.angle % 360;
    const dpr = devicePixelRatio;

    var dp_width = window.innerWidth;
    var dp_height = window.innerHeight;
    var pixel_width = Math.round(dp_width * dpr);
    var pixel_height = Math.round(dp_height * dpr);

    if (angle % 180 == 90) {
      canvas.style.width = `${dp_height}px`;
      canvas.style.height = `${dp_width}px`;
      canvas.style.left = `-${offset}px`;
      canvas.style.top = `${offset}px`;
      canvas.height = pixel_width;
      canvas.width = pixel_height;
      var tmp = pixel_height;
      pixel_height = pixel_width;
      pixel_width = tmp;
    } else {
      canvas.style.width = `${dp_width}px`;
      canvas.style.height = `${dp_height}px`;
      canvas.style.left = "0px";
      canvas.style.top = "0px";
      canvas.width  = pixel_width;
      canvas.height = pixel_height;
    }
    canvas.style.transform = `rotateZ(${angle}deg)`;
    switch (angle) {
      case 0:
	canvas.style.transformOrigin = "top left";
	canvas.style.left = "0px";
	canvas.style.top = "0px";
	break;
      case 90:
	canvas.style.transformOrigin = "top left";
	canvas.style.left = `${dp_height}px`;
	canvas.style.top = "0px";
	break;
      case 180:
	canvas.style.transformOrigin = "top left";
	canvas.style.left = `-${dp_width}px`;
	canvas.style.top = `-${dp_height}px`;
	break;
      case 270:
	canvas.style.transformOrigin = "top left";
	canvas.style.left = "0px";
	canvas.style.top = `${dp_width}px`;
	break;
    }

    var dp_offset = (dp_height - dp_width) / 2.0;
    var px_offset = Math.round(dp_offset * dpr);
    var offset = px_offset / dpr;

    console.log("update1:" + angle + ", size=" + dp_width + "x" + dp_height +
		" angle=" + screen.orientation.angle +
		" offset=" + offset);


    c2.fillStyle = 'rgb(255,255,0)';
    c2.fillRect(0, 0, pixel_width, pixel_height);
    c2.strokeStyle = 'rgb(255,0,0)';
    c2.strokeRect(0, 0, pixel_width, pixel_height);

    c2.fillStyle = 'rgb(255,255,255)';
    c2.fillRect(100, 100, 200, 200);

    // Text
    c2.fillStyle = 'rgb(255,255,255)';
    c2.font = "40px Arial";
    var text = `Xpixel size=${pixel_width}x${pixel_height} dp size=${dp_width}x${dp_height} dpr=${dpr} angle=${angle} offset=${offset}`;
    c2.fillText(text, 10, 50);
    c2.strokeStyle = 'rgb(0,0,0)';
    c2.strokeText(text, 10, 50);

  };
  screen.orientation.addEventListener('change', setSizeAndRotation);
  window.addEventListener('resize',  setSizeAndRotation);
  setSizeAndRotation();
}
