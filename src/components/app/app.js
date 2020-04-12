import React, { Component } from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";
import "./app.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { label: "Going to learn React 💖", id: "qwe" },
        { label: "By making a lot of projects 💻", id: "asd" },
        { label: "This is so amazing! 🔥", id: "zxc" },
      ],
    };
    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);

      const before = data.slice(0, index);
      const after = data.slice(index + 1);
      const newArr = [...before, ...after];

      return {
        data: newArr,
      };
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="app">
        <AppHeader />
        <div className="search-panel d-flex">
          <SearchPanel />
          <PostStatusFilter />
        </div>
        <PostList posts={data} onDelete={this.deleteItem} />
        <PostAddForm />
      </div>
    );
  }
}
