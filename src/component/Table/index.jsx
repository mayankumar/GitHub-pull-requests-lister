import * as React from 'react'
import './index.scss'
import '../../container/LandingPage/index.scss'
import TableHeader from '../TableHeader'
import TableBody from '../TableBody'
import Loader from 'react-loader-spinner'

export const Table = (props) => {

  const { pullRequests, infiniteLoader } = props

  return (
    <>
      <table className="table">
        <TableHeader />
        <TableBody data={pullRequests} />
      </table>
      {infiniteLoader && (
        <div className="spinner">
          <Loader type="ThreeDots" height={16} width={200} />
        </div>
      )}
    </>
  )
}

export default Table
