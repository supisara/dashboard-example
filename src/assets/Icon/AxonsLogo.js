import React from "react";

export const AxonsLogo = ({ size = 24, color = "black" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.2566 11.9118C26.091 9.45711 25.6013 5.99319 23.1629 4.17498C20.7245 2.35676 17.2608 2.87277 15.4265 5.32751L4.09279 20.4946C2.25846 22.9493 2.74813 26.4132 5.1865 28.2315C7.62486 30.0497 11.0886 29.5337 12.9229 27.0789L24.2566 11.9118Z"
        fill-opacity="0.65"
      />
      <path d="M26.8813 27.0382C28.7156 29.4929 32.1793 30.0089 34.6177 28.1907C37.056 26.3725 37.5457 22.9086 35.7114 20.4539L24.3776 5.28679C22.5433 2.83205 19.0796 2.31604 16.6412 4.13426C14.2029 5.95247 13.7132 9.41638 15.5475 11.8711L26.8813 27.0382Z" />
      <path d="M8.62843 37.0715L5.63066 32.5434C5.53778 32.4032 5.41819 32.283 5.27882 32.1897C5.13945 32.0964 4.98307 32.0319 4.81876 32H4.78378H4.70135H4.64389H4.51399H4.45903H4.37409H4.33912C4.1748 32.0319 4.01843 32.0964 3.87906 32.1897C3.73969 32.283 3.62009 32.4032 3.52722 32.5434L0.529454 37.0715C0.437105 37.2104 0.37283 37.3663 0.340302 37.5302C0.307773 37.6942 0.307626 37.8629 0.339871 38.0269C0.372115 38.1909 0.436118 38.3469 0.528226 38.486C0.620335 38.625 0.738746 38.7445 0.876695 38.8375C1.01464 38.9305 1.16943 38.9952 1.33222 39.028C1.49501 39.0607 1.66261 39.0609 1.82546 39.0284C1.98831 38.9959 2.14321 38.9315 2.28132 38.8387C2.41943 38.746 2.53804 38.6267 2.63039 38.4878L4.58144 35.5496L6.53248 38.4878C6.71935 38.7664 7.00791 38.9595 7.33539 39.025C7.66287 39.0904 8.00278 39.0231 8.28118 38.8375C8.41914 38.7445 8.53756 38.625 8.62967 38.486C8.72178 38.3469 8.78579 38.1909 8.81804 38.0269C8.85028 37.8629 8.85014 37.6942 8.8176 37.5302C8.78507 37.3663 8.72079 37.2104 8.62843 37.0715Z" />
      <path d="M16.5934 38.3773C16.5711 38.3346 15.5587 36.8722 14.5314 35.3871C15.4869 34.0075 16.3755 32.7231 16.3978 32.683C16.4448 32.5977 16.5389 32.1135 16.0785 32.1135H14.6155C14.5457 32.1096 14.4761 32.1241 14.4136 32.1558C14.3511 32.1875 14.2978 32.2352 14.2591 32.2942C14.2591 32.2942 13.8655 32.8586 13.3234 33.6437L12.3852 32.2942C12.3468 32.2326 12.2927 32.1827 12.2287 32.1496C12.1647 32.1165 12.0931 32.1015 12.0214 32.106H10.5584C10.1005 32.106 10.1945 32.5902 10.2416 32.6755C10.2614 32.7156 11.15 33.9999 12.1055 35.3796C11.0881 36.8722 10.0732 38.3246 10.0411 38.3773C9.99402 38.4625 9.89996 38.9467 10.3604 38.9467H11.8233C11.8931 38.9504 11.9626 38.9357 12.0251 38.9041C12.0876 38.8724 12.1409 38.8249 12.1798 38.7661L13.3135 37.1305L14.4472 38.7661C14.4859 38.825 14.5392 38.8727 14.6017 38.9044C14.6643 38.9361 14.7339 38.9507 14.8037 38.9467H16.2666C16.7246 38.9366 16.6404 38.4525 16.5934 38.3773Z" />
      <path d="M21.257 31.8948C19.1864 31.8948 17.7895 33.358 17.7895 35.5352C17.7895 37.7124 19.1492 39.1579 21.257 39.1579C23.3647 39.1579 24.7369 37.7023 24.7369 35.5352C24.7369 33.3252 23.3722 31.8948 21.257 31.8948ZM22.6365 35.5352C22.6365 37.4399 21.5988 37.4399 21.257 37.4399C20.9152 37.4399 19.8972 37.4399 19.8972 35.5352C19.8972 34.241 20.3406 33.6128 21.257 33.6128C22.1734 33.6128 22.6365 34.241 22.6365 35.5352Z" />
      <path d="M29.0772 32H29.0354C27.3114 32 25.8952 33.0687 25.8952 34.9652V38.816C25.8932 38.8465 25.8974 38.877 25.9075 38.9057C25.9176 38.9344 25.9335 38.9607 25.9541 38.9829C25.9747 39.005 25.9995 39.0226 26.0271 39.0345C26.0547 39.0463 26.0845 39.0522 26.1144 39.0518H27.7153C27.749 39.0542 27.7829 39.0495 27.8148 39.038C27.8467 39.0265 27.876 39.0084 27.9007 38.9849C27.9254 38.9613 27.9451 38.9328 27.9585 38.9012C27.972 38.8696 27.9789 38.8354 27.9788 38.801V35.2888C27.9788 34.022 28.7029 33.8439 29.0526 33.8439C29.4023 33.8439 30.1264 34.022 30.1264 35.2888V38.801C30.1263 38.8357 30.1333 38.87 30.1469 38.9018C30.1604 38.9337 30.1804 38.9623 30.2054 38.9858C30.2304 39.0094 30.2599 39.0275 30.2921 39.0388C30.3243 39.0502 30.3584 39.0546 30.3924 39.0518H31.9908C32.0208 39.0522 32.0505 39.0463 32.0781 39.0345C32.1057 39.0226 32.1306 39.005 32.1511 38.9829C32.1717 38.9607 32.1876 38.9344 32.1977 38.9057C32.2079 38.877 32.212 38.8465 32.21 38.816V34.9627C32.2174 33.0687 30.7939 32 29.0772 32Z" />
      <path d="M33.3776 36.9318C33.3776 36.9318 33.3024 36.614 33.5831 36.614H35.0872C35.1394 36.6087 35.1918 36.6222 35.235 36.6523C35.2782 36.6823 35.3093 36.7269 35.3228 36.778C35.4155 37.2093 35.7539 37.5145 36.4909 37.5346C37.2279 37.5548 37.5488 37.3758 37.5488 36.9596C37.5488 36.8537 37.5112 36.6948 37.1928 36.5359C36.7942 36.3813 36.3797 36.2722 35.957 36.2105C34.3251 35.9053 33.4979 35.2016 33.4979 34.1448C33.4874 33.7986 33.5704 33.4559 33.7382 33.1535C33.9059 32.851 34.1521 32.6 34.4504 32.4272C34.4504 32.4272 35.1348 31.9076 36.531 31.895C38.0852 31.8798 39.2508 32.7651 39.4238 33.7311C39.4297 33.7619 39.4288 33.7937 39.4211 33.824C39.4134 33.8544 39.399 33.8827 39.3791 33.9068C39.3592 33.9309 39.3342 33.9503 39.306 33.9636C39.2777 33.9768 39.2469 33.9836 39.2157 33.9834H37.5713C37.5282 33.9838 37.4856 33.9745 37.4466 33.9562C37.4075 33.9378 37.3731 33.9109 37.3457 33.8774L37.3206 33.8472C37.2052 33.7297 37.066 33.6387 36.9124 33.5804C36.7588 33.5221 36.5945 33.4978 36.4308 33.5092C35.6411 33.5092 35.6411 33.827 35.6411 33.9329C35.6411 34.0389 35.6938 34.2381 36.1425 34.4046C36.5851 34.541 37.0365 34.6464 37.4936 34.7199C38.9475 35.0023 39.682 35.6733 39.682 36.7099C39.6992 37.0909 39.6154 37.4697 39.4392 37.8074C39.263 38.1451 39.0008 38.4296 38.6793 38.6318C38.035 38.9954 37.3045 39.1759 36.5661 39.1539C35.8029 39.1885 35.0461 38.9992 34.3878 38.6091C34.1042 38.4242 33.8665 38.1765 33.6927 37.8849C33.5189 37.5933 33.4137 37.2656 33.3851 36.9268C33.3851 36.9268 33.3851 36.9041 33.3851 36.8915" />
    </svg>
  );
};
