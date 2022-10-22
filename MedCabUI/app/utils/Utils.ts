function isValidEmail(value: string) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(value).toLowerCase());
}

function validateEmail(value: string, setEmailError: (value: string) => void) {
  if (value === '') {
    setEmailError('');
  } else if (isValidEmail(value)) {
    setEmailError('');
  } else {
    setEmailError('Invalid Email');
  }
}

function validateUsername(
  value: string,
  setPasswordError: (value: string) => void,
) {
  if (value === '') {
    setPasswordError('Username is required');
  } else {
    setPasswordError('');
  }
}

function validatePassword(
  value: string,
  setPasswordError: (value: string) => void,
) {
  if (value.length < 8) {
    setPasswordError('Password must be 8 characters');
  } else {
    setPasswordError('');
  }
}

function validatePasswordLogin(
  value: string,
  setPasswordError: (value: string) => void,
) {
  if (value === '') {
    setPasswordError('Password is required');
  } else {
    setPasswordError('');
  }
}

function validateInput(
  value: string,
  minLength: number,
  setError: (value: string) => void,
) {
  if (value.length !== 0 && value.length < minLength) {
    setError('still invalid');
  } else {
    setError('');
  }
}

function calculateAngle(
  coordinates: Array<{latitude: number; longitude: number}>,
) {
  let startLat = coordinates[0].latitude;
  let startLng = coordinates[0].longitude;
  let endLat = coordinates[1].latitude;
  let endLng = coordinates[1].longitude;
  let dx = endLat - startLat;
  let dy = endLng - startLng;

  return (Math.atan2(dy, dx) * 180) / Math.PI;
}

export default {
  isValidEmail,
  validateEmail,
  validatePassword,
  validatePasswordLogin,
  validateUsername,
  calculateAngle,
  validateInput,
};
