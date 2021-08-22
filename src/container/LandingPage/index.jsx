import React, { useState, useLayoutEffect } from 'react'
import axios from 'axios'
import Loader from 'react-loader-spinner'
import './index.scss'
import { repoURL, getRequestParameters } from './constants'
import Table from '../../component/Table'
import { Waypoint } from 'react-waypoint'

export const LandingPage = () => {

  const [pageNum, setPageNum] = useState(1)
  const [prevPageNum, setPrevPageNum] = useState(null)
  const [pullReqList, setPullReqList] = useState([])
  const [failed, setFailed] = useState(false)
  const [loading, setLoading] = useState(true)
  const [infLoader, setInfLoader] = useState(false)

  const getPullrequestList = () => {
    const reqParams = getRequestParameters(pageNum)
    axios
      .get(repoURL, reqParams)
      .then((response) => {
        if (response.status === 200) {
          setPullReqList(prev => [...prev, ...response.data])
          setLoading(false)
          setInfLoader(false)
        }
      })
      .catch(error => setFailed(error))
  }
  useLayoutEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    if (!prevPageNum || prevPageNum !== pageNum) {
      if (pageNum > 1) 
        setInfLoader(true)
      getPullrequestList()
      setPrevPageNum(pageNum)
      setPageNum(prev => prev + 1)
    }
  }

  return (
    <div className="container">
      {loading && !infLoader && (
        <div className="spinner height-100vh">
          <Loader type={'Puff'} height={200} width={200} />
        </div>
      )}
      {!(loading || failed) &&
      Array.isArray(pullReqList) &&
      pullReqList.length > 0 ? (
          <div>
            <Table pullRequests={pullReqList} infiniteLoader={infLoader} />
          </div>
        ) : (
          failed && (
            <div>
              <div>Sorry</div>
              <div>Unable to get data!!</div>
            </div>
          )
        )}
      <Waypoint onEnter={fetchData} />
    </div>
  )
}

export default LandingPage
