import 'babel-polyfill'
import 'isomorphic-fetch'

import React, {Component} from 'react'
import TestUtils from 'react-addons-test-utils'

export {React, Component, TestUtils}

export function renderStatelessComponent(StatelessComponent) {
  const renderer = renderToShallowRenderer(StatelessComponent)
  return TestUtils.renderIntoDocument(renderer.getRenderOutput())
}

export function renderToShallowRenderer(ComponentToRender) {
  const renderer = TestUtils.createRenderer()
  renderer.render(ComponentToRender)
  return renderer
}
