export async function login(formData) {
  const url = 'https://a-iep.org/api/login';
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
  const response = await fetch('https://a-iep.org/api/');
  return {isSuccessful: response.ok, message: response.json()}
}