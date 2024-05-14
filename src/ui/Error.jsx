import Button from "./Button";

function Error() {
  return (
    <div className="flex xitems-center justify-center space-y-8 bg-[#153448] h-screen text-white ">
      <div className=" bg-[#3C5B6F] p-12 h-[70%] mt-[100px]  rounded-md">
        <p className=" text-xl pt-5 pb-5">
          😣Something went wrong !! , try again🛠🧰
        </p>
        <p className=" text-center pt-5 pb-5">
          <span className=" text-[#153448] text-xl font-bold">Q :</span> why i
          face that problem ??
        </p>
        <div className="m-auto">
          <ul className=" text-center ">
            <li>
              <span className=" text-[#153448] text-xl font-bold">1 :</span> may
              be a wrong URL
            </li>
            <li>
              <span className=" text-[#153448] text-xl font-bold">2 :</span>{" "}
              wrong in form filling
            </li>
            <li>
              <span className=" text-[#153448] text-xl font-bold">3 :</span>{" "}
              failure in connection
            </li>
          </ul>
        </div>
        <div className="mt-5 text-center">
          <Button to="/stroke_clinic/" invert={true}>
            Go To Home
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Error;
