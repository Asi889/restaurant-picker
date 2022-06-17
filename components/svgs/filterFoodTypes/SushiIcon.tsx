import React, { useEffect, useState, createRef } from "react";

type Props = {
  givenClass: string;
};

const SushiIcon: React.FC<Props> = (props) => {
  const {givenClass} = props;

  return (
    <svg
    className={givenClass}
      xmlns="http://www.w3.org/2000/svg"
      width="53"
      height="46"
      fill="none"
      viewBox="0 0 53 46"
    >
      <path
        fill="#3C1E57"
        d="M23.483 2.54c.023-.002.047-.006.07-.005.218.006.502-.122.598.169.088.27-.025.507-.28.67-.458.292-.984.254-1.491.202-.196-.02-.355-.222-.384-.418-.029-.2.175-.274.335-.369.354-.21.755-.216 1.152-.248zm-.673.526c.27.175.51.166.755.083.05-.017.107-.097.104-.144-.004-.048-.07-.117-.124-.13-.26-.068-.484.01-.735.19z"
      ></path>
      <path
        fill="#3C1E57"
        d="M33.1 2.121c.358-.204.587-.315.79-.455.696-.48 1.507-.686 2.341-.836.746-.133 1.463.017 2.12.302.677.293 1.312.67 1.673 1.315.04.07.113.126.198.22a3.62 3.62 0 011.773-.879c1.121-.22 2.028.022 2.792.76.207.2.39.426.559.654.653.882.45 1.734-.143 2.568.102.234.348.343.54.49.51.392.98.791 1.04 1.454.025.282.24.31.515.26.732-.133 1.4-.015 1.971.445.07.056.176.092.214.161.472.856.967 1.716.798 2.721-.094.566.012 1 .468 1.447.614.603.824 1.425 1.03 2.215.274 1.056.512 2.12.785 3.176.072.281-.003.553.018.829.107 1.42.1 2.845.288 4.265.162 1.224.17 2.463.04 3.708-.16 1.558-.588 3.072-.787 4.62-.072.563-.405.96-.914 1.303a36.459 36.459 0 01-4.354 2.504c-1.192.582-2.246 1.334-3.297 2.088-.762.545-1.64.912-2.423 1.419-.44.284-.918.518-1.377.777-.927.524-1.915.77-3.001.548-.272-.055-.471.05-.624.217-.506.55-1.18.566-1.868.493-.767-.082-1.55-.05-2.297-.292a1.074 1.074 0 00-.822.079c-.414.22-.88.283-1.323.421-.583.183-1.113.148-1.596-.201-.334-.242-.578-.287-.969.01-.632.48-2.18.214-2.709-.384-.697-.789-1.02-.787-2.018-.272-1.342.694-2.502.778-3.491.065a1.853 1.853 0 01-.607-.692c-.112-.228-.282-.257-.506-.113a3.363 3.363 0 01-.424.23c-.578.261-1.143.274-1.635-.146-.269-.23-.525-.298-.883-.173-.51.178-.985.083-1.344-.296-.285-.3-.6-.32-1-.233-.5.109-.93 0-1.162-.477-.087-.18-.207-.344-.454-.356-.958-.047-1.652-.547-2.316-1.1a2.954 2.954 0 00-.579-.356c-.266-.134-.53-.179-.808-.068-.68.273-1.294.021-1.898-.201-.372-.138-.502-.497-.64-.81-.103-.235-.191-.423-.526-.414-.268.006-.415-.188-.528-.375a2.237 2.237 0 01-.238-.531c-.135-.47-.377-.85-.853-1.119-.458-.257-.665-.638-.453-1.149.158-.382.147-.742-.192-1.07-.223-.216-.221-.51-.142-.79.04-.145.086-.297.172-.42.28-.405.267-.778-.017-1.185-.462-.663-.183-1.265.274-1.829.167-.205.355-.396.533-.593.072-.08.181-.152.128-.275-.058-.13-.192-.089-.303-.092-.672-.018-.97-.302-.947-.903.02-.536.309-.76.901-.696.534.058.614.01.47-.452-.147-.475-.093-.924.025-1.387.114-.45.104-.451-.395-.581-.617-.16-.883-.967-.467-1.412.214-.23.469-.224.768-.167.52.097.528.08.706-.372.063-.16.115-.324.179-.485.186-.466.187-.466-.336-.677-.598-.24-.856-.818-.566-1.395.253-.507.801-.815 1.447-.575a1.7 1.7 0 01.363.187c.228.156.428.007.434-.132.018-.438.39-.61.662-.865.113-.108.21-.232.3-.357.125-.174.106-.317-.126-.409-.23-.09-.535-.126-.561-.418-.03-.341.15-.63.426-.845.41-.32.883-.509 1.423-.327.27.091.434.008.627-.144.267-.211.515-.437.752-.676.315-.317.621-.642.998-.906.364-.255.773-.46.816-.976.02-.236.288-.424.617-.441.292-.015.523-.154.75-.322a76.51 76.51 0 014.198-2.915c.184-.118.284-.272.387-.443.303-.504.548-1.036.98-1.478.233-.237.479-.41.804-.483.916-.207 1.812-.24 2.628.294.113.073.244.128.371.181.213.09.347-.042.498-.15.169-.12.151-.239.065-.39-.15-.264-.29-.535-.43-.804-.501-.951-.153-2.019.805-2.64.603-.392 1.227-.684 1.959-.826.7-.136 1.327-.054 1.976.195.497.189.992.353 1.393.696.202.173.39.071.55-.08.328-.312.69-.582 1.105-.792 1.287-.653 2.798-.328 3.593.773.197.27.308.567.313 1.013zm-10.447 8.034a3.322 3.322 0 01-1.66-.507c-.332-.208-.603.018-.826.16-.232.146.111.267.139.418.007.041.028.081.04.122.118.377.045.596-.26.789-.372.234-.938.291-1.197.127-.195-.124-.251-.3-.245-.502.007-.215.05-.421.147-.622.082-.17-.011-.297-.196-.345-.193-.05-.388-.179-.596-.019-.176.136-.104.25.015.378.16.174.145.35-.036.512-.142.127-.307.207-.509.143-.243-.077-.171-.27-.174-.434-.002-.145.06-.337-.115-.407-.28-.112-.565.008-.81.121-.21.097-.048.254.016.384.082.165.118.34-.074.458-.201.125-.404.071-.583-.064-.053-.04-.144-.078-.15-.125-.063-.491-.405-.348-.702-.246-.593.203-1.198.374-1.76.653-.803.398-1.57.858-2.43 1.16-.164.058-.4.112-.444.29-.077.31-.272.353-.57.317-.322-.04-.546.05-.56.404-.005.135-.1.383-.27.299-.672-.33-.956.18-1.126.516a3.11 3.11 0 01-.819 1.01c-.33.278-.486.641-.194 1.028.136.181.138.349-.074.418-.305.1-.222-.186-.3-.313-.015-.024-.073-.026-.122-.042-.04.074-.07.157-.124.221-.145.174-.231.266-.004.51.28.304-.086.85-.529.8-.503-.057-.62.142-.66.5.116.093.24.057.353.072.115.015.235.026.343.062.336.111.532.392.499.694-.03.267-.453.625-.785.652-.398.032-.524-.212-.599-.504-.024-.094.005-.218-.191-.263-.175.13-.23.335-.297.534-.29.859-.514 1.73-.652 2.62-.072.467-.08.466.44.442.445-.02.644.183.578.585-.06.368-.345.524-.692.651a.42.42 0 00-.143.713c.064.058.17.075.24.129.41.309.358.67-.15.788-.313.073-.397.179-.309.438.047.137-.177.256-.053.405.725-.144 1.242.085 1.342.584.08.397-.52.985-1.048 1.04-.233.025-.41-.057-.58-.18-.42-.31-.269-.725-.153-1.198-.823.786-.973 1.226-.546 1.877.303.46.326.836.02 1.3-.245.371-.303.786.043 1.187.258.3.31.7.155 1.04-.244.539.027.89.456 1.132.4.225.599.527.703.909.124.458.362.817.877.996.157.054.326.107.408.309.341.837.917 1.196 1.812.935.966-.28 1.638-.037 2.23.614.045.049.11.082.154.13.47.524 1.117.683 1.815.69.368.003.544.101.635.44.107.395.364.506.793.432.111-.02.216-.076.322-.12.514-.209.534-.22.8.222.23.379.562.491.999.417a2.38 2.38 0 00.539-.143c.308-.132.491-.085.696.19.381.512.796.586 1.395.305.269-.125.51-.302.762-.458.13-.08.231-.221.45-.156.055.124.129.258.175.4.28.858.822 1.235 1.785 1.207a3.797 3.797 0 001.975-.586c.814-.515 1.719-.533 2.153.295.03.056.079.106.125.153.602.604 1.966.676 2.604.103.274-.246.474-.244.693-.004.543.594 1.227.528 1.933.345a3.35 3.35 0 00.72-.261c.563-.297 1.113-.359 1.745-.152.664.217 1.387.189 2.088.244.572.045 1.068-.091 1.47-.47.2-.187.424-.341.681-.45.136-.058.294-.067.283.136-.012.238.156.225.325.206.179-.02.346-.095.283-.282-.156-.47.136-.716.505-.951.48-.306.811-.736.982-1.228.241-.69.436-1.398.577-2.111.101-.514.259-.995.53-1.451.336-.57.518-1.195.646-1.82.249-1.217.535-2.425.864-3.625.409-1.494.784-2.986.615-4.543-.099-.914-.16-1.827-.824-2.595-.2-.23-.285-.533-.383-.82-.146-.428-.333-.825-.768-1.109-.406-.265-.575-.626-.38-1.12.184-.466-.075-.917-.237-1.357-.054-.145-.214-.158-.354-.156-.717.008-1.266-.338-1.868-.632-.79-.386-1.2-.96-1.486-1.685a2.752 2.752 0 00-.88-1.192c-.328-.256-.753-.355-1.03-.6-.302-.27-.646-.415-1.001-.562-.45-.187-.94-.464-1.258.188-.026.05-.107.081-.167.115-.238.137-.5.187-.716.005-.24-.202-.382-.454-.146-.824.08.164.13.259.174.357.084.187.219.27.442.191.157-.055.315-.122.333-.294.024-.222-.176-.31-.35-.338-.675-.105-1.308-.394-2.042-.26-.757.138-1.497-.096-2.203-.315-.547-.17-1.075-.424-1.29-.992-.058-.157-.195-.289-.29-.435-.071-.113-.164-.142-.288-.077a8.592 8.592 0 01-1.878.705c.475.467.538.699.31.941-.316.334-1 .465-1.279.245-.305-.245-.257-.566.203-1.163zm29.465 9.97c-.033-1.04-.028-2.08-.33-3.105-.29-.986-.46-2.002-.806-2.977a3.455 3.455 0 00-.83-1.32c-.184-.184-.385-.243-.593-.016-.535.583-1.25.962-1.929 1.377-.183.113-.224.233-.284.399-.737 2.051-2.56 2.405-4.38 1.403-.34-.188-.464-.128-.695.047-.529.4-1.083.76-1.805.81-.143.01-.302.038-.309.202-.013.303.061.6.226.857.138.216.386.037.582.062.138.018.288-.01.42.023.449.111.81.338.952.758.128.38.001.711-.314.992-.18.16-.554.188-.562.43-.009.238.15.483.257.718.117.256.234.516.392.75.483.714.596 1.512.684 2.321.15 1.399-.135 2.759-.441 4.118-.268 1.191-.643 2.36-.848 3.566-.133.775-.267 1.571-.693 2.274-.487.803-.695 1.667-.837 2.56-.17 1.062-.577 2.023-1.597 2.677a.85.85 0 00-.238.235.356.356 0 00.004.425c.115.15.296.093.448.029.17-.072.34-.15.5-.239.64-.356 1.29-.7 1.914-1.081.799-.488 1.64-.91 2.394-1.472a22.15 22.15 0 013.488-2.153c1.408-.691 2.762-1.46 4.026-2.363.404-.288.66-.63.717-1.06.225-1.695.709-3.355.845-5.063.047-.6.078-1.19.034-1.788-.11-1.467-.471-2.914-.393-4.395zM42.247 5.443c-.247.006-.426-.027-.573.02-.47.157-1.067.19-1.242.724-.199.607-.589 1.054-1.159 1.397-.618.372-.728.742-.455 1.438.16.409.24.807.216 1.244-.028.493.212.861.685 1.17.82.537 1.739.74 2.704.746.821.004 1.623-.24 2.339-.594.596-.294 1.05-.775 1.358-1.349.53-.986.67-2.066.01-2.94-.909-1.203-2.192-2.037-3.883-1.856zm-12.673-.984c-1.71.048-2.796.903-3.532 2.237-.244.443-.22.906-.262 1.37-.121 1.366.347 2.065 1.733 2.544.62.214 1.278.344 1.925.217.617-.121 1.234-.26 1.845-.41 1.267-.31 2.459-1.576 2.465-2.668.006-1.12-.408-2.15-1.486-2.718a4.99 4.99 0 00-2.688-.572zm10.671-.083c-.034-.168-.062-.403-.132-.626-.383-1.231-1.187-2.048-2.608-2.383-.907-.215-1.716-.006-2.535.234-.893.261-1.584.814-2.202 1.44a1.385 1.385 0 00-.246.384c-.306.64-.287.702.335 1.101.498.32.968.65 1.295 1.143.324.49.403 1.035.548 1.567.05.183.084.35.35.274.956-.271 1.841-.06 2.699.318.223.098.415.059.59-.063.485-.339.964-.686 1.34-1.129.134-.157.319-.341.064-.558-.107-.09-.055-.214.038-.28.506-.359.4-.88.464-1.422zm2.399 9.407c-.011-.093-.031-.305-.064-.516-.044-.28-.21-.442-.527-.513-1.097-.245-2.127-.65-3.108-1.15-.235-.12-.431-.149-.654-.035-.47.238-.937.48-1.402.725a.94.94 0 00-.336.322c-.56.827-.171 2.278.538 2.808 1.027.766 2.146 1.113 3.495.853 1.27-.245 2.149-1.202 2.058-2.494zM22.895 9.758c.715.023 1.341-.292 1.983-.545.334-.13.475-.397.459-.728a5.15 5.15 0 01.205-1.763c.203-.673-.243-1.266-.989-1.436-.227-.05-.455-.094-.68-.146-.618-.143-1.197-.053-1.778.179-.825.33-1.2.974-1.548 1.664-.407.803.087 2.226.944 2.63.06.028.134.037.202.045.394.05.781.154 1.202.1zm4.205-7.12c-.002-.085-.012-.17-.005-.255.083-1.034-.848-1.564-1.702-1.648-.934-.092-1.846.047-2.673.58-1.195.772-1.473 2.007-.605 3.052.154.186.299.282.586.152.51-.23 1.044-.181 1.568-.004.35.117.705.222 1.058.332.278.087.636.144.8-.05.29-.34.76-.542.879-1.023.094-.38.145-.752.094-1.136zm8.554 9.401a3.411 3.411 0 002.083-.787c.844-.68.78-2.074-.122-2.691a3.56 3.56 0 00-2.096-.637c-.593.01-1.135.231-1.424.701a5.768 5.768 0 01-1.22 1.394c-.184.156-.207.313-.173.514a.97.97 0 00.632.787c.32.13.634.286.97.368.488.12.924.439 1.35.351zm11.538-2.868c.103.876-.388 1.63-1.066 2.26-.337.313-.494.723-.845 1.01-.071.059-.1.144-.024.224.305.324.608.64 1.1.749.753.164 1.387.008 2.054-.37 1.887-1.068 1.548-2.945.529-4.228-.154-.192-.394-.31-.627-.397a1.27 1.27 0 00-1.02.042c-.307.155-.126.417-.101.71zM19.407 4.878c-.467.07-1.05.062-1.448.425-.762.696-1.314 1.46-1.07 2.554.154.695.482 1.124 1.183 1.433.569.251 1.029.13 1.523-.08.146-.062.116-.12.071-.273-.179-.617-.409-1.232-.173-1.9.213-.601.476-1.154 1.045-1.548.24-.167.1-.284-.06-.397-.3-.214-.662-.168-1.072-.214zM42.34 2.195c-.349-.012-.942.14-1.449.534-.175.136-.3.275-.128.484.248.302.294.667.326 1.022.021.24.153.332.359.41.199.074.42.128.617.086.914-.195 1.757-.006 2.587.322.36.143.376.097.497-.26.234-.688-.148-1.186-.55-1.692-.482-.609-1.114-.938-2.259-.906zM28.924 1.131c.415.04.73-.131 1.068-.198.23-.045.453-.114.68-.172.398-.101.433.223.599.408.184.206.09.35-.075.496-.717.641-2.08.844-2.79.37-.373-.249-.577-.153-.627.261-.058.485.089.933.38 1.336.088.124.23.217.419.175.717-.16 1.431-.13 2.161-.067.289.025.771.065.909-.303.12-.325.345-.544.575-.786.194-.205.465-.422.391-.721-.142-.575-.401-1.144-1.063-1.333-.67-.191-1.387-.234-2.064.06-.21.09-.42.19-.563.474zm18 13.053c-.95.142-1.637-.282-2.227-.803-.392-.345-.806-.388-1.283-.359-.256.015-.346.117-.322.376.052.52.204 1.04-.097 1.567-.15.264.011.55.35.674.282.102.587.174.852.29.996.433 2.72-.66 2.726-1.745zm-34.83-2.992c1.802-.822 3.606-1.43 5.512-1.817-.763-.347-1.054-.913-1.13-1.606-.036-.335-.184-.408-.494-.226-.205.12-.425.253-.472.534.103.002.175.019.232 0 .109-.035.224-.115.324-.034.123.1.082.249.013.356-.131.204-.193.426-.285.64-.183.424-.64.608-1.08.76-.35.12-.563-.11-.774-.317-.231-.227-.487-.223-.746-.036-.332.239-.647.497-.992.717-.233.149-.294.3-.199.538.054.134.055.286.092.49zm16.767-9.5c.04.168.167.232.298.266.642.166 1.189-.076 1.72-.36.13-.071.091-.165.025-.27-.142-.221-.358-.25-.603-.213-.537.084-1.025.266-1.44.577zM41.1 18.262c-.456.007-.533.098-.392.394.11.232.259.449.386.674.07.124.176.218.33.179.233-.06.417-.192.498-.41a.453.453 0 00-.12-.529c-.222-.21-.483-.323-.702-.308zM3.887 17.09c-.26.033-.345.218-.38.403-.044.22-.208.506.034.656.29.18.516-.088.723-.248.186-.143.32-.341.234-.561-.097-.248-.418-.13-.611-.25zm.117 9.469c-.244.025-.5.075-.55.362-.036.197-.167.447.088.574.23.114.432-.067.622-.184a1.18 1.18 0 00.16-.12c.12-.106.231-.223.146-.385-.087-.164-.244-.244-.466-.247zm15.476-15.53c.288-.025.663-.31.655-.499-.006-.136-.474-.422-.652-.397-.205.028-.41.365-.384.62.022.215.163.287.381.275zM2.563 24.451c-.236.019-.464.323-.444.58.015.192.096.333.341.307.27-.028.489-.302.445-.562-.03-.178-.127-.315-.342-.325zm3.873-9.729c.3-.015.586-.28.64-.587.016-.093-.004-.168-.098-.211-.205-.096-.603.05-.786.288-.027.035-.055.07-.074.107-.12.24.023.418.318.403zm8.936-6c-.02-.141-.111-.224-.276-.231-.283-.013-.438.116-.48.365-.029.174.046.295.242.324.194.028.5-.25.514-.458zm-5.477 3.375c.433-.01.735-.144 1.03-.292.072-.037.16-.096.107-.201a.203.203 0 00-.223-.113 1.325 1.325 0 00-.914.606zm-6.583 8.6c-.047-.167-.219-.229-.372-.204-.328.053-.31.332-.351.553-.024.128.083.196.212.195.229-.002.54-.334.51-.543zm2.06-2.019c-.266.047-.244.26-.274.434-.025.141.03.248.212.25.253.001.378-.139.41-.345.035-.218-.162-.269-.349-.339zm18.052-7.944c-.035-.151-.17-.18-.312-.184-.251-.009-.396.1-.41.335-.009.132.087.193.209.21.197.028.511-.197.513-.36zM3.88 22.975c-.161.02-.246.106-.237.249.009.13.116.166.238.142.141-.027.259-.098.248-.242-.008-.13-.136-.141-.249-.148zm7.527-11.816c.085-.05.194-.123.184-.27-.005-.073-.07-.108-.146-.095-.156.028-.244.114-.213.266.013.059.035.125.175.099zM0 36.452c.013-.632.18-.817.864-.957.227-.047.45-.111.678-.159.362-.074.813.075.966.35a.721.721 0 01-.069.842c-.37.473-.897.748-1.505.863-.515.098-.944-.357-.934-.939zm.492-.093c-.04.57.207.738.692.576.29-.097.549-.245.745-.467.09-.1.161-.21.051-.343-.167-.203-.759-.386-1.026-.3-.333.105-.475.332-.462.534zM36.376 42.557c-.59.014-.99-.228-1.03-.599-.042-.386.396-.898.842-.97.28-.046.55 0 .824.079.351.101.595.306.616.617.018.289-.219.478-.517.616-.252.117-.478.266-.735.257zm.745-.852c-.565-.418-1.036-.394-1.253.051-.095.194-.048.334.193.37.449.068.807-.066 1.06-.42zM32.942 45.406c-.71-.004-1.272-.776-.993-1.367.056-.119.128-.224.268-.28.295-.117 1.233.048 1.423.277.211.252.43.516.287.867-.118.291-.552.505-.985.503zm-.155-1.324c-.299.021-.398.186-.381.436.02.304.27.497.62.459.232-.026.49-.06.496-.35.006-.306-.362-.571-.735-.545zM30.724 43.592c-.44.017-.87-.349-.891-.747a.354.354 0 01.064-.24c.15-.205.81-.434 1.078-.377.356.076.706.42.66.651-.057.29-.58.7-.91.713zm0-.409c.11-.002.254-.14.382-.285.063-.07.01-.156-.073-.207-.185-.112-.346-.03-.507.055-.02.01-.036.026-.056.036-.1.055-.207.114-.138.238.052.094.141.163.392.163zM40.437 40.212c.4.017.686.267.68.592-.009.37-.471.65-1.053.639-.428-.009-.658-.19-.642-.507.016-.343.577-.743 1.015-.724zm-.479.762c.28.078.494.056.635-.167.013-.019-.026-.09-.058-.103-.261-.108-.447-.037-.577.27zM2.824 38.708c-.366.004-.691-.263-.7-.587-.004-.125-.003-.272.177-.304.18-.033.252.073.258.22.008.169.074.31.281.283.178-.023.264-.169.297-.324.045-.212-.11-.24-.289-.264-.122-.015-.225-.09-.203-.214.031-.166.187-.175.33-.157.378.047.648.334.63.657-.022.376-.374.686-.781.69zM4.681 36.46c.326-.008.6.174.616.41.016.227-.243.47-.542.506a.768.768 0 01-.07.005c-.39.013-1.004-.296-.98-.492.02-.156.621-.42.976-.43z"
      ></path>
      <path
        fill="#3C1E57"
        d="M8.362 37.51c.031.293-.338.62-.737.654-.335.029-.58-.162-.61-.474-.036-.38.179-.67.52-.702.425-.04.792.19.827.521zm-.716.263c.142-.03.268-.097.277-.23.008-.11-.1-.177-.227-.175-.187 0-.198.127-.21.253-.011.11.07.133.16.152zM33.162 41.439c.316-.043.479.114.568.359.091.25-.139.33-.3.438a.814.814 0 01-.46.127c-.355.002-.563-.139-.603-.405-.049-.317.201-.393.452-.462.111-.031.229-.039.343-.057zM35.663 44.308c-.01-.37.151-.607.424-.621.409-.021.81.193.83.443.02.29-.424.599-.867.606-.33.006-.364-.205-.387-.428zM27.79 42.253c.324-.013.496.127.492.4-.005.312-.28.589-.603.606-.256.013-.632-.328-.644-.585-.01-.222.317-.405.755-.421zM34.984 43.231c-.006.241-.368.51-.69.511-.253 0-.384-.112-.38-.346.005-.242.352-.464.71-.457.216.004.352.081.36.292zM39.144 42.907c.009.24-.14.348-.383.37-.29.026-.556-.138-.578-.35-.02-.213.176-.409.426-.423.273-.016.519.169.535.404zM1.457 30.643c.02.254-.163.47-.394.468-.308-.004-.366-.223-.4-.438-.04-.258.153-.334.384-.347.257-.014.379.124.41.317zM3.247 35.284c.24.008.494.026.525.303.026.221-.14.372-.371.387-.262.017-.45-.126-.48-.368-.025-.195.082-.328.326-.322zM5.98 37.953c.022.254-.074.38-.3.386-.241.007-.417-.132-.42-.326-.002-.21.274-.187.429-.244.22-.082.246.104.29.184zM37.253 23.76c.042 1.17-.147 2.201-.43 3.253-.36 1.338-.52 2.72-.258 4.125.25 1.338.205 2.683-.575 3.928-.27.428-.634.691-1.165.727-1.385.093-2.763.081-4.133-.168-1.562-.283-3.134-.523-4.698-.798-.758-.134-1.502-.336-2.263-.449-1.598-.237-3.207-.412-4.804-.656-1.48-.226-2.948-.511-4.423-.767-1.591-.275-3.17-.604-4.757-.892-1.059-.192-1.762-.726-2.273-1.539-.232-.37-.386-.775-.645-1.135-.201-.28-.083-.625-.146-.94-.288-1.427-.079-2.795.648-4.105a59.19 59.19 0 001.458-2.838c.208-.428.38-.877.496-1.331.165-.649.543-1.192.986-1.687 1.51-1.686 3.386-2.983 5.534-3.898 1.181-.503 2.474-.833 3.819-.796.588.017 1.16-.118 1.756-.091 1.637.072 3.26.15 4.87.499 1.508.325 3.014.637 4.451 1.162 1.599.583 3.057 1.354 4.203 2.574.869.925 1.382 1.997 1.866 3.105.397.912.584 1.838.483 2.716zM30.2 32.115c-.697.586-1.21 1.301-1.702 2.026-.23.338-.16.429.286.485.254.032.52.008.766.06.911.188.911.197 1.04-.626.14-.89.384-1.76.631-2.63.044-.153.086-.325.296-.28.24.05.24.229.153.409-.029.059-.06.117-.082.178-.338.913-.635 1.834-.699 2.804-.013.206-.034.378.267.427.328.053.33-.145.366-.337.076-.422.15-.843.237-1.263.027-.134.115-.248.291-.206.148.036.114.161.111.265-.012.386-.107.757-.22 1.129-.121.404-.054.485.395.533.78.083 1.546-.043 2.302-.19.47-.092.62-.322.644-.794.023-.427.03-.858.365-1.207a.448.448 0 00.115-.36c-.042-.68.016-1.362-.075-2.044-.081-.604-.154-1.212-.013-1.833.193-.854.433-1.708.363-2.595-.019-.236.065-.464.175-.68.16-.318.236-.646.168-.998-.046-.24.142-.658-.118-.69-.382-.049-.445.405-.488.658-.097.57-.372 1.052-.68 1.534-.235.368-.454.745-.679 1.118-.596.99-1.193 1.981-2.057 2.812-.546.525-1.098 1.048-1.625 1.59-.211.216-.476.413-.55.72l.017-.015zm2.567-14.623c-.186.058-.191.176-.242.268-.337.61-.636 1.246-1.117 1.775-1.413 1.556-3.09 2.877-4.785 4.16-1.553 1.173-3.21 2.236-4.797 3.375-1.43 1.025-2.677 2.212-3.846 3.471-.428.461-.663 1.032-.937 1.574-.173.343-.088.457.321.519.416.063.843.073 1.256.15 2.777.522 5.59.882 8.34 1.523.714.167.758.136 1.104-.448.055-.094.11-.19.178-.275.902-1.121 1.855-2.204 2.912-3.21 1.026-.977 1.925-2.04 2.659-3.223a25.298 25.298 0 001.858-3.662c.392-.945.364-1.874-.15-2.778-.172-.302-.33-.612-.506-.909-.183-.31-.243-.707-.61-.91-.409-.228-.663-.591-.992-.889-.212-.192-.396-.411-.646-.512zm-5.485-2.267c-.496-.28-.978-.162-1.386-.292-.906-.287-1.579.083-2.256.549-1.883 1.294-3.163 3.038-4.347 4.841a42.965 42.965 0 01-1.712 2.428c-.976 1.286-2.25 2.347-3.314 3.567-.152.174-.37.34-.596.186-.181-.124.07-.298.096-.456.006-.039.045-.074.069-.111.89-1.341 1.6-2.765 2.235-4.212.943-2.149 2.278-4.07 3.898-5.837.33-.36.73-.666 1.095-1 .079-.073.197-.146.151-.268-.063-.165-.23-.105-.36-.104-.167.001-.344.02-.459.138-.526.536-1.301.758-1.872 1.237-.174.146-.41.216-.592.339-.873.59-1.943.844-2.824 1.43-.737.49-1.514.933-2.218 1.467-.135.103-.32.23-.498.058-.15-.144-.023-.278.067-.402.366-.498.737-.993 1.099-1.493.104-.144.264-.274.28-.526-.923.333-1.596.868-2.272 1.396-.35.275-.556.629-.597 1.055-.089.934-.3 1.857-.29 2.803a5.205 5.205 0 01-.309 1.763c-.191.553-.464 1.073-.66 1.622-.532 1.503-.59 3.066-.79 4.61-.091.716-.033.76.75.965.064.017.137.006.207.009.156-.242.031-.468-.033-.685a4.517 4.517 0 01-.13-2.025c.114-.72.31-1.423.478-2.132.175-.744.505-1.43.99-2.038.51-.64.99-1.3 1.458-1.959 1.072-1.508 2.616-2.562 4.09-3.686.165-.126.461-.418.658-.207.229.243-.133.449-.318.606-1.292 1.09-2.23 2.41-3.078 3.798-1.126 1.848-1.598 3.816-1.501 5.912.043.936.04 1.874.034 2.811-.002.275.124.39.396.416.28.027.282-.158.308-.332.155-1.036.583-1.975 1.27-2.81.198-.241.364-.494.523-.752.73-1.183 1.655-2.225 2.734-3.158.256-.221.496-.45.693-.724.217-.301.483-.575.735-.855.056-.061.129-.133.24-.087.146.061.112.171.076.273-.072.207-.203.383-.344.556-1.074 1.325-2.134 2.657-2.735 4.234-.268.705-.588 1.398-.604 2.157-.01.49-.004.982.02 1.472.01.215-.15.516.183.617.442.134.503-.265.6-.485.485-1.096 1.335-1.96 2.172-2.823 1.153-1.19 2.48-2.224 3.867-3.175 1.784-1.222 3.546-2.462 5.236-3.791 1.156-.91 2.327-1.801 3.232-2.938.332-.418.635-.85.878-1.315.294-.56.199-.864-.357-1.176-.199-.113-.413-.209-.596-.34-.389-.28-.776-.245-1.177-.033-.782.415-1.411.99-2.007 1.597-1.389 1.414-2.31 3.115-3.457 4.678a12.587 12.587 0 01-1.775 1.985c-.756.674-1.608 1.25-2.336 1.952a5.362 5.362 0 01-.904.71 8.231 8.231 0 00-1.628 1.325 6.415 6.415 0 01-.706.626c-.128.099-.288.19-.425.025-.116-.137.034-.224.12-.322.953-1.086 1.909-2.171 2.854-3.263 1.592-1.84 2.97-3.797 3.967-5.963a9.969 9.969 0 012.248-3.153c.453-.427.917-.841 1.456-1.285zm-7.79 11.228l.077.094c.433-.35.863-.703 1.301-1.048 1.106-.869 2.186-1.76 2.99-2.885a306.67 306.67 0 002.658-3.77c.776-1.122 1.798-2.024 2.961-2.805.113-.075.252-.117.305-.343-.616-.244-1.31-.38-1.927-.18-.798.258-1.46.807-1.951 1.435a22.814 22.814 0 00-2.596 4.216 13.99 13.99 0 01-1.737 2.778c-.684.842-1.387 1.672-2.082 2.508zm-4.631-5.943c-.287.036-.415.192-.577.304-.48.331-.756.815-1.114 1.234-1.487 1.741-2.667 3.616-3.048 5.838-.172 1.006-.225 1.99.207 2.956.073.163.122.33.307.405.407.165.889.44 1.259.262.369-.178.242-.685.225-1.063-.001-.021-.006-.042-.01-.064-.18-.998-.073-2 .014-2.997.046-.528.035-1.06.154-1.59.176-.78.525-1.498.816-2.238.346-.873.84-1.664 1.418-2.423.129-.17.292-.336.349-.624zm8.954-5.838c-.351.026-.636-.082-.934-.114-.324-.034-.654-.062-.936.158-.948.74-1.873 1.497-2.552 2.466-.43.613-.864 1.223-1.297 1.834-.24.34-.538.636-.745 1.006-.747 1.338-1.188 2.79-1.938 4.127-.043.077-.08.2.082.283 1.173-.884 1.96-2.057 2.725-3.218.567-.86 1.2-1.682 1.743-2.555.23-.37.505-.725.816-1.042.858-.875 1.694-1.774 2.715-2.505.127-.09.275-.173.32-.44zM8.328 29.762c.034-.028.087-.051.094-.082.022-.104.03-.21.041-.316.102-.997.154-2.01.553-2.951.407-.96.666-1.957 1.018-2.928.358-.99.315-2.025.416-3.043.016-.15.02-.343-.237-.432-.24.302-.382.641-.402.999-.016.27-.116.5-.239.728-.297.556-.607 1.107-.912 1.66-.493.895-1.02 1.775-.943 2.832.023.335-.172.67-.123 1.015.113.783.266 1.56.51 2.318.031.096.075.204.224.2zm8.301-3.286c-.112-.007-.159.067-.222.128-.468.453-.846.96-1.201 1.491-.7 1.043-1.305 2.115-1.52 3.337-.085.478-.058.52.485.634.092.019.18.046.272.064.81.158.917.102.91-.63-.016-1.653.398-3.208 1.216-4.682.058-.105.19-.21.06-.342zm-2.91-8.522c.129-.003.19.013.218-.008.732-.543 1.571-.91 2.415-1.286 1.074-.477 2.023-1.151 3.026-1.74.148-.087.349-.148.339-.364-2.712-.167-4.614 1.125-5.998 3.398zM25.28 11.005c.12.067.175.106.236.13.249.097.47.222.468.5 0 .263-.239.335-.454.428-.288.125-.541.127-.76-.108-.076-.081-.164-.153-.23-.24-.172-.223-.212-.42.13-.56.207-.084.323-.17.14-.427-.175-.248.102-.603.429-.653.256-.039.482.224.376.476-.061.15-.198.274-.334.454zm.312.583c-.053-.173-.202-.214-.372-.207-.16.006-.36.012-.358.211.001.189.187.234.352.217.151-.014.334-.028.378-.22zM13.796 12.69c-.463.016-.757-.263-.76-.72 0-.352.264-.67.569-.684.545-.025 1.05.322 1.048.721-.002.367-.377.666-.857.682zm-.088-1.059c-.245.017-.249.251-.26.456-.01.194.103.316.341.303.29-.016.559-.204.555-.392-.003-.2-.284-.389-.636-.367zM28.986 12.87c-.323.012-.52-.15-.546-.45-.02-.227.452-.61.759-.616.268-.005.557.237.558.466.002.311-.351.585-.771.6zm.076-.336a.293.293 0 00.271-.237c.021-.084-.05-.11-.113-.12-.18-.028-.411.133-.377.26.017.063.072.1.219.097zM4.994 21.057c-.025-.409.26-.716.608-.704.248.008.377.148.396.368.026.287-.353.797-.593.777-.326-.027-.368-.274-.411-.441zM7.376 16.217c-.007-.363.165-.564.49-.57.31-.007.687.268.703.514.017.248-.399.538-.765.533-.27-.004-.422-.173-.428-.477zm.628.135c.083-.019.189-.027.198-.131.008-.095-.063-.151-.165-.155-.096-.004-.186.023-.195.128-.008.096.051.15.162.158zM39.06 17.408c.02.33-.163.489-.518.507-.268.014-.389-.117-.413-.335-.031-.283.225-.542.538-.556.331-.016.349.214.392.384zM10.3 14.206c-.313-.005-.538-.198-.544-.47-.005-.254.18-.332.41-.33.229.003.54.322.521.52-.019.213-.173.284-.387.28zM8.541 14.507c.039.01.139.014.212.056.15.088.383.19.283.375-.11.204-.27-.011-.408-.043-.067-.015-.138-.017-.203-.036-.126-.035-.197-.114-.16-.235.028-.095.127-.108.276-.117zM3.345 30.869c.166-.026.24.066.258.169.036.19-.055.35-.276.36-.139.007-.262-.11-.279-.246-.023-.194.166-.227.297-.283zM15.143 11.275c.146.065.375.035.405.249.012.082-.068.179-.159.169-.17-.018-.386-.017-.41-.239-.008-.077.058-.152.164-.179zM11.914 12.66c.152-.263.357-.245.574-.1.025.017.01.144-.027.17-.202.134-.385.081-.547-.07zM6.762 17.55c.015.123-.05.19-.185.203-.083.009-.128-.037-.139-.102-.02-.126.064-.19.187-.213.089-.016.111.052.137.113zM11.112 12.584c.095-.039.115.031.13.084.026.085-.003.158-.104.187-.083.024-.122-.032-.142-.088-.036-.095.033-.145.116-.183zM11.494 13.286c.078.017.13.06.107.134-.022.067-.09.091-.164.082-.079-.009-.13-.052-.105-.129.023-.066.088-.09.162-.087zM46.476 29.62c-.488.041-.88-.289-1.22-.68-.173-.197-.05-.424.077-.595.269-.36.672-.514 1.148-.492.252.012.913.51.989.73.14.412-.366 1.015-.995 1.037zm-.072-.412c.27-.01.5-.219.485-.44-.019-.254-.289-.475-.558-.455-.328.023-.613.212-.627.417-.018.26.322.49.7.478zM44.199 26.012c.464-.008.895.34.886.717-.013.534-.332.996-.678.982-.508-.02-1.137-.587-1.16-1.047-.018-.35.408-.643.952-.652zm-.465.59c.03.286.226.393.348.538.053.063.2.124.31.04.159-.12.179-.288.143-.463-.03-.15-.16-.208-.305-.2-.157.007-.312.052-.496.085zM46.71 22.915c.01.57-.184.772-.747.773-.62 0-1.199-.421-1.189-.865.01-.449.509-.863 1.04-.865.5-.002.886.41.896.957zm-.402.064c.006-.32-.252-.562-.622-.542-.235.012-.473.081-.502.349-.025.235.377.472.788.492.244.012.34-.092.336-.3zM50.836 19.583c-.438.016-1.07-.39-1.125-.722-.06-.37.428-.97.868-1.06.12-.024.245-.02.297.102.063.146-.093.17-.184.22-.08.043-.18.057-.256.105-.225.14-.407.312-.276.584.099.205.574.38.789.313.295-.092.395-.337.26-.69-.05-.13-.238-.283-.008-.366.177-.064.358.057.453.228.291.518-.183 1.263-.818 1.286zM49.283 15.495c-.52.027-.922-.221-.941-.581-.019-.348.599-.882 1.052-.91.23-.013.895.486.91.684.028.383-.473.78-1.021.807zm.091-.352c.187-.032.454-.032.468-.313.01-.194-.31-.39-.568-.36-.236.028-.461.106-.499.36-.03.205.21.334.6.313zM49.354 21.69c-.058.532-.453.947-.868.912-.551-.047-1.015-.44-.972-.825.042-.387.563-.818.962-.794.564.034.92.32.878.707zm-.386.061c.005-.262-.203-.428-.514-.428-.274 0-.579.196-.577.372.003.21.46.562.717.518.273-.047.337-.266.373-.462zM43.578 20.178c-.003.485-.373.914-.777.897-.333-.014-.706-.37-.705-.674.001-.37.434-.897.742-.906.381-.01.742.322.74.683zm-.734-.275c-.165.014-.4.276-.388.416.011.148.3.382.43.335.197-.069.265-.22.254-.404-.011-.186-.086-.323-.296-.347zM43.017 24.35c.022-.151.053-.256.048-.36-.007-.176-.013-.365.192-.435.223-.076.397.05.54.2.129.134.138.327.378.418.168.063.1.306 0 .456a.664.664 0 01-.642.306c-.211-.021-.401-.117-.473-.32-.034-.098-.034-.206-.043-.265zM48.066 19.906c.014.458-.169.657-.619.678-.481.022-.796-.176-.813-.51-.02-.37.377-.797.731-.792.432.008.69.237.701.624zm-.74-.236c-.14.011-.355.045-.372.248-.017.2.182.296.373.314.205.02.387-.07.369-.286-.013-.15-.107-.286-.37-.276zM43.17 17.43c.023.361-.182.653-.478.678-.293.026-.75-.327-.79-.609-.03-.221.485-.664.799-.685.225-.016.447.276.47.616zm-.377.052c-.004-.087.006-.22-.14-.223-.177-.006-.307.09-.311.265-.003.118.089.189.213.206.197.027.22-.103.238-.248zM49.249 17.899c-.46.014-.763-.136-.775-.382-.014-.255.489-.69.81-.701.289-.01.58.257.573.522-.01.338-.24.549-.608.56zm.153-.509c-.016-.087-.048-.183-.16-.17-.13.016-.294.046-.271.219.012.094.112.125.213.13.137.006.223-.04.218-.179zM44.892 18.254c0 .328-.159.482-.497.483-.395 0-.756-.207-.745-.428.018-.354.36-.85.607-.876.246-.027.635.476.635.821zm-.326-.192c-.079-.067-.107-.235-.275-.206-.181.03-.229.189-.227.34 0 .125.113.19.225.197.222.014.233-.156.277-.331zM50.518 27.548c.021.241-.107.352-.368.365-.385.019-.815-.207-.835-.446-.023-.276.413-.627.77-.623.203.003.419.355.433.704zm-.453-.124c.02-.085.007-.171-.087-.2-.037-.01-.123.046-.152.09-.064.094.017.153.097.19.079.036.114-.023.142-.08zM47.173 24.073c.073.282-.182.385-.223.566-.028.124-.062.277.123.317.13.028.202-.05.196-.189-.005-.105.023-.23.189-.201.137.023.16.14.174.246.045.321-.16.56-.493.578-.278.015-.64-.288-.662-.554-.027-.35.188-.595.696-.763zM43.313 32.78c-.282-.001-.474-.173-.489-.437-.016-.3.3-.643.573-.622.222.017.482.31.482.544 0 .327-.207.514-.566.514zM50.967 22.275c.044.017.083.043.121.043.14 0 .337-.174.39.077.043.2-.114.323-.312.356a.856.856 0 01-.712-.184c-.202-.171-.1-.353.048-.502.15-.152.308-.376.576-.22.329.193-.125.276-.11.43zM46.959 17.821c-.247.007-.526-.2-.541-.402-.024-.313.202-.693.443-.735.04-.007.091.014.128.035.064.038.09.104.057.166-.03.055-.087.097-.132.145-.104.114-.262.241-.056.37.259.164.236-.08.29-.196.032-.069.087-.095.162-.09.122.007.147.1.151.18.015.264-.235.52-.502.527zM44.913 20.179c-.049.234-.164.412-.436.436-.275.025-.364-.16-.384-.357-.023-.218.1-.365.36-.372.231-.005.399.083.46.293zM43.613 21.38c.097.026.164.074.157.176-.004.062-.013.125.076.147.118.03.354-.235.343.07-.008.206-.19.404-.462.415-.248.01-.36-.186-.447-.352-.096-.184.05-.321.2-.433.03-.023.088-.016.133-.023zM50.49 16.306c-.04.217-.19.33-.429.316-.21-.013-.45-.06-.398-.316.041-.207.191-.414.456-.393a.388.388 0 01.37.393zM48.493 23.982c-.135-.011-.198-.069-.203-.158-.008-.154.05-.295.223-.339.088-.022.166.055.166.152.002.15-.045.279-.186.345zM50.461 23.606c.121.109.1.226.013.339-.054.069-.139.146-.23.113-.157-.056-.084-.166-.031-.259.054-.093.105-.191.248-.193zM49.067 26.088c-.029.076-.05.16-.158.168-.121.01-.145-.08-.146-.154 0-.08.044-.157.151-.166.122-.01.132.076.153.152zM42.786 6.505c.317.046.689.089 1.054.158.204.038.394.132.547.268.243.217.298.644.153.953-.163.348-.487.177-.735.183-.252.006-.495-.104-.723-.214-.226-.11-.447-.232-.683-.323-.409-.158-.823-.33-1.272-.093-.093.05-.18.035-.248-.035-.055-.057-.033-.137.023-.164.59-.287 1.1-.74 1.884-.733zm-.874.493c.254.233.573.16.818.283.263.132.525.268.79.396.061.03.134.038.2.06.157.053.328.109.431-.062.11-.183.087-.368-.086-.519-.534-.465-1.358-.535-2.153-.158zM27.095 6.393c.615-.704 1.228-1.365 2.323-1.3.046.002.093-.002.14.003.51.05.975.411.988.763.015.384-.363.704-.945.783-.183.025-.393.063-.554.008-.621-.214-1.258-.267-1.952-.257zm.714-.436c.439.112.76.172 1.061.277.33.116.646.07.969.006.168-.032.333-.09.358-.26a.428.428 0 00-.22-.443 1.104 1.104 0 00-.457-.14c-.605-.033-1.139.143-1.71.56zM37.656 3.43c-.197.03-.367-.057-.542-.11-.737-.23-1.473-.414-2.247-.122-.186.07-.328.011-.376-.166-.058-.214-.083-.423.22-.529.568-.2 1.127-.417 1.73-.525.45-.08.88-.066 1.307.09.332.12.726.631.697.929-.02.208-.4.416-.789.433zm-2.37-.71a4.798 4.798 0 012.135.315.703.703 0 00.275.032c.266-.015.373-.184.246-.396-.09-.151-.21-.278-.41-.326-.796-.19-1.545-.095-2.245.375zM37.65 13.609c-.011-.221.129-.35.202-.5.236-.48.63-.66 1.189-.558.182.033.358.097.54.134.189.04.285.156.295.313.01.175-.04.39-.24.423-.655.104-1.304.333-1.986.188zm1.486-.616c-.255-.234-.507-.232-.773-.018-.074.06-.114.134-.078.22.04.097.13.094.224.065.213-.065.456-.07.627-.267zM21.941 6.895c-.179-.036-.405-.014-.508-.235-.11-.238.083-.356.235-.476.284-.226.624-.371.976-.484.15-.048.342-.095.458.033.11.12.044.286-.005.424-.133.367-.705.732-1.156.738zm.851-.786c-.067-.113-.158-.185-.282-.135a3.2 3.2 0 00-.474.253c-.094.06-.196.155-.136.262.079.14.237.094.362.05.234-.081.472-.168.53-.43zM34.316 9.438c.363-.186.68-.362 1.01-.512.332-.15.676-.162 1 .026.134.078.169.206.105.334-.16.319-.465.463-.824.517-.461.07-.93.139-1.291-.365zM13.101 10.438c-.071 0-.138-.024-.157-.09-.04-.135.163-.373.306-.367.083.004.12.054.115.127-.014.157-.061.294-.264.33zM16.359 9.264c.01.074-.03.12-.107.133-.073.012-.142-.01-.168-.074-.043-.106.035-.157.131-.167.067-.007.122.04.144.108z"
      ></path>
      <path
        fill="#3C1E57"
        d="M34.747 28.016c.162.337.083.622.017.901-.313 1.31-.542 2.633-.771 3.956-.073.42-.095.847-.148 1.27-.022.179.023.477-.22.467-.318-.013-.141-.306-.123-.462.089-.76.189-1.519.321-2.273.203-1.156.432-2.308.658-3.46.023-.122.043-.258.266-.399zM34.298 34.307c.106-.953.202-1.904.451-2.836a2.87 2.87 0 01.147-.422c.023-.052.085-.107.17-.071.067.028.112.076.102.147-.043.315-.069.634-.137.946-.16.73-.26 1.466-.324 2.208-.002.02 0 .042-.004.063-.022.13-.059.269-.24.254-.19-.015-.167-.167-.165-.288zM30.183 32.131c.164.053.302.12.244.315-.183.611-.364 1.222-.548 1.833a.138.138 0 01-.15.103c-.126-.008-.142-.097-.131-.18.096-.719.327-1.407.602-2.085a1.361 1.361 0 00-.017.014zM32.604 34.64c-.1-.535.047-1.03.24-1.518a.16.16 0 01.226-.082c.05.025.116.102.106.14-.125.502-.184 1.025-.572 1.46z"
      ></path>
    </svg>
  );
};

export default SushiIcon;
