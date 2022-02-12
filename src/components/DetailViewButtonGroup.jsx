import React from "react";
import { Box, Button } from "grommet";
import { Link } from "react-router-dom";
import { deleteBook } from "../util/requests";
function DetailViewButtonGroup({ id }) {
  return (
    <Box align="center">
      <Box width="medium" direction="row" pad="small" justify="between">
        <Link to={`/edit/${id}`}>
          <Button label="Edit"></Button>
        </Link>
        <Button onClick={() => deleteBook(id)} label="Delete" href="/"></Button>
        <Link to={`/`}>
          <Button label="Return"></Button>
        </Link>
      </Box>
    </Box>
  );
}

export default DetailViewButtonGroup;
