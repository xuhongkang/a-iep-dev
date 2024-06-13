const cmsBaseRoute = `https://${process.env.NEXT_PUBLIC_DOMAIN}/cms/api`;

export async function login(formData) {
  return await fetch(`${cmsBaseRoute}/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: "include",
    body: JSON.stringify({
      email: formData.email,
      password: formData.password,
    }),
  })
}

export async function signup(formData) {
  return await fetch(`${cmsBaseRoute}/users`, {
    method: "POST", 
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: formData.email,
      password: formData.password,
      role: 'user'
    }),
  })
}

export async function logout() {
  return await fetch(`${cmsBaseRoute}/users/logout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
}