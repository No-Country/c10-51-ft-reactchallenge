import React from "react";
import Svg, {
  Path,
  Circle,
  Defs,
  Pattern,
  Use,
  Image,
  Stop,
  Rect,
} from "react-native-svg";

export function AddButtonSvg({ type }) {
  return (
    <>
      {type === "rest" ? (
        <Svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Circle cx="12.5" cy="12.5" r="12.5" fill="#D9D9D9" />
          <Path
            d="M5.93433 12.803C5.93433 12.5753 6.02478 12.3569 6.1858 12.1959C6.34682 12.0349 6.5652 11.9444 6.79291 11.9444H18.8131C19.0408 11.9444 19.2592 12.0349 19.4202 12.1959C19.5812 12.3569 19.6717 12.5753 19.6717 12.803C19.6717 13.0307 19.5812 13.2491 19.4202 13.4101C19.2592 13.5712 19.0408 13.6616 18.8131 13.6616H6.79291C6.5652 13.6616 6.34682 13.5712 6.1858 13.4101C6.02478 13.2491 5.93433 13.0307 5.93433 12.803Z"
            fill="black"
          />
        </Svg>
      ) : (
        <Svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Circle cx="12.5" cy="12.5" r="12.5" fill="#D9D9D9" />
          <Path
            d="M16.6057 13.149H13.1504V16.6043C13.1504 16.7876 13.0776 16.9634 12.948 17.093C12.8184 17.2226 12.6426 17.2954 12.4593 17.2954C12.2761 17.2954 12.1003 17.2226 11.9707 17.093C11.8411 16.9634 11.7683 16.7876 11.7683 16.6043V13.149H8.31301C8.12973 13.149 7.95395 13.0762 7.82435 12.9466C7.69476 12.817 7.62195 12.6412 7.62195 12.458C7.62195 12.2747 7.69476 12.0989 7.82435 11.9693C7.95395 11.8397 8.12973 11.7669 8.31301 11.7669H11.7683V8.31162C11.7683 8.12834 11.8411 7.95257 11.9707 7.82297C12.1003 7.69337 12.2761 7.62057 12.4593 7.62057C12.6426 7.62057 12.8184 7.69337 12.948 7.82297C13.0776 7.95257 13.1504 8.12834 13.1504 8.31162V11.7669H16.6057C16.789 11.7669 16.9647 11.8397 17.0943 11.9693C17.2239 12.0989 17.2967 12.2747 17.2967 12.458C17.2967 12.6412 17.2239 12.817 17.0943 12.9466C16.9647 13.0762 16.789 13.149 16.6057 13.149Z"
            fill="black"
          />
        </Svg>
      )}
    </>
  );
}

export function AvatarSvg({ width, height }) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xlinkHref="http://www.w3.org/1999/xlink"
    >
      <Circle cx="32" cy="32" r="32" fill="#D9D9D9" />
      <Path
        d="M23.04 43.52C22.336 43.52 21.7332 43.2691 21.2314 42.7674C20.7296 42.2656 20.4792 41.6631 20.48 40.96V23.04C20.48 22.336 20.7309 21.7331 21.2327 21.2314C21.7344 20.7296 22.3369 20.4791 23.04 20.48H40.96C41.664 20.48 42.2669 20.7309 42.7687 21.2326C43.2704 21.7344 43.5209 22.3369 43.52 23.04V40.96C43.52 41.664 43.2692 42.2669 42.7674 42.7686C42.2656 43.2704 41.6632 43.5209 40.96 43.52H23.04ZM23.04 40.96H40.96V23.04H23.04V40.96ZM24.32 38.4H39.68L34.88 32L31.04 37.12L28.16 33.28L24.32 38.4Z"
        fill="black"
      />
      <Circle cx="32" cy="32" r="32" fill="url(#pattern0)" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <Use
            xlinkHref="#image0_49_660"
            transform="translate(-0.86646) scale(0.00310559)"
          />
        </Pattern>
        <Image
          id="image0_49_660"
          width="880"
          height="322"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA3AAAAFCCAYAAACwxz9YAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARhSURBVHgB7cAxAQAAAMKg9U9tCy8oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeBpNwQAB7vQn4AAAAABJRU5ErkJggg=="
        />
      </Defs>
    </Svg>
  );
}

export function CartSvg({ width, height }) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M6 20C5.45 20 4.979 19.804 4.587 19.412C4.195 19.02 3.99933 18.5493 4 18C4 17.45 4.196 16.979 4.588 16.587C4.98 16.195 5.45067 15.9993 6 16C6.55 16 7.021 16.196 7.413 16.588C7.805 16.98 8.00067 17.4507 8 18C8 18.55 7.804 19.021 7.412 19.413C7.02 19.805 6.54933 20.0007 6 20ZM16 20C15.45 20 14.979 19.804 14.587 19.412C14.195 19.02 13.9993 18.5493 14 18C14 17.45 14.196 16.979 14.588 16.587C14.98 16.195 15.4507 15.9993 16 16C16.55 16 17.021 16.196 17.413 16.588C17.805 16.98 18.0007 17.4507 18 18C18 18.55 17.804 19.021 17.412 19.413C17.02 19.805 16.5493 20.0007 16 20ZM5.15 4L7.55 9H14.55L17.3 4H5.15ZM6 15C5.25 15 4.68333 14.6707 4.3 14.012C3.91667 13.3533 3.9 12.6993 4.25 12.05L5.6 9.6L2 2H0.975C0.691667 2 0.458333 1.904 0.275 1.712C0.0916666 1.52 0 1.28267 0 1C0 0.71667 0.096 0.479003 0.288 0.287003C0.48 0.0950034 0.717333 -0.000663206 1 3.46021e-06H2.625C2.80833 3.46021e-06 2.98333 0.0500036 3.15 0.150004C3.31667 0.250004 3.44167 0.39167 3.525 0.575004L4.2 2H18.95C19.4 2 19.7083 2.16667 19.875 2.5C20.0417 2.83334 20.0333 3.18334 19.85 3.55L16.3 9.95C16.1167 10.2833 15.875 10.5417 15.575 10.725C15.275 10.9083 14.9333 11 14.55 11H7.1L6 13H17.025C17.3083 13 17.5417 13.096 17.725 13.288C17.9083 13.48 18 13.7173 18 14C18 14.2833 17.904 14.521 17.712 14.713C17.52 14.905 17.2827 15.0007 17 15H6Z"
        fill="black"
      />
    </Svg>
  );
}

export function ChipSvg() {
  return (
    <Svg
      width="23"
      height="23"
      viewBox="0 0 20 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M8 0.511353H18C19.11 0.511353 20 1.37418 20 2.45028V4.38921H16.59L14 6.90013V10.778L12 12.7169V16.0228H8V12.7169L6 10.778V5.75616L8 3.81723V0.511353ZM16 7.69509V10.206H20V6.32815H17.41L16 7.69509ZM4.59 4.38921L6 3.02227V0.511353H2C0.89 0.511353 0 1.37418 0 2.45028V4.38921H4.59ZM4 10.206V6.32815H0V10.206H4ZM6 13.5119L4.59 12.1449H0V14.0839C0 15.16 0.89 16.0228 2 16.0228H6V13.5119ZM15.41 12.1449L14 13.5119V16.0228H18C19.11 16.0228 20 15.16 20 14.0839V12.1449H15.41Z"
        fill="black"
      />
    </Svg>
  );
}

export function LupaSvg({ width, height, fill }) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z"
        fill={fill}
      />
    </Svg>
  );
}

export function MenuSvg({ width, height }) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path d="M0 0H18V2H0V0ZM0 7H12V9H0V7ZM0 14H18V16H0V14Z" fill="black" />
    </Svg>
  );
}

export function VisaSvg() {
  return (
    <Svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M3.75 4.5C2.51625 4.5 1.5 5.51625 1.5 6.75V17.25C1.5 18.4838 2.51625 19.5 3.75 19.5H20.25C21.4837 19.5 22.5 18.4838 22.5 17.25V6.75C22.5 5.51625 21.4837 4.5 20.25 4.5H3.75ZM3.75 6H20.25C20.6737 6 21 6.32625 21 6.75V17.25C21 17.6737 20.6737 18 20.25 18H3.75C3.32625 18 3 17.6737 3 17.25V6.75C3 6.32625 3.32625 6 3.75 6ZM14.5545 9.28125C13.11 9.28125 12.3517 9.99375 12.3517 10.8983C12.3517 12.5355 14.2717 12.3082 14.2717 13.1483C14.2717 13.293 14.1517 13.6185 13.3568 13.6185C12.5618 13.6185 12.0443 13.3373 12.0443 13.3373L11.8117 14.4172C11.8117 14.4172 12.303 14.721 13.2892 14.721C14.2717 14.721 15.6547 13.965 15.6547 12.8685C15.6547 11.5515 13.7325 11.4645 13.7325 10.8773C13.7325 10.5773 13.9875 10.3372 14.67 10.3372C15.1155 10.3372 15.6075 10.6898 15.6075 10.6898L15.843 9.54225C15.843 9.54225 15.1905 9.2835 14.553 9.2835L14.5545 9.28125ZM8.391 9.375L7.125 13.0785C7.125 13.0785 7.062 12.7575 7.03125 12.5625C6.315 10.9575 5.15625 10.359 5.15625 10.359L6.25875 14.5545H7.75875L9.86625 9.375H8.3925H8.391ZM10.4062 9.375L9.58575 14.5545H10.9703L11.79 9.375H10.4062ZM17.8597 9.375L15.6097 14.5545H16.9688L17.25 13.8285H18.9847L19.125 14.5545H20.367L19.3125 9.375H17.8597ZM3.63225 9.3975C3.63225 9.3975 6.33 10.2262 6.96075 12.258L6.4935 9.91425C6.4935 9.91425 6.28725 9.39675 5.7435 9.39675H3.633L3.63225 9.3975ZM18.375 10.875L18.7725 12.8205H17.6475L18.375 10.875Z"
        fill="black"
      />
    </Svg>
  );
}

export function HomeSvg({ isPressed, fill }) {
  return (
    <Svg
      width="16"
      height="18"
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d={`${
          isPressed
            ? "M0 18V6L8 0L16 6V18H10V11H6V18H0Z"
            : "M2 16H5V10H11V16H14V7L8 2.5L2 7V16ZM0 18V6L8 0L16 6V18H9V12H7V18H0Z"
        }`}
        fill={fill}
      />
    </Svg>
  );
}

export function BagSvg({ isPressed, fill }) {
  return (
    <Svg
      width="18"
      height="21"
      viewBox="0 0 18 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d={`${
          isPressed
            ? "M9 12C7.67392 12 6.40215 11.4732 5.46447 10.5355C4.52678 9.59785 4 8.32608 4 7H6C6 7.79565 6.31607 8.55871 6.87868 9.12132C7.44129 9.68393 8.20435 10 9 10C9.79565 10 10.5587 9.68393 11.1213 9.12132C11.6839 8.55871 12 7.79565 12 7H14C14 8.32608 13.4732 9.59785 12.5355 10.5355C11.5979 11.4732 10.3261 12 9 12ZM9 2C9.79565 2 10.5587 2.31607 11.1213 2.87868C11.6839 3.44129 12 4.20435 12 5H6C6 4.20435 6.31607 3.44129 6.87868 2.87868C7.44129 2.31607 8.20435 2 9 2ZM16 5H14C14 4.34339 13.8707 3.69321 13.6194 3.08658C13.3681 2.47995 12.9998 1.92876 12.5355 1.46447C12.0712 1.00017 11.52 0.631876 10.9134 0.380602C10.3068 0.129329 9.65661 0 9 0C7.67392 0 6.40215 0.526784 5.46447 1.46447C4.52678 2.40215 4 3.67392 4 5H2C0.89 5 0 5.89 0 7V19C0 19.5304 0.210714 20.0391 0.585786 20.4142C0.960859 20.7893 1.46957 21 2 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19V7C18 6.46957 17.7893 5.96086 17.4142 5.58579C17.0391 5.21071 16.5304 5 16 5Z"
            : "M16 5H14C14 2.2 11.8 0 9 0C6.2 0 4 2.2 4 5H2C0.9 5 0 5.9 0 7V19C0 20.1 0.9 21 2 21H16C17.1 21 18 20.1 18 19V7C18 5.9 17.1 5 16 5ZM9 2C10.7 2 12 3.3 12 5H6C6 3.3 7.3 2 9 2ZM16 19H2V7H16V19ZM9 11C7.3 11 6 9.7 6 8H4C4 10.8 6.2 13 9 13C11.8 13 14 10.8 14 8H12C12 9.7 10.7 11 9 11Z"
        } `}
        fill={fill}
      />
    </Svg>
  );
}

export function CreditCardSvg({ isPressed, height, width, fill }) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d={`${
          isPressed
            ? "M2 16C1.45 16 0.979002 15.804 0.587002 15.412C0.195002 15.02 -0.000664969 14.5493 1.69779e-06 14V2C1.69779e-06 1.45 0.196002 0.979002 0.588002 0.587002C0.980002 0.195002 1.45067 -0.000664969 2 1.69779e-06H18C18.55 1.69779e-06 19.021 0.196001 19.413 0.588001C19.805 0.980001 20.0007 1.45067 20 2V14C20 14.55 19.804 15.021 19.412 15.413C19.02 15.805 18.5493 16.0007 18 16H2ZM2 8H18V4H2V8Z"
            : "M20 2V14C20 14.55 19.804 15.021 19.412 15.413C19.02 15.805 18.5493 16.0007 18 16H2C1.45 16 0.979002 15.804 0.587002 15.412C0.195002 15.02 -0.000664969 14.5493 1.69779e-06 14V2C1.69779e-06 1.45 0.196002 0.979002 0.588002 0.587002C0.980002 0.195002 1.45067 -0.000664969 2 1.69779e-06H18C18.55 1.69779e-06 19.021 0.196001 19.413 0.588001C19.805 0.980001 20.0007 1.45067 20 2ZM2 4H18V2H2V4ZM2 8V14H18V8H2Z"
        }`}
        fill={fill}
      />
    </Svg>
  );
}

export function UserProfileSvg({ isPressed, fill }) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d={` ${
          isPressed
            ? ""
            : "M12 6C11.2583 6 10.5333 6.21993 9.91661 6.63199C9.29993 7.04404 8.81928 7.62971 8.53545 8.31494C8.25162 9.00016 8.17736 9.75416 8.32206 10.4816C8.46675 11.209 8.8239 11.8772 9.34835 12.4017C9.8728 12.9261 10.541 13.2833 11.2684 13.4279C11.9958 13.5726 12.7498 13.4984 13.4351 13.2145C14.1203 12.9307 14.706 12.4501 15.118 11.8334C15.5301 11.2167 15.75 10.4917 15.75 9.75C15.75 8.75544 15.3549 7.80161 14.6517 7.09835C13.9484 6.39509 12.9946 6 12 6ZM12 12C11.555 12 11.12 11.868 10.75 11.6208C10.38 11.3736 10.0916 11.0222 9.92127 10.611C9.75098 10.1999 9.70642 9.7475 9.79323 9.31105C9.88005 8.87459 10.0943 8.47368 10.409 8.15901C10.7237 7.84434 11.1246 7.63005 11.561 7.54323C11.9975 7.45642 12.4499 7.50097 12.861 7.67127C13.2722 7.84157 13.6236 8.12996 13.8708 8.49997C14.118 8.86998 14.25 9.30499 14.25 9.75C14.2494 10.3466 14.0122 10.9185 13.5903 11.3403C13.1685 11.7622 12.5966 11.9994 12 12Z"
        } `}
        fill={fill}
      />
      <Path
        d={`${
          isPressed
            ? "M19.0618 17.6975C20.1388 16.4016 20.888 14.8653 21.2458 13.2186C21.6035 11.5719 21.5595 9.86333 21.1173 8.2373C20.6751 6.61126 19.8477 5.11565 18.7052 3.87699C17.5628 2.63833 16.1388 1.69305 14.5537 1.12112C12.9686 0.549195 11.2691 0.367443 9.59897 0.591243C7.92881 0.815043 6.33711 1.43781 4.95854 2.40686C3.57996 3.37591 2.45506 4.66274 1.67899 6.15849C0.902928 7.65423 0.498528 9.31489 0.500004 11C0.50057 13.4496 1.36381 15.8208 2.93825 17.6975L2.92325 17.7102C2.97575 17.7732 3.03575 17.8272 3.08975 17.8895C3.15725 17.9667 3.23 18.0395 3.29975 18.1145C3.50975 18.3425 3.72575 18.5615 3.95225 18.767C4.02125 18.83 4.0925 18.8885 4.16225 18.9485C4.40225 19.1555 4.649 19.352 4.90475 19.535C4.93775 19.5575 4.96775 19.5867 5.00075 19.61V19.601C6.75733 20.8371 8.85283 21.5005 11.0008 21.5005C13.1487 21.5005 15.2442 20.8371 17.0008 19.601V19.61C17.0338 19.5867 17.063 19.5575 17.0968 19.535C17.3518 19.3512 17.5993 19.1555 17.8393 18.9485C17.909 18.8885 17.9803 18.8292 18.0493 18.767C18.2758 18.5607 18.4918 18.3425 18.7018 18.1145C18.7715 18.0395 18.8435 17.9667 18.9118 17.8895C18.965 17.8272 19.0258 17.7732 19.0783 17.7095L19.0618 17.6975ZM11 4.99998C11.6675 4.99998 12.32 5.19792 12.8751 5.56877C13.4301 5.93962 13.8627 6.46673 14.1181 7.08343C14.3735 7.70013 14.4404 8.37873 14.3102 9.03341C14.1799 9.6881 13.8585 10.2895 13.3865 10.7615C12.9145 11.2335 12.3131 11.5549 11.6584 11.6851C11.0037 11.8154 10.3251 11.7485 9.70845 11.4931C9.09175 11.2376 8.56464 10.805 8.19379 10.25C7.82294 9.69502 7.625 9.0425 7.625 8.37498C7.625 7.47988 7.98058 6.62143 8.61352 5.9885C9.24645 5.35556 10.1049 4.99998 11 4.99998ZM5.00525 17.6975C5.01826 16.7127 5.41846 15.7727 6.11927 15.0807C6.82008 14.3887 7.76514 14.0005 8.75 14H13.25C14.2349 14.0005 15.1799 14.3887 15.8807 15.0807C16.5815 15.7727 16.9817 16.7127 16.9948 17.6975C15.3499 19.1797 13.2142 20 11 20C8.78581 20 6.65012 19.1797 5.00525 17.6975Z"
            : "M12 1.5C9.9233 1.5 7.89323 2.11581 6.16652 3.26957C4.4398 4.42332 3.09399 6.0632 2.29927 7.98182C1.50455 9.90045 1.29661 12.0116 1.70176 14.0484C2.1069 16.0852 3.10693 17.9562 4.57538 19.4246C6.04383 20.8931 7.91476 21.8931 9.95156 22.2982C11.9884 22.7034 14.0996 22.4955 16.0182 21.7007C17.9368 20.906 19.5767 19.5602 20.7304 17.8335C21.8842 16.1068 22.5 14.0767 22.5 12C22.4968 9.2162 21.3896 6.54733 19.4211 4.57889C17.4527 2.61044 14.7838 1.50318 12 1.5ZM7.5 19.7828V18.75C7.5006 18.1534 7.73784 17.5815 8.15967 17.1597C8.5815 16.7378 9.15345 16.5006 9.75 16.5H14.25C14.8466 16.5006 15.4185 16.7378 15.8403 17.1597C16.2622 17.5815 16.4994 18.1534 16.5 18.75V19.7828C15.1344 20.5802 13.5814 21.0004 12 21.0004C10.4186 21.0004 8.86563 20.5802 7.5 19.7828ZM17.994 18.6945C17.9791 17.7107 17.5782 16.7722 16.8779 16.0812C16.1776 15.3901 15.2339 15.0019 14.25 15H9.75C8.76614 15.0019 7.82238 15.3901 7.12207 16.0812C6.42176 16.7722 6.02095 17.7107 6.006 18.6945C4.64593 17.4801 3.6868 15.8812 3.25563 14.1095C2.82446 12.3378 2.94158 10.477 3.59148 8.77339C4.24139 7.06978 5.39342 5.60375 6.89503 4.56942C8.39665 3.5351 10.177 2.98127 12.0004 2.98127C13.8237 2.98127 15.6041 3.5351 17.1057 4.56942C18.6073 5.60375 19.7594 7.06978 20.4093 8.77339C21.0592 10.477 21.1763 12.3378 20.7451 14.1095C20.314 15.8812 19.3541 17.4801 17.994 18.6945Z"
        }`}
        fill={fill}
      />
    </Svg>
  );
}

export function RelojSvg({ width, height }) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M10.74 0C5.22 0 0.75 4.48 0.75 10C0.75 15.52 5.22 20 10.74 20C16.27 20 20.75 15.52 20.75 10C20.75 4.48 16.27 0 10.74 0ZM10.75 18C6.33 18 2.75 14.42 2.75 10C2.75 5.58 6.33 2 10.75 2C15.17 2 18.75 5.58 18.75 10C18.75 14.42 15.17 18 10.75 18ZM10.53 5H10.47C10.07 5 9.75 5.32 9.75 5.72V10.44C9.75 10.79 9.93 11.12 10.24 11.3L14.39 13.79C14.73 13.99 15.17 13.89 15.37 13.55C15.4202 13.469 15.4536 13.3788 15.4682 13.2846C15.4828 13.1905 15.4783 13.0943 15.455 13.002C15.4317 12.9096 15.39 12.8229 15.3324 12.7469C15.2749 12.671 15.2026 12.6074 15.12 12.56L11.25 10.26V5.72C11.25 5.32 10.93 5 10.53 5Z"
        fill="black"
      />
    </Svg>
  );
}

export function PesosSvg({ width, height }) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 10 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M3.77495 18V15.85C2.89162 15.65 2.12895 15.2667 1.48695 14.7C0.844952 14.1333 0.374285 13.3333 0.0749512 12.3L1.92495 11.55C2.17495 12.35 2.54595 12.9583 3.03795 13.375C3.52995 13.7917 4.17562 14 4.97495 14C5.65829 14 6.23762 13.8457 6.71295 13.537C7.18828 13.2283 7.42562 12.7493 7.42495 12.1C7.42495 11.5167 7.24162 11.0543 6.87495 10.713C6.50828 10.3717 5.65828 9.984 4.32495 9.55C2.89162 9.1 1.90828 8.56233 1.37495 7.937C0.841618 7.31167 0.574951 6.54933 0.574951 5.65C0.574951 4.56667 0.924951 3.725 1.62495 3.125C2.32495 2.525 3.04162 2.18333 3.77495 2.1V0H5.77495V2.1C6.60828 2.23333 7.29595 2.53767 7.83795 3.013C8.37995 3.48833 8.77562 4.06733 9.02495 4.75L7.17495 5.55C6.97495 5.01667 6.69162 4.61667 6.32495 4.35C5.95828 4.08333 5.45828 3.95 4.82495 3.95C4.09162 3.95 3.53328 4.11267 3.14995 4.438C2.76662 4.76333 2.57495 5.16733 2.57495 5.65C2.57495 6.2 2.82495 6.63333 3.32495 6.95C3.82495 7.26667 4.69162 7.6 5.92495 7.95C7.07495 8.28333 7.94595 8.81267 8.53795 9.538C9.12995 10.2633 9.42562 11.1007 9.42495 12.05C9.42495 13.2333 9.07495 14.1333 8.37495 14.75C7.67495 15.3667 6.80828 15.75 5.77495 15.9V18H3.77495Z"
        fill="black"
      />
    </Svg>
  );
}

export function EstrellaSvg({ width, height }) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M12.7255 2.84549L12.25 1.38197L11.7745 2.84549L9.75385 9.06434H3.21496H1.67612L2.92107 9.96885L8.21114 13.8123L6.19051 20.0312L5.71498 21.4947L6.95993 20.5902L12.25 16.7467L17.5401 20.5902L18.785 21.4947L18.3095 20.0312L16.2889 13.8123L21.5789 9.96885L22.8239 9.06434H21.285H14.7462L12.7255 2.84549Z"
        fill="#FFC000"
        stroke="#FFC000"
      />
    </Svg>
  );
}

export function HeartSvg({ width, height }) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M10.1 15.55L10 15.65L9.89 15.55C5.14 11.24 2 8.39 2 5.5C2 3.5 3.5 2 5.5 2C7.04 2 8.54 3 9.07 4.36H10.93C11.46 3 12.96 2 14.5 2C16.5 2 18 3.5 18 5.5C18 8.39 14.86 11.24 10.1 15.55ZM14.5 0C12.76 0 11.09 0.81 10 2.08C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.41 0 5.5C0 9.27 3.4 12.36 8.55 17.03L10 18.35L11.45 17.03C16.6 12.36 20 9.27 20 5.5C20 2.41 17.58 0 14.5 0Z"
        fill="black"
      />
    </Svg>
  );
}

export function FilterSvg({ width, height, fill }) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M19 9C18.3811 9.00174 17.7778 9.19488 17.2729 9.55294C16.7681 9.911 16.3863 10.4165 16.18 11H3C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348 2 12C2 12.2652 2.10536 12.5196 2.29289 12.7071C2.48043 12.8946 2.73478 13 3 13H16.18C16.3635 13.5189 16.6861 13.9773 17.1126 14.3251C17.5392 14.6729 18.0532 14.8966 18.5984 14.9718C19.1435 15.0471 19.6989 14.9709 20.2037 14.7516C20.7085 14.5323 21.1432 14.1784 21.4603 13.7286C21.7775 13.2788 21.9647 12.7504 22.0017 12.2013C22.0386 11.6522 21.9238 11.1035 21.6697 10.6153C21.4157 10.1271 21.0323 9.71812 20.5614 9.43323C20.0905 9.14833 19.5504 8.99845 19 9ZM19 13C18.8022 13 18.6089 12.9414 18.4444 12.8315C18.28 12.7216 18.1518 12.5654 18.0761 12.3827C18.0004 12.2 17.9806 11.9989 18.0192 11.8049C18.0578 11.6109 18.153 11.4327 18.2929 11.2929C18.4327 11.153 18.6109 11.0578 18.8049 11.0192C18.9989 10.9806 19.2 11.0004 19.3827 11.0761C19.5654 11.1518 19.7216 11.28 19.8315 11.4444C19.9414 11.6089 20 11.8022 20 12C20 12.2652 19.8946 12.5196 19.7071 12.7071C19.5196 12.8946 19.2652 13 19 13ZM3 7H4.18C4.3902 7.57915 4.77363 8.07954 5.27817 8.43316C5.7827 8.78678 6.38388 8.97648 7 8.97648C7.61612 8.97648 8.2173 8.78678 8.72184 8.43316C9.22637 8.07954 9.6098 7.57915 9.82 7H21C21.2652 7 21.5196 6.89464 21.7071 6.70711C21.8946 6.51957 22 6.26522 22 6C22 5.73478 21.8946 5.48043 21.7071 5.29289C21.5196 5.10536 21.2652 5 21 5H9.82C9.6098 4.42085 9.22637 3.92046 8.72184 3.56684C8.2173 3.21322 7.61612 3.02352 7 3.02352C6.38388 3.02352 5.7827 3.21322 5.27817 3.56684C4.77363 3.92046 4.3902 4.42085 4.18 5H3C2.73478 5 2.48043 5.10536 2.29289 5.29289C2.10536 5.48043 2 5.73478 2 6C2 6.26522 2.10536 6.51957 2.29289 6.70711C2.48043 6.89464 2.73478 7 3 7ZM7 5C7.19778 5 7.39112 5.05865 7.55557 5.16853C7.72002 5.27841 7.84819 5.43459 7.92388 5.61732C7.99957 5.80004 8.01937 6.00111 7.98079 6.19509C7.9422 6.38907 7.84696 6.56725 7.70711 6.70711C7.56725 6.84696 7.38907 6.9422 7.19509 6.98079C7.00111 7.01937 6.80004 6.99957 6.61732 6.92388C6.43459 6.84819 6.27841 6.72002 6.16853 6.55557C6.05865 6.39112 6 6.19778 6 6C6 5.73478 6.10536 5.48043 6.29289 5.29289C6.48043 5.10536 6.73478 5 7 5ZM21 17H13.82C13.6098 16.4208 13.2264 15.9205 12.7218 15.5668C12.2173 15.2132 11.6161 15.0235 11 15.0235C10.3839 15.0235 9.7827 15.2132 9.27816 15.5668C8.77363 15.9205 8.3902 16.4208 8.18 17H3C2.73478 17 2.48043 17.1054 2.29289 17.2929C2.10536 17.4804 2 17.7348 2 18C2 18.2652 2.10536 18.5196 2.29289 18.7071C2.48043 18.8946 2.73478 19 3 19H8.18C8.3902 19.5792 8.77363 20.0795 9.27816 20.4332C9.7827 20.7868 10.3839 20.9765 11 20.9765C11.6161 20.9765 12.2173 20.7868 12.7218 20.4332C13.2264 20.0795 13.6098 19.5792 13.82 19H21C21.2652 19 21.5196 18.8946 21.7071 18.7071C21.8946 18.5196 22 18.2652 22 18C22 17.7348 21.8946 17.4804 21.7071 17.2929C21.5196 17.1054 21.2652 17 21 17ZM11 19C10.8022 19 10.6089 18.9414 10.4444 18.8315C10.28 18.7216 10.1518 18.5654 10.0761 18.3827C10.0004 18.2 9.98063 17.9989 10.0192 17.8049C10.0578 17.6109 10.153 17.4327 10.2929 17.2929C10.4327 17.153 10.6109 17.0578 10.8049 17.0192C10.9989 16.9806 11.2 17.0004 11.3827 17.0761C11.5654 17.1518 11.7216 17.28 11.8315 17.4444C11.9414 17.6089 12 17.8022 12 18C12 18.2652 11.8946 18.5196 11.7071 18.7071C11.5196 18.8946 11.2652 19 11 19Z"
        fill={fill}
      />
    </Svg>
  );
}

export function CampaingSvg({ width, height, fill }) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 13 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M12.4093 9.04359L11.1404 7.77469V6.09375C11.139 4.93211 10.7068 3.81227 9.92758 2.95077C9.14834 2.08927 8.07733 1.54731 6.92166 1.42969V0.46875H5.98416V1.42969C4.82849 1.54731 3.75749 2.08927 2.97824 2.95077C2.19899 3.81227 1.76686 4.93211 1.76541 6.09375V7.77469L0.496505 9.04359C0.408591 9.13148 0.359188 9.25069 0.359161 9.375V10.7812C0.359161 10.9056 0.408547 11.0248 0.496455 11.1127C0.584363 11.2006 0.703591 11.25 0.827911 11.25H4.10916V11.6142C4.09896 12.2089 4.30857 12.7864 4.69781 13.2361C5.08705 13.6858 5.62855 13.9761 6.21854 14.0512C6.5444 14.0836 6.87342 14.0473 7.18444 13.9448C7.49545 13.8424 7.78158 13.6759 8.02441 13.4562C8.26724 13.2365 8.4614 12.9684 8.5944 12.6692C8.7274 12.37 8.7963 12.0462 8.79666 11.7188V11.25H12.0779C12.2022 11.25 12.3215 11.2006 12.4094 11.1127C12.4973 11.0248 12.5467 10.9056 12.5467 10.7812V9.375C12.5466 9.25069 12.4972 9.13148 12.4093 9.04359ZM7.85916 11.7188C7.85916 12.0917 7.711 12.4494 7.44728 12.7131C7.18356 12.9768 6.82587 13.125 6.45291 13.125C6.07995 13.125 5.72227 12.9768 5.45854 12.7131C5.19482 12.4494 5.04666 12.0917 5.04666 11.7188V11.25H7.85916V11.7188ZM11.6092 10.3125H1.29666V9.56906L2.56557 8.30016C2.65348 8.21227 2.70288 8.09306 2.70291 7.96875V6.09375C2.70291 5.09919 3.098 4.14536 3.80126 3.4421C4.50452 2.73884 5.45835 2.34375 6.45291 2.34375C7.44747 2.34375 8.4013 2.73884 9.10456 3.4421C9.80782 4.14536 10.2029 5.09919 10.2029 6.09375V7.96875C10.2029 8.09306 10.2523 8.21227 10.3403 8.30016L11.6092 9.56906V10.3125Z"
        fill={fill}
      />
    </Svg>
  );
}
export function BookSvg({ width, height, fill }) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 15 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M8.70291 4.1875V3.125C9.04666 2.97917 9.39833 2.86979 9.75791 2.79688C10.1175 2.72396 10.495 2.6875 10.8904 2.6875C11.1612 2.6875 11.4269 2.70833 11.6873 2.75C11.9477 2.79167 12.2029 2.84375 12.4529 2.90625V3.90625C12.2029 3.8125 11.9502 3.74208 11.6948 3.695C11.4394 3.64792 11.1712 3.62458 10.8904 3.625C10.4946 3.625 10.1144 3.67458 9.74979 3.77375C9.3852 3.87292 9.03624 4.01083 8.70291 4.1875ZM8.70291 7.625V6.5625C9.04666 6.41667 9.39833 6.30729 9.75791 6.23438C10.1175 6.16146 10.495 6.125 10.8904 6.125C11.1612 6.125 11.4269 6.14583 11.6873 6.1875C11.9477 6.22917 12.2029 6.28125 12.4529 6.34375V7.34375C12.2029 7.25 11.9502 7.17958 11.6948 7.1325C11.4394 7.08542 11.1712 7.06208 10.8904 7.0625C10.4946 7.0625 10.1144 7.10938 9.74979 7.20312C9.3852 7.29688 9.03624 7.4375 8.70291 7.625ZM8.70291 5.90625V4.84375C9.04666 4.69792 9.39833 4.58854 9.75791 4.51562C10.1175 4.44271 10.495 4.40625 10.8904 4.40625C11.1612 4.40625 11.4269 4.42708 11.6873 4.46875C11.9477 4.51042 12.2029 4.5625 12.4529 4.625V5.625C12.2029 5.53125 11.9502 5.46083 11.6948 5.41375C11.4394 5.36667 11.1712 5.34333 10.8904 5.34375C10.4946 5.34375 10.1144 5.39333 9.74979 5.4925C9.3852 5.59167 9.03624 5.72958 8.70291 5.90625ZM4.01541 8C4.50499 8 4.98166 8.05479 5.44541 8.16438C5.90916 8.27396 6.36999 8.43792 6.82791 8.65625V2.5C6.40083 2.25 5.9477 2.0625 5.46854 1.9375C4.98937 1.8125 4.50499 1.75 4.01541 1.75C3.64041 1.75 3.26791 1.78646 2.89791 1.85938C2.52791 1.93229 2.17124 2.04167 1.82791 2.1875V8.375C2.19249 8.25 2.55458 8.15625 2.91416 8.09375C3.27374 8.03125 3.64083 8 4.01541 8ZM8.07791 8.65625C8.53624 8.4375 8.99708 8.27333 9.46041 8.16375C9.92374 8.05417 10.4004 7.99958 10.8904 8C11.2654 8 11.6327 8.03125 11.9923 8.09375C12.3519 8.15625 12.7137 8.25 13.0779 8.375V2.1875C12.7342 2.04167 12.3773 1.93229 12.0073 1.85938C11.6373 1.78646 11.265 1.75 10.8904 1.75C10.4008 1.75 9.91645 1.8125 9.43729 1.9375C8.95812 2.0625 8.50499 2.25 8.07791 2.5V8.65625ZM7.45291 10.5C6.95291 10.1042 6.41124 9.79688 5.82791 9.57812C5.24458 9.35938 4.64041 9.25 4.01541 9.25C3.57791 9.25 3.14812 9.30729 2.72604 9.42188C2.30395 9.53646 1.90041 9.69792 1.51541 9.90625C1.29666 10.0208 1.08583 10.0156 0.882911 9.89062C0.679995 9.76562 0.578328 9.58333 0.577911 9.34375V1.8125C0.577911 1.69792 0.606661 1.58854 0.664161 1.48437C0.721661 1.38021 0.807495 1.30208 0.921661 1.25C1.40083 1 1.90083 0.8125 2.42166 0.6875C2.94249 0.5625 3.47374 0.5 4.01541 0.5C4.61958 0.5 5.21083 0.578125 5.78916 0.734375C6.3675 0.890625 6.92208 1.125 7.45291 1.4375C7.98416 1.125 8.53895 0.890625 9.11729 0.734375C9.69562 0.578125 10.2867 0.5 10.8904 0.5C11.4321 0.5 11.9633 0.5625 12.4842 0.6875C13.005 0.8125 13.505 1 13.9842 1.25C14.0987 1.30208 14.1848 1.38021 14.2423 1.48437C14.2998 1.58854 14.3283 1.69792 14.3279 1.8125V9.34375C14.3279 9.58333 14.2265 9.76562 14.0235 9.89062C13.8206 10.0156 13.6096 10.0208 13.3904 9.90625C13.005 9.69792 12.6015 9.53646 12.1798 9.42188C11.7581 9.30729 11.3283 9.25 10.8904 9.25C10.2654 9.25 9.66125 9.35938 9.07791 9.57812C8.49458 9.79688 7.95291 10.1042 7.45291 10.5Z"
        fill={fill}
      />
    </Svg>
  );
}
export function CuponSvg({ width, height, fill }) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M9.73416 9.3125C9.73416 9.22917 9.70291 9.15625 9.64041 9.09375C9.57791 9.03125 9.50499 9 9.42166 9C9.33833 9 9.26541 9.03125 9.20291 9.09375C9.14041 9.15625 9.10916 9.22917 9.10916 9.3125V11.1875C9.10916 11.2708 9.14041 11.3438 9.20291 11.4063C9.26541 11.4688 9.33833 11.5 9.42166 11.5C9.50499 11.5 9.57791 11.4688 9.64041 11.4063C9.70291 11.3438 9.73416 11.2708 9.73416 11.1875V9.3125ZM10.6717 9.3125V11.1875C10.6717 11.2708 10.7029 11.3438 10.7654 11.4063C10.8279 11.4688 10.9008 11.5 10.9842 11.5C11.0675 11.5 11.1404 11.4688 11.2029 11.4063C11.2654 11.3438 11.2967 11.2708 11.2967 11.1875V9.3125C11.2967 9.22917 11.2654 9.15625 11.2029 9.09375C11.1404 9.03125 11.0675 9 10.9842 9C10.9008 9 10.8279 9.03125 10.7654 9.09375C10.7029 9.15625 10.6717 9.22917 10.6717 9.3125ZM3.32791 4.625H9.57791C9.75499 4.625 9.90354 4.565 10.0235 4.445C10.1435 4.325 10.2033 4.17667 10.2029 4C10.2029 3.82292 10.1429 3.67438 10.0229 3.55438C9.90291 3.43438 9.75458 3.37458 9.57791 3.375H3.32791C3.15083 3.375 3.00229 3.435 2.88229 3.555C2.76229 3.675 2.70249 3.82333 2.70291 4C2.70291 4.17708 2.76291 4.32563 2.88291 4.44563C3.00291 4.56563 3.15124 4.62542 3.32791 4.625ZM10.2029 13.375C9.33833 13.375 8.60124 13.0702 7.99166 12.4606C7.38208 11.851 7.07749 11.1142 7.07791 10.25C7.07791 9.38542 7.3827 8.64833 7.99229 8.03875C8.60187 7.42917 9.33875 7.12458 10.2029 7.125C11.0675 7.125 11.8046 7.42979 12.4142 8.03938C13.0237 8.64896 13.3283 9.38583 13.3279 10.25C13.3279 11.1146 13.0231 11.8517 12.4135 12.4613C11.804 13.0708 11.0671 13.3754 10.2029 13.375ZM0.827911 12.6719V2.125C0.827911 1.78125 0.950411 1.48688 1.19541 1.24188C1.44041 0.996876 1.73458 0.874584 2.07791 0.875001H10.8279C11.1717 0.875001 11.466 0.997501 11.711 1.2425C11.956 1.4875 12.0783 1.78167 12.0779 2.125V6.29688C11.88 6.20313 11.6769 6.125 11.4685 6.0625C11.2602 6 11.0467 5.95313 10.8279 5.92188V2.125H2.07791V10.9063H5.87479C5.92687 11.2292 6.0077 11.5365 6.11729 11.8281C6.22687 12.1198 6.36999 12.3958 6.54666 12.6563C6.49458 12.6667 6.43979 12.6588 6.38229 12.6325C6.32479 12.6063 6.27541 12.5725 6.23416 12.5313L5.73416 12.0313C5.67166 11.9688 5.59874 11.9375 5.51541 11.9375C5.43208 11.9375 5.35916 11.9688 5.29666 12.0313L4.79666 12.5313C4.73416 12.5938 4.66124 12.625 4.57791 12.625C4.49458 12.625 4.42166 12.5938 4.35916 12.5313L3.85916 12.0313C3.79666 11.9688 3.72374 11.9375 3.64041 11.9375C3.55708 11.9375 3.48416 11.9688 3.42166 12.0313L2.92166 12.5313C2.85916 12.5938 2.78624 12.625 2.70291 12.625C2.61958 12.625 2.54666 12.5938 2.48416 12.5313L1.98416 12.0313C1.92166 11.9688 1.84874 11.9375 1.76541 11.9375C1.68208 11.9375 1.60916 11.9688 1.54666 12.0313L1.04666 12.5313L0.827911 12.6719ZM3.32791 9.625H5.87479C5.90604 9.40625 5.95291 9.19271 6.01541 8.98438C6.07791 8.77604 6.15604 8.57292 6.24979 8.375H3.32791C3.15083 8.375 3.00229 8.435 2.88229 8.555C2.76229 8.675 2.70249 8.82333 2.70291 9C2.70291 9.17708 2.76291 9.32563 2.88291 9.44563C3.00291 9.56563 3.15124 9.62542 3.32791 9.625ZM3.32791 7.125H7.14041C7.53624 6.73958 7.99729 6.43479 8.52354 6.21063C9.04979 5.98646 9.60958 5.87458 10.2029 5.875H3.32791C3.15083 5.875 3.00229 5.935 2.88229 6.055C2.76229 6.175 2.70249 6.32333 2.70291 6.5C2.70291 6.67708 2.76291 6.82563 2.88291 6.94563C3.00291 7.06563 3.15124 7.12542 3.32791 7.125Z"
        fill={fill}
      />
    </Svg>
  );
}
export function InfoSvg({ width, height, fill }) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M6.5 9.625C6.67708 9.625 6.82563 9.565 6.94563 9.445C7.06563 9.325 7.12542 9.17667 7.125 9V6.5C7.125 6.32292 7.065 6.17437 6.945 6.05437C6.825 5.93437 6.67667 5.87458 6.5 5.875C6.32292 5.875 6.17437 5.935 6.05437 6.055C5.93437 6.175 5.87458 6.32333 5.875 6.5V9C5.875 9.17708 5.935 9.32562 6.055 9.44562C6.175 9.56562 6.32333 9.62542 6.5 9.625ZM6.5 4.625C6.67708 4.625 6.82563 4.565 6.94563 4.445C7.06563 4.325 7.12542 4.17667 7.125 4C7.125 3.82292 7.065 3.67438 6.945 3.55438C6.825 3.43438 6.67667 3.37458 6.5 3.375C6.32292 3.375 6.17437 3.435 6.05437 3.555C5.93437 3.675 5.87458 3.82333 5.875 4C5.875 4.17708 5.935 4.32563 6.055 4.44563C6.175 4.56563 6.32333 4.62542 6.5 4.625ZM6.5 12.75C5.63542 12.75 4.82292 12.5858 4.0625 12.2575C3.30208 11.9292 2.64062 11.484 2.07813 10.9219C1.51563 10.3594 1.07042 9.69792 0.7425 8.9375C0.414583 8.17708 0.250417 7.36458 0.25 6.5C0.25 5.63542 0.414167 4.82292 0.7425 4.0625C1.07083 3.30208 1.51604 2.64062 2.07813 2.07813C2.64062 1.51563 3.30208 1.07042 4.0625 0.7425C4.82292 0.414583 5.63542 0.250417 6.5 0.25C7.36458 0.25 8.17708 0.414167 8.9375 0.7425C9.69792 1.07083 10.3594 1.51604 10.9219 2.07813C11.4844 2.64062 11.9298 3.30208 12.2581 4.0625C12.5865 4.82292 12.7504 5.63542 12.75 6.5C12.75 7.36458 12.5858 8.17708 12.2575 8.9375C11.9292 9.69792 11.484 10.3594 10.9219 10.9219C10.3594 11.4844 9.69792 11.9298 8.9375 12.2581C8.17708 12.5865 7.36458 12.7504 6.5 12.75ZM6.5 11.5C7.89583 11.5 9.07812 11.0156 10.0469 10.0469C11.0156 9.07812 11.5 7.89583 11.5 6.5C11.5 5.10417 11.0156 3.92187 10.0469 2.95312C9.07812 1.98437 7.89583 1.5 6.5 1.5C5.10417 1.5 3.92187 1.98437 2.95312 2.95312C1.98437 3.92187 1.5 5.10417 1.5 6.5C1.5 7.89583 1.98437 9.07812 2.95312 10.0469C3.92187 11.0156 5.10417 11.5 6.5 11.5Z"
        fill={fill}
      />
    </Svg>
  );
}

export function CubiertosSvg({ width, height, fill }) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 10 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M2.375 12.75V7.03125C1.84375 6.88542 1.39833 6.59375 1.03875 6.15625C0.679167 5.71875 0.499584 5.20833 0.500001 4.625V0.25H1.75V4.625H2.375V0.25H3.625V4.625H4.25V0.25H5.5V4.625C5.5 5.20833 5.32021 5.71875 4.96063 6.15625C4.60104 6.59375 4.15583 6.88542 3.625 7.03125V12.75H2.375ZM8.625 12.75V7.75H6.75V3.375C6.75 2.51042 7.05479 1.77333 7.66438 1.16375C8.27396 0.554167 9.01083 0.249584 9.875 0.25V12.75H8.625Z"
        fill={fill}
      />
    </Svg>
  );
}

export function ClockSvg({ width, height, fill }) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M6.49375 0.25C3.04375 0.25 0.25 3.05 0.25 6.5C0.25 9.95 3.04375 12.75 6.49375 12.75C9.95 12.75 12.75 9.95 12.75 6.5C12.75 3.05 9.95 0.25 6.49375 0.25ZM6.5 11.5C3.7375 11.5 1.5 9.2625 1.5 6.5C1.5 3.7375 3.7375 1.5 6.5 1.5C9.2625 1.5 11.5 3.7375 11.5 6.5C11.5 9.2625 9.2625 11.5 6.5 11.5ZM6.3625 3.375H6.325C6.075 3.375 5.875 3.575 5.875 3.825V6.775C5.875 6.99375 5.9875 7.2 6.18125 7.3125L8.775 8.86875C8.9875 8.99375 9.2625 8.93125 9.3875 8.71875C9.41888 8.66814 9.43976 8.61174 9.44889 8.55289C9.45802 8.49405 9.45521 8.43397 9.44063 8.37623C9.42605 8.31849 9.39999 8.26428 9.36402 8.21683C9.32805 8.16937 9.2829 8.12964 9.23125 8.1L6.8125 6.6625V3.825C6.8125 3.575 6.6125 3.375 6.3625 3.375Z"
        fill={fill}
      />
    </Svg>
  );
}

export function hombreMotoSvg() {
  <Svg
    width="358"
    height="314"
    viewBox="0 0 358 314"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Rect
      x="360"
      y="314"
      width="360"
      height="314"
      transform="rotate(-180 360 314)"
      fill="url(#paint0_linear_203_3181)"
    />
    <Defs>
      <linearGradient
        id="paint0_linear_203_3181"
        x1="540"
        y1="314"
        x2="540"
        y2="628"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stop-color="white" stop-opacity="0.35" />
        <Stop offset="0.481592" stop-color="white" stop-opacity="0.01" />
      </linearGradient>
    </Defs>
  </Svg>;
}

export function ArrowDownSvg({ width, height, fill }) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M12 14.975C11.8667 14.975 11.7374 14.95 11.612 14.9C11.4867 14.85 11.3827 14.7833 11.3 14.7L6.70005 10.1C6.51672 9.91665 6.42505 9.68332 6.42505 9.39999C6.42505 9.11665 6.51672 8.88332 6.70005 8.69999C6.88338 8.51665 7.11672 8.42499 7.40005 8.42499C7.68338 8.42499 7.91672 8.51665 8.10005 8.69999L12 12.6L15.9 8.69999C16.0834 8.51665 16.3167 8.42499 16.6 8.42499C16.8834 8.42499 17.1167 8.51665 17.3 8.69999C17.4834 8.88332 17.575 9.11665 17.575 9.39999C17.575 9.68332 17.4834 9.91665 17.3 10.1L12.7 14.7C12.6 14.8 12.4917 14.871 12.375 14.913C12.2584 14.955 12.1334 14.9757 12 14.975Z"
        fill={fill}
      />
    </Svg>
  );
}

export function ArrowTopSvg({ width, height, fill }) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path d="M1.4 7.4L0 6L6 0L12 6L10.6 7.4L6 2.8L1.4 7.4Z" fill={fill} />
    </Svg>
  );
}
