import { grommet } from "grommet/themes";
import { deepMerge } from "grommet/utils";
import React from "react";
import { Text, Button, Box } from "grommet";
import { Link } from "react-router-dom";

export function getCurrentYear() {
  const DATE = new Date();

  return DATE.getFullYear();
}
export function getTextFieldRegexPattern() {
  return /^[a-z]/i;
}

export function getPublishingYearRegexPattern() {
  return /^[0-9]{1,4}/i;
}
export function getEmptyBook() {
  return {
    name: "",
    author: "",
    genre: "",
    releaseYear: "",
    description: "",
    startReading: "",
    finishReading: "",
    status: "",
    grade: 0,
  };
}

export function setDefaultValuesWhenStatusChanges(valueObj) {
  if (valueObj.status === "In-Progress") {
    valueObj = { ...valueObj, finishReading: "" };
  }
  if (valueObj.status === "Unread") {
    valueObj = { ...valueObj, startReading: "", finishReading: "" };
  }

  return valueObj;
}
export function getCustomTheme() {
  const customTheme = deepMerge(grommet, {
    formField: {
      border: {
        side: "all",
      },
      error: {
        size: "xsmall",
      },
      help: {
        size: "xsmall",
      },
      info: {
        size: "xsmall",
      },
      label: {
        size: "small",
      },
      round: "4px",
    },
    global: { font: { size: "small" } },
  });
  return customTheme;
}

export function tableColumns() {
  const COLUMNS = [
    {
      property: "name",
      header: <Text>Title</Text>,
      primary: true,
      size: "small",
    },
    { property: "author", header: <Text>Author</Text>, primary: true },
    { property: "genre", header: <Text>Genre</Text>, primary: true },
    {
      property: "releaseYear",
      header: <Text>Published</Text>,
      primary: true,
    },
    { property: "status", header: <Text>Status</Text>, primary: true },
    { property: "grade", header: <Text>Grade</Text>, primary: true },
    {
      property: "details",
      header: (
        <Link to="/addbook">
          <Button label="Add Book"></Button>
        </Link>
      ),
      primary: true,
      render: () => (
        <Box>
          <Button label="Edit"></Button>
        </Box>
      ),
    },
  ];

  return COLUMNS;
}
