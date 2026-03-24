# AsianGame

Interactive classroom narrative game for Asian 391.

## Waves of Belonging

This project is a browser-based narrative RPG about the Vietnamese diaspora across three generations. Players choose an avatar, move through three eras, balance Social Capital, Cultural Soul, and Political Agency, and finish with a Heritage Report instead of a win screen.

## Run

Run the game from a local server so the images and assets load reliably.

In Terminal:

```bash
cd "/Users/adrianchui/AsianGame.github.io"
python3 -m http.server 8090
```

Then open it in your browser:

```bash
open http://127.0.0.1:8090
```

If port `8090` is already in use, try:

```bash
cd "/Users/adrianchui/AsianGame.github.io"
python3 -m http.server 8100
open http://127.0.0.1:8100
```

You can still open `index.html` directly, but the local server method is the recommended way to run the project.

## Files

- `index.html` contains the game layout
- `styles.css` contains the visual design and era transitions
- `script.js` contains the narrative data and gameplay logic
