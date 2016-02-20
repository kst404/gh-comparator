import {React, Component, TestUtils, renderStatelessComponent} from './utils'

import Selector from '../Selector.Component'

describe("Selector Component", () => {
  const valueLinkStub = {
    value: 'test value',
    requestChange: () => {}
  }

  it("has <input> element", () => {
    const selector = renderStatelessComponent(<Selector valueLink={{}} onClick={() => {}} />)

    expect(selector.querySelectorAll('input[type="text"]').length).toBe(1)
  })

  it("has <button> element", () => {
    var selector = renderStatelessComponent(<Selector valueLink={{}} onClick={() => {}} />)

    expect(selector.querySelectorAll('button').length).toBeGreaterThan(0)
  })

  it("should assing valueLink prop to <input>", () => {
    const selector = renderStatelessComponent(<Selector valueLink={valueLinkStub} onClick={() => {}} />)

    expect(selector.querySelectorAll('input[type="text"]')[0].value).toBe(valueLinkStub.value)
  })

  it("should assign onClick prop to <button>", () => {
    const onClickSpy = jasmine.createSpy()
    const selector = renderStatelessComponent(<Selector valueLink={{}} onClick={onClickSpy} />)

    TestUtils.Simulate.click(selector.querySelectorAll('button')[0])
    expect(onClickSpy).toHaveBeenCalled()
  })
})
