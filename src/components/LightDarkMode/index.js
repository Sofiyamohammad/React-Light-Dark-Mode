import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {changeMode: false}

  changeModeOn = () => {
    this.setState({changeMode: false})
  }

  changeModeOff = () => {
    this.setState({changeMode: true})
  }

  render() {
    const {changeMode} = this.state

    return (
      <div className="container">
        {changeMode ? (
          <div className="card-container-light">
            <h1 className="mode-title-light">Click To Change Mode</h1>
            <button
              className="button"
              type="button"
              onClick={this.changeModeOn}
            >
              Dark Mode
            </button>
          </div>
        ) : (
          <div className="card-container-dark">
            <h1 className="mode-title-dark">Click To Change Mode</h1>
            <button
              className="button"
              type="button"
              onClick={this.changeModeOff}
            >
              Light Mode
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default LightDarkMode
