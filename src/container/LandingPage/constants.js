/* eslint-disable no-undef */

export const repoURL = 'https://api.github.com/repos/neovim/neovim/pulls'

export const getRequestParameters = () => ({
  accept: 'application/vnd.github.v3+json',
  Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`,
})