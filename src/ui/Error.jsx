function Error() {
  return (
    <div className="flex xitems-center justify-center space-y-8 bg-[#153448] h-screen text-white ">
      <p>😣Something went wrong !! , try again🛠🧰</p>
      <p>why i face that problem ??</p>
      <ul className="">
        <li>may be a wrong URL</li>
        <li>wrong in form fill</li>
        <li>connection failure</li>
      </ul>
    </div>
  );
}

export default Error;
