/* eslint-disable react/jsx-sort-props */
type IconProps = {
  open: boolean;
};

export function ArrowIcon({ open }: IconProps) {
  if (open) {
    return (
      <svg
        width="24"
        height="13"
        viewBox="0 0 24 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.5601 11.0667L13.8668 2.37339C12.8401 1.34673 11.1601 1.34673 10.1335 2.37339L1.44012 11.0667"
          stroke="#2D2B78"
          strokeWidth="2.66667"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg
      width="24"
      height="13"
      viewBox="0 0 24 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.5601 1.93335L13.8668 10.6267C12.8401 11.6534 11.1601 11.6534 10.1335 10.6267L1.44012 1.93335"
        stroke="#2D2B78"
        strokeWidth="2.66667"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
