import { Box, Text } from "grommet";
import React from "react";
import { useState } from "react";
import { getActionMessage } from "../util/helpers";
import { useEffect } from "react";

function AddDeleteEditMessage({ status }) {
  const [attributes, setAttributes] = useState({});

  useEffect(() => {
    if (status) {
      setAttributes(getActionMessage(status));
    }
  }, [status]);

  return (
    <Box
      animation={{ type: "fadeOut", duration: 5000, delay: 2000 }}
      background={attributes["color"]}
      round
      height="xxsmall"
      width="medium"
      justify="center"
      direction="row"
      pad="small"
    >
      <Text>{attributes["message"]}</Text>
    </Box>
  );
}

export default AddDeleteEditMessage;
