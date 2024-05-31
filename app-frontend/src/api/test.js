
export async function fetchBackendTestData() {
    const response = await fetch('/');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  }