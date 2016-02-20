import {React, Component, TestUtils, renderStatelessComponent} from './utils'

import Posts from '../Posts.Component'

const LOADING_ERROR_TEXT = 'Loading Error'
const TEST_STRING_1 = 'special text'
const TEST_STRING_2 = 'exclusive string'

let propsStub = {}

describe("Posts Component", () => {

  beforeEach(() => {
    propsStub = {
      isLoading: false,
      items: [
        {
          id: '1',
          title: TEST_STRING_1
        },
        {
          id: '2',
          title: TEST_STRING_2
        }
      ],
      loadingError: null
    }

  })

  it("should show 'Loading posts...' message if isLoading = true", () => {
    propsStub.isLoading = true
    const posts = renderStatelessComponent(<Posts {...propsStub} />)

    expect(posts.textContent).toContain('Loading posts...')
  })

  it("should show error message if loadingError != null", () => {
    propsStub.loadingError = LOADING_ERROR_TEXT
    const posts = renderStatelessComponent(<Posts {...propsStub} />)

    expect(posts.textContent).toContain(LOADING_ERROR_TEXT)
  })

  it("should render items", () => {
    const posts = renderStatelessComponent(<Posts {...propsStub} />)

    expect(posts.textContent).toContain(TEST_STRING_1)
    expect(posts.textContent).toContain(TEST_STRING_2)
  })
})
