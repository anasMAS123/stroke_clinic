export async function predict(order) {
  try {
    const res = await fetch("https://machine-api-eq7w.onrender.com/predict", {
      method: "POST",

      headers: { "Content-Type": "application/json" },

      body: JSON.stringify(order),
    });
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err.message);
  } finally {
    console.log("done");
  }
}
