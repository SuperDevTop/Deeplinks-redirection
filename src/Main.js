import { useLocation } from "react-router-dom";

export default function Main() {
  const location = useLocation();
  window.location.href = `app://quranreadinglive.vercel.app/${location.search}${location.hash}`;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 80,
        marginTop: 100,
      }}
    >
      <h1>Quran Reading Live</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 40,
        }}
      >
        <a
          href="https://play.google.com/store/apps/details?id=com.company.QuranReading"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img
            src="/assets/google play.png"
            style={{ width: "80%", maxWidth: 280 }}
          />
        </a>
        <a
          href="https://apps.apple.com/app/quran-reading-live/id6466713587"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img
            src="/assets/apple store.png"
            style={{ width: "80%", maxWidth: 280 }}
          />
        </a>
      </div>
    </div>
  );
}
