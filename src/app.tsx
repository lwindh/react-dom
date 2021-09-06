import React from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'
import RouterView from './router';

export default function app() {
  return (
    <div>
      <Router>
        <ul>
          <li><Link to="/dist/">首页</Link></li>
          <li><Link to="/dist/page">Page</Link></li>
        </ul>
        <RouterView />
      </Router>
    </div>
  )
}
