import { getCurrentYear } from "./helpers";

export function validateDescriptionLenght(description) {
  return description.length >= 33;
}

export function validateAuthorNameLenght(authorName) {
  return validateTextFieldLenght(authorName);
}

export function validateTitleLenght(title) {
  return validateTextFieldLenght(title);
}

export function validatePublishingYear(published) {
  return published && parseInt(published) > getCurrentYear();
}

export default function validateGenreLenght(genre) {
  return validateTextFieldLenght(genre);
}

function validateTextFieldLenght(textField) {
  return (textField && textField.length <= 2) || textField.length >= 33;
}
