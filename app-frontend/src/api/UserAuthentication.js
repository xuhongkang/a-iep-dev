const apiBaseRoute = `https://${process.env.NEXT_PUBLIC_DOMAIN}/api`;
const cmsBaseRoute = `https://${process.env.NEXT_PUBLIC_DOMAIN}/cms/api`;

export async function login(formData) {
  try {
    const res = await fetch(`${cmsBaseRoute}/api/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
    })
    return true
  } catch (error) {
    return false
  }
}

export async function signup() {
  const url = `${apiBaseRoute}/signup`;
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Request failed with status ${response.status}: ${errorData.detail}`);
    }
    const result = await response.json();
    console.log('Success:', result);
    return result;
  } catch (error) {
    console.error('Error:', error);
  }
}