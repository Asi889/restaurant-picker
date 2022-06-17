import React, { useEffect, useState, createRef } from "react";

type Props = {
  givenClass: string;
};

const HamburgerIcon: React.FC<Props> = (props) => {
  const {givenClass} = props;

  return (
    <svg
    className={givenClass}
      xmlns="http://www.w3.org/2000/svg"
      width="41"
      height="30"
      fill="none"
      viewBox="0 0 41 30"
    >
      <path
        fill="#3C1E57"
        d="M39.966 15.395c-.399-.586-.495-1.27-.703-1.908-.238-.735-.63-1.161-1.464-1.182.332-1.536-.779-1.848-1.864-2.162.045-.358.112-.661.117-.966.029-1.771-.196-3.477-1.687-4.681-2.286-1.845-4.919-2.97-7.779-3.586-.975-.21-1.988-.115-2.955-.299-3.632-.691-7.277-.733-10.946-.436-2.55.207-4.973.75-7.182 2.139-1.845 1.16-2.204 3.55-1.306 5.315.433.852 1.15 1.443 1.956 2.1-1.695.143-3.289.221-3.267 2.386-.633-.01-1.224-.068-1.274.735-.038.595.437 1.004.616 1.58-.744-.031-1.643-.764-2.026.3-.44 1.224.883 1.265 1.462 1.795-.126.447-.511.48-.839.58-.91.28-1.07.817-.466 1.579a5.34 5.34 0 001.883 1.499c-.282 1.085.02 1.98.84 2.695.222.193.151.372.131.617-.098 1.178.046 2.285.89 3.236 1.23 1.388 2.858 1.967 4.576 2.37 1.918.45 3.89.464 5.84.646 3.257.305 6.522.303 9.779.159 2.093-.093 4.196-.293 6.26-.709 1.739-.35 3.212-1.968 3.44-3.724.135-1.05.28-1.996 1.036-2.925.62-.762 1.193-1.841.882-3.161 1.216.407 2.419 1.069 3.22-.373.496-.896.064-1.626-.627-2.235.27-.429.71-.41 1.077-.526.472-.15.642-.472.38-.858zm-1.43-2.26l.54 1.593c-.678.048-1.294.025-1.879.15-.888.19-1.662-.453-2.61-.171-.827.245-1.78.1-2.662-.102-.748-.17-1.527-.234-2.317-.642a6.788 6.788 0 012.876-.118c1.55.255 3.104.16 4.647-.1.486-.081.93-.298 1.406-.61zm-30.84 2.758c.845.213 1.618.639 2.49.783a7.36 7.36 0 002.113.03c.399-.05.809-.143.888-.723 1.759 1.215 3.728 1.268 5.682 1.39-2.418.428-6.145.213-9.535-.55-.873-.198-1.77-.308-2.61-.634a5.391 5.391 0 01-.939-.484c-.359-.23-.61-.547-.432-1.01.124-.323.675-.514 1.167-.415-.043 1.156.089 1.337 1.176 1.613zm.609-.762c.12.168.286.132.445.065.294-.124.474-.309.295-.692 1.453-.111 2.388.812 3.43 1.515-1.154.342-2.258.144-3.325-.207-.558-.184-1.113-.371-1.684-.517-.28-.072-.482-.229-.418-.55.065-.323.297-.382.594-.331.277.048.56.07.849.103-.025.223-.38.343-.186.614zm2.787-.696l1.42-.237-.15.944-1.27-.707zm-.313 3.214c2.84.577 5.727.566 8.609.265.466-.049.926-.139 1.246-.776.158 1.127-.274 1.743-1.343 2.096-1.342.443-2.728.574-4.13.463-2.781-.218-5.544-.563-8.224-1.388a7.664 7.664 0 01-.667-.238c-1.37-.568-1.384-.595-1.29-2.097.035-.026.092-.077.103-.069 1.681 1.286 3.753 1.348 5.696 1.744zm6.573-.984c-1.412-.11-2.757-.393-3.928-1.251-.31-.227-.596-.456-.531-.93 1.888 1.679 9.302 1.815 10.402.326-.162.662-.53 1.123-1.198 1.404-1.543.65-3.135.576-4.745.451zm-1.696-2.224c1.078.33 2.175.353 3.262-.008.193-.063.404-.313.579-.148.866.822 1.888.487 2.874.443-1.884.973-7.685.578-9.03-.657l1.583-.965c-.267.777.148 1.156.732 1.334zm-.347-.961c.062-.304.354-.442.657-.426.327.018.655.074.976.146.73.161 1.457.342 2.185.515l.017.19c-1.096.41-2.217.397-3.345.082-.235-.066-.557-.184-.49-.507zm4.488.322c.895.069 1.66.1 2.472.285-.807.477-1.832.39-2.472-.285zm4.147.981c1.668 1.51 3.701 2.25 5.783 2.958-2.806.118-5.607.292-8.411-.448 1.174-.585 2.422-.997 2.628-2.51zm.542-.331l.073-.29c.492 0 .985.003 1.477-.003.213-.002.335.091.448.274.536.86 1.377 1.232 2.318 1.495 2.004.56 4.022.46 6.048.215.327-.04.65-.114 1.018-.023.11.486.31.966.197 1.523-4.187.017-8.199-.493-11.578-3.191zm2.45-.332c.791-.004 1.432-.15 2.23.232 1.78.852 3.725 1.175 5.72.865.467-.073.464-.092.697.35-2.344.282-4.618.452-6.865-.239-.684-.21-1.335-.463-1.783-1.208zm6.004-.766c1.444-.182 2.905-.086 4.356-.195-1.43.38-2.882.45-4.356.195zm3.272-2.542c.573.172 1.06.418 1.136 1.094.019.161.003.326.003.581-.902.176-1.763.11-2.825.18.47-.432.699-.803.916-1.185.174-.308.144-.859.77-.67zM4.528 6.875c-.533-1.236-.235-3 1.162-3.964C7.722 1.511 10.02.946 12.428.775 13.91.669 15.394.483 16.873.609c2.516-.144 4.961.289 7.4.754.907.173 1.84.015 2.74.276 2.522.732 4.92 1.745 6.911 3.475 1.483 1.288 1.62 3.058 1.282 4.895-.269 1.457-1.075 2.339-2.557 2.668-3.328.737-6.68.929-10.072.675-4.372-.328-8.554-1.486-12.682-2.873-.983-.33-1.925-.784-2.885-1.185-1.145-.479-2.003-1.31-2.481-2.42zm1.626 3.677c1.268-.191 2.476-.05 3.651.79-1.289.268-2.482.33-3.683.195-.27-.03-.61-.083-.613-.46-.002-.4.345-.48.645-.525zm-.721-.332c-.529 1.096-.29 1.546.848 1.655 1.343.13 2.683.108 4.022-.283.291.701.95.705 1.578.849-1.722.663-7.553-.351-8.374-1.453.514-.655 1.227-.596 1.926-.768zm-1.98 1.71c3.544 1.287 7.17 1.402 11.026.716-.559.475-1.016.748-1.552.874-3.003.709-5.95.608-8.82-.618-.581-.247-.735-.483-.653-.973zM.607 18.17c-.222-.273-.095-.484.245-.556.35-.073.69-.168.975-.396.562-.45.507-1.02-.137-1.344-.295-.148-.623-.233-.862-.478-.137-.141-.248-.297-.126-.502.114-.194.285-.231.488-.154.38.143.768.227 1.178.198.241-.018.483-.032.602-.287.114-.246-.083-.386-.207-.554-.168-.228-.343-.454-.477-.701-.117-.218-.318-.495-.05-.701.215-.165.528-.112.728.07.559.507 1.245.751 2.01 1.001-.66 1.335-.595 2.655-.385 4.055-.69.2-.975.782-.999 1.518-.013.405-.233.462-.562.422-1.07-.13-1.785-.811-2.421-1.592zm29.763 10.447c-2.248.536-4.577.688-6.892.747a95.188 95.188 0 01-12.885-.57c-1.843-.204-3.642-.597-5.2-1.695-1.272-.896-1.892-2.156-1.56-3.475 9.796 3.766 19.652 3.55 29.584.675.237 1.993-.874 3.8-3.048 4.319zm3.7-5.756c-1.143 1.046-2.575 1.475-4.027 1.8-2.767.62-5.562 1.104-8.403 1.172-4.24.102-8.44-.196-12.587-1.195-1.76-.425-3.467-.906-5.041-1.813-.657-.379-1.225-.822-1.374-1.612-.097-.508.006-.918.657-.886.54.025.767-.266.818-.764.03-.304.044-.617.218-.886.162-.252.398-.342.671-.218.249.113.293.322.243.593-.368 1.97 1.03 3.276 3.028 2.85.455-.096.724-.4.994-.74.392-.498.661-.457.913.117.123.28.192.586.334.854.282.53.77.73 1.32.57.54-.156.422-.658.396-1.078-.005-.092-.02-.182-.036-.318.922-.108 1.201.132 1.201.963 0 .888.141 1.058 1.034 1.175.373.05.753.087 1.128.075.741-.026 1.291-.354 1.63-1.05.53-1.084 2.85-1.392 3.672-.515.236.252.166.446-.036.671-.354.392-.196.695.259.748.888.104 1.795.203 2.66-.14 1.17-.465 1.425-1.643.576-2.57-.315-.345-.702-.63-.97-1.108.706-.192 1.336-.09 1.926.21.442.225.4.65.315 1.061-.254 1.212-.008 1.593 1.198 1.8.633.11 1.278.167 1.86-.192.25-.154.458-.03.674.026a3.83 3.83 0 001.687.082c1.24-.235 1.66-1.344.906-2.33-.127-.167-.302-.304-.326-.533.791-.46 1.376-.264 1.616.539.35 1.172.4 1.217 1.577 1.437.016.553-.351.876-.711 1.205zm4.166-6.787c-.667.468-.668.795-.033 1.378.274.252.47.528.44.92-.053.704-.676 1.088-1.388.84-.4-.14-.775-.35-1.22-.333-.695.027-.868.244-.72.931.188.871-.118 1.28-.86 1.176-.407-.057-.518-.334-.62-.672-.386-1.286-.902-1.591-2.192-1.33-.66.134-.848.548-.52 1.144.022.041.048.08.073.12.237.38.749.684.418 1.237-.341.569-.93.594-1.505.59-.302-.003-.613-.017-.9-.188-.126-.473.058-1.303-.768-1.125-.669.144-.157.734-.114 1.125-.524.327-1.636.317-2.08.008-.302-.21-.23-.49-.172-.765.285-1.368-.197-2.036-1.578-2.123a6.924 6.924 0 00-1.484.044c-.417.065-.66.307-.268.733.383.416.758.842 1.134 1.265.557.625.425 1.288-.33 1.664-.462.23-1.176.282-2.014.144.022-1.222-.531-1.808-1.801-1.868-.54-.026-1.086-.05-1.622.089-.65.17-1.15.489-1.453 1.129-.35.736-1.915 1.073-2.562.596-.186-.138-.14-.332-.156-.516-.105-1.142-.827-1.672-1.948-1.452-.332.064-.434.228-.36.547.065.27.147.55-.026.824-.416.048-.598-.22-.732-.536-.1-.239-.155-.499-.268-.731-.397-.823-1.066-.91-1.688-.233-.71.772-1.348.9-2.318.462-.83-.374-1.092-.926-.889-1.82.062-.273.076-.557.123-.921a23.7 23.7 0 003.763.976c2.7.46 5.4.975 8.162.632.398-.049.791-.142 1.182-.234 1.046-.246 1.989-.639 2.338-1.741 2.961.377 5.898.52 8.8.102 2.021-.29 3.983.053 5.97.067.278.002.567.104.843-.17-.352-.84-.2-1.798-.556-2.734.943.128 1.881-.119 2.97.206-.469.233-.796.35-1.07.543z"
      ></path>
    </svg>
  );
};

export default HamburgerIcon;
