const Button = () => {
  return (
    <>
      <div className="grow flex justify-end font-Epilogue">
        <button className="px-6 py-3 mr-2 bg-white  hover:shadow-md  text-indigo-600">
          Login
        </button>
        <button className="px-6 py-3 bg-indigo-600 hover:shadow-indigo-600 hover:shadow-md  text-white ">
          Sign Up
        </button>
      </div>
    </>
  );
};
export default Button;
