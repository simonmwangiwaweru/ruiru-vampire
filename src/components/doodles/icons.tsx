export function BatIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="-26 -10 52 20"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <ellipse cx="0" cy="0" rx="2.6" ry="3.6" />
      <polygon points="-2.6,-3 -1,-3 -1.8,-6.5" />
      <polygon points="2.6,-3 1,-3 1.8,-6.5" />
      <path d="M-2.6,-1 C-9,-6 -16,-4 -22,2 C-16,1 -12,4 -8,2 C-12,5 -15,8 -15,8 C-9,6 -5,3 -2.6,1 Z" />
      <path
        d="M-2.6,-1 C-9,-6 -16,-4 -22,2 C-16,1 -12,4 -8,2 C-12,5 -15,8 -15,8 C-9,6 -5,3 -2.6,1 Z"
        transform="scale(-1,1)"
      />
    </svg>
  );
}

export function SnakeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="-28 -12 60 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M-26,2 Q-20,-8 -14,0 Q-8,8 -2,0 Q4,-8 10,0 Q15,6 19,2" />
      <path d="M19,2 L26,-3 L25,6 Z" fill="currentColor" stroke="none" />
      <path d="M26,1 L30,-1 M26,3 L30,4" />
      <circle cx="22" cy="0" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function CobwebIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 60"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
    >
      <path d="M0,0 L49,9" />
      <path d="M0,0 L43,25" />
      <path d="M0,0 L32,38" />
      <path d="M0,0 L17,47" />
      <path d="M0,0 L9,49" />
      <path d="M20,0 A20,20 0 0 1 0,20" />
      <path d="M35,0 A35,35 0 0 1 0,35" />
      <path d="M50,0 A50,50 0 0 1 0,50" />
    </svg>
  );
}

export function TombstoneIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="-10 -18 20 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M-8,6 L-8,-6 A8,8 0 0 1 8,-6 L8,6 Z" />
      <path d="M-3,-3 L3,-3 M0,-6 L0,0" />
    </svg>
  );
}
