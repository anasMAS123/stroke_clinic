import Button from "../ui/Button";
function Home() {
  return (
    <div className="bg-[#3C5B6F]">
      <div className="text-white text-xl text-center mt-6">
        Welcome to{" "}
        <span className=" text-[#153448] text-2xl  font-semibold ">
          Stroke{" "}
        </span>
        clinic 🩺
      </div>
      <div className="bg-[#153448] w-[300px] h-[550px] m-auto p-4 mt-6 sm:w-[800px] sm:h-[400px] ">
        <div>
          <p className="text-white text-sm p-2 text-center">
            What is the <span className="">Stroke</span> ?
          </p>
          <p className="text-white text-sm p-2 text-center">
            Occurs when the supply of blood to the brain is reduced or blocked
            completely, which prevents brain tissue from getting oxygen and
            nutrients.
          </p>
          <div className="flex gap-2">
            <ul className="text-sm space-y-2 text-white mt-3 text-center sm:text-start">
              <li>
                👩‍⚕️ Condition Highlight Urgent medical attention is usually
                recommended by healthcare providers
              </li>
              <li>💀 May be dangerous or life threatening</li>
              <li>💊 Treatable by a medical professional</li>
              <li>💉 Often requires lab test or imaging</li>
              <li>🧬 Can last several years or be lifelong</li>
              <li>👴 Common for ages 60 and older</li>
            </ul>

            <div className="mt-10 hidden sm:block ">
              <img
                src="https://th.bing.com/th?id=OCII.68C9444253AC4FC854D443DDC1CF7318508DB5B7FDBFD46A0D36B2F1B37A7019&w=245&h=170&o=6&dpr=1.3&pid=HealthConditionsMainline"
                alt=" not found "
              />
            </div>
          </div>
          <div className=" uppercase text-center mt-4 sm:mt-0">
            <Button to="/stroke_clinic/test">Move to test</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
