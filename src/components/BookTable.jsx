import React from "react";
import { Box, Grommet, DataTable, Text } from "grommet";
import { grommet } from "grommet/themes";

import { useState } from "react";
import { tableColumns } from "../util/helpers";
import { useNavigate, useSearchParams } from "react-router-dom";
import AddDeleteEditMessage from "./AddDeleteEditMessage";
const BookTable = ({ books }) => {
  const [searchParams] = useSearchParams();

  const [sort, setSort] = useState({
    property: "name",
    direction: "desc",
  });

  const navigateTo = useNavigate();

  return (
    <Grommet theme={grommet}>
      <Box direction="row" justify="center">
        <AddDeleteEditMessage status={searchParams.get("status")} />
      </Box>
      <Box gap="none" direction="row" justify="center">
        <Text weight="bold" size="large">
          Your Books
        </Text>
      </Box>

      <Box pad="medium" justify="center">
        <DataTable
          paginate={{ alignSelf: "center" }}
          step={10}
          columns={tableColumns()}
          data={books}
          sort={sort}
          onSort={setSort}
          onClickRow={(event) => {
            if (event.target.type === "button") {
              navigateTo(`/edit/${event.datum.id}`);
            } else {
              navigateTo(`/details/${event.datum.id}`, {
                state: event.datum,
              });
            }
          }}
        ></DataTable>
      </Box>
    </Grommet>
  );
};
export default BookTable;
