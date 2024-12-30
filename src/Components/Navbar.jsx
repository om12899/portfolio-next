import React, { useState } from "react";
import { faArchive, faHome, faPerson } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faContactCard } from "@fortawesome/free-regular-svg-icons";
import logo from "../assets/card.png"; // Adjust the path to your logo
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigateToAdmin = () => {
    router.push("/admin");
  };
  const [activeTab, setActiveTab] = useState(5);

  return (
    <nav className="pt-2 bg-inherit">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div onClick={navigateToAdmin} className="flex items-center">
            <Image src={logo} width={100} height={25} alt="Logo" />
          </div>
          <div className="hidden md:flex md:ml-auto md:space-x-4">
            <Link
              href="/"
              className={`text-${
                activeTab === 1 ? "dark-blue" : "light-gray"
              } hover:text-dark-blue px-3 py-2 rounded-md text-sm font-medium`}
            >
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              Home
            </Link>
            <Link
              href="/about"
              className={`text-${
                activeTab === 2 ? "dark-blue" : "light-gray"
              } hover:text-dark-blue px-3 py-2 rounded-md text-sm font-medium`}
            >
              <FontAwesomeIcon icon={faPerson} className="mr-2" />
              About
            </Link>
            <Link
              href="/contact"
              className={`text-${
                activeTab === 3 ? "dark-blue" : "light-gray"
              } hover:text-dark-blue px-3 py-2 rounded-md text-sm font-medium`}
            >
              <FontAwesomeIcon icon={faContactCard} className="mr-2" />
              Contact
            </Link>
            <Link
              href="/archive"
              className={`text-${
                activeTab === 4 ? "dark-blue" : "light-gray"
              } hover:text-dark-blue px-3 py-2 rounded-md text-sm font-medium`}
            >
              <FontAwesomeIcon icon={faArchive} className="mr-2" />
              Archive
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="border border-dark-blue text-dark-blue inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mb-6">
          <div
            className={`px-2 mx-2 border-2  border-dark-blue bg-dark-gray/70 rounded-lg shadow-lg mt-4 pt-2 pb-3 space-y-1 sm:px-3`}
          >
            <Link
              href="/"
              onClick={() => isOpen(false)}
              className="text-light-blue hover:text-dark-blue block px-3 py-2 rounded-lg text-base font-medium"
            >
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => isOpen(false)}
              className="text-light-blue hover:text-dark-blue block px-3 py-2 rounded-lg text-base font-medium"
            >
              <FontAwesomeIcon icon={faPerson} className="mr-2" />
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => isOpen(false)}
              className="text-light-blue hover:text-dark-blue block px-3 py-2 rounded-md text-base font-medium"
            >
              <FontAwesomeIcon icon={faContactCard} className="mr-2" />
              Contact
            </Link>
            <Link
              href="/archive"
              onClick={() => isOpen(false)}
              className="text-light-blue hover:text-dark-blue block px-3 py-2 rounded-md text-base font-medium"
            >
              <FontAwesomeIcon icon={faArchive} className="mr-2" />
              Archive
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
