async function getQuote() {
  try {
    const res = await fetch('https://backend-y6s6.onrender.com');  // Local backend URL
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    console.log("Quote from server:", data);  // Debug print in browser console
    document.getElementById('quote').textContent = data.quote;
  } catch (error) {
    console.error("Error fetching quote:", error);
    document.getElementById('quote').textContent = "Oops! Could not load quote.";
  }
}

