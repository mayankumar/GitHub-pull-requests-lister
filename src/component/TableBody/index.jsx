import * as React from 'react'
import Labels from '../Labels'
import '../Table/index.scss'

export const TableBody = (props) => {
  const { data } = props

  const handleOnClickRoute = (url) => window.open(url, '_blank')

  const formatDateTime = (dateString) => {
    let date = new Date(dateString)
    return `${date.toDateString()} at ${date.getHours()}:${date.getMinutes()}`
  }

  return (
    <tbody>
      {Array.isArray(data) &&
        data.map((row) => {
          const {
            id,
            title,
            user: { login: author },
            base: { label: baseBranch },
            head: { label: authorBranch },
            requested_reviewers,
            created_at,
            labels: tags,
            html_url,
          } = row
          return (
            <tr
              key={id}
              onClick={() => handleOnClickRoute(html_url)}
              className="table-row"
            >
              <td className="text-transform-capitalize">{title}</td>
              <td className="text-align-center">{baseBranch}</td>
              <td>{authorBranch}</td>
              <td className="text-transform-uppercase">
                {author}
              </td>
              <td className="text-align-center">{formatDateTime(created_at)}</td>
              <td className="text-align-center text-transform-uppercase">
                {requested_reviewers
                  .map((reviewer) => reviewer.login)
                  .join(', ')}
              </td>
              <td className="text-transform-capitalize">
                <div className="labels-div">
                  {Array.isArray(tags) && tags.map((tag) => {
                    return <Labels label={tag} key={tag.id} />
                  })}
                </div>
              </td>
            </tr>
          )
        })}
    </tbody>
  )
}

export default TableBody
