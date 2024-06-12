const apiBaseRoute = `https://${process.env.NEXT_PUBLIC_DOMAIN}/api`;
const cmsBaseRoute = `https://${process.env.NEXT_PUBLIC_DOMAIN}/cms/api`;

export async function login(formData) {
  await fetch(`${cmsBaseRoute}/users/login`, {
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
  try {
    await fetch(`${cmsBaseRoute}/{collection-slug}`, {
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
  } catch (error) {
    console.error('Error:', error);
  }
}

export async function logout() {
  await fetch('http://localhost:3000/api/[collection-slug]/logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
}