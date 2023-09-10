interface CheckIconI {
  size?: string;
  color?: string;
  isActive?: boolean;
}

export const CheckIcon = ({
  size = "30",
  color = "#FFF",
  isActive,
}: CheckIconI) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width="29"
        height="29"
        rx="14.5"
        fill={isActive === true ? "#00FFC2" : "white"}
        stroke={isActive === true ? "white" : "black"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.5395 7.49776C25.8344 7.81657 26 8.24891 26 8.69971C26 9.15051 25.8344 9.58285 25.5395 9.90166L12.9568 23.5022C12.6619 23.821 12.2619 24 11.8448 24C11.4278 24 11.0278 23.821 10.7328 23.5022L4.44151 16.702C4.15501 16.3813 3.99648 15.9519 4.00006 15.5061C4.00364 15.0604 4.16906 14.634 4.46067 14.3188C4.75229 14.0036 5.14677 13.8248 5.55917 13.8209C5.97156 13.817 6.36886 13.9884 6.6655 14.298L11.8448 19.8964L23.3155 7.49776C23.6105 7.17904 24.0104 7 24.4275 7C24.8446 7 25.2445 7.17904 25.5395 7.49776Z"
        fill={color}
      />
    </svg>
  );
};
