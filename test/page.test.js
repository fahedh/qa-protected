import assert from 'node:assert/strict'
import { test } from 'node:test'
import { readFileSync } from 'node:fs'

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8')

test('the page has a title and exactly two recipe cards', () => {
  assert.match(html, /<h1>Recipe Cards<\/h1>/)
  assert.equal((html.match(/<article>/g) ?? []).length, 2)
  assert.match(html, /<article><h2>Pancakes<\/h2><p>Flour, milk, eggs\. 20 minutes\.<\/p><\/article>/)
  assert.match(html, /<article><h2>Tomato soup<\/h2><p>Tomatoes, onion, stock\. 30 minutes\.<\/p><\/article>/)
})

test('two-cards: the page shows the Pancakes and Tomato soup cards', () => {
  const titles = [...html.matchAll(/<article><h2>([^<]*)<\/h2>/g)].map((m) => m[1])
  assert.deepEqual(titles, ['Pancakes', 'Tomato soup'])
})

test('soup-details: the Tomato soup card lists tomatoes, onion and stock and says 30 minutes', () => {
  const card = html.match(/<article><h2>Tomato soup<\/h2>(.*?)<\/article>/)?.[1] ?? ''
  assert.match(card, /tomatoes/i)
  assert.match(card, /onion/i)
  assert.match(card, /stock/i)
  assert.match(card, /30 minutes/)
})

test('test-two-cards: the page test counts exactly two recipe cards', () => {
  assert.equal((html.match(/<article>/g) ?? []).length, 2)
})
