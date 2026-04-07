import "../styles/FallbackLoader.css";

function FallbackLoader({ message = "Loading...", compact = false }) {
  return (
    <div
      className={`fallback-loader ${compact ? "fallback-loader--compact" : ""}`}
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="fallback-loader__orbital" aria-hidden="true">
        <span className="fallback-loader__core" />
        <span className="fallback-loader__ring fallback-loader__ring--one" />
        <span className="fallback-loader__ring fallback-loader__ring--two" />
      </div>
      <p className="fallback-loader__label">{message}</p>
    </div>
  );
}

export default FallbackLoader;
