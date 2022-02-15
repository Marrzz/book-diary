import React from "react";
import { Box, Button, Layer, Text } from "grommet";
import { deleteBook } from "../util/requests";

function ConfirmationBox({ onClose, bookId }) {
  return (
    <Layer onClickOutside={onClose} onEsc={onClose}>
      <Box
        pad="medium"
        gap="small"
        width={{ min: "medium" }}
        height={{ min: "small" }}
        fill
        justify="center"
      >
        <Text weight="bold">Are you sure you want to delete this book?</Text>

        <Box direction="row" justify="center" gap="medium">
          <Button label="Cancel" onClick={onClose} />
          <Button
            href="/?status=deleted"
            label="Delete"
            color="red"
            onClick={() => deleteBook(bookId)}
          />
        </Box>
      </Box>
    </Layer>
  );
}

export default ConfirmationBox;
