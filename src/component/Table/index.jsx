import * as React from 'react'
import './index.scss'
import TableHeader from '../TableHeader'
import TableBody from '../TableBody'

export const Table = (props) => {
  const { pullRequests } = props

  return (
    <table className="table">
      <TableHeader />
      <TableBody data={pullRequests} />
    </table>
  )
}

export default Table
