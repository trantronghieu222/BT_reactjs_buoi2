import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import CuaHangGiay from './CuaHang/CuaHangGiay.jsx'

// GioHang
// import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <CuaHangGiay></CuaHangGiay>
)
