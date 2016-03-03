import 'babel-polyfill'
import 'isomorphic-fetch'
import 'jasmine-ajax'

import React, { Component } from 'react'
import TestUtils from 'react-addons-test-utils'
import { shallow, mount, render } from 'enzyme'

export { React, Component, TestUtils, shallow, mount, render }

export function renderStatelessComponent(StatelessComponent) {
  const renderer = renderToShallowRenderer(StatelessComponent)
  return TestUtils.renderIntoDocument(renderer.getRenderOutput())
}

export function renderToShallowRenderer(ComponentToRender) {
  const renderer = TestUtils.createRenderer()
  renderer.render(ComponentToRender)
  return renderer
}
