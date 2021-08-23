import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Loader from 'react-loader-spinner'
import './index.scss'
import { repoURL, getRequestParameters, titleDesc } from './constants'
import Table from '../../component/Table'
import { Waypoint } from 'react-waypoint'
import SorryImage from '../../assets/sorryImage.jpg'

export const LandingPage = () => {
  const [pageNum, setPageNum] = useState(1)
  const [prevPageNum, setPrevPageNum] = useState(null)
  const [pullReqList, setPullReqList] = useState([])
  const [failed, setFailed] = useState(false)
  const [loading, setLoading] = useState(true)
  const [infLoader, setInfLoader] = useState(false)

  const getPullrequestList = () => {
    const reqParams = getRequestParameters()
    const apiURL = `${repoURL}?page=${pageNum}`
    axios
      .get(apiURL, reqParams)
      .then((response) => {
        if (response.status === 200) {
          setPullReqList((prev) => [...prev, ...response.data])
          setLoading(false)
          setInfLoader(false)
        } else throw new Error('Failed')
      })
      .catch((error) => {
        setFailed(error)
        setLoading(false)
        setInfLoader(false)
      })
  }
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    if (!prevPageNum || prevPageNum !== pageNum) {
      if (pageNum > 1) setInfLoader(true)
      getPullrequestList()
      setPrevPageNum(pageNum)
      setPageNum((prev) => prev + 1)
    }
  }

  return (
    <div className="container">
      {loading && !infLoader && (
        <div className="spinner height-60vh">
          <Loader type={'Puff'} height={100} width={100} color="#232F90" />
        </div>
      )}
      {!(loading || failed) &&
      Array.isArray(pullReqList) &&
      pullReqList.length > 0 ? (
          <div>
            <div className="title">Neovim: GitHub Pull Requests List</div>
            <div className="title-desc">{titleDesc}</div>
            <Table pullRequests={pullReqList} infiniteLoader={infLoader} />
          </div>
        ) : (
          failed && (
            <div className="spinner height-60vh padding-top-64">
              <img src={SorryImage} />
              <div className="failed">Unable to get data!!</div>
            </div>
          )
        )}
      <Waypoint onEnter={fetchData} />
    </div>
  )
}

export default LandingPage
