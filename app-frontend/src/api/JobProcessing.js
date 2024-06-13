const cmsBaseRoute = `https://${process.env.NEXT_PUBLIC_DOMAIN}/cms/api`;

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