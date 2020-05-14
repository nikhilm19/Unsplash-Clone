import React from "react";
import logo from "../logo.svg";
import SearchBar from "./SearchBar";

import axios from "axios";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";
import tailwindLogo from "../tailwind.svg";
import unsplashLogo from "../unsplash.svg";
import plus from "../plus.svg";

class App extends React.Component {
  state = {
    images: [],
  };
  onSubmit = async (term) => {
    console.log(term);

    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="h-screen overflow-scroll App flex flex-col top-0 inset-x-0 h-16 items-center">
        <div className="pl-8 flex bg-white border-b border-gray-200 fixed top-0 inset-x-0 z-20 h-16 items-center ">
          <header className="sticky w-1/4 mr-8">
            <a
              href="/"
              class="pt-2 w-full justify-between block lg:mr-4 flex flex-row w-full justify-center items-center "
            >
              <img src={tailwindLogo} className="w-1/2"></img>
              <img src={plus}></img>

              <img src={unsplashLogo}></img>

              <svg
                class="w-10 h-10 block md:hidden"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Tailwind CSS</title>
                <path
                  d="M13.5 11.1C15.3 3.9 19.8.3 27 .3c10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 27.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
                  transform="translate(5 16)"
                  fill="url(#logoMarkGradient)"
                  fill-rule="evenodd"
                ></path>
                <defs>
                  <linearGradient
                    x1="0%"
                    y1="0%"
                    y2="100%"
                    id="logoMarkGradient"
                  >
                    <stop stop-color="#2298BD"></stop>
                    <stop offset="1" stop-color="#0ED7B5"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </a>
          </header>

          <SearchBar onSubmit={this.onSubmit} />
          <div className="w-1/2 h-full flex justify-center">
            <div className="flex flex-row w-1/2 justify-between px-2 py-2 items-center">
              <a href="https://unsplash.com/">About Us</a>
              <a href="https://api.unsplash.com/">API</a>
              <a href="https://unsplash.com/">Contact</a>
            </div>
          </div>
        </div>
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
