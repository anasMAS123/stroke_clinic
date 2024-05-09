import { useState } from "react";
import { Form, redirect, useNavigate } from "react-router-dom";
import store from "../../store";
import { findPredict, loading } from "../../slices/predictSlice";
import { useSelector } from "react-redux";
function Test() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [hyperTension, setHyperTension] = useState(false);
  const [heartDisease, setHeartDisease] = useState(false);
  const [gender, setGender] = useState("Male");
  const [isMarried, setIsMarried] = useState(false);
  const [workCase, setWorkCase] = useState("children");
  const [lifeArea, setLifeArea] = useState("");
  const [agl, setAgl] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [smokingStatus, setSmokingStatus] = useState("formerly smoked");
  const [smokingLife, setSmokingLife] = useState(false);
  const [result, setResult] = useState("");

  const isLoading = useSelector((state) => state.predict.isLoading);
  return (
    <div className="bg-[#3C5B6F] text-center text-white ">
      <p className="text-white p-4 text-xl mt-8 font-bold hidden sm:block">
        Check if you are at risk of having a stroke
      </p>
      <Form method="POST">
        <div className=" max-w-[100%] w-[300px] h-[600px] bg-[#153448] rounded-md m-auto sm:w-[900px] p-2 sm:p-5 space-y-3 overflow-y-auto mt-8">
          <div className="flex flex-col sm:flex-row items-center gap-5">
            <label>Your full name : </label>
            <input
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              type="text"
              placeholder=" write your name"
              className="w-[200px] sm:w-[300px] h-10 rounded-md bg-[#3C5B6F] outline-none p-4 sm:focus:w-[400px] transition-all duration-100"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-5">
            <label htmlFor="age">Age : </label>
            <input
              type="range"
              name="age"
              id="age"
              min={0}
              max={100}
              className="w-[200px] sm:w-[300px] accent-[#3C5B6F]"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <span>{age}</span>
            <p className="text-3xl">
              {age <= 10 && "👶"}
              {age > 10 && age <= 40 && "🧒"}
              {age > 40 && age <= 60 && "👨"}
              {age > 60 && "🧓"}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-5">
            <label htmlFor="agl">Average Glucose level : </label>
            <input
              type="range"
              name="agl"
              id="agl"
              min={50}
              max={300}
              className="w-[200px] sm:w-[300px] accent-[#3C5B6F]"
              value={agl}
              onChange={(e) => setAgl(e.target.value)}
            />
            <span>{agl}</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-5">
            <label htmlFor="bmi">BMI : </label>
            <input
              type="range"
              name="bmi"
              id="bmi"
              min={10}
              max={100}
              className="w-[200px] sm:w-[300px] accent-[#3C5B6F]"
              value={bmi}
              onChange={(e) => setBmi(e.target.value)}
            />
            <span>{bmi}</span>
          </div>
          <div className="flex items-center gap-5">
            <label htmlFor="gender">Gender</label>

            <select
              className=" w-[300px] focus:outline-none bg-[#3C5B6F] text-white"
              name="gender"
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <p className="text-3xl">{gender === "Male" ? "👨" : "👩"}</p>
          </div>
          <div className="flex  items-center gap-5">
            <label htmlFor="work-type">work type</label>

            <select
              className="w-[300px] focus:outline-none bg-[#3C5B6F] text-white"
              name="work-type"
              id="work-type"
              value={workCase}
              onChange={(e) => setWorkCase(e.target.value)}
            >
              <option value="children">children</option>
              <option value="Self-employed">self-employed</option>
              <option value="Private">private</option>
              <option value="govt_job">gov-job</option>
              <option value="Never_worked">Never worked</option>
            </select>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-5">
            <label htmlFor="smoking">Do you smoke ? </label>
            <select
              className="w-[200px] sm:w-[300px] focus:outline-none bg-[#3C5B6F] text-white"
              name="smoking"
              id="smoking"
              onChange={(e) => setSmokingStatus(e.target.value)}
            >
              <option value="formerly smoked">formerly smoked</option>
              <option value="never smoked">never smoked</option>
              <option value="smokes">smokes</option>
            </select>
          </div>
          <div className="flex items-center gap-5">
            <span className="text-white">Living area</span>
            <input
              className=" cursor-pointer"
              required
              type="radio"
              name="lifeArea"
              id="urban"
              value="Urban"
              onChange={(e) => setLifeArea(e.target.value)}
            />
            <label htmlFor="urban" className=" cursor-pointer">
              urban
            </label>
            <input
              className=" cursor-pointer"
              required
              type="radio"
              name="lifeArea"
              id="rural"
              value="Rural"
              onChange={(e) => setLifeArea(e.target.value)}
            />
            <label htmlFor="rural" className=" cursor-pointer">
              rural
            </label>
            <span className="text-3xl">
              {lifeArea === "Rural" && "🌻"}
              {lifeArea === "Urban" && "🏭"}
            </span>
          </div>
          <div className="flex items-center gap-5">
            <span className="text-white">Smokign not found ?</span>
            <input
              className=" cursor-pointer"
              type="radio"
              name="smokingLife"
              id="yes"
              value={true}
              onChange={(e) => setSmokingLife(e.target.value)}
            />
            <label htmlFor="yes" className=" cursor-pointer">
              YES
            </label>
            <input
              className=" cursor-pointer"
              type="radio"
              name="smokingLife"
              id="no"
              value={false}
              onChange={(e) => setSmokingLife(e.target.value)}
            />
            <label htmlFor="no" className=" cursor-pointer">
              NO
            </label>
          </div>

          <div className="flex items-center gap-5">
            <label htmlFor="hyperTension" className=" cursor-pointer">
              Do you have hyper Tension ?{" "}
            </label>
            <input
              id="hyperTension"
              name="hyperTension"
              className=" cursor-pointer w-[20px] h-[20px] accent-[#3C5B6F] focus:ring focus:ring-offset-1 focus: ring-[#3C5B6F] "
              type="checkbox"
              value={hyperTension}
              onChange={(e) => setHyperTension(e.target.checked)}
            />
          </div>

          <div className="flex items-center gap-5">
            <label htmlFor="heartDisease" className=" cursor-pointer">
              Do you have heart disease ?
            </label>
            <input
              id="heartDisease"
              name="heartDisease"
              className=" cursor-pointer w-[20px] h-[20px] accent-[#3C5B6F] focus:ring focus:ring-offset-1 focus: ring-[#3C5B6F] "
              type="checkbox"
              value={heartDisease}
              onChange={(e) => setHeartDisease(e.target.checked)}
            />
          </div>

          <div className="flex items-center gap-5">
            <label htmlFor="married">Do you ever Married ? </label>
            <input
              id="married"
              name="married"
              className=" cursor-pointer w-[20px] h-[20px] accent-[#3C5B6F] focus:ring focus:ring-offset-1 focus: ring-[#3C5B6F] "
              type="checkbox"
              value={isMarried}
              onChange={(e) => setIsMarried(e.target.checked)}
            />
            <span className="text-3xl">{isMarried ? "💑" : "🕺"}</span>
          </div>

          <div>
            <input
              type="hidden"
              name="heart_disease"
              value={heartDisease ? 1 : 0}
            />
            <input
              type="hidden"
              name="hypertension"
              value={hyperTension ? 1 : 0}
            />
            <input
              type="hidden"
              name="ever_married"
              value={isMarried ? "Yes" : "No"}
            />
            <input type="hidden" name="work_type" value={workCase} />
            <input type="hidden" name="Residence_type" value={lifeArea} />
            <input type="hidden" name="avg_glucose_level" value={agl} />
            <input type="hidden" name="bmi" value={bmi} />
            <input type="hidden" name="smoking_status" value={smokingStatus} />
            <input
              type="hidden"
              name="smoking_not_found"
              value={smokingLife ? "True" : "False"}
            />
          </div>

          <button
            disabled={isLoading}
            className="px-2 py-3 bg-[#3C5B6F] text-white  rounded-md text-center"
          >
            {isLoading ? "Loading ..." : "submit"}
          </button>
        </div>
      </Form>
    </div>
  );
}

export default Test;

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    name: data.name,
    gender: data.gender,
    age: Number(data.age),
    hypertension: Number(data.hypertension),
    heart_disease: Number(data.heart_disease),
    ever_married: data.ever_married,
    work_type: data.work_type,
    Residence_type: data.lifeArea,
    avg_glucose_level: Number(data.agl),
    bmi: Number(data.bmi),
    smoking_status: data.smoking_status,
    smoking_not_found: data.smoking_not_found,
  };
  console.log(order);
  const result = await predictor(order);

  console.log(result);
  store.dispatch(
    findPredict({ prediction: result.prediction, name: order.name })
  );

  return redirect("/stroke_clinic/result");
}

export async function predictor(order) {
  try {
    store.dispatch(loading());
    const res = await fetch("https://machine-api-eq7w.onrender.com/predict", {
      method: "POST",

      headers: { "Content-Type": "application/json" },

      body: JSON.stringify(order),
    });
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err.message);
  } finally {
    console.log("done");
  }
}
