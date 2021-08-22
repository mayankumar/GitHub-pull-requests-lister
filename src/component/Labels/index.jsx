import * as React from 'react'
import '../Table/index.scss'

export const Labels = (props) => {

  const { label: { name, color } } = props
  const styleColor = {
    backgroundColor: `#${color}`,
  }
  return (
    <div style={styleColor} className="labels">
      {name}
    </div>
  )
}

export default Labels