import React, { useMemo } from "react";

// Store
import { useRecoilState } from "recoil";
import { userAtom } from "@/store";

// Components
import { GoSearch } from "react-icons/go";
import { FaInbox, FaStackExchange } from "react-icons/fa";
import { AiFillTrophy, AiFillQuestionCircle } from "react-icons/ai";
import { Button } from "@/components/common";

import LogoPNG from "@/assets/image/logo-stackoverflow.png";
import classes from "./style.module.scss";
import "@/assets/style/itisit-container.css";
//scss和css没有特大区别，可以写嵌套语法，mixin也是必用的。会让写样式效率提高

export default function Navbar() {
  const [user, setUser] = useRecoilState(userAtom);
  const isAuthenticated = useMemo(() => {
    return user.username !== "";
  }, [user]);

  const doLogin = () => {
    setUser({
      username: "Yernar",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE51o83Rm5lnBF9CoI8dbxyOK6SqCqAykIxQ&usqp=CAU",
      awards: 44,
      badges: 5,
    });
  };

  return (
    //alt是网络不好或因为其他原因无法显示图的时候，会显示里面的内容。另外也可以用作搜索的关键词。
    <nav className={`itisit-container ${classes.navbar}`}>
      <img
        className="logo"
        src={LogoPNG}
        alt="StackOverflow"
        onClick={doLogin}
      />

      <div className="search">
        <GoSearch />
        <input type="text" placeholder="Search..." />
      </div>

      {!isAuthenticated && (
        <div className="auth-btns">
          <Button variant="secondary">Log in</Button>
          <Button>Sign up</Button>
        </div>
      )}

      {isAuthenticated && (
        <div className="actions">
          <div className="user-block">
            <div className="avatar">
              <img src={user.avatar} alt="Avatar" />
            </div>
            <div className="awards">{user.awards}</div>
            <div className="badges">{user.badges}</div>
          </div>

          <div className="action-btn">
            <FaInbox />
          </div>
          <div className="action-btn trophy">
            <AiFillTrophy />
          </div>
          <div className="action-btn">
            <AiFillQuestionCircle />
          </div>
          <div className="action-btn">
            <FaStackExchange />
          </div>
        </div>
      )}
    </nav>
  );
}
