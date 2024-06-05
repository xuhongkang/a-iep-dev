export async function login() {
  const response = await fetch('app-backend:8000/api/private/login');
  return {isSuccessful: response.ok, message: response.message}
}

export async function signup() {
  const response = await fetch('app-backend:8000/api/private/signup');
  return {isSuccessful: response.ok, message: response.message}
}