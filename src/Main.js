import { useLocation } from "react-router-dom";

export default function Main() {
  const location = useLocation();

  window.location.href = `app://quranreadinglive.vercel.app/${location.search}${location.hash}`;
  return <div></div>;
}
