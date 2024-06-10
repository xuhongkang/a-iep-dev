export async function login() {
  const response = await fetch('https://a-iep.org/api/login');
  console.log(response)
  return {isSuccessful: response.ok, message: response.json()}
}

export async function signup() {
  const response = await fetch('https://a-iep.org/api/');
  return {isSuccessful: response.ok, message: response.json()}
}