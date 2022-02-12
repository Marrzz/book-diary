import React from "react";
import { Box, Grommet, Pagination, DataTable } from "grommet";
import { grommet } from "grommet/themes";

import { useState, useEffect } from "react";
import { tableColumns } from "../util/helpers";
import { useNavigate } from "react-router-dom";
const BookTable = ({ books }) => {
  const [sort, setSort] = useState({
    property: "name",
    direction: "desc",
  });
  const [currentData, setCurrentData] = useState();

  useEffect(() => {
    setCurrentData(books.slice(0, 10));
  }, [books]);

  const navigateTo = useNavigate();

  const handleChange = ({ startIndex, endIndex }) => {
    const nextData = books.slice(startIndex, endIndex);
    setCurrentData(nextData);
  };

  return (
    <Grommet theme={grommet}>
      <Box basis="small" pad="large" justify="center">
        <DataTable
          caption="Your Books"
          columns={tableColumns()}
          data={currentData}
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
      <Box justify="center" align="center">
        <Pagination
          numberItems={books.length}
          onChange={handleChange}
        ></Pagination>
      </Box>
    </Grommet>
  );
};
export default BookTable;
