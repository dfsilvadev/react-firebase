import { useCallback, useState } from "react";
import storage from "../utils/storage";

export default function useStorage(key) {
  const [refreshToken, setRefreshToken] = useState(() => storage.get(key));

  const set = useCallback(
    (newValue) => {
      storage.set(key, newValue);
    },
    [key]
  );

  const remove = useCallback(() => {
    storage.remove(key);
  }, [key]);
}
