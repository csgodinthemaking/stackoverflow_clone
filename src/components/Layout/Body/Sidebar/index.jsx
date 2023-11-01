import React from "react";

// Icons
import { IoEarth } from "react-icons/io5";
import { AiFillInfoCircle } from "react-icons/ai";
import { MdVerified, MdOutlineWork } from "react-icons/md";
import { BsFillChatLeftFill } from "react-icons/bs";
// Components
import { Button } from "@/components/common";

// Styles
import classes from "./style.module.scss";

export default function Sidebar() {
  return (
    <aside className={classes.sidebar}>
      <a href="/" className="nav-item link">
        Home
      </a>

      <div className="public">
        <span className="title">PUBLIC</span>
        <a href="" className="nav-item link">
          <IoEarth /> Questions
        </a>
        <a href="" className="nav-item link">
          Tags
        </a>
        <a href="" className="nav-item link">
          Users
        </a>
        <a href="" className="nav-item link">
          Companies
        </a>
      </div>

      <div className="community">
        <div className="row">
          <span className="label">COLLECTIVES</span>
          <AiFillInfoCircle />
        </div>
        <div className="row">
          <MdVerified className="verified" />
          <span>Explore Collectives</span>
        </div>
      </div>

      <div className="community">
        <div className="row">
          <span className="label">LABS</span>
          <AiFillInfoCircle />
        </div>
        <div className="row">
          <BsFillChatLeftFill className="discussions" />
          <span>Discussions</span>
        </div>
      </div>

      <div className="community">
        <div className="row">
          <span className="label">TEAMS</span>
          <AiFillInfoCircle />
        </div>
        <div className="row">
          <div className="work">
            <MdOutlineWork />
          </div>
          <span>Create free team</span>
        </div>
      </div>

      <div className="looking-for">
        <Button block variant="outlined" className="">
          Looking for your Teams?
        </Button>
      </div>
    </aside>
  );
}
