import { useEffect } from "react";

function App() {
  useEffect(function () {
    async function predict() {
      const res = await fetch("http://machine-api-eq7w.onrender.com/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          gender: "Male",
          age: 20.0,
          hypertension: 1,
          heart_disease: 0,
          ever_married: "Yes",
          work_type: "children",
          Residence_type: "Rural",
          avg_glucose_level: 100.0,
          bmi: 90.0,
          smoking_status: "never smoked",
          smoking_not_found: "False",
        }),
      });
      const data = await res.json();
      console.log(data);
    }
    predict();
  });
  return <h1 className=" text-red-400">hello react</h1>;
}

export default App;
