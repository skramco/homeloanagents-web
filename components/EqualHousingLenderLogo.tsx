/**
 * HUD Equal Housing Opportunity insignia (house with equals sign).
 * Geometry matches HUD print artwork: https://www.hud.gov/contactus/hudgraphics
 */
export function EqualHousingLenderLogo({
  className,
  variant = "default",
}: {
  className?: string;
  variant?: "trust" | "default";
}) {
  /* House uses currentColor; equals cut through with contrasting fill (HUD artwork). */
  const equalsFill = variant === "trust" ? "#0B0D12" : "var(--bg)";

  return (
    <svg
      className={className ? `ehl-logo ${className}` : "ehl-logo"}
      width={28}
      height={28}
      viewBox="0 0 64 64"
      role="img"
      aria-label="Equal Housing Opportunity"
    >
      <path fill="currentColor" d="M32 4 2 28h8v32h44V28h8Z" />
      <rect x="21" y="31" width="22" height="5" fill={equalsFill} />
      <rect x="21" y="41" width="22" height="5" fill={equalsFill} />
    </svg>
  );
}