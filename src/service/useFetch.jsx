import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

export default function useFetch(page) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [list, setList] = useState([])

  const getDataList = useCallback(async () => {
    try {
      await setLoading(true)
      await setError(false)
      const res = await axios.get(repoURL, getRequestParameters())
      await setList((prev) => [... new Set([...prev, ...res.data])])
      setLoading(false)
    } catch (err) {
      setError(err)
    }
  }, [page])

  useEffect(() => {
    getDataList()
  }, [getDataList, page])

  return { loading, error, list }
}

const repoURL = 'https://api.github.com/repos/neovim/neovim/pulls'

const getRequestParameters = (pageNum) => {
  return {
    accept: 'application/vnd.github.v3+json',
    // eslint-disable-next-line no-undef
    owner: process.env.GITHUB_ACCESS_TOKEN,
    repo: 'neovim',
    page: pageNum,
  }
}
