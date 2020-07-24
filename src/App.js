import React from "react";
import { ScriptureList } from "./components/scripture-list.component";
import { SearchInput } from "./components/search-input.component";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      scriptures: [
        {
          id: 1,
          verse: "Ephesians 6:12",
          image: {
            url: "https://source.unsplash.com/180*180/?prayer,faith,fire",
            description: "A lovely image",
          },
          tags: ["faith", "fire"],
        },
        {
          id: 2,
          verse: "John 6:12",
          image: {
            url: "https://source.unsplash.com/180*180/?prayer,faith,fire",
            description: "A lovely image",
          },
          tags: ["faith", "fire"],
        },
        {
          id: 3,
          verse: "Revelations 6:12",
          image: {
            url: "https://source.unsplash.com/180*180/?prayer,faith,fire",
            description: "A lovely image",
          },
          tags: ["faith", "fire"],
        },
        {
          id: 4,
          verse: "Numbers 6:12",
          image: {
            url: "https://source.unsplash.com/180*180/?prayer,faith,fire",
            description: "A lovely image",
          },
          tags: ["faith", "fire"],
        },
      ],
      searchField: "",
      users: [],
    };
  }

  /**
   * Render the UI for the component
   */
  render() {
    const { scriptures, searchField } = this.state;
    const filteredScriptures = scriptures.filter((scripture) =>
      scripture.verse.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="bg-gray-200 min-h-screen">
        <div className="pt-10 flex items-center justify-center">
          <SearchInput
            handleChange={this.onSearchInputChange}
            placeholder="Search the word of life"
          ></SearchInput>
        </div>
        <div className=" p-8 flex items-center justify-center">
          <ScriptureList scriptures={filteredScriptures}></ScriptureList>
        </div>
      </div>
    );
  }

  /**
   * Handle when the search input changes
   * @param {*} value
   */
  onSearchInputChange = (value) => {
    this.setState({ searchField: value });
  };

  /**
   * Fetch data after the component is mounted
   */
  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((users) => this.setState({ users }));
  }
}
export default App;
