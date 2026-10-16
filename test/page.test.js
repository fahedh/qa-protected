import assert from 'node:assert/strict'
import { test } from 'node:test'
import { readFileSync } from 'node:fs'

test('the page has a title and exactly two recipe cards', () => {
  const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8')
  assert.match(html, /<h1>Recipe Cards<\/h1>/)
  assert.equal((html.match(/<article>/g) ?? []).length, 2)
  assert.match(html, /<article><h2>Pancakes<\/h2><p>Flour, milk, eggs\. 20 minutes\.<\/p><\/article>/)
  assert.match(html, /<article><h2>Tomato soup<\/h2><p>Tomatoes, onion, stock\. 30 minutes\.<\/p><\/article>/)
})
