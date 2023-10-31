"use client";

export default function about(param) {
  return (
    <div className="container m-auto my-40 items-center justify-between">
      <div
        className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md flex flex-col items-center
       bg-white md:flex-row md:max-w-xl"
      >
        <img
          className="object-cover w-full rounded-t-lg h-100 md:h-auto md:w-100 md:rounded-none md:rounded-l-lg"
          src="/images/zamil.jpg"
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            About Me
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            I am Hasanat Zamil. I am full stack web developer. I have 18years of
            experience with web programming. Now I am update myself with React
            Js. I am a web developer with a vast array of knowledge in many
            different front end and back end languages, responsive frameworks,
            databases, and best code practices. My objective is simply to be the
            best web developer that I can be and to contribute to the technology
            industry all that I know and can do.
          </p>
        </div>
      </div>
    </div>
  );
}
