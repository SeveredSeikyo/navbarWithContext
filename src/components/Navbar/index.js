// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

import ThemeContext from '../../context/ThemeContext'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggletheme} = value
      const onClickToggleTheme = () => {
        toggletheme()
      }
      return (
        <div
          className={
            !isDarkTheme ? ' navbar navbar-light' : ' navbar navbar-dark'
          }
        >
          <div>
            {!isDarkTheme ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                alt="website logo"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                alt="website logo"
              />
            )}
          </div>
          <ul>
            <div className="navbar-list">
              <li>
                <Link to="/">
                  <h1>Home</h1>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <h1>About</h1>
                </Link>
              </li>
            </div>
          </ul>
          <div>
            <button
              type="button"
              data-testid="theme"
              onClick={onClickToggleTheme}
            >
              {isDarkTheme ? (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                  alt="theme"
                />
              ) : (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                  alt="theme"
                />
              )}
            </button>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
