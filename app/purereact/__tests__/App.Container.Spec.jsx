import {React, Component, TestUtils, renderStatelessComponent, renderToShallowRenderer} from './utils'
import {getMountedInstance, findAllWithType, findWithType} from 'react-shallow-testutils'

import App from '../App.Container'
import Selector from '../Selector.Component'
import Posts from '../Posts.Component'

let app;

describe("App Container", () => {
  beforeEach(() => {
    const renderer = renderToShallowRenderer(<App/>)
    app = renderer.getRenderOutput()
  })

  it("should contain <Selector> element", () => {
    expect(findWithType(app, Selector)).toBeDefined()
  })

  it("should contain <Posts> element", () => {
    expect(findWithType(app, Posts)).toBeDefined()
  })

  it("should assign state.subreddit to valueLink prop of <Selector> element", () => {
    const selector = findWithType(app, Selector)
    const appMounted = getMountedInstance(app)
    expect(selector.props.valueLink).toBeDefined()
    // expect(selector.props.valueLink.value).toEqual(appMounted.state.subreddit)
    console.debug(appMounted)
  })

  it("should assign loadSubreddit() to onClick prop of <Selector> element")

  it("should assign state.posts to items prop of <Posts> element")

  it("should assign state.isLoading to isLoading prop of <Posts> element")

  it("should assign state.loadingError to loadingError prop of <Posts> element")
})
