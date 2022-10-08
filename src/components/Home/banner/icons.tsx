type IconProps = {
  size: number
  hover: boolean
}

export function LineIcon({ size, hover }: IconProps) {
  return (
    <svg
      width={size}
      height="2"
      viewBox="0 0 20 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        y1="1"
        x2="20"
        y2="1"
        stroke={hover ? '#9A1A4B' : '#24233A'}
        strokeWidth="2"
      />
    </svg>
  )
}