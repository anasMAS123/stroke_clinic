import { useSelector } from "react-redux";
import { Audio } from "react-loader-spinner";
import Button from "../ui/Button";

function Result() {
  const isloading = useSelector((state) => state.predict.isLoading);
  const prediction = useSelector((state) => state.predict.prediction);
  const name = useSelector((state) => state.predict.name);
  console.log(isloading, prediction);
  return (
    <div className="bg-[#3C5B6F] flex justify-center items-center flex-col gap-5">
      {isloading ? (
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass
        />
      ) : (
        <>
          <div className="text-center p-6 font-semibold bg-[#153448] rounded-md border-2 border-stone-300 border-solid w-fit text-3xl ">
            {prediction === 1 ? (
              <p className="text-green-500">
                {name} , it seems you are Good😀{" "}
              </p>
            ) : (
              <p className="text-red-600">
                {name} , You are at risk of having a stroke😥. It is best to go
                to the doctor
              </p>
            )}
          </div>
          <p className="text-white font-bold text-xl text-center sm:text-start">
            Be careful 📝: These results are based on artificial intelligence
            and <span className="text-red-600">do not</span> replace the doctor
            in one way or another
          </p>
          <Button to="/stroke_clinic/" invert={true}>
            New Test
          </Button>
        </>
      )}
    </div>
  );
}

export default Result;
