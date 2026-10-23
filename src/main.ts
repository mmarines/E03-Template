const portrait = document.querySelector<HTMLDivElement>("#portrait")!;
const spin = document.querySelector<HTMLButtonElement>("#spin")!;

// The prototype grew inline. Keep it this way until the refactoring checkpoint.
const face = document.createElementNS("http://www.w3.org/2000/svg", "svg");
face.setAttribute("viewBox", "0 0 200 200");
face.setAttribute("role", "img");
face.setAttribute(
  "aria-label",
  "Vampire Sun with Fangs",
);

const head = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
head.setAttribute("cx", "100");
head.setAttribute("cy", "100");
head.setAttribute("rx", "78");
head.setAttribute("ry", "86");
head.setAttribute("fill", "#f9d778");
head.setAttribute("stroke", "#302c29");
head.setAttribute("stroke-width", "4");
face.append(head);

const leftEye = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "ellipse",
);
leftEye.setAttribute("cx", "72");
leftEye.setAttribute("cy", "82");
leftEye.setAttribute("rx", "7");
leftEye.setAttribute("ry", "11");
leftEye.setAttribute("fill", "#302c29");
face.append(leftEye);

for (let i = 0; i < 15; i++) {
  const leftEyebrow = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "polygon",
  );
  const xBase = 46 + i * 2.2;
  const yTop = 64 + (i % 2) * 1.5;
  const yBottom = 70 + (i % 2) * 1.5;
  leftEyebrow.setAttribute(
    "points",
    `${xBase},${yTop} ${xBase + 2.4},${yBottom} ${xBase + 4.8},${yTop}`,
  );
  leftEyebrow.setAttribute("fill", "#000000");
  face.append(leftEyebrow);
}

const rightEye = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "ellipse",
);
rightEye.setAttribute("cx", "128");
rightEye.setAttribute("cy", "82");
rightEye.setAttribute("rx", "7");
rightEye.setAttribute("ry", "11");
rightEye.setAttribute("fill", "#302c29");
face.append(rightEye);

for (let i = 0; i < 15; i++) {
  const rightEyebrow = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "polygon",
  );
  const xBase = 120 + i * 2.2;
  const yTop = 64 + (i % 2) * 1.5;
  const yBottom = 70 + (i % 2) * 1.5;
  rightEyebrow.setAttribute(
    "points",
    `${xBase},${yTop} ${xBase + 2.4},${yBottom} ${xBase + 4.8},${yTop}`,
  );
  rightEyebrow.setAttribute("fill", "#000000");
  face.append(rightEyebrow);
}

const nose = document.createElementNS("http://www.w3.org/2000/svg", "path");
nose.setAttribute("d", "M100 96 L96 114 L104 114 Z");
nose.setAttribute("fill", "#e7b657");
nose.setAttribute("stroke", "#302c29");
nose.setAttribute("stroke-width", "2");
face.append(nose);

const mouth = document.createElementNS("http://www.w3.org/2000/svg", "line");
mouth.setAttribute("x1", "75");
mouth.setAttribute("y1", "137");
mouth.setAttribute("x2", "125");
mouth.setAttribute("y2", "137");
mouth.setAttribute("stroke", "#302c29");
mouth.setAttribute("stroke-width", "4");
mouth.setAttribute("stroke-linecap", "round");
face.append(mouth);

// freckles
for (let i = 0; i < 50; i++) {
  const freckle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle",
  );
  const x = 52 + Math.random() * 96;
  const y = 54 + Math.random() * 72;
  const r = 1.2 + Math.random() * 1.8;
  freckle.setAttribute("cx", String(x));
  freckle.setAttribute("cy", String(y));
  freckle.setAttribute("r", String(r));
  freckle.setAttribute("fill", "#8b4b3b");
  freckle.setAttribute("opacity", "0.5");
  face.append(freckle);
}

const leftFang = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "polygon",
);
leftFang.setAttribute("points", "75,137 90,137 82,154");
leftFang.setAttribute("fill", "#f4efe7");
leftFang.setAttribute("stroke", "#302c29");
leftFang.setAttribute("stroke-width", "2");
face.append(leftFang);

const rightFang = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "polygon",
);
rightFang.setAttribute("points", "110,137 125,137 118,154");
rightFang.setAttribute("fill", "#f4efe7");
rightFang.setAttribute("stroke", "#302c29");
rightFang.setAttribute("stroke-width", "2");
face.append(rightFang);

// sun rays
for (let i = 0; i < 18; i++) {
  const angle = (i / 18) * Math.PI * 2;

  const baseLeft = {
    x: 100 + Math.cos(angle - 0.18) * 90,
    y: 100 + Math.sin(angle - 0.18) * 90,
  };
  const baseRight = {
    x: 100 + Math.cos(angle + 0.18) * 90,
    y: 100 + Math.sin(angle + 0.18) * 90,
  };
  const tip = {
    x: 100 + Math.cos(angle) * 138,
    y: 100 + Math.sin(angle) * 138,
  };

  const ray = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
  ray.setAttribute(
    "points",
    `${baseLeft.x},${baseLeft.y} ${tip.x},${tip.y} ${baseRight.x},${baseRight.y}`,
  );

  ray.setAttribute("fill", i % 2 === 0 ? "#f8d360" : "#ffb347");
  ray.setAttribute("stroke", "#302c29");
  ray.setAttribute("stroke-width", "2");
  ray.setAttribute("opacity", "0.85");
  face.append(ray);
}

portrait.append(face);

spin.addEventListener("click", () => {
  // Restart rather than accumulate simultaneous animations on repeated clicks.
  for (const animation of face.getAnimations()) animation.cancel();
  face.animate(
    [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
    { duration: 800, easing: "ease-in-out" },
  );
});
