import React from "react";

type Props = {
//   givenclass: string;
//   pathClass: string;
};

const Machine: React.FC<Props> = (props) => {
//   const {  } = props;

  return (
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   width="310"
    //   height="348"
    //   fill="none"
    //   viewBox="0 0 310 348"
    // >
    //   <g filter="url(#filter0_dd_129_115)">
    //     <rect
    //       width="282.853"
    //       height="152.555"
    //       x="14.011"
    //       y="66.633"
    //       fill="#D60D0D"
    //       rx="11"
    //     ></rect>
    //     <rect
    //       width="281.853"
    //       height="151.555"
    //       x="14.511"
    //       y="67.133"
    //       stroke="#000"
    //       rx="10.5"
    //     ></rect>
    //   </g>
    //   <g filter="url(#filter1_f_129_115)">
    //     <rect
    //       width="242.571"
    //       height="116.608"
    //       x="35.028"
    //       y="85.922"
    //       fill="#0A0909"
    //       rx="9"
    //     ></rect>
    //     <rect
    //       width="241.571"
    //       height="115.608"
    //       x="35.528"
    //       y="86.422"
    //       stroke="#000"
    //       rx="8.5"
    //     ></rect>
    //   </g>
    //   <g filter="url(#filter2_i_129_115)">
    //     <path
    //       fill="#E7A51F"
    //       d="M42.91 103.689a9 9 0 019-9h208.808a9 9 0 019 9v81.073a9 9 0 01-9 9H51.91a9 9 0 01-9-9v-81.073z"
    //     ></path>
    //   </g>
    //   <mask id="path-6-inside-1_129_115" fill="#fff">
    //     <path d="M63.05 3a3 3 0 013-3h178.775a3 3 0 013 3v61.51a3 3 0 01-3 3H66.051a3 3 0 01-3-3V3z"></path>
    //   </mask>
    //   <g filter="url(#filter3_i_129_115)">
    //     <path
    //       fill="#D60D0D"
    //       d="M63.05 3a3 3 0 013-3h178.775a3 3 0 013 3v61.51a3 3 0 01-3 3H66.051a3 3 0 01-3-3V3z"
    //     ></path>
    //   </g>
    //   <path
    //     fill="#000"
    //     d="M62.05 3a4 4 0 014-4h178.775a4 4 0 014 4h-2a2 2 0 00-2-2H66.051a2 2 0 00-2 2h-2zm185.775 64.51H63.051h184.774zm-181.774 0a4 4 0 01-4-4V3a4 4 0 014-4v2a2 2 0 00-2 2v61.51c0 1.657.895 3 2 3zM244.825-1a4 4 0 014 4v60.51a4 4 0 01-4 4c1.104 0 2-1.343 2-3V3a2 2 0 00-2-2v-2z"
    //     mask="url(#path-6-inside-1_129_115)"
    //   ></path>
    //   <path
    //     fill="#000"
    //     fillOpacity="0.2"
    //     d="M62.05 3a4 4 0 014-4h178.775a4 4 0 014 4h-2a2 2 0 00-2-2H66.051a2 2 0 00-2 2h-2zm185.775 64.51H63.051h184.774zm-181.774 0a4 4 0 01-4-4V3a4 4 0 014-4v2a2 2 0 00-2 2v61.51c0 1.657.895 3 2 3zM244.825-1a4 4 0 014 4v60.51a4 4 0 01-4 4c1.104 0 2-1.343 2-3V3a2 2 0 00-2-2v-2z"
    //     mask="url(#path-6-inside-1_129_115)"
    //   ></path>
    //   <g filter="url(#filter4_i_129_115)">
    //     <path
    //       fill="#D60D0D"
    //       d="M25.364 222.695h259.742L310 319.194H0l25.364-96.499z"
    //     ></path>
    //   </g>
    //   <mask id="path-9-inside-2_129_115" fill="#fff">
    //     <path d="M0 322.194a3 3 0 013-3h304a3 3 0 013 3V345a3 3 0 01-3 3H3a3 3 0 01-3-3v-22.806z"></path>
    //   </mask>
    //   <g filter="url(#filter5_i_129_115)">
    //     <path
    //       fill="#BB0909"
    //       d="M0 322.194a3 3 0 013-3h304a3 3 0 013 3V345a3 3 0 01-3 3H3a3 3 0 01-3-3v-22.806z"
    //     ></path>
    //   </g>
    //   <path
    //     fill="#EEE3E3"
    //     d="M0 322.194a4 4 0 014-4h302a4 4 0 014 4c0-1.104-1.343-2-3-2H3c-1.657 0-3 .896-3 2zM310 348H0h310zM0 348v-28.806V348zm310-28.806V348v-28.806z"
    //     mask="url(#path-9-inside-2_129_115)"
    //   ></path>
    //   <g fill="#FFF386" filter="url(#filter6_d_129_115)">
    //     <path d="M187.995 3.437c3.325.03 5.996 2.433 5.967 5.366-.03 2.933-2.749 5.286-6.074 5.255-3.324-.03-5.996-2.432-5.966-5.366.029-2.933 2.748-5.286 6.073-5.255zM163.443 3.284c3.324.03 5.996 2.433 5.966 5.366-.029 2.933-2.748 5.286-6.073 5.256-3.325-.03-5.996-2.433-5.967-5.366.03-2.933 2.749-5.286 6.074-5.256zM140.541 3.114c3.325.03 5.996 2.433 5.967 5.366-.03 2.933-2.749 5.286-6.074 5.256-3.325-.03-5.996-2.433-5.967-5.366.03-2.933 2.749-5.286 6.074-5.256zM93.88 3.507c3.324.03 5.996 2.433 5.966 5.366-.03 2.933-2.748 5.286-6.073 5.256-3.325-.03-5.996-2.433-5.967-5.366.03-2.933 2.749-5.286 6.073-5.256zM71.752 3.507c3.324.03 5.996 2.433 5.966 5.366-.03 2.933-2.748 5.286-6.073 5.256-3.325-.03-5.996-2.433-5.967-5.366.03-2.933 2.749-5.286 6.074-5.256zM117.639 3.821c3.325.03 5.996 2.433 5.967 5.366-.03 2.933-2.749 5.286-6.074 5.256-3.324-.03-5.996-2.433-5.966-5.366.029-2.933 2.748-5.286 6.073-5.256zM212.731 3.768c3.325.03 5.996 2.433 5.967 5.366-.03 2.933-2.749 5.286-6.073 5.255-3.325-.03-5.997-2.432-5.967-5.366.029-2.933 2.748-5.286 6.073-5.255zM236.61 4.806c3.324.03 5.996 2.433 5.966 5.366-.029 2.933-2.748 5.286-6.073 5.255-3.325-.03-5.996-2.432-5.967-5.365.03-2.934 2.749-5.287 6.074-5.256zM236.581 23.386c3.325.03 5.997 2.433 5.967 5.366-.029 2.933-2.748 5.286-6.073 5.256-3.325-.03-5.996-2.433-5.967-5.366.029-2.933 2.749-5.286 6.073-5.256zM237.479 42.86c3.325.03 5.997 2.433 5.967 5.366-.029 2.933-2.748 5.286-6.073 5.255-3.325-.03-5.996-2.432-5.967-5.366.029-2.933 2.749-5.286 6.073-5.255zM72.671 23.386c3.325.03 5.996 2.433 5.967 5.366-.03 2.933-2.749 5.286-6.073 5.256-3.325-.03-5.996-2.433-5.967-5.366.03-2.933 2.749-5.286 6.073-5.256zM72.671 42.86c3.325.03 5.996 2.433 5.967 5.366-.03 2.933-2.749 5.286-6.073 5.255-3.325-.03-5.996-2.432-5.967-5.366.03-2.933 2.749-5.286 6.073-5.255z"></path>
    //     <path d="M93.88 3.507c3.324.03 5.996 2.433 5.966 5.366-.03 2.933-2.748 5.286-6.073 5.256-3.325-.03-5.996-2.433-5.967-5.366.03-2.933 2.749-5.286 6.073-5.256z"></path>
    //   </g>
    //   <g fill="#FFF386" filter="url(#filter7_d_129_115)">
    //     <path d="M267.966 74.962c0 3.147-2.352 5.699-5.254 5.699-2.902 0-5.254-2.552-5.254-5.699s2.352-5.699 5.254-5.699c2.902 0 5.254 2.552 5.254 5.7z"></path>
    //     <ellipse cx="287.232" cy="163.514" rx="5.254" ry="5.699"></ellipse>
    //     <ellipse cx="287.232" cy="141.595" rx="5.254" ry="5.699"></ellipse>
    //     <path d="M292.486 119.676c0 3.148-2.353 5.699-5.254 5.699-2.902 0-5.255-2.551-5.255-5.699 0-3.147 2.353-5.698 5.255-5.698 2.901 0 5.254 2.551 5.254 5.698z"></path>
    //     <ellipse cx="287.232" cy="74.962" rx="5.254" ry="5.699"></ellipse>
    //     <ellipse cx="287.232" cy="96.004" rx="5.254" ry="5.699"></ellipse>
    //     <ellipse cx="287.232" cy="185.433" rx="5.254" ry="5.699"></ellipse>
    //     <ellipse cx="287.232" cy="209.105" rx="5.254" ry="5.699"></ellipse>
    //   </g>
    //   <g fill="#FFF386" filter="url(#filter8_d_129_115)">
    //     <path d="M42.91 74.962c0 3.147 2.352 5.699 5.254 5.699 2.902 0 5.254-2.552 5.254-5.699s-2.352-5.699-5.254-5.699c-2.902 0-5.254 2.552-5.254 5.7z"></path>
    //     <ellipse
    //       rx="5.254"
    //       ry="5.699"
    //       transform="matrix(-1 0 0 1 23.644 163.514)"
    //     ></ellipse>
    //     <ellipse
    //       rx="5.254"
    //       ry="5.699"
    //       transform="matrix(-1 0 0 1 23.644 141.595)"
    //     ></ellipse>
    //     <path d="M18.39 119.676c0 3.148 2.352 5.699 5.254 5.699 2.902 0 5.254-2.551 5.254-5.699 0-3.147-2.352-5.698-5.254-5.698-2.902 0-5.254 2.551-5.254 5.698z"></path>
    //     <ellipse
    //       rx="5.254"
    //       ry="5.699"
    //       transform="matrix(-1 0 0 1 23.644 74.962)"
    //     ></ellipse>
    //     <ellipse
    //       rx="5.254"
    //       ry="5.699"
    //       transform="matrix(-1 0 0 1 23.644 96.004)"
    //     ></ellipse>
    //     <ellipse
    //       rx="5.254"
    //       ry="5.699"
    //       transform="matrix(-1 0 0 1 23.644 185.433)"
    //     ></ellipse>
    //     <ellipse
    //       rx="5.254"
    //       ry="5.699"
    //       transform="matrix(-1 0 0 1 23.644 209.105)"
    //     ></ellipse>
    //   </g>
    //   <defs>
    //     <filter
    //       id="filter0_dd_129_115"
    //       width="290.853"
    //       height="160.555"
    //       x="10.011"
    //       y="66.633"
    //       colorInterpolationFilters="sRGB"
    //       filterUnits="userSpaceOnUse"
    //     >
    //       <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
    //       <feColorMatrix
    //         in="SourceAlpha"
    //         result="hardAlpha"
    //         values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
    //       ></feColorMatrix>
    //       <feOffset dy="4"></feOffset>
    //       <feComposite in2="hardAlpha" operator="out"></feComposite>
    //       <feColorMatrix values="0 0 0 0 0.6125 0 0 0 0 0.0331771 0 0 0 0 0.0331771 0 0 0 0.98 0"></feColorMatrix>
    //       <feBlend
    //         in2="BackgroundImageFix"
    //         result="effect1_dropShadow_129_115"
    //       ></feBlend>
    //       <feColorMatrix
    //         in="SourceAlpha"
    //         result="hardAlpha"
    //         values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
    //       ></feColorMatrix>
    //       <feOffset dy="4"></feOffset>
    //       <feGaussianBlur stdDeviation="2"></feGaussianBlur>
    //       <feComposite in2="hardAlpha" operator="out"></feComposite>
    //       <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
    //       <feBlend
    //         in2="effect1_dropShadow_129_115"
    //         result="effect2_dropShadow_129_115"
    //       ></feBlend>
    //       <feBlend
    //         in="SourceGraphic"
    //         in2="effect2_dropShadow_129_115"
    //         result="shape"
    //       ></feBlend>
    //     </filter>
    //     <filter
    //       id="filter1_f_129_115"
    //       width="250.571"
    //       height="124.608"
    //       x="31.028"
    //       y="81.922"
    //       colorInterpolationFilters="sRGB"
    //       filterUnits="userSpaceOnUse"
    //     >
    //       <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
    //       <feBlend
    //         in="SourceGraphic"
    //         in2="BackgroundImageFix"
    //         result="shape"
    //       ></feBlend>
    //       <feGaussianBlur
    //         result="effect1_foregroundBlur_129_115"
    //         stdDeviation="2"
    //       ></feGaussianBlur>
    //     </filter>
    //     <filter
    //       id="filter2_i_129_115"
    //       width="226.808"
    //       height="103.073"
    //       x="42.91"
    //       y="94.689"
    //       colorInterpolationFilters="sRGB"
    //       filterUnits="userSpaceOnUse"
    //     >
    //       <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
    //       <feBlend
    //         in="SourceGraphic"
    //         in2="BackgroundImageFix"
    //         result="shape"
    //       ></feBlend>
    //       <feColorMatrix
    //         in="SourceAlpha"
    //         result="hardAlpha"
    //         values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
    //       ></feColorMatrix>
    //       <feOffset dy="4"></feOffset>
    //       <feGaussianBlur stdDeviation="2"></feGaussianBlur>
    //       <feComposite
    //         in2="hardAlpha"
    //         k2="-1"
    //         k3="1"
    //         operator="arithmetic"
    //       ></feComposite>
    //       <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
    //       <feBlend in2="shape" result="effect1_innerShadow_129_115"></feBlend>
    //     </filter>
    //     <filter
    //       id="filter3_i_129_115"
    //       width="184.774"
    //       height="71.51"
    //       x="63.051"
    //       y="0"
    //       colorInterpolationFilters="sRGB"
    //       filterUnits="userSpaceOnUse"
    //     >
    //       <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
    //       <feBlend
    //         in="SourceGraphic"
    //         in2="BackgroundImageFix"
    //         result="shape"
    //       ></feBlend>
    //       <feColorMatrix
    //         in="SourceAlpha"
    //         result="hardAlpha"
    //         values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
    //       ></feColorMatrix>
    //       <feOffset dy="4"></feOffset>
    //       <feGaussianBlur stdDeviation="2"></feGaussianBlur>
    //       <feComposite
    //         in2="hardAlpha"
    //         k2="-1"
    //         k3="1"
    //         operator="arithmetic"
    //       ></feComposite>
    //       <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
    //       <feBlend in2="shape" result="effect1_innerShadow_129_115"></feBlend>
    //     </filter>
    //     <filter
    //       id="filter4_i_129_115"
    //       width="310"
    //       height="100.5"
    //       x="0"
    //       y="222.695"
    //       colorInterpolationFilters="sRGB"
    //       filterUnits="userSpaceOnUse"
    //     >
    //       <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
    //       <feBlend
    //         in="SourceGraphic"
    //         in2="BackgroundImageFix"
    //         result="shape"
    //       ></feBlend>
    //       <feColorMatrix
    //         in="SourceAlpha"
    //         result="hardAlpha"
    //         values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
    //       ></feColorMatrix>
    //       <feOffset dy="4"></feOffset>
    //       <feGaussianBlur stdDeviation="2"></feGaussianBlur>
    //       <feComposite
    //         in2="hardAlpha"
    //         k2="-1"
    //         k3="1"
    //         operator="arithmetic"
    //       ></feComposite>
    //       <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
    //       <feBlend in2="shape" result="effect1_innerShadow_129_115"></feBlend>
    //     </filter>
    //     <filter
    //       id="filter5_i_129_115"
    //       width="310"
    //       height="32.806"
    //       x="0"
    //       y="319.194"
    //       colorInterpolationFilters="sRGB"
    //       filterUnits="userSpaceOnUse"
    //     >
    //       <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
    //       <feBlend
    //         in="SourceGraphic"
    //         in2="BackgroundImageFix"
    //         result="shape"
    //       ></feBlend>
    //       <feColorMatrix
    //         in="SourceAlpha"
    //         result="hardAlpha"
    //         values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
    //       ></feColorMatrix>
    //       <feOffset dy="4"></feOffset>
    //       <feGaussianBlur stdDeviation="2"></feGaussianBlur>
    //       <feComposite
    //         in2="hardAlpha"
    //         k2="-1"
    //         k3="1"
    //         operator="arithmetic"
    //       ></feComposite>
    //       <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
    //       <feBlend in2="shape" result="effect1_innerShadow_129_115"></feBlend>
    //     </filter>
    //     <filter
    //       id="filter6_d_129_115"
    //       width="185.768"
    //       height="58.368"
    //       x="61.678"
    //       y="3.114"
    //       colorInterpolationFilters="sRGB"
    //       filterUnits="userSpaceOnUse"
    //     >
    //       <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
    //       <feColorMatrix
    //         in="SourceAlpha"
    //         result="hardAlpha"
    //         values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
    //       ></feColorMatrix>
    //       <feOffset dy="4"></feOffset>
    //       <feGaussianBlur stdDeviation="2"></feGaussianBlur>
    //       <feComposite in2="hardAlpha" operator="out"></feComposite>
    //       <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
    //       <feBlend
    //         in2="BackgroundImageFix"
    //         result="effect1_dropShadow_129_115"
    //       ></feBlend>
    //       <feBlend
    //         in="SourceGraphic"
    //         in2="effect1_dropShadow_129_115"
    //         result="shape"
    //       ></feBlend>
    //     </filter>
    //     <filter
    //       id="filter7_d_129_115"
    //       width="43.028"
    //       height="153.541"
    //       x="253.458"
    //       y="69.263"
    //       colorInterpolationFilters="sRGB"
    //       filterUnits="userSpaceOnUse"
    //     >
    //       <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
    //       <feColorMatrix
    //         in="SourceAlpha"
    //         result="hardAlpha"
    //         values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
    //       ></feColorMatrix>
    //       <feOffset dy="4"></feOffset>
    //       <feGaussianBlur stdDeviation="2"></feGaussianBlur>
    //       <feComposite in2="hardAlpha" operator="out"></feComposite>
    //       <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
    //       <feBlend
    //         in2="BackgroundImageFix"
    //         result="effect1_dropShadow_129_115"
    //       ></feBlend>
    //       <feBlend
    //         in="SourceGraphic"
    //         in2="effect1_dropShadow_129_115"
    //         result="shape"
    //       ></feBlend>
    //     </filter>
    //     <filter
    //       id="filter8_d_129_115"
    //       width="43.028"
    //       height="153.541"
    //       x="14.39"
    //       y="69.263"
    //       colorInterpolationFilters="sRGB"
    //       filterUnits="userSpaceOnUse"
    //     >
    //       <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
    //       <feColorMatrix
    //         in="SourceAlpha"
    //         result="hardAlpha"
    //         values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
    //       ></feColorMatrix>
    //       <feOffset dy="4"></feOffset>
    //       <feGaussianBlur stdDeviation="2"></feGaussianBlur>
    //       <feComposite in2="hardAlpha" operator="out"></feComposite>
    //       <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
    //       <feBlend
    //         in2="BackgroundImageFix"
    //         result="effect1_dropShadow_129_115"
    //       ></feBlend>
    //       <feBlend
    //         in="SourceGraphic"
    //         in2="effect1_dropShadow_129_115"
    //         result="shape"
    //       ></feBlend>
    //     </filter>
    //   </defs>
    // </svg>
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    fill="none"
    viewBox="0 0 355 428"
  >
    <g filter="url(#filter0_dd_131_9)">
      <rect
        width="336"
        height="195"
        x="13"
        y="85"
        fill="#D60D0D"
        rx="11"
        ></rect>
      <rect
        width="335"
        height="194"
        x="13.5"
        y="85.5"
        stroke="#000"
        rx="10.5"
        ></rect>
    </g>
    <g filter="url(#filter1_f_131_9)">
      <rect
        width="288"
        height="149"
        x="38"
        y="110"
        fill="#0A0909"
        rx="9"
        ></rect>
      <rect
        width="287"
        height="148"
        x="38.5"
        y="110.5"
        stroke="#000"
        rx="8.5"
        ></rect>
    </g>
    <g filter="url(#filter2_i_131_9)">
      <path
        fill="#E7A51F"
        d="M47 130a9 9 0 019-9h252a9 9 0 019 9v109a9 9 0 01-9 9H56a9 9 0 01-9-9V130z"
      ></path>
    </g>
    <mask id="path-6-inside-1_131_9" fill="#fff">
      <path d="M71 3a3 3 0 013-3h214a3 3 0 013 3v80a3 3 0 01-3 3H74a3 3 0 01-3-3V3z"></path>
    </mask>
    <g filter="url(#filter3_i_131_9)">
      <path
        fill="#D60D0D"
        d="M71 3a3 3 0 013-3h214a3 3 0 013 3v80a3 3 0 01-3 3H74a3 3 0 01-3-3V3z"
      ></path>
    </g>
    <path
      fill="#000"
      d="M70 3a4 4 0 014-4h214a4 4 0 014 4h-2a2 2 0 00-2-2H74a2 2 0 00-2 2h-2zm221 83H71h220zM74 86a4 4 0 01-4-4V3a4 4 0 014-4v2a2 2 0 00-2 2v80c0 1.657.895 3 2 3zM288-1a4 4 0 014 4v79a4 4 0 01-4 4c1.105 0 2-1.343 2-3V3a2 2 0 00-2-2v-2z"
      mask="url(#path-6-inside-1_131_9)"
    ></path>
    <path
      fill="#000"
      fillOpacity="0.2"
      d="M70 3a4 4 0 014-4h214a4 4 0 014 4h-2a2 2 0 00-2-2H74a2 2 0 00-2 2h-2zm221 83H71h220zM74 86a4 4 0 01-4-4V3a4 4 0 014-4v2a2 2 0 00-2 2v80c0 1.657.895 3 2 3zM288-1a4 4 0 014 4v79a4 4 0 01-4 4c1.105 0 2-1.343 2-3V3a2 2 0 00-2-2v-2z"
      mask="url(#path-6-inside-1_131_9)"
    ></path>
    <g filter="url(#filter4_i_131_9)">
      <path
        fill="#D60D0D"
        d="M29.046 283h297.446L355 398H0l29.046-115z"
        ></path>
    </g>
    <mask id="path-9-inside-2_131_9" fill="#fff">
      <path d="M0 397a3 3 0 013-3h349a3 3 0 013 3v28a3 3 0 01-3 3H3a3 3 0 01-3-3v-28z"></path>
    </mask>
    <g filter="url(#filter5_i_131_9)">
      <path
        fill="#BB0909"
        d="M0 397a3 3 0 013-3h349a3 3 0 013 3v28a3 3 0 01-3 3H3a3 3 0 01-3-3v-28z"
      ></path>
    </g>
    <path
      fill="#EEE3E3"
      d="M0 397a4 4 0 014-4h347a4 4 0 014 4c0-1.105-1.343-2-3-2H3c-1.657 0-3 .895-3 2zm355 31H0h355zM0 428v-34 34zm355-34v34-34z"
      mask="url(#path-9-inside-2_131_9)"
    ></path>
    <ellipse
      cx="337.426"
      cy="208.88"
      fill="#FFF386"
      rx="6.239"
      ry="7.28"
      id="111"
      className="animate-pulse"
      ></ellipse>
    <path
      fill="#FFF386"
      className="animate-pulse"
      d="M343.665 152.88c0 4.02-2.793 7.28-6.239 7.28-3.445 0-6.239-3.26-6.239-7.28 0-4.021 2.794-7.28 6.239-7.28 3.446 0 6.239 3.259 6.239 7.28z"
      ></path>
    <ellipse
      cx="337.426"
      cy="97.76"
      fill="#FFF386"
      rx="6.239"
      ry="7.28"
      id="222"
      className="animate-pulse"
    ></ellipse>
    <ellipse
      cx="337.426"
      cy="267.12"
      fill="#FFF386"
      rx="6.239"
      ry="7.28"
      className="animate-pulse"
    ></ellipse>
    <ellipse
      fill="#FFF386"
      rx="6.239"
      ry="7.28"
      className="animate-pulse"
      transform="matrix(-1 0 0 1 24.438 206.88)"
    ></ellipse>
    <path
      fill="#FFF386"
      className="animate-pulse"
      d="M18.2 150.88c0 4.02 2.793 7.28 6.238 7.28 3.446 0 6.24-3.26 6.24-7.28 0-4.021-2.794-7.28-6.24-7.28-3.445 0-6.239 3.259-6.239 7.28z"
    ></path>
    <ellipse
      fill="#FFF386"
      rx="6.239"
      ry="7.28"
      className="animate-pulse"
      transform="matrix(-1 0 0 1 24.438 98.76)"
    ></ellipse>
    <ellipse
      fill="#FFF386"
      rx="6.239"
      ry="7.28"
      transform="matrix(-1 0 0 1 83.239 74.28)"
      className="animate-pulse"
    ></ellipse>
    <ellipse
      fill="#FFF386"
      rx="6.239"
      ry="7.28"
      className="animate-pulse"
      transform="matrix(-1 0 0 1 278.239 74.28)"
    ></ellipse>
    <ellipse
      fill="#FFF386"
      rx="6.239"
      ry="7.28"
      className="animate-pulse"
      transform="matrix(-1 0 0 1 278.239 20.28)"
    ></ellipse>
    <ellipse
      fill="#FFF386"
      rx="6.239"
      ry="7.28"
      className="animate-pulse"
      transform="matrix(-1 0 0 1 212.239 20.28)"
    ></ellipse>
    <ellipse
      fill="#FFF386"
      rx="6.239"
      ry="7.28"
      className="animate-pulse"
      transform="matrix(-1 0 0 1 145.239 20.28)"
    ></ellipse>
    <ellipse
      fill="#FFF386"
      rx="6.239"
      ry="7.28"
      className="animate-pulse"
      transform="matrix(-1 0 0 1 83.239 20.28)"
    ></ellipse>
    <ellipse
      fill="#FFF386"
      rx="6.239"
      ry="7.28"
      className="animate-pulse"
      transform="matrix(-1 0 0 1 24.438 265.12)"
    ></ellipse>
    <defs>
      <filter
        id="filter0_dd_131_9"
        width="344"
        height="203"
        x="9"
        y="85"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        ></feColorMatrix>
        <feOffset dy="4"></feOffset>
        <feComposite in2="hardAlpha" operator="out"></feComposite>
        <feColorMatrix values="0 0 0 0 0.6125 0 0 0 0 0.0331771 0 0 0 0 0.0331771 0 0 0 0.98 0"></feColorMatrix>
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_131_9"
        ></feBlend>
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        ></feColorMatrix>
        <feOffset dy="4"></feOffset>
        <feGaussianBlur stdDeviation="2"></feGaussianBlur>
        <feComposite in2="hardAlpha" operator="out"></feComposite>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
        <feBlend
          in2="effect1_dropShadow_131_9"
          result="effect2_dropShadow_131_9"
        ></feBlend>
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_131_9"
          result="shape"
        ></feBlend>
      </filter>
      <filter
        id="filter1_f_131_9"
        width="296"
        height="157"
        x="34"
        y="106"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
        <feBlend
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        ></feBlend>
        <feGaussianBlur
          result="effect1_foregroundBlur_131_9"
          stdDeviation="2"
        ></feGaussianBlur>
      </filter>
      <filter
        id="filter2_i_131_9"
        width="270"
        height="131"
        x="47"
        y="121"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
        <feBlend
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        ></feBlend>
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        ></feColorMatrix>
        <feOffset dy="4"></feOffset>
        <feGaussianBlur stdDeviation="2"></feGaussianBlur>
        <feComposite
          in2="hardAlpha"
          k2="-1"
          k3="1"
          operator="arithmetic"
        ></feComposite>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
        <feBlend in2="shape" result="effect1_innerShadow_131_9"></feBlend>
      </filter>
      <filter
        id="filter3_i_131_9"
        width="220"
        height="90"
        x="71"
        y="0"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
        <feBlend
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        ></feBlend>
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        ></feColorMatrix>
        <feOffset dy="4"></feOffset>
        <feGaussianBlur stdDeviation="2"></feGaussianBlur>
        <feComposite
          in2="hardAlpha"
          k2="-1"
          k3="1"
          operator="arithmetic"
        ></feComposite>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
        <feBlend in2="shape" result="effect1_innerShadow_131_9"></feBlend>
      </filter>
      <filter
        id="filter4_i_131_9"
        width="355"
        height="119"
        x="0"
        y="283"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
        <feBlend
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        ></feBlend>
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        ></feColorMatrix>
        <feOffset dy="4"></feOffset>
        <feGaussianBlur stdDeviation="2"></feGaussianBlur>
        <feComposite
          in2="hardAlpha"
          k2="-1"
          k3="1"
          operator="arithmetic"
        ></feComposite>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
        <feBlend in2="shape" result="effect1_innerShadow_131_9"></feBlend>
      </filter>
      <filter
        id="filter5_i_131_9"
        width="355"
        height="38"
        x="0"
        y="394"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
        <feBlend
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        ></feBlend>
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        ></feColorMatrix>
        <feOffset dy="4"></feOffset>
        <feGaussianBlur stdDeviation="2"></feGaussianBlur>
        <feComposite
          in2="hardAlpha"
          k2="-1"
          k3="1"
          operator="arithmetic"
        ></feComposite>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
        <feBlend in2="shape" result="effect1_innerShadow_131_9"></feBlend>
      </filter>
    </defs>
  </svg>
  );
};

export default Machine;
