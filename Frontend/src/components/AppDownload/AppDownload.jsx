import React from 'react'
import '../AppDownload/AppDownload.css'
import { assets } from '../../assets/frontend_assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id="app-download">
        <p>For Better experience Download <br/> Tomato App</p>
        <div className="app-download-platforms">
            <img src={assets.play_store} alt="img" />
            <img src={assets.app_store} alt="img" />
        </div>
    </div>
  )
}

export default AppDownload
