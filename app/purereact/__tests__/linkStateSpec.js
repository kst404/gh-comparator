import React, {Component} from 'react'
import TestUtils from 'react-addons-test-utils'
import linkState from '../linkState'
import ReactLink from 'react/lib/ReactLink';

const TEST_VALUE = 'test value'
const NEW_VALUE = 'new value'

let testComponent, target

class TestComponent extends Component {
  state = {
    test: TEST_VALUE
  };

  render() {
    return <div></div>
  }
}


describe('linkState', () => {
  beforeEach(() => {
    testComponent = TestUtils.renderIntoDocument(<TestComponent/>)
    target = linkState(testComponent, 'test')
  })

  it("should return ReactLink object", () => {
    expect(target).toEqual(jasmine.any(ReactLink))
  })

  it(`should return object with 'value' property = "${TEST_VALUE}"`, () => {

    expect(target.value).toEqual(TEST_VALUE)
  })

  it("should change testComponent.state.test when requestChange was called", () => {
    target.requestChange(NEW_VALUE)
    expect(testComponent.state.test).toEqual(NEW_VALUE);
  });
})
