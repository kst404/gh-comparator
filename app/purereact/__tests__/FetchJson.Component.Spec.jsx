import {React, Component, TestUtils, shallow, mount, render} from './utils'
import fetchMock from 'fetch-mock'

import FetchJson from '../FetchJson.Component'

const invalidUrl = 'b@d,url!'
const testUrl = 'http://www.example.com'

describe("Fetch Component", () => {

  afterEach(() => {
    fetchMock.restore()
  });

  it("should not throw if url is invalid", () => {
    fetchMock.mock(invalidUrl, 200)

    const renderFetcher = () => mount(<FetchJson url={invalidUrl} onSuccess={()=>{}} onError={()=>{}} />)

    expect(renderFetcher).not.toThrow()
  })

  it("should not execute fetch request if url is invalid", () => {
    fetchMock.mock(invalidUrl, 200)

    const fetcher = mount(<FetchJson url={invalidUrl} onSuccess={()=>{}} onError={()=>{}} />)

    expect(fetchMock.called(testUrl)).not.toBeTruthy()
  })

  it("should not execute fetch request if url is empty", () => {
    const emptyUrl = ''
    fetchMock.mock('^', 200)

    const fetcher = mount(<FetchJson url={emptyUrl} onSuccess={()=>{}} onError={()=>{}} />)

    expect(fetchMock.called()).not.toBeTruthy()
  })

  it("should execute fetch request when url is changed", () => {
    fetchMock.mock(testUrl, 200)

    const fetcher = mount(<FetchJson url="" onSuccess={()=>{}} onError={()=>{}} />)
    expect(fetchMock.called()).not.toBeTruthy()

    fetcher.setProps({url: testUrl})
    expect(fetchMock.called(testUrl)).toBeTruthy()
  })

  it("should not execute fetch request if url is updated but has same value", () => {
    fetchMock.mock(testUrl, 200)

    const fetcher = mount(<FetchJson url={testUrl} onSuccess={()=>{}} onError={()=>{}} />)
    expect(fetchMock.called()).toBeTruthy()
    fetchMock.reset()
    fetcher.setProps({url: testUrl})
    expect(fetchMock.called(testUrl)).not.toBeTruthy()
  })

  it("should call onSuccess() if finished without error", (done) => {
    fetchMock.mock(testUrl, {
      body: [1,2,3],
      status: 200
    })
    const onSuccess = jasmine.createSpy('onSuccess').and.callFake(data => {
      expect(data.length).toEqual(3)
      done()
    })

    const fetcher = mount(<FetchJson url={testUrl} onSuccess={onSuccess} onError={()=>{}} />)
  })

  it("should call onError() if error occur", (done) => {
    fetchMock.mock(testUrl, {
      body: [],
      status: 502
    })
    const onError = jasmine.createSpy('onSuccess').and.callFake(error => {
      expect(error).toBeDefined()
      done()
    })

    const fetcher = mount(<FetchJson url={testUrl} onSuccess={()=>{}} onError={onError} />)
  })
})
