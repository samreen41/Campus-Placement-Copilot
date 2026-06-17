export async function uploadResume(file) {

  const formData = new FormData();

  formData.append("resume", file);

  const response = await fetch(
    "http://localhost:5000/api/resume",
    {
      method: "POST",
      body: formData,
    }
  );

  return await response.json();

}