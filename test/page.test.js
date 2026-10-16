import assert from 'node:assert/strict'
import { test } from 'node:test'
import { readFileSync } from 'node:fs'

test('the page has a title and at least one recipe card', () => {
  const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8')
  assert.match(html, /<h1>Recipe Cards<\/h1>/)
  assert.ok((html.match(/<article>/g) ?? []).length >= 1)
})
