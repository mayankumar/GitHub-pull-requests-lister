import * as React from 'react'
import Table from '@material-ui/core/Table'
import TableContainer from '@material-ui/core/TableContainer'
import Paper from '@material-ui/core/Paper'
import './index.scss'
import TableHeader from '../TableHeader'
// import { TableBodyRow } from '../TableBodyRow'

export const TableData = (props) => {
  const { pullRequests } = props
  console.log(JSON.stringify(pullRequests[1]), 'here')
  return (
    <TableContainer component={Paper}>
      <Table className="table">
        <TableHeader />
        {/* <TableBodyRow data={pullRequests} /> */}
      </Table>
    </TableContainer>
  )
}
