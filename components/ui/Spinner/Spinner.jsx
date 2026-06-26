export default function Spinner() {
  return (
    <>
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <g
          fill="none"
          stroke="currentColor"
          stroke-width="12"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          {/* 1. The Main Heart Outer Path */}
          <path d="M 94 165 C 50 135 15 100 15 65 C 15 35 40 15 65 15 C 82 15 94 28 100 35 C 106 28 118 15 135 15 C 160 15 185 35 185 65 C 185 71 183 77 181 83" />

          {/* 2. The Leaf Outline */}
          <path d="M 94 165 C 90 120 100 95 184 91 C 170 145 140 180 106 142" />

          {/* 3. The Leaf Center Vein */}
          <path d="M 120 125 C 135 118 150 115 160 116" />
        </g>
      </svg>
    </>
  );
}
