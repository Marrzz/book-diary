import React from "react";
import { Box, Button } from "grommet";
import { Link } from "react-router-dom";
import { Trash, Edit } from "grommet-icons";

import { useState } from "react";
import ConfirmationBox from "./ConfirmationBox";
function DetailViewButtonGroup({ id }) {
  const [show, setShow] = useState();

  return (
    <Box direction="row" justify="center" gap="small">
      <Link to={`/edit/${id}`}>
        <Button label="Edit" icon={<Edit color="black" />} />
      </Link>
      <Button
        icon={<Trash color="black" />}
        onClick={() => setShow(true)}
        label="Delete"
        color="red"
      />
      {show && (
        <ConfirmationBox onClose={() => setShow(undefined)} bookId={id} />
      )}
      <Link to={`/`}>
        <Button label="Return" />
      </Link>
    </Box>
  );
}

export default DetailViewButtonGroup;
