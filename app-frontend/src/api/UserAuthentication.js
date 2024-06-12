
import useUserStore from '@/stores/userStore.js';

const {setUser, clearUser } = useUserStore.getState();
const apiBaseRoute = `https://${process.env.NEXT_PUBLIC_DOMAIN}/api`;

export async function login(formData) {
  const res = await fetch('https://a-iep.org/cms/api/[collection-slug]/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: formData.email,
    password: formData.password,
  }),
})
  const result = await res.json()
  console.log(result)
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