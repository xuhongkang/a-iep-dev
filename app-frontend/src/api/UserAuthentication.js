export async function login() {
  const response = await fetch('http://a-iep.org/api/private/login');
  return {isSuccessful: response.ok, message: response.message}
}

export async function signup() {
  const response = await fetch('http://a-iep.org/api/private/signup');
  return {isSuccessful: response.ok, message: response.message}
}