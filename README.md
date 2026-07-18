# Dollie World

A responsive static website for Dollie’s art, characters, emotes, and fictional worlds.

## Local preview

Open `index.html` directly, or run a local static server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Customization

Replace the placeholder `#` destinations in the **Connect** section of `index.html` with Dollie’s final Discord, Tipsy, gallery, and shop links.

## Deployment

The included GitHub Actions workflow publishes the repository to GitHub Pages whenever `main` is updated.

## Adding Dollie & Killian pictures

1. Upload the new picture into `assets/library/`.
2. Open `library.html`.
3. Find the commented `TO ADD A PICTURE` area.
4. Duplicate the prepared `memory-card` figure and change the image filename, alt text, title, and caption.
