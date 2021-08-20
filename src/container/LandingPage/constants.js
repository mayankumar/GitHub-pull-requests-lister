/* eslint-disable no-undef */

export const repoURL = 'https://api.github.com/repos/neovim/neovim/pulls'

export const getRequestParameters = (pageNum) => {
  return {
    accept: 'application/vnd.github.v3+json',
    owner: process.env.GITHUB_ACCESS_TOKEN,
    repo: 'neovim',
    page: pageNum,
  }
}