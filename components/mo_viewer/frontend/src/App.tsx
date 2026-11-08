import { useEffect, useState } from "react";
import { Streamlit } from "./streamlit";
import type { Args } from "./types";
import Viewer from "./Viewer";
import Levels from "./Levels";

export default function App() {
  const [args, setArgs] = useState<Args | null>(null);

  useEffect(() => {
    const off = Streamlit.onRender(({ args }) => setArgs(args as unknown as Args));
    Streamlit.ready();
    return () => {
      off();
    };
  }, []);

  useEffect(() => {
    if (args) Streamlit.setFrameHeight(args.height);
  }, [args?.height, args]);

  if (!args) return null;
  document.documentElement.dataset.theme = args.dark ? "dark" : "light";
  if (args.kind === "viewer") return <Viewer args={args} />;
  return <Levels args={args} />;
}
