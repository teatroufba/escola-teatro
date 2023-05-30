type IconProps = {
  hover: boolean;
  size: number;
};

export function ArrowDownIcon({ size }: IconProps) {
  return (
    <svg
      fill="none"
      height={size}
      viewBox="0 0 32 32"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.5601 11.9332L17.8668 20.6266C16.8401 21.6532 15.1601 21.6532 14.1335 20.6266L5.44012 11.9332"
        stroke="#2D2B78"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2.66667"
      />
    </svg>
  );
}

export function ArrowUpIcon({ size }: IconProps) {
  return (
    <svg
      fill="none"
      height={size}
      viewBox="0 0 32 33"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.5601 20.5665L17.8668 11.8731C16.8401 10.8465 15.1601 10.8465 14.1335 11.8731L5.44012 20.5665"
        stroke="#2D2B78"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2.66667"
      />
    </svg>
  );
}
