export async function askAI(message) {

  const response = await fetch(
    "http://localhost:5000/api/ai",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message
      })
    }
  );

  return await response.json();

}