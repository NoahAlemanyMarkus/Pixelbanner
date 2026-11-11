//No images, no dependencies. Everything is drawn with fillRect.

//0x0E = 01110 = ".###."
const FONT = {
  ' ': [0, 0, 0, 0, 0, 0, 0],
  'A': [0x0E, 0x11, 0x11, 0x1F, 0x11, 0x11, 0x11],
  'B': [0x1E, 0x11, 0x11, 0x1E, 0x11, 0x11, 0x1E],
  'C': [0x0E, 0x11, 0x10, 0x10, 0x10, 0x11, 0x0E],
  'D': [0x1C, 0x12, 0x11, 0x11, 0x11, 0x12, 0x1C],
  'E': [0x1F, 0x10, 0x10, 0x1E, 0x10, 0x10, 0x1F],
  'F': [0x1F, 0x10, 0x10, 0x1E, 0x10, 0x10, 0x10],
  'G': [0x0E, 0x11, 0x10, 0x17, 0x11, 0x11, 0x0F],
  'H': [0x11, 0x11, 0x11, 0x1F, 0x11, 0x11, 0x11],
  'I': [0x0E, 0x04, 0x04, 0x04, 0x04, 0x04, 0x0E],
  'J': [0x07, 0x02, 0x02, 0x02, 0x02, 0x12, 0x0C],
  'K': [0x11, 0x12, 0x14, 0x18, 0x14, 0x12, 0x11],
  'L': [0x10, 0x10, 0x10, 0x10, 0x10, 0x10, 0x1F],
  'M': [0x11, 0x1B, 0x15, 0x15, 0x11, 0x11, 0x11],
  'N': [0x11, 0x11, 0x19, 0x15, 0x13, 0x11, 0x11],
  'O': [0x0E, 0x11, 0x11, 0x11, 0x11, 0x11, 0x0E],
  'P': [0x1E, 0x11, 0x11, 0x1E, 0x10, 0x10, 0x10],
  'Q': [0x0E, 0x11, 0x11, 0x11, 0x15, 0x12, 0x0D],
  'R': [0x1E, 0x11, 0x11, 0x1E, 0x14, 0x12, 0x11],
  'S': [0x0F, 0x10, 0x10, 0x0E, 0x01, 0x01, 0x1E],
  'T': [0x1F, 0x04, 0x04, 0x04, 0x04, 0x04, 0x04],
  'U': [0x11, 0x11, 0x11, 0x11, 0x11, 0x11, 0x0E],
  'V': [0x11, 0x11, 0x11, 0x11, 0x11, 0x0A, 0x04],
  'W': [0x11, 0x11, 0x11, 0x15, 0x15, 0x15, 0x0A],
  'X': [0x11, 0x11, 0x0A, 0x04, 0x0A, 0x11, 0x11],
  'Y': [0x11, 0x11, 0x0A, 0x04, 0x04, 0x04, 0x04],
  'Z': [0x1F, 0x01, 0x02, 0x04, 0x08, 0x10, 0x1F],
  '0': [0x0E, 0x11, 0x13, 0x15, 0x19, 0x11, 0x0E],
  '1': [0x04, 0x0C, 0x04, 0x04, 0x04, 0x04, 0x0E],
  '2': [0x0E, 0x11, 0x01, 0x02, 0x04, 0x08, 0x1F],
  '3': [0x1F, 0x02, 0x04, 0x02, 0x01, 0x11, 0x0E],
  '4': [0x02, 0x06, 0x0A, 0x12, 0x1F, 0x02, 0x02],
  '5': [0x1F, 0x10, 0x1E, 0x01, 0x01, 0x11, 0x0E],
  '6': [0x06, 0x08, 0x10, 0x1E, 0x11, 0x11, 0x0E],
  '7': [0x1F, 0x01, 0x02, 0x04, 0x08, 0x08, 0x08],
  '8': [0x0E, 0x11, 0x11, 0x0E, 0x11, 0x11, 0x0E],
  '9': [0x0E, 0x11, 0x11, 0x0F, 0x01, 0x02, 0x0C],
  '.': [0, 0, 0, 0, 0, 0x0C, 0x0C],
  ',': [0, 0, 0, 0, 0x0C, 0x04, 0x08],
  '!': [0x04, 0x04, 0x04, 0x04, 0x04, 0, 0x04],
  '?': [0x0E, 0x11, 0x01, 0x02, 0x04, 0, 0x04],
  "'": [0x0C, 0x04, 0x08, 0, 0, 0, 0],
  '"': [0x0A, 0x0A, 0, 0, 0, 0, 0],
  ':': [0, 0x0C, 0x0C, 0, 0x0C, 0x0C, 0],
  ';': [0, 0x0C, 0x0C, 0, 0x0C, 0x04, 0x08],
  '-': [0, 0, 0, 0x1F, 0, 0, 0],
  '(': [0x02, 0x04, 0x08, 0x08, 0x08, 0x04, 0x02],
  ')': [0x08, 0x04, 0x02, 0x02, 0x02, 0x04, 0x08],
  '[': [0x0E, 0x08, 0x08, 0x08, 0x08, 0x08, 0x0E],
  ']': [0x0E, 0x02, 0x02, 0x02, 0x02, 0x02, 0x0E],
  '*': [0, 0x15, 0x0E, 0x1F, 0x0E, 0x15, 0],
}

function textWidth(text, scale) {
  return text.length * 6 * scale - scale
}

//Draw text with its top-left at (x, y). scale = screen pixels per font pixel.
//**Unknown characters draw as '?'
function drawText(ctx, text, x, y, scale, color) {
  ctx.fillStyle = color
  text = text.toUpperCase()
  for (let i = 0; i < text.length; i++) {
    const rows = FONT[text[i]] || FONT['?']
    for (let row = 0; row < 7; row++) {
      for (let col = 0; col < 5; col++) {
        if (rows[row] & (1 << (4 - col))) {
          ctx.fillRect(x + i * 6 * scale + col * scale, y + row * scale, scale, scale)
        }
      }
    }
  }
}

function drawWaveText(ctx, text, x, y, scale, color, t) {
  for (let i = 0; i < text.length; i++) {
    const hop = Math.sin(t / 22 + i * 0.6) > 0.6 ? -2 : 0
    drawText(ctx, text[i], x + i * 6 * scale, y + hop, scale, color)
  }
}

//The frame is drawn once on a tiny canvas where 1 pixel = 1 pixel of the pattern,

const PAL = {
  outline: '#3f2e24', frameLight: '#f0e4c4', frameMid: '#cdb48a', frameDark: '#9a7e5c',
  groove: '#7a6048', inner: '#5a4333', paper: '#f3e9cf', paperShade: '#e4d5ae',
  paperSpeck: '#d9c79b', accent: '#a07f58',
}

function makeFrame(w, h) {
  const canvas = document.createElement('canvas')
  canvas.width = w
  canvas.height = h
  const g = canvas.getContext('2d')
  const px = (x, y, c) => { g.fillStyle = c; g.fillRect(x, y, 1, 1) }
  const r = (x, y, rw, rh, c) => { g.fillStyle = c; g.fillRect(x, y, rw, rh) }
  //rectangle with its corners cut by 2 pixels
  const cut = (x, y, cw, ch, c) => {
    r(x + 2, y, cw - 4, ch, c)
    r(x + 1, y + 1, cw - 2, ch - 2, c)
    r(x, y + 2, cw, ch - 4, c)
  }

  cut(0, 0, w, h, PAL.outline)
  cut(1, 1, w - 2, h - 2, PAL.frameMid)
  r(3, 1, w - 6, 1, PAL.frameLight)
  r(1, 3, 1, h - 6, PAL.frameLight)
  px(2, 2, PAL.frameLight)
  r(3, h - 2, w - 6, 1, PAL.frameDark)
  r(w - 2, 3, 1, h - 6, PAL.frameDark)
  px(w - 3, h - 3, PAL.frameDark)
  cut(3, 3, w - 6, h - 6, PAL.groove)
  cut(4, 4, w - 8, h - 8, PAL.inner)
  cut(5, 5, w - 10, h - 10, PAL.paper)

  r(7, 5, w - 14, 2, PAL.paperShade)
  r(5, 7, 1, h - 14, PAL.paperShade)
  for (let x = 7; x < w - 7; x += 2) px(x, 7, PAL.paperShade)
  for (let y = 8; y < h - 7; y += 2) px(6, y, PAL.paperShade)
  r(7, h - 6, w - 14, 1, PAL.paperShade)
  for (let i = 0; i < 26; i++) {
    px(14 + (i * 41) % (w - 28), 9 + (i * 17) % (h - 18), PAL.paperSpeck)
  }

  //little studs along the wooden border
  for (let x = 14; x < w - 12; x += 8) {
    if (Math.abs(x - w / 2) < 8) continue
    px(x, 2, PAL.frameDark)
    px(x, h - 3, PAL.frameDark)
  }
  for (let y = 12; y < h - 10; y += 8) {
    px(2, y, PAL.frameDark)
    px(w - 3, y, PAL.frameDark)
  }

  //diamond ornaments in the middle of the top and bottom edges
  const cx = w / 2
  px(cx, 1, PAL.outline)
  r(cx - 1, 2, 3, 1, PAL.outline)
  r(cx - 2, 3, 5, 1, PAL.outline)
  px(cx, 2, PAL.frameLight)
  r(cx - 1, 3, 3, 1, PAL.accent)
  px(cx, h - 2, PAL.outline)
  r(cx - 1, h - 3, 3, 1, PAL.outline)
  r(cx - 2, h - 4, 5, 1, PAL.outline)
  px(cx, h - 3, PAL.frameLight)
  r(cx - 1, h - 4, 3, 1, PAL.accent)

  //flower
  const flower = (fx, fy) => {
    px(fx, fy - 1, PAL.accent)
    px(fx - 1, fy, PAL.accent)
    px(fx + 1, fy, PAL.accent)
    px(fx, fy + 1, PAL.accent)
    px(fx, fy, PAL.frameMid)
  }
  flower(9, 9)
  flower(w - 10, 9)
  flower(9, h - 10)
  flower(w - 10, h - 10)

  return canvas
}

// Draw a frame from makeFrame at (x, y), scaled up by `scale` w/ a soft shadow behind it.
function drawFrame(ctx, frame, x, y, scale) {
  const w = frame.width * scale
  const h = frame.height * scale
  ctx.save()
  ctx.imageSmoothingEnabled = false
  ctx.fillStyle = 'rgba(30, 20, 14, 0.35)'
  ctx.fillRect(x + 8, y + 10, w - 16, h)
  ctx.drawImage(frame, x, y, w, h)
  ctx.restore()
}

if (typeof module !== 'undefined') module.exports = { FONT, textWidth, drawText, drawWaveText, makeFrame, drawFrame }
