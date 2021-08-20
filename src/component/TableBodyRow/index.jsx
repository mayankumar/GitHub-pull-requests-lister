import * as React from 'react'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'

export const TableBodyRow = (props) => {
  const { data } = props
  return (
    <TableBody>
      {Array.isArray(data) && data.map((rowData) => (
        <TableRow key={rowData.title}>
          <TableCell component="th" scope="row">
            {rowData.name}
          </TableCell>
          <TableCell align="right">{rowData.calories}</TableCell>
          <TableCell align="right">{rowData.fat}</TableCell>
          <TableCell align="right">{rowData.carbs}</TableCell>
          <TableCell align="right">{rowData.protein}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  )
}

export default TableRow