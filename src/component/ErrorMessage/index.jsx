import * as React from 'react'
import SorryImage from '../../assets/sorryImage.jpg'
import '../../container/LandingPage/index.scss'

export const ErrorMessage = () => {
  return (
    <div className="spinner height-60vh padding-top-64">
      <img src={SorryImage} />
      <div className="failed">Unable to get data!!</div>
    </div>
  )
}

export default ErrorMessage