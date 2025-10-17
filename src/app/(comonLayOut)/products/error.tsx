"use client";
const ErrorPage = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  console.log(error);
  return (
    <div className=" flex text-center items-center justify-center min-h-dvh">
      <div>
        <h2 className="text-xl font-bold">Opps...</h2>
        <p>something wrong</p>
        <p>{error.message}</p>
        <button
          onClick={() => reset()}
          className="bg-black text-white py-2 px-5 rounded-lg shadow-md hover:bg-green-700 transition-all"
        >
          try again
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
