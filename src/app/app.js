import './app.css'
import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes'
import Header from '../components/layouts/header'
import Store from '../store'

const App = () => (
  <div className="app">
    <Store>
      <Header />
      <Routes />
    </Store>
  </div>
)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
