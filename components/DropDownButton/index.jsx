import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

const DropDownButton = () => {
  const [showList, setShowList] = useState(false);
  const wrapperRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowList(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <div ref={wrapperRef} className="relative">
      <button
        onClick={() => setShowList(!showList)}
        className="flex items-center outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className={showList ? "block" : "hidden"}>
        <div className="absolute right-1">
          <ul className="p-1 rounded-xl border bg-white cursor-pointer space-y-1 shadow-2xl">
            <Link href="/login">
              <li className="bg-white hover:bg-gray-200 py-3 px-14 rounded-lg font-semibold">
                Выйти
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DropDownButton;
