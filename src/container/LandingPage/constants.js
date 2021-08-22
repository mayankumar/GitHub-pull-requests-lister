/* eslint-disable no-undef */

export const repoURL = 'https://api.github.com/repos/neovim/neovim/pulls'
export const imageURL = 'https://lh3.googleusercontent.com/proxy/j77mH0XE5dadDGfMVATCtnmZYQH2t4ID_HdswxKL28DnXEQgNFbwDk6WY5X-Hhl7UPMea95HGoOLNkLqomjMkjIf74Q_4HxqLNGDMEWahIVyNqSizAjeQ8r3p3D-nSy-EulPfb-sdXw8cCQfaGpxTZJUqmS5GDNenHY'
export const titleDesc = 'A sample React application to represent implementation of infinte loading, new data will be loaded when scrolled to bottom of screen if present.'

export const getRequestParameters = () => ({
  accept: 'application/vnd.github.v3+json',
  Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`,
})