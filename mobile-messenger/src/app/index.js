import React, { useState, useEffect } from "react";
import { Platform } from "react-native";
import App from "./App";

export default function Index() {
  const [isMounted, setIsMounted] = useState(Platform.OS !== "web");

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
    }
  }, [isMounted]);

  if (!isMounted) {
    return null;
  }

  return <App />;
}
