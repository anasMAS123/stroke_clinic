import Button from "../ui/Button";

function About() {
  return (
    <div className="bg-[#3C5B6F] flex flex-col space-y-4 justify-center items-center text-white text-center sm:text-start">
      <p className="text-3xl font-semibold italic">
        the web application helps you to determine if you are at a risk of
        stroke by using <span className=" text-green-500">AI model</span>.
      </p>
      <Button to="/stroke_clinic/test" invert={true}>
        Teke me to the test{" "}
      </Button>
    </div>
  );
}

export default About;
