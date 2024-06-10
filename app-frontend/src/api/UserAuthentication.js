export async function login() {
  const response = await fetch('https://a-iep.org/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    }
  });
  return {isSuccessful: response.ok, message: response.json()}
}

export async function signup() {
  const response = await fetch('https://a-iep.org/api/');
  return {isSuccessful: response.ok, message: response.json()}
}