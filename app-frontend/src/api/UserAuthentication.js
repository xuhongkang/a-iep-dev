export async function login() {
  const response = await fetch('https://localhost:8000/private/login');
  return {isSuccessful: response.ok, message: response.message}
}

export async function signup() {
  const response = await fetch('https://localhost:8000/private/signup');
  return {isSuccessful: response.ok, message: response.message}
}