import * as React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Table } from '../../component/Table'
import Loader from 'react-loader-spinner'
import './index.scss'
import { repoURL, getRequestParameters } from './constants'

export const LandingPage = () => {

  const [pageNum, setPageNum] = useState(0)
  const [pullReqList, setPullReqList] = useState([])
  const [failed, setFailed] = useState(false)
  const [loading, setLoading] = useState(true)

  const getPullrequestList = ({ pageNum }) => {
    const reqParams = getRequestParameters(pageNum)
    axios
      .get(repoURL, reqParams)
      .then((response) => {
        if (response.status === 200) {
          setPullReqList(response.data)
          setPageNum(pageNum + 1)
          setLoading(false)
        }
      })
      .catch(error => setFailed(error))
  }
  useEffect(() => {
    getPullrequestList(pageNum)
  }, [])

  useEffect(() => console.log(pullReqList), [pullReqList])

  return (
    <div className="container">
      {loading && (
        <div className="spinner">
          <Loader type={'Puff'} height={200} width={200} />
        </div>
      )}
      {!(loading || failed) &&
      Array.isArray(pullReqList) &&
      pullReqList.length > 0 ? (
          <div>
            <Table pullRequests={pullReqList} />
          </div>
        ) : (
          failed && (
            <div>
              <div>Sorry</div>
              <div>Unable to get data!!</div>
            </div>
          )
        )}
    </div>
  )
}

export default LandingPage
