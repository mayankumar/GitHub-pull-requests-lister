
import * as React from 'react';
import { useEffect } from 'react';
import axios from "axios";
import { gitHubAccessToken } from '../../env';
import { useState } from 'react';

export const LandingPage = (props) => {
  
  const [pageNum, setPageNum] = useState(0);
  const [pullReqList, setPullReqList] = useState([]); 

  const repoURL = "https://api.github.com/repos/neovim/neovim/pulls";

  const getRequestParameters = (pageNum) => {
    return {
      accept: "application/vnd.github.v3+json",
      owner: gitHubAccessToken,
      repo: "neovim",
      page: pageNum
    }
  }
  const getPullrequestList = ({pageNum}) => {
    const reqParams = getRequestParameters(pageNum);
    axios.get(repoURL, reqParams).then(response => {
      if(response.status === 200) {
        setPullReqList(response.data);
        setPageNum(pageNum + 1);
      }
    })
  }
  useEffect(() => {
    getPullrequestList(pageNum);
  }, []);

  useEffect(() => console.log(pullReqList), [pullReqList])

  return (
    <div>
      Hello
    </div>
  );
};

export default LandingPage