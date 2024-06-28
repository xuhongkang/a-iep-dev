const cmsBaseRoute = `${process.env.NEXT_PUBLIC_ADMIN_URL}/cms/api`;

export async function upload(formData) {
    return await fetch(`${cmsBaseRoute}/jobs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: "include",
        body: JSON.stringify({
            files: formData.files,
            targetLocale: formData.targetLocale,
        }),
    });
}