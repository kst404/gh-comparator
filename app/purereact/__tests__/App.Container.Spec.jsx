import { React, Component, TestUtils, renderStatelessComponent, renderToShallowRenderer, shallow, mount, render } from './utils'
import { getMountedInstance, findAllWithType, findWithType } from 'react-shallow-testutils'

import App from '../App.Container'
import Selector from '../Selector.Component'
import Posts from '../Posts.Component'
import FetchJson from '../FetchJson.Component'
import ResponseFixture from './response_fixture'

let app, appRenderer;

describe("App Container", () => {
  beforeEach(() => {
    app = shallow(<App/>)
  })

  it("should contain <Selector> element", () => {
    expect(app.contains(Selector)).toBeTruthy()
  })

  it("should contain <Posts> element", () => {
    expect(app.contains(Posts)).toBeTruthy()
  })

    it("should contain <FetchJson> element", () => {
      expect(app.contains(FetchJson)).toBeTruthy()
    })

  it("should link state.subreddit to valueLink prop of <Selector> element", () => {
    app.setState({subreddit: 'new.subreddit'})
    const selector = app.find(Selector).first()

    expect(selector.props().valueLink).toBeDefined()
    expect(selector.props().valueLink.value).toEqual(app.state().subreddit)
  })

  it("should assign loadSubreddit() to onClick prop of <Selector> element", () => {
    const selector = app.find(Selector).first()

    expect(selector.props().onClick).toBe(app.instance().loadSubreddit)
  })

  it("should assign state.posts to items prop of <Posts> element", () => {
    const posts = app.find(Posts).first()

    expect(posts.props().items).toBe(app.state().posts)
  })

  it("should assign state.isLoading to isLoading prop of <Posts> element", () => {
    const posts = app.find(Posts).first()

    expect(posts.props().isLoading).toBe(app.state().isLoading)

  })

  it("should assign state.loadingError to loadingError prop of <Posts> element", () => {
    const posts = app.find(Posts).first()

    expect(posts.props().loadingError).toBe(app.state().loadingError)

  })

  it("should assign loadSubredditSuccess() to onSuccess prop of <FetchJson> element", () => {
    const fetcher = app.find(FetchJson).first()

    expect(fetcher.props().onSuccess).toBe(app.instance().loadSubredditSuccess)
  })

  it("should assign loadSubredditError() to onError prop of <FetchJson> element", () => {
    const fetcher = app.find(FetchJson).first()

    expect(fetcher.props().onError).toBe(app.instance().loadSubredditError)
  })

  it("should link state.url to url prop of <FetchJson> element", () => {
    const fetcher = app.find(FetchJson).first()

    expect(fetcher.props().url).toBeDefined()
    expect(fetcher.props().url).toEqual(app.state().url)
  })

  describe("loadSubreddit()", () => {
    it('should set state.isLoading to "true"', () => {
      app.setState({subreddit: 'reactjs', isLoading: false})
      app.instance().loadSubreddit()

      expect(app.state().isLoading).toBeTruthy()
    })

    it('should set state.url to https://www.reddit.com/r/${subreddit}.json', () => {
      app.setState({subreddit: 'reactjs'})
      app.instance().loadSubreddit()

      expect(app.state().url).toEqual('https://www.reddit.com/r/reactjs.json')

    })
  })

  describe('loadSubredditSuccess()', () => {
    it("should set state.isLoading to 'false'", () => {
      app.setState({loadingError: null, isLoading: true})
      app.instance().loadSubredditSuccess(ResponseFixture)

      expect(app.state().isLoading).toBeFalsy()
    })

    it("should set state.posts to json.data.children", () => {
      app.setState({loadingError: null, isLoading: true, posts: []})
      const dataChildrenLength = ResponseFixture.data.children.length

      app.instance().loadSubredditSuccess(ResponseFixture)

      expect(app.state().posts.length).toEqual(dataChildrenLength)
    })
  })

  describe('loadSubredditError()', () => {
    it("should set state.isLoading to 'false'", () => {
      app.setState({loadingError: null, isLoading: true})
      app.instance().loadSubredditError(new Error('test.error.message'))

      expect(app.state().isLoading).toBeFalsy()
    })

    it("should set state.loadingError to error message", () => {
      app.setState({loadingError: null})
      app.instance().loadSubredditError(new Error('test.error.message'))

      expect(app.state().loadingError).toContain('test.error.message')
    })
  })
})
