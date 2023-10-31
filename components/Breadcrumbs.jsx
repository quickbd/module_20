import Link from "next/link";

export default function breadcrumbs(param) {
  const pathway = JSON.parse(param.pathway);
  console.log(pathway);
  return (
    <nav className="bg-grey-light w-full rounded-md">
      <div className="container mt-36 mb-10">
        <h1 className="text-[20px]">{param.title}</h1>
        <ol className="list-reset flex">
          {pathway.map((item, i) => {
            return (
              <li key={i}>
                {item.url != "" ? (
                  <Link
                    href={item.url ?? ""}
                    className="text-blue transition duration-150 ease-in-out hover:text-blue-600 focus:text-blue-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                  >
                    {item.caption ?? ''}
                  </Link>
                ) : (
                  item.caption
                )}

                {item.url != "" ? (
                  <span className="mx-2 text-neutral-500 dark:text-neutral-400">
                    {">"}
                  </span>
                ) : (
                  ""
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
