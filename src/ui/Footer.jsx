function Footer() {
  return (
    <div className=" h-16 bg-[#153448] border-solid border-b-1 font-semibold text-lg p-4 text-stone-300 flex items-center max-w-[100%]">
      © Powered by anas {new Date().getFullYear()}
    </div>
  );
}

export default Footer;
