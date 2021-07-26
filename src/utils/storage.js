import { destroyCookie, parseCookies, setCookie } from "nookies";

const storage = {};

try {
  storage.set = (key, refreshToken) => {
    setCookie(undefined, key, refreshToken, {
      maxAge: 3600, // 1 hours
      path: "/",
    });
  };
  storage.get = (key) => {
    const response = parseCookies();

    return response;
  };

  storage.remove = (key) => destroyCookie(undefined, key);
} catch (e) {
  throw new Error("no refreshToken storage");
}

export default storage;
