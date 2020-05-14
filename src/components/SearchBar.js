import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: "covid",
    };
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  componentDidMount() {
    this.props.onSubmit("covid");
  }

  render() {
    return (
      <div className="searchbar-container w-1/2 xl:wl-1/2">
        <form
          className="flex-grow bg-white  rounded px-2 py-2 "
          onSubmit={this.onFormSubmit}
        >
          <div className="relative">
            <span className="h-auto">
              <input
                className="text-gray-600 bg-gray-200
                pl-8
           placeholder-gray-600 border border-transparent focus:border-gray-300
            focus:bg-white focus:placeholder-gray-500 rounded w-full py-2 px-3 
             leading-tight focus:outline-none  placeholder-purple-800 shadow-md focus:placeholder-purple-500 "
                type="text"
                onSubmit={this.onFormSubmit}
                onChange={(e) => this.setState({ term: e.target.value })}
                placeholder="Search for photos"
              ></input>
            </span>
            <div className="absolute flex inset-y-0 ml-2 mr-8 pointer-events-none absolute inset-y-0 flex items-center">
              <svg
                className="fill-current pointer-events-none text-gray-600 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
              </svg>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
