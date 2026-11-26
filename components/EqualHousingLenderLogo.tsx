/** Simplified Equal Housing Lender mark (house + equal sign) for footer disclosure */
export function EqualHousingLenderLogo() {
  return (
    <svg
      className="ehl-logo"
      width={28}
      height={28}
      viewBox="0 0 64 64"
      role="img"
      aria-label="Equal Housing Lender"
    >
      <rect width="64" height="64" fill="transparent" />
      <path
        fill="currentColor"
        d="M32 8 L54 26 V56 H10 V26 Z M28 30 H36 V38 H28 Z M28 42 H36 V50 H28 Z"
      />
      <path fill="currentColor" d="M14 58 H50 V62 H14 Z" />
    </svg>
  );
}