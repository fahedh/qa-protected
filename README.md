# Recipe Cards

A small page that shows recipe cards. Open `index.html` in a browser. Its tests run with `npm test`.

## How to add a recipe card

In `index.html`, copy an existing `<article>` and paste it after the other cards, before `</html>`. Here is the exact Pancakes card as written in `index.html`:

```html
<article><h2>Pancakes</h2><p>Flour, milk, eggs. 20 minutes.</p></article>
```

In your new card, change the `<h2>` to the recipe name and the `<p>` to its ingredients and cooking time. Open `index.html` in a browser to check how it looks alongside the existing cards.

Update `test/page.test.js` to expect the new total number of cards and check the new card's content, keeping the existing card checks. Keep the test passing with `npm test`.
