async function getQuote() {
  try {
    const res = await fetch('https://backend-y6s6.onrender.com/api/quote');  // Render backend URL
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    console.log("Quote from server:", data);
    document.getElementById('quote').textContent = data.quote;
  } catch (error) {
    console.error("Error fetching quote:", error);
    document.getElementById('quote').textContent = "Oops! Could not load quote.";
  }
}

// Auto load quote on page load
window.onload = () => {
  getQuote();
};
