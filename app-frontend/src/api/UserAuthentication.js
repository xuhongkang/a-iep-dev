export async function login() {
  const response = await fetch('https://a-iep.org/api/login');
  result = await response.json()
  return {isSuccessful: response.ok, message: result}
}

export async function signup() {
  const response = await fetch('https://a-iep.org/api/');
  return {isSuccessful: response.ok, message: response.json()}
}