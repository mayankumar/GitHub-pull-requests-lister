/* eslint-disable no-undef */

export const repoURL = 'https://api.github.com/repos/neovim/neovim/pulls'
export const titleDesc = 'A sample React application to represent implementation of infinte loading, new data will be loaded when scrolled to bottom of screen if present.'

export const getRequestParameters = () => ({
  accept: 'application/vnd.github.v3+json',
  Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`,
})