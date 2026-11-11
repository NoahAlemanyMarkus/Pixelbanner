# Pixelbanner

My pixel-art title banner pulled from my latest project. No images, no libraries, all done within the file with fillRect. Feel free to use it as I think it looks nice! 

```js
const banner = makeFrame(104, 28)   // build the sign once
drawFrame(ctx, banner, 140, 30, 5)  // draw it, scaled up 5x
drawWaveText(ctx, 'BANNER', 260, 70, 8, '#3b2a20', t) // t = frame count
```

Open `EXAMPLE` to see it.

## How it works

**/*Sign** Drawn once on a tiny canvas (104x28 pixels) where each pixel is one dot of the pattern: wood border, groove, paper, specks, little flowers in the corners. Then it gets scaled up with smoothing turned off, so every dot becomes a crisp block. That's what makes it look hand-drawn.

*Font* Each letter is 7 numbers, one per row. The lowest 5 bits of each number are the pixels in that row. `0x0E` is `01110`, which is `.###.`, the top of an A. To draw a letter, check each bit and fill a square wherever it's set.

##*Wave Animation* Each letter checks a wave based on its position and the current frame. When the wave is high enough, that letter hops up 2 pixels. The wave moves over time, so the change travels along the word.

Capitals, numbers and some punctuation only, add whatver you want to the list.

MIT license.
