import React from "react";
import {
  Table,
  TableRow,
  Text,
  TableCell,
  Grommet,
  Box,
  TableBody,
} from "grommet";
import { grommet } from "grommet";
import DetailViewButtonGroup from "./DetailViewButtonGroup";
import { useLocation } from "react-router-dom";
import { removeTimestampFromDate } from "../util/helpers";

function DetailTable({ deleteBook }) {
  const book = useLocation().state;

  return (
    <Grommet theme={grommet}>
      <Box direction="row" pad="medium" align="center" justify="center">
        <Table caption="Book Details: ">
          <TableBody>
            <TableRow>
              <TableCell>
                <Text weight="bold">Title:</Text>
              </TableCell>
              <TableCell>{book.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Text weight="bold">Author: </Text>
              </TableCell>
              <TableCell>
                <Text>{book.author}</Text>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Text weight="bold">Genre :</Text>
              </TableCell>
              <TableCell>{book.genre}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Text weight="bold">Published: </Text>
              </TableCell>
              <TableCell>
                <Text>{book.releaseYear}</Text>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Text weight="bold">Description:</Text>
              </TableCell>
              <TableCell>{book.description}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Text weight="bold">Status: </Text>
              </TableCell>
              <TableCell>
                <Text>{book.status}</Text>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Text weight="bold">Started Reading:</Text>
              </TableCell>
              <TableCell>
                {removeTimestampFromDate(book.startReading)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Text weight="bold">Finished Reading: </Text>
              </TableCell>
              <TableCell>
                <Text>{removeTimestampFromDate(book.finishReading)}</Text>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Text weight="bold">Rating: </Text>
              </TableCell>
              <TableCell>
                <Text>{book.grade === 0 ? "" : book.grade}</Text>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
      <DetailViewButtonGroup
        id={book.id}
        deleteBook={deleteBook}
      ></DetailViewButtonGroup>
    </Grommet>
  );
}

export default DetailTable;
