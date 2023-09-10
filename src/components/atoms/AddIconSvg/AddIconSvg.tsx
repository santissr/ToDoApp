interface AddIconSvgI {
  size?: string;
}

export const AddIconSvg = ({ size = "26" }: AddIconSvgI) => {
  const height: string = String(Number(size) - 6);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={height}
      viewBox="0 0 26 20"
      fill="none"
    >
      <rect width="26" height="20" fill="#0F5FF9" />
      <path
        d="M13 17.5C12.1914 17.5 11.556 17.225 11.556 16.875V5.625C11.556 5.275 12.1914 5 13 5C13.8087 5 14.4441 5.275 14.4441 5.625V16.875C14.4441 17.225 13.8087 17.5 13 17.5Z"
        fill="white"
      />
      <path
        d="M23.1081 9.37505C22.9187 9.37605 22.7309 9.35988 22.5568 9.32759C22.3827 9.2953 22.2262 9.24759 22.0973 9.18755L13 5.25005L3.90265 9.18755C3.32505 9.43755 2.42976 9.43755 1.85215 9.18755C1.27454 8.93755 1.27454 8.55005 1.85215 8.30005L11.9603 3.92505C12.5379 3.67505 13.4332 3.67505 14.0108 3.92505L24.1189 8.30005C24.6965 8.55005 24.6965 8.93755 24.1189 9.18755C23.8301 9.31255 23.4546 9.37505 23.1081 9.37505Z"
        fill="white"
      />
    </svg>
  );
};
