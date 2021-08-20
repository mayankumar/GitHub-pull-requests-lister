import * as React from 'react'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

export const TableHeader = () => {

  const headersList = ['Title', 'Base Branch', 'Author Branch', 'Author', 'Created On', 'Reviewers', 'Labels']
  return (
    <TableHead>
      <TableRow>
        {
          headersList.map(header => <TableCell key={header}>{header}</TableCell>)
        }
      </TableRow>
    </TableHead>
  )
}

export default TableHeader