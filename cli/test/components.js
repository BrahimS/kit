import test from 'ava'
import React from 'react'
import { create as render } from 'react-test-renderer'
import { StaticRouter } from 'react-router-dom'

// components
import Library from '../src/Library'
import Responsive from '../src/Responsive'

const renderJSON = el => render(el).toJSON()

const routes = [
  {
    key: 'hello',
    name: 'hello',
    path: '/hello',
    component: () => false
  }
]

global.DIRNAME = 'hello'

test.skip('Library renders', t => {
  const json = renderJSON(<Library examples={[]} />)
  t.snapshot(json)
})

test('Responsive renders', t => {
  const json = renderJSON(
    <StaticRouter context={{}}>
      <Responsive routes={routes} />
    </StaticRouter>
  )
  t.snapshot(json)
})

test('Responsive renders with a path', t => {
  const json = renderJSON(
    <StaticRouter
      context={{}}
      location='/hello'>
      <Responsive routes={routes} />
    </StaticRouter>
  )
  t.snapshot(json)
})

