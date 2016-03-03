import React, {Component} from 'react'

class FetchJson extends Component {
  send(url) {
    fetch(url)
    .then(res => {
      if(res.status >=200 && res.status < 300) {
        return res
      }
      else {
        var error = new Error(response.statusText)
        throw error
      }
    })
    .then(res => res.json())
    .then(this.props.onSuccess)
    .catch(this.props.onError)
  }

  sendIfUrlIsValid(url) {
    if(url && url.match(/^https?:\/\/.+$/i)) {
      this.send(url)
    }
  }

  componentDidMount() {
    this.sendIfUrlIsValid(this.props.url)
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.url != this.props.url) {
      this.sendIfUrlIsValid(nextProps.url)
    }
  }

  render() {
    return this.props.children || null
  }
}

FetchJson.propTypes = {
  url: React.PropTypes.string,
  onSuccess: React.PropTypes.func.isRequired,
  onError: React.PropTypes.func.isRequired
}

export default FetchJson
