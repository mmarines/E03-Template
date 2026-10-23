// Viktor from League of Legends, made by me using MS Paint
// @deno-types="./asset-url.d.ts"
import viktorUrl from "./assets/viktorTransparent.png?no-inline";

// Fizz from League of Legends, made by me using MS Paint
// @deno-types="./asset-url.d.ts"
import fizzUrl from "./assets/fizzTransparent.png?no-inline";

const portrait = document.querySelector<HTMLDivElement>("#portrait")!;
const spin = document.querySelector<HTMLButtonElement>("#spin")!;

// The prototype grew inline. Keep it this way until the refactoring checkpoint.
const face = document.createElementNS("http://www.w3.org/2000/svg", "svg");
face.setAttribute("viewBox", "0 0 200 200");
face.setAttribute("role", "img");
face.setAttribute(
  "aria-label",
  "A happy League of Legends player with Viktok and Fizz stickers on their cheeks",
);

const head = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
head.setAttribute("cx", "100");
head.setAttribute("cy", "100");
head.setAttribute("rx", "78");
head.setAttribute("ry", "86");
head.setAttribute("fill", "#f3cf87");
head.setAttribute("stroke", "#302c29");
head.setAttribute("stroke-width", "4");
face.append(head);

const leftEye = document.createElementNS("http://www.w3.org/2000/svg", "path");
leftEye.setAttribute(
  "d",
  "M 58 80 A 12 12 0 0 1 86 80",
);
leftEye.setAttribute("fill", "none");
leftEye.setAttribute("stroke", "#302c29");
leftEye.setAttribute("stroke-width", "4");
leftEye.setAttribute("stroke-linecap", "round");
face.append(leftEye);

const rightEye = document.createElementNS("http://www.w3.org/2000/svg", "path");
rightEye.setAttribute(
  "d",
  "M 114 80 A 12 12 0 0 1 142 80",
);
rightEye.setAttribute("fill", "none");
rightEye.setAttribute("stroke", "#302c29");
rightEye.setAttribute("stroke-width", "4");
rightEye.setAttribute("stroke-linecap", "round");
face.append(rightEye);

const nose = document.createElementNS("http://www.w3.org/2000/svg", "line");
nose.setAttribute("x1", "100");
nose.setAttribute("y1", "96");
nose.setAttribute("x2", "96");
nose.setAttribute("y2", "112");
nose.setAttribute("stroke", "#302c29");
nose.setAttribute("stroke-width", "4");
nose.setAttribute("stroke-linecap", "round");
face.append(nose);

const mouth = document.createElementNS("http://www.w3.org/2000/svg", "path");
mouth.setAttribute("d", "M 72 132 Q 100 156 128 132");
mouth.setAttribute("fill", "none");
mouth.setAttribute("stroke", "#302c29");
mouth.setAttribute("stroke-width", "4");
mouth.setAttribute("stroke-linecap", "round");
face.append(mouth);

const fizzImage = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "image",
);
fizzImage.setAttribute("href", fizzUrl);
fizzImage.setAttribute("x", "15");
fizzImage.setAttribute("y", "82");
fizzImage.setAttribute("width", "72");
fizzImage.setAttribute("height", "72");
fizzImage.setAttribute("preserveAspectRatio", "xMidYMid meet");
face.append(fizzImage);

const viktorImage = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "image",
);
viktorImage.setAttribute("href", viktorUrl);
viktorImage.setAttribute("x", "113");
viktorImage.setAttribute("y", "82");
viktorImage.setAttribute("width", "72");
viktorImage.setAttribute("height", "72");
viktorImage.setAttribute("preserveAspectRatio", "xMidYMid meet");
face.append(viktorImage);

portrait.append(face);

spin.addEventListener("click", () => {
  for (const animation of face.getAnimations()) animation.cancel();
  face.animate(
    [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
    { duration: 800, easing: "ease-in-out" },
  );
});
