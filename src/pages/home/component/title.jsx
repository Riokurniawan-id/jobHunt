const Title = () => {
  return (
    <>
      <div className="my-auto w-1/2 content-start">
        <h1 className="font-redHat font-semibold text-7xl mb-5">
          Discover
          <br /> more than
          <br /> <span className="text-sky-500">5000+ Jobs</span>
        </h1>
        <p className="font-Epilogue text-sm text-slate-700/75 mb-9">
          Great platform for the job seeker that searching for new career
          heights and passionate about startups.
        </p>
        <label className="relative block">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
          </span>
          <input
            className="placeholder:italic placeholder:text-sky-500 block bg-white w-full border border-sky-500 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search for anything..."
            type="text"
            name="search"
          />
        </label>
        <p className="font-Epilogue text-sm text-slate-700/75 mb-9">
          Popular : UI Designer, UX Researcher, Android, Admin
        </p>
      </div>
    </>
  );
};
export default Title;
