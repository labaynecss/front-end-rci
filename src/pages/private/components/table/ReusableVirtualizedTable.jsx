import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableVirtuoso } from "react-virtuoso";

const VirtuosoTableComponents = {
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table
      {...props}
      sx={{
        borderCollapse: "separate",
        tableLayout: "fixed",
      }}
    />
  ),
  TableHead,
  TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
  TableBody: React.forwardRef((props, ref) => (
    <TableBody {...props} ref={ref} />
  )),
};

function ReusableVirtualizedTable({ data, columns, renderHeader, renderRow }) {
  return (
    <Paper
      style={{
        height: 348,
        width: "100%",
        background: "rgb(0, 0, 0, 0.1)",
        backdropFilter: "blur(10px)",
      }}
    >
      <TableVirtuoso
        data={data}
        components={VirtuosoTableComponents}
        fixedHeaderContent={renderHeader}
        itemContent={renderRow}
        columns={columns}
        sx={{
          width: "100%",
          background: "rgb(0, 0, 0, 0.0)",
          backdropFilter: "blur(10px)",
        }}
      />
    </Paper>
  );
}

export default ReusableVirtualizedTable;
