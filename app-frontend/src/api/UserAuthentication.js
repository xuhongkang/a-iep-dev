export async function login() {
  const response = await fetch('https://a-iep.org/api/login');
  return {isSuccessful: response.ok, message: await response.json()}
}

export async function signup() {
  const response = await fetch('https://a-iep.org/api/');
  return {isSuccessful: response.ok, message: response.json()}
}