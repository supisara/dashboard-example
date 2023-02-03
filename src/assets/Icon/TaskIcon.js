export const TaskIcon = ({ size = 24, color = "black" }) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.87462 4.16708V3.5H12.1253V4.90048H7.87462V4.23343C7.87509 4.22243 7.87534 4.21137 7.87534 4.20026C7.87534 4.18914 7.87509 4.17808 7.87462 4.16708ZM6.37482 3.45026H5.68767C5.10535 3.45026 4.5482 3.68367 4.13845 4.097C3.72891 4.51012 3.5 5.06905 3.5 5.65049V15.8022C3.5 16.3836 3.72891 16.9425 4.13845 17.3557C4.5482 17.769 5.10534 18.0024 5.68767 18.0024H14.3137C14.896 18.0024 15.4531 17.769 15.8629 17.3557C16.2724 16.9425 16.5013 16.3836 16.5013 15.8022V5.65049C16.5013 5.06905 16.2724 4.51012 15.8629 4.097C15.4531 3.68367 14.896 3.45026 14.3137 3.45026H13.6251C13.6119 2.65298 12.9654 2 12.1565 2H7.84345C7.03449 2 6.38801 2.65298 6.37482 3.45026ZM13.6251 4.95026C13.6119 5.74751 12.9654 6.40048 12.1565 6.40048H7.84345C7.0345 6.40048 6.38803 5.74751 6.37482 4.95026H5.68767C5.5074 4.95026 5.33319 5.02243 5.20372 5.15304C5.07402 5.28387 5 5.46268 5 5.65049V15.8022C5 15.99 5.07402 16.1688 5.20372 16.2996C5.33319 16.4302 5.5074 16.5024 5.68767 16.5024H14.3137C14.4939 16.5024 14.6682 16.4302 14.7976 16.2996C14.9273 16.1688 15.0013 15.99 15.0013 15.8022V5.65049C15.0013 5.46268 14.9273 5.28387 14.7976 5.15304C14.6682 5.02243 14.4939 4.95026 14.3137 4.95026H13.6251Z"
      />
    </svg>
  );
};
