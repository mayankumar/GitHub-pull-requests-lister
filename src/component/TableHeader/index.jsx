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
      <tr>
        {headersList.map((head) => (
          <th key={head}>
            {head}
          </th>
        ))}
      </tr>
    </thead>
  )
}

export default TableHeader
