interface ValidateProps {
  password: string;
}

export const validatePassword = (props: ValidateProps) => {
  let { password } = props;
  let hasMinLength = false,
    hasUpperCase = false,
    hasLowerCase = false,
    hasNumber = false,
    isValid = false;

  if (password.length >= 6) {
    hasMinLength = true;
  } else {
    hasMinLength = false;
  }
  if (password.match(/[\d]/)) {
    hasNumber = true;
  } else {
    hasNumber = false;
  }
  if (password.match(/[A-Z]/)) {
    hasUpperCase = true;
  } else {
    hasUpperCase = false;
  }
  if (password.match(/[a-z]/)) {
    hasLowerCase = true;
  } else {
    hasLowerCase = false;
  }
  if (hasMinLength && hasUpperCase && hasLowerCase && hasNumber) {
    isValid = true;
  } else {
    isValid = false;
  }

  return {
    password,
    hasMinLength,
    hasNumber,
    hasUpperCase,
    hasLowerCase,
    isValid,
  };
};
