export const MenuIcon = ({ size = 24, color = "black" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2 5C2 4.44771 2.44771 4 3 4H17C17.5523 4 18 4.44771 18 5C18 5.55228 17.5523 6 17 6H3C2.44771 6 2 5.55228 2 5ZM2 15C2 14.4477 2.44772 14 3 14H12C12.5523 14 13 14.4477 13 15C13 15.5523 12.5523 16 12 16H3C2.44771 16 2 15.5523 2 15ZM3 9C2.44771 9 2 9.44772 2 10C2 10.5523 2.44771 11 3 11H17C17.5523 11 18 10.5523 18 10C18 9.44772 17.5523 9 17 9H3Z"
      />
    </svg>
  );
};
