"use client";
import React from "react";
import alert from "../assets/alertIcon.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

function NotFound() {
  const navigate = useRouter();
  return (
    <div className="flex flex-col items-center justify-center h-fit text-center text-light-blue">
      <Image
        className=" flex-1 mb-4"
        height={96}
        width={100}
        src={alert}
        alt="Alert Icon"
      />
      <p className="text-2xl sm:text-3xl md:text-4xl font-semibold">
        Sorry, this link does not exist or is under maintenance.
      </p>
      <button
        onClick={() => navigate.push("/")}
        className="mt-16 text-lg border border-light-blue p-3 rounded-md"
      >
        Go to Homepage
      </button>
    </div>
  );
}

export default NotFound;
