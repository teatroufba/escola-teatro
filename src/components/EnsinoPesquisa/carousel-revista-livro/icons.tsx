type IconProps = {
  hover: boolean;
  size: number;
};

export function LineIcon({ size, hover }: IconProps) {
  return (
    <svg
      fill="none"
      height="2"
      viewBox="0 0 20 2"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        stroke={hover ? "#9A1A4B" : "#958FA0"}
        strokeWidth="2"
        x2="20"
        y1="1"
        y2="1"
      />
    </svg>
  );
}
