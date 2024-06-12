
import useUserStore from '@/stores/userStore.js';

const {setUser, clearUser } = useUserStore.getState();
const apiBaseRoute = `https://${process.env.NEXT_PUBLIC_DOMAIN}/api`;

export async function login(formData) {
  let loginResponse = {
    isError: false
  };
  const url = `${apiBaseRoute}/login`;
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
    if (result.errors && result.errors.length > 0) {
        loginResponse.isError = true
    } else if (result.token && result.user && result.user.id) {
        setUser(result.user.id, result.token)
        console.log('Set User', result.user.id)
    } else {
      throw new Error(`Unrecognized Response ${result}`)
    }
    return loginResponse;
  } catch (error) {
    console.error('Error:', error);
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