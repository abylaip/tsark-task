import React from "react";

const SiteContaier = ({ host }: { host: string }) => {
  return (
    <article className="flex justify-center items-center w-full rounded shadow p-4 bg-white hover:bg-slate-200 cursor-pointer">
      <a
        className="hover:text-purple-600"
        href={host}
        target="_blank"
        rel="noreferrer"
      >
        {host}
      </a>
    </article>
  );
};

export default SiteContaier;
