import React from "react";
import {
  getCurrentYear,
  getCustomTheme,
  getEmptyBook,
  getPublishingYearRegexPattern,
  getTextFieldRegexPattern,
  setDefaultValuesWhenStatusChanges,
} from "../util/helpers";
import {
  Box,
  Button,
  Form,
  FormField,
  Grommet,
  Select,
  Heading,
  DateInput,
} from "grommet";

import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getBookById } from "../util/requests";

function BookForm({ editForm, updateBook, submit }) {
  const { id } = useParams();
  const [value, setValue] = useState({
    initialState: getEmptyBook(),
    editedState: getEmptyBook(),
  });

  useEffect(() => {
    if (id) {
      getBookById(id).then((data) => {
        setValue({ initialState: data, editedState: data });
      });
    }
  }, [id]);

  const [valid, setValid] = useState(false);

  const onChange = (nextValue) => {
    nextValue = setDefaultValuesWhenStatusChanges(nextValue);
    setValue({ ...value, editedState: nextValue });
  };

  const saveBook = () => {
    if (editForm) {
      updateBook(value.editedState);
    } else {
      submit(value.editedState);
    }
  };

  return (
    <Grommet full theme={getCustomTheme()}>
      <Box fill align="center" justify="center" pad="medium">
        <Heading level={2}>{id ? "Edit Book: " : "Add a new book: "}</Heading>
        <Box width="medium">
          <Form
            validate="change"
            value={value.editedState}
            onChange={onChange}
            onValidate={(validationResults) => {
              setValid(validationResults.valid);
            }}
          >
            <FormField
              label="Title*"
              name="name"
              required
              validate={[
                {
                  regexp: getTextFieldRegexPattern(),
                  message: "Title can contain only letters and digits!",
                },
                (name) => {
                  if ((name && name.length <= 2) || name.length >= 33)
                    return "Title must be between 3 and 32 characters";
                  return undefined;
                },
              ]}
            />
            <FormField
              label="Author*"
              name="author"
              required
              validate={[
                { regexp: getTextFieldRegexPattern() },
                (author) => {
                  if ((author && author.length <= 2) || author.length >= 33)
                    return "Athor's name must be between 3 and 32 characters";
                  return undefined;
                },
              ]}
            />
            <FormField
              label="Genre*"
              name="genre"
              required
              validate={[
                { regexp: getTextFieldRegexPattern() },
                (genre) => {
                  if ((genre && genre.length <= 2) || genre.length >= 33)
                    return "Genre must be between 3 and 32 characters";
                  return undefined;
                },
              ]}
            />
            <FormField
              label="Published*"
              name="releaseYear"
              required
              validate={[
                {
                  regexp: getPublishingYearRegexPattern(),
                  message: "Year must be numeric and be maximum 4 digits long!",
                },
                (releaseYear) => {
                  if (releaseYear && parseInt(releaseYear) > getCurrentYear())
                    return "Publishing year can't be greater than current year!";

                  return undefined;
                },
              ]}
            />
            <FormField
              label="Description"
              name="description"
              validate={[
                (description) => {
                  if (description.length >= 33)
                    return "Must be less than 33 characters long!";
                  return undefined;
                },
              ]}
            />

            <FormField label="Status*" name="status" htmlFor="select-size">
              <Select
                name="status"
                id="select-size"
                options={["Unread", "In-Progress", "Finished"]}
              ></Select>
            </FormField>
            <FormField label="Started Reading" name="startReading">
              <DateInput
                format="dd/mm/yyyy"
                name="startReading"
                disabled={
                  value.status === "Unread" || value.status === ""
                    ? true
                    : false
                }
              />
            </FormField>
            <FormField label="Finished Reading" name="finishReading">
              <DateInput
                name="finishReading"
                format="dd/mm/yyyy"
                disabled={
                  value.status === "Unread" ||
                  value.status === "In-Progress" ||
                  value.status === ""
                    ? true
                    : false
                }
              ></DateInput>
            </FormField>

            <FormField label="Rating">
              <Select
                disabled={value.status !== "Finished"}
                name="grade"
                id="select-size"
                defaultChecked="Unread"
                options={["1", "2", "3", "4", "5"]}
              />
            </FormField>

            <Box
              direction="row"
              justify="between"
              margin={{ top: "medium" }}
              pad="medium"
            >
              <Link to="/">
                <Button label="Cancel" />
              </Link>
              <Button
                type="reset"
                label="Reset"
                onClick={() =>
                  setValue({ ...value, editedState: value.initialState })
                }
              ></Button>
              <Button
                label="Save"
                type="submit"
                disabled={!valid}
                onClick={saveBook}
                href="/"
                primary
              />
            </Box>
          </Form>
        </Box>
      </Box>
    </Grommet>
  );
}

export default BookForm;
