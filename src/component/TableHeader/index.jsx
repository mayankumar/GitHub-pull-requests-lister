import * as React from 'react'
import '../Table/index.scss'

export const TableHeader = () => {
  const headersList = [
    'Title',
    'Base Branch',
    'Author Branch',
    'Author',
    'Created On',
    'Reviewers',
    'Labels',
  ]
  return (
    <thead>
      <tr className="table-header-row">
        {headersList.map((head) => (
          <th key={head} className="table-header">
            {head}
          </th>
        ))}
      </tr>
    </thead>
  )
}

export default TableHeader
