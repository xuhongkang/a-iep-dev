
const apiBaseRoute = `https://${process.env.DOMAIN}/api`;

export async function login(formData) {
  console.log('Huh?')
  console.log(process.env.DOMAIN)
  console.log(process.env.NEXT_PUBLIC_DOMAIN)
  const url = `${apiBaseRoute}/login`;
  console.log(url)
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

export async function signup() {
  const url = `${apiBaseRoute}/signup`;
  console.log(url)
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