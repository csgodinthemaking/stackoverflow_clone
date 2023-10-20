import { atom } from "recoil";
// import { localStorage, role } from '@/utils';

export const defaultUserState = {
  username: "",
  avatar: "",
};

// const state = localStorage.get("user", defaultUserState);
const state = defaultUserState;

export const userAtom = atom({
  key: "userAtom",
  // default value, aka initial value
  default: state,
});
