export async function login() {
  const response = await fetch('https://a-iep.org/api/public/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: {
      email: 'xu.hong@ai4impact.ai',
      password: 'Racecar48'
    }
  });
  result = await response.json()
  return {isSuccessful: response.ok, message: result}
}

export async function signup() {
  const response = await fetch('https://a-iep.org/api/');
  return {isSuccessful: response.ok, message: response.json()}
}