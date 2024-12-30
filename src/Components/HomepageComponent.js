"use client";
import Image from "next/image";
import Link from "next/link";

import { TypeAnimation } from "react-type-animation";
function HomepageComponent() {
  return (
    <div>
      {" "}
      <div>
        <div className="text-lg md:text-2xl mt-4 md:mt-8 text-center font-semibold text-light-blue/70">
          <TypeAnimation
            sequence={[
              "Creating Inclusive Experiences,", // Types 'One'
              2000, // Waits 2s
              // "Pixel by Pixel.", // Deletes 'One' and types 'Two'
              // 2000, // Waits 2s
            ]}
            wrapper="span"
            cursor={false}
            repeat={1}
            style={{ fontSize: "1.5em", display: "inline-block" }}
            className="text-light-blue"
            speed={25}
          />{" "}
          <div className=" md:my-4"></div>
          <TypeAnimation
            sequence={[
              // "Creating Inclusive Experiences.", // Types 'One'
              2500,
              "Pixel by Pixel.", // Deletes 'One' and types 'Two'
              2000, // Waits 2s
            ]}
            wrapper="span"
            cursor={false}
            repeat={1}
            style={{ fontSize: "1.5em", display: "inline-block" }}
            speed={25}
          />
          <div>
            <div className="p-4 mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {/* CMS */}
                <div
                  className="relative w-full pb-[100%] bg-left bg-cover group"
                  style={{
                    backgroundImage: `url("https://portfolio-images-2.s3.ap-south-1.amazonaws.com/CMS1.png")`,
                  }}
                >
                  <Link href="/CMS">
                    <div className="absolute inset-0 bg-light-blue bg-opacity-90 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                      <p className="text-dark-gray font-semibold text-xl">
                        Content Management System
                      </p>
                    </div>
                  </Link>
                </div>
                {/* Turia */}
                <div
                  className="relative w-full pb-[100%] bg-center bg-cover group"
                  style={{
                    backgroundImage: `url("https://portfolio-images-2.s3.ap-south-1.amazonaws.com/turia1.jpeg")`,
                  }}
                >
                  <Link href="/turia-website">
                    <div className="absolute inset-0 bg-light-blue bg-opacity-90 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                      <p className="text-dark-gray font-semibold text-xl">
                        Turia - Website
                      </p>
                    </div>
                  </Link>
                </div>
                {/* StitchCraft */}
                <div
                  className="relative w-full pb-[100%] bg-left bg-cover group"
                  style={{
                    backgroundImage: `url("https://portfolio-images-2.s3.ap-south-1.amazonaws.com/tailor-ecom-1.png")`,
                  }}
                >
                  <Link href="/stitchcraft">
                    <div className="absolute inset-0 bg-light-blue bg-opacity-90 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                      <p className="text-dark-gray font-semibold text-xl">
                        StitchCraft - Ecommerce for Tailors
                      </p>
                    </div>
                  </Link>
                </div>
                {/* Tattoo */}
                <div
                  className="relative w-full pb-[100%] bg-center bg-cover group"
                  style={{
                    backgroundImage: `url("https://portfolio-images-2.s3.ap-south-1.amazonaws.com/TattooCover.png")`,
                  }}
                >
                  <Link href="/tattoo">
                    <div className="absolute inset-0 bg-light-blue bg-opacity-90 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                      <p className="text-dark-gray font-semibold text-xl">
                        Tattoo Design
                      </p>
                    </div>
                  </Link>
                </div>

                {/* Airbnb */}
                <div
                  className="relative w-full pb-[100%] bg-left bg-cover group"
                  style={{
                    backgroundImage: `url("https://portfolio-images-2.s3.ap-south-1.amazonaws.com/airbnb-1.png")`,
                  }}
                >
                  <Link href="/airbnb">
                    <div className="absolute inset-0 bg-light-blue bg-opacity-90 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                      <p className="text-dark-gray font-semibold text-xl">
                        A clone of AirBnb
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <p className="text-light-gray font-extralight mt-2 flex text-xs items-center">
            <Image
              height="12"
              width="12"
              alt="Copyright"
              src="https://img.icons8.com/?size=100&id=88661&format=png&color=f7f8f3"
            />
            All Rights Reserved to Om Thakkar
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomepageComponent;
