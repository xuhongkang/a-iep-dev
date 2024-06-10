export async function login() {
  const response = await fetch('https://a-iep.org/api/');
  return {isSuccessful: response.ok, message: response.message}
}

export async function signup() {
  const response = await fetch('https://a-iep.org/api/');
  return {isSuccessful: response.ok, message: response.message}
}