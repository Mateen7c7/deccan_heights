import { useEffect, useState } from "react";

const Phase5 = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const path = document.getElementById("70");
    if (path) {
      path.setAttribute("fill", "#F87C63");
    }

    const soldIds = [
      1, 3, 5, 7, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54,
      57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 93, 96, 99, 102, 105, 108,
      111, 114, 117, 120, 123, 126, 129, 132, 135, 138, 141, 144, 147,
    ];

    soldIds.forEach((id) => {
      const path = document.getElementById(id.toString());
      if (path) {
        path.setAttribute("fill", "#F87C63");
      }
    });
  }, []);
  //   console.log(size);
  return (
    <svg
      width={size.width}
      height={size.height}
      viewBox="0 0 2312 2072"
      fill="none"
      version="1.1"
      id="svg1402"
      className="border"
    >
      <defs id="defs1406" />

      <rect width={2312} height={2072} fill="white" id="rect721" />
      <path
        d="M163.5 183.5L117 199.5L147.5 301.5L187.5 374.5L264.5 413L357.5 443.5L496 536.5L551.5 614.5L529 710.5L497 983L411 1552L683.5 1578L811 1580.5L1276.5 1643.5L1289 1646.5L1360 1666.5L1590 1794.5L1708 1844L1779 1873L1833.5 1882L1885.5 1873L1997.5 1809L2041 1503.5L2071.5 1392.5L2162 1121.5L2155 611.5L2182.5 291.5L1672 289L1178.5 174.5L1051 167L332 89L296.5 99L163.5 183.5Z"
        stroke="#FD0505"
        strokeWidth={2}
        id="path723"
      />
      <path
        d="M549 618L536 596L2155 596.5V629V658H541L549 618Z"
        fill="#1E1E1E"
        stroke="#1E1E1E"
        strokeWidth={2}
        id="path725"
      />
      <path
        d="M498 543L435 499V102L498 110V215H717V131L781 140V596H717V280H498V543Z"
        fill="#1E1E1E"
        stroke="#1E1E1E"
        strokeWidth={2}
        id="path727"
      />
      <path
        d="M2067 1417H431.5L422 1493H2047L2067 1417Z"
        fill="#1E1E1E"
        stroke="#1E1E1E"
        strokeWidth={2}
        id="path729"
      />
      <path
        d="M781.5 140L718 134L717 1420.5H781.5V140Z"
        fill="#1E1E1E"
        stroke="#1E1E1E"
        strokeWidth={2}
        id="path731"
      />
      <path
        d="M1068.5 168.5L1005.5 163L1005 1417H1068.5V168.5Z"
        fill="#1E1E1E"
        stroke="#1E1E1E"
        strokeWidth={2}
        id="path733"
      />
      <path
        d="M1363 219L1290 202H1285.5V1646L1363 1667V219Z"
        fill="#1E1E1E"
        stroke="#1E1E1E"
        strokeWidth={2}
        id="path735"
      />
      <path
        d="M1646 284L1583 268.5L1582.5 1792.5L1646 1818V284Z"
        fill="#1E1E1E"
        stroke="#1E1E1E"
        strokeWidth={2}
        id="path737"
      />
      <path
        d="M1930 290.5H1867.5V1876.5L1885.5 1875L1899.5 1867.5L1930 1851.5V290.5Z"
        fill="#1E1E1E"
        id="path739"
      />
      <path
        d="M1867.5 290.5H1930V1851.5L1899.5 1867.5L1885.5 1875L1867.5 1876.5V289.75"
        stroke="#1E1E1E"
        strokeWidth={2}
        id="path741"
      />
      <path
        d="M716 1069.5H482L472.5 1133H716V1069.5Z"
        fill="#1E1E1E"
        stroke="#1E1E1E"
        strokeWidth={2}
        id="path743"
      />
      <path
        d="M892.5 658H782V784.5H892.5V658Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"142"}
      />
      <path
        d="M1003.5 658H893V784.5H1003.5V658Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"129"}
      />
      <path
        d="M892 784H782V847.5H892V784Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"143"}
      />
      <path
        d="M1002.5 784H892.5V848H1002.5V784Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"128"}
      />
      <path
        d="M892 848H782V911.5H892V848Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"144"}
      />
      <path
        d="M1002.5 848H892.5V911.5H1002.5V848Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"127"}
      />
      <path
        d="M892 913H782V976.5H892V913Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"145"}
      />
      <path
        d="M1002.5 913H892.5V976.5H1002.5V913Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"126"}
      />
      <path
        d="M892 977H782V1040.5H892V977Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"146"}
      />
      <path
        d="M1002.5 977H892.5V1040.5H1002.5V977Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"125"}
      />
      <path
        d="M892.5 1042H782.5V1105.5H892.5V1042Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"147"}
      />
      <path
        d="M1003 1042H893V1105.5H1003V1042Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"124"}
      />
      <path
        d="M892.5 1106H782.5V1169.5H892.5V1106Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"148"}
      />
      <path
        d="M1003 1106H893V1169.5H1003V1106Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"123"}
      />
      <path
        d="M892.5 1171H782.5V1234.5H892.5V1171Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"149"}
      />
      <path
        d="M1003 1171H893V1234.5H1003V1171Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"122"}
      />
      <path
        d="M892.5 1235H782.5V1298.5H892.5V1235Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"150"}
      />
      <path
        d="M1003 1235H893V1298.5H1003V1235Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"121"}
      />
      <path
        d="M892.75 1299H781.75V1417H892.75V1299Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"151"}
      />
      <path
        d="M1004.75 1299H892.75V1417H1004.75V1299Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"120"}
      />
      <path
        d="M1756.75 658H1646.25V784.5H1756.75V658Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"36"}
      />
      <path
        d="M1867.75 658H1757.25V784.5H1867.75V658Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"29"}
      />
      <path
        d="M1756.25 784H1646.25V847.5H1756.25V784Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"37"}
      />
      <path
        d="M1866.75 784H1756.75V848H1866.75V784Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"28"}
      />
      <path
        d="M1756.25 848H1646.25V911.5H1756.25V848Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"38"}
      />
      <path
        d="M1866.75 848H1756.75V911.5H1866.75V848Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"27"}
      />
      <path
        d="M1756.25 913H1646.25V976.5H1756.25V913Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"39"}
      />
      <path
        d="M1866.75 913H1756.75V976.5H1866.75V913Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"26"}
      />
      <path
        d="M1756.25 977H1646.25V1040.5H1756.25V977Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"40"}
      />
      <path
        d="M1866.75 977H1756.75V1040.5H1866.75V977Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"25"}
      />
      <path
        d="M1756.75 1042H1646.75V1105.5H1756.75V1042Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"41"}
      />
      <path
        d="M1867.25 1042H1757.25V1105.5H1867.25V1042Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"24"}
      />
      <path
        d="M1756.75 1106H1646.75V1169.5H1756.75V1106Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"42"}
      />
      <path
        d="M1867.25 1106H1757.25V1169.5H1867.25V1106Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"23"}
      />
      <path
        d="M1756.75 1171H1646.75V1234.5H1756.75V1171Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"43"}
      />
      <path
        d="M1867.25 1171H1757.25V1234.5H1867.25V1171Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"22"}
      />
      <path
        d="M1756.75 1235H1646.75V1298.5H1756.75V1235Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"44"}
      />
      <path
        d="M1867.25 1235H1757.25V1298.5H1867.25V1235Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"21"}
      />
      <path
        d="M1757 1299H1646V1417H1757V1299Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"45"}
      />
      <path
        d="M1869 1299H1757V1417H1869V1299Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"20"}
      />
      <path
        d="M1473.75 658H1363.25V784.5H1473.75V658Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"70"}
      />
      <path
        d="M1584.75 658H1474.25V784.5H1584.75V658Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"62"}
      />
      <path
        d="M1473.25 784H1363.25V847.5H1473.25V784Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"71"}
      />
      <path
        d="M1583.75 784H1473.75V848H1583.75V784Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"61"}
      />
      <path
        d="M1473.25 848H1363.25V911.5H1473.25V848Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"72"}
      />
      <path
        d="M1583.75 848H1473.75V911.5H1583.75V848Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"60"}
      />
      <path
        d="M1473.25 913H1363.25V976.5H1473.25V913Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"73"}
      />
      <path
        d="M1583.75 913H1473.75V976.5H1583.75V913Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"59"}
      />
      <path
        d="M1473.25 977H1363.25V1040.5H1473.25V977Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"74"}
      />
      <path
        d="M1583.75 977H1473.75V1040.5H1583.75V977Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"58"}
      />
      <path
        d="M1473.75 1042H1363.75V1105.5H1473.75V1042Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"75"}
      />
      <path
        d="M1584.25 1042H1474.25V1105.5H1584.25V1042Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"57"}
      />
      <path
        d="M1473.75 1106H1363.75V1169.5H1473.75V1106Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"76"}
      />
      <path
        d="M1584.25 1106H1474.25V1169.5H1584.25V1106Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"56"}
      />
      <path
        d="M1473.75 1171H1363.75V1234.5H1473.75V1171Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"77"}
      />
      <path
        d="M1584.25 1171H1474.25V1234.5H1584.25V1171Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"55"}
      />
      <path
        d="M1473.75 1235H1363.75V1298.5H1473.75V1235Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"78"}
      />
      <path
        d="M1584.25 1235H1474.25V1298.5H1584.25V1235Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"54"}
      />
      <path
        d="M1474 1299H1363V1417H1474V1299Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"79"}
      />
      <path
        d="M1586 1299H1474V1417H1586V1299Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"53"}
      />
      <path
        d="M1179.75 658H1069.25V784.5H1179.75V658Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"110"}
      />
      <path
        d="M1290.75 658H1180.25V784.5H1290.75V658Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"99"}
      />
      <path
        d="M1179.25 784H1069.25V847.5H1179.25V784Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"111"}
      />
      <path
        d="M1289.75 784H1179.75V848H1289.75V784Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"98"}
      />
      <path
        d="M1179.25 848H1069.25V911.5H1179.25V848Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"112"}
      />
      <path
        d="M1289.75 848H1179.75V911.5H1289.75V848Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"97"}
      />
      <path
        d="M1179.25 913H1069.25V976.5H1179.25V913Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"113"}
      />
      <path
        d="M1289.75 913H1179.75V976.5H1289.75V913Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"96"}
      />
      <path
        d="M1179.25 977H1069.25V1040.5H1179.25V977Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"114"}
      />
      <path
        d="M1289.75 977H1179.75V1040.5H1289.75V977Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"95"}
      />
      <path
        d="M1179.75 1042H1069.75V1105.5H1179.75V1042Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"115"}
      />
      <path
        d="M1290.25 1042H1180.25V1105.5H1290.25V1042Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"94"}
      />
      <path
        d="M1179.75 1106H1069.75V1169.5H1179.75V1106Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"116"}
      />
      <path
        d="M1290.25 1106H1180.25V1169.5H1290.25V1106Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"93"}
      />
      <path
        d="M1179.75 1171H1069.75V1234.5H1179.75V1171Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"117"}
      />
      <path
        d="M1290.25 1171H1180.25V1234.5H1290.25V1171Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"92"}
      />
      <path
        d="M1179.75 1235H1069.75V1298.5H1179.75V1235Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"118"}
      />
      <path
        d="M1290.25 1235H1180.25V1298.5H1290.25V1235Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"91"}
      />
      <path
        d="M1180 1299H1069V1417H1180V1299Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"119"}
      />
      <path
        d="M1292 1299H1180V1417H1292V1299Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"90"}
      />
      <path
        d="M893 151L783.5 139V215.5H893V151Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"136"}
      />
      <path
        d="M1004.5 215V165L893.5 152.5V215H1004.5Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"135"}
      />
      <path
        d="M783.5 279.5V215.5H894V279.5H783.5Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"137"}
      />
      <path
        d="M893.5 279.5V215.5H1004V279.5H893.5Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"134"}
      />
      <path
        d="M783.5 343.5V279.5H894V343.5H783.5Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"138"}
      />
      <path
        d="M893.5 343.5V279.5H1004V343.5H893.5Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"133"}
      />
      <path
        d="M783.5 407.5V343.5H894V407.5H783.5Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"139"}
      />
      <path
        d="M893.5 407.5V343.5H1004V407.5H893.5Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"132"}
      />
      <path
        d="M783.5 471.5V407.5H894V471.5H783.5Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"140"}
      />
      <path
        d="M893.5 471.5V407.5H1004V471.5H893.5Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"131"}
      />
      <path
        d="M783 596V471H893V596H783Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"141"}
      />
      <path
        d="M893.5 596.5V471.5H1003.5V596.5H893.5Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"130"}
      />
      <path
        d="M1180 175.5L1070 169V245.5H1180V175.5Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"105"}
      />
      <path
        d="M1290.5 245V203L1179 175V245H1290.5Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"104"}
      />
      <path
        d="M1069.5 309V245.5H1179.5V309H1069.5Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"106"}
      />
      <path
        d="M1180.5 309V245.5H1290.5V309H1180.5Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"103"}
      />
      <path
        d="M1069.5 372V308.5H1179.5V372H1069.5Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"107"}
      />
      <path
        d="M1180.5 372V308.5H1290.5V372H1180.5Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"102"}
      />
      <path
        d="M1070 467V372H1179V467H1070Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"108"}
      />
      <path
        d="M1180.5 467.5V372.5H1289.5V467.5H1180.5Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"101"}
      />
      <path
        d="M1069 594.5V467.5H1179.5V594.5H1069Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"109"}
      />
      <path
        d="M1179.5 594.5V467.5H1290V594.5H1179.5Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"100"}
      />
      <path
        d="M1362.5 308.5V217L1473 244L1472 307L1362.5 308.5Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"66"}
      />
      <path
        d="M1583.5 268.5V370.5L1473 371V244L1583.5 268.5Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"65"}
      />
      <path
        d="M1362 371V307.5H1473.5V371H1362Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"67"}
      />
      <path
        d="M1472 466.5H1362.5V371H1472V466.5Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"68"}
      />
      <path
        d="M1582.5 466.5H1473V371H1582.5V466.5Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"64"}
      />
      <path
        d="M1362 593.5V466H1472V593.5H1362Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"69"}
      />
      <path
        d="M1473 593.5V466H1583V593.5H1473Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"63"}
      />
      <path
        d="M1673 290L1645.5 282.5V370.5H1756.5V290H1673Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"33"}
      />
      <path
        d="M1866.5 370.5V289H1756.5V371.5L1866.5 370.5Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"32"}
      />
      <path
        d="M1646 466V370.5L1756.5 371V466H1646Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"34"}
      />
      <path
        d="M1756 466.5V371L1866.5 371.5V466.5H1756Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"31"}
      />
      <path
        d="M1646 593V466.5H1756.5V593H1646Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"35"}
      />
      <path
        d="M1756 593.5V467H1866.5V593.5H1756Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"30"}
      />
      <path
        id={"1"}
        d="M1930 383V288.5L2180.5 290L2173 383H1930Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
      />
      <path
        id={"2"}
        d="M2166 471H1931L1929.5 382.5H2174L2166 471Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
      />
      <path
        id={"3"}
        d="M2155.5 593H1931L1930 471.5L2167 471L2155.5 593Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
      />
      <path
        id={"4"}
        d="M1932 751.5V658H2155.5L2158 751.5H1932Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
      />
      <path
        id={"5"}
        d="M2158.5 845.5H1932V751H2157L2158.5 845.5Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
      />
      <path
        id={"6"}
        d="M2160 938H1932V845.5L2159 844.5L2160 938Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
      />
      <path
        id={"7"}
        d="M2161 1029L1932 1031V938L2161 936.5V1029Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
      />
      <path
        id={"8"}
        d="M2163 1121.5H1931.5V1031L2161.5 1028.5L2163 1121.5Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
      />
      <path
        id={"9"}
        d="M2131 1219.5H1932V1121.5H2163.5L2131 1219.5Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
      />
      <path
        id={"10"}
        d="M2107 1295H1931L1932.5 1219.5H2131.5L2107 1295Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
      />
      <path
        id={"11"}
        d="M2065 1418H1932V1294.5H2107L2065 1418Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
      />
      <path
        id={"12"}
        d="M2041.5 1503.5L2044 1492.5H1932.5V1632H2023.5L2041.5 1503.5Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
      />
      <path
        id={"13"}
        d="M2013 1714.5H1931.5V1632H2023.5L2013 1714.5Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
      />
      <path
        id={"14"}
        d="M1998 1811.5L1932.5 1851L1931.5 1714.5H2012.5L1998 1811.5Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
      />
      <path
        id={"19"}
        d="M1869 1619V1493H1758.5V1619H1869Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
      />
      <path
        d="M1758.5 1619.5V1493.5H1648V1619.5H1758.5Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"46"}
      />
      <path
        d="M1648 1683.5V1620H1758.5V1683.5H1648Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"47"}
      />
      <path
        id={"18"}
        d="M1869 1683V1619.5H1759V1683H1869Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
      />
      <path
        d="M1758.5 1747.5H1648V1684.5H1758.5V1747.5Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"48"}
      />
      <path
        id={"17"}
        d="M1869.5 1746V1683.5H1757.5L1759 1746H1869.5Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
      />
      <path
        id={"16"}
        d="M1758.5 1810H1869L1869.5 1746L1758.5 1747V1810Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
      />
      <path
        id={"15"}
        d="M1832.5 1882L1869.5 1875.5V1810.5H1758.5V1863L1832.5 1882Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
      />
      <path
        d="M1649 1816.5V1747H1758.5V1862L1649 1816.5Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"49"}
      />
      <path
        d="M1585 1618.5V1493.5H1474.5V1618.5H1585Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"52"}
      />
      <path
        d="M1474.5 1618.5V1493.5H1364V1618.5H1474.5Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"80"}
      />
      <path
        d="M1584.5 1682.5V1619H1475V1682.5H1584.5Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"51"}
      />
      <path
        d="M1584.5 1683.5V1791.5L1475 1726V1683.5H1584.5Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"50"}
      />
      <path
        d="M1364.5 1667V1620H1474.5V1726L1364.5 1667Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"81"}
      />
      <path
        d="M1288 1645.5V1493H1191V1628L1288 1645.5Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"82"}
      />
      <path
        d="M1190 1493H1078.5V1609.5L1191 1627L1190 1493Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"83"}
      />
      <path
        d="M1078.5 1492.5H983V1598L1078.5 1608.5V1492.5Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"84"}
      />
      <path
        d="M983 1492.5H863.5V1584.5L983 1598.5V1492.5Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"85"}
      />
      <path
        d="M864 1492.5H783.5L784.5 1579L864 1584V1492.5Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"86"}
      />
      <path
        d="M783 1492H700.5V1578.5H784L783 1492Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"87"}
      />
      <path
        d="M701.5 1493H570.5V1569L701.5 1578.5V1493Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"88"}
      />
      <path
        d="M570.5 1492.5H419.5L412 1551L570.5 1569V1492.5Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"89"}
      />
      <path
        d="M722 1418V1269H582V1418H722Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"152"}
      />
      <path
        d="M722.5 1268.5V1133.5H567V1268.5H722.5Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"155"}
      />
      <path
        d="M567 1133H475.5L453.5 1268.5H567V1133Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"154"}
      />
      <path
        d="M582 1418.5H430.5L453.5 1268.5H582V1418.5Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"153"}
      />
      <path
        d="M485.5 1070H722.5V971H502.5L485.5 1070Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"156"}
      />
      <path
        d="M722 970.5V873.5H513.5L502.5 970.5H722Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"157"}
      />
      <path
        d="M722 873.5V769.5H525.5L513.5 873.5H722Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"158"}
      />
      <path
        d="M722.5 768.5V658H544L533.5 705L526.5 768.5H722.5Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"159"}
      />
      <path
        d="M718.5 470.5H608V598H718.5V470.5Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"160"}
      />
      <path
        d="M608.5 471.5H498.5V543.5L537 597.5H608.5V471.5Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"167"}
      />
      <path
        d="M608 407.5H498V471.5H608V407.5Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"166"}
      />
      <path
        d="M718.5 407H608.5V471H718.5V407Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"161"}
      />
      <path
        d="M608.5 281.5H498.5V407.5H608.5V281.5Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"165"}
      />
      <path
        d="M718.5 281H608.5V407H718.5V281Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"162"}
      />
      <path
        d="M501.5 213.5V108L605 117.5V213.5H501.5Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"164"}
      />
      <path
        d="M721.5 214V130.5L604.5 118V212.5L721.5 214Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"163"}
      />
      <path
        d="M437.5 277.5V100.5L331 91L299 100L170 184.5L119 201L142 277.5H437.5Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"169"}
      />
      <path
        d="M437 276.5V498.5L355.5 443L270 415L190.5 376L149.5 302.5L142.5 276.5H437Z"
        fill="#FFFBDB"
        stroke="#1E1E1E"
        strokeWidth={2}
        id={"168"}
      />
      <path
        d="M2051.94 327.545V345H2049.83V329.761H2049.73L2045.47 332.591V330.443L2049.83 327.545H2051.94Z"
        fill="#A9448C"
        id="path1064"
      />
      <path
        d="M2041.81 436V434.466L2047.57 428.159C2048.24 427.42 2048.8 426.778 2049.24 426.233C2049.68 425.682 2050 425.165 2050.21 424.682C2050.43 424.193 2050.53 423.682 2050.53 423.148C2050.53 422.534 2050.39 422.003 2050.09 421.554C2049.8 421.105 2049.4 420.759 2048.9 420.514C2048.39 420.27 2047.82 420.148 2047.19 420.148C2046.52 420.148 2045.94 420.287 2045.44 420.565C2044.94 420.838 2044.56 421.222 2044.29 421.716C2044.02 422.21 2043.89 422.79 2043.89 423.455H2041.88C2041.88 422.432 2042.11 421.534 2042.58 420.761C2043.05 419.989 2043.7 419.386 2044.51 418.955C2045.33 418.523 2046.24 418.307 2047.26 418.307C2048.28 418.307 2049.19 418.523 2049.98 418.955C2050.77 419.386 2051.39 419.969 2051.84 420.702C2052.29 421.435 2052.51 422.25 2052.51 423.148C2052.51 423.79 2052.39 424.418 2052.16 425.031C2051.93 425.639 2051.54 426.318 2050.97 427.068C2050.41 427.812 2049.62 428.722 2048.62 429.795L2044.7 433.989V434.125H2052.82V436H2041.81Z"
        fill="#A9448C"
        id="path1066"
      />
      <path
        d="M2044.7 532.239C2043.58 532.239 2042.58 532.045 2041.7 531.659C2040.82 531.273 2040.13 530.736 2039.61 530.048C2039.1 529.355 2038.82 528.551 2038.77 527.636H2040.92C2040.97 528.199 2041.16 528.685 2041.5 529.094C2041.84 529.497 2042.29 529.81 2042.84 530.031C2043.39 530.253 2044 530.364 2044.67 530.364C2045.42 530.364 2046.09 530.233 2046.66 529.972C2047.24 529.71 2047.7 529.347 2048.03 528.881C2048.36 528.415 2048.52 527.875 2048.52 527.261C2048.52 526.619 2048.36 526.054 2048.05 525.565C2047.73 525.071 2047.26 524.685 2046.65 524.406C2046.03 524.128 2045.28 523.989 2044.4 523.989H2043V522.114H2044.4C2045.09 522.114 2045.7 521.989 2046.22 521.739C2046.75 521.489 2047.16 521.136 2047.46 520.682C2047.76 520.227 2047.91 519.693 2047.91 519.08C2047.91 518.489 2047.78 517.974 2047.52 517.537C2047.26 517.099 2046.89 516.759 2046.41 516.514C2045.94 516.27 2045.38 516.148 2044.74 516.148C2044.14 516.148 2043.57 516.259 2043.03 516.48C2042.51 516.696 2042.07 517.011 2041.74 517.426C2041.4 517.835 2041.22 518.33 2041.19 518.909H2039.15C2039.18 517.994 2039.46 517.193 2039.97 516.506C2040.49 515.812 2041.17 515.273 2042 514.886C2042.84 514.5 2043.77 514.307 2044.77 514.307C2045.85 514.307 2046.78 514.526 2047.55 514.963C2048.32 515.395 2048.92 515.966 2049.33 516.676C2049.75 517.386 2049.95 518.153 2049.95 518.977C2049.95 519.96 2049.7 520.798 2049.18 521.491C2048.67 522.185 2047.97 522.665 2047.09 522.932V523.068C2048.19 523.25 2049.05 523.719 2049.67 524.474C2050.29 525.224 2050.6 526.153 2050.6 527.261C2050.6 528.21 2050.34 529.062 2049.83 529.818C2049.32 530.568 2048.62 531.159 2047.73 531.591C2046.84 532.023 2045.84 532.239 2044.7 532.239Z"
        fill="#A9448C"
        id="path1068"
      />
      <path
        d="M2035.4 707.42V705.682L2043.07 693.545H2044.33V696.239H2043.48L2037.68 705.409V705.545H2048.01V707.42H2035.4ZM2043.61 711V706.892V706.082V693.545H2045.62V711H2043.61Z"
        fill="#A9448C"
        id="path1070"
      />
      <path
        d="M2037.26 805.239C2036.26 805.239 2035.36 805.04 2034.56 804.642C2033.76 804.244 2033.12 803.699 2032.63 803.006C2032.15 802.312 2031.89 801.523 2031.84 800.636H2033.89C2033.97 801.426 2034.32 802.08 2034.96 802.597C2035.6 803.108 2036.37 803.364 2037.26 803.364C2037.98 803.364 2038.61 803.196 2039.17 802.861C2039.73 802.526 2040.17 802.065 2040.49 801.48C2040.82 800.889 2040.98 800.222 2040.98 799.477C2040.98 798.716 2040.81 798.037 2040.47 797.44C2040.14 796.838 2039.69 796.364 2039.11 796.017C2038.53 795.67 2037.87 795.494 2037.12 795.489C2036.59 795.483 2036.04 795.565 2035.48 795.736C2034.92 795.901 2034.45 796.114 2034.09 796.375L2032.11 796.136L2033.17 787.545H2042.24V789.42H2034.94L2034.33 794.568H2034.43C2034.79 794.284 2035.24 794.048 2035.78 793.861C2036.32 793.673 2036.88 793.58 2037.47 793.58C2038.53 793.58 2039.49 793.835 2040.32 794.347C2041.16 794.852 2041.82 795.545 2042.3 796.426C2042.78 797.307 2043.02 798.312 2043.02 799.443C2043.02 800.557 2042.77 801.551 2042.27 802.426C2041.78 803.295 2041.1 803.983 2040.23 804.489C2039.36 804.989 2038.37 805.239 2037.26 805.239Z"
        fill="#A9448C"
        id="path1072"
      />
      <path
        d="M2037.6 898.239C2036.89 898.227 2036.17 898.091 2035.45 897.83C2034.74 897.568 2034.09 897.128 2033.49 896.509C2032.9 895.884 2032.43 895.04 2032.07 893.977C2031.71 892.909 2031.53 891.568 2031.53 889.955C2031.53 888.409 2031.68 887.04 2031.97 885.847C2032.26 884.648 2032.68 883.639 2033.23 882.821C2033.78 881.997 2034.45 881.372 2035.22 880.946C2036.01 880.52 2036.89 880.307 2037.88 880.307C2038.85 880.307 2039.72 880.503 2040.48 880.895C2041.25 881.281 2041.88 881.821 2042.36 882.514C2042.84 883.207 2043.15 884.006 2043.3 884.909H2041.22C2041.02 884.125 2040.65 883.474 2040.09 882.957C2039.53 882.44 2038.8 882.182 2037.88 882.182C2036.52 882.182 2035.46 882.77 2034.68 883.946C2033.91 885.122 2033.52 886.773 2033.51 888.898H2033.65C2033.97 888.415 2034.34 888.003 2034.78 887.662C2035.22 887.315 2035.71 887.048 2036.25 886.861C2036.78 886.673 2037.35 886.58 2037.94 886.58C2038.94 886.58 2039.86 886.83 2040.69 887.33C2041.52 887.824 2042.18 888.509 2042.68 889.384C2043.18 890.253 2043.43 891.25 2043.43 892.375C2043.43 893.455 2043.19 894.443 2042.71 895.341C2042.22 896.233 2041.55 896.943 2040.67 897.472C2039.8 897.994 2038.78 898.25 2037.6 898.239ZM2037.6 896.364C2038.32 896.364 2038.96 896.185 2039.53 895.827C2040.1 895.469 2040.55 894.989 2040.88 894.386C2041.22 893.784 2041.39 893.114 2041.39 892.375C2041.39 891.653 2041.22 890.997 2040.9 890.406C2040.58 889.81 2040.14 889.335 2039.58 888.983C2039.02 888.631 2038.39 888.455 2037.67 888.455C2037.13 888.455 2036.63 888.562 2036.16 888.778C2035.7 888.989 2035.29 889.278 2034.93 889.648C2034.59 890.017 2034.32 890.44 2034.12 890.918C2033.92 891.389 2033.82 891.886 2033.82 892.409C2033.82 893.102 2033.98 893.75 2034.3 894.352C2034.63 894.955 2035.08 895.44 2035.65 895.81C2036.22 896.179 2036.88 896.364 2037.6 896.364Z"
        fill="#A9448C"
        id="path1074"
      />
      <path
        d="M2028.35 990L2036.16 974.557V974.42H2027.16V972.545H2038.34V974.523L2030.57 990H2028.35Z"
        fill="#A9448C"
        id="path1076"
      />
      <path
        d="M2031.4 1083.24C2030.23 1083.24 2029.19 1083.03 2028.3 1082.62C2027.4 1082.2 2026.71 1081.62 2026.21 1080.89C2025.71 1080.15 2025.46 1079.31 2025.47 1078.36C2025.46 1077.62 2025.61 1076.94 2025.9 1076.32C2026.2 1075.69 2026.6 1075.16 2027.11 1074.74C2027.63 1074.32 2028.2 1074.05 2028.84 1073.93V1073.83C2028.01 1073.61 2027.34 1073.14 2026.85 1072.42C2026.35 1071.7 2026.11 1070.87 2026.11 1069.94C2026.11 1069.06 2026.33 1068.26 2026.79 1067.57C2027.24 1066.87 2027.87 1066.32 2028.66 1065.91C2029.46 1065.51 2030.38 1065.31 2031.4 1065.31C2032.41 1065.31 2033.31 1065.51 2034.11 1065.91C2034.9 1066.32 2035.53 1066.87 2035.98 1067.57C2036.44 1068.26 2036.68 1069.06 2036.68 1069.94C2036.68 1070.87 2036.42 1071.7 2035.92 1072.42C2035.43 1073.14 2034.77 1073.61 2033.95 1073.83V1073.93C2034.59 1074.05 2035.15 1074.32 2035.66 1074.74C2036.16 1075.16 2036.57 1075.69 2036.87 1076.32C2037.17 1076.94 2037.32 1077.62 2037.33 1078.36C2037.32 1079.31 2037.07 1080.15 2036.56 1080.89C2036.06 1081.62 2035.37 1082.2 2034.47 1082.62C2033.59 1083.03 2032.56 1083.24 2031.4 1083.24ZM2031.4 1081.36C2032.19 1081.36 2032.87 1081.24 2033.44 1080.98C2034.02 1080.72 2034.46 1080.36 2034.77 1079.9C2035.09 1079.43 2035.24 1078.89 2035.25 1078.26C2035.24 1077.6 2035.07 1077.02 2034.74 1076.51C2034.4 1076.01 2033.95 1075.61 2033.37 1075.32C2032.79 1075.03 2032.14 1074.89 2031.4 1074.89C2030.65 1074.89 2029.99 1075.03 2029.4 1075.32C2028.82 1075.61 2028.37 1076.01 2028.03 1076.51C2027.7 1077.02 2027.54 1077.6 2027.55 1078.26C2027.54 1078.89 2027.69 1079.43 2028 1079.9C2028.31 1080.36 2028.76 1080.72 2029.34 1080.98C2029.91 1081.24 2030.6 1081.36 2031.4 1081.36ZM2031.4 1073.08C2032.02 1073.08 2032.58 1072.95 2033.06 1072.7C2033.55 1072.45 2033.93 1072.11 2034.21 1071.66C2034.49 1071.21 2034.63 1070.68 2034.64 1070.08C2034.63 1069.49 2034.49 1068.97 2034.22 1068.54C2033.95 1068.09 2033.57 1067.75 2033.09 1067.51C2032.6 1067.27 2032.04 1067.15 2031.4 1067.15C2030.74 1067.15 2030.17 1067.27 2029.68 1067.51C2029.2 1067.75 2028.82 1068.09 2028.55 1068.54C2028.28 1068.97 2028.15 1069.49 2028.16 1070.08C2028.15 1070.68 2028.29 1071.21 2028.56 1071.66C2028.84 1072.11 2029.22 1072.45 2029.71 1072.7C2030.2 1072.95 2030.76 1073.08 2031.4 1073.08Z"
        fill="#A9448C"
        id="path1078"
      />
      <path
        d="M2032.36 1159.31C2033.08 1159.31 2033.8 1159.45 2034.51 1159.72C2035.23 1159.98 2035.88 1160.43 2036.47 1161.05C2037.06 1161.66 2037.54 1162.5 2037.89 1163.56C2038.25 1164.62 2038.43 1165.95 2038.43 1167.56C2038.43 1169.11 2038.28 1170.49 2037.99 1171.69C2037.7 1172.89 2037.28 1173.9 2036.73 1174.72C2036.18 1175.55 2035.52 1176.17 2034.73 1176.6C2033.95 1177.03 2033.07 1177.24 2032.09 1177.24C2031.11 1177.24 2030.24 1177.05 2029.47 1176.66C2028.71 1176.27 2028.09 1175.72 2027.6 1175.03C2027.12 1174.33 2026.81 1173.52 2026.67 1172.6H2028.75C2028.94 1173.4 2029.31 1174.07 2029.87 1174.59C2030.43 1175.11 2031.17 1175.36 2032.09 1175.36C2033.44 1175.36 2034.5 1174.78 2035.28 1173.6C2036.06 1172.42 2036.45 1170.76 2036.45 1168.61H2036.32C2036 1169.09 2035.62 1169.5 2035.18 1169.85C2034.75 1170.2 2034.26 1170.46 2033.73 1170.65C2033.19 1170.84 2032.63 1170.93 2032.02 1170.93C2031.02 1170.93 2030.11 1170.68 2029.27 1170.19C2028.44 1169.69 2027.78 1169.01 2027.28 1168.14C2026.78 1167.26 2026.53 1166.26 2026.53 1165.14C2026.53 1164.07 2026.77 1163.09 2027.25 1162.2C2027.73 1161.31 2028.41 1160.6 2029.28 1160.07C2030.15 1159.55 2031.18 1159.29 2032.36 1159.31ZM2032.36 1161.18C2031.65 1161.18 2031 1161.36 2030.43 1161.72C2029.86 1162.07 2029.41 1162.55 2029.07 1163.15C2028.74 1163.75 2028.58 1164.41 2028.58 1165.14C2028.58 1165.86 2028.74 1166.53 2029.06 1167.12C2029.38 1167.71 2029.82 1168.18 2030.38 1168.54C2030.94 1168.88 2031.58 1169.06 2032.3 1169.06C2032.84 1169.06 2033.34 1168.95 2033.8 1168.74C2034.27 1168.53 2034.68 1168.23 2035.02 1167.86C2035.38 1167.49 2035.65 1167.07 2035.85 1166.59C2036.05 1166.12 2036.15 1165.62 2036.15 1165.1C2036.15 1164.42 2035.98 1163.78 2035.65 1163.18C2035.33 1162.59 2034.88 1162.11 2034.31 1161.74C2033.74 1161.37 2033.09 1161.18 2032.36 1161.18Z"
        fill="#A9448C"
        id="path1080"
      />
      <path
        d="M2018.94 1252.55V1270H2016.83V1254.76H2016.73L2012.47 1257.59V1255.44L2016.83 1252.55H2018.94ZM2029.66 1270.24C2028.37 1270.24 2027.28 1269.89 2026.38 1269.19C2025.47 1268.49 2024.78 1267.47 2024.3 1266.13C2023.83 1264.79 2023.59 1263.17 2023.59 1261.27C2023.59 1259.39 2023.83 1257.78 2024.3 1256.44C2024.79 1255.1 2025.48 1254.08 2026.38 1253.37C2027.29 1252.66 2028.38 1252.31 2029.66 1252.31C2030.93 1252.31 2032.02 1252.66 2032.92 1253.37C2033.83 1254.08 2034.52 1255.1 2035 1256.44C2035.48 1257.78 2035.72 1259.39 2035.72 1261.27C2035.72 1263.17 2035.49 1264.79 2035.01 1266.13C2034.53 1267.47 2033.84 1268.49 2032.94 1269.19C2032.03 1269.89 2030.94 1270.24 2029.66 1270.24ZM2029.66 1268.36C2030.93 1268.36 2031.92 1267.75 2032.62 1266.52C2033.33 1265.3 2033.68 1263.55 2033.68 1261.27C2033.68 1259.76 2033.52 1258.47 2033.19 1257.41C2032.88 1256.35 2032.41 1255.54 2031.81 1254.98C2031.22 1254.43 2030.5 1254.15 2029.66 1254.15C2028.39 1254.15 2027.41 1254.77 2026.7 1256.01C2025.99 1257.25 2025.63 1259.01 2025.63 1261.27C2025.63 1262.78 2025.79 1264.07 2026.11 1265.12C2026.43 1266.18 2026.89 1266.99 2027.48 1267.54C2028.09 1268.09 2028.81 1268.36 2029.66 1268.36Z"
        fill="#A9448C"
        id="path1082"
      />
      <path
        d="M1795.81 1271V1269.47L1801.57 1263.16C1802.24 1262.42 1802.8 1261.78 1803.24 1261.23C1803.68 1260.68 1804 1260.16 1804.21 1259.68C1804.43 1259.19 1804.53 1258.68 1804.53 1258.15C1804.53 1257.53 1804.39 1257 1804.09 1256.55C1803.8 1256.11 1803.4 1255.76 1802.9 1255.51C1802.39 1255.27 1801.82 1255.15 1801.19 1255.15C1800.52 1255.15 1799.94 1255.29 1799.44 1255.57C1798.94 1255.84 1798.56 1256.22 1798.29 1256.72C1798.02 1257.21 1797.89 1257.79 1797.89 1258.45H1795.88C1795.88 1257.43 1796.11 1256.53 1796.58 1255.76C1797.05 1254.99 1797.7 1254.39 1798.51 1253.95C1799.33 1253.52 1800.24 1253.31 1801.26 1253.31C1802.28 1253.31 1803.19 1253.52 1803.98 1253.95C1804.77 1254.39 1805.39 1254.97 1805.84 1255.7C1806.29 1256.43 1806.51 1257.25 1806.51 1258.15C1806.51 1258.79 1806.39 1259.42 1806.16 1260.03C1805.93 1260.64 1805.54 1261.32 1804.97 1262.07C1804.41 1262.81 1803.62 1263.72 1802.62 1264.8L1798.7 1268.99V1269.12H1806.82V1271H1795.81ZM1816.47 1253.55V1271H1814.36V1255.76H1814.26L1810 1258.59V1256.44L1814.36 1253.55H1816.47Z"
        fill="#A9448C"
        id="path1084"
      />
      <path
        d="M1795.81 1203V1201.47L1801.57 1195.16C1802.24 1194.42 1802.8 1193.78 1803.24 1193.23C1803.68 1192.68 1804 1192.16 1804.21 1191.68C1804.43 1191.19 1804.53 1190.68 1804.53 1190.15C1804.53 1189.53 1804.39 1189 1804.09 1188.55C1803.8 1188.11 1803.4 1187.76 1802.9 1187.51C1802.39 1187.27 1801.82 1187.15 1801.19 1187.15C1800.52 1187.15 1799.94 1187.29 1799.44 1187.57C1798.94 1187.84 1798.56 1188.22 1798.29 1188.72C1798.02 1189.21 1797.89 1189.79 1797.89 1190.45H1795.88C1795.88 1189.43 1796.11 1188.53 1796.58 1187.76C1797.05 1186.99 1797.7 1186.39 1798.51 1185.95C1799.33 1185.52 1800.24 1185.31 1801.26 1185.31C1802.28 1185.31 1803.19 1185.52 1803.98 1185.95C1804.77 1186.39 1805.39 1186.97 1805.84 1187.7C1806.29 1188.43 1806.51 1189.25 1806.51 1190.15C1806.51 1190.79 1806.39 1191.42 1806.16 1192.03C1805.93 1192.64 1805.54 1193.32 1804.97 1194.07C1804.41 1194.81 1803.62 1195.72 1802.62 1196.8L1798.7 1200.99V1201.12H1806.82V1203H1795.81ZM1810.34 1203V1201.47L1816.1 1195.16C1816.78 1194.42 1817.33 1193.78 1817.77 1193.23C1818.21 1192.68 1818.53 1192.16 1818.74 1191.68C1818.96 1191.19 1819.07 1190.68 1819.07 1190.15C1819.07 1189.53 1818.92 1189 1818.62 1188.55C1818.33 1188.11 1817.93 1187.76 1817.43 1187.51C1816.92 1187.27 1816.36 1187.15 1815.72 1187.15C1815.05 1187.15 1814.47 1187.29 1813.97 1187.57C1813.47 1187.84 1813.09 1188.22 1812.82 1188.72C1812.55 1189.21 1812.42 1189.79 1812.42 1190.45H1810.41C1810.41 1189.43 1810.64 1188.53 1811.11 1187.76C1811.59 1186.99 1812.23 1186.39 1813.04 1185.95C1813.86 1185.52 1814.78 1185.31 1815.79 1185.31C1816.82 1185.31 1817.72 1185.52 1818.51 1185.95C1819.3 1186.39 1819.92 1186.97 1820.37 1187.7C1820.82 1188.43 1821.04 1189.25 1821.04 1190.15C1821.04 1190.79 1820.93 1191.42 1820.69 1192.03C1820.47 1192.64 1820.07 1193.32 1819.5 1194.07C1818.94 1194.81 1818.16 1195.72 1817.16 1196.8L1813.24 1200.99V1201.12H1821.35V1203H1810.34Z"
        fill="#A9448C"
        id="path1086"
      />
      <path
        d="M1795.81 1146V1144.47L1801.57 1138.16C1802.24 1137.42 1802.8 1136.78 1803.24 1136.23C1803.68 1135.68 1804 1135.16 1804.21 1134.68C1804.43 1134.19 1804.53 1133.68 1804.53 1133.15C1804.53 1132.53 1804.39 1132 1804.09 1131.55C1803.8 1131.11 1803.4 1130.76 1802.9 1130.51C1802.39 1130.27 1801.82 1130.15 1801.19 1130.15C1800.52 1130.15 1799.94 1130.29 1799.44 1130.57C1798.94 1130.84 1798.56 1131.22 1798.29 1131.72C1798.02 1132.21 1797.89 1132.79 1797.89 1133.45H1795.88C1795.88 1132.43 1796.11 1131.53 1796.58 1130.76C1797.05 1129.99 1797.7 1129.39 1798.51 1128.95C1799.33 1128.52 1800.24 1128.31 1801.26 1128.31C1802.28 1128.31 1803.19 1128.52 1803.98 1128.95C1804.77 1129.39 1805.39 1129.97 1805.84 1130.7C1806.29 1131.43 1806.51 1132.25 1806.51 1133.15C1806.51 1133.79 1806.39 1134.42 1806.16 1135.03C1805.93 1135.64 1805.54 1136.32 1804.97 1137.07C1804.41 1137.81 1803.62 1138.72 1802.62 1139.8L1798.7 1143.99V1144.12H1806.82V1146H1795.81ZM1816.24 1146.24C1815.11 1146.24 1814.11 1146.05 1813.23 1145.66C1812.35 1145.27 1811.66 1144.74 1811.14 1144.05C1810.63 1143.36 1810.35 1142.55 1810.3 1141.64H1812.45C1812.5 1142.2 1812.69 1142.68 1813.03 1143.09C1813.37 1143.5 1813.82 1143.81 1814.37 1144.03C1814.92 1144.25 1815.53 1144.36 1816.2 1144.36C1816.95 1144.36 1817.62 1144.23 1818.2 1143.97C1818.78 1143.71 1819.23 1143.35 1819.56 1142.88C1819.89 1142.41 1820.05 1141.88 1820.05 1141.26C1820.05 1140.62 1819.89 1140.05 1819.58 1139.57C1819.26 1139.07 1818.79 1138.68 1818.18 1138.41C1817.57 1138.13 1816.82 1137.99 1815.93 1137.99H1814.53V1136.11H1815.93C1816.62 1136.11 1817.23 1135.99 1817.75 1135.74C1818.28 1135.49 1818.69 1135.14 1818.99 1134.68C1819.29 1134.23 1819.44 1133.69 1819.44 1133.08C1819.44 1132.49 1819.31 1131.97 1819.05 1131.54C1818.79 1131.1 1818.42 1130.76 1817.94 1130.51C1817.47 1130.27 1816.91 1130.15 1816.27 1130.15C1815.67 1130.15 1815.1 1130.26 1814.57 1130.48C1814.04 1130.7 1813.61 1131.01 1813.27 1131.43C1812.93 1131.84 1812.75 1132.33 1812.72 1132.91H1810.68C1810.71 1131.99 1810.99 1131.19 1811.51 1130.51C1812.02 1129.81 1812.7 1129.27 1813.53 1128.89C1814.38 1128.5 1815.3 1128.31 1816.3 1128.31C1817.38 1128.31 1818.31 1128.53 1819.08 1128.96C1819.86 1129.39 1820.45 1129.97 1820.86 1130.68C1821.28 1131.39 1821.49 1132.15 1821.49 1132.98C1821.49 1133.96 1821.23 1134.8 1820.71 1135.49C1820.2 1136.18 1819.5 1136.66 1818.62 1136.93V1137.07C1819.72 1137.25 1820.59 1137.72 1821.2 1138.47C1821.82 1139.22 1822.13 1140.15 1822.13 1141.26C1822.13 1142.21 1821.88 1143.06 1821.36 1143.82C1820.85 1144.57 1820.15 1145.16 1819.26 1145.59C1818.38 1146.02 1817.37 1146.24 1816.24 1146.24Z"
        fill="#A9448C"
        id="path1088"
      />
      <path
        d="M1795.81 1077V1075.47L1801.57 1069.16C1802.24 1068.42 1802.8 1067.78 1803.24 1067.23C1803.68 1066.68 1804 1066.16 1804.21 1065.68C1804.43 1065.19 1804.53 1064.68 1804.53 1064.15C1804.53 1063.53 1804.39 1063 1804.09 1062.55C1803.8 1062.11 1803.4 1061.76 1802.9 1061.51C1802.39 1061.27 1801.82 1061.15 1801.19 1061.15C1800.52 1061.15 1799.94 1061.29 1799.44 1061.57C1798.94 1061.84 1798.56 1062.22 1798.29 1062.72C1798.02 1063.21 1797.89 1063.79 1797.89 1064.45H1795.88C1795.88 1063.43 1796.11 1062.53 1796.58 1061.76C1797.05 1060.99 1797.7 1060.39 1798.51 1059.95C1799.33 1059.52 1800.24 1059.31 1801.26 1059.31C1802.28 1059.31 1803.19 1059.52 1803.98 1059.95C1804.77 1060.39 1805.39 1060.97 1805.84 1061.7C1806.29 1062.43 1806.51 1063.25 1806.51 1064.15C1806.51 1064.79 1806.39 1065.42 1806.16 1066.03C1805.93 1066.64 1805.54 1067.32 1804.97 1068.07C1804.41 1068.81 1803.62 1069.72 1802.62 1070.8L1798.7 1074.99V1075.12H1806.82V1077H1795.81ZM1809.55 1073.42V1071.68L1817.22 1059.55H1818.49V1062.24H1817.63L1811.84 1071.41V1071.55H1822.17V1073.42H1809.55ZM1817.77 1077V1072.89V1072.08V1059.55H1819.78V1077H1817.77Z"
        fill="#A9448C"
        id="path1090"
      />
      <path
        d="M1795.81 1017V1015.47L1801.57 1009.16C1802.24 1008.42 1802.8 1007.78 1803.24 1007.23C1803.68 1006.68 1804 1006.16 1804.21 1005.68C1804.43 1005.19 1804.53 1004.68 1804.53 1004.15C1804.53 1003.53 1804.39 1003 1804.09 1002.55C1803.8 1002.11 1803.4 1001.76 1802.9 1001.51C1802.39 1001.27 1801.82 1001.15 1801.19 1001.15C1800.52 1001.15 1799.94 1001.29 1799.44 1001.57C1798.94 1001.84 1798.56 1002.22 1798.29 1002.72C1798.02 1003.21 1797.89 1003.79 1797.89 1004.45H1795.88C1795.88 1003.43 1796.11 1002.53 1796.58 1001.76C1797.05 1000.99 1797.7 1000.39 1798.51 999.955C1799.33 999.523 1800.24 999.307 1801.26 999.307C1802.28 999.307 1803.19 999.523 1803.98 999.955C1804.77 1000.39 1805.39 1000.97 1805.84 1001.7C1806.29 1002.43 1806.51 1003.25 1806.51 1004.15C1806.51 1004.79 1806.39 1005.42 1806.16 1006.03C1805.93 1006.64 1805.54 1007.32 1804.97 1008.07C1804.41 1008.81 1803.62 1009.72 1802.62 1010.8L1798.7 1014.99V1015.12H1806.82V1017H1795.81ZM1815.79 1017.24C1814.79 1017.24 1813.89 1017.04 1813.09 1016.64C1812.29 1016.24 1811.65 1015.7 1811.16 1015.01C1810.68 1014.31 1810.42 1013.52 1810.37 1012.64H1812.42C1812.5 1013.43 1812.86 1014.08 1813.49 1014.6C1814.13 1015.11 1814.9 1015.36 1815.79 1015.36C1816.51 1015.36 1817.14 1015.2 1817.7 1014.86C1818.26 1014.53 1818.7 1014.07 1819.02 1013.48C1819.35 1012.89 1819.51 1012.22 1819.51 1011.48C1819.51 1010.72 1819.34 1010.04 1819.01 1009.44C1818.68 1008.84 1818.22 1008.36 1817.64 1008.02C1817.06 1007.67 1816.4 1007.49 1815.66 1007.49C1815.12 1007.48 1814.57 1007.57 1814.01 1007.74C1813.45 1007.9 1812.99 1008.11 1812.62 1008.38L1810.64 1008.14L1811.7 999.545H1820.77V1001.42H1813.47L1812.86 1006.57H1812.96C1813.32 1006.28 1813.77 1006.05 1814.31 1005.86C1814.85 1005.67 1815.41 1005.58 1816 1005.58C1817.07 1005.58 1818.02 1005.84 1818.85 1006.35C1819.69 1006.85 1820.35 1007.55 1820.83 1008.43C1821.31 1009.31 1821.55 1010.31 1821.55 1011.44C1821.55 1012.56 1821.3 1013.55 1820.8 1014.43C1820.31 1015.3 1819.63 1015.98 1818.76 1016.49C1817.89 1016.99 1816.9 1017.24 1815.79 1017.24Z"
        fill="#A9448C"
        id="path1092"
      />
      <path
        d="M1795.81 960V958.466L1801.57 952.159C1802.24 951.42 1802.8 950.778 1803.24 950.233C1803.68 949.682 1804 949.165 1804.21 948.682C1804.43 948.193 1804.53 947.682 1804.53 947.148C1804.53 946.534 1804.39 946.003 1804.09 945.554C1803.8 945.105 1803.4 944.759 1802.9 944.514C1802.39 944.27 1801.82 944.148 1801.19 944.148C1800.52 944.148 1799.94 944.287 1799.44 944.565C1798.94 944.838 1798.56 945.222 1798.29 945.716C1798.02 946.21 1797.89 946.79 1797.89 947.455H1795.88C1795.88 946.432 1796.11 945.534 1796.58 944.761C1797.05 943.989 1797.7 943.386 1798.51 942.955C1799.33 942.523 1800.24 942.307 1801.26 942.307C1802.28 942.307 1803.19 942.523 1803.98 942.955C1804.77 943.386 1805.39 943.969 1805.84 944.702C1806.29 945.435 1806.51 946.25 1806.51 947.148C1806.51 947.79 1806.39 948.418 1806.16 949.031C1805.93 949.639 1805.54 950.318 1804.97 951.068C1804.41 951.812 1803.62 952.722 1802.62 953.795L1798.7 957.989V958.125H1806.82V960H1795.81ZM1816.13 960.239C1815.42 960.227 1814.7 960.091 1813.99 959.83C1813.27 959.568 1812.62 959.128 1812.03 958.509C1811.43 957.884 1810.96 957.04 1810.6 955.977C1810.24 954.909 1810.07 953.568 1810.07 951.955C1810.07 950.409 1810.21 949.04 1810.5 947.847C1810.79 946.648 1811.21 945.639 1811.76 944.821C1812.31 943.997 1812.98 943.372 1813.76 942.946C1814.54 942.52 1815.42 942.307 1816.41 942.307C1817.38 942.307 1818.25 942.503 1819.01 942.895C1819.78 943.281 1820.41 943.821 1820.89 944.514C1821.37 945.207 1821.68 946.006 1821.83 946.909H1819.75C1819.55 946.125 1819.18 945.474 1818.62 944.957C1818.07 944.44 1817.33 944.182 1816.41 944.182C1815.05 944.182 1813.99 944.77 1813.21 945.946C1812.44 947.122 1812.05 948.773 1812.04 950.898H1812.18C1812.5 950.415 1812.88 950.003 1813.31 949.662C1813.76 949.315 1814.24 949.048 1814.78 948.861C1815.31 948.673 1815.88 948.58 1816.47 948.58C1817.47 948.58 1818.39 948.83 1819.22 949.33C1820.05 949.824 1820.71 950.509 1821.21 951.384C1821.71 952.253 1821.96 953.25 1821.96 954.375C1821.96 955.455 1821.72 956.443 1821.24 957.341C1820.76 958.233 1820.08 958.943 1819.2 959.472C1818.33 959.994 1817.31 960.25 1816.13 960.239ZM1816.13 958.364C1816.85 958.364 1817.49 958.185 1818.06 957.827C1818.63 957.469 1819.09 956.989 1819.41 956.386C1819.75 955.784 1819.92 955.114 1819.92 954.375C1819.92 953.653 1819.76 952.997 1819.43 952.406C1819.11 951.81 1818.67 951.335 1818.11 950.983C1817.55 950.631 1816.92 950.455 1816.2 950.455C1815.66 950.455 1815.16 950.562 1814.69 950.778C1814.23 950.989 1813.82 951.278 1813.47 951.648C1813.12 952.017 1812.85 952.44 1812.65 952.918C1812.45 953.389 1812.35 953.886 1812.35 954.409C1812.35 955.102 1812.51 955.75 1812.84 956.352C1813.16 956.955 1813.61 957.44 1814.18 957.81C1814.76 958.179 1815.41 958.364 1816.13 958.364Z"
        fill="#A9448C"
        id="path1094"
      />
      <path
        d="M1795.81 885V883.466L1801.57 877.159C1802.24 876.42 1802.8 875.778 1803.24 875.233C1803.68 874.682 1804 874.165 1804.21 873.682C1804.43 873.193 1804.53 872.682 1804.53 872.148C1804.53 871.534 1804.39 871.003 1804.09 870.554C1803.8 870.105 1803.4 869.759 1802.9 869.514C1802.39 869.27 1801.82 869.148 1801.19 869.148C1800.52 869.148 1799.94 869.287 1799.44 869.565C1798.94 869.838 1798.56 870.222 1798.29 870.716C1798.02 871.21 1797.89 871.79 1797.89 872.455H1795.88C1795.88 871.432 1796.11 870.534 1796.58 869.761C1797.05 868.989 1797.7 868.386 1798.51 867.955C1799.33 867.523 1800.24 867.307 1801.26 867.307C1802.28 867.307 1803.19 867.523 1803.98 867.955C1804.77 868.386 1805.39 868.969 1805.84 869.702C1806.29 870.435 1806.51 871.25 1806.51 872.148C1806.51 872.79 1806.39 873.418 1806.16 874.031C1805.93 874.639 1805.54 875.318 1804.97 876.068C1804.41 876.812 1803.62 877.722 1802.62 878.795L1798.7 882.989V883.125H1806.82V885H1795.81ZM1810.88 885L1818.69 869.557V869.42H1809.69V867.545H1820.87V869.523L1813.1 885H1810.88Z"
        fill="#A9448C"
        id="path1096"
      />
      <path
        d="M1795.81 825V823.466L1801.57 817.159C1802.24 816.42 1802.8 815.778 1803.24 815.233C1803.68 814.682 1804 814.165 1804.21 813.682C1804.43 813.193 1804.53 812.682 1804.53 812.148C1804.53 811.534 1804.39 811.003 1804.09 810.554C1803.8 810.105 1803.4 809.759 1802.9 809.514C1802.39 809.27 1801.82 809.148 1801.19 809.148C1800.52 809.148 1799.94 809.287 1799.44 809.565C1798.94 809.838 1798.56 810.222 1798.29 810.716C1798.02 811.21 1797.89 811.79 1797.89 812.455H1795.88C1795.88 811.432 1796.11 810.534 1796.58 809.761C1797.05 808.989 1797.7 808.386 1798.51 807.955C1799.33 807.523 1800.24 807.307 1801.26 807.307C1802.28 807.307 1803.19 807.523 1803.98 807.955C1804.77 808.386 1805.39 808.969 1805.84 809.702C1806.29 810.435 1806.51 811.25 1806.51 812.148C1806.51 812.79 1806.39 813.418 1806.16 814.031C1805.93 814.639 1805.54 815.318 1804.97 816.068C1804.41 816.812 1803.62 817.722 1802.62 818.795L1798.7 822.989V823.125H1806.82V825H1795.81ZM1815.93 825.239C1814.76 825.239 1813.72 825.031 1812.83 824.616C1811.93 824.196 1811.24 823.619 1810.74 822.886C1810.24 822.148 1809.99 821.307 1810 820.364C1809.99 819.625 1810.14 818.943 1810.43 818.318C1810.73 817.687 1811.13 817.162 1811.64 816.741C1812.16 816.315 1812.74 816.045 1813.37 815.932V815.83C1812.54 815.614 1811.87 815.145 1811.38 814.423C1810.88 813.696 1810.64 812.869 1810.64 811.943C1810.64 811.057 1810.86 810.264 1811.32 809.565C1811.77 808.866 1812.4 808.315 1813.19 807.912C1813.99 807.509 1814.91 807.307 1815.93 807.307C1816.94 807.307 1817.84 807.509 1818.64 807.912C1819.43 808.315 1820.06 808.866 1820.51 809.565C1820.97 810.264 1821.21 811.057 1821.21 811.943C1821.21 812.869 1820.95 813.696 1820.45 814.423C1819.96 815.145 1819.3 815.614 1818.49 815.83V815.932C1819.12 816.045 1819.68 816.315 1820.19 816.741C1820.7 817.162 1821.1 817.687 1821.4 818.318C1821.7 818.943 1821.86 819.625 1821.86 820.364C1821.86 821.307 1821.6 822.148 1821.09 822.886C1820.59 823.619 1819.9 824.196 1819.01 824.616C1818.12 825.031 1817.09 825.239 1815.93 825.239ZM1815.93 823.364C1816.72 823.364 1817.4 823.236 1817.97 822.98C1818.55 822.724 1818.99 822.364 1819.3 821.898C1819.62 821.432 1819.78 820.886 1819.78 820.261C1819.78 819.602 1819.61 819.02 1819.27 818.514C1818.93 818.009 1818.48 817.611 1817.9 817.321C1817.32 817.031 1816.67 816.886 1815.93 816.886C1815.18 816.886 1814.52 817.031 1813.93 817.321C1813.36 817.611 1812.9 818.009 1812.56 818.514C1812.23 819.02 1812.07 819.602 1812.08 820.261C1812.07 820.886 1812.22 821.432 1812.53 821.898C1812.84 822.364 1813.29 822.724 1813.87 822.98C1814.45 823.236 1815.13 823.364 1815.93 823.364ZM1815.93 815.08C1816.55 815.08 1817.11 814.955 1817.59 814.705C1818.08 814.455 1818.46 814.105 1818.74 813.656C1819.02 813.207 1819.16 812.682 1819.17 812.08C1819.16 811.489 1819.02 810.974 1818.75 810.537C1818.48 810.094 1818.1 809.753 1817.62 809.514C1817.13 809.27 1816.57 809.148 1815.93 809.148C1815.28 809.148 1814.7 809.27 1814.22 809.514C1813.73 809.753 1813.35 810.094 1813.08 810.537C1812.82 810.974 1812.68 811.489 1812.69 812.08C1812.68 812.682 1812.82 813.207 1813.09 813.656C1813.37 814.105 1813.75 814.455 1814.24 814.705C1814.73 814.955 1815.29 815.08 1815.93 815.08Z"
        fill="#A9448C"
        id="path1098"
      />
      <path
        d="M1794.81 728V726.466L1800.57 720.159C1801.24 719.42 1801.8 718.778 1802.24 718.233C1802.68 717.682 1803 717.165 1803.21 716.682C1803.43 716.193 1803.53 715.682 1803.53 715.148C1803.53 714.534 1803.39 714.003 1803.09 713.554C1802.8 713.105 1802.4 712.759 1801.9 712.514C1801.39 712.27 1800.82 712.148 1800.19 712.148C1799.52 712.148 1798.94 712.287 1798.44 712.565C1797.94 712.838 1797.56 713.222 1797.29 713.716C1797.02 714.21 1796.89 714.79 1796.89 715.455H1794.88C1794.88 714.432 1795.11 713.534 1795.58 712.761C1796.05 711.989 1796.7 711.386 1797.51 710.955C1798.33 710.523 1799.24 710.307 1800.26 710.307C1801.28 710.307 1802.19 710.523 1802.98 710.955C1803.77 711.386 1804.39 711.969 1804.84 712.702C1805.29 713.435 1805.51 714.25 1805.51 715.148C1805.51 715.79 1805.39 716.418 1805.16 717.031C1804.93 717.639 1804.54 718.318 1803.97 719.068C1803.41 719.812 1802.62 720.722 1801.62 721.795L1797.7 725.989V726.125H1805.82V728H1794.81ZM1814.89 710.307C1815.61 710.312 1816.33 710.449 1817.04 710.716C1817.76 710.983 1818.41 711.426 1819 712.045C1819.59 712.659 1820.07 713.497 1820.43 714.56C1820.78 715.622 1820.96 716.955 1820.96 718.557C1820.96 720.108 1820.82 721.486 1820.52 722.69C1820.23 723.889 1819.81 724.901 1819.26 725.724C1818.71 726.548 1818.05 727.173 1817.26 727.599C1816.49 728.026 1815.61 728.239 1814.62 728.239C1813.64 728.239 1812.77 728.045 1812.01 727.659C1811.24 727.267 1810.62 726.724 1810.13 726.031C1809.65 725.332 1809.34 724.523 1809.2 723.602H1811.28C1811.47 724.403 1811.84 725.065 1812.4 725.588C1812.96 726.105 1813.7 726.364 1814.62 726.364C1815.97 726.364 1817.03 725.776 1817.81 724.599C1818.59 723.423 1818.99 721.761 1818.99 719.614H1818.85C1818.53 720.091 1818.15 720.503 1817.72 720.849C1817.28 721.196 1816.79 721.463 1816.26 721.651C1815.72 721.838 1815.16 721.932 1814.55 721.932C1813.55 721.932 1812.64 721.685 1811.8 721.19C1810.97 720.69 1810.31 720.006 1809.81 719.136C1809.31 718.261 1809.07 717.261 1809.07 716.136C1809.07 715.068 1809.3 714.091 1809.78 713.205C1810.26 712.312 1810.94 711.602 1811.81 711.074C1812.68 710.545 1813.71 710.29 1814.89 710.307ZM1814.89 712.182C1814.18 712.182 1813.53 712.361 1812.96 712.719C1812.39 713.071 1811.94 713.548 1811.61 714.151C1811.28 714.747 1811.11 715.409 1811.11 716.136C1811.11 716.864 1811.27 717.526 1811.59 718.122C1811.91 718.713 1812.35 719.185 1812.91 719.537C1813.47 719.884 1814.11 720.057 1814.83 720.057C1815.37 720.057 1815.87 719.952 1816.34 719.741C1816.8 719.526 1817.21 719.233 1817.55 718.864C1817.91 718.489 1818.18 718.065 1818.38 717.594C1818.58 717.116 1818.68 716.619 1818.68 716.102C1818.68 715.42 1818.51 714.781 1818.18 714.185C1817.86 713.588 1817.41 713.105 1816.84 712.736C1816.27 712.366 1815.62 712.182 1814.89 712.182Z"
        fill="#A9448C"
        id="path1100"
      />
      <path
        d="M1800.7 553.239C1799.58 553.239 1798.58 553.045 1797.7 552.659C1796.82 552.273 1796.13 551.736 1795.61 551.048C1795.1 550.355 1794.82 549.551 1794.77 548.636H1796.92C1796.97 549.199 1797.16 549.685 1797.5 550.094C1797.84 550.497 1798.29 550.81 1798.84 551.031C1799.39 551.253 1800 551.364 1800.67 551.364C1801.42 551.364 1802.09 551.233 1802.66 550.972C1803.24 550.71 1803.7 550.347 1804.03 549.881C1804.36 549.415 1804.52 548.875 1804.52 548.261C1804.52 547.619 1804.36 547.054 1804.05 546.565C1803.73 546.071 1803.26 545.685 1802.65 545.406C1802.03 545.128 1801.28 544.989 1800.4 544.989H1799V543.114H1800.4C1801.09 543.114 1801.7 542.989 1802.22 542.739C1802.75 542.489 1803.16 542.136 1803.46 541.682C1803.76 541.227 1803.91 540.693 1803.91 540.08C1803.91 539.489 1803.78 538.974 1803.52 538.537C1803.26 538.099 1802.89 537.759 1802.41 537.514C1801.94 537.27 1801.38 537.148 1800.74 537.148C1800.14 537.148 1799.57 537.259 1799.03 537.48C1798.51 537.696 1798.07 538.011 1797.74 538.426C1797.4 538.835 1797.22 539.33 1797.19 539.909H1795.15C1795.18 538.994 1795.46 538.193 1795.97 537.506C1796.49 536.812 1797.17 536.273 1798 535.886C1798.84 535.5 1799.77 535.307 1800.77 535.307C1801.85 535.307 1802.78 535.526 1803.55 535.963C1804.32 536.395 1804.92 536.966 1805.33 537.676C1805.75 538.386 1805.95 539.153 1805.95 539.977C1805.95 540.96 1805.7 541.798 1805.18 542.491C1804.67 543.185 1803.97 543.665 1803.09 543.932V544.068C1804.19 544.25 1805.05 544.719 1805.67 545.474C1806.29 546.224 1806.6 547.153 1806.6 548.261C1806.6 549.21 1806.34 550.062 1805.83 550.818C1805.32 551.568 1804.62 552.159 1803.73 552.591C1802.84 553.023 1801.84 553.239 1800.7 553.239ZM1815.78 553.239C1814.5 553.239 1813.4 552.889 1812.5 552.19C1811.6 551.486 1810.91 550.466 1810.43 549.131C1809.95 547.79 1809.71 546.17 1809.71 544.273C1809.71 542.386 1809.95 540.776 1810.43 539.44C1810.91 538.099 1811.61 537.077 1812.51 536.372C1813.42 535.662 1814.51 535.307 1815.78 535.307C1817.05 535.307 1818.14 535.662 1819.05 536.372C1819.95 537.077 1820.65 538.099 1821.12 539.44C1821.61 540.776 1821.85 542.386 1821.85 544.273C1821.85 546.17 1821.61 547.79 1821.13 549.131C1820.66 550.466 1819.97 551.486 1819.06 552.19C1818.16 552.889 1817.07 553.239 1815.78 553.239ZM1815.78 551.364C1817.05 551.364 1818.04 550.75 1818.75 549.523C1819.45 548.295 1819.8 546.545 1819.8 544.273C1819.8 542.761 1819.64 541.474 1819.32 540.412C1819 539.349 1818.54 538.54 1817.94 537.983C1817.34 537.426 1816.62 537.148 1815.78 537.148C1814.52 537.148 1813.53 537.77 1812.82 539.014C1812.11 540.253 1811.76 542.006 1811.76 544.273C1811.76 545.784 1811.92 547.068 1812.24 548.125C1812.55 549.182 1813.01 549.986 1813.61 550.537C1814.21 551.088 1814.93 551.364 1815.78 551.364Z"
        fill="#A9448C"
        id="path1102"
      />
      <path
        d="M1998.94 1346.55V1364H1996.83V1348.76H1996.73L1992.47 1351.59V1349.44L1996.83 1346.55H1998.94ZM2010.1 1346.55V1364H2007.99V1348.76H2007.88L2003.62 1351.59V1349.44L2007.99 1346.55H2010.1Z"
        fill="#A9448C"
        id="path1104"
      />
      <path
        d="M1972.94 1559.55V1577H1970.83V1561.76H1970.73L1966.47 1564.59V1562.44L1970.83 1559.55H1972.94ZM1977.96 1577V1575.47L1983.72 1569.16C1984.4 1568.42 1984.96 1567.78 1985.39 1567.23C1985.83 1566.68 1986.16 1566.16 1986.37 1565.68C1986.58 1565.19 1986.69 1564.68 1986.69 1564.15C1986.69 1563.53 1986.54 1563 1986.25 1562.55C1985.96 1562.11 1985.56 1561.76 1985.05 1561.51C1984.55 1561.27 1983.98 1561.15 1983.35 1561.15C1982.68 1561.15 1982.09 1561.29 1981.59 1561.57C1981.1 1561.84 1980.72 1562.22 1980.44 1562.72C1980.18 1563.21 1980.04 1563.79 1980.04 1564.45H1978.03C1978.03 1563.43 1978.27 1562.53 1978.74 1561.76C1979.21 1560.99 1979.85 1560.39 1980.66 1559.95C1981.48 1559.52 1982.4 1559.31 1983.42 1559.31C1984.44 1559.31 1985.35 1559.52 1986.14 1559.95C1986.93 1560.39 1987.55 1560.97 1987.99 1561.7C1988.44 1562.43 1988.67 1563.25 1988.67 1564.15C1988.67 1564.79 1988.55 1565.42 1988.32 1566.03C1988.09 1566.64 1987.69 1567.32 1987.12 1568.07C1986.56 1568.81 1985.78 1569.72 1984.78 1570.8L1980.86 1574.99V1575.12H1988.97V1577H1977.96Z"
        fill="#A9448C"
        id="path1106"
      />
      <path
        d="M1972.94 1661.55V1679H1970.83V1663.76H1970.73L1966.47 1666.59V1664.44L1970.83 1661.55H1972.94ZM1983.86 1679.24C1982.74 1679.24 1981.73 1679.05 1980.85 1678.66C1979.98 1678.27 1979.28 1677.74 1978.76 1677.05C1978.25 1676.36 1977.97 1675.55 1977.93 1674.64H1980.08C1980.12 1675.2 1980.32 1675.68 1980.66 1676.09C1981 1676.5 1981.44 1676.81 1981.99 1677.03C1982.55 1677.25 1983.16 1677.36 1983.83 1677.36C1984.58 1677.36 1985.24 1677.23 1985.82 1676.97C1986.4 1676.71 1986.86 1676.35 1987.18 1675.88C1987.51 1675.41 1987.68 1674.88 1987.68 1674.26C1987.68 1673.62 1987.52 1673.05 1987.2 1672.57C1986.88 1672.07 1986.42 1671.68 1985.8 1671.41C1985.19 1671.13 1984.44 1670.99 1983.55 1670.99H1982.16V1669.11H1983.55C1984.25 1669.11 1984.86 1668.99 1985.38 1668.74C1985.91 1668.49 1986.32 1668.14 1986.61 1667.68C1986.91 1667.23 1987.07 1666.69 1987.07 1666.08C1987.07 1665.49 1986.93 1664.97 1986.67 1664.54C1986.41 1664.1 1986.04 1663.76 1985.57 1663.51C1985.09 1663.27 1984.54 1663.15 1983.89 1663.15C1983.29 1663.15 1982.72 1663.26 1982.19 1663.48C1981.66 1663.7 1981.23 1664.01 1980.89 1664.43C1980.56 1664.84 1980.38 1665.33 1980.35 1665.91H1978.3C1978.34 1664.99 1978.61 1664.19 1979.13 1663.51C1979.65 1662.81 1980.32 1662.27 1981.16 1661.89C1982 1661.5 1982.92 1661.31 1983.93 1661.31C1985.01 1661.31 1985.93 1661.53 1986.71 1661.96C1987.48 1662.39 1988.07 1662.97 1988.49 1663.68C1988.9 1664.39 1989.11 1665.15 1989.11 1665.98C1989.11 1666.96 1988.85 1667.8 1988.34 1668.49C1987.82 1669.18 1987.13 1669.66 1986.25 1669.93V1670.07C1987.35 1670.25 1988.21 1670.72 1988.83 1671.47C1989.45 1672.22 1989.76 1673.15 1989.76 1674.26C1989.76 1675.21 1989.5 1676.06 1988.98 1676.82C1988.47 1677.57 1987.77 1678.16 1986.89 1678.59C1986 1679.02 1984.99 1679.24 1983.86 1679.24Z"
        fill="#A9448C"
        id="path1108"
      />
      <path
        d="M1956.94 1760.55V1778H1954.83V1762.76H1954.73L1950.47 1765.59V1763.44L1954.83 1760.55H1956.94ZM1961.55 1774.42V1772.68L1969.22 1760.55H1970.49V1763.24H1969.63L1963.84 1772.41V1772.55H1974.17V1774.42H1961.55ZM1969.77 1778V1773.89V1773.08V1760.55H1971.78V1778H1969.77Z"
        fill="#A9448C"
        id="path1110"
      />
      <path
        d="M1801.94 1836.55V1854H1799.83V1838.76H1799.73L1795.47 1841.59V1839.44L1799.83 1836.55H1801.94ZM1812.42 1854.24C1811.42 1854.24 1810.52 1854.04 1809.72 1853.64C1808.91 1853.24 1808.27 1852.7 1807.79 1852.01C1807.31 1851.31 1807.04 1850.52 1807 1849.64H1809.04C1809.12 1850.43 1809.48 1851.08 1810.12 1851.6C1810.76 1852.11 1811.53 1852.36 1812.42 1852.36C1813.13 1852.36 1813.77 1852.2 1814.33 1851.86C1814.89 1851.53 1815.33 1851.07 1815.65 1850.48C1815.97 1849.89 1816.13 1849.22 1816.13 1848.48C1816.13 1847.72 1815.97 1847.04 1815.63 1846.44C1815.3 1845.84 1814.85 1845.36 1814.27 1845.02C1813.69 1844.67 1813.03 1844.49 1812.28 1844.49C1811.75 1844.48 1811.2 1844.57 1810.64 1844.74C1810.07 1844.9 1809.61 1845.11 1809.25 1845.38L1807.27 1845.14L1808.33 1836.55H1817.39V1838.42H1810.1L1809.49 1843.57H1809.59C1809.95 1843.28 1810.39 1843.05 1810.93 1842.86C1811.47 1842.67 1812.04 1842.58 1812.62 1842.58C1813.69 1842.58 1814.64 1842.84 1815.48 1843.35C1816.32 1843.85 1816.98 1844.55 1817.45 1845.43C1817.94 1846.31 1818.18 1847.31 1818.18 1848.44C1818.18 1849.56 1817.93 1850.55 1817.43 1851.43C1816.93 1852.3 1816.25 1852.98 1815.38 1853.49C1814.51 1853.99 1813.53 1854.24 1812.42 1854.24Z"
        fill="#A9448C"
        id="path1112"
      />
      <path
        d="M1801.94 1765.55V1783H1799.83V1767.76H1799.73L1795.47 1770.59V1768.44L1799.83 1765.55H1801.94ZM1812.76 1783.24C1812.04 1783.23 1811.33 1783.09 1810.61 1782.83C1809.89 1782.57 1809.24 1782.13 1808.65 1781.51C1808.06 1780.88 1807.59 1780.04 1807.23 1778.98C1806.87 1777.91 1806.69 1776.57 1806.69 1774.95C1806.69 1773.41 1806.84 1772.04 1807.12 1770.85C1807.41 1769.65 1807.84 1768.64 1808.39 1767.82C1808.94 1767 1809.6 1766.37 1810.38 1765.95C1811.16 1765.52 1812.05 1765.31 1813.03 1765.31C1814.01 1765.31 1814.88 1765.5 1815.64 1765.89C1816.41 1766.28 1817.03 1766.82 1817.51 1767.51C1818 1768.21 1818.31 1769.01 1818.45 1769.91H1816.37C1816.18 1769.12 1815.8 1768.47 1815.25 1767.96C1814.69 1767.44 1813.95 1767.18 1813.03 1767.18C1811.68 1767.18 1810.61 1767.77 1809.84 1768.95C1809.06 1770.12 1808.67 1771.77 1808.67 1773.9H1808.8C1809.12 1773.41 1809.5 1773 1809.94 1772.66C1810.38 1772.32 1810.87 1772.05 1811.4 1771.86C1811.94 1771.67 1812.5 1771.58 1813.1 1771.58C1814.1 1771.58 1815.01 1771.83 1815.84 1772.33C1816.67 1772.82 1817.34 1773.51 1817.84 1774.38C1818.34 1775.25 1818.59 1776.25 1818.59 1777.38C1818.59 1778.45 1818.35 1779.44 1817.86 1780.34C1817.38 1781.23 1816.7 1781.94 1815.83 1782.47C1814.96 1782.99 1813.93 1783.25 1812.76 1783.24ZM1812.76 1781.36C1813.47 1781.36 1814.12 1781.18 1814.68 1780.83C1815.26 1780.47 1815.71 1779.99 1816.04 1779.39C1816.38 1778.78 1816.54 1778.11 1816.54 1777.38C1816.54 1776.65 1816.38 1776 1816.06 1775.41C1815.74 1774.81 1815.3 1774.34 1814.74 1773.98C1814.18 1773.63 1813.54 1773.45 1812.83 1773.45C1812.29 1773.45 1811.78 1773.56 1811.32 1773.78C1810.85 1773.99 1810.44 1774.28 1810.09 1774.65C1809.74 1775.02 1809.47 1775.44 1809.27 1775.92C1809.07 1776.39 1808.97 1776.89 1808.97 1777.41C1808.97 1778.1 1809.14 1778.75 1809.46 1779.35C1809.79 1779.95 1810.24 1780.44 1810.81 1780.81C1811.38 1781.18 1812.03 1781.36 1812.76 1781.36Z"
        fill="#A9448C"
        id="path1114"
      />
      <path
        d="M1801.94 1706.55V1724H1799.83V1708.76H1799.73L1795.47 1711.59V1709.44L1799.83 1706.55H1801.94ZM1807.51 1724L1815.32 1708.56V1708.42H1806.32V1706.55H1817.5V1708.52L1809.72 1724H1807.51Z"
        fill="#A9448C"
        id="path1116"
      />
      <path
        d="M1801.94 1638.55V1656H1799.83V1640.76H1799.73L1795.47 1643.59V1641.44L1799.83 1638.55H1801.94ZM1812.55 1656.24C1811.38 1656.24 1810.35 1656.03 1809.45 1655.62C1808.56 1655.2 1807.86 1654.62 1807.36 1653.89C1806.86 1653.15 1806.62 1652.31 1806.62 1651.36C1806.62 1650.62 1806.76 1649.94 1807.06 1649.32C1807.35 1648.69 1807.76 1648.16 1808.27 1647.74C1808.78 1647.32 1809.36 1647.05 1810 1646.93V1646.83C1809.16 1646.61 1808.5 1646.14 1808 1645.42C1807.51 1644.7 1807.26 1643.87 1807.27 1642.94C1807.26 1642.06 1807.49 1641.26 1807.94 1640.57C1808.4 1639.87 1809.02 1639.32 1809.82 1638.91C1810.62 1638.51 1811.53 1638.31 1812.55 1638.31C1813.57 1638.31 1814.47 1638.51 1815.26 1638.91C1816.06 1639.32 1816.68 1639.87 1817.14 1640.57C1817.6 1641.26 1817.83 1642.06 1817.84 1642.94C1817.83 1643.87 1817.58 1644.7 1817.08 1645.42C1816.59 1646.14 1815.93 1646.61 1815.11 1646.83V1646.93C1815.74 1647.05 1816.31 1647.32 1816.82 1647.74C1817.32 1648.16 1817.72 1648.69 1818.03 1649.32C1818.33 1649.94 1818.48 1650.62 1818.49 1651.36C1818.48 1652.31 1818.22 1653.15 1817.72 1653.89C1817.22 1654.62 1816.52 1655.2 1815.63 1655.62C1814.74 1656.03 1813.72 1656.24 1812.55 1656.24ZM1812.55 1654.36C1813.34 1654.36 1814.03 1654.24 1814.6 1653.98C1815.17 1653.72 1815.62 1653.36 1815.93 1652.9C1816.24 1652.43 1816.4 1651.89 1816.41 1651.26C1816.4 1650.6 1816.23 1650.02 1815.89 1649.51C1815.56 1649.01 1815.1 1648.61 1814.52 1648.32C1813.95 1648.03 1813.29 1647.89 1812.55 1647.89C1811.81 1647.89 1811.14 1648.03 1810.56 1648.32C1809.98 1648.61 1809.52 1649.01 1809.19 1649.51C1808.86 1650.02 1808.7 1650.6 1808.7 1651.26C1808.7 1651.89 1808.85 1652.43 1809.15 1652.9C1809.47 1653.36 1809.91 1653.72 1810.49 1653.98C1811.07 1654.24 1811.76 1654.36 1812.55 1654.36ZM1812.55 1646.08C1813.18 1646.08 1813.73 1645.95 1814.22 1645.7C1814.7 1645.45 1815.09 1645.11 1815.37 1644.66C1815.64 1644.21 1815.79 1643.68 1815.79 1643.08C1815.79 1642.49 1815.65 1641.97 1815.38 1641.54C1815.1 1641.09 1814.72 1640.75 1814.24 1640.51C1813.76 1640.27 1813.2 1640.15 1812.55 1640.15C1811.9 1640.15 1811.33 1640.27 1810.84 1640.51C1810.35 1640.75 1809.97 1641.09 1809.71 1641.54C1809.44 1641.97 1809.31 1642.49 1809.32 1643.08C1809.31 1643.68 1809.44 1644.21 1809.72 1644.66C1809.99 1645.11 1810.38 1645.45 1810.87 1645.7C1811.36 1645.95 1811.92 1646.08 1812.55 1646.08Z"
        fill="#A9448C"
        id="path1118"
      />
      <path
        d="M1800.94 1553.55V1571H1798.83V1555.76H1798.73L1794.47 1558.59V1556.44L1798.83 1553.55H1800.94ZM1811.52 1553.31C1812.24 1553.31 1812.95 1553.45 1813.67 1553.72C1814.38 1553.98 1815.04 1554.43 1815.63 1555.05C1816.22 1555.66 1816.69 1556.5 1817.05 1557.56C1817.41 1558.62 1817.59 1559.95 1817.59 1561.56C1817.59 1563.11 1817.44 1564.49 1817.14 1565.69C1816.86 1566.89 1816.43 1567.9 1815.88 1568.72C1815.34 1569.55 1814.67 1570.17 1813.89 1570.6C1813.11 1571.03 1812.23 1571.24 1811.25 1571.24C1810.27 1571.24 1809.4 1571.05 1808.63 1570.66C1807.87 1570.27 1807.24 1569.72 1806.76 1569.03C1806.27 1568.33 1805.96 1567.52 1805.83 1566.6H1807.91C1808.09 1567.4 1808.47 1568.07 1809.02 1568.59C1809.59 1569.11 1810.33 1569.36 1811.25 1569.36C1812.59 1569.36 1813.66 1568.78 1814.43 1567.6C1815.22 1566.42 1815.61 1564.76 1815.61 1562.61H1815.47C1815.16 1563.09 1814.78 1563.5 1814.34 1563.85C1813.9 1564.2 1813.42 1564.46 1812.88 1564.65C1812.35 1564.84 1811.78 1564.93 1811.18 1564.93C1810.18 1564.93 1809.26 1564.68 1808.43 1564.19C1807.6 1563.69 1806.93 1563.01 1806.43 1562.14C1805.94 1561.26 1805.69 1560.26 1805.69 1559.14C1805.69 1558.07 1805.93 1557.09 1806.41 1556.2C1806.89 1555.31 1807.57 1554.6 1808.43 1554.07C1809.31 1553.55 1810.34 1553.29 1811.52 1553.31ZM1811.52 1555.18C1810.8 1555.18 1810.16 1555.36 1809.59 1555.72C1809.02 1556.07 1808.57 1556.55 1808.23 1557.15C1807.9 1557.75 1807.74 1558.41 1807.74 1559.14C1807.74 1559.86 1807.89 1560.53 1808.21 1561.12C1808.54 1561.71 1808.98 1562.18 1809.53 1562.54C1810.1 1562.88 1810.74 1563.06 1811.45 1563.06C1811.99 1563.06 1812.49 1562.95 1812.96 1562.74C1813.43 1562.53 1813.83 1562.23 1814.18 1561.86C1814.53 1561.49 1814.81 1561.07 1815.01 1560.59C1815.2 1560.12 1815.3 1559.62 1815.3 1559.1C1815.3 1558.42 1815.14 1557.78 1814.81 1557.18C1814.49 1556.59 1814.04 1556.11 1813.46 1555.74C1812.89 1555.37 1812.25 1555.18 1811.52 1555.18Z"
        fill="#A9448C"
        id="path1120"
      />
      <path
        d="M1795.81 1379V1377.47L1801.57 1371.16C1802.24 1370.42 1802.8 1369.78 1803.24 1369.23C1803.68 1368.68 1804 1368.16 1804.21 1367.68C1804.43 1367.19 1804.53 1366.68 1804.53 1366.15C1804.53 1365.53 1804.39 1365 1804.09 1364.55C1803.8 1364.11 1803.4 1363.76 1802.9 1363.51C1802.39 1363.27 1801.82 1363.15 1801.19 1363.15C1800.52 1363.15 1799.94 1363.29 1799.44 1363.57C1798.94 1363.84 1798.56 1364.22 1798.29 1364.72C1798.02 1365.21 1797.89 1365.79 1797.89 1366.45H1795.88C1795.88 1365.43 1796.11 1364.53 1796.58 1363.76C1797.05 1362.99 1797.7 1362.39 1798.51 1361.95C1799.33 1361.52 1800.24 1361.31 1801.26 1361.31C1802.28 1361.31 1803.19 1361.52 1803.98 1361.95C1804.77 1362.39 1805.39 1362.97 1805.84 1363.7C1806.29 1364.43 1806.51 1365.25 1806.51 1366.15C1806.51 1366.79 1806.39 1367.42 1806.16 1368.03C1805.93 1368.64 1805.54 1369.32 1804.97 1370.07C1804.41 1370.81 1803.62 1371.72 1802.62 1372.8L1798.7 1376.99V1377.12H1806.82V1379H1795.81ZM1816.03 1379.24C1814.75 1379.24 1813.65 1378.89 1812.75 1378.19C1811.85 1377.49 1811.16 1376.47 1810.68 1375.13C1810.2 1373.79 1809.96 1372.17 1809.96 1370.27C1809.96 1368.39 1810.2 1366.78 1810.68 1365.44C1811.16 1364.1 1811.86 1363.08 1812.76 1362.37C1813.67 1361.66 1814.76 1361.31 1816.03 1361.31C1817.3 1361.31 1818.39 1361.66 1819.3 1362.37C1820.2 1363.08 1820.9 1364.1 1821.38 1365.44C1821.86 1366.78 1822.1 1368.39 1822.1 1370.27C1822.1 1372.17 1821.86 1373.79 1821.38 1375.13C1820.91 1376.47 1820.22 1377.49 1819.31 1378.19C1818.41 1378.89 1817.32 1379.24 1816.03 1379.24ZM1816.03 1377.36C1817.3 1377.36 1818.29 1376.75 1819 1375.52C1819.7 1374.3 1820.05 1372.55 1820.05 1370.27C1820.05 1368.76 1819.89 1367.47 1819.57 1366.41C1819.25 1365.35 1818.79 1364.54 1818.19 1363.98C1817.59 1363.43 1816.87 1363.15 1816.03 1363.15C1814.77 1363.15 1813.78 1363.77 1813.07 1365.01C1812.36 1366.25 1812.01 1368.01 1812.01 1370.27C1812.01 1371.78 1812.17 1373.07 1812.49 1374.12C1812.8 1375.18 1813.26 1375.99 1813.86 1376.54C1814.46 1377.09 1815.18 1377.36 1816.03 1377.36Z"
        fill="#A9448C"
        id="path1122"
      />
      <path
        d="M1801.7 427.239C1800.58 427.239 1799.58 427.045 1798.7 426.659C1797.82 426.273 1797.13 425.736 1796.61 425.048C1796.1 424.355 1795.82 423.551 1795.77 422.636H1797.92C1797.97 423.199 1798.16 423.685 1798.5 424.094C1798.84 424.497 1799.29 424.81 1799.84 425.031C1800.39 425.253 1801 425.364 1801.67 425.364C1802.42 425.364 1803.09 425.233 1803.66 424.972C1804.24 424.71 1804.7 424.347 1805.03 423.881C1805.36 423.415 1805.52 422.875 1805.52 422.261C1805.52 421.619 1805.36 421.054 1805.05 420.565C1804.73 420.071 1804.26 419.685 1803.65 419.406C1803.03 419.128 1802.28 418.989 1801.4 418.989H1800V417.114H1801.4C1802.09 417.114 1802.7 416.989 1803.22 416.739C1803.75 416.489 1804.16 416.136 1804.46 415.682C1804.76 415.227 1804.91 414.693 1804.91 414.08C1804.91 413.489 1804.78 412.974 1804.52 412.537C1804.26 412.099 1803.89 411.759 1803.41 411.514C1802.94 411.27 1802.38 411.148 1801.74 411.148C1801.14 411.148 1800.57 411.259 1800.03 411.48C1799.51 411.696 1799.07 412.011 1798.74 412.426C1798.4 412.835 1798.22 413.33 1798.19 413.909H1796.15C1796.18 412.994 1796.46 412.193 1796.97 411.506C1797.49 410.812 1798.17 410.273 1799 409.886C1799.84 409.5 1800.77 409.307 1801.77 409.307C1802.85 409.307 1803.78 409.526 1804.55 409.963C1805.32 410.395 1805.92 410.966 1806.33 411.676C1806.75 412.386 1806.95 413.153 1806.95 413.977C1806.95 414.96 1806.7 415.798 1806.18 416.491C1805.67 417.185 1804.97 417.665 1804.09 417.932V418.068C1805.19 418.25 1806.05 418.719 1806.67 419.474C1807.29 420.224 1807.6 421.153 1807.6 422.261C1807.6 423.21 1807.34 424.062 1806.83 424.818C1806.32 425.568 1805.62 426.159 1804.73 426.591C1803.84 427.023 1802.84 427.239 1801.7 427.239ZM1817.22 409.545V427H1815.11V411.761H1815.01L1810.75 414.591V412.443L1815.11 409.545H1817.22Z"
        fill="#A9448C"
        id="path1124"
      />
      <path
        d="M1801.7 332.239C1800.58 332.239 1799.58 332.045 1798.7 331.659C1797.82 331.273 1797.13 330.736 1796.61 330.048C1796.1 329.355 1795.82 328.551 1795.77 327.636H1797.92C1797.97 328.199 1798.16 328.685 1798.5 329.094C1798.84 329.497 1799.29 329.81 1799.84 330.031C1800.39 330.253 1801 330.364 1801.67 330.364C1802.42 330.364 1803.09 330.233 1803.66 329.972C1804.24 329.71 1804.7 329.347 1805.03 328.881C1805.36 328.415 1805.52 327.875 1805.52 327.261C1805.52 326.619 1805.36 326.054 1805.05 325.565C1804.73 325.071 1804.26 324.685 1803.65 324.406C1803.03 324.128 1802.28 323.989 1801.4 323.989H1800V322.114H1801.4C1802.09 322.114 1802.7 321.989 1803.22 321.739C1803.75 321.489 1804.16 321.136 1804.46 320.682C1804.76 320.227 1804.91 319.693 1804.91 319.08C1804.91 318.489 1804.78 317.974 1804.52 317.537C1804.26 317.099 1803.89 316.759 1803.41 316.514C1802.94 316.27 1802.38 316.148 1801.74 316.148C1801.14 316.148 1800.57 316.259 1800.03 316.48C1799.51 316.696 1799.07 317.011 1798.74 317.426C1798.4 317.835 1798.22 318.33 1798.19 318.909H1796.15C1796.18 317.994 1796.46 317.193 1796.97 316.506C1797.49 315.812 1798.17 315.273 1799 314.886C1799.84 314.5 1800.77 314.307 1801.77 314.307C1802.85 314.307 1803.78 314.526 1804.55 314.963C1805.32 315.395 1805.92 315.966 1806.33 316.676C1806.75 317.386 1806.95 318.153 1806.95 318.977C1806.95 319.96 1806.7 320.798 1806.18 321.491C1805.67 322.185 1804.97 322.665 1804.09 322.932V323.068C1805.19 323.25 1806.05 323.719 1806.67 324.474C1807.29 325.224 1807.6 326.153 1807.6 327.261C1807.6 328.21 1807.34 329.062 1806.83 329.818C1806.32 330.568 1805.62 331.159 1804.73 331.591C1803.84 332.023 1802.84 332.239 1801.7 332.239ZM1811.09 332V330.466L1816.85 324.159C1817.53 323.42 1818.08 322.778 1818.52 322.233C1818.96 321.682 1819.28 321.165 1819.49 320.682C1819.71 320.193 1819.82 319.682 1819.82 319.148C1819.82 318.534 1819.67 318.003 1819.37 317.554C1819.08 317.105 1818.68 316.759 1818.18 316.514C1817.67 316.27 1817.11 316.148 1816.47 316.148C1815.8 316.148 1815.22 316.287 1814.72 316.565C1814.22 316.838 1813.84 317.222 1813.57 317.716C1813.3 318.21 1813.17 318.79 1813.17 319.455H1811.16C1811.16 318.432 1811.39 317.534 1811.86 316.761C1812.34 315.989 1812.98 315.386 1813.79 314.955C1814.61 314.523 1815.53 314.307 1816.54 314.307C1817.57 314.307 1818.47 314.523 1819.26 314.955C1820.05 315.386 1820.67 315.969 1821.12 316.702C1821.57 317.435 1821.79 318.25 1821.79 319.148C1821.79 319.79 1821.68 320.418 1821.44 321.031C1821.22 321.639 1820.82 322.318 1820.25 323.068C1819.69 323.812 1818.91 324.722 1817.91 325.795L1813.99 329.989V330.125H1822.1V332H1811.09Z"
        fill="#A9448C"
        id="path1126"
      />
      <path
        d="M1693.7 335.239C1692.58 335.239 1691.58 335.045 1690.7 334.659C1689.82 334.273 1689.13 333.736 1688.61 333.048C1688.1 332.355 1687.82 331.551 1687.77 330.636H1689.92C1689.97 331.199 1690.16 331.685 1690.5 332.094C1690.84 332.497 1691.29 332.81 1691.84 333.031C1692.39 333.253 1693 333.364 1693.67 333.364C1694.42 333.364 1695.09 333.233 1695.66 332.972C1696.24 332.71 1696.7 332.347 1697.03 331.881C1697.36 331.415 1697.52 330.875 1697.52 330.261C1697.52 329.619 1697.36 329.054 1697.05 328.565C1696.73 328.071 1696.26 327.685 1695.65 327.406C1695.03 327.128 1694.28 326.989 1693.4 326.989H1692V325.114H1693.4C1694.09 325.114 1694.7 324.989 1695.22 324.739C1695.75 324.489 1696.16 324.136 1696.46 323.682C1696.76 323.227 1696.91 322.693 1696.91 322.08C1696.91 321.489 1696.78 320.974 1696.52 320.537C1696.26 320.099 1695.89 319.759 1695.41 319.514C1694.94 319.27 1694.38 319.148 1693.74 319.148C1693.14 319.148 1692.57 319.259 1692.03 319.48C1691.51 319.696 1691.07 320.011 1690.74 320.426C1690.4 320.835 1690.22 321.33 1690.19 321.909H1688.15C1688.18 320.994 1688.46 320.193 1688.97 319.506C1689.49 318.812 1690.17 318.273 1691 317.886C1691.84 317.5 1692.77 317.307 1693.77 317.307C1694.85 317.307 1695.78 317.526 1696.55 317.963C1697.32 318.395 1697.92 318.966 1698.33 319.676C1698.75 320.386 1698.95 321.153 1698.95 321.977C1698.95 322.96 1698.7 323.798 1698.18 324.491C1697.67 325.185 1696.97 325.665 1696.09 325.932V326.068C1697.19 326.25 1698.05 326.719 1698.67 327.474C1699.29 328.224 1699.6 329.153 1699.6 330.261C1699.6 331.21 1699.34 332.062 1698.83 332.818C1698.32 333.568 1697.62 334.159 1696.73 334.591C1695.84 335.023 1694.84 335.239 1693.7 335.239ZM1708.99 335.239C1707.86 335.239 1706.86 335.045 1705.98 334.659C1705.1 334.273 1704.41 333.736 1703.89 333.048C1703.38 332.355 1703.1 331.551 1703.05 330.636H1705.2C1705.25 331.199 1705.44 331.685 1705.78 332.094C1706.12 332.497 1706.57 332.81 1707.12 333.031C1707.67 333.253 1708.28 333.364 1708.95 333.364C1709.7 333.364 1710.37 333.233 1710.95 332.972C1711.53 332.71 1711.98 332.347 1712.31 331.881C1712.64 331.415 1712.8 330.875 1712.8 330.261C1712.8 329.619 1712.64 329.054 1712.33 328.565C1712.01 328.071 1711.54 327.685 1710.93 327.406C1710.32 327.128 1709.57 326.989 1708.68 326.989H1707.28V325.114H1708.68C1709.37 325.114 1709.98 324.989 1710.5 324.739C1711.03 324.489 1711.44 324.136 1711.74 323.682C1712.04 323.227 1712.19 322.693 1712.19 322.08C1712.19 321.489 1712.06 320.974 1711.8 320.537C1711.54 320.099 1711.17 319.759 1710.69 319.514C1710.22 319.27 1709.66 319.148 1709.02 319.148C1708.42 319.148 1707.85 319.259 1707.32 319.48C1706.79 319.696 1706.36 320.011 1706.02 320.426C1705.68 320.835 1705.5 321.33 1705.47 321.909H1703.43C1703.46 320.994 1703.74 320.193 1704.26 319.506C1704.77 318.812 1705.45 318.273 1706.28 317.886C1707.13 317.5 1708.05 317.307 1709.05 317.307C1710.13 317.307 1711.06 317.526 1711.83 317.963C1712.61 318.395 1713.2 318.966 1713.61 319.676C1714.03 320.386 1714.24 321.153 1714.24 321.977C1714.24 322.96 1713.98 323.798 1713.46 324.491C1712.95 325.185 1712.25 325.665 1711.37 325.932V326.068C1712.47 326.25 1713.34 326.719 1713.95 327.474C1714.57 328.224 1714.88 329.153 1714.88 330.261C1714.88 331.21 1714.63 332.062 1714.11 332.818C1713.6 333.568 1712.9 334.159 1712.01 334.591C1711.13 335.023 1710.12 335.239 1708.99 335.239Z"
        fill="#A9448C"
        id="path1128"
      />
      <path
        d="M1688.7 427.239C1687.58 427.239 1686.58 427.045 1685.7 426.659C1684.82 426.273 1684.13 425.736 1683.61 425.048C1683.1 424.355 1682.82 423.551 1682.77 422.636H1684.92C1684.97 423.199 1685.16 423.685 1685.5 424.094C1685.84 424.497 1686.29 424.81 1686.84 425.031C1687.39 425.253 1688 425.364 1688.67 425.364C1689.42 425.364 1690.09 425.233 1690.66 424.972C1691.24 424.71 1691.7 424.347 1692.03 423.881C1692.36 423.415 1692.52 422.875 1692.52 422.261C1692.52 421.619 1692.36 421.054 1692.05 420.565C1691.73 420.071 1691.26 419.685 1690.65 419.406C1690.03 419.128 1689.28 418.989 1688.4 418.989H1687V417.114H1688.4C1689.09 417.114 1689.7 416.989 1690.22 416.739C1690.75 416.489 1691.16 416.136 1691.46 415.682C1691.76 415.227 1691.91 414.693 1691.91 414.08C1691.91 413.489 1691.78 412.974 1691.52 412.537C1691.26 412.099 1690.89 411.759 1690.41 411.514C1689.94 411.27 1689.38 411.148 1688.74 411.148C1688.14 411.148 1687.57 411.259 1687.03 411.48C1686.51 411.696 1686.07 412.011 1685.74 412.426C1685.4 412.835 1685.22 413.33 1685.19 413.909H1683.15C1683.18 412.994 1683.46 412.193 1683.97 411.506C1684.49 410.812 1685.17 410.273 1686 409.886C1686.84 409.5 1687.77 409.307 1688.77 409.307C1689.85 409.307 1690.78 409.526 1691.55 409.963C1692.32 410.395 1692.92 410.966 1693.33 411.676C1693.75 412.386 1693.95 413.153 1693.95 413.977C1693.95 414.96 1693.7 415.798 1693.18 416.491C1692.67 417.185 1691.97 417.665 1691.09 417.932V418.068C1692.19 418.25 1693.05 418.719 1693.67 419.474C1694.29 420.224 1694.6 421.153 1694.6 422.261C1694.6 423.21 1694.34 424.062 1693.83 424.818C1693.32 425.568 1692.62 426.159 1691.73 426.591C1690.84 427.023 1689.84 427.239 1688.7 427.239ZM1697.68 423.42V421.682L1705.35 409.545H1706.61V412.239H1705.76L1699.96 421.409V421.545H1710.29V423.42H1697.68ZM1705.89 427V422.892V422.082V409.545H1707.91V427H1705.89Z"
        fill="#A9448C"
        id="path1130"
      />
      <path
        d="M1688.7 538.239C1687.58 538.239 1686.58 538.045 1685.7 537.659C1684.82 537.273 1684.13 536.736 1683.61 536.048C1683.1 535.355 1682.82 534.551 1682.77 533.636H1684.92C1684.97 534.199 1685.16 534.685 1685.5 535.094C1685.84 535.497 1686.29 535.81 1686.84 536.031C1687.39 536.253 1688 536.364 1688.67 536.364C1689.42 536.364 1690.09 536.233 1690.66 535.972C1691.24 535.71 1691.7 535.347 1692.03 534.881C1692.36 534.415 1692.52 533.875 1692.52 533.261C1692.52 532.619 1692.36 532.054 1692.05 531.565C1691.73 531.071 1691.26 530.685 1690.65 530.406C1690.03 530.128 1689.28 529.989 1688.4 529.989H1687V528.114H1688.4C1689.09 528.114 1689.7 527.989 1690.22 527.739C1690.75 527.489 1691.16 527.136 1691.46 526.682C1691.76 526.227 1691.91 525.693 1691.91 525.08C1691.91 524.489 1691.78 523.974 1691.52 523.537C1691.26 523.099 1690.89 522.759 1690.41 522.514C1689.94 522.27 1689.38 522.148 1688.74 522.148C1688.14 522.148 1687.57 522.259 1687.03 522.48C1686.51 522.696 1686.07 523.011 1685.74 523.426C1685.4 523.835 1685.22 524.33 1685.19 524.909H1683.15C1683.18 523.994 1683.46 523.193 1683.97 522.506C1684.49 521.812 1685.17 521.273 1686 520.886C1686.84 520.5 1687.77 520.307 1688.77 520.307C1689.85 520.307 1690.78 520.526 1691.55 520.963C1692.32 521.395 1692.92 521.966 1693.33 522.676C1693.75 523.386 1693.95 524.153 1693.95 524.977C1693.95 525.96 1693.7 526.798 1693.18 527.491C1692.67 528.185 1691.97 528.665 1691.09 528.932V529.068C1692.19 529.25 1693.05 529.719 1693.67 530.474C1694.29 531.224 1694.6 532.153 1694.6 533.261C1694.6 534.21 1694.34 535.062 1693.83 535.818C1693.32 536.568 1692.62 537.159 1691.73 537.591C1690.84 538.023 1689.84 538.239 1688.7 538.239ZM1703.54 538.239C1702.54 538.239 1701.64 538.04 1700.84 537.642C1700.04 537.244 1699.4 536.699 1698.91 536.006C1698.43 535.312 1698.17 534.523 1698.12 533.636H1700.17C1700.25 534.426 1700.61 535.08 1701.24 535.597C1701.88 536.108 1702.65 536.364 1703.54 536.364C1704.26 536.364 1704.89 536.196 1705.45 535.861C1706.01 535.526 1706.45 535.065 1706.77 534.48C1707.1 533.889 1707.26 533.222 1707.26 532.477C1707.26 531.716 1707.09 531.037 1706.76 530.44C1706.43 529.838 1705.97 529.364 1705.39 529.017C1704.81 528.67 1704.15 528.494 1703.41 528.489C1702.87 528.483 1702.32 528.565 1701.76 528.736C1701.2 528.901 1700.74 529.114 1700.37 529.375L1698.39 529.136L1699.45 520.545H1708.52V522.42H1701.22L1700.61 527.568H1700.71C1701.07 527.284 1701.52 527.048 1702.06 526.861C1702.6 526.673 1703.16 526.58 1703.75 526.58C1704.82 526.58 1705.77 526.835 1706.6 527.347C1707.44 527.852 1708.1 528.545 1708.58 529.426C1709.06 530.307 1709.3 531.312 1709.3 532.443C1709.3 533.557 1709.05 534.551 1708.55 535.426C1708.06 536.295 1707.38 536.983 1706.51 537.489C1705.64 537.989 1704.65 538.239 1703.54 538.239Z"
        fill="#A9448C"
        id="path1132"
      />
      <path
        d="M1688.7 719.239C1687.58 719.239 1686.58 719.045 1685.7 718.659C1684.82 718.273 1684.13 717.736 1683.61 717.048C1683.1 716.355 1682.82 715.551 1682.77 714.636H1684.92C1684.97 715.199 1685.16 715.685 1685.5 716.094C1685.84 716.497 1686.29 716.81 1686.84 717.031C1687.39 717.253 1688 717.364 1688.67 717.364C1689.42 717.364 1690.09 717.233 1690.66 716.972C1691.24 716.71 1691.7 716.347 1692.03 715.881C1692.36 715.415 1692.52 714.875 1692.52 714.261C1692.52 713.619 1692.36 713.054 1692.05 712.565C1691.73 712.071 1691.26 711.685 1690.65 711.406C1690.03 711.128 1689.28 710.989 1688.4 710.989H1687V709.114H1688.4C1689.09 709.114 1689.7 708.989 1690.22 708.739C1690.75 708.489 1691.16 708.136 1691.46 707.682C1691.76 707.227 1691.91 706.693 1691.91 706.08C1691.91 705.489 1691.78 704.974 1691.52 704.537C1691.26 704.099 1690.89 703.759 1690.41 703.514C1689.94 703.27 1689.38 703.148 1688.74 703.148C1688.14 703.148 1687.57 703.259 1687.03 703.48C1686.51 703.696 1686.07 704.011 1685.74 704.426C1685.4 704.835 1685.22 705.33 1685.19 705.909H1683.15C1683.18 704.994 1683.46 704.193 1683.97 703.506C1684.49 702.812 1685.17 702.273 1686 701.886C1686.84 701.5 1687.77 701.307 1688.77 701.307C1689.85 701.307 1690.78 701.526 1691.55 701.963C1692.32 702.395 1692.92 702.966 1693.33 703.676C1693.75 704.386 1693.95 705.153 1693.95 705.977C1693.95 706.96 1693.7 707.798 1693.18 708.491C1692.67 709.185 1691.97 709.665 1691.09 709.932V710.068C1692.19 710.25 1693.05 710.719 1693.67 711.474C1694.29 712.224 1694.6 713.153 1694.6 714.261C1694.6 715.21 1694.34 716.062 1693.83 716.818C1693.32 717.568 1692.62 718.159 1691.73 718.591C1690.84 719.023 1689.84 719.239 1688.7 719.239ZM1703.88 719.239C1703.17 719.227 1702.45 719.091 1701.74 718.83C1701.02 718.568 1700.37 718.128 1699.78 717.509C1699.18 716.884 1698.71 716.04 1698.35 714.977C1697.99 713.909 1697.82 712.568 1697.82 710.955C1697.82 709.409 1697.96 708.04 1698.25 706.847C1698.54 705.648 1698.96 704.639 1699.51 703.821C1700.06 702.997 1700.73 702.372 1701.51 701.946C1702.29 701.52 1703.17 701.307 1704.16 701.307C1705.13 701.307 1706 701.503 1706.76 701.895C1707.53 702.281 1708.16 702.821 1708.64 703.514C1709.12 704.207 1709.43 705.006 1709.58 705.909H1707.5C1707.3 705.125 1706.93 704.474 1706.37 703.957C1705.82 703.44 1705.08 703.182 1704.16 703.182C1702.8 703.182 1701.74 703.77 1700.96 704.946C1700.19 706.122 1699.8 707.773 1699.79 709.898H1699.93C1700.25 709.415 1700.62 709.003 1701.06 708.662C1701.51 708.315 1701.99 708.048 1702.53 707.861C1703.06 707.673 1703.63 707.58 1704.22 707.58C1705.22 707.58 1706.14 707.83 1706.97 708.33C1707.8 708.824 1708.46 709.509 1708.96 710.384C1709.46 711.253 1709.71 712.25 1709.71 713.375C1709.71 714.455 1709.47 715.443 1708.99 716.341C1708.51 717.233 1707.83 717.943 1706.95 718.472C1706.08 718.994 1705.06 719.25 1703.88 719.239ZM1703.88 717.364C1704.6 717.364 1705.24 717.185 1705.81 716.827C1706.38 716.469 1706.84 715.989 1707.16 715.386C1707.5 714.784 1707.67 714.114 1707.67 713.375C1707.67 712.653 1707.51 711.997 1707.18 711.406C1706.86 710.81 1706.42 710.335 1705.86 709.983C1705.3 709.631 1704.67 709.455 1703.95 709.455C1703.41 709.455 1702.91 709.562 1702.44 709.778C1701.98 709.989 1701.57 710.278 1701.22 710.648C1700.87 711.017 1700.6 711.44 1700.4 711.918C1700.2 712.389 1700.1 712.886 1700.1 713.409C1700.1 714.102 1700.26 714.75 1700.59 715.352C1700.91 715.955 1701.36 716.44 1701.93 716.81C1702.51 717.179 1703.16 717.364 1703.88 717.364Z"
        fill="#A9448C"
        id="path1134"
      />
      <path
        d="M1688.7 827.239C1687.58 827.239 1686.58 827.045 1685.7 826.659C1684.82 826.273 1684.13 825.736 1683.61 825.048C1683.1 824.355 1682.82 823.551 1682.77 822.636H1684.92C1684.97 823.199 1685.16 823.685 1685.5 824.094C1685.84 824.497 1686.29 824.81 1686.84 825.031C1687.39 825.253 1688 825.364 1688.67 825.364C1689.42 825.364 1690.09 825.233 1690.66 824.972C1691.24 824.71 1691.7 824.347 1692.03 823.881C1692.36 823.415 1692.52 822.875 1692.52 822.261C1692.52 821.619 1692.36 821.054 1692.05 820.565C1691.73 820.071 1691.26 819.685 1690.65 819.406C1690.03 819.128 1689.28 818.989 1688.4 818.989H1687V817.114H1688.4C1689.09 817.114 1689.7 816.989 1690.22 816.739C1690.75 816.489 1691.16 816.136 1691.46 815.682C1691.76 815.227 1691.91 814.693 1691.91 814.08C1691.91 813.489 1691.78 812.974 1691.52 812.537C1691.26 812.099 1690.89 811.759 1690.41 811.514C1689.94 811.27 1689.38 811.148 1688.74 811.148C1688.14 811.148 1687.57 811.259 1687.03 811.48C1686.51 811.696 1686.07 812.011 1685.74 812.426C1685.4 812.835 1685.22 813.33 1685.19 813.909H1683.15C1683.18 812.994 1683.46 812.193 1683.97 811.506C1684.49 810.812 1685.17 810.273 1686 809.886C1686.84 809.5 1687.77 809.307 1688.77 809.307C1689.85 809.307 1690.78 809.526 1691.55 809.963C1692.32 810.395 1692.92 810.966 1693.33 811.676C1693.75 812.386 1693.95 813.153 1693.95 813.977C1693.95 814.96 1693.7 815.798 1693.18 816.491C1692.67 817.185 1691.97 817.665 1691.09 817.932V818.068C1692.19 818.25 1693.05 818.719 1693.67 819.474C1694.29 820.224 1694.6 821.153 1694.6 822.261C1694.6 823.21 1694.34 824.062 1693.83 824.818C1693.32 825.568 1692.62 826.159 1691.73 826.591C1690.84 827.023 1689.84 827.239 1688.7 827.239ZM1698.63 827L1706.44 811.557V811.42H1697.44V809.545H1708.62V811.523L1700.85 827H1698.63Z"
        fill="#A9448C"
        id="path1136"
      />
      <path
        d="M1688.7 891.239C1687.58 891.239 1686.58 891.045 1685.7 890.659C1684.82 890.273 1684.13 889.736 1683.61 889.048C1683.1 888.355 1682.82 887.551 1682.77 886.636H1684.92C1684.97 887.199 1685.16 887.685 1685.5 888.094C1685.84 888.497 1686.29 888.81 1686.84 889.031C1687.39 889.253 1688 889.364 1688.67 889.364C1689.42 889.364 1690.09 889.233 1690.66 888.972C1691.24 888.71 1691.7 888.347 1692.03 887.881C1692.36 887.415 1692.52 886.875 1692.52 886.261C1692.52 885.619 1692.36 885.054 1692.05 884.565C1691.73 884.071 1691.26 883.685 1690.65 883.406C1690.03 883.128 1689.28 882.989 1688.4 882.989H1687V881.114H1688.4C1689.09 881.114 1689.7 880.989 1690.22 880.739C1690.75 880.489 1691.16 880.136 1691.46 879.682C1691.76 879.227 1691.91 878.693 1691.91 878.08C1691.91 877.489 1691.78 876.974 1691.52 876.537C1691.26 876.099 1690.89 875.759 1690.41 875.514C1689.94 875.27 1689.38 875.148 1688.74 875.148C1688.14 875.148 1687.57 875.259 1687.03 875.48C1686.51 875.696 1686.07 876.011 1685.74 876.426C1685.4 876.835 1685.22 877.33 1685.19 877.909H1683.15C1683.18 876.994 1683.46 876.193 1683.97 875.506C1684.49 874.812 1685.17 874.273 1686 873.886C1686.84 873.5 1687.77 873.307 1688.77 873.307C1689.85 873.307 1690.78 873.526 1691.55 873.963C1692.32 874.395 1692.92 874.966 1693.33 875.676C1693.75 876.386 1693.95 877.153 1693.95 877.977C1693.95 878.96 1693.7 879.798 1693.18 880.491C1692.67 881.185 1691.97 881.665 1691.09 881.932V882.068C1692.19 882.25 1693.05 882.719 1693.67 883.474C1694.29 884.224 1694.6 885.153 1694.6 886.261C1694.6 887.21 1694.34 888.062 1693.83 888.818C1693.32 889.568 1692.62 890.159 1691.73 890.591C1690.84 891.023 1689.84 891.239 1688.7 891.239ZM1703.68 891.239C1702.51 891.239 1701.47 891.031 1700.58 890.616C1699.68 890.196 1698.99 889.619 1698.49 888.886C1697.99 888.148 1697.74 887.307 1697.75 886.364C1697.74 885.625 1697.89 884.943 1698.18 884.318C1698.48 883.687 1698.88 883.162 1699.39 882.741C1699.91 882.315 1700.49 882.045 1701.12 881.932V881.83C1700.29 881.614 1699.62 881.145 1699.13 880.423C1698.63 879.696 1698.39 878.869 1698.39 877.943C1698.39 877.057 1698.61 876.264 1699.07 875.565C1699.52 874.866 1700.15 874.315 1700.94 873.912C1701.74 873.509 1702.66 873.307 1703.68 873.307C1704.69 873.307 1705.59 873.509 1706.39 873.912C1707.18 874.315 1707.81 874.866 1708.26 875.565C1708.72 876.264 1708.96 877.057 1708.96 877.943C1708.96 878.869 1708.7 879.696 1708.2 880.423C1707.71 881.145 1707.05 881.614 1706.24 881.83V881.932C1706.87 882.045 1707.43 882.315 1707.94 882.741C1708.45 883.162 1708.85 883.687 1709.15 884.318C1709.45 884.943 1709.61 885.625 1709.61 886.364C1709.61 887.307 1709.35 888.148 1708.84 888.886C1708.34 889.619 1707.65 890.196 1706.76 890.616C1705.87 891.031 1704.84 891.239 1703.68 891.239ZM1703.68 889.364C1704.47 889.364 1705.15 889.236 1705.72 888.98C1706.3 888.724 1706.74 888.364 1707.05 887.898C1707.37 887.432 1707.53 886.886 1707.53 886.261C1707.53 885.602 1707.36 885.02 1707.02 884.514C1706.68 884.009 1706.23 883.611 1705.65 883.321C1705.07 883.031 1704.42 882.886 1703.68 882.886C1702.93 882.886 1702.27 883.031 1701.68 883.321C1701.11 883.611 1700.65 884.009 1700.31 884.514C1699.98 885.02 1699.82 885.602 1699.83 886.261C1699.82 886.886 1699.97 887.432 1700.28 887.898C1700.59 888.364 1701.04 888.724 1701.62 888.98C1702.2 889.236 1702.88 889.364 1703.68 889.364ZM1703.68 881.08C1704.3 881.08 1704.86 880.955 1705.34 880.705C1705.83 880.455 1706.21 880.105 1706.49 879.656C1706.77 879.207 1706.91 878.682 1706.92 878.08C1706.91 877.489 1706.77 876.974 1706.5 876.537C1706.23 876.094 1705.85 875.753 1705.37 875.514C1704.88 875.27 1704.32 875.148 1703.68 875.148C1703.03 875.148 1702.45 875.27 1701.97 875.514C1701.48 875.753 1701.1 876.094 1700.83 876.537C1700.57 876.974 1700.43 877.489 1700.44 878.08C1700.43 878.682 1700.57 879.207 1700.84 879.656C1701.12 880.105 1701.5 880.455 1701.99 880.705C1702.48 880.955 1703.04 881.08 1703.68 881.08Z"
        fill="#A9448C"
        id="path1138"
      />
      <path
        d="M1688.7 953.239C1687.58 953.239 1686.58 953.045 1685.7 952.659C1684.82 952.273 1684.13 951.736 1683.61 951.048C1683.1 950.355 1682.82 949.551 1682.77 948.636H1684.92C1684.97 949.199 1685.16 949.685 1685.5 950.094C1685.84 950.497 1686.29 950.81 1686.84 951.031C1687.39 951.253 1688 951.364 1688.67 951.364C1689.42 951.364 1690.09 951.233 1690.66 950.972C1691.24 950.71 1691.7 950.347 1692.03 949.881C1692.36 949.415 1692.52 948.875 1692.52 948.261C1692.52 947.619 1692.36 947.054 1692.05 946.565C1691.73 946.071 1691.26 945.685 1690.65 945.406C1690.03 945.128 1689.28 944.989 1688.4 944.989H1687V943.114H1688.4C1689.09 943.114 1689.7 942.989 1690.22 942.739C1690.75 942.489 1691.16 942.136 1691.46 941.682C1691.76 941.227 1691.91 940.693 1691.91 940.08C1691.91 939.489 1691.78 938.974 1691.52 938.537C1691.26 938.099 1690.89 937.759 1690.41 937.514C1689.94 937.27 1689.38 937.148 1688.74 937.148C1688.14 937.148 1687.57 937.259 1687.03 937.48C1686.51 937.696 1686.07 938.011 1685.74 938.426C1685.4 938.835 1685.22 939.33 1685.19 939.909H1683.15C1683.18 938.994 1683.46 938.193 1683.97 937.506C1684.49 936.812 1685.17 936.273 1686 935.886C1686.84 935.5 1687.77 935.307 1688.77 935.307C1689.85 935.307 1690.78 935.526 1691.55 935.963C1692.32 936.395 1692.92 936.966 1693.33 937.676C1693.75 938.386 1693.95 939.153 1693.95 939.977C1693.95 940.96 1693.7 941.798 1693.18 942.491C1692.67 943.185 1691.97 943.665 1691.09 943.932V944.068C1692.19 944.25 1693.05 944.719 1693.67 945.474C1694.29 946.224 1694.6 947.153 1694.6 948.261C1694.6 949.21 1694.34 950.062 1693.83 950.818C1693.32 951.568 1692.62 952.159 1691.73 952.591C1690.84 953.023 1689.84 953.239 1688.7 953.239ZM1703.64 935.307C1704.36 935.312 1705.08 935.449 1705.79 935.716C1706.51 935.983 1707.16 936.426 1707.75 937.045C1708.34 937.659 1708.82 938.497 1709.18 939.56C1709.53 940.622 1709.71 941.955 1709.71 943.557C1709.71 945.108 1709.57 946.486 1709.27 947.69C1708.98 948.889 1708.56 949.901 1708.01 950.724C1707.46 951.548 1706.8 952.173 1706.01 952.599C1705.24 953.026 1704.36 953.239 1703.37 953.239C1702.39 953.239 1701.52 953.045 1700.76 952.659C1699.99 952.267 1699.37 951.724 1698.88 951.031C1698.4 950.332 1698.09 949.523 1697.95 948.602H1700.03C1700.22 949.403 1700.59 950.065 1701.15 950.588C1701.71 951.105 1702.45 951.364 1703.37 951.364C1704.72 951.364 1705.78 950.776 1706.56 949.599C1707.34 948.423 1707.74 946.761 1707.74 944.614H1707.6C1707.28 945.091 1706.9 945.503 1706.47 945.849C1706.03 946.196 1705.54 946.463 1705.01 946.651C1704.47 946.838 1703.91 946.932 1703.3 946.932C1702.3 946.932 1701.39 946.685 1700.55 946.19C1699.72 945.69 1699.06 945.006 1698.56 944.136C1698.06 943.261 1697.82 942.261 1697.82 941.136C1697.82 940.068 1698.05 939.091 1698.53 938.205C1699.01 937.312 1699.69 936.602 1700.56 936.074C1701.43 935.545 1702.46 935.29 1703.64 935.307ZM1703.64 937.182C1702.93 937.182 1702.28 937.361 1701.71 937.719C1701.14 938.071 1700.69 938.548 1700.36 939.151C1700.03 939.747 1699.86 940.409 1699.86 941.136C1699.86 941.864 1700.02 942.526 1700.34 943.122C1700.66 943.713 1701.1 944.185 1701.66 944.537C1702.22 944.884 1702.86 945.057 1703.58 945.057C1704.12 945.057 1704.62 944.952 1705.09 944.741C1705.55 944.526 1705.96 944.233 1706.3 943.864C1706.66 943.489 1706.93 943.065 1707.13 942.594C1707.33 942.116 1707.43 941.619 1707.43 941.102C1707.43 940.42 1707.26 939.781 1706.93 939.185C1706.61 938.588 1706.16 938.105 1705.59 937.736C1705.02 937.366 1704.37 937.182 1703.64 937.182Z"
        fill="#A9448C"
        id="path1140"
      />
      <path
        d="M1682.4 1013.42V1011.68L1690.07 999.545H1691.33V1002.24H1690.48L1684.68 1011.41V1011.55H1695.01V1013.42H1682.4ZM1690.61 1017V1012.89V1012.08V999.545H1692.62V1017H1690.61ZM1703.9 1017.24C1702.61 1017.24 1701.52 1016.89 1700.62 1016.19C1699.71 1015.49 1699.02 1014.47 1698.55 1013.13C1698.07 1011.79 1697.83 1010.17 1697.83 1008.27C1697.83 1006.39 1698.07 1004.78 1698.55 1003.44C1699.03 1002.1 1699.72 1001.08 1700.63 1000.37C1701.53 999.662 1702.63 999.307 1703.9 999.307C1705.17 999.307 1706.26 999.662 1707.16 1000.37C1708.07 1001.08 1708.76 1002.1 1709.24 1003.44C1709.73 1004.78 1709.97 1006.39 1709.97 1008.27C1709.97 1010.17 1709.73 1011.79 1709.25 1013.13C1708.77 1014.47 1708.08 1015.49 1707.18 1016.19C1706.28 1016.89 1705.18 1017.24 1703.9 1017.24ZM1703.9 1015.36C1705.17 1015.36 1706.16 1014.75 1706.86 1013.52C1707.57 1012.3 1707.92 1010.55 1707.92 1008.27C1707.92 1006.76 1707.76 1005.47 1707.44 1004.41C1707.12 1003.35 1706.66 1002.54 1706.05 1001.98C1705.46 1001.43 1704.74 1001.15 1703.9 1001.15C1702.64 1001.15 1701.65 1001.77 1700.94 1003.01C1700.23 1004.25 1699.88 1006.01 1699.88 1008.27C1699.88 1009.78 1700.03 1011.07 1700.35 1012.12C1700.67 1013.18 1701.13 1013.99 1701.73 1014.54C1702.33 1015.09 1703.05 1015.36 1703.9 1015.36Z"
        fill="#A9448C"
        id="path1142"
      />
      <path
        d="M1682.4 1078.42V1076.68L1690.07 1064.55H1691.33V1067.24H1690.48L1684.68 1076.41V1076.55H1695.01V1078.42H1682.4ZM1690.61 1082V1077.89V1077.08V1064.55H1692.62V1082H1690.61ZM1704.11 1064.55V1082H1701.99V1066.76H1701.89L1697.63 1069.59V1067.44L1701.99 1064.55H1704.11Z"
        fill="#A9448C"
        id="path1144"
      />
      <path
        d="M1682.4 1144.42V1142.68L1690.07 1130.55H1691.33V1133.24H1690.48L1684.68 1142.41V1142.55H1695.01V1144.42H1682.4ZM1690.61 1148V1143.89V1143.08V1130.55H1692.62V1148H1690.61ZM1698.21 1148V1146.47L1703.97 1140.16C1704.64 1139.42 1705.2 1138.78 1705.64 1138.23C1706.07 1137.68 1706.4 1137.16 1706.61 1136.68C1706.82 1136.19 1706.93 1135.68 1706.93 1135.15C1706.93 1134.53 1706.78 1134 1706.49 1133.55C1706.2 1133.11 1705.8 1132.76 1705.3 1132.51C1704.79 1132.27 1704.22 1132.15 1703.59 1132.15C1702.92 1132.15 1702.34 1132.29 1701.84 1132.57C1701.34 1132.84 1700.96 1133.22 1700.69 1133.72C1700.42 1134.21 1700.28 1134.79 1700.28 1135.45H1698.27C1698.27 1134.43 1698.51 1133.53 1698.98 1132.76C1699.45 1131.99 1700.09 1131.39 1700.91 1130.95C1701.73 1130.52 1702.64 1130.31 1703.66 1130.31C1704.68 1130.31 1705.59 1130.52 1706.38 1130.95C1707.17 1131.39 1707.79 1131.97 1708.24 1132.7C1708.69 1133.43 1708.91 1134.25 1708.91 1135.15C1708.91 1135.79 1708.79 1136.42 1708.56 1137.03C1708.33 1137.64 1707.94 1138.32 1707.37 1139.07C1706.8 1139.81 1706.02 1140.72 1705.02 1141.8L1701.1 1145.99V1146.12H1709.22V1148H1698.21Z"
        fill="#A9448C"
        id="path1146"
      />
      <path
        d="M1682.4 1202.42V1200.68L1690.07 1188.55H1691.33V1191.24H1690.48L1684.68 1200.41V1200.55H1695.01V1202.42H1682.4ZM1690.61 1206V1201.89V1201.08V1188.55H1692.62V1206H1690.61ZM1704.1 1206.24C1702.98 1206.24 1701.98 1206.05 1701.09 1205.66C1700.22 1205.27 1699.52 1204.74 1699.01 1204.05C1698.5 1203.36 1698.22 1202.55 1698.17 1201.64H1700.32C1700.36 1202.2 1700.56 1202.68 1700.9 1203.09C1701.24 1203.5 1701.69 1203.81 1702.24 1204.03C1702.79 1204.25 1703.4 1204.36 1704.07 1204.36C1704.82 1204.36 1705.48 1204.23 1706.06 1203.97C1706.64 1203.71 1707.1 1203.35 1707.43 1202.88C1707.76 1202.41 1707.92 1201.88 1707.92 1201.26C1707.92 1200.62 1707.76 1200.05 1707.44 1199.57C1707.13 1199.07 1706.66 1198.68 1706.05 1198.41C1705.43 1198.13 1704.68 1197.99 1703.8 1197.99H1702.4V1196.11H1703.8C1704.49 1196.11 1705.1 1195.99 1705.62 1195.74C1706.15 1195.49 1706.56 1195.14 1706.86 1194.68C1707.16 1194.23 1707.31 1193.69 1707.31 1193.08C1707.31 1192.49 1707.18 1191.97 1706.92 1191.54C1706.65 1191.1 1706.28 1190.76 1705.81 1190.51C1705.34 1190.27 1704.78 1190.15 1704.14 1190.15C1703.53 1190.15 1702.97 1190.26 1702.43 1190.48C1701.9 1190.7 1701.47 1191.01 1701.14 1191.43C1700.8 1191.84 1700.62 1192.33 1700.59 1192.91H1698.55C1698.58 1191.99 1698.86 1191.19 1699.37 1190.51C1699.89 1189.81 1700.57 1189.27 1701.4 1188.89C1702.24 1188.5 1703.17 1188.31 1704.17 1188.31C1705.25 1188.31 1706.18 1188.53 1706.95 1188.96C1707.72 1189.39 1708.32 1189.97 1708.73 1190.68C1709.15 1191.39 1709.35 1192.15 1709.35 1192.98C1709.35 1193.96 1709.09 1194.8 1708.58 1195.49C1708.07 1196.18 1707.37 1196.66 1706.49 1196.93V1197.07C1707.59 1197.25 1708.45 1197.72 1709.07 1198.47C1709.69 1199.22 1710 1200.15 1710 1201.26C1710 1202.21 1709.74 1203.06 1709.23 1203.82C1708.71 1204.57 1708.01 1205.16 1707.13 1205.59C1706.24 1206.02 1705.23 1206.24 1704.1 1206.24Z"
        fill="#A9448C"
        id="path1148"
      />
      <path
        d="M1682.4 1267.42V1265.68L1690.07 1253.55H1691.33V1256.24H1690.48L1684.68 1265.41V1265.55H1695.01V1267.42H1682.4ZM1690.61 1271V1266.89V1266.08V1253.55H1692.62V1271H1690.61ZM1697.8 1267.42V1265.68L1705.47 1253.55H1706.73V1256.24H1705.88L1700.08 1265.41V1265.55H1710.41V1267.42H1697.8ZM1706.01 1271V1266.89V1266.08V1253.55H1708.02V1271H1706.01Z"
        fill="#A9448C"
        id="path1150"
      />
      <path
        d="M1687.4 1352.42V1350.68L1695.07 1338.55H1696.33V1341.24H1695.48L1689.68 1350.41V1350.55H1700.01V1352.42H1687.4ZM1695.61 1356V1351.89V1351.08V1338.55H1697.62V1356H1695.61ZM1708.66 1356.24C1707.66 1356.24 1706.76 1356.04 1705.96 1355.64C1705.16 1355.24 1704.51 1354.7 1704.03 1354.01C1703.55 1353.31 1703.28 1352.52 1703.24 1351.64H1705.28C1705.36 1352.43 1705.72 1353.08 1706.36 1353.6C1707 1354.11 1707.77 1354.36 1708.66 1354.36C1709.38 1354.36 1710.01 1354.2 1710.57 1353.86C1711.13 1353.53 1711.57 1353.07 1711.89 1352.48C1712.21 1351.89 1712.38 1351.22 1712.38 1350.48C1712.38 1349.72 1712.21 1349.04 1711.87 1348.44C1711.54 1347.84 1711.09 1347.36 1710.51 1347.02C1709.93 1346.67 1709.27 1346.49 1708.52 1346.49C1707.99 1346.48 1707.44 1346.57 1706.88 1346.74C1706.32 1346.9 1705.85 1347.11 1705.49 1347.38L1703.51 1347.14L1704.57 1338.55H1713.64V1340.42H1706.34L1705.73 1345.57H1705.83C1706.19 1345.28 1706.64 1345.05 1707.18 1344.86C1707.72 1344.67 1708.28 1344.58 1708.86 1344.58C1709.93 1344.58 1710.88 1344.84 1711.72 1345.35C1712.56 1345.85 1713.22 1346.55 1713.7 1347.43C1714.18 1348.31 1714.42 1349.31 1714.42 1350.44C1714.42 1351.56 1714.17 1352.55 1713.67 1353.43C1713.18 1354.3 1712.5 1354.98 1711.63 1355.49C1710.76 1355.99 1709.77 1356.24 1708.66 1356.24Z"
        fill="#A9448C"
        id="path1152"
      />
      <path
        d="M1683.4 1566.42V1564.68L1691.07 1552.55H1692.33V1555.24H1691.48L1685.68 1564.41V1564.55H1696.01V1566.42H1683.4ZM1691.61 1570V1565.89V1565.08V1552.55H1693.62V1570H1691.61ZM1705 1570.24C1704.28 1570.23 1703.57 1570.09 1702.85 1569.83C1702.14 1569.57 1701.48 1569.13 1700.89 1568.51C1700.3 1567.88 1699.83 1567.04 1699.47 1565.98C1699.11 1564.91 1698.93 1563.57 1698.93 1561.95C1698.93 1560.41 1699.08 1559.04 1699.37 1557.85C1699.66 1556.65 1700.08 1555.64 1700.63 1554.82C1701.18 1554 1701.84 1553.37 1702.62 1552.95C1703.41 1552.52 1704.29 1552.31 1705.27 1552.31C1706.25 1552.31 1707.12 1552.5 1707.88 1552.89C1708.65 1553.28 1709.27 1553.82 1709.76 1554.51C1710.24 1555.21 1710.55 1556.01 1710.69 1556.91H1708.61C1708.42 1556.12 1708.05 1555.47 1707.49 1554.96C1706.93 1554.44 1706.19 1554.18 1705.27 1554.18C1703.92 1554.18 1702.86 1554.77 1702.08 1555.95C1701.3 1557.12 1700.92 1558.77 1700.91 1560.9H1701.05C1701.36 1560.41 1701.74 1560 1702.18 1559.66C1702.62 1559.32 1703.11 1559.05 1703.65 1558.86C1704.18 1558.67 1704.75 1558.58 1705.34 1558.58C1706.34 1558.58 1707.26 1558.83 1708.09 1559.33C1708.92 1559.82 1709.58 1560.51 1710.08 1561.38C1710.58 1562.25 1710.83 1563.25 1710.83 1564.38C1710.83 1565.45 1710.59 1566.44 1710.11 1567.34C1709.62 1568.23 1708.94 1568.94 1708.07 1569.47C1707.2 1569.99 1706.18 1570.25 1705 1570.24ZM1705 1568.36C1705.72 1568.36 1706.36 1568.18 1706.93 1567.83C1707.5 1567.47 1707.95 1566.99 1708.28 1566.39C1708.62 1565.78 1708.78 1565.11 1708.78 1564.38C1708.78 1563.65 1708.62 1563 1708.3 1562.41C1707.98 1561.81 1707.54 1561.34 1706.98 1560.98C1706.42 1560.63 1705.78 1560.45 1705.07 1560.45C1704.53 1560.45 1704.03 1560.56 1703.56 1560.78C1703.09 1560.99 1702.69 1561.28 1702.33 1561.65C1701.99 1562.02 1701.71 1562.44 1701.51 1562.92C1701.32 1563.39 1701.22 1563.89 1701.22 1564.41C1701.22 1565.1 1701.38 1565.75 1701.7 1566.35C1702.03 1566.95 1702.48 1567.44 1703.05 1567.81C1703.62 1568.18 1704.27 1568.36 1705 1568.36Z"
        fill="#A9448C"
        id="path1154"
      />
      <path
        d="M1682.4 1650.42V1648.68L1690.07 1636.55H1691.33V1639.24H1690.48L1684.68 1648.41V1648.55H1695.01V1650.42H1682.4ZM1690.61 1654V1649.89V1649.08V1636.55H1692.62V1654H1690.61ZM1698.75 1654L1706.56 1638.56V1638.42H1697.56V1636.55H1708.74V1638.52L1700.97 1654H1698.75Z"
        fill="#A9448C"
        id="path1156"
      />
      <path
        d="M1682.4 1712.42V1710.68L1690.07 1698.55H1691.33V1701.24H1690.48L1684.68 1710.41V1710.55H1695.01V1712.42H1682.4ZM1690.61 1716V1711.89V1711.08V1698.55H1692.62V1716H1690.61ZM1703.8 1716.24C1702.63 1716.24 1701.59 1716.03 1700.69 1715.62C1699.8 1715.2 1699.11 1714.62 1698.61 1713.89C1698.11 1713.15 1697.86 1712.31 1697.86 1711.36C1697.86 1710.62 1698 1709.94 1698.3 1709.32C1698.59 1708.69 1699 1708.16 1699.51 1707.74C1700.03 1707.32 1700.6 1707.05 1701.24 1706.93V1706.83C1700.4 1706.61 1699.74 1706.14 1699.25 1705.42C1698.75 1704.7 1698.51 1703.87 1698.51 1702.94C1698.51 1702.06 1698.73 1701.26 1699.19 1700.57C1699.64 1699.87 1700.26 1699.32 1701.06 1698.91C1701.86 1698.51 1702.77 1698.31 1703.8 1698.31C1704.81 1698.31 1705.71 1698.51 1706.51 1698.91C1707.3 1699.32 1707.93 1699.87 1708.38 1700.57C1708.84 1701.26 1709.07 1702.06 1709.08 1702.94C1709.07 1703.87 1708.82 1704.7 1708.32 1705.42C1707.83 1706.14 1707.17 1706.61 1706.35 1706.83V1706.93C1706.98 1707.05 1707.55 1707.32 1708.06 1707.74C1708.56 1708.16 1708.97 1708.69 1709.27 1709.32C1709.57 1709.94 1709.72 1710.62 1709.73 1711.36C1709.72 1712.31 1709.47 1713.15 1708.96 1713.89C1708.46 1714.62 1707.76 1715.2 1706.87 1715.62C1705.99 1716.03 1704.96 1716.24 1703.8 1716.24ZM1703.8 1714.36C1704.59 1714.36 1705.27 1714.24 1705.84 1713.98C1706.42 1713.72 1706.86 1713.36 1707.17 1712.9C1707.48 1712.43 1707.64 1711.89 1707.65 1711.26C1707.64 1710.6 1707.47 1710.02 1707.14 1709.51C1706.8 1709.01 1706.34 1708.61 1705.76 1708.32C1705.19 1708.03 1704.53 1707.89 1703.8 1707.89C1703.05 1707.89 1702.39 1708.03 1701.8 1708.32C1701.22 1708.61 1700.76 1709.01 1700.43 1709.51C1700.1 1710.02 1699.94 1710.6 1699.94 1711.26C1699.94 1711.89 1700.09 1712.43 1700.4 1712.9C1700.71 1713.36 1701.15 1713.72 1701.73 1713.98C1702.31 1714.24 1703 1714.36 1703.8 1714.36ZM1703.8 1706.08C1704.42 1706.08 1704.98 1705.95 1705.46 1705.7C1705.95 1705.45 1706.33 1705.11 1706.61 1704.66C1706.89 1704.21 1707.03 1703.68 1707.03 1703.08C1707.03 1702.49 1706.89 1701.97 1706.62 1701.54C1706.34 1701.09 1705.97 1700.75 1705.48 1700.51C1705 1700.27 1704.44 1700.15 1703.8 1700.15C1703.14 1700.15 1702.57 1700.27 1702.08 1700.51C1701.59 1700.75 1701.22 1701.09 1700.95 1701.54C1700.68 1701.97 1700.55 1702.49 1700.56 1703.08C1700.55 1703.68 1700.69 1704.21 1700.96 1704.66C1701.24 1705.11 1701.62 1705.45 1702.11 1705.7C1702.6 1705.95 1703.16 1706.08 1703.8 1706.08Z"
        fill="#A9448C"
        id="path1158"
      />
      <path
        d="M1682.4 1786.42V1784.68L1690.07 1772.55H1691.33V1775.24H1690.48L1684.68 1784.41V1784.55H1695.01V1786.42H1682.4ZM1690.61 1790V1785.89V1785.08V1772.55H1692.62V1790H1690.61ZM1703.76 1772.31C1704.48 1772.31 1705.19 1772.45 1705.91 1772.72C1706.63 1772.98 1707.28 1773.43 1707.87 1774.05C1708.46 1774.66 1708.94 1775.5 1709.29 1776.56C1709.65 1777.62 1709.83 1778.95 1709.83 1780.56C1709.83 1782.11 1709.68 1783.49 1709.39 1784.69C1709.1 1785.89 1708.68 1786.9 1708.13 1787.72C1707.58 1788.55 1706.92 1789.17 1706.13 1789.6C1705.35 1790.03 1704.47 1790.24 1703.49 1790.24C1702.51 1790.24 1701.64 1790.05 1700.87 1789.66C1700.11 1789.27 1699.49 1788.72 1699 1788.03C1698.51 1787.33 1698.21 1786.52 1698.07 1785.6H1700.15C1700.34 1786.4 1700.71 1787.07 1701.26 1787.59C1701.83 1788.11 1702.57 1788.36 1703.49 1788.36C1704.84 1788.36 1705.9 1787.78 1706.68 1786.6C1707.46 1785.42 1707.85 1783.76 1707.85 1781.61H1707.72C1707.4 1782.09 1707.02 1782.5 1706.58 1782.85C1706.15 1783.2 1705.66 1783.46 1705.13 1783.65C1704.59 1783.84 1704.02 1783.93 1703.42 1783.93C1702.42 1783.93 1701.5 1783.68 1700.67 1783.19C1699.84 1782.69 1699.17 1782.01 1698.67 1781.14C1698.18 1780.26 1697.93 1779.26 1697.93 1778.14C1697.93 1777.07 1698.17 1776.09 1698.65 1775.2C1699.13 1774.31 1699.81 1773.6 1700.68 1773.07C1701.55 1772.55 1702.58 1772.29 1703.76 1772.31ZM1703.76 1774.18C1703.05 1774.18 1702.4 1774.36 1701.83 1774.72C1701.26 1775.07 1700.81 1775.55 1700.47 1776.15C1700.14 1776.75 1699.98 1777.41 1699.98 1778.14C1699.98 1778.86 1700.14 1779.53 1700.46 1780.12C1700.78 1780.71 1701.22 1781.18 1701.78 1781.54C1702.34 1781.88 1702.98 1782.06 1703.69 1782.06C1704.23 1782.06 1704.74 1781.95 1705.2 1781.74C1705.67 1781.53 1706.07 1781.23 1706.42 1780.86C1706.77 1780.49 1707.05 1780.07 1707.25 1779.59C1707.45 1779.12 1707.55 1778.62 1707.55 1778.1C1707.55 1777.42 1707.38 1776.78 1707.05 1776.18C1706.73 1775.59 1706.28 1775.11 1705.71 1774.74C1705.14 1774.37 1704.49 1774.18 1703.76 1774.18Z"
        fill="#A9448C"
        id="path1160"
      />
      <path
        d="M1536.26 1730.24C1535.26 1730.24 1534.36 1730.04 1533.56 1729.64C1532.76 1729.24 1532.12 1728.7 1531.63 1728.01C1531.15 1727.31 1530.89 1726.52 1530.84 1725.64H1532.89C1532.97 1726.43 1533.32 1727.08 1533.96 1727.6C1534.6 1728.11 1535.37 1728.36 1536.26 1728.36C1536.98 1728.36 1537.61 1728.2 1538.17 1727.86C1538.73 1727.53 1539.17 1727.07 1539.49 1726.48C1539.82 1725.89 1539.98 1725.22 1539.98 1724.48C1539.98 1723.72 1539.81 1723.04 1539.47 1722.44C1539.14 1721.84 1538.69 1721.36 1538.11 1721.02C1537.53 1720.67 1536.87 1720.49 1536.12 1720.49C1535.59 1720.48 1535.04 1720.57 1534.48 1720.74C1533.92 1720.9 1533.45 1721.11 1533.09 1721.38L1531.11 1721.14L1532.17 1712.55H1541.24V1714.42H1533.94L1533.33 1719.57H1533.43C1533.79 1719.28 1534.24 1719.05 1534.78 1718.86C1535.32 1718.67 1535.88 1718.58 1536.47 1718.58C1537.53 1718.58 1538.49 1718.84 1539.32 1719.35C1540.16 1719.85 1540.82 1720.55 1541.3 1721.43C1541.78 1722.31 1542.02 1723.31 1542.02 1724.44C1542.02 1725.56 1541.77 1726.55 1541.27 1727.43C1540.78 1728.3 1540.1 1728.98 1539.23 1729.49C1538.36 1729.99 1537.37 1730.24 1536.26 1730.24ZM1551.1 1730.24C1549.82 1730.24 1548.72 1729.89 1547.82 1729.19C1546.92 1728.49 1546.23 1727.47 1545.75 1726.13C1545.27 1724.79 1545.03 1723.17 1545.03 1721.27C1545.03 1719.39 1545.27 1717.78 1545.75 1716.44C1546.23 1715.1 1546.93 1714.08 1547.83 1713.37C1548.74 1712.66 1549.83 1712.31 1551.1 1712.31C1552.37 1712.31 1553.46 1712.66 1554.37 1713.37C1555.27 1714.08 1555.97 1715.1 1556.45 1716.44C1556.93 1717.78 1557.17 1719.39 1557.17 1721.27C1557.17 1723.17 1556.93 1724.79 1556.45 1726.13C1555.98 1727.47 1555.29 1728.49 1554.38 1729.19C1553.48 1729.89 1552.39 1730.24 1551.1 1730.24ZM1551.1 1728.36C1552.37 1728.36 1553.36 1727.75 1554.07 1726.52C1554.77 1725.3 1555.12 1723.55 1555.12 1721.27C1555.12 1719.76 1554.96 1718.47 1554.64 1717.41C1554.32 1716.35 1553.86 1715.54 1553.26 1714.98C1552.66 1714.43 1551.94 1714.15 1551.1 1714.15C1549.84 1714.15 1548.85 1714.77 1548.14 1716.01C1547.43 1717.25 1547.08 1719.01 1547.08 1721.27C1547.08 1722.78 1547.24 1724.07 1547.56 1725.12C1547.87 1726.18 1548.33 1726.99 1548.93 1727.54C1549.53 1728.09 1550.25 1728.36 1551.1 1728.36Z"
        fill="#A9448C"
        id="path1162"
      />
      <path
        d="M1510.6 821.239C1509.89 821.227 1509.17 821.091 1508.45 820.83C1507.74 820.568 1507.09 820.128 1506.49 819.509C1505.9 818.884 1505.43 818.04 1505.07 816.977C1504.71 815.909 1504.53 814.568 1504.53 812.955C1504.53 811.409 1504.68 810.04 1504.97 808.847C1505.26 807.648 1505.68 806.639 1506.23 805.821C1506.78 804.997 1507.45 804.372 1508.22 803.946C1509.01 803.52 1509.89 803.307 1510.88 803.307C1511.85 803.307 1512.72 803.503 1513.48 803.895C1514.25 804.281 1514.88 804.821 1515.36 805.514C1515.84 806.207 1516.15 807.006 1516.3 807.909H1514.22C1514.02 807.125 1513.65 806.474 1513.09 805.957C1512.53 805.44 1511.8 805.182 1510.88 805.182C1509.52 805.182 1508.46 805.77 1507.68 806.946C1506.91 808.122 1506.52 809.773 1506.51 811.898H1506.65C1506.97 811.415 1507.34 811.003 1507.78 810.662C1508.22 810.315 1508.71 810.048 1509.25 809.861C1509.78 809.673 1510.35 809.58 1510.94 809.58C1511.94 809.58 1512.86 809.83 1513.69 810.33C1514.52 810.824 1515.18 811.509 1515.68 812.384C1516.18 813.253 1516.43 814.25 1516.43 815.375C1516.43 816.455 1516.19 817.443 1515.71 818.341C1515.22 819.233 1514.55 819.943 1513.67 820.472C1512.8 820.994 1511.78 821.25 1510.6 821.239ZM1510.6 819.364C1511.32 819.364 1511.96 819.185 1512.53 818.827C1513.1 818.469 1513.55 817.989 1513.88 817.386C1514.22 816.784 1514.39 816.114 1514.39 815.375C1514.39 814.653 1514.22 813.997 1513.9 813.406C1513.58 812.81 1513.14 812.335 1512.58 811.983C1512.02 811.631 1511.39 811.455 1510.67 811.455C1510.13 811.455 1509.63 811.562 1509.16 811.778C1508.7 811.989 1508.29 812.278 1507.93 812.648C1507.59 813.017 1507.32 813.44 1507.12 813.918C1506.92 814.389 1506.82 814.886 1506.82 815.409C1506.82 816.102 1506.98 816.75 1507.3 817.352C1507.63 817.955 1508.08 818.44 1508.65 818.81C1509.22 819.179 1509.88 819.364 1510.6 819.364ZM1525.92 803.545V821H1523.81V805.761H1523.7L1519.44 808.591V806.443L1523.81 803.545H1525.92Z"
        fill="#A9448C"
        id="path1164"
      />
      <path
        d="M1517.6 740.239C1516.89 740.227 1516.17 740.091 1515.45 739.83C1514.74 739.568 1514.09 739.128 1513.49 738.509C1512.9 737.884 1512.43 737.04 1512.07 735.977C1511.71 734.909 1511.53 733.568 1511.53 731.955C1511.53 730.409 1511.68 729.04 1511.97 727.847C1512.26 726.648 1512.68 725.639 1513.23 724.821C1513.78 723.997 1514.45 723.372 1515.22 722.946C1516.01 722.52 1516.89 722.307 1517.88 722.307C1518.85 722.307 1519.72 722.503 1520.48 722.895C1521.25 723.281 1521.88 723.821 1522.36 724.514C1522.84 725.207 1523.15 726.006 1523.3 726.909H1521.22C1521.02 726.125 1520.65 725.474 1520.09 724.957C1519.53 724.44 1518.8 724.182 1517.88 724.182C1516.52 724.182 1515.46 724.77 1514.68 725.946C1513.91 727.122 1513.52 728.773 1513.51 730.898H1513.65C1513.97 730.415 1514.34 730.003 1514.78 729.662C1515.22 729.315 1515.71 729.048 1516.25 728.861C1516.78 728.673 1517.35 728.58 1517.94 728.58C1518.94 728.58 1519.86 728.83 1520.69 729.33C1521.52 729.824 1522.18 730.509 1522.68 731.384C1523.18 732.253 1523.43 733.25 1523.43 734.375C1523.43 735.455 1523.19 736.443 1522.71 737.341C1522.22 738.233 1521.55 738.943 1520.67 739.472C1519.8 739.994 1518.78 740.25 1517.6 740.239ZM1517.6 738.364C1518.32 738.364 1518.96 738.185 1519.53 737.827C1520.1 737.469 1520.55 736.989 1520.88 736.386C1521.22 735.784 1521.39 735.114 1521.39 734.375C1521.39 733.653 1521.22 732.997 1520.9 732.406C1520.58 731.81 1520.14 731.335 1519.58 730.983C1519.02 730.631 1518.39 730.455 1517.67 730.455C1517.13 730.455 1516.63 730.562 1516.16 730.778C1515.7 730.989 1515.29 731.278 1514.93 731.648C1514.59 732.017 1514.32 732.44 1514.12 732.918C1513.92 733.389 1513.82 733.886 1513.82 734.409C1513.82 735.102 1513.98 735.75 1514.3 736.352C1514.63 736.955 1515.08 737.44 1515.65 737.81C1516.22 738.179 1516.88 738.364 1517.6 738.364ZM1526.78 740V738.466L1532.54 732.159C1533.22 731.42 1533.78 730.778 1534.22 730.233C1534.65 729.682 1534.98 729.165 1535.19 728.682C1535.4 728.193 1535.51 727.682 1535.51 727.148C1535.51 726.534 1535.36 726.003 1535.07 725.554C1534.78 725.105 1534.38 724.759 1533.87 724.514C1533.37 724.27 1532.8 724.148 1532.17 724.148C1531.5 724.148 1530.91 724.287 1530.41 724.565C1529.92 724.838 1529.54 725.222 1529.26 725.716C1529 726.21 1528.86 726.79 1528.86 727.455H1526.85C1526.85 726.432 1527.09 725.534 1527.56 724.761C1528.03 723.989 1528.67 723.386 1529.49 722.955C1530.3 722.523 1531.22 722.307 1532.24 722.307C1533.26 722.307 1534.17 722.523 1534.96 722.955C1535.75 723.386 1536.37 723.969 1536.81 724.702C1537.26 725.435 1537.49 726.25 1537.49 727.148C1537.49 727.79 1537.37 728.418 1537.14 729.031C1536.91 729.639 1536.51 730.318 1535.95 731.068C1535.38 731.812 1534.6 732.722 1533.6 733.795L1529.68 737.989V738.125H1537.79V740H1526.78Z"
        fill="#A9448C"
        id="path1166"
      />
      <path
        d="M1510.6 540.239C1509.89 540.227 1509.17 540.091 1508.45 539.83C1507.74 539.568 1507.09 539.128 1506.49 538.509C1505.9 537.884 1505.43 537.04 1505.07 535.977C1504.71 534.909 1504.53 533.568 1504.53 531.955C1504.53 530.409 1504.68 529.04 1504.97 527.847C1505.26 526.648 1505.68 525.639 1506.23 524.821C1506.78 523.997 1507.45 523.372 1508.22 522.946C1509.01 522.52 1509.89 522.307 1510.88 522.307C1511.85 522.307 1512.72 522.503 1513.48 522.895C1514.25 523.281 1514.88 523.821 1515.36 524.514C1515.84 525.207 1516.15 526.006 1516.3 526.909H1514.22C1514.02 526.125 1513.65 525.474 1513.09 524.957C1512.53 524.44 1511.8 524.182 1510.88 524.182C1509.52 524.182 1508.46 524.77 1507.68 525.946C1506.91 527.122 1506.52 528.773 1506.51 530.898H1506.65C1506.97 530.415 1507.34 530.003 1507.78 529.662C1508.22 529.315 1508.71 529.048 1509.25 528.861C1509.78 528.673 1510.35 528.58 1510.94 528.58C1511.94 528.58 1512.86 528.83 1513.69 529.33C1514.52 529.824 1515.18 530.509 1515.68 531.384C1516.18 532.253 1516.43 533.25 1516.43 534.375C1516.43 535.455 1516.19 536.443 1515.71 537.341C1515.22 538.233 1514.55 538.943 1513.67 539.472C1512.8 539.994 1511.78 540.25 1510.6 540.239ZM1510.6 538.364C1511.32 538.364 1511.96 538.185 1512.53 537.827C1513.1 537.469 1513.55 536.989 1513.88 536.386C1514.22 535.784 1514.39 535.114 1514.39 534.375C1514.39 533.653 1514.22 532.997 1513.9 532.406C1513.58 531.81 1513.14 531.335 1512.58 530.983C1512.02 530.631 1511.39 530.455 1510.67 530.455C1510.13 530.455 1509.63 530.562 1509.16 530.778C1508.7 530.989 1508.29 531.278 1507.93 531.648C1507.59 532.017 1507.32 532.44 1507.12 532.918C1506.92 533.389 1506.82 533.886 1506.82 534.409C1506.82 535.102 1506.98 535.75 1507.3 536.352C1507.63 536.955 1508.08 537.44 1508.65 537.81C1509.22 538.179 1509.88 538.364 1510.6 538.364ZM1525.68 540.239C1524.56 540.239 1523.55 540.045 1522.67 539.659C1521.8 539.273 1521.1 538.736 1520.58 538.048C1520.07 537.355 1519.79 536.551 1519.75 535.636H1521.9C1521.94 536.199 1522.14 536.685 1522.48 537.094C1522.82 537.497 1523.26 537.81 1523.81 538.031C1524.37 538.253 1524.98 538.364 1525.65 538.364C1526.4 538.364 1527.06 538.233 1527.64 537.972C1528.22 537.71 1528.68 537.347 1529 536.881C1529.33 536.415 1529.5 535.875 1529.5 535.261C1529.5 534.619 1529.34 534.054 1529.02 533.565C1528.7 533.071 1528.24 532.685 1527.62 532.406C1527.01 532.128 1526.26 531.989 1525.37 531.989H1523.98V530.114H1525.37C1526.07 530.114 1526.68 529.989 1527.2 529.739C1527.73 529.489 1528.14 529.136 1528.43 528.682C1528.74 528.227 1528.89 527.693 1528.89 527.08C1528.89 526.489 1528.75 525.974 1528.49 525.537C1528.23 525.099 1527.86 524.759 1527.39 524.514C1526.91 524.27 1526.36 524.148 1525.72 524.148C1525.11 524.148 1524.54 524.259 1524.01 524.48C1523.48 524.696 1523.05 525.011 1522.72 525.426C1522.38 525.835 1522.2 526.33 1522.17 526.909H1520.12C1520.16 525.994 1520.43 525.193 1520.95 524.506C1521.47 523.812 1522.14 523.273 1522.98 522.886C1523.82 522.5 1524.74 522.307 1525.75 522.307C1526.83 522.307 1527.75 522.526 1528.53 522.963C1529.3 523.395 1529.89 523.966 1530.31 524.676C1530.72 525.386 1530.93 526.153 1530.93 526.977C1530.93 527.96 1530.67 528.798 1530.16 529.491C1529.64 530.185 1528.95 530.665 1528.07 530.932V531.068C1529.17 531.25 1530.03 531.719 1530.65 532.474C1531.27 533.224 1531.58 534.153 1531.58 535.261C1531.58 536.21 1531.32 537.062 1530.8 537.818C1530.29 538.568 1529.59 539.159 1528.71 539.591C1527.82 540.023 1526.81 540.239 1525.68 540.239Z"
        fill="#A9448C"
        id="path1168"
      />
      <path
        d="M1515.6 428.239C1514.89 428.227 1514.17 428.091 1513.45 427.83C1512.74 427.568 1512.09 427.128 1511.49 426.509C1510.9 425.884 1510.43 425.04 1510.07 423.977C1509.71 422.909 1509.53 421.568 1509.53 419.955C1509.53 418.409 1509.68 417.04 1509.97 415.847C1510.26 414.648 1510.68 413.639 1511.23 412.821C1511.78 411.997 1512.45 411.372 1513.22 410.946C1514.01 410.52 1514.89 410.307 1515.88 410.307C1516.85 410.307 1517.72 410.503 1518.48 410.895C1519.25 411.281 1519.88 411.821 1520.36 412.514C1520.84 413.207 1521.15 414.006 1521.3 414.909H1519.22C1519.02 414.125 1518.65 413.474 1518.09 412.957C1517.53 412.44 1516.8 412.182 1515.88 412.182C1514.52 412.182 1513.46 412.77 1512.68 413.946C1511.91 415.122 1511.52 416.773 1511.51 418.898H1511.65C1511.97 418.415 1512.34 418.003 1512.78 417.662C1513.22 417.315 1513.71 417.048 1514.25 416.861C1514.78 416.673 1515.35 416.58 1515.94 416.58C1516.94 416.58 1517.86 416.83 1518.69 417.33C1519.52 417.824 1520.18 418.509 1520.68 419.384C1521.18 420.253 1521.43 421.25 1521.43 422.375C1521.43 423.455 1521.19 424.443 1520.71 425.341C1520.22 426.233 1519.55 426.943 1518.67 427.472C1517.8 427.994 1516.78 428.25 1515.6 428.239ZM1515.6 426.364C1516.32 426.364 1516.96 426.185 1517.53 425.827C1518.1 425.469 1518.55 424.989 1518.88 424.386C1519.22 423.784 1519.39 423.114 1519.39 422.375C1519.39 421.653 1519.22 420.997 1518.9 420.406C1518.58 419.81 1518.14 419.335 1517.58 418.983C1517.02 418.631 1516.39 418.455 1515.67 418.455C1515.13 418.455 1514.63 418.562 1514.16 418.778C1513.7 418.989 1513.29 419.278 1512.93 419.648C1512.59 420.017 1512.32 420.44 1512.12 420.918C1511.92 421.389 1511.82 421.886 1511.82 422.409C1511.82 423.102 1511.98 423.75 1512.3 424.352C1512.63 424.955 1513.08 425.44 1513.65 425.81C1514.22 426.179 1514.88 426.364 1515.6 426.364ZM1524.37 424.42V422.682L1532.04 410.545H1533.31V413.239H1532.45L1526.66 422.409V422.545H1536.99V424.42H1524.37ZM1532.59 428V423.892V423.082V410.545H1534.6V428H1532.59Z"
        fill="#A9448C"
        id="path1170"
      />
      <path
        d="M1515.6 318.239C1514.89 318.227 1514.17 318.091 1513.45 317.83C1512.74 317.568 1512.09 317.128 1511.49 316.509C1510.9 315.884 1510.43 315.04 1510.07 313.977C1509.71 312.909 1509.53 311.568 1509.53 309.955C1509.53 308.409 1509.68 307.04 1509.97 305.847C1510.26 304.648 1510.68 303.639 1511.23 302.821C1511.78 301.997 1512.45 301.372 1513.22 300.946C1514.01 300.52 1514.89 300.307 1515.88 300.307C1516.85 300.307 1517.72 300.503 1518.48 300.895C1519.25 301.281 1519.88 301.821 1520.36 302.514C1520.84 303.207 1521.15 304.006 1521.3 304.909H1519.22C1519.02 304.125 1518.65 303.474 1518.09 302.957C1517.53 302.44 1516.8 302.182 1515.88 302.182C1514.52 302.182 1513.46 302.77 1512.68 303.946C1511.91 305.122 1511.52 306.773 1511.51 308.898H1511.65C1511.97 308.415 1512.34 308.003 1512.78 307.662C1513.22 307.315 1513.71 307.048 1514.25 306.861C1514.78 306.673 1515.35 306.58 1515.94 306.58C1516.94 306.58 1517.86 306.83 1518.69 307.33C1519.52 307.824 1520.18 308.509 1520.68 309.384C1521.18 310.253 1521.43 311.25 1521.43 312.375C1521.43 313.455 1521.19 314.443 1520.71 315.341C1520.22 316.233 1519.55 316.943 1518.67 317.472C1517.8 317.994 1516.78 318.25 1515.6 318.239ZM1515.6 316.364C1516.32 316.364 1516.96 316.185 1517.53 315.827C1518.1 315.469 1518.55 314.989 1518.88 314.386C1519.22 313.784 1519.39 313.114 1519.39 312.375C1519.39 311.653 1519.22 310.997 1518.9 310.406C1518.58 309.81 1518.14 309.335 1517.58 308.983C1517.02 308.631 1516.39 308.455 1515.67 308.455C1515.13 308.455 1514.63 308.562 1514.16 308.778C1513.7 308.989 1513.29 309.278 1512.93 309.648C1512.59 310.017 1512.32 310.44 1512.12 310.918C1511.92 311.389 1511.82 311.886 1511.82 312.409C1511.82 313.102 1511.98 313.75 1512.3 314.352C1512.63 314.955 1513.08 315.44 1513.65 315.81C1514.22 316.179 1514.88 316.364 1515.6 316.364ZM1530.24 318.239C1529.24 318.239 1528.34 318.04 1527.54 317.642C1526.74 317.244 1526.09 316.699 1525.61 316.006C1525.13 315.312 1524.86 314.523 1524.82 313.636H1526.86C1526.94 314.426 1527.3 315.08 1527.94 315.597C1528.58 316.108 1529.35 316.364 1530.24 316.364C1530.95 316.364 1531.59 316.196 1532.15 315.861C1532.71 315.526 1533.15 315.065 1533.47 314.48C1533.79 313.889 1533.95 313.222 1533.95 312.477C1533.95 311.716 1533.79 311.037 1533.45 310.44C1533.12 309.838 1532.67 309.364 1532.09 309.017C1531.51 308.67 1530.85 308.494 1530.1 308.489C1529.57 308.483 1529.02 308.565 1528.46 308.736C1527.89 308.901 1527.43 309.114 1527.07 309.375L1525.09 309.136L1526.15 300.545H1535.22V302.42H1527.92L1527.31 307.568H1527.41C1527.77 307.284 1528.22 307.048 1528.75 306.861C1529.29 306.673 1529.86 306.58 1530.44 306.58C1531.51 306.58 1532.46 306.835 1533.3 307.347C1534.14 307.852 1534.8 308.545 1535.27 309.426C1535.76 310.307 1536 311.312 1536 312.443C1536 313.557 1535.75 314.551 1535.25 315.426C1534.75 316.295 1534.07 316.983 1533.2 317.489C1532.33 317.989 1531.35 318.239 1530.24 318.239Z"
        fill="#A9448C"
        id="path1172"
      />
      <path
        d="M1404.6 279.239C1403.89 279.227 1403.17 279.091 1402.45 278.83C1401.74 278.568 1401.09 278.128 1400.49 277.509C1399.9 276.884 1399.43 276.04 1399.07 274.977C1398.71 273.909 1398.53 272.568 1398.53 270.955C1398.53 269.409 1398.68 268.04 1398.97 266.847C1399.26 265.648 1399.68 264.639 1400.23 263.821C1400.78 262.997 1401.45 262.372 1402.22 261.946C1403.01 261.52 1403.89 261.307 1404.88 261.307C1405.85 261.307 1406.72 261.503 1407.48 261.895C1408.25 262.281 1408.88 262.821 1409.36 263.514C1409.84 264.207 1410.15 265.006 1410.3 265.909H1408.22C1408.02 265.125 1407.65 264.474 1407.09 263.957C1406.53 263.44 1405.8 263.182 1404.88 263.182C1403.52 263.182 1402.46 263.77 1401.68 264.946C1400.91 266.122 1400.52 267.773 1400.51 269.898H1400.65C1400.97 269.415 1401.34 269.003 1401.78 268.662C1402.22 268.315 1402.71 268.048 1403.25 267.861C1403.78 267.673 1404.35 267.58 1404.94 267.58C1405.94 267.58 1406.86 267.83 1407.69 268.33C1408.52 268.824 1409.18 269.509 1409.68 270.384C1410.18 271.253 1410.43 272.25 1410.43 273.375C1410.43 274.455 1410.19 275.443 1409.71 276.341C1409.22 277.233 1408.55 277.943 1407.67 278.472C1406.8 278.994 1405.78 279.25 1404.6 279.239ZM1404.6 277.364C1405.32 277.364 1405.96 277.185 1406.53 276.827C1407.1 276.469 1407.55 275.989 1407.88 275.386C1408.22 274.784 1408.39 274.114 1408.39 273.375C1408.39 272.653 1408.22 271.997 1407.9 271.406C1407.58 270.81 1407.14 270.335 1406.58 269.983C1406.02 269.631 1405.39 269.455 1404.67 269.455C1404.13 269.455 1403.63 269.562 1403.16 269.778C1402.7 269.989 1402.29 270.278 1401.93 270.648C1401.59 271.017 1401.32 271.44 1401.12 271.918C1400.92 272.389 1400.82 272.886 1400.82 273.409C1400.82 274.102 1400.98 274.75 1401.3 275.352C1401.63 275.955 1402.08 276.44 1402.65 276.81C1403.22 277.179 1403.88 277.364 1404.6 277.364ZM1419.58 279.239C1418.86 279.227 1418.15 279.091 1417.43 278.83C1416.72 278.568 1416.06 278.128 1415.47 277.509C1414.88 276.884 1414.41 276.04 1414.05 274.977C1413.69 273.909 1413.51 272.568 1413.51 270.955C1413.51 269.409 1413.66 268.04 1413.95 266.847C1414.24 265.648 1414.66 264.639 1415.21 263.821C1415.76 262.997 1416.42 262.372 1417.2 261.946C1417.99 261.52 1418.87 261.307 1419.85 261.307C1420.83 261.307 1421.7 261.503 1422.46 261.895C1423.23 262.281 1423.85 262.821 1424.33 263.514C1424.82 264.207 1425.13 265.006 1425.27 265.909H1423.19C1423 265.125 1422.62 264.474 1422.07 263.957C1421.51 263.44 1420.77 263.182 1419.85 263.182C1418.5 263.182 1417.43 263.77 1416.66 264.946C1415.88 266.122 1415.49 267.773 1415.49 269.898H1415.62C1415.94 269.415 1416.32 269.003 1416.76 268.662C1417.2 268.315 1417.69 268.048 1418.22 267.861C1418.76 267.673 1419.32 267.58 1419.92 267.58C1420.92 267.58 1421.83 267.83 1422.66 268.33C1423.49 268.824 1424.16 269.509 1424.66 270.384C1425.16 271.253 1425.41 272.25 1425.41 273.375C1425.41 274.455 1425.17 275.443 1424.68 276.341C1424.2 277.233 1423.52 277.943 1422.65 278.472C1421.78 278.994 1420.75 279.25 1419.58 279.239ZM1419.58 277.364C1420.29 277.364 1420.94 277.185 1421.5 276.827C1422.08 276.469 1422.53 275.989 1422.86 275.386C1423.2 274.784 1423.36 274.114 1423.36 273.375C1423.36 272.653 1423.2 271.997 1422.88 271.406C1422.56 270.81 1422.12 270.335 1421.56 269.983C1421 269.631 1420.36 269.455 1419.65 269.455C1419.11 269.455 1418.6 269.562 1418.14 269.778C1417.67 269.989 1417.26 270.278 1416.91 270.648C1416.56 271.017 1416.29 271.44 1416.09 271.918C1415.89 272.389 1415.79 272.886 1415.79 273.409C1415.79 274.102 1415.96 274.75 1416.28 275.352C1416.61 275.955 1417.06 276.44 1417.63 276.81C1418.2 277.179 1418.85 277.364 1419.58 277.364Z"
        fill="#A9448C"
        id="path1174"
      />
      <path
        d="M1404.6 348.239C1403.89 348.227 1403.17 348.091 1402.45 347.83C1401.74 347.568 1401.09 347.128 1400.49 346.509C1399.9 345.884 1399.43 345.04 1399.07 343.977C1398.71 342.909 1398.53 341.568 1398.53 339.955C1398.53 338.409 1398.68 337.04 1398.97 335.847C1399.26 334.648 1399.68 333.639 1400.23 332.821C1400.78 331.997 1401.45 331.372 1402.22 330.946C1403.01 330.52 1403.89 330.307 1404.88 330.307C1405.85 330.307 1406.72 330.503 1407.48 330.895C1408.25 331.281 1408.88 331.821 1409.36 332.514C1409.84 333.207 1410.15 334.006 1410.3 334.909H1408.22C1408.02 334.125 1407.65 333.474 1407.09 332.957C1406.53 332.44 1405.8 332.182 1404.88 332.182C1403.52 332.182 1402.46 332.77 1401.68 333.946C1400.91 335.122 1400.52 336.773 1400.51 338.898H1400.65C1400.97 338.415 1401.34 338.003 1401.78 337.662C1402.22 337.315 1402.71 337.048 1403.25 336.861C1403.78 336.673 1404.35 336.58 1404.94 336.58C1405.94 336.58 1406.86 336.83 1407.69 337.33C1408.52 337.824 1409.18 338.509 1409.68 339.384C1410.18 340.253 1410.43 341.25 1410.43 342.375C1410.43 343.455 1410.19 344.443 1409.71 345.341C1409.22 346.233 1408.55 346.943 1407.67 347.472C1406.8 347.994 1405.78 348.25 1404.6 348.239ZM1404.6 346.364C1405.32 346.364 1405.96 346.185 1406.53 345.827C1407.1 345.469 1407.55 344.989 1407.88 344.386C1408.22 343.784 1408.39 343.114 1408.39 342.375C1408.39 341.653 1408.22 340.997 1407.9 340.406C1407.58 339.81 1407.14 339.335 1406.58 338.983C1406.02 338.631 1405.39 338.455 1404.67 338.455C1404.13 338.455 1403.63 338.562 1403.16 338.778C1402.7 338.989 1402.29 339.278 1401.93 339.648C1401.59 340.017 1401.32 340.44 1401.12 340.918C1400.92 341.389 1400.82 341.886 1400.82 342.409C1400.82 343.102 1400.98 343.75 1401.3 344.352C1401.63 344.955 1402.08 345.44 1402.65 345.81C1403.22 346.179 1403.88 346.364 1404.6 346.364ZM1414.33 348L1422.14 332.557V332.42H1413.14V330.545H1424.32V332.523L1416.54 348H1414.33Z"
        fill="#A9448C"
        id="path1176"
      />
      <path
        d="M1404.6 420.239C1403.89 420.227 1403.17 420.091 1402.45 419.83C1401.74 419.568 1401.09 419.128 1400.49 418.509C1399.9 417.884 1399.43 417.04 1399.07 415.977C1398.71 414.909 1398.53 413.568 1398.53 411.955C1398.53 410.409 1398.68 409.04 1398.97 407.847C1399.26 406.648 1399.68 405.639 1400.23 404.821C1400.78 403.997 1401.45 403.372 1402.22 402.946C1403.01 402.52 1403.89 402.307 1404.88 402.307C1405.85 402.307 1406.72 402.503 1407.48 402.895C1408.25 403.281 1408.88 403.821 1409.36 404.514C1409.84 405.207 1410.15 406.006 1410.3 406.909H1408.22C1408.02 406.125 1407.65 405.474 1407.09 404.957C1406.53 404.44 1405.8 404.182 1404.88 404.182C1403.52 404.182 1402.46 404.77 1401.68 405.946C1400.91 407.122 1400.52 408.773 1400.51 410.898H1400.65C1400.97 410.415 1401.34 410.003 1401.78 409.662C1402.22 409.315 1402.71 409.048 1403.25 408.861C1403.78 408.673 1404.35 408.58 1404.94 408.58C1405.94 408.58 1406.86 408.83 1407.69 409.33C1408.52 409.824 1409.18 410.509 1409.68 411.384C1410.18 412.253 1410.43 413.25 1410.43 414.375C1410.43 415.455 1410.19 416.443 1409.71 417.341C1409.22 418.233 1408.55 418.943 1407.67 419.472C1406.8 419.994 1405.78 420.25 1404.6 420.239ZM1404.6 418.364C1405.32 418.364 1405.96 418.185 1406.53 417.827C1407.1 417.469 1407.55 416.989 1407.88 416.386C1408.22 415.784 1408.39 415.114 1408.39 414.375C1408.39 413.653 1408.22 412.997 1407.9 412.406C1407.58 411.81 1407.14 411.335 1406.58 410.983C1406.02 410.631 1405.39 410.455 1404.67 410.455C1404.13 410.455 1403.63 410.562 1403.16 410.778C1402.7 410.989 1402.29 411.278 1401.93 411.648C1401.59 412.017 1401.32 412.44 1401.12 412.918C1400.92 413.389 1400.82 413.886 1400.82 414.409C1400.82 415.102 1400.98 415.75 1401.3 416.352C1401.63 416.955 1402.08 417.44 1402.65 417.81C1403.22 418.179 1403.88 418.364 1404.6 418.364ZM1419.37 420.239C1418.2 420.239 1417.17 420.031 1416.27 419.616C1415.38 419.196 1414.68 418.619 1414.18 417.886C1413.68 417.148 1413.44 416.307 1413.44 415.364C1413.44 414.625 1413.58 413.943 1413.88 413.318C1414.17 412.687 1414.58 412.162 1415.09 411.741C1415.6 411.315 1416.18 411.045 1416.82 410.932V410.83C1415.98 410.614 1415.32 410.145 1414.82 409.423C1414.33 408.696 1414.08 407.869 1414.09 406.943C1414.08 406.057 1414.31 405.264 1414.76 404.565C1415.22 403.866 1415.84 403.315 1416.64 402.912C1417.44 402.509 1418.35 402.307 1419.37 402.307C1420.39 402.307 1421.29 402.509 1422.08 402.912C1422.88 403.315 1423.5 403.866 1423.96 404.565C1424.42 405.264 1424.65 406.057 1424.66 406.943C1424.65 407.869 1424.4 408.696 1423.9 409.423C1423.41 410.145 1422.75 410.614 1421.93 410.83V410.932C1422.56 411.045 1423.13 411.315 1423.64 411.741C1424.14 412.162 1424.54 412.687 1424.85 413.318C1425.15 413.943 1425.3 414.625 1425.31 415.364C1425.3 416.307 1425.04 417.148 1424.54 417.886C1424.04 418.619 1423.34 419.196 1422.45 419.616C1421.56 420.031 1420.54 420.239 1419.37 420.239ZM1419.37 418.364C1420.16 418.364 1420.85 418.236 1421.42 417.98C1421.99 417.724 1422.44 417.364 1422.75 416.898C1423.06 416.432 1423.22 415.886 1423.23 415.261C1423.22 414.602 1423.05 414.02 1422.72 413.514C1422.38 413.009 1421.92 412.611 1421.34 412.321C1420.77 412.031 1420.11 411.886 1419.37 411.886C1418.63 411.886 1417.97 412.031 1417.38 412.321C1416.8 412.611 1416.34 413.009 1416.01 413.514C1415.68 414.02 1415.52 414.602 1415.52 415.261C1415.52 415.886 1415.67 416.432 1415.97 416.898C1416.29 417.364 1416.73 417.724 1417.31 417.98C1417.89 418.236 1418.58 418.364 1419.37 418.364ZM1419.37 410.08C1420 410.08 1420.55 409.955 1421.04 409.705C1421.52 409.455 1421.91 409.105 1422.19 408.656C1422.47 408.207 1422.61 407.682 1422.61 407.08C1422.61 406.489 1422.47 405.974 1422.2 405.537C1421.92 405.094 1421.54 404.753 1421.06 404.514C1420.58 404.27 1420.02 404.148 1419.37 404.148C1418.72 404.148 1418.15 404.27 1417.66 404.514C1417.17 404.753 1416.79 405.094 1416.53 405.537C1416.26 405.974 1416.13 406.489 1416.14 407.08C1416.13 407.682 1416.26 408.207 1416.54 408.656C1416.81 409.105 1417.2 409.455 1417.69 409.705C1418.18 409.955 1418.74 410.08 1419.37 410.08Z"
        fill="#A9448C"
        id="path1178"
      />
      <path
        d="M1404.6 524.239C1403.89 524.227 1403.17 524.091 1402.45 523.83C1401.74 523.568 1401.09 523.128 1400.49 522.509C1399.9 521.884 1399.43 521.04 1399.07 519.977C1398.71 518.909 1398.53 517.568 1398.53 515.955C1398.53 514.409 1398.68 513.04 1398.97 511.847C1399.26 510.648 1399.68 509.639 1400.23 508.821C1400.78 507.997 1401.45 507.372 1402.22 506.946C1403.01 506.52 1403.89 506.307 1404.88 506.307C1405.85 506.307 1406.72 506.503 1407.48 506.895C1408.25 507.281 1408.88 507.821 1409.36 508.514C1409.84 509.207 1410.15 510.006 1410.3 510.909H1408.22C1408.02 510.125 1407.65 509.474 1407.09 508.957C1406.53 508.44 1405.8 508.182 1404.88 508.182C1403.52 508.182 1402.46 508.77 1401.68 509.946C1400.91 511.122 1400.52 512.773 1400.51 514.898H1400.65C1400.97 514.415 1401.34 514.003 1401.78 513.662C1402.22 513.315 1402.71 513.048 1403.25 512.861C1403.78 512.673 1404.35 512.58 1404.94 512.58C1405.94 512.58 1406.86 512.83 1407.69 513.33C1408.52 513.824 1409.18 514.509 1409.68 515.384C1410.18 516.253 1410.43 517.25 1410.43 518.375C1410.43 519.455 1410.19 520.443 1409.71 521.341C1409.22 522.233 1408.55 522.943 1407.67 523.472C1406.8 523.994 1405.78 524.25 1404.6 524.239ZM1404.6 522.364C1405.32 522.364 1405.96 522.185 1406.53 521.827C1407.1 521.469 1407.55 520.989 1407.88 520.386C1408.22 519.784 1408.39 519.114 1408.39 518.375C1408.39 517.653 1408.22 516.997 1407.9 516.406C1407.58 515.81 1407.14 515.335 1406.58 514.983C1406.02 514.631 1405.39 514.455 1404.67 514.455C1404.13 514.455 1403.63 514.562 1403.16 514.778C1402.7 514.989 1402.29 515.278 1401.93 515.648C1401.59 516.017 1401.32 516.44 1401.12 516.918C1400.92 517.389 1400.82 517.886 1400.82 518.409C1400.82 519.102 1400.98 519.75 1401.3 520.352C1401.63 520.955 1402.08 521.44 1402.65 521.81C1403.22 522.179 1403.88 522.364 1404.6 522.364ZM1419.34 506.307C1420.06 506.312 1420.77 506.449 1421.49 506.716C1422.2 506.983 1422.86 507.426 1423.45 508.045C1424.04 508.659 1424.51 509.497 1424.87 510.56C1425.23 511.622 1425.41 512.955 1425.41 514.557C1425.41 516.108 1425.26 517.486 1424.97 518.69C1424.68 519.889 1424.25 520.901 1423.7 521.724C1423.16 522.548 1422.49 523.173 1421.71 523.599C1420.93 524.026 1420.05 524.239 1419.07 524.239C1418.09 524.239 1417.22 524.045 1416.45 523.659C1415.69 523.267 1415.06 522.724 1414.58 522.031C1414.09 521.332 1413.78 520.523 1413.65 519.602H1415.73C1415.91 520.403 1416.29 521.065 1416.84 521.588C1417.41 522.105 1418.15 522.364 1419.07 522.364C1420.41 522.364 1421.48 521.776 1422.25 520.599C1423.04 519.423 1423.43 517.761 1423.43 515.614H1423.29C1422.98 516.091 1422.6 516.503 1422.16 516.849C1421.72 517.196 1421.24 517.463 1420.7 517.651C1420.17 517.838 1419.6 517.932 1419 517.932C1418 517.932 1417.08 517.685 1416.25 517.19C1415.42 516.69 1414.75 516.006 1414.25 515.136C1413.76 514.261 1413.51 513.261 1413.51 512.136C1413.51 511.068 1413.75 510.091 1414.23 509.205C1414.71 508.312 1415.39 507.602 1416.25 507.074C1417.13 506.545 1418.16 506.29 1419.34 506.307ZM1419.34 508.182C1418.62 508.182 1417.98 508.361 1417.41 508.719C1416.84 509.071 1416.39 509.548 1416.05 510.151C1415.72 510.747 1415.56 511.409 1415.56 512.136C1415.56 512.864 1415.72 513.526 1416.03 514.122C1416.36 514.713 1416.8 515.185 1417.35 515.537C1417.92 515.884 1418.56 516.057 1419.27 516.057C1419.81 516.057 1420.31 515.952 1420.78 515.741C1421.25 515.526 1421.65 515.233 1422 514.864C1422.35 514.489 1422.63 514.065 1422.83 513.594C1423.02 513.116 1423.12 512.619 1423.12 512.102C1423.12 511.42 1422.96 510.781 1422.63 510.185C1422.31 509.588 1421.86 509.105 1421.28 508.736C1420.72 508.366 1420.07 508.182 1419.34 508.182Z"
        fill="#A9448C"
        id="path1180"
      />
      <path
        d="M1399.35 715L1407.16 699.557V699.42H1398.16V697.545H1409.34V699.523L1401.57 715H1399.35ZM1417.84 715.239C1416.55 715.239 1415.46 714.889 1414.55 714.19C1413.65 713.486 1412.96 712.466 1412.48 711.131C1412.01 709.79 1411.77 708.17 1411.77 706.273C1411.77 704.386 1412.01 702.776 1412.48 701.44C1412.97 700.099 1413.66 699.077 1414.56 698.372C1415.47 697.662 1416.56 697.307 1417.84 697.307C1419.11 697.307 1420.2 697.662 1421.1 698.372C1422.01 699.077 1422.7 700.099 1423.18 701.44C1423.66 702.776 1423.9 704.386 1423.9 706.273C1423.9 708.17 1423.67 709.79 1423.19 711.131C1422.71 712.466 1422.02 713.486 1421.12 714.19C1420.21 714.889 1419.12 715.239 1417.84 715.239ZM1417.84 713.364C1419.11 713.364 1420.1 712.75 1420.8 711.523C1421.51 710.295 1421.86 708.545 1421.86 706.273C1421.86 704.761 1421.7 703.474 1421.37 702.412C1421.05 701.349 1420.59 700.54 1419.99 699.983C1419.4 699.426 1418.68 699.148 1417.84 699.148C1416.57 699.148 1415.59 699.77 1414.88 701.014C1414.17 702.253 1413.81 704.006 1413.81 706.273C1413.81 707.784 1413.97 709.068 1414.29 710.125C1414.61 711.182 1415.07 711.986 1415.66 712.537C1416.26 713.088 1416.99 713.364 1417.84 713.364Z"
        fill="#A9448C"
        id="path1182"
      />
      <path
        d="M1517.26 1659.24C1516.26 1659.24 1515.36 1659.04 1514.56 1658.64C1513.76 1658.24 1513.12 1657.7 1512.63 1657.01C1512.15 1656.31 1511.89 1655.52 1511.84 1654.64H1513.89C1513.97 1655.43 1514.32 1656.08 1514.96 1656.6C1515.6 1657.11 1516.37 1657.36 1517.26 1657.36C1517.98 1657.36 1518.61 1657.2 1519.17 1656.86C1519.73 1656.53 1520.17 1656.07 1520.49 1655.48C1520.82 1654.89 1520.98 1654.22 1520.98 1653.48C1520.98 1652.72 1520.81 1652.04 1520.47 1651.44C1520.14 1650.84 1519.69 1650.36 1519.11 1650.02C1518.53 1649.67 1517.87 1649.49 1517.12 1649.49C1516.59 1649.48 1516.04 1649.57 1515.48 1649.74C1514.92 1649.9 1514.45 1650.11 1514.09 1650.38L1512.11 1650.14L1513.17 1641.55H1522.24V1643.42H1514.94L1514.33 1648.57H1514.43C1514.79 1648.28 1515.24 1648.05 1515.78 1647.86C1516.32 1647.67 1516.88 1647.58 1517.47 1647.58C1518.53 1647.58 1519.49 1647.84 1520.32 1648.35C1521.16 1648.85 1521.82 1649.55 1522.3 1650.43C1522.78 1651.31 1523.02 1652.31 1523.02 1653.44C1523.02 1654.56 1522.77 1655.55 1522.27 1656.43C1521.78 1657.3 1521.1 1657.98 1520.23 1658.49C1519.36 1658.99 1518.37 1659.24 1517.26 1659.24ZM1532.54 1641.55V1659H1530.43V1643.76H1530.33L1526.07 1646.59V1644.44L1530.43 1641.55H1532.54Z"
        fill="#A9448C"
        id="path1184"
      />
      <path
        d="M1517.26 1551.24C1516.26 1551.24 1515.36 1551.04 1514.56 1550.64C1513.76 1550.24 1513.12 1549.7 1512.63 1549.01C1512.15 1548.31 1511.89 1547.52 1511.84 1546.64H1513.89C1513.97 1547.43 1514.32 1548.08 1514.96 1548.6C1515.6 1549.11 1516.37 1549.36 1517.26 1549.36C1517.98 1549.36 1518.61 1549.2 1519.17 1548.86C1519.73 1548.53 1520.17 1548.07 1520.49 1547.48C1520.82 1546.89 1520.98 1546.22 1520.98 1545.48C1520.98 1544.72 1520.81 1544.04 1520.47 1543.44C1520.14 1542.84 1519.69 1542.36 1519.11 1542.02C1518.53 1541.67 1517.87 1541.49 1517.12 1541.49C1516.59 1541.48 1516.04 1541.57 1515.48 1541.74C1514.92 1541.9 1514.45 1542.11 1514.09 1542.38L1512.11 1542.14L1513.17 1533.55H1522.24V1535.42H1514.94L1514.33 1540.57H1514.43C1514.79 1540.28 1515.24 1540.05 1515.78 1539.86C1516.32 1539.67 1516.88 1539.58 1517.47 1539.58C1518.53 1539.58 1519.49 1539.84 1520.32 1540.35C1521.16 1540.85 1521.82 1541.55 1522.3 1542.43C1522.78 1543.31 1523.02 1544.31 1523.02 1545.44C1523.02 1546.56 1522.77 1547.55 1522.27 1548.43C1521.78 1549.3 1521.1 1549.98 1520.23 1550.49C1519.36 1550.99 1518.37 1551.24 1517.26 1551.24ZM1526.41 1551V1549.47L1532.17 1543.16C1532.85 1542.42 1533.4 1541.78 1533.84 1541.23C1534.28 1540.68 1534.6 1540.16 1534.81 1539.68C1535.03 1539.19 1535.14 1538.68 1535.14 1538.15C1535.14 1537.53 1534.99 1537 1534.69 1536.55C1534.4 1536.11 1534 1535.76 1533.5 1535.51C1532.99 1535.27 1532.43 1535.15 1531.79 1535.15C1531.12 1535.15 1530.54 1535.29 1530.04 1535.57C1529.54 1535.84 1529.16 1536.22 1528.89 1536.72C1528.62 1537.21 1528.49 1537.79 1528.49 1538.45H1526.48C1526.48 1537.43 1526.71 1536.53 1527.18 1535.76C1527.66 1534.99 1528.3 1534.39 1529.11 1533.95C1529.93 1533.52 1530.85 1533.31 1531.86 1533.31C1532.89 1533.31 1533.79 1533.52 1534.58 1533.95C1535.37 1534.39 1535.99 1534.97 1536.44 1535.7C1536.89 1536.43 1537.11 1537.25 1537.11 1538.15C1537.11 1538.79 1537 1539.42 1536.76 1540.03C1536.54 1540.64 1536.14 1541.32 1535.57 1542.07C1535.01 1542.81 1534.23 1543.72 1533.23 1544.8L1529.31 1548.99V1549.12H1537.42V1551H1526.41Z"
        fill="#A9448C"
        id="path1186"
      />
      <path
        d="M1526.26 1370.24C1525.26 1370.24 1524.36 1370.04 1523.56 1369.64C1522.76 1369.24 1522.12 1368.7 1521.63 1368.01C1521.15 1367.31 1520.89 1366.52 1520.84 1365.64H1522.89C1522.97 1366.43 1523.32 1367.08 1523.96 1367.6C1524.6 1368.11 1525.37 1368.36 1526.26 1368.36C1526.98 1368.36 1527.61 1368.2 1528.17 1367.86C1528.73 1367.53 1529.17 1367.07 1529.49 1366.48C1529.82 1365.89 1529.98 1365.22 1529.98 1364.48C1529.98 1363.72 1529.81 1363.04 1529.47 1362.44C1529.14 1361.84 1528.69 1361.36 1528.11 1361.02C1527.53 1360.67 1526.87 1360.49 1526.12 1360.49C1525.59 1360.48 1525.04 1360.57 1524.48 1360.74C1523.92 1360.9 1523.45 1361.11 1523.09 1361.38L1521.11 1361.14L1522.17 1352.55H1531.24V1354.42H1523.94L1523.33 1359.57H1523.43C1523.79 1359.28 1524.24 1359.05 1524.78 1358.86C1525.32 1358.67 1525.88 1358.58 1526.47 1358.58C1527.53 1358.58 1528.49 1358.84 1529.32 1359.35C1530.16 1359.85 1530.82 1360.55 1531.3 1361.43C1531.78 1362.31 1532.02 1363.31 1532.02 1364.44C1532.02 1365.56 1531.77 1366.55 1531.27 1367.43C1530.78 1368.3 1530.1 1368.98 1529.23 1369.49C1528.36 1369.99 1527.37 1370.24 1526.26 1370.24ZM1541.31 1370.24C1540.18 1370.24 1539.18 1370.05 1538.3 1369.66C1537.42 1369.27 1536.73 1368.74 1536.21 1368.05C1535.7 1367.36 1535.42 1366.55 1535.37 1365.64H1537.52C1537.57 1366.2 1537.76 1366.68 1538.1 1367.09C1538.44 1367.5 1538.89 1367.81 1539.44 1368.03C1539.99 1368.25 1540.6 1368.36 1541.27 1368.36C1542.02 1368.36 1542.69 1368.23 1543.27 1367.97C1543.85 1367.71 1544.3 1367.35 1544.63 1366.88C1544.96 1366.41 1545.12 1365.88 1545.12 1365.26C1545.12 1364.62 1544.97 1364.05 1544.65 1363.57C1544.33 1363.07 1543.86 1362.68 1543.25 1362.41C1542.64 1362.13 1541.89 1361.99 1541 1361.99H1539.6V1360.11H1541C1541.69 1360.11 1542.3 1359.99 1542.82 1359.74C1543.35 1359.49 1543.76 1359.14 1544.06 1358.68C1544.36 1358.23 1544.51 1357.69 1544.51 1357.08C1544.51 1356.49 1544.38 1355.97 1544.12 1355.54C1543.86 1355.1 1543.49 1354.76 1543.01 1354.51C1542.54 1354.27 1541.98 1354.15 1541.34 1354.15C1540.74 1354.15 1540.17 1354.26 1539.64 1354.48C1539.11 1354.7 1538.68 1355.01 1538.34 1355.43C1538 1355.84 1537.82 1356.33 1537.79 1356.91H1535.75C1535.78 1355.99 1536.06 1355.19 1536.58 1354.51C1537.09 1353.81 1537.77 1353.27 1538.6 1352.89C1539.45 1352.5 1540.37 1352.31 1541.37 1352.31C1542.45 1352.31 1543.38 1352.53 1544.15 1352.96C1544.93 1353.39 1545.52 1353.97 1545.93 1354.68C1546.35 1355.39 1546.56 1356.15 1546.56 1356.98C1546.56 1357.96 1546.3 1358.8 1545.78 1359.49C1545.27 1360.18 1544.57 1360.66 1543.69 1360.93V1361.07C1544.79 1361.25 1545.66 1361.72 1546.27 1362.47C1546.89 1363.22 1547.2 1364.15 1547.2 1365.26C1547.2 1366.21 1546.95 1367.06 1546.43 1367.82C1545.92 1368.57 1545.22 1369.16 1544.33 1369.59C1543.45 1370.02 1542.44 1370.24 1541.31 1370.24Z"
        fill="#A9448C"
        id="path1188"
      />
      <path
        d="M1517.26 1274.24C1516.26 1274.24 1515.36 1274.04 1514.56 1273.64C1513.76 1273.24 1513.12 1272.7 1512.63 1272.01C1512.15 1271.31 1511.89 1270.52 1511.84 1269.64H1513.89C1513.97 1270.43 1514.32 1271.08 1514.96 1271.6C1515.6 1272.11 1516.37 1272.36 1517.26 1272.36C1517.98 1272.36 1518.61 1272.2 1519.17 1271.86C1519.73 1271.53 1520.17 1271.07 1520.49 1270.48C1520.82 1269.89 1520.98 1269.22 1520.98 1268.48C1520.98 1267.72 1520.81 1267.04 1520.47 1266.44C1520.14 1265.84 1519.69 1265.36 1519.11 1265.02C1518.53 1264.67 1517.87 1264.49 1517.12 1264.49C1516.59 1264.48 1516.04 1264.57 1515.48 1264.74C1514.92 1264.9 1514.45 1265.11 1514.09 1265.38L1512.11 1265.14L1513.17 1256.55H1522.24V1258.42H1514.94L1514.33 1263.57H1514.43C1514.79 1263.28 1515.24 1263.05 1515.78 1262.86C1516.32 1262.67 1516.88 1262.58 1517.47 1262.58C1518.53 1262.58 1519.49 1262.84 1520.32 1263.35C1521.16 1263.85 1521.82 1264.55 1522.3 1265.43C1522.78 1266.31 1523.02 1267.31 1523.02 1268.44C1523.02 1269.56 1522.77 1270.55 1522.27 1271.43C1521.78 1272.3 1521.1 1272.98 1520.23 1273.49C1519.36 1273.99 1518.37 1274.24 1517.26 1274.24ZM1526 1270.42V1268.68L1533.67 1256.55H1534.93V1259.24H1534.08L1528.28 1268.41V1268.55H1538.61V1270.42H1526ZM1534.22 1274V1269.89V1269.08V1256.55H1536.23V1274H1534.22Z"
        fill="#A9448C"
        id="path1190"
      />
      <path
        d="M1517.26 1209.24C1516.26 1209.24 1515.36 1209.04 1514.56 1208.64C1513.76 1208.24 1513.12 1207.7 1512.63 1207.01C1512.15 1206.31 1511.89 1205.52 1511.84 1204.64H1513.89C1513.97 1205.43 1514.32 1206.08 1514.96 1206.6C1515.6 1207.11 1516.37 1207.36 1517.26 1207.36C1517.98 1207.36 1518.61 1207.2 1519.17 1206.86C1519.73 1206.53 1520.17 1206.07 1520.49 1205.48C1520.82 1204.89 1520.98 1204.22 1520.98 1203.48C1520.98 1202.72 1520.81 1202.04 1520.47 1201.44C1520.14 1200.84 1519.69 1200.36 1519.11 1200.02C1518.53 1199.67 1517.87 1199.49 1517.12 1199.49C1516.59 1199.48 1516.04 1199.57 1515.48 1199.74C1514.92 1199.9 1514.45 1200.11 1514.09 1200.38L1512.11 1200.14L1513.17 1191.55H1522.24V1193.42H1514.94L1514.33 1198.57H1514.43C1514.79 1198.28 1515.24 1198.05 1515.78 1197.86C1516.32 1197.67 1516.88 1197.58 1517.47 1197.58C1518.53 1197.58 1519.49 1197.84 1520.32 1198.35C1521.16 1198.85 1521.82 1199.55 1522.3 1200.43C1522.78 1201.31 1523.02 1202.31 1523.02 1203.44C1523.02 1204.56 1522.77 1205.55 1522.27 1206.43C1521.78 1207.3 1521.1 1207.98 1520.23 1208.49C1519.36 1208.99 1518.37 1209.24 1517.26 1209.24ZM1531.86 1209.24C1530.86 1209.24 1529.96 1209.04 1529.16 1208.64C1528.36 1208.24 1527.72 1207.7 1527.24 1207.01C1526.75 1206.31 1526.49 1205.52 1526.44 1204.64H1528.49C1528.57 1205.43 1528.93 1206.08 1529.56 1206.6C1530.2 1207.11 1530.97 1207.36 1531.86 1207.36C1532.58 1207.36 1533.22 1207.2 1533.77 1206.86C1534.33 1206.53 1534.77 1206.07 1535.09 1205.48C1535.42 1204.89 1535.58 1204.22 1535.58 1203.48C1535.58 1202.72 1535.41 1202.04 1535.08 1201.44C1534.75 1200.84 1534.29 1200.36 1533.71 1200.02C1533.13 1199.67 1532.47 1199.49 1531.73 1199.49C1531.19 1199.48 1530.64 1199.57 1530.08 1199.74C1529.52 1199.9 1529.06 1200.11 1528.69 1200.38L1526.72 1200.14L1527.77 1191.55H1536.84V1193.42H1529.54L1528.93 1198.57H1529.03C1529.39 1198.28 1529.84 1198.05 1530.38 1197.86C1530.92 1197.67 1531.48 1197.58 1532.07 1197.58C1533.14 1197.58 1534.09 1197.84 1534.92 1198.35C1535.76 1198.85 1536.42 1199.55 1536.9 1200.43C1537.38 1201.31 1537.62 1202.31 1537.62 1203.44C1537.62 1204.56 1537.37 1205.55 1536.87 1206.43C1536.38 1207.3 1535.7 1207.98 1534.83 1208.49C1533.96 1208.99 1532.97 1209.24 1531.86 1209.24Z"
        fill="#A9448C"
        id="path1192"
      />
      <path
        d="M1517.26 1145.24C1516.26 1145.24 1515.36 1145.04 1514.56 1144.64C1513.76 1144.24 1513.12 1143.7 1512.63 1143.01C1512.15 1142.31 1511.89 1141.52 1511.84 1140.64H1513.89C1513.97 1141.43 1514.32 1142.08 1514.96 1142.6C1515.6 1143.11 1516.37 1143.36 1517.26 1143.36C1517.98 1143.36 1518.61 1143.2 1519.17 1142.86C1519.73 1142.53 1520.17 1142.07 1520.49 1141.48C1520.82 1140.89 1520.98 1140.22 1520.98 1139.48C1520.98 1138.72 1520.81 1138.04 1520.47 1137.44C1520.14 1136.84 1519.69 1136.36 1519.11 1136.02C1518.53 1135.67 1517.87 1135.49 1517.12 1135.49C1516.59 1135.48 1516.04 1135.57 1515.48 1135.74C1514.92 1135.9 1514.45 1136.11 1514.09 1136.38L1512.11 1136.14L1513.17 1127.55H1522.24V1129.42H1514.94L1514.33 1134.57H1514.43C1514.79 1134.28 1515.24 1134.05 1515.78 1133.86C1516.32 1133.67 1516.88 1133.58 1517.47 1133.58C1518.53 1133.58 1519.49 1133.84 1520.32 1134.35C1521.16 1134.85 1521.82 1135.55 1522.3 1136.43C1522.78 1137.31 1523.02 1138.31 1523.02 1139.44C1523.02 1140.56 1522.77 1141.55 1522.27 1142.43C1521.78 1143.3 1521.1 1143.98 1520.23 1144.49C1519.36 1144.99 1518.37 1145.24 1517.26 1145.24ZM1532.2 1145.24C1531.49 1145.23 1530.77 1145.09 1530.06 1144.83C1529.34 1144.57 1528.69 1144.13 1528.1 1143.51C1527.5 1142.88 1527.03 1142.04 1526.67 1140.98C1526.31 1139.91 1526.14 1138.57 1526.14 1136.95C1526.14 1135.41 1526.28 1134.04 1526.57 1132.85C1526.86 1131.65 1527.28 1130.64 1527.83 1129.82C1528.38 1129 1529.05 1128.37 1529.83 1127.95C1530.61 1127.52 1531.49 1127.31 1532.48 1127.31C1533.45 1127.31 1534.32 1127.5 1535.08 1127.89C1535.85 1128.28 1536.48 1128.82 1536.96 1129.51C1537.44 1130.21 1537.75 1131.01 1537.9 1131.91H1535.82C1535.62 1131.12 1535.25 1130.47 1534.69 1129.96C1534.14 1129.44 1533.4 1129.18 1532.48 1129.18C1531.12 1129.18 1530.06 1129.77 1529.28 1130.95C1528.51 1132.12 1528.12 1133.77 1528.11 1135.9H1528.25C1528.57 1135.41 1528.95 1135 1529.38 1134.66C1529.83 1134.32 1530.31 1134.05 1530.85 1133.86C1531.38 1133.67 1531.95 1133.58 1532.54 1133.58C1533.54 1133.58 1534.46 1133.83 1535.29 1134.33C1536.12 1134.82 1536.78 1135.51 1537.28 1136.38C1537.78 1137.25 1538.03 1138.25 1538.03 1139.38C1538.03 1140.45 1537.79 1141.44 1537.31 1142.34C1536.83 1143.23 1536.15 1143.94 1535.27 1144.47C1534.4 1144.99 1533.38 1145.25 1532.2 1145.24ZM1532.2 1143.36C1532.92 1143.36 1533.56 1143.18 1534.13 1142.83C1534.7 1142.47 1535.16 1141.99 1535.49 1141.39C1535.82 1140.78 1535.99 1140.11 1535.99 1139.38C1535.99 1138.65 1535.83 1138 1535.5 1137.41C1535.18 1136.81 1534.74 1136.34 1534.18 1135.98C1533.62 1135.63 1532.99 1135.45 1532.27 1135.45C1531.73 1135.45 1531.23 1135.56 1530.76 1135.78C1530.3 1135.99 1529.89 1136.28 1529.54 1136.65C1529.19 1137.02 1528.92 1137.44 1528.72 1137.92C1528.52 1138.39 1528.42 1138.89 1528.42 1139.41C1528.42 1140.1 1528.58 1140.75 1528.91 1141.35C1529.24 1141.95 1529.68 1142.44 1530.25 1142.81C1530.83 1143.18 1531.48 1143.36 1532.2 1143.36Z"
        fill="#A9448C"
        id="path1194"
      />
      <path
        d="M1515.26 1077.24C1514.26 1077.24 1513.36 1077.04 1512.56 1076.64C1511.76 1076.24 1511.12 1075.7 1510.63 1075.01C1510.15 1074.31 1509.89 1073.52 1509.84 1072.64H1511.89C1511.97 1073.43 1512.32 1074.08 1512.96 1074.6C1513.6 1075.11 1514.37 1075.36 1515.26 1075.36C1515.98 1075.36 1516.61 1075.2 1517.17 1074.86C1517.73 1074.53 1518.17 1074.07 1518.49 1073.48C1518.82 1072.89 1518.98 1072.22 1518.98 1071.48C1518.98 1070.72 1518.81 1070.04 1518.47 1069.44C1518.14 1068.84 1517.69 1068.36 1517.11 1068.02C1516.53 1067.67 1515.87 1067.49 1515.12 1067.49C1514.59 1067.48 1514.04 1067.57 1513.48 1067.74C1512.92 1067.9 1512.45 1068.11 1512.09 1068.38L1510.11 1068.14L1511.17 1059.55H1520.24V1061.42H1512.94L1512.33 1066.57H1512.43C1512.79 1066.28 1513.24 1066.05 1513.78 1065.86C1514.32 1065.67 1514.88 1065.58 1515.47 1065.58C1516.53 1065.58 1517.49 1065.84 1518.32 1066.35C1519.16 1066.85 1519.82 1067.55 1520.3 1068.43C1520.78 1069.31 1521.02 1070.31 1521.02 1071.44C1521.02 1072.56 1520.77 1073.55 1520.27 1074.43C1519.78 1075.3 1519.1 1075.98 1518.23 1076.49C1517.36 1076.99 1516.37 1077.24 1515.26 1077.24ZM1524.95 1077L1532.76 1061.56V1061.42H1523.76V1059.55H1534.94V1061.52L1527.17 1077H1524.95Z"
        fill="#A9448C"
        id="path1196"
      />
      <path
        d="M1517.26 1011.24C1516.26 1011.24 1515.36 1011.04 1514.56 1010.64C1513.76 1010.24 1513.12 1009.7 1512.63 1009.01C1512.15 1008.31 1511.89 1007.52 1511.84 1006.64H1513.89C1513.97 1007.43 1514.32 1008.08 1514.96 1008.6C1515.6 1009.11 1516.37 1009.36 1517.26 1009.36C1517.98 1009.36 1518.61 1009.2 1519.17 1008.86C1519.73 1008.53 1520.17 1008.07 1520.49 1007.48C1520.82 1006.89 1520.98 1006.22 1520.98 1005.48C1520.98 1004.72 1520.81 1004.04 1520.47 1003.44C1520.14 1002.84 1519.69 1002.36 1519.11 1002.02C1518.53 1001.67 1517.87 1001.49 1517.12 1001.49C1516.59 1001.48 1516.04 1001.57 1515.48 1001.74C1514.92 1001.9 1514.45 1002.11 1514.09 1002.38L1512.11 1002.14L1513.17 993.545H1522.24V995.42H1514.94L1514.33 1000.57H1514.43C1514.79 1000.28 1515.24 1000.05 1515.78 999.861C1516.32 999.673 1516.88 999.58 1517.47 999.58C1518.53 999.58 1519.49 999.835 1520.32 1000.35C1521.16 1000.85 1521.82 1001.55 1522.3 1002.43C1522.78 1003.31 1523.02 1004.31 1523.02 1005.44C1523.02 1006.56 1522.77 1007.55 1522.27 1008.43C1521.78 1009.3 1521.1 1009.98 1520.23 1010.49C1519.36 1010.99 1518.37 1011.24 1517.26 1011.24ZM1532 1011.24C1530.83 1011.24 1529.79 1011.03 1528.9 1010.62C1528 1010.2 1527.31 1009.62 1526.81 1008.89C1526.31 1008.15 1526.06 1007.31 1526.07 1006.36C1526.06 1005.62 1526.21 1004.94 1526.5 1004.32C1526.8 1003.69 1527.2 1003.16 1527.71 1002.74C1528.23 1002.32 1528.81 1002.05 1529.44 1001.93V1001.83C1528.61 1001.61 1527.94 1001.14 1527.45 1000.42C1526.95 999.696 1526.71 998.869 1526.72 997.943C1526.71 997.057 1526.93 996.264 1527.39 995.565C1527.84 994.866 1528.47 994.315 1529.26 993.912C1530.06 993.509 1530.98 993.307 1532 993.307C1533.01 993.307 1533.91 993.509 1534.71 993.912C1535.5 994.315 1536.13 994.866 1536.58 995.565C1537.04 996.264 1537.28 997.057 1537.28 997.943C1537.28 998.869 1537.02 999.696 1536.52 1000.42C1536.03 1001.14 1535.37 1001.61 1534.56 1001.83V1001.93C1535.19 1002.05 1535.75 1002.32 1536.26 1002.74C1536.77 1003.16 1537.17 1003.69 1537.47 1004.32C1537.77 1004.94 1537.93 1005.62 1537.93 1006.36C1537.93 1007.31 1537.67 1008.15 1537.16 1008.89C1536.66 1009.62 1535.97 1010.2 1535.08 1010.62C1534.19 1011.03 1533.16 1011.24 1532 1011.24ZM1532 1009.36C1532.79 1009.36 1533.47 1009.24 1534.04 1008.98C1534.62 1008.72 1535.06 1008.36 1535.37 1007.9C1535.69 1007.43 1535.85 1006.89 1535.85 1006.26C1535.85 1005.6 1535.68 1005.02 1535.34 1004.51C1535 1004.01 1534.55 1003.61 1533.97 1003.32C1533.39 1003.03 1532.74 1002.89 1532 1002.89C1531.25 1002.89 1530.59 1003.03 1530 1003.32C1529.43 1003.61 1528.97 1004.01 1528.63 1004.51C1528.3 1005.02 1528.14 1005.6 1528.15 1006.26C1528.14 1006.89 1528.29 1007.43 1528.6 1007.9C1528.91 1008.36 1529.36 1008.72 1529.94 1008.98C1530.52 1009.24 1531.2 1009.36 1532 1009.36ZM1532 1001.08C1532.62 1001.08 1533.18 1000.95 1533.66 1000.7C1534.15 1000.45 1534.53 1000.11 1534.81 999.656C1535.09 999.207 1535.23 998.682 1535.24 998.08C1535.23 997.489 1535.09 996.974 1534.82 996.537C1534.55 996.094 1534.17 995.753 1533.69 995.514C1533.2 995.27 1532.64 995.148 1532 995.148C1531.35 995.148 1530.77 995.27 1530.29 995.514C1529.8 995.753 1529.42 996.094 1529.15 996.537C1528.89 996.974 1528.75 997.489 1528.76 998.08C1528.75 998.682 1528.89 999.207 1529.16 999.656C1529.44 1000.11 1529.82 1000.45 1530.31 1000.7C1530.8 1000.95 1531.36 1001.08 1532 1001.08Z"
        fill="#A9448C"
        id="path1198"
      />
      <path
        d="M1515.26 953.239C1514.26 953.239 1513.36 953.04 1512.56 952.642C1511.76 952.244 1511.12 951.699 1510.63 951.006C1510.15 950.312 1509.89 949.523 1509.84 948.636H1511.89C1511.97 949.426 1512.32 950.08 1512.96 950.597C1513.6 951.108 1514.37 951.364 1515.26 951.364C1515.98 951.364 1516.61 951.196 1517.17 950.861C1517.73 950.526 1518.17 950.065 1518.49 949.48C1518.82 948.889 1518.98 948.222 1518.98 947.477C1518.98 946.716 1518.81 946.037 1518.47 945.44C1518.14 944.838 1517.69 944.364 1517.11 944.017C1516.53 943.67 1515.87 943.494 1515.12 943.489C1514.59 943.483 1514.04 943.565 1513.48 943.736C1512.92 943.901 1512.45 944.114 1512.09 944.375L1510.11 944.136L1511.17 935.545H1520.24V937.42H1512.94L1512.33 942.568H1512.43C1512.79 942.284 1513.24 942.048 1513.78 941.861C1514.32 941.673 1514.88 941.58 1515.47 941.58C1516.53 941.58 1517.49 941.835 1518.32 942.347C1519.16 942.852 1519.82 943.545 1520.3 944.426C1520.78 945.307 1521.02 946.312 1521.02 947.443C1521.02 948.557 1520.77 949.551 1520.27 950.426C1519.78 951.295 1519.1 951.983 1518.23 952.489C1517.36 952.989 1516.37 953.239 1515.26 953.239ZM1529.97 935.307C1530.68 935.312 1531.4 935.449 1532.11 935.716C1532.83 935.983 1533.48 936.426 1534.07 937.045C1534.66 937.659 1535.14 938.497 1535.5 939.56C1535.85 940.622 1536.03 941.955 1536.03 943.557C1536.03 945.108 1535.89 946.486 1535.59 947.69C1535.3 948.889 1534.88 949.901 1534.33 950.724C1533.78 951.548 1533.12 952.173 1532.33 952.599C1531.56 953.026 1530.68 953.239 1529.69 953.239C1528.72 953.239 1527.84 953.045 1527.08 952.659C1526.31 952.267 1525.69 951.724 1525.2 951.031C1524.72 950.332 1524.41 949.523 1524.27 948.602H1526.35C1526.54 949.403 1526.91 950.065 1527.47 950.588C1528.03 951.105 1528.77 951.364 1529.69 951.364C1531.04 951.364 1532.1 950.776 1532.88 949.599C1533.66 948.423 1534.06 946.761 1534.06 944.614H1533.92C1533.6 945.091 1533.22 945.503 1532.79 945.849C1532.35 946.196 1531.86 946.463 1531.33 946.651C1530.79 946.838 1530.23 946.932 1529.62 946.932C1528.62 946.932 1527.71 946.685 1526.87 946.19C1526.04 945.69 1525.38 945.006 1524.88 944.136C1524.38 943.261 1524.14 942.261 1524.14 941.136C1524.14 940.068 1524.37 939.091 1524.85 938.205C1525.33 937.312 1526.01 936.602 1526.88 936.074C1527.75 935.545 1528.78 935.29 1529.97 935.307ZM1529.97 937.182C1529.25 937.182 1528.6 937.361 1528.03 937.719C1527.46 938.071 1527.01 938.548 1526.68 939.151C1526.35 939.747 1526.18 940.409 1526.18 941.136C1526.18 941.864 1526.34 942.526 1526.66 943.122C1526.98 943.713 1527.42 944.185 1527.98 944.537C1528.54 944.884 1529.18 945.057 1529.9 945.057C1530.44 945.057 1530.94 944.952 1531.41 944.741C1531.87 944.526 1532.28 944.233 1532.62 943.864C1532.98 943.489 1533.25 943.065 1533.45 942.594C1533.65 942.116 1533.75 941.619 1533.75 941.102C1533.75 940.42 1533.58 939.781 1533.25 939.185C1532.93 938.588 1532.48 938.105 1531.91 937.736C1531.34 937.366 1530.69 937.182 1529.97 937.182Z"
        fill="#A9448C"
        id="path1200"
      />
      <path
        d="M1515.6 882.239C1514.89 882.227 1514.17 882.091 1513.45 881.83C1512.74 881.568 1512.09 881.128 1511.49 880.509C1510.9 879.884 1510.43 879.04 1510.07 877.977C1509.71 876.909 1509.53 875.568 1509.53 873.955C1509.53 872.409 1509.68 871.04 1509.97 869.847C1510.26 868.648 1510.68 867.639 1511.23 866.821C1511.78 865.997 1512.45 865.372 1513.22 864.946C1514.01 864.52 1514.89 864.307 1515.88 864.307C1516.85 864.307 1517.72 864.503 1518.48 864.895C1519.25 865.281 1519.88 865.821 1520.36 866.514C1520.84 867.207 1521.15 868.006 1521.3 868.909H1519.22C1519.02 868.125 1518.65 867.474 1518.09 866.957C1517.53 866.44 1516.8 866.182 1515.88 866.182C1514.52 866.182 1513.46 866.77 1512.68 867.946C1511.91 869.122 1511.52 870.773 1511.51 872.898H1511.65C1511.97 872.415 1512.34 872.003 1512.78 871.662C1513.22 871.315 1513.71 871.048 1514.25 870.861C1514.78 870.673 1515.35 870.58 1515.94 870.58C1516.94 870.58 1517.86 870.83 1518.69 871.33C1519.52 871.824 1520.18 872.509 1520.68 873.384C1521.18 874.253 1521.43 875.25 1521.43 876.375C1521.43 877.455 1521.19 878.443 1520.71 879.341C1520.22 880.233 1519.55 880.943 1518.67 881.472C1517.8 881.994 1516.78 882.25 1515.6 882.239ZM1515.6 880.364C1516.32 880.364 1516.96 880.185 1517.53 879.827C1518.1 879.469 1518.55 878.989 1518.88 878.386C1519.22 877.784 1519.39 877.114 1519.39 876.375C1519.39 875.653 1519.22 874.997 1518.9 874.406C1518.58 873.81 1518.14 873.335 1517.58 872.983C1517.02 872.631 1516.39 872.455 1515.67 872.455C1515.13 872.455 1514.63 872.562 1514.16 872.778C1513.7 872.989 1513.29 873.278 1512.93 873.648C1512.59 874.017 1512.32 874.44 1512.12 874.918C1511.92 875.389 1511.82 875.886 1511.82 876.409C1511.82 877.102 1511.98 877.75 1512.3 878.352C1512.63 878.955 1513.08 879.44 1513.65 879.81C1514.22 880.179 1514.88 880.364 1515.6 880.364ZM1530.48 882.239C1529.19 882.239 1528.1 881.889 1527.2 881.19C1526.29 880.486 1525.6 879.466 1525.12 878.131C1524.65 876.79 1524.41 875.17 1524.41 873.273C1524.41 871.386 1524.65 869.776 1525.12 868.44C1525.61 867.099 1526.3 866.077 1527.2 865.372C1528.11 864.662 1529.2 864.307 1530.48 864.307C1531.75 864.307 1532.84 864.662 1533.74 865.372C1534.65 866.077 1535.34 867.099 1535.82 868.44C1536.3 869.776 1536.54 871.386 1536.54 873.273C1536.54 875.17 1536.31 876.79 1535.83 878.131C1535.35 879.466 1534.66 880.486 1533.76 881.19C1532.85 881.889 1531.76 882.239 1530.48 882.239ZM1530.48 880.364C1531.75 880.364 1532.74 879.75 1533.44 878.523C1534.15 877.295 1534.5 875.545 1534.5 873.273C1534.5 871.761 1534.34 870.474 1534.01 869.412C1533.7 868.349 1533.24 867.54 1532.63 866.983C1532.04 866.426 1531.32 866.148 1530.48 866.148C1529.22 866.148 1528.23 866.77 1527.52 868.014C1526.81 869.253 1526.45 871.006 1526.45 873.273C1526.45 874.784 1526.61 876.068 1526.93 877.125C1527.25 878.182 1527.71 878.986 1528.3 879.537C1528.91 880.088 1529.63 880.364 1530.48 880.364Z"
        fill="#A9448C"
        id="path1202"
      />
      <path
        d="M1399.35 820L1407.16 804.557V804.42H1398.16V802.545H1409.34V804.523L1401.57 820H1399.35ZM1418.65 802.545V820H1416.54V804.761H1416.44L1412.18 807.591V805.443L1416.54 802.545H1418.65Z"
        fill="#A9448C"
        id="path1204"
      />
      <path
        d="M1402.35 893L1410.16 877.557V877.42H1401.16V875.545H1412.34V877.523L1404.57 893H1402.35ZM1415.52 893V891.466L1421.28 885.159C1421.96 884.42 1422.51 883.778 1422.95 883.233C1423.39 882.682 1423.71 882.165 1423.92 881.682C1424.14 881.193 1424.25 880.682 1424.25 880.148C1424.25 879.534 1424.1 879.003 1423.8 878.554C1423.51 878.105 1423.11 877.759 1422.61 877.514C1422.1 877.27 1421.53 877.148 1420.9 877.148C1420.23 877.148 1419.65 877.287 1419.15 877.565C1418.65 877.838 1418.27 878.222 1418 878.716C1417.73 879.21 1417.6 879.79 1417.6 880.455H1415.59C1415.59 879.432 1415.82 878.534 1416.29 877.761C1416.76 876.989 1417.41 876.386 1418.22 875.955C1419.04 875.523 1419.96 875.307 1420.97 875.307C1422 875.307 1422.9 875.523 1423.69 875.955C1424.48 876.386 1425.1 876.969 1425.55 877.702C1426 878.435 1426.22 879.25 1426.22 880.148C1426.22 880.79 1426.11 881.418 1425.87 882.031C1425.65 882.639 1425.25 883.318 1424.68 884.068C1424.12 884.812 1423.34 885.722 1422.34 886.795L1418.42 890.989V891.125H1426.53V893H1415.52Z"
        fill="#A9448C"
        id="path1206"
      />
      <path
        d="M1402.35 958L1410.16 942.557V942.42H1401.16V940.545H1412.34V942.523L1404.57 958H1402.35ZM1421.02 958.239C1419.89 958.239 1418.89 958.045 1418.01 957.659C1417.13 957.273 1416.44 956.736 1415.92 956.048C1415.41 955.355 1415.13 954.551 1415.09 953.636H1417.23C1417.28 954.199 1417.47 954.685 1417.81 955.094C1418.15 955.497 1418.6 955.81 1419.15 956.031C1419.7 956.253 1420.31 956.364 1420.98 956.364C1421.73 956.364 1422.4 956.233 1422.98 955.972C1423.56 955.71 1424.01 955.347 1424.34 954.881C1424.67 954.415 1424.84 953.875 1424.84 953.261C1424.84 952.619 1424.68 952.054 1424.36 951.565C1424.04 951.071 1423.57 950.685 1422.96 950.406C1422.35 950.128 1421.6 949.989 1420.71 949.989H1419.31V948.114H1420.71C1421.4 948.114 1422.01 947.989 1422.53 947.739C1423.06 947.489 1423.47 947.136 1423.77 946.682C1424.07 946.227 1424.22 945.693 1424.22 945.08C1424.22 944.489 1424.09 943.974 1423.83 943.537C1423.57 943.099 1423.2 942.759 1422.72 942.514C1422.25 942.27 1421.69 942.148 1421.05 942.148C1420.45 942.148 1419.88 942.259 1419.35 942.48C1418.82 942.696 1418.39 943.011 1418.05 943.426C1417.72 943.835 1417.53 944.33 1417.51 944.909H1415.46C1415.49 943.994 1415.77 943.193 1416.29 942.506C1416.8 941.812 1417.48 941.273 1418.32 940.886C1419.16 940.5 1420.08 940.307 1421.09 940.307C1422.16 940.307 1423.09 940.526 1423.86 940.963C1424.64 941.395 1425.23 941.966 1425.64 942.676C1426.06 943.386 1426.27 944.153 1426.27 944.977C1426.27 945.96 1426.01 946.798 1425.49 947.491C1424.98 948.185 1424.28 948.665 1423.4 948.932V949.068C1424.51 949.25 1425.37 949.719 1425.99 950.474C1426.61 951.224 1426.91 952.153 1426.91 953.261C1426.91 954.21 1426.66 955.062 1426.14 955.818C1425.63 956.568 1424.93 957.159 1424.04 957.591C1423.16 958.023 1422.15 958.239 1421.02 958.239Z"
        fill="#A9448C"
        id="path1208"
      />
      <path
        d="M1402.35 1023L1410.16 1007.56V1007.42H1401.16V1005.55H1412.34V1007.52L1404.57 1023H1402.35ZM1413.7 1019.42V1017.68L1421.37 1005.55H1422.63V1008.24H1421.78L1415.99 1017.41V1017.55H1426.32V1019.42H1413.7ZM1421.92 1023V1018.89V1018.08V1005.55H1423.93V1023H1421.92Z"
        fill="#A9448C"
        id="path1210"
      />
      <path
        d="M1402.35 1088L1410.16 1072.56V1072.42H1401.16V1070.55H1412.34V1072.52L1404.57 1088H1402.35ZM1420.74 1088.24C1419.74 1088.24 1418.84 1088.04 1418.04 1087.64C1417.24 1087.24 1416.59 1086.7 1416.11 1086.01C1415.63 1085.31 1415.36 1084.52 1415.32 1083.64H1417.36C1417.44 1084.43 1417.8 1085.08 1418.44 1085.6C1419.08 1086.11 1419.85 1086.36 1420.74 1086.36C1421.45 1086.36 1422.09 1086.2 1422.65 1085.86C1423.21 1085.53 1423.65 1085.07 1423.97 1084.48C1424.29 1083.89 1424.45 1083.22 1424.45 1082.48C1424.45 1081.72 1424.29 1081.04 1423.95 1080.44C1423.62 1079.84 1423.17 1079.36 1422.59 1079.02C1422.01 1078.67 1421.35 1078.49 1420.6 1078.49C1420.07 1078.48 1419.52 1078.57 1418.96 1078.74C1418.39 1078.9 1417.93 1079.11 1417.57 1079.38L1415.59 1079.14L1416.65 1070.55H1425.72V1072.42H1418.42L1417.81 1077.57H1417.91C1418.27 1077.28 1418.72 1077.05 1419.25 1076.86C1419.79 1076.67 1420.36 1076.58 1420.94 1076.58C1422.01 1076.58 1422.96 1076.84 1423.8 1077.35C1424.64 1077.85 1425.3 1078.55 1425.77 1079.43C1426.26 1080.31 1426.5 1081.31 1426.5 1082.44C1426.5 1083.56 1426.25 1084.55 1425.75 1085.43C1425.25 1086.3 1424.57 1086.98 1423.7 1087.49C1422.83 1087.99 1421.85 1088.24 1420.74 1088.24Z"
        fill="#A9448C"
        id="path1212"
      />
      <path
        d="M1402.35 1153L1410.16 1137.56V1137.42H1401.16V1135.55H1412.34V1137.52L1404.57 1153H1402.35ZM1420.94 1153.24C1420.22 1153.23 1419.51 1153.09 1418.79 1152.83C1418.07 1152.57 1417.42 1152.13 1416.83 1151.51C1416.24 1150.88 1415.76 1150.04 1415.41 1148.98C1415.05 1147.91 1414.87 1146.57 1414.87 1144.95C1414.87 1143.41 1415.01 1142.04 1415.3 1140.85C1415.59 1139.65 1416.01 1138.64 1416.57 1137.82C1417.12 1137 1417.78 1136.37 1418.56 1135.95C1419.34 1135.52 1420.23 1135.31 1421.21 1135.31C1422.19 1135.31 1423.06 1135.5 1423.82 1135.89C1424.59 1136.28 1425.21 1136.82 1425.69 1137.51C1426.18 1138.21 1426.49 1139.01 1426.63 1139.91H1424.55C1424.36 1139.12 1423.98 1138.47 1423.43 1137.96C1422.87 1137.44 1422.13 1137.18 1421.21 1137.18C1419.86 1137.18 1418.79 1137.77 1418.01 1138.95C1417.24 1140.12 1416.85 1141.77 1416.85 1143.9H1416.98C1417.3 1143.41 1417.68 1143 1418.12 1142.66C1418.56 1142.32 1419.05 1142.05 1419.58 1141.86C1420.12 1141.67 1420.68 1141.58 1421.28 1141.58C1422.28 1141.58 1423.19 1141.83 1424.02 1142.33C1424.85 1142.82 1425.52 1143.51 1426.02 1144.38C1426.52 1145.25 1426.77 1146.25 1426.77 1147.38C1426.77 1148.45 1426.53 1149.44 1426.04 1150.34C1425.56 1151.23 1424.88 1151.94 1424.01 1152.47C1423.14 1152.99 1422.11 1153.25 1420.94 1153.24ZM1420.94 1151.36C1421.65 1151.36 1422.3 1151.18 1422.86 1150.83C1423.44 1150.47 1423.89 1149.99 1424.22 1149.39C1424.55 1148.78 1424.72 1148.11 1424.72 1147.38C1424.72 1146.65 1424.56 1146 1424.24 1145.41C1423.92 1144.81 1423.48 1144.34 1422.92 1143.98C1422.36 1143.63 1421.72 1143.45 1421.01 1143.45C1420.47 1143.45 1419.96 1143.56 1419.5 1143.78C1419.03 1143.99 1418.62 1144.28 1418.27 1144.65C1417.92 1145.02 1417.65 1145.44 1417.45 1145.92C1417.25 1146.39 1417.15 1146.89 1417.15 1147.41C1417.15 1148.1 1417.32 1148.75 1417.64 1149.35C1417.97 1149.95 1418.42 1150.44 1418.99 1150.81C1419.56 1151.18 1420.21 1151.36 1420.94 1151.36Z"
        fill="#A9448C"
        id="path1214"
      />
      <path
        d="M1402.35 1218L1410.16 1202.56V1202.42H1401.16V1200.55H1412.34V1202.52L1404.57 1218H1402.35ZM1416.53 1218L1424.34 1202.56V1202.42H1415.34V1200.55H1426.52V1202.52L1418.75 1218H1416.53Z"
        fill="#A9448C"
        id="path1216"
      />
      <path
        d="M1402.35 1283L1410.16 1267.56V1267.42H1401.16V1265.55H1412.34V1267.52L1404.57 1283H1402.35ZM1420.76 1283.24C1419.59 1283.24 1418.55 1283.03 1417.65 1282.62C1416.76 1282.2 1416.07 1281.62 1415.57 1280.89C1415.07 1280.15 1414.82 1279.31 1414.83 1278.36C1414.82 1277.62 1414.96 1276.94 1415.26 1276.32C1415.56 1275.69 1415.96 1275.16 1416.47 1274.74C1416.99 1274.32 1417.56 1274.05 1418.2 1273.93V1273.83C1417.37 1273.61 1416.7 1273.14 1416.21 1272.42C1415.71 1271.7 1415.47 1270.87 1415.47 1269.94C1415.47 1269.06 1415.69 1268.26 1416.15 1267.57C1416.6 1266.87 1417.23 1266.32 1418.02 1265.91C1418.82 1265.51 1419.73 1265.31 1420.76 1265.31C1421.77 1265.31 1422.67 1265.51 1423.47 1265.91C1424.26 1266.32 1424.89 1266.87 1425.34 1267.57C1425.8 1268.26 1426.04 1269.06 1426.04 1269.94C1426.04 1270.87 1425.78 1271.7 1425.28 1272.42C1424.79 1273.14 1424.13 1273.61 1423.31 1273.83V1273.93C1423.94 1274.05 1424.51 1274.32 1425.02 1274.74C1425.52 1275.16 1425.93 1275.69 1426.23 1276.32C1426.53 1276.94 1426.68 1277.62 1426.69 1278.36C1426.68 1279.31 1426.43 1280.15 1425.92 1280.89C1425.42 1281.62 1424.73 1282.2 1423.83 1282.62C1422.95 1283.03 1421.92 1283.24 1420.76 1283.24ZM1420.76 1281.36C1421.55 1281.36 1422.23 1281.24 1422.8 1280.98C1423.38 1280.72 1423.82 1280.36 1424.13 1279.9C1424.44 1279.43 1424.6 1278.89 1424.61 1278.26C1424.6 1277.6 1424.43 1277.02 1424.1 1276.51C1423.76 1276.01 1423.31 1275.61 1422.73 1275.32C1422.15 1275.03 1421.5 1274.89 1420.76 1274.89C1420.01 1274.89 1419.35 1275.03 1418.76 1275.32C1418.18 1275.61 1417.73 1276.01 1417.39 1276.51C1417.06 1277.02 1416.9 1277.6 1416.9 1278.26C1416.9 1278.89 1417.05 1279.43 1417.36 1279.9C1417.67 1280.36 1418.12 1280.72 1418.69 1280.98C1419.27 1281.24 1419.96 1281.36 1420.76 1281.36ZM1420.76 1273.08C1421.38 1273.08 1421.94 1272.95 1422.42 1272.7C1422.91 1272.45 1423.29 1272.11 1423.57 1271.66C1423.85 1271.21 1423.99 1270.68 1424 1270.08C1423.99 1269.49 1423.85 1268.97 1423.58 1268.54C1423.31 1268.09 1422.93 1267.75 1422.44 1267.51C1421.96 1267.27 1421.4 1267.15 1420.76 1267.15C1420.1 1267.15 1419.53 1267.27 1419.04 1267.51C1418.56 1267.75 1418.18 1268.09 1417.91 1268.54C1417.64 1268.97 1417.51 1269.49 1417.52 1270.08C1417.51 1270.68 1417.65 1271.21 1417.92 1271.66C1418.2 1272.11 1418.58 1272.45 1419.07 1272.7C1419.56 1272.95 1420.12 1273.08 1420.76 1273.08Z"
        fill="#A9448C"
        id="path1218"
      />
      <path
        d="M1402.35 1370L1410.16 1354.56V1354.42H1401.16V1352.55H1412.34V1354.52L1404.57 1370H1402.35ZM1420.84 1352.31C1421.56 1352.31 1422.27 1352.45 1422.99 1352.72C1423.7 1352.98 1424.36 1353.43 1424.95 1354.05C1425.54 1354.66 1426.01 1355.5 1426.37 1356.56C1426.73 1357.62 1426.91 1358.95 1426.91 1360.56C1426.91 1362.11 1426.76 1363.49 1426.47 1364.69C1426.18 1365.89 1425.75 1366.9 1425.2 1367.72C1424.66 1368.55 1423.99 1369.17 1423.21 1369.6C1422.43 1370.03 1421.55 1370.24 1420.57 1370.24C1419.59 1370.24 1418.72 1370.05 1417.95 1369.66C1417.19 1369.27 1416.56 1368.72 1416.08 1368.03C1415.59 1367.33 1415.28 1366.52 1415.15 1365.6H1417.23C1417.41 1366.4 1417.79 1367.07 1418.34 1367.59C1418.91 1368.11 1419.65 1368.36 1420.57 1368.36C1421.91 1368.36 1422.98 1367.78 1423.75 1366.6C1424.54 1365.42 1424.93 1363.76 1424.93 1361.61H1424.79C1424.48 1362.09 1424.1 1362.5 1423.66 1362.85C1423.22 1363.2 1422.74 1363.46 1422.2 1363.65C1421.67 1363.84 1421.1 1363.93 1420.5 1363.93C1419.5 1363.93 1418.58 1363.68 1417.75 1363.19C1416.92 1362.69 1416.25 1362.01 1415.75 1361.14C1415.26 1360.26 1415.01 1359.26 1415.01 1358.14C1415.01 1357.07 1415.25 1356.09 1415.73 1355.2C1416.21 1354.31 1416.89 1353.6 1417.75 1353.07C1418.63 1352.55 1419.66 1352.29 1420.84 1352.31ZM1420.84 1354.18C1420.12 1354.18 1419.48 1354.36 1418.91 1354.72C1418.34 1355.07 1417.89 1355.55 1417.55 1356.15C1417.22 1356.75 1417.06 1357.41 1417.06 1358.14C1417.06 1358.86 1417.22 1359.53 1417.53 1360.12C1417.86 1360.71 1418.3 1361.18 1418.85 1361.54C1419.42 1361.88 1420.06 1362.06 1420.77 1362.06C1421.31 1362.06 1421.81 1361.95 1422.28 1361.74C1422.75 1361.53 1423.15 1361.23 1423.5 1360.86C1423.85 1360.49 1424.13 1360.07 1424.33 1359.59C1424.52 1359.12 1424.62 1358.62 1424.62 1358.1C1424.62 1357.42 1424.46 1356.78 1424.13 1356.18C1423.81 1355.59 1423.36 1355.11 1422.78 1354.74C1422.22 1354.37 1421.57 1354.18 1420.84 1354.18Z"
        fill="#A9448C"
        id="path1220"
      />
      <path
        d="M1407.4 1566.24C1406.23 1566.24 1405.19 1566.03 1404.3 1565.62C1403.4 1565.2 1402.71 1564.62 1402.21 1563.89C1401.71 1563.15 1401.46 1562.31 1401.47 1561.36C1401.46 1560.62 1401.61 1559.94 1401.9 1559.32C1402.2 1558.69 1402.6 1558.16 1403.11 1557.74C1403.63 1557.32 1404.2 1557.05 1404.84 1556.93V1556.83C1404.01 1556.61 1403.34 1556.14 1402.85 1555.42C1402.35 1554.7 1402.11 1553.87 1402.11 1552.94C1402.11 1552.06 1402.33 1551.26 1402.79 1550.57C1403.24 1549.87 1403.87 1549.32 1404.66 1548.91C1405.46 1548.51 1406.38 1548.31 1407.4 1548.31C1408.41 1548.31 1409.31 1548.51 1410.11 1548.91C1410.9 1549.32 1411.53 1549.87 1411.98 1550.57C1412.44 1551.26 1412.68 1552.06 1412.68 1552.94C1412.68 1553.87 1412.42 1554.7 1411.92 1555.42C1411.43 1556.14 1410.77 1556.61 1409.95 1556.83V1556.93C1410.59 1557.05 1411.15 1557.32 1411.66 1557.74C1412.16 1558.16 1412.57 1558.69 1412.87 1559.32C1413.17 1559.94 1413.32 1560.62 1413.33 1561.36C1413.32 1562.31 1413.07 1563.15 1412.56 1563.89C1412.06 1564.62 1411.37 1565.2 1410.47 1565.62C1409.59 1566.03 1408.56 1566.24 1407.4 1566.24ZM1407.4 1564.36C1408.19 1564.36 1408.87 1564.24 1409.44 1563.98C1410.02 1563.72 1410.46 1563.36 1410.77 1562.9C1411.09 1562.43 1411.24 1561.89 1411.25 1561.26C1411.24 1560.6 1411.07 1560.02 1410.74 1559.51C1410.4 1559.01 1409.95 1558.61 1409.37 1558.32C1408.79 1558.03 1408.14 1557.89 1407.4 1557.89C1406.65 1557.89 1405.99 1558.03 1405.4 1558.32C1404.82 1558.61 1404.37 1559.01 1404.03 1559.51C1403.7 1560.02 1403.54 1560.6 1403.55 1561.26C1403.54 1561.89 1403.69 1562.43 1404 1562.9C1404.31 1563.36 1404.76 1563.72 1405.34 1563.98C1405.91 1564.24 1406.6 1564.36 1407.4 1564.36ZM1407.4 1556.08C1408.02 1556.08 1408.58 1555.95 1409.06 1555.7C1409.55 1555.45 1409.93 1555.11 1410.21 1554.66C1410.49 1554.21 1410.63 1553.68 1410.64 1553.08C1410.63 1552.49 1410.49 1551.97 1410.22 1551.54C1409.95 1551.09 1409.57 1550.75 1409.09 1550.51C1408.6 1550.27 1408.04 1550.15 1407.4 1550.15C1406.74 1550.15 1406.17 1550.27 1405.68 1550.51C1405.2 1550.75 1404.82 1551.09 1404.55 1551.54C1404.28 1551.97 1404.15 1552.49 1404.16 1553.08C1404.15 1553.68 1404.29 1554.21 1404.56 1554.66C1404.84 1555.11 1405.22 1555.45 1405.71 1555.7C1406.2 1555.95 1406.76 1556.08 1407.4 1556.08ZM1422.29 1566.24C1421 1566.24 1419.91 1565.89 1419.01 1565.19C1418.1 1564.49 1417.41 1563.47 1416.94 1562.13C1416.46 1560.79 1416.22 1559.17 1416.22 1557.27C1416.22 1555.39 1416.46 1553.78 1416.94 1552.44C1417.42 1551.1 1418.11 1550.08 1419.02 1549.37C1419.93 1548.66 1421.02 1548.31 1422.29 1548.31C1423.56 1548.31 1424.65 1548.66 1425.55 1549.37C1426.46 1550.08 1427.16 1551.1 1427.63 1552.44C1428.12 1553.78 1428.36 1555.39 1428.36 1557.27C1428.36 1559.17 1428.12 1560.79 1427.64 1562.13C1427.16 1563.47 1426.47 1564.49 1425.57 1565.19C1424.67 1565.89 1423.57 1566.24 1422.29 1566.24ZM1422.29 1564.36C1423.56 1564.36 1424.55 1563.75 1425.25 1562.52C1425.96 1561.3 1426.31 1559.55 1426.31 1557.27C1426.31 1555.76 1426.15 1554.47 1425.83 1553.41C1425.51 1552.35 1425.05 1551.54 1424.45 1550.98C1423.85 1550.43 1423.13 1550.15 1422.29 1550.15C1421.03 1550.15 1420.04 1550.77 1419.33 1552.01C1418.62 1553.25 1418.27 1555.01 1418.27 1557.27C1418.27 1558.78 1418.43 1560.07 1418.74 1561.12C1419.06 1562.18 1419.52 1562.99 1420.12 1563.54C1420.72 1564.09 1421.44 1564.36 1422.29 1564.36Z"
        fill="#A9448C"
        id="path1222"
      />
      <path
        d="M1408.4 1659.24C1407.23 1659.24 1406.19 1659.03 1405.3 1658.62C1404.4 1658.2 1403.71 1657.62 1403.21 1656.89C1402.71 1656.15 1402.46 1655.31 1402.47 1654.36C1402.46 1653.62 1402.61 1652.94 1402.9 1652.32C1403.2 1651.69 1403.6 1651.16 1404.11 1650.74C1404.63 1650.32 1405.2 1650.05 1405.84 1649.93V1649.83C1405.01 1649.61 1404.34 1649.14 1403.85 1648.42C1403.35 1647.7 1403.11 1646.87 1403.11 1645.94C1403.11 1645.06 1403.33 1644.26 1403.79 1643.57C1404.24 1642.87 1404.87 1642.32 1405.66 1641.91C1406.46 1641.51 1407.38 1641.31 1408.4 1641.31C1409.41 1641.31 1410.31 1641.51 1411.11 1641.91C1411.9 1642.32 1412.53 1642.87 1412.98 1643.57C1413.44 1644.26 1413.68 1645.06 1413.68 1645.94C1413.68 1646.87 1413.42 1647.7 1412.92 1648.42C1412.43 1649.14 1411.77 1649.61 1410.95 1649.83V1649.93C1411.59 1650.05 1412.15 1650.32 1412.66 1650.74C1413.16 1651.16 1413.57 1651.69 1413.87 1652.32C1414.17 1652.94 1414.32 1653.62 1414.33 1654.36C1414.32 1655.31 1414.07 1656.15 1413.56 1656.89C1413.06 1657.62 1412.37 1658.2 1411.47 1658.62C1410.59 1659.03 1409.56 1659.24 1408.4 1659.24ZM1408.4 1657.36C1409.19 1657.36 1409.87 1657.24 1410.44 1656.98C1411.02 1656.72 1411.46 1656.36 1411.77 1655.9C1412.09 1655.43 1412.24 1654.89 1412.25 1654.26C1412.24 1653.6 1412.07 1653.02 1411.74 1652.51C1411.4 1652.01 1410.95 1651.61 1410.37 1651.32C1409.79 1651.03 1409.14 1650.89 1408.4 1650.89C1407.65 1650.89 1406.99 1651.03 1406.4 1651.32C1405.82 1651.61 1405.37 1652.01 1405.03 1652.51C1404.7 1653.02 1404.54 1653.6 1404.55 1654.26C1404.54 1654.89 1404.69 1655.43 1405 1655.9C1405.31 1656.36 1405.76 1656.72 1406.34 1656.98C1406.91 1657.24 1407.6 1657.36 1408.4 1657.36ZM1408.4 1649.08C1409.02 1649.08 1409.58 1648.95 1410.06 1648.7C1410.55 1648.45 1410.93 1648.11 1411.21 1647.66C1411.49 1647.21 1411.63 1646.68 1411.64 1646.08C1411.63 1645.49 1411.49 1644.97 1411.22 1644.54C1410.95 1644.09 1410.57 1643.75 1410.09 1643.51C1409.6 1643.27 1409.04 1643.15 1408.4 1643.15C1407.74 1643.15 1407.17 1643.27 1406.68 1643.51C1406.2 1643.75 1405.82 1644.09 1405.55 1644.54C1405.28 1644.97 1405.15 1645.49 1405.16 1646.08C1405.15 1646.68 1405.29 1647.21 1405.56 1647.66C1405.84 1648.11 1406.22 1648.45 1406.71 1648.7C1407.2 1648.95 1407.76 1649.08 1408.4 1649.08ZM1423.73 1641.55V1659H1421.62V1643.76H1421.52L1417.25 1646.59V1644.44L1421.62 1641.55H1423.73Z"
        fill="#A9448C"
        id="path1224"
      />
      <path
        d="M1234.4 1559.24C1233.23 1559.24 1232.19 1559.03 1231.3 1558.62C1230.4 1558.2 1229.71 1557.62 1229.21 1556.89C1228.71 1556.15 1228.46 1555.31 1228.47 1554.36C1228.46 1553.62 1228.61 1552.94 1228.9 1552.32C1229.2 1551.69 1229.6 1551.16 1230.11 1550.74C1230.63 1550.32 1231.2 1550.05 1231.84 1549.93V1549.83C1231.01 1549.61 1230.34 1549.14 1229.85 1548.42C1229.35 1547.7 1229.11 1546.87 1229.11 1545.94C1229.11 1545.06 1229.33 1544.26 1229.79 1543.57C1230.24 1542.87 1230.87 1542.32 1231.66 1541.91C1232.46 1541.51 1233.38 1541.31 1234.4 1541.31C1235.41 1541.31 1236.31 1541.51 1237.11 1541.91C1237.9 1542.32 1238.53 1542.87 1238.98 1543.57C1239.44 1544.26 1239.68 1545.06 1239.68 1545.94C1239.68 1546.87 1239.42 1547.7 1238.92 1548.42C1238.43 1549.14 1237.77 1549.61 1236.95 1549.83V1549.93C1237.59 1550.05 1238.15 1550.32 1238.66 1550.74C1239.16 1551.16 1239.57 1551.69 1239.87 1552.32C1240.17 1552.94 1240.32 1553.62 1240.33 1554.36C1240.32 1555.31 1240.07 1556.15 1239.56 1556.89C1239.06 1557.62 1238.37 1558.2 1237.47 1558.62C1236.59 1559.03 1235.56 1559.24 1234.4 1559.24ZM1234.4 1557.36C1235.19 1557.36 1235.87 1557.24 1236.44 1556.98C1237.02 1556.72 1237.46 1556.36 1237.77 1555.9C1238.09 1555.43 1238.24 1554.89 1238.25 1554.26C1238.24 1553.6 1238.07 1553.02 1237.74 1552.51C1237.4 1552.01 1236.95 1551.61 1236.37 1551.32C1235.79 1551.03 1235.14 1550.89 1234.4 1550.89C1233.65 1550.89 1232.99 1551.03 1232.4 1551.32C1231.82 1551.61 1231.37 1552.01 1231.03 1552.51C1230.7 1553.02 1230.54 1553.6 1230.55 1554.26C1230.54 1554.89 1230.69 1555.43 1231 1555.9C1231.31 1556.36 1231.76 1556.72 1232.34 1556.98C1232.91 1557.24 1233.6 1557.36 1234.4 1557.36ZM1234.4 1549.08C1235.02 1549.08 1235.58 1548.95 1236.06 1548.7C1236.55 1548.45 1236.93 1548.11 1237.21 1547.66C1237.49 1547.21 1237.63 1546.68 1237.64 1546.08C1237.63 1545.49 1237.49 1544.97 1237.22 1544.54C1236.95 1544.09 1236.57 1543.75 1236.09 1543.51C1235.6 1543.27 1235.04 1543.15 1234.4 1543.15C1233.74 1543.15 1233.17 1543.27 1232.68 1543.51C1232.2 1543.75 1231.82 1544.09 1231.55 1544.54C1231.28 1544.97 1231.15 1545.49 1231.16 1546.08C1231.15 1546.68 1231.29 1547.21 1231.56 1547.66C1231.84 1548.11 1232.22 1548.45 1232.71 1548.7C1233.2 1548.95 1233.76 1549.08 1234.4 1549.08ZM1243.6 1559V1557.47L1249.36 1551.16C1250.03 1550.42 1250.59 1549.78 1251.03 1549.23C1251.47 1548.68 1251.79 1548.16 1252 1547.68C1252.22 1547.19 1252.32 1546.68 1252.32 1546.15C1252.32 1545.53 1252.18 1545 1251.88 1544.55C1251.59 1544.11 1251.19 1543.76 1250.69 1543.51C1250.18 1543.27 1249.61 1543.15 1248.98 1543.15C1248.31 1543.15 1247.73 1543.29 1247.23 1543.57C1246.73 1543.84 1246.35 1544.22 1246.08 1544.72C1245.81 1545.21 1245.68 1545.79 1245.68 1546.45H1243.66C1243.66 1545.43 1243.9 1544.53 1244.37 1543.76C1244.84 1542.99 1245.49 1542.39 1246.3 1541.95C1247.12 1541.52 1248.03 1541.31 1249.05 1541.31C1250.07 1541.31 1250.98 1541.52 1251.77 1541.95C1252.56 1542.39 1253.18 1542.97 1253.63 1543.7C1254.08 1544.43 1254.3 1545.25 1254.3 1546.15C1254.3 1546.79 1254.18 1547.42 1253.95 1548.03C1253.72 1548.64 1253.33 1549.32 1252.76 1550.07C1252.2 1550.81 1251.41 1551.72 1250.41 1552.8L1246.49 1556.99V1557.12H1254.61V1559H1243.6Z"
        fill="#A9448C"
        id="path1226"
      />
      <path
        d="M1124.4 1559.24C1123.23 1559.24 1122.19 1559.03 1121.3 1558.62C1120.4 1558.2 1119.71 1557.62 1119.21 1556.89C1118.71 1556.15 1118.46 1555.31 1118.47 1554.36C1118.46 1553.62 1118.61 1552.94 1118.9 1552.32C1119.2 1551.69 1119.6 1551.16 1120.11 1550.74C1120.63 1550.32 1121.2 1550.05 1121.84 1549.93V1549.83C1121.01 1549.61 1120.34 1549.14 1119.85 1548.42C1119.35 1547.7 1119.11 1546.87 1119.11 1545.94C1119.11 1545.06 1119.33 1544.26 1119.79 1543.57C1120.24 1542.87 1120.87 1542.32 1121.66 1541.91C1122.46 1541.51 1123.38 1541.31 1124.4 1541.31C1125.41 1541.31 1126.31 1541.51 1127.11 1541.91C1127.9 1542.32 1128.53 1542.87 1128.98 1543.57C1129.44 1544.26 1129.68 1545.06 1129.68 1545.94C1129.68 1546.87 1129.42 1547.7 1128.92 1548.42C1128.43 1549.14 1127.77 1549.61 1126.95 1549.83V1549.93C1127.59 1550.05 1128.15 1550.32 1128.66 1550.74C1129.16 1551.16 1129.57 1551.69 1129.87 1552.32C1130.17 1552.94 1130.32 1553.62 1130.33 1554.36C1130.32 1555.31 1130.07 1556.15 1129.56 1556.89C1129.06 1557.62 1128.37 1558.2 1127.47 1558.62C1126.59 1559.03 1125.56 1559.24 1124.4 1559.24ZM1124.4 1557.36C1125.19 1557.36 1125.87 1557.24 1126.44 1556.98C1127.02 1556.72 1127.46 1556.36 1127.77 1555.9C1128.09 1555.43 1128.24 1554.89 1128.25 1554.26C1128.24 1553.6 1128.07 1553.02 1127.74 1552.51C1127.4 1552.01 1126.95 1551.61 1126.37 1551.32C1125.79 1551.03 1125.14 1550.89 1124.4 1550.89C1123.65 1550.89 1122.99 1551.03 1122.4 1551.32C1121.82 1551.61 1121.37 1552.01 1121.03 1552.51C1120.7 1553.02 1120.54 1553.6 1120.55 1554.26C1120.54 1554.89 1120.69 1555.43 1121 1555.9C1121.31 1556.36 1121.76 1556.72 1122.34 1556.98C1122.91 1557.24 1123.6 1557.36 1124.4 1557.36ZM1124.4 1549.08C1125.02 1549.08 1125.58 1548.95 1126.06 1548.7C1126.55 1548.45 1126.93 1548.11 1127.21 1547.66C1127.49 1547.21 1127.63 1546.68 1127.64 1546.08C1127.63 1545.49 1127.49 1544.97 1127.22 1544.54C1126.95 1544.09 1126.57 1543.75 1126.09 1543.51C1125.6 1543.27 1125.04 1543.15 1124.4 1543.15C1123.74 1543.15 1123.17 1543.27 1122.68 1543.51C1122.2 1543.75 1121.82 1544.09 1121.55 1544.54C1121.28 1544.97 1121.15 1545.49 1121.16 1546.08C1121.15 1546.68 1121.29 1547.21 1121.56 1547.66C1121.84 1548.11 1122.22 1548.45 1122.71 1548.7C1123.2 1548.95 1123.76 1549.08 1124.4 1549.08ZM1139.49 1559.24C1138.37 1559.24 1137.37 1559.05 1136.49 1558.66C1135.61 1558.27 1134.91 1557.74 1134.4 1557.05C1133.89 1556.36 1133.61 1555.55 1133.56 1554.64H1135.71C1135.75 1555.2 1135.95 1555.68 1136.29 1556.09C1136.63 1556.5 1137.08 1556.81 1137.63 1557.03C1138.18 1557.25 1138.79 1557.36 1139.46 1557.36C1140.21 1557.36 1140.87 1557.23 1141.45 1556.97C1142.03 1556.71 1142.49 1556.35 1142.82 1555.88C1143.15 1555.41 1143.31 1554.88 1143.31 1554.26C1143.31 1553.62 1143.15 1553.05 1142.83 1552.57C1142.52 1552.07 1142.05 1551.68 1141.44 1551.41C1140.82 1551.13 1140.07 1550.99 1139.19 1550.99H1137.79V1549.11H1139.19C1139.88 1549.11 1140.49 1548.99 1141.01 1548.74C1141.54 1548.49 1141.95 1548.14 1142.25 1547.68C1142.55 1547.23 1142.7 1546.69 1142.7 1546.08C1142.7 1545.49 1142.57 1544.97 1142.31 1544.54C1142.04 1544.1 1141.68 1543.76 1141.2 1543.51C1140.73 1543.27 1140.17 1543.15 1139.53 1543.15C1138.93 1543.15 1138.36 1543.26 1137.82 1543.48C1137.29 1543.7 1136.86 1544.01 1136.53 1544.43C1136.19 1544.84 1136.01 1545.33 1135.98 1545.91H1133.94C1133.97 1544.99 1134.25 1544.19 1134.76 1543.51C1135.28 1542.81 1135.96 1542.27 1136.79 1541.89C1137.63 1541.5 1138.56 1541.31 1139.56 1541.31C1140.64 1541.31 1141.57 1541.53 1142.34 1541.96C1143.11 1542.39 1143.71 1542.97 1144.12 1543.68C1144.54 1544.39 1144.74 1545.15 1144.74 1545.98C1144.74 1546.96 1144.49 1547.8 1143.97 1548.49C1143.46 1549.18 1142.76 1549.66 1141.88 1549.93V1550.07C1142.98 1550.25 1143.84 1550.72 1144.46 1551.47C1145.08 1552.22 1145.39 1553.15 1145.39 1554.26C1145.39 1555.21 1145.13 1556.06 1144.62 1556.82C1144.1 1557.57 1143.41 1558.16 1142.52 1558.59C1141.63 1559.02 1140.62 1559.24 1139.49 1559.24Z"
        fill="#A9448C"
        id="path1228"
      />
      <path
        d="M1024.4 1561.24C1023.23 1561.24 1022.19 1561.03 1021.3 1560.62C1020.4 1560.2 1019.71 1559.62 1019.21 1558.89C1018.71 1558.15 1018.46 1557.31 1018.47 1556.36C1018.46 1555.62 1018.61 1554.94 1018.9 1554.32C1019.2 1553.69 1019.6 1553.16 1020.11 1552.74C1020.63 1552.32 1021.2 1552.05 1021.84 1551.93V1551.83C1021.01 1551.61 1020.34 1551.14 1019.85 1550.42C1019.35 1549.7 1019.11 1548.87 1019.11 1547.94C1019.11 1547.06 1019.33 1546.26 1019.79 1545.57C1020.24 1544.87 1020.87 1544.32 1021.66 1543.91C1022.46 1543.51 1023.38 1543.31 1024.4 1543.31C1025.41 1543.31 1026.31 1543.51 1027.11 1543.91C1027.9 1544.32 1028.53 1544.87 1028.98 1545.57C1029.44 1546.26 1029.68 1547.06 1029.68 1547.94C1029.68 1548.87 1029.42 1549.7 1028.92 1550.42C1028.43 1551.14 1027.77 1551.61 1026.95 1551.83V1551.93C1027.59 1552.05 1028.15 1552.32 1028.66 1552.74C1029.16 1553.16 1029.57 1553.69 1029.87 1554.32C1030.17 1554.94 1030.32 1555.62 1030.33 1556.36C1030.32 1557.31 1030.07 1558.15 1029.56 1558.89C1029.06 1559.62 1028.37 1560.2 1027.47 1560.62C1026.59 1561.03 1025.56 1561.24 1024.4 1561.24ZM1024.4 1559.36C1025.19 1559.36 1025.87 1559.24 1026.44 1558.98C1027.02 1558.72 1027.46 1558.36 1027.77 1557.9C1028.09 1557.43 1028.24 1556.89 1028.25 1556.26C1028.24 1555.6 1028.07 1555.02 1027.74 1554.51C1027.4 1554.01 1026.95 1553.61 1026.37 1553.32C1025.79 1553.03 1025.14 1552.89 1024.4 1552.89C1023.65 1552.89 1022.99 1553.03 1022.4 1553.32C1021.82 1553.61 1021.37 1554.01 1021.03 1554.51C1020.7 1555.02 1020.54 1555.6 1020.55 1556.26C1020.54 1556.89 1020.69 1557.43 1021 1557.9C1021.31 1558.36 1021.76 1558.72 1022.34 1558.98C1022.91 1559.24 1023.6 1559.36 1024.4 1559.36ZM1024.4 1551.08C1025.02 1551.08 1025.58 1550.95 1026.06 1550.7C1026.55 1550.45 1026.93 1550.11 1027.21 1549.66C1027.49 1549.21 1027.63 1548.68 1027.64 1548.08C1027.63 1547.49 1027.49 1546.97 1027.22 1546.54C1026.95 1546.09 1026.57 1545.75 1026.09 1545.51C1025.6 1545.27 1025.04 1545.15 1024.4 1545.15C1023.74 1545.15 1023.17 1545.27 1022.68 1545.51C1022.2 1545.75 1021.82 1546.09 1021.55 1546.54C1021.28 1546.97 1021.15 1547.49 1021.16 1548.08C1021.15 1548.68 1021.29 1549.21 1021.56 1549.66C1021.84 1550.11 1022.22 1550.45 1022.71 1550.7C1023.2 1550.95 1023.76 1551.08 1024.4 1551.08ZM1033.19 1557.42V1555.68L1040.86 1543.55H1042.12V1546.24H1041.27L1035.47 1555.41V1555.55H1045.8V1557.42H1033.19ZM1041.4 1561V1556.89V1556.08V1543.55H1043.41V1561H1041.4Z"
        fill="#A9448C"
        id="path1230"
      />
      <path
        d="M925.398 1559.24C924.227 1559.24 923.193 1559.03 922.295 1558.62C921.403 1558.2 920.707 1557.62 920.207 1556.89C919.707 1556.15 919.46 1555.31 919.466 1554.36C919.46 1553.62 919.605 1552.94 919.901 1552.32C920.196 1551.69 920.599 1551.16 921.111 1550.74C921.628 1550.32 922.205 1550.05 922.841 1549.93V1549.83C922.006 1549.61 921.341 1549.14 920.847 1548.42C920.352 1547.7 920.108 1546.87 920.114 1545.94C920.108 1545.06 920.332 1544.26 920.787 1543.57C921.241 1542.87 921.866 1542.32 922.662 1541.91C923.463 1541.51 924.375 1541.31 925.398 1541.31C926.409 1541.31 927.313 1541.51 928.108 1541.91C928.903 1542.32 929.528 1542.87 929.983 1543.57C930.443 1544.26 930.676 1545.06 930.682 1545.94C930.676 1546.87 930.423 1547.7 929.923 1548.42C929.429 1549.14 928.773 1549.61 927.955 1549.83V1549.93C928.585 1550.05 929.153 1550.32 929.659 1550.74C930.165 1551.16 930.568 1551.69 930.869 1552.32C931.17 1552.94 931.324 1553.62 931.33 1554.36C931.324 1555.31 931.068 1556.15 930.562 1556.89C930.062 1557.62 929.366 1558.2 928.474 1558.62C927.588 1559.03 926.563 1559.24 925.398 1559.24ZM925.398 1557.36C926.188 1557.36 926.869 1557.24 927.443 1556.98C928.017 1556.72 928.46 1556.36 928.773 1555.9C929.085 1555.43 929.244 1554.89 929.25 1554.26C929.244 1553.6 929.074 1553.02 928.739 1552.51C928.403 1552.01 927.946 1551.61 927.366 1551.32C926.793 1551.03 926.136 1550.89 925.398 1550.89C924.653 1550.89 923.989 1551.03 923.403 1551.32C922.824 1551.61 922.366 1552.01 922.031 1552.51C921.702 1553.02 921.54 1553.6 921.545 1554.26C921.54 1554.89 921.69 1555.43 921.997 1555.9C922.31 1556.36 922.756 1556.72 923.335 1556.98C923.915 1557.24 924.602 1557.36 925.398 1557.36ZM925.398 1549.08C926.023 1549.08 926.577 1548.95 927.06 1548.7C927.548 1548.45 927.932 1548.11 928.21 1547.66C928.489 1547.21 928.631 1546.68 928.636 1546.08C928.631 1545.49 928.491 1544.97 928.219 1544.54C927.946 1544.09 927.568 1543.75 927.085 1543.51C926.602 1543.27 926.04 1543.15 925.398 1543.15C924.744 1543.15 924.173 1543.27 923.685 1543.51C923.196 1543.75 922.818 1544.09 922.551 1544.54C922.284 1544.97 922.153 1545.49 922.159 1546.08C922.153 1546.68 922.287 1547.21 922.56 1547.66C922.838 1548.11 923.222 1548.45 923.71 1548.7C924.199 1548.95 924.761 1549.08 925.398 1549.08ZM940.05 1559.24C939.05 1559.24 938.15 1559.04 937.349 1558.64C936.548 1558.24 935.906 1557.7 935.423 1557.01C934.94 1556.31 934.675 1555.52 934.63 1554.64H936.675C936.755 1555.43 937.113 1556.08 937.749 1556.6C938.391 1557.11 939.158 1557.36 940.05 1557.36C940.766 1557.36 941.403 1557.2 941.96 1556.86C942.522 1556.53 942.962 1556.07 943.281 1555.48C943.604 1554.89 943.766 1554.22 943.766 1553.48C943.766 1552.72 943.599 1552.04 943.263 1551.44C942.934 1550.84 942.479 1550.36 941.9 1550.02C941.32 1549.67 940.658 1549.49 939.914 1549.49C939.38 1549.48 938.832 1549.57 938.269 1549.74C937.707 1549.9 937.244 1550.11 936.88 1550.38L934.903 1550.14L935.96 1541.55H945.028V1543.42H937.732L937.119 1548.57H937.221C937.579 1548.28 938.028 1548.05 938.567 1547.86C939.107 1547.67 939.67 1547.58 940.255 1547.58C941.323 1547.58 942.275 1547.84 943.11 1548.35C943.951 1548.85 944.61 1549.55 945.087 1550.43C945.57 1551.31 945.812 1552.31 945.812 1553.44C945.812 1554.56 945.562 1555.55 945.062 1556.43C944.567 1557.3 943.886 1557.98 943.016 1558.49C942.147 1558.99 941.158 1559.24 940.05 1559.24Z"
        fill="#A9448C"
        id="path1232"
      />
      <path
        d="M811.398 1543.24C810.227 1543.24 809.193 1543.03 808.295 1542.62C807.403 1542.2 806.707 1541.62 806.207 1540.89C805.707 1540.15 805.46 1539.31 805.466 1538.36C805.46 1537.62 805.605 1536.94 805.901 1536.32C806.196 1535.69 806.599 1535.16 807.111 1534.74C807.628 1534.32 808.205 1534.05 808.841 1533.93V1533.83C808.006 1533.61 807.341 1533.14 806.847 1532.42C806.352 1531.7 806.108 1530.87 806.114 1529.94C806.108 1529.06 806.332 1528.26 806.787 1527.57C807.241 1526.87 807.866 1526.32 808.662 1525.91C809.463 1525.51 810.375 1525.31 811.398 1525.31C812.409 1525.31 813.313 1525.51 814.108 1525.91C814.903 1526.32 815.528 1526.87 815.983 1527.57C816.443 1528.26 816.676 1529.06 816.682 1529.94C816.676 1530.87 816.423 1531.7 815.923 1532.42C815.429 1533.14 814.773 1533.61 813.955 1533.83V1533.93C814.585 1534.05 815.153 1534.32 815.659 1534.74C816.165 1535.16 816.568 1535.69 816.869 1536.32C817.17 1536.94 817.324 1537.62 817.33 1538.36C817.324 1539.31 817.068 1540.15 816.562 1540.89C816.062 1541.62 815.366 1542.2 814.474 1542.62C813.588 1543.03 812.563 1543.24 811.398 1543.24ZM811.398 1541.36C812.188 1541.36 812.869 1541.24 813.443 1540.98C814.017 1540.72 814.46 1540.36 814.773 1539.9C815.085 1539.43 815.244 1538.89 815.25 1538.26C815.244 1537.6 815.074 1537.02 814.739 1536.51C814.403 1536.01 813.946 1535.61 813.366 1535.32C812.793 1535.03 812.136 1534.89 811.398 1534.89C810.653 1534.89 809.989 1535.03 809.403 1535.32C808.824 1535.61 808.366 1536.01 808.031 1536.51C807.702 1537.02 807.54 1537.6 807.545 1538.26C807.54 1538.89 807.69 1539.43 807.997 1539.9C808.31 1540.36 808.756 1540.72 809.335 1540.98C809.915 1541.24 810.602 1541.36 811.398 1541.36ZM811.398 1533.08C812.023 1533.08 812.577 1532.95 813.06 1532.7C813.548 1532.45 813.932 1532.11 814.21 1531.66C814.489 1531.21 814.631 1530.68 814.636 1530.08C814.631 1529.49 814.491 1528.97 814.219 1528.54C813.946 1528.09 813.568 1527.75 813.085 1527.51C812.602 1527.27 812.04 1527.15 811.398 1527.15C810.744 1527.15 810.173 1527.27 809.685 1527.51C809.196 1527.75 808.818 1528.09 808.551 1528.54C808.284 1528.97 808.153 1529.49 808.159 1530.08C808.153 1530.68 808.287 1531.21 808.56 1531.66C808.838 1532.11 809.222 1532.45 809.71 1532.7C810.199 1532.95 810.761 1533.08 811.398 1533.08ZM826.391 1543.24C825.675 1543.23 824.96 1543.09 824.244 1542.83C823.528 1542.57 822.874 1542.13 822.283 1541.51C821.692 1540.88 821.218 1540.04 820.86 1538.98C820.502 1537.91 820.323 1536.57 820.323 1534.95C820.323 1533.41 820.468 1532.04 820.758 1530.85C821.048 1529.65 821.468 1528.64 822.019 1527.82C822.57 1527 823.235 1526.37 824.013 1525.95C824.798 1525.52 825.681 1525.31 826.664 1525.31C827.641 1525.31 828.511 1525.5 829.272 1525.89C830.039 1526.28 830.664 1526.82 831.147 1527.51C831.63 1528.21 831.942 1529.01 832.085 1529.91H830.005C829.812 1529.12 829.437 1528.47 828.88 1527.96C828.323 1527.44 827.585 1527.18 826.664 1527.18C825.312 1527.18 824.246 1527.77 823.468 1528.95C822.695 1530.12 822.306 1531.77 822.3 1533.9H822.437C822.755 1533.41 823.133 1533 823.57 1532.66C824.013 1532.32 824.502 1532.05 825.036 1531.86C825.57 1531.67 826.136 1531.58 826.732 1531.58C827.732 1531.58 828.647 1531.83 829.477 1532.33C830.306 1532.82 830.971 1533.51 831.471 1534.38C831.971 1535.25 832.221 1536.25 832.221 1537.38C832.221 1538.45 831.979 1539.44 831.496 1540.34C831.013 1541.23 830.335 1541.94 829.46 1542.47C828.59 1542.99 827.567 1543.25 826.391 1543.24ZM826.391 1541.36C827.107 1541.36 827.749 1541.18 828.317 1540.83C828.891 1540.47 829.343 1539.99 829.673 1539.39C830.008 1538.78 830.175 1538.11 830.175 1537.38C830.175 1536.65 830.013 1536 829.69 1535.41C829.371 1534.81 828.931 1534.34 828.369 1533.98C827.812 1533.63 827.175 1533.45 826.46 1533.45C825.92 1533.45 825.417 1533.56 824.951 1533.78C824.485 1533.99 824.076 1534.28 823.724 1534.65C823.377 1535.02 823.104 1535.44 822.906 1535.92C822.707 1536.39 822.607 1536.89 822.607 1537.41C822.607 1538.1 822.769 1538.75 823.093 1539.35C823.423 1539.95 823.871 1540.44 824.44 1540.81C825.013 1541.18 825.664 1541.36 826.391 1541.36Z"
        fill="#A9448C"
        id="path1234"
      />
      <path
        d="M731.398 1541.24C730.227 1541.24 729.193 1541.03 728.295 1540.62C727.403 1540.2 726.707 1539.62 726.207 1538.89C725.707 1538.15 725.46 1537.31 725.466 1536.36C725.46 1535.62 725.605 1534.94 725.901 1534.32C726.196 1533.69 726.599 1533.16 727.111 1532.74C727.628 1532.32 728.205 1532.05 728.841 1531.93V1531.83C728.006 1531.61 727.341 1531.14 726.847 1530.42C726.352 1529.7 726.108 1528.87 726.114 1527.94C726.108 1527.06 726.332 1526.26 726.787 1525.57C727.241 1524.87 727.866 1524.32 728.662 1523.91C729.463 1523.51 730.375 1523.31 731.398 1523.31C732.409 1523.31 733.313 1523.51 734.108 1523.91C734.903 1524.32 735.528 1524.87 735.983 1525.57C736.443 1526.26 736.676 1527.06 736.682 1527.94C736.676 1528.87 736.423 1529.7 735.923 1530.42C735.429 1531.14 734.773 1531.61 733.955 1531.83V1531.93C734.585 1532.05 735.153 1532.32 735.659 1532.74C736.165 1533.16 736.568 1533.69 736.869 1534.32C737.17 1534.94 737.324 1535.62 737.33 1536.36C737.324 1537.31 737.068 1538.15 736.562 1538.89C736.062 1539.62 735.366 1540.2 734.474 1540.62C733.588 1541.03 732.563 1541.24 731.398 1541.24ZM731.398 1539.36C732.188 1539.36 732.869 1539.24 733.443 1538.98C734.017 1538.72 734.46 1538.36 734.773 1537.9C735.085 1537.43 735.244 1536.89 735.25 1536.26C735.244 1535.6 735.074 1535.02 734.739 1534.51C734.403 1534.01 733.946 1533.61 733.366 1533.32C732.793 1533.03 732.136 1532.89 731.398 1532.89C730.653 1532.89 729.989 1533.03 729.403 1533.32C728.824 1533.61 728.366 1534.01 728.031 1534.51C727.702 1535.02 727.54 1535.6 727.545 1536.26C727.54 1536.89 727.69 1537.43 727.997 1537.9C728.31 1538.36 728.756 1538.72 729.335 1538.98C729.915 1539.24 730.602 1539.36 731.398 1539.36ZM731.398 1531.08C732.023 1531.08 732.577 1530.95 733.06 1530.7C733.548 1530.45 733.932 1530.11 734.21 1529.66C734.489 1529.21 734.631 1528.68 734.636 1528.08C734.631 1527.49 734.491 1526.97 734.219 1526.54C733.946 1526.09 733.568 1525.75 733.085 1525.51C732.602 1525.27 732.04 1525.15 731.398 1525.15C730.744 1525.15 730.173 1525.27 729.685 1525.51C729.196 1525.75 728.818 1526.09 728.551 1526.54C728.284 1526.97 728.153 1527.49 728.159 1528.08C728.153 1528.68 728.287 1529.21 728.56 1529.66C728.838 1530.11 729.222 1530.45 729.71 1530.7C730.199 1530.95 730.761 1531.08 731.398 1531.08ZM741.141 1541L748.948 1525.56V1525.42H739.948V1523.55H751.13V1525.52L743.357 1541H741.141Z"
        fill="#A9448C"
        id="path1236"
      />
      <path
        d="M623.398 1539.24C622.227 1539.24 621.193 1539.03 620.295 1538.62C619.403 1538.2 618.707 1537.62 618.207 1536.89C617.707 1536.15 617.46 1535.31 617.466 1534.36C617.46 1533.62 617.605 1532.94 617.901 1532.32C618.196 1531.69 618.599 1531.16 619.111 1530.74C619.628 1530.32 620.205 1530.05 620.841 1529.93V1529.83C620.006 1529.61 619.341 1529.14 618.847 1528.42C618.352 1527.7 618.108 1526.87 618.114 1525.94C618.108 1525.06 618.332 1524.26 618.787 1523.57C619.241 1522.87 619.866 1522.32 620.662 1521.91C621.463 1521.51 622.375 1521.31 623.398 1521.31C624.409 1521.31 625.313 1521.51 626.108 1521.91C626.903 1522.32 627.528 1522.87 627.983 1523.57C628.443 1524.26 628.676 1525.06 628.682 1525.94C628.676 1526.87 628.423 1527.7 627.923 1528.42C627.429 1529.14 626.773 1529.61 625.955 1529.83V1529.93C626.585 1530.05 627.153 1530.32 627.659 1530.74C628.165 1531.16 628.568 1531.69 628.869 1532.32C629.17 1532.94 629.324 1533.62 629.33 1534.36C629.324 1535.31 629.068 1536.15 628.562 1536.89C628.062 1537.62 627.366 1538.2 626.474 1538.62C625.588 1539.03 624.563 1539.24 623.398 1539.24ZM623.398 1537.36C624.188 1537.36 624.869 1537.24 625.443 1536.98C626.017 1536.72 626.46 1536.36 626.773 1535.9C627.085 1535.43 627.244 1534.89 627.25 1534.26C627.244 1533.6 627.074 1533.02 626.739 1532.51C626.403 1532.01 625.946 1531.61 625.366 1531.32C624.793 1531.03 624.136 1530.89 623.398 1530.89C622.653 1530.89 621.989 1531.03 621.403 1531.32C620.824 1531.61 620.366 1532.01 620.031 1532.51C619.702 1533.02 619.54 1533.6 619.545 1534.26C619.54 1534.89 619.69 1535.43 619.997 1535.9C620.31 1536.36 620.756 1536.72 621.335 1536.98C621.915 1537.24 622.602 1537.36 623.398 1537.36ZM623.398 1529.08C624.023 1529.08 624.577 1528.95 625.06 1528.7C625.548 1528.45 625.932 1528.11 626.21 1527.66C626.489 1527.21 626.631 1526.68 626.636 1526.08C626.631 1525.49 626.491 1524.97 626.219 1524.54C625.946 1524.09 625.568 1523.75 625.085 1523.51C624.602 1523.27 624.04 1523.15 623.398 1523.15C622.744 1523.15 622.173 1523.27 621.685 1523.51C621.196 1523.75 620.818 1524.09 620.551 1524.54C620.284 1524.97 620.153 1525.49 620.159 1526.08C620.153 1526.68 620.287 1527.21 620.56 1527.66C620.838 1528.11 621.222 1528.45 621.71 1528.7C622.199 1528.95 622.761 1529.08 623.398 1529.08ZM638.187 1539.24C637.016 1539.24 635.982 1539.03 635.085 1538.62C634.192 1538.2 633.496 1537.62 632.996 1536.89C632.496 1536.15 632.249 1535.31 632.255 1534.36C632.249 1533.62 632.394 1532.94 632.69 1532.32C632.985 1531.69 633.388 1531.16 633.9 1530.74C634.417 1530.32 634.994 1530.05 635.63 1529.93V1529.83C634.795 1529.61 634.13 1529.14 633.636 1528.42C633.141 1527.7 632.897 1526.87 632.903 1525.94C632.897 1525.06 633.121 1524.26 633.576 1523.57C634.031 1522.87 634.656 1522.32 635.451 1521.91C636.252 1521.51 637.164 1521.31 638.187 1521.31C639.198 1521.31 640.102 1521.51 640.897 1521.91C641.692 1522.32 642.317 1522.87 642.772 1523.57C643.232 1524.26 643.465 1525.06 643.471 1525.94C643.465 1526.87 643.212 1527.7 642.712 1528.42C642.218 1529.14 641.562 1529.61 640.744 1529.83V1529.93C641.374 1530.05 641.942 1530.32 642.448 1530.74C642.954 1531.16 643.357 1531.69 643.658 1532.32C643.96 1532.94 644.113 1533.62 644.119 1534.36C644.113 1535.31 643.857 1536.15 643.352 1536.89C642.852 1537.62 642.156 1538.2 641.263 1538.62C640.377 1539.03 639.352 1539.24 638.187 1539.24ZM638.187 1537.36C638.977 1537.36 639.658 1537.24 640.232 1536.98C640.806 1536.72 641.249 1536.36 641.562 1535.9C641.874 1535.43 642.033 1534.89 642.039 1534.26C642.033 1533.6 641.863 1533.02 641.528 1532.51C641.192 1532.01 640.735 1531.61 640.156 1531.32C639.582 1531.03 638.925 1530.89 638.187 1530.89C637.442 1530.89 636.778 1531.03 636.192 1531.32C635.613 1531.61 635.156 1532.01 634.82 1532.51C634.491 1533.02 634.329 1533.6 634.335 1534.26C634.329 1534.89 634.479 1535.43 634.786 1535.9C635.099 1536.36 635.545 1536.72 636.124 1536.98C636.704 1537.24 637.391 1537.36 638.187 1537.36ZM638.187 1529.08C638.812 1529.08 639.366 1528.95 639.849 1528.7C640.337 1528.45 640.721 1528.11 640.999 1527.66C641.278 1527.21 641.42 1526.68 641.425 1526.08C641.42 1525.49 641.281 1524.97 641.008 1524.54C640.735 1524.09 640.357 1523.75 639.874 1523.51C639.391 1523.27 638.829 1523.15 638.187 1523.15C637.533 1523.15 636.962 1523.27 636.474 1523.51C635.985 1523.75 635.607 1524.09 635.34 1524.54C635.073 1524.97 634.942 1525.49 634.948 1526.08C634.942 1526.68 635.076 1527.21 635.349 1527.66C635.627 1528.11 636.011 1528.45 636.499 1528.7C636.988 1528.95 637.55 1529.08 638.187 1529.08Z"
        fill="#A9448C"
        id="path1238"
      />
      <path
        d="M483.398 1533.24C482.227 1533.24 481.193 1533.03 480.295 1532.62C479.403 1532.2 478.707 1531.62 478.207 1530.89C477.707 1530.15 477.46 1529.31 477.466 1528.36C477.46 1527.62 477.605 1526.94 477.901 1526.32C478.196 1525.69 478.599 1525.16 479.111 1524.74C479.628 1524.32 480.205 1524.05 480.841 1523.93V1523.83C480.006 1523.61 479.341 1523.14 478.847 1522.42C478.352 1521.7 478.108 1520.87 478.114 1519.94C478.108 1519.06 478.332 1518.26 478.787 1517.57C479.241 1516.87 479.866 1516.32 480.662 1515.91C481.463 1515.51 482.375 1515.31 483.398 1515.31C484.409 1515.31 485.313 1515.51 486.108 1515.91C486.903 1516.32 487.528 1516.87 487.983 1517.57C488.443 1518.26 488.676 1519.06 488.682 1519.94C488.676 1520.87 488.423 1521.7 487.923 1522.42C487.429 1523.14 486.773 1523.61 485.955 1523.83V1523.93C486.585 1524.05 487.153 1524.32 487.659 1524.74C488.165 1525.16 488.568 1525.69 488.869 1526.32C489.17 1526.94 489.324 1527.62 489.33 1528.36C489.324 1529.31 489.068 1530.15 488.562 1530.89C488.062 1531.62 487.366 1532.2 486.474 1532.62C485.588 1533.03 484.563 1533.24 483.398 1533.24ZM483.398 1531.36C484.188 1531.36 484.869 1531.24 485.443 1530.98C486.017 1530.72 486.46 1530.36 486.773 1529.9C487.085 1529.43 487.244 1528.89 487.25 1528.26C487.244 1527.6 487.074 1527.02 486.739 1526.51C486.403 1526.01 485.946 1525.61 485.366 1525.32C484.793 1525.03 484.136 1524.89 483.398 1524.89C482.653 1524.89 481.989 1525.03 481.403 1525.32C480.824 1525.61 480.366 1526.01 480.031 1526.51C479.702 1527.02 479.54 1527.6 479.545 1528.26C479.54 1528.89 479.69 1529.43 479.997 1529.9C480.31 1530.36 480.756 1530.72 481.335 1530.98C481.915 1531.24 482.602 1531.36 483.398 1531.36ZM483.398 1523.08C484.023 1523.08 484.577 1522.95 485.06 1522.7C485.548 1522.45 485.932 1522.11 486.21 1521.66C486.489 1521.21 486.631 1520.68 486.636 1520.08C486.631 1519.49 486.491 1518.97 486.219 1518.54C485.946 1518.09 485.568 1517.75 485.085 1517.51C484.602 1517.27 484.04 1517.15 483.398 1517.15C482.744 1517.15 482.173 1517.27 481.685 1517.51C481.196 1517.75 480.818 1518.09 480.551 1518.54C480.284 1518.97 480.153 1519.49 480.159 1520.08C480.153 1520.68 480.287 1521.21 480.56 1521.66C480.838 1522.11 481.222 1522.45 481.71 1522.7C482.199 1522.95 482.761 1523.08 483.398 1523.08ZM498.153 1515.31C498.869 1515.31 499.585 1515.45 500.3 1515.72C501.016 1515.98 501.67 1516.43 502.261 1517.05C502.852 1517.66 503.326 1518.5 503.684 1519.56C504.042 1520.62 504.221 1521.95 504.221 1523.56C504.221 1525.11 504.073 1526.49 503.778 1527.69C503.488 1528.89 503.067 1529.9 502.516 1530.72C501.971 1531.55 501.306 1532.17 500.522 1532.6C499.744 1533.03 498.863 1533.24 497.88 1533.24C496.903 1533.24 496.031 1533.05 495.263 1532.66C494.502 1532.27 493.877 1531.72 493.388 1531.03C492.906 1530.33 492.596 1529.52 492.46 1528.6H494.539C494.727 1529.4 495.099 1530.07 495.656 1530.59C496.218 1531.11 496.96 1531.36 497.88 1531.36C499.227 1531.36 500.289 1530.78 501.067 1529.6C501.852 1528.42 502.244 1526.76 502.244 1524.61H502.107C501.789 1525.09 501.411 1525.5 500.974 1525.85C500.536 1526.2 500.05 1526.46 499.516 1526.65C498.982 1526.84 498.414 1526.93 497.812 1526.93C496.812 1526.93 495.894 1526.68 495.059 1526.19C494.229 1525.69 493.565 1525.01 493.065 1524.14C492.57 1523.26 492.323 1522.26 492.323 1521.14C492.323 1520.07 492.562 1519.09 493.039 1518.2C493.522 1517.31 494.198 1516.6 495.067 1516.07C495.942 1515.55 496.971 1515.29 498.153 1515.31ZM498.153 1517.18C497.437 1517.18 496.792 1517.36 496.218 1517.72C495.65 1518.07 495.198 1518.55 494.863 1519.15C494.533 1519.75 494.369 1520.41 494.369 1521.14C494.369 1521.86 494.528 1522.53 494.846 1523.12C495.17 1523.71 495.61 1524.18 496.167 1524.54C496.729 1524.88 497.369 1525.06 498.085 1525.06C498.624 1525.06 499.127 1524.95 499.593 1524.74C500.059 1524.53 500.465 1524.23 500.812 1523.86C501.164 1523.49 501.44 1523.07 501.638 1522.59C501.837 1522.12 501.937 1521.62 501.937 1521.1C501.937 1520.42 501.772 1519.78 501.442 1519.18C501.119 1518.59 500.67 1518.11 500.096 1517.74C499.528 1517.37 498.88 1517.18 498.153 1517.18Z"
        fill="#A9448C"
        id="path1240"
      />
      <path
        d="M1222.36 718.307C1223.08 718.312 1223.8 718.449 1224.51 718.716C1225.23 718.983 1225.88 719.426 1226.47 720.045C1227.06 720.659 1227.54 721.497 1227.89 722.56C1228.25 723.622 1228.43 724.955 1228.43 726.557C1228.43 728.108 1228.28 729.486 1227.99 730.69C1227.7 731.889 1227.28 732.901 1226.73 733.724C1226.18 734.548 1225.52 735.173 1224.73 735.599C1223.95 736.026 1223.07 736.239 1222.09 736.239C1221.11 736.239 1220.24 736.045 1219.47 735.659C1218.71 735.267 1218.09 734.724 1217.6 734.031C1217.12 733.332 1216.81 732.523 1216.67 731.602H1218.75C1218.94 732.403 1219.31 733.065 1219.87 733.588C1220.43 734.105 1221.17 734.364 1222.09 734.364C1223.44 734.364 1224.5 733.776 1225.28 732.599C1226.06 731.423 1226.45 729.761 1226.45 727.614H1226.32C1226 728.091 1225.62 728.503 1225.18 728.849C1224.75 729.196 1224.26 729.463 1223.73 729.651C1223.19 729.838 1222.63 729.932 1222.02 729.932C1221.02 729.932 1220.11 729.685 1219.27 729.19C1218.44 728.69 1217.78 728.006 1217.28 727.136C1216.78 726.261 1216.53 725.261 1216.53 724.136C1216.53 723.068 1216.77 722.091 1217.25 721.205C1217.73 720.312 1218.41 719.602 1219.28 719.074C1220.15 718.545 1221.18 718.29 1222.36 718.307ZM1222.36 720.182C1221.65 720.182 1221 720.361 1220.43 720.719C1219.86 721.071 1219.41 721.548 1219.07 722.151C1218.74 722.747 1218.58 723.409 1218.58 724.136C1218.58 724.864 1218.74 725.526 1219.06 726.122C1219.38 726.713 1219.82 727.185 1220.38 727.537C1220.94 727.884 1221.58 728.057 1222.3 728.057C1222.84 728.057 1223.34 727.952 1223.8 727.741C1224.27 727.526 1224.68 727.233 1225.02 726.864C1225.38 726.489 1225.65 726.065 1225.85 725.594C1226.05 725.116 1226.15 724.619 1226.15 724.102C1226.15 723.42 1225.98 722.781 1225.65 722.185C1225.33 721.588 1224.88 721.105 1224.31 720.736C1223.74 720.366 1223.09 720.182 1222.36 720.182ZM1237.34 718.307C1238.06 718.312 1238.77 718.449 1239.49 718.716C1240.2 718.983 1240.86 719.426 1241.45 720.045C1242.04 720.659 1242.51 721.497 1242.87 722.56C1243.23 723.622 1243.41 724.955 1243.41 726.557C1243.41 728.108 1243.26 729.486 1242.97 730.69C1242.68 731.889 1242.25 732.901 1241.7 733.724C1241.16 734.548 1240.49 735.173 1239.71 735.599C1238.93 736.026 1238.05 736.239 1237.07 736.239C1236.09 736.239 1235.22 736.045 1234.45 735.659C1233.69 735.267 1233.06 734.724 1232.58 734.031C1232.09 733.332 1231.78 732.523 1231.65 731.602H1233.73C1233.91 732.403 1234.29 733.065 1234.84 733.588C1235.41 734.105 1236.15 734.364 1237.07 734.364C1238.41 734.364 1239.48 733.776 1240.25 732.599C1241.04 731.423 1241.43 729.761 1241.43 727.614H1241.29C1240.98 728.091 1240.6 728.503 1240.16 728.849C1239.72 729.196 1239.24 729.463 1238.7 729.651C1238.17 729.838 1237.6 729.932 1237 729.932C1236 729.932 1235.08 729.685 1234.25 729.19C1233.42 728.69 1232.75 728.006 1232.25 727.136C1231.76 726.261 1231.51 725.261 1231.51 724.136C1231.51 723.068 1231.75 722.091 1232.23 721.205C1232.71 720.312 1233.39 719.602 1234.25 719.074C1235.13 718.545 1236.16 718.29 1237.34 718.307ZM1237.34 720.182C1236.62 720.182 1235.98 720.361 1235.41 720.719C1234.84 721.071 1234.39 721.548 1234.05 722.151C1233.72 722.747 1233.56 723.409 1233.56 724.136C1233.56 724.864 1233.72 725.526 1234.03 726.122C1234.36 726.713 1234.8 727.185 1235.35 727.537C1235.92 727.884 1236.56 728.057 1237.27 728.057C1237.81 728.057 1238.31 727.952 1238.78 727.741C1239.25 727.526 1239.65 727.233 1240 726.864C1240.35 726.489 1240.63 726.065 1240.83 725.594C1241.02 725.116 1241.12 724.619 1241.12 724.102C1241.12 723.42 1240.96 722.781 1240.63 722.185C1240.31 721.588 1239.86 721.105 1239.28 720.736C1238.72 720.366 1238.07 720.182 1237.34 720.182Z"
        fill="#A9448C"
        id="path1242"
      />
      <path
        d="M1222.36 803.307C1223.08 803.312 1223.8 803.449 1224.51 803.716C1225.23 803.983 1225.88 804.426 1226.47 805.045C1227.06 805.659 1227.54 806.497 1227.89 807.56C1228.25 808.622 1228.43 809.955 1228.43 811.557C1228.43 813.108 1228.28 814.486 1227.99 815.69C1227.7 816.889 1227.28 817.901 1226.73 818.724C1226.18 819.548 1225.52 820.173 1224.73 820.599C1223.95 821.026 1223.07 821.239 1222.09 821.239C1221.11 821.239 1220.24 821.045 1219.47 820.659C1218.71 820.267 1218.09 819.724 1217.6 819.031C1217.12 818.332 1216.81 817.523 1216.67 816.602H1218.75C1218.94 817.403 1219.31 818.065 1219.87 818.588C1220.43 819.105 1221.17 819.364 1222.09 819.364C1223.44 819.364 1224.5 818.776 1225.28 817.599C1226.06 816.423 1226.45 814.761 1226.45 812.614H1226.32C1226 813.091 1225.62 813.503 1225.18 813.849C1224.75 814.196 1224.26 814.463 1223.73 814.651C1223.19 814.838 1222.63 814.932 1222.02 814.932C1221.02 814.932 1220.11 814.685 1219.27 814.19C1218.44 813.69 1217.78 813.006 1217.28 812.136C1216.78 811.261 1216.53 810.261 1216.53 809.136C1216.53 808.068 1216.77 807.091 1217.25 806.205C1217.73 805.312 1218.41 804.602 1219.28 804.074C1220.15 803.545 1221.18 803.29 1222.36 803.307ZM1222.36 805.182C1221.65 805.182 1221 805.361 1220.43 805.719C1219.86 806.071 1219.41 806.548 1219.07 807.151C1218.74 807.747 1218.58 808.409 1218.58 809.136C1218.58 809.864 1218.74 810.526 1219.06 811.122C1219.38 811.713 1219.82 812.185 1220.38 812.537C1220.94 812.884 1221.58 813.057 1222.3 813.057C1222.84 813.057 1223.34 812.952 1223.8 812.741C1224.27 812.526 1224.68 812.233 1225.02 811.864C1225.38 811.489 1225.65 811.065 1225.85 810.594C1226.05 810.116 1226.15 809.619 1226.15 809.102C1226.15 808.42 1225.98 807.781 1225.65 807.185C1225.33 806.588 1224.88 806.105 1224.31 805.736C1223.74 805.366 1223.09 805.182 1222.36 805.182ZM1237.37 821.239C1236.2 821.239 1235.17 821.031 1234.27 820.616C1233.38 820.196 1232.68 819.619 1232.18 818.886C1231.68 818.148 1231.44 817.307 1231.44 816.364C1231.44 815.625 1231.58 814.943 1231.88 814.318C1232.17 813.687 1232.58 813.162 1233.09 812.741C1233.6 812.315 1234.18 812.045 1234.82 811.932V811.83C1233.98 811.614 1233.32 811.145 1232.82 810.423C1232.33 809.696 1232.08 808.869 1232.09 807.943C1232.08 807.057 1232.31 806.264 1232.76 805.565C1233.22 804.866 1233.84 804.315 1234.64 803.912C1235.44 803.509 1236.35 803.307 1237.37 803.307C1238.39 803.307 1239.29 803.509 1240.08 803.912C1240.88 804.315 1241.5 804.866 1241.96 805.565C1242.42 806.264 1242.65 807.057 1242.66 807.943C1242.65 808.869 1242.4 809.696 1241.9 810.423C1241.41 811.145 1240.75 811.614 1239.93 811.83V811.932C1240.56 812.045 1241.13 812.315 1241.64 812.741C1242.14 813.162 1242.54 813.687 1242.85 814.318C1243.15 814.943 1243.3 815.625 1243.31 816.364C1243.3 817.307 1243.04 818.148 1242.54 818.886C1242.04 819.619 1241.34 820.196 1240.45 820.616C1239.56 821.031 1238.54 821.239 1237.37 821.239ZM1237.37 819.364C1238.16 819.364 1238.85 819.236 1239.42 818.98C1239.99 818.724 1240.44 818.364 1240.75 817.898C1241.06 817.432 1241.22 816.886 1241.23 816.261C1241.22 815.602 1241.05 815.02 1240.72 814.514C1240.38 814.009 1239.92 813.611 1239.34 813.321C1238.77 813.031 1238.11 812.886 1237.37 812.886C1236.63 812.886 1235.97 813.031 1235.38 813.321C1234.8 813.611 1234.34 814.009 1234.01 814.514C1233.68 815.02 1233.52 815.602 1233.52 816.261C1233.52 816.886 1233.67 817.432 1233.97 817.898C1234.29 818.364 1234.73 818.724 1235.31 818.98C1235.89 819.236 1236.58 819.364 1237.37 819.364ZM1237.37 811.08C1238 811.08 1238.55 810.955 1239.04 810.705C1239.52 810.455 1239.91 810.105 1240.19 809.656C1240.47 809.207 1240.61 808.682 1240.61 808.08C1240.61 807.489 1240.47 806.974 1240.2 806.537C1239.92 806.094 1239.54 805.753 1239.06 805.514C1238.58 805.27 1238.02 805.148 1237.37 805.148C1236.72 805.148 1236.15 805.27 1235.66 805.514C1235.17 805.753 1234.79 806.094 1234.53 806.537C1234.26 806.974 1234.13 807.489 1234.14 808.08C1234.13 808.682 1234.26 809.207 1234.54 809.656C1234.81 810.105 1235.2 810.455 1235.69 810.705C1236.18 810.955 1236.74 811.08 1237.37 811.08Z"
        fill="#A9448C"
        id="path1244"
      />
      <path
        d="M1224.36 875.307C1225.08 875.312 1225.8 875.449 1226.51 875.716C1227.23 875.983 1227.88 876.426 1228.47 877.045C1229.06 877.659 1229.54 878.497 1229.89 879.56C1230.25 880.622 1230.43 881.955 1230.43 883.557C1230.43 885.108 1230.28 886.486 1229.99 887.69C1229.7 888.889 1229.28 889.901 1228.73 890.724C1228.18 891.548 1227.52 892.173 1226.73 892.599C1225.95 893.026 1225.07 893.239 1224.09 893.239C1223.11 893.239 1222.24 893.045 1221.47 892.659C1220.71 892.267 1220.09 891.724 1219.6 891.031C1219.12 890.332 1218.81 889.523 1218.67 888.602H1220.75C1220.94 889.403 1221.31 890.065 1221.87 890.588C1222.43 891.105 1223.17 891.364 1224.09 891.364C1225.44 891.364 1226.5 890.776 1227.28 889.599C1228.06 888.423 1228.45 886.761 1228.45 884.614H1228.32C1228 885.091 1227.62 885.503 1227.18 885.849C1226.75 886.196 1226.26 886.463 1225.73 886.651C1225.19 886.838 1224.63 886.932 1224.02 886.932C1223.02 886.932 1222.11 886.685 1221.27 886.19C1220.44 885.69 1219.78 885.006 1219.28 884.136C1218.78 883.261 1218.53 882.261 1218.53 881.136C1218.53 880.068 1218.77 879.091 1219.25 878.205C1219.73 877.312 1220.41 876.602 1221.28 876.074C1222.15 875.545 1223.18 875.29 1224.36 875.307ZM1224.36 877.182C1223.65 877.182 1223 877.361 1222.43 877.719C1221.86 878.071 1221.41 878.548 1221.07 879.151C1220.74 879.747 1220.58 880.409 1220.58 881.136C1220.58 881.864 1220.74 882.526 1221.06 883.122C1221.38 883.713 1221.82 884.185 1222.38 884.537C1222.94 884.884 1223.58 885.057 1224.3 885.057C1224.84 885.057 1225.34 884.952 1225.8 884.741C1226.27 884.526 1226.68 884.233 1227.02 883.864C1227.38 883.489 1227.65 883.065 1227.85 882.594C1228.05 882.116 1228.15 881.619 1228.15 881.102C1228.15 880.42 1227.98 879.781 1227.65 879.185C1227.33 878.588 1226.88 878.105 1226.31 877.736C1225.74 877.366 1225.09 877.182 1224.36 877.182ZM1233.86 893L1241.67 877.557V877.42H1232.67V875.545H1243.85V877.523L1236.08 893H1233.86Z"
        fill="#A9448C"
        id="path1246"
      />
      <path
        d="M1222.36 936.307C1223.08 936.312 1223.8 936.449 1224.51 936.716C1225.23 936.983 1225.88 937.426 1226.47 938.045C1227.06 938.659 1227.54 939.497 1227.89 940.56C1228.25 941.622 1228.43 942.955 1228.43 944.557C1228.43 946.108 1228.28 947.486 1227.99 948.69C1227.7 949.889 1227.28 950.901 1226.73 951.724C1226.18 952.548 1225.52 953.173 1224.73 953.599C1223.95 954.026 1223.07 954.239 1222.09 954.239C1221.11 954.239 1220.24 954.045 1219.47 953.659C1218.71 953.267 1218.09 952.724 1217.6 952.031C1217.12 951.332 1216.81 950.523 1216.67 949.602H1218.75C1218.94 950.403 1219.31 951.065 1219.87 951.588C1220.43 952.105 1221.17 952.364 1222.09 952.364C1223.44 952.364 1224.5 951.776 1225.28 950.599C1226.06 949.423 1226.45 947.761 1226.45 945.614H1226.32C1226 946.091 1225.62 946.503 1225.18 946.849C1224.75 947.196 1224.26 947.463 1223.73 947.651C1223.19 947.838 1222.63 947.932 1222.02 947.932C1221.02 947.932 1220.11 947.685 1219.27 947.19C1218.44 946.69 1217.78 946.006 1217.28 945.136C1216.78 944.261 1216.53 943.261 1216.53 942.136C1216.53 941.068 1216.77 940.091 1217.25 939.205C1217.73 938.312 1218.41 937.602 1219.28 937.074C1220.15 936.545 1221.18 936.29 1222.36 936.307ZM1222.36 938.182C1221.65 938.182 1221 938.361 1220.43 938.719C1219.86 939.071 1219.41 939.548 1219.07 940.151C1218.74 940.747 1218.58 941.409 1218.58 942.136C1218.58 942.864 1218.74 943.526 1219.06 944.122C1219.38 944.713 1219.82 945.185 1220.38 945.537C1220.94 945.884 1221.58 946.057 1222.3 946.057C1222.84 946.057 1223.34 945.952 1223.8 945.741C1224.27 945.526 1224.68 945.233 1225.02 944.864C1225.38 944.489 1225.65 944.065 1225.85 943.594C1226.05 943.116 1226.15 942.619 1226.15 942.102C1226.15 941.42 1225.98 940.781 1225.65 940.185C1225.33 939.588 1224.88 939.105 1224.31 938.736C1223.74 938.366 1223.09 938.182 1222.36 938.182ZM1237.58 954.239C1236.86 954.227 1236.15 954.091 1235.43 953.83C1234.72 953.568 1234.06 953.128 1233.47 952.509C1232.88 951.884 1232.41 951.04 1232.05 949.977C1231.69 948.909 1231.51 947.568 1231.51 945.955C1231.51 944.409 1231.66 943.04 1231.95 941.847C1232.24 940.648 1232.66 939.639 1233.21 938.821C1233.76 937.997 1234.42 937.372 1235.2 936.946C1235.99 936.52 1236.87 936.307 1237.85 936.307C1238.83 936.307 1239.7 936.503 1240.46 936.895C1241.23 937.281 1241.85 937.821 1242.33 938.514C1242.82 939.207 1243.13 940.006 1243.27 940.909H1241.19C1241 940.125 1240.62 939.474 1240.07 938.957C1239.51 938.44 1238.77 938.182 1237.85 938.182C1236.5 938.182 1235.43 938.77 1234.66 939.946C1233.88 941.122 1233.49 942.773 1233.49 944.898H1233.62C1233.94 944.415 1234.32 944.003 1234.76 943.662C1235.2 943.315 1235.69 943.048 1236.22 942.861C1236.76 942.673 1237.32 942.58 1237.92 942.58C1238.92 942.58 1239.83 942.83 1240.66 943.33C1241.49 943.824 1242.16 944.509 1242.66 945.384C1243.16 946.253 1243.41 947.25 1243.41 948.375C1243.41 949.455 1243.17 950.443 1242.68 951.341C1242.2 952.233 1241.52 952.943 1240.65 953.472C1239.78 953.994 1238.75 954.25 1237.58 954.239ZM1237.58 952.364C1238.29 952.364 1238.94 952.185 1239.5 951.827C1240.08 951.469 1240.53 950.989 1240.86 950.386C1241.2 949.784 1241.36 949.114 1241.36 948.375C1241.36 947.653 1241.2 946.997 1240.88 946.406C1240.56 945.81 1240.12 945.335 1239.56 944.983C1239 944.631 1238.36 944.455 1237.65 944.455C1237.11 944.455 1236.6 944.562 1236.14 944.778C1235.67 944.989 1235.26 945.278 1234.91 945.648C1234.56 946.017 1234.29 946.44 1234.09 946.918C1233.89 947.389 1233.79 947.886 1233.79 948.409C1233.79 949.102 1233.96 949.75 1234.28 950.352C1234.61 950.955 1235.06 951.44 1235.63 951.81C1236.2 952.179 1236.85 952.364 1237.58 952.364Z"
        fill="#A9448C"
        id="path1248"
      />
      <path
        d="M1224.36 997.307C1225.08 997.312 1225.8 997.449 1226.51 997.716C1227.23 997.983 1227.88 998.426 1228.47 999.045C1229.06 999.659 1229.54 1000.5 1229.89 1001.56C1230.25 1002.62 1230.43 1003.95 1230.43 1005.56C1230.43 1007.11 1230.28 1008.49 1229.99 1009.69C1229.7 1010.89 1229.28 1011.9 1228.73 1012.72C1228.18 1013.55 1227.52 1014.17 1226.73 1014.6C1225.95 1015.03 1225.07 1015.24 1224.09 1015.24C1223.11 1015.24 1222.24 1015.05 1221.47 1014.66C1220.71 1014.27 1220.09 1013.72 1219.6 1013.03C1219.12 1012.33 1218.81 1011.52 1218.67 1010.6H1220.75C1220.94 1011.4 1221.31 1012.07 1221.87 1012.59C1222.43 1013.11 1223.17 1013.36 1224.09 1013.36C1225.44 1013.36 1226.5 1012.78 1227.28 1011.6C1228.06 1010.42 1228.45 1008.76 1228.45 1006.61H1228.32C1228 1007.09 1227.62 1007.5 1227.18 1007.85C1226.75 1008.2 1226.26 1008.46 1225.73 1008.65C1225.19 1008.84 1224.63 1008.93 1224.02 1008.93C1223.02 1008.93 1222.11 1008.68 1221.27 1008.19C1220.44 1007.69 1219.78 1007.01 1219.28 1006.14C1218.78 1005.26 1218.53 1004.26 1218.53 1003.14C1218.53 1002.07 1218.77 1001.09 1219.25 1000.2C1219.73 999.312 1220.41 998.602 1221.28 998.074C1222.15 997.545 1223.18 997.29 1224.36 997.307ZM1224.36 999.182C1223.65 999.182 1223 999.361 1222.43 999.719C1221.86 1000.07 1221.41 1000.55 1221.07 1001.15C1220.74 1001.75 1220.58 1002.41 1220.58 1003.14C1220.58 1003.86 1220.74 1004.53 1221.06 1005.12C1221.38 1005.71 1221.82 1006.18 1222.38 1006.54C1222.94 1006.88 1223.58 1007.06 1224.3 1007.06C1224.84 1007.06 1225.34 1006.95 1225.8 1006.74C1226.27 1006.53 1226.68 1006.23 1227.02 1005.86C1227.38 1005.49 1227.65 1005.07 1227.85 1004.59C1228.05 1004.12 1228.15 1003.62 1228.15 1003.1C1228.15 1002.42 1227.98 1001.78 1227.65 1001.18C1227.33 1000.59 1226.88 1000.11 1226.31 999.736C1225.74 999.366 1225.09 999.182 1224.36 999.182ZM1239.24 1015.24C1238.24 1015.24 1237.34 1015.04 1236.54 1014.64C1235.74 1014.24 1235.09 1013.7 1234.61 1013.01C1234.13 1012.31 1233.86 1011.52 1233.82 1010.64H1235.86C1235.94 1011.43 1236.3 1012.08 1236.94 1012.6C1237.58 1013.11 1238.35 1013.36 1239.24 1013.36C1239.95 1013.36 1240.59 1013.2 1241.15 1012.86C1241.71 1012.53 1242.15 1012.07 1242.47 1011.48C1242.79 1010.89 1242.95 1010.22 1242.95 1009.48C1242.95 1008.72 1242.79 1008.04 1242.45 1007.44C1242.12 1006.84 1241.67 1006.36 1241.09 1006.02C1240.51 1005.67 1239.85 1005.49 1239.1 1005.49C1238.57 1005.48 1238.02 1005.57 1237.46 1005.74C1236.89 1005.9 1236.43 1006.11 1236.07 1006.38L1234.09 1006.14L1235.15 997.545H1244.22V999.42H1236.92L1236.31 1004.57H1236.41C1236.77 1004.28 1237.22 1004.05 1237.75 1003.86C1238.29 1003.67 1238.86 1003.58 1239.44 1003.58C1240.51 1003.58 1241.46 1003.84 1242.3 1004.35C1243.14 1004.85 1243.8 1005.55 1244.27 1006.43C1244.76 1007.31 1245 1008.31 1245 1009.44C1245 1010.56 1244.75 1011.55 1244.25 1012.43C1243.75 1013.3 1243.07 1013.98 1242.2 1014.49C1241.33 1014.99 1240.35 1015.24 1239.24 1015.24Z"
        fill="#A9448C"
        id="path1250"
      />
      <path
        d="M1222.36 1067.31C1223.08 1067.31 1223.8 1067.45 1224.51 1067.72C1225.23 1067.98 1225.88 1068.43 1226.47 1069.05C1227.06 1069.66 1227.54 1070.5 1227.89 1071.56C1228.25 1072.62 1228.43 1073.95 1228.43 1075.56C1228.43 1077.11 1228.28 1078.49 1227.99 1079.69C1227.7 1080.89 1227.28 1081.9 1226.73 1082.72C1226.18 1083.55 1225.52 1084.17 1224.73 1084.6C1223.95 1085.03 1223.07 1085.24 1222.09 1085.24C1221.11 1085.24 1220.24 1085.05 1219.47 1084.66C1218.71 1084.27 1218.09 1083.72 1217.6 1083.03C1217.12 1082.33 1216.81 1081.52 1216.67 1080.6H1218.75C1218.94 1081.4 1219.31 1082.07 1219.87 1082.59C1220.43 1083.11 1221.17 1083.36 1222.09 1083.36C1223.44 1083.36 1224.5 1082.78 1225.28 1081.6C1226.06 1080.42 1226.45 1078.76 1226.45 1076.61H1226.32C1226 1077.09 1225.62 1077.5 1225.18 1077.85C1224.75 1078.2 1224.26 1078.46 1223.73 1078.65C1223.19 1078.84 1222.63 1078.93 1222.02 1078.93C1221.02 1078.93 1220.11 1078.68 1219.27 1078.19C1218.44 1077.69 1217.78 1077.01 1217.28 1076.14C1216.78 1075.26 1216.53 1074.26 1216.53 1073.14C1216.53 1072.07 1216.77 1071.09 1217.25 1070.2C1217.73 1069.31 1218.41 1068.6 1219.28 1068.07C1220.15 1067.55 1221.18 1067.29 1222.36 1067.31ZM1222.36 1069.18C1221.65 1069.18 1221 1069.36 1220.43 1069.72C1219.86 1070.07 1219.41 1070.55 1219.07 1071.15C1218.74 1071.75 1218.58 1072.41 1218.58 1073.14C1218.58 1073.86 1218.74 1074.53 1219.06 1075.12C1219.38 1075.71 1219.82 1076.18 1220.38 1076.54C1220.94 1076.88 1221.58 1077.06 1222.3 1077.06C1222.84 1077.06 1223.34 1076.95 1223.8 1076.74C1224.27 1076.53 1224.68 1076.23 1225.02 1075.86C1225.38 1075.49 1225.65 1075.07 1225.85 1074.59C1226.05 1074.12 1226.15 1073.62 1226.15 1073.1C1226.15 1072.42 1225.98 1071.78 1225.65 1071.18C1225.33 1070.59 1224.88 1070.11 1224.31 1069.74C1223.74 1069.37 1223.09 1069.18 1222.36 1069.18ZM1231.37 1081.42V1079.68L1239.04 1067.55H1240.31V1070.24H1239.45L1233.66 1079.41V1079.55H1243.99V1081.42H1231.37ZM1239.59 1085V1080.89V1080.08V1067.55H1241.6V1085H1239.59Z"
        fill="#A9448C"
        id="path1252"
      />
      <path
        d="M1222.36 1123.31C1223.08 1123.31 1223.8 1123.45 1224.51 1123.72C1225.23 1123.98 1225.88 1124.43 1226.47 1125.05C1227.06 1125.66 1227.54 1126.5 1227.89 1127.56C1228.25 1128.62 1228.43 1129.95 1228.43 1131.56C1228.43 1133.11 1228.28 1134.49 1227.99 1135.69C1227.7 1136.89 1227.28 1137.9 1226.73 1138.72C1226.18 1139.55 1225.52 1140.17 1224.73 1140.6C1223.95 1141.03 1223.07 1141.24 1222.09 1141.24C1221.11 1141.24 1220.24 1141.05 1219.47 1140.66C1218.71 1140.27 1218.09 1139.72 1217.6 1139.03C1217.12 1138.33 1216.81 1137.52 1216.67 1136.6H1218.75C1218.94 1137.4 1219.31 1138.07 1219.87 1138.59C1220.43 1139.11 1221.17 1139.36 1222.09 1139.36C1223.44 1139.36 1224.5 1138.78 1225.28 1137.6C1226.06 1136.42 1226.45 1134.76 1226.45 1132.61H1226.32C1226 1133.09 1225.62 1133.5 1225.18 1133.85C1224.75 1134.2 1224.26 1134.46 1223.73 1134.65C1223.19 1134.84 1222.63 1134.93 1222.02 1134.93C1221.02 1134.93 1220.11 1134.68 1219.27 1134.19C1218.44 1133.69 1217.78 1133.01 1217.28 1132.14C1216.78 1131.26 1216.53 1130.26 1216.53 1129.14C1216.53 1128.07 1216.77 1127.09 1217.25 1126.2C1217.73 1125.31 1218.41 1124.6 1219.28 1124.07C1220.15 1123.55 1221.18 1123.29 1222.36 1123.31ZM1222.36 1125.18C1221.65 1125.18 1221 1125.36 1220.43 1125.72C1219.86 1126.07 1219.41 1126.55 1219.07 1127.15C1218.74 1127.75 1218.58 1128.41 1218.58 1129.14C1218.58 1129.86 1218.74 1130.53 1219.06 1131.12C1219.38 1131.71 1219.82 1132.18 1220.38 1132.54C1220.94 1132.88 1221.58 1133.06 1222.3 1133.06C1222.84 1133.06 1223.34 1132.95 1223.8 1132.74C1224.27 1132.53 1224.68 1132.23 1225.02 1131.86C1225.38 1131.49 1225.65 1131.07 1225.85 1130.59C1226.05 1130.12 1226.15 1129.62 1226.15 1129.1C1226.15 1128.42 1225.98 1127.78 1225.65 1127.18C1225.33 1126.59 1224.88 1126.11 1224.31 1125.74C1223.74 1125.37 1223.09 1125.18 1222.36 1125.18ZM1237.68 1141.24C1236.56 1141.24 1235.55 1141.05 1234.67 1140.66C1233.8 1140.27 1233.1 1139.74 1232.58 1139.05C1232.07 1138.36 1231.79 1137.55 1231.75 1136.64H1233.9C1233.94 1137.2 1234.14 1137.68 1234.48 1138.09C1234.82 1138.5 1235.26 1138.81 1235.81 1139.03C1236.37 1139.25 1236.98 1139.36 1237.65 1139.36C1238.4 1139.36 1239.06 1139.23 1239.64 1138.97C1240.22 1138.71 1240.68 1138.35 1241 1137.88C1241.33 1137.41 1241.5 1136.88 1241.5 1136.26C1241.5 1135.62 1241.34 1135.05 1241.02 1134.57C1240.7 1134.07 1240.24 1133.68 1239.62 1133.41C1239.01 1133.13 1238.26 1132.99 1237.37 1132.99H1235.98V1131.11H1237.37C1238.07 1131.11 1238.68 1130.99 1239.2 1130.74C1239.73 1130.49 1240.14 1130.14 1240.43 1129.68C1240.74 1129.23 1240.89 1128.69 1240.89 1128.08C1240.89 1127.49 1240.75 1126.97 1240.49 1126.54C1240.23 1126.1 1239.86 1125.76 1239.39 1125.51C1238.91 1125.27 1238.36 1125.15 1237.72 1125.15C1237.11 1125.15 1236.54 1125.26 1236.01 1125.48C1235.48 1125.7 1235.05 1126.01 1234.72 1126.43C1234.38 1126.84 1234.2 1127.33 1234.17 1127.91H1232.12C1232.16 1126.99 1232.43 1126.19 1232.95 1125.51C1233.47 1124.81 1234.14 1124.27 1234.98 1123.89C1235.82 1123.5 1236.74 1123.31 1237.75 1123.31C1238.83 1123.31 1239.75 1123.53 1240.53 1123.96C1241.3 1124.39 1241.89 1124.97 1242.31 1125.68C1242.72 1126.39 1242.93 1127.15 1242.93 1127.98C1242.93 1128.96 1242.67 1129.8 1242.16 1130.49C1241.64 1131.18 1240.95 1131.66 1240.07 1131.93V1132.07C1241.17 1132.25 1242.03 1132.72 1242.65 1133.47C1243.27 1134.22 1243.58 1135.15 1243.58 1136.26C1243.58 1137.21 1243.32 1138.06 1242.8 1138.82C1242.29 1139.57 1241.59 1140.16 1240.71 1140.59C1239.82 1141.02 1238.81 1141.24 1237.68 1141.24Z"
        fill="#A9448C"
        id="path1254"
      />
      <path
        d="M1222.36 1192.31C1223.08 1192.31 1223.8 1192.45 1224.51 1192.72C1225.23 1192.98 1225.88 1193.43 1226.47 1194.05C1227.06 1194.66 1227.54 1195.5 1227.89 1196.56C1228.25 1197.62 1228.43 1198.95 1228.43 1200.56C1228.43 1202.11 1228.28 1203.49 1227.99 1204.69C1227.7 1205.89 1227.28 1206.9 1226.73 1207.72C1226.18 1208.55 1225.52 1209.17 1224.73 1209.6C1223.95 1210.03 1223.07 1210.24 1222.09 1210.24C1221.11 1210.24 1220.24 1210.05 1219.47 1209.66C1218.71 1209.27 1218.09 1208.72 1217.6 1208.03C1217.12 1207.33 1216.81 1206.52 1216.67 1205.6H1218.75C1218.94 1206.4 1219.31 1207.07 1219.87 1207.59C1220.43 1208.11 1221.17 1208.36 1222.09 1208.36C1223.44 1208.36 1224.5 1207.78 1225.28 1206.6C1226.06 1205.42 1226.45 1203.76 1226.45 1201.61H1226.32C1226 1202.09 1225.62 1202.5 1225.18 1202.85C1224.75 1203.2 1224.26 1203.46 1223.73 1203.65C1223.19 1203.84 1222.63 1203.93 1222.02 1203.93C1221.02 1203.93 1220.11 1203.68 1219.27 1203.19C1218.44 1202.69 1217.78 1202.01 1217.28 1201.14C1216.78 1200.26 1216.53 1199.26 1216.53 1198.14C1216.53 1197.07 1216.77 1196.09 1217.25 1195.2C1217.73 1194.31 1218.41 1193.6 1219.28 1193.07C1220.15 1192.55 1221.18 1192.29 1222.36 1192.31ZM1222.36 1194.18C1221.65 1194.18 1221 1194.36 1220.43 1194.72C1219.86 1195.07 1219.41 1195.55 1219.07 1196.15C1218.74 1196.75 1218.58 1197.41 1218.58 1198.14C1218.58 1198.86 1218.74 1199.53 1219.06 1200.12C1219.38 1200.71 1219.82 1201.18 1220.38 1201.54C1220.94 1201.88 1221.58 1202.06 1222.3 1202.06C1222.84 1202.06 1223.34 1201.95 1223.8 1201.74C1224.27 1201.53 1224.68 1201.23 1225.02 1200.86C1225.38 1200.49 1225.65 1200.07 1225.85 1199.59C1226.05 1199.12 1226.15 1198.62 1226.15 1198.1C1226.15 1197.42 1225.98 1196.78 1225.65 1196.18C1225.33 1195.59 1224.88 1195.11 1224.31 1194.74C1223.74 1194.37 1223.09 1194.18 1222.36 1194.18ZM1231.78 1210V1208.47L1237.54 1202.16C1238.22 1201.42 1238.78 1200.78 1239.22 1200.23C1239.65 1199.68 1239.98 1199.16 1240.19 1198.68C1240.4 1198.19 1240.51 1197.68 1240.51 1197.15C1240.51 1196.53 1240.36 1196 1240.07 1195.55C1239.78 1195.11 1239.38 1194.76 1238.87 1194.51C1238.37 1194.27 1237.8 1194.15 1237.17 1194.15C1236.5 1194.15 1235.91 1194.29 1235.41 1194.57C1234.92 1194.84 1234.54 1195.22 1234.26 1195.72C1234 1196.21 1233.86 1196.79 1233.86 1197.45H1231.85C1231.85 1196.43 1232.09 1195.53 1232.56 1194.76C1233.03 1193.99 1233.67 1193.39 1234.49 1192.95C1235.3 1192.52 1236.22 1192.31 1237.24 1192.31C1238.26 1192.31 1239.17 1192.52 1239.96 1192.95C1240.75 1193.39 1241.37 1193.97 1241.81 1194.7C1242.26 1195.43 1242.49 1196.25 1242.49 1197.15C1242.49 1197.79 1242.37 1198.42 1242.14 1199.03C1241.91 1199.64 1241.51 1200.32 1240.95 1201.07C1240.38 1201.81 1239.6 1202.72 1238.6 1203.8L1234.68 1207.99V1208.12H1242.79V1210H1231.78Z"
        fill="#A9448C"
        id="path1256"
      />
      <path
        d="M1226.36 1257.31C1227.08 1257.31 1227.8 1257.45 1228.51 1257.72C1229.23 1257.98 1229.88 1258.43 1230.47 1259.05C1231.06 1259.66 1231.54 1260.5 1231.89 1261.56C1232.25 1262.62 1232.43 1263.95 1232.43 1265.56C1232.43 1267.11 1232.28 1268.49 1231.99 1269.69C1231.7 1270.89 1231.28 1271.9 1230.73 1272.72C1230.18 1273.55 1229.52 1274.17 1228.73 1274.6C1227.95 1275.03 1227.07 1275.24 1226.09 1275.24C1225.11 1275.24 1224.24 1275.05 1223.47 1274.66C1222.71 1274.27 1222.09 1273.72 1221.6 1273.03C1221.12 1272.33 1220.81 1271.52 1220.67 1270.6H1222.75C1222.94 1271.4 1223.31 1272.07 1223.87 1272.59C1224.43 1273.11 1225.17 1273.36 1226.09 1273.36C1227.44 1273.36 1228.5 1272.78 1229.28 1271.6C1230.06 1270.42 1230.45 1268.76 1230.45 1266.61H1230.32C1230 1267.09 1229.62 1267.5 1229.18 1267.85C1228.75 1268.2 1228.26 1268.46 1227.73 1268.65C1227.19 1268.84 1226.63 1268.93 1226.02 1268.93C1225.02 1268.93 1224.11 1268.68 1223.27 1268.19C1222.44 1267.69 1221.78 1267.01 1221.28 1266.14C1220.78 1265.26 1220.53 1264.26 1220.53 1263.14C1220.53 1262.07 1220.77 1261.09 1221.25 1260.2C1221.73 1259.31 1222.41 1258.6 1223.28 1258.07C1224.15 1257.55 1225.18 1257.29 1226.36 1257.31ZM1226.36 1259.18C1225.65 1259.18 1225 1259.36 1224.43 1259.72C1223.86 1260.07 1223.41 1260.55 1223.07 1261.15C1222.74 1261.75 1222.58 1262.41 1222.58 1263.14C1222.58 1263.86 1222.74 1264.53 1223.06 1265.12C1223.38 1265.71 1223.82 1266.18 1224.38 1266.54C1224.94 1266.88 1225.58 1267.06 1226.3 1267.06C1226.84 1267.06 1227.34 1266.95 1227.8 1266.74C1228.27 1266.53 1228.68 1266.23 1229.02 1265.86C1229.38 1265.49 1229.65 1265.07 1229.85 1264.59C1230.05 1264.12 1230.15 1263.62 1230.15 1263.1C1230.15 1262.42 1229.98 1261.78 1229.65 1261.18C1229.33 1260.59 1228.88 1260.11 1228.31 1259.74C1227.74 1259.37 1227.09 1259.18 1226.36 1259.18ZM1241.92 1257.55V1275H1239.81V1259.76H1239.7L1235.44 1262.59V1260.44L1239.81 1257.55H1241.92Z"
        fill="#A9448C"
        id="path1258"
      />
      <path
        d="M1222.36 1352.31C1223.08 1352.31 1223.8 1352.45 1224.51 1352.72C1225.23 1352.98 1225.88 1353.43 1226.47 1354.05C1227.06 1354.66 1227.54 1355.5 1227.89 1356.56C1228.25 1357.62 1228.43 1358.95 1228.43 1360.56C1228.43 1362.11 1228.28 1363.49 1227.99 1364.69C1227.7 1365.89 1227.28 1366.9 1226.73 1367.72C1226.18 1368.55 1225.52 1369.17 1224.73 1369.6C1223.95 1370.03 1223.07 1370.24 1222.09 1370.24C1221.11 1370.24 1220.24 1370.05 1219.47 1369.66C1218.71 1369.27 1218.09 1368.72 1217.6 1368.03C1217.12 1367.33 1216.81 1366.52 1216.67 1365.6H1218.75C1218.94 1366.4 1219.31 1367.07 1219.87 1367.59C1220.43 1368.11 1221.17 1368.36 1222.09 1368.36C1223.44 1368.36 1224.5 1367.78 1225.28 1366.6C1226.06 1365.42 1226.45 1363.76 1226.45 1361.61H1226.32C1226 1362.09 1225.62 1362.5 1225.18 1362.85C1224.75 1363.2 1224.26 1363.46 1223.73 1363.65C1223.19 1363.84 1222.63 1363.93 1222.02 1363.93C1221.02 1363.93 1220.11 1363.68 1219.27 1363.19C1218.44 1362.69 1217.78 1362.01 1217.28 1361.14C1216.78 1360.26 1216.53 1359.26 1216.53 1358.14C1216.53 1357.07 1216.77 1356.09 1217.25 1355.2C1217.73 1354.31 1218.41 1353.6 1219.28 1353.07C1220.15 1352.55 1221.18 1352.29 1222.36 1352.31ZM1222.36 1354.18C1221.65 1354.18 1221 1354.36 1220.43 1354.72C1219.86 1355.07 1219.41 1355.55 1219.07 1356.15C1218.74 1356.75 1218.58 1357.41 1218.58 1358.14C1218.58 1358.86 1218.74 1359.53 1219.06 1360.12C1219.38 1360.71 1219.82 1361.18 1220.38 1361.54C1220.94 1361.88 1221.58 1362.06 1222.3 1362.06C1222.84 1362.06 1223.34 1361.95 1223.8 1361.74C1224.27 1361.53 1224.68 1361.23 1225.02 1360.86C1225.38 1360.49 1225.65 1360.07 1225.85 1359.59C1226.05 1359.12 1226.15 1358.62 1226.15 1358.1C1226.15 1357.42 1225.98 1356.78 1225.65 1356.18C1225.33 1355.59 1224.88 1355.11 1224.31 1354.74C1223.74 1354.37 1223.09 1354.18 1222.36 1354.18ZM1237.48 1370.24C1236.19 1370.24 1235.1 1369.89 1234.2 1369.19C1233.29 1368.49 1232.6 1367.47 1232.12 1366.13C1231.65 1364.79 1231.41 1363.17 1231.41 1361.27C1231.41 1359.39 1231.65 1357.78 1232.12 1356.44C1232.61 1355.1 1233.3 1354.08 1234.2 1353.37C1235.11 1352.66 1236.2 1352.31 1237.48 1352.31C1238.75 1352.31 1239.84 1352.66 1240.74 1353.37C1241.65 1354.08 1242.34 1355.1 1242.82 1356.44C1243.3 1357.78 1243.54 1359.39 1243.54 1361.27C1243.54 1363.17 1243.31 1364.79 1242.83 1366.13C1242.35 1367.47 1241.66 1368.49 1240.76 1369.19C1239.85 1369.89 1238.76 1370.24 1237.48 1370.24ZM1237.48 1368.36C1238.75 1368.36 1239.74 1367.75 1240.44 1366.52C1241.15 1365.3 1241.5 1363.55 1241.5 1361.27C1241.5 1359.76 1241.34 1358.47 1241.01 1357.41C1240.7 1356.35 1240.24 1355.54 1239.63 1354.98C1239.04 1354.43 1238.32 1354.15 1237.48 1354.15C1236.22 1354.15 1235.23 1354.77 1234.52 1356.01C1233.81 1357.25 1233.45 1359.01 1233.45 1361.27C1233.45 1362.78 1233.61 1364.07 1233.93 1365.12C1234.25 1366.18 1234.71 1366.99 1235.3 1367.54C1235.91 1368.09 1236.63 1368.36 1237.48 1368.36Z"
        fill="#A9448C"
        id="path1260"
      />
      <path
        d="M1219.94 515.545V533H1217.83V517.761H1217.73L1213.47 520.591V518.443L1217.83 515.545H1219.94ZM1230.66 533.239C1229.37 533.239 1228.28 532.889 1227.38 532.19C1226.47 531.486 1225.78 530.466 1225.3 529.131C1224.83 527.79 1224.59 526.17 1224.59 524.273C1224.59 522.386 1224.83 520.776 1225.3 519.44C1225.79 518.099 1226.48 517.077 1227.38 516.372C1228.29 515.662 1229.38 515.307 1230.66 515.307C1231.93 515.307 1233.02 515.662 1233.92 516.372C1234.83 517.077 1235.52 518.099 1236 519.44C1236.48 520.776 1236.72 522.386 1236.72 524.273C1236.72 526.17 1236.49 527.79 1236.01 529.131C1235.53 530.466 1234.84 531.486 1233.94 532.19C1233.03 532.889 1231.94 533.239 1230.66 533.239ZM1230.66 531.364C1231.93 531.364 1232.92 530.75 1233.62 529.523C1234.33 528.295 1234.68 526.545 1234.68 524.273C1234.68 522.761 1234.52 521.474 1234.19 520.412C1233.88 519.349 1233.41 518.54 1232.81 517.983C1232.22 517.426 1231.5 517.148 1230.66 517.148C1229.39 517.148 1228.41 517.77 1227.7 519.014C1226.99 520.253 1226.63 522.006 1226.63 524.273C1226.63 525.784 1226.79 527.068 1227.11 528.125C1227.43 529.182 1227.89 529.986 1228.48 530.537C1229.09 531.088 1229.81 531.364 1230.66 531.364ZM1245.66 533.239C1244.37 533.239 1243.28 532.889 1242.38 532.19C1241.47 531.486 1240.78 530.466 1240.3 529.131C1239.83 527.79 1239.59 526.17 1239.59 524.273C1239.59 522.386 1239.83 520.776 1240.3 519.44C1240.79 518.099 1241.48 517.077 1242.38 516.372C1243.29 515.662 1244.38 515.307 1245.66 515.307C1246.93 515.307 1248.02 515.662 1248.92 516.372C1249.83 517.077 1250.52 518.099 1251 519.44C1251.48 520.776 1251.72 522.386 1251.72 524.273C1251.72 526.17 1251.49 527.79 1251.01 529.131C1250.53 530.466 1249.84 531.486 1248.94 532.19C1248.03 532.889 1246.94 533.239 1245.66 533.239ZM1245.66 531.364C1246.93 531.364 1247.92 530.75 1248.62 529.523C1249.33 528.295 1249.68 526.545 1249.68 524.273C1249.68 522.761 1249.52 521.474 1249.19 520.412C1248.88 519.349 1248.41 518.54 1247.81 517.983C1247.22 517.426 1246.5 517.148 1245.66 517.148C1244.39 517.148 1243.41 517.77 1242.7 519.014C1241.99 520.253 1241.63 522.006 1241.63 524.273C1241.63 525.784 1241.79 527.068 1242.11 528.125C1242.43 529.182 1242.89 529.986 1243.48 530.537C1244.09 531.088 1244.81 531.364 1245.66 531.364Z"
        fill="#A9448C"
        id="path1262"
      />
      <path
        d="M1219.94 408.545V426H1217.83V410.761H1217.73L1213.47 413.591V411.443L1217.83 408.545H1219.94ZM1230.66 426.239C1229.37 426.239 1228.28 425.889 1227.38 425.19C1226.47 424.486 1225.78 423.466 1225.3 422.131C1224.83 420.79 1224.59 419.17 1224.59 417.273C1224.59 415.386 1224.83 413.776 1225.3 412.44C1225.79 411.099 1226.48 410.077 1227.38 409.372C1228.29 408.662 1229.38 408.307 1230.66 408.307C1231.93 408.307 1233.02 408.662 1233.92 409.372C1234.83 410.077 1235.52 411.099 1236 412.44C1236.48 413.776 1236.72 415.386 1236.72 417.273C1236.72 419.17 1236.49 420.79 1236.01 422.131C1235.53 423.466 1234.84 424.486 1233.94 425.19C1233.03 425.889 1231.94 426.239 1230.66 426.239ZM1230.66 424.364C1231.93 424.364 1232.92 423.75 1233.62 422.523C1234.33 421.295 1234.68 419.545 1234.68 417.273C1234.68 415.761 1234.52 414.474 1234.19 413.412C1233.88 412.349 1233.41 411.54 1232.81 410.983C1232.22 410.426 1231.5 410.148 1230.66 410.148C1229.39 410.148 1228.41 410.77 1227.7 412.014C1226.99 413.253 1226.63 415.006 1226.63 417.273C1226.63 418.784 1226.79 420.068 1227.11 421.125C1227.43 422.182 1227.89 422.986 1228.48 423.537C1229.09 424.088 1229.81 424.364 1230.66 424.364ZM1246.1 408.545V426H1243.99V410.761H1243.88L1239.62 413.591V411.443L1243.99 408.545H1246.1Z"
        fill="#A9448C"
        id="path1264"
      />
      <path
        d="M1219.94 343.545V361H1217.83V345.761H1217.73L1213.47 348.591V346.443L1217.83 343.545H1219.94ZM1230.66 361.239C1229.37 361.239 1228.28 360.889 1227.38 360.19C1226.47 359.486 1225.78 358.466 1225.3 357.131C1224.83 355.79 1224.59 354.17 1224.59 352.273C1224.59 350.386 1224.83 348.776 1225.3 347.44C1225.79 346.099 1226.48 345.077 1227.38 344.372C1228.29 343.662 1229.38 343.307 1230.66 343.307C1231.93 343.307 1233.02 343.662 1233.92 344.372C1234.83 345.077 1235.52 346.099 1236 347.44C1236.48 348.776 1236.72 350.386 1236.72 352.273C1236.72 354.17 1236.49 355.79 1236.01 357.131C1235.53 358.466 1234.84 359.486 1233.94 360.19C1233.03 360.889 1231.94 361.239 1230.66 361.239ZM1230.66 359.364C1231.93 359.364 1232.92 358.75 1233.62 357.523C1234.33 356.295 1234.68 354.545 1234.68 352.273C1234.68 350.761 1234.52 349.474 1234.19 348.412C1233.88 347.349 1233.41 346.54 1232.81 345.983C1232.22 345.426 1231.5 345.148 1230.66 345.148C1229.39 345.148 1228.41 345.77 1227.7 347.014C1226.99 348.253 1226.63 350.006 1226.63 352.273C1226.63 353.784 1226.79 355.068 1227.11 356.125C1227.43 357.182 1227.89 357.986 1228.48 358.537C1229.09 359.088 1229.81 359.364 1230.66 359.364ZM1239.96 361V359.466L1245.72 353.159C1246.4 352.42 1246.96 351.778 1247.39 351.233C1247.83 350.682 1248.16 350.165 1248.37 349.682C1248.58 349.193 1248.69 348.682 1248.69 348.148C1248.69 347.534 1248.54 347.003 1248.25 346.554C1247.96 346.105 1247.56 345.759 1247.05 345.514C1246.55 345.27 1245.98 345.148 1245.35 345.148C1244.68 345.148 1244.09 345.287 1243.59 345.565C1243.1 345.838 1242.72 346.222 1242.44 346.716C1242.18 347.21 1242.04 347.79 1242.04 348.455H1240.03C1240.03 347.432 1240.27 346.534 1240.74 345.761C1241.21 344.989 1241.85 344.386 1242.66 343.955C1243.48 343.523 1244.4 343.307 1245.42 343.307C1246.44 343.307 1247.35 343.523 1248.14 343.955C1248.93 344.386 1249.55 344.969 1249.99 345.702C1250.44 346.435 1250.67 347.25 1250.67 348.148C1250.67 348.79 1250.55 349.418 1250.32 350.031C1250.09 350.639 1249.69 351.318 1249.12 352.068C1248.56 352.812 1247.78 353.722 1246.78 354.795L1242.86 358.989V359.125H1250.97V361H1239.96Z"
        fill="#A9448C"
        id="path1266"
      />
      <path
        d="M1219.94 278.545V296H1217.83V280.761H1217.73L1213.47 283.591V281.443L1217.83 278.545H1219.94ZM1230.66 296.239C1229.37 296.239 1228.28 295.889 1227.38 295.19C1226.47 294.486 1225.78 293.466 1225.3 292.131C1224.83 290.79 1224.59 289.17 1224.59 287.273C1224.59 285.386 1224.83 283.776 1225.3 282.44C1225.79 281.099 1226.48 280.077 1227.38 279.372C1228.29 278.662 1229.38 278.307 1230.66 278.307C1231.93 278.307 1233.02 278.662 1233.92 279.372C1234.83 280.077 1235.52 281.099 1236 282.44C1236.48 283.776 1236.72 285.386 1236.72 287.273C1236.72 289.17 1236.49 290.79 1236.01 292.131C1235.53 293.466 1234.84 294.486 1233.94 295.19C1233.03 295.889 1231.94 296.239 1230.66 296.239ZM1230.66 294.364C1231.93 294.364 1232.92 293.75 1233.62 292.523C1234.33 291.295 1234.68 289.545 1234.68 287.273C1234.68 285.761 1234.52 284.474 1234.19 283.412C1233.88 282.349 1233.41 281.54 1232.81 280.983C1232.22 280.426 1231.5 280.148 1230.66 280.148C1229.39 280.148 1228.41 280.77 1227.7 282.014C1226.99 283.253 1226.63 285.006 1226.63 287.273C1226.63 288.784 1226.79 290.068 1227.11 291.125C1227.43 292.182 1227.89 292.986 1228.48 293.537C1229.09 294.088 1229.81 294.364 1230.66 294.364ZM1245.86 296.239C1244.74 296.239 1243.73 296.045 1242.85 295.659C1241.98 295.273 1241.28 294.736 1240.76 294.048C1240.25 293.355 1239.97 292.551 1239.93 291.636H1242.08C1242.12 292.199 1242.32 292.685 1242.66 293.094C1243 293.497 1243.44 293.81 1243.99 294.031C1244.55 294.253 1245.16 294.364 1245.83 294.364C1246.58 294.364 1247.24 294.233 1247.82 293.972C1248.4 293.71 1248.86 293.347 1249.18 292.881C1249.51 292.415 1249.68 291.875 1249.68 291.261C1249.68 290.619 1249.52 290.054 1249.2 289.565C1248.88 289.071 1248.42 288.685 1247.8 288.406C1247.19 288.128 1246.44 287.989 1245.55 287.989H1244.16V286.114H1245.55C1246.25 286.114 1246.86 285.989 1247.38 285.739C1247.91 285.489 1248.32 285.136 1248.61 284.682C1248.91 284.227 1249.07 283.693 1249.07 283.08C1249.07 282.489 1248.93 281.974 1248.67 281.537C1248.41 281.099 1248.04 280.759 1247.57 280.514C1247.09 280.27 1246.54 280.148 1245.89 280.148C1245.29 280.148 1244.72 280.259 1244.19 280.48C1243.66 280.696 1243.23 281.011 1242.89 281.426C1242.56 281.835 1242.38 282.33 1242.35 282.909H1240.3C1240.34 281.994 1240.61 281.193 1241.13 280.506C1241.65 279.812 1242.32 279.273 1243.16 278.886C1244 278.5 1244.92 278.307 1245.93 278.307C1247.01 278.307 1247.93 278.526 1248.71 278.963C1249.48 279.395 1250.07 279.966 1250.49 280.676C1250.9 281.386 1251.11 282.153 1251.11 282.977C1251.11 283.96 1250.85 284.798 1250.34 285.491C1249.82 286.185 1249.13 286.665 1248.25 286.932V287.068C1249.35 287.25 1250.21 287.719 1250.83 288.474C1251.45 289.224 1251.76 290.153 1251.76 291.261C1251.76 292.21 1251.5 293.062 1250.98 293.818C1250.47 294.568 1249.77 295.159 1248.89 295.591C1248 296.023 1246.99 296.239 1245.86 296.239Z"
        fill="#A9448C"
        id="path1268"
      />
      <path
        d="M1219.94 213.545V231H1217.83V215.761H1217.73L1213.47 218.591V216.443L1217.83 213.545H1219.94ZM1230.66 231.239C1229.37 231.239 1228.28 230.889 1227.38 230.19C1226.47 229.486 1225.78 228.466 1225.3 227.131C1224.83 225.79 1224.59 224.17 1224.59 222.273C1224.59 220.386 1224.83 218.776 1225.3 217.44C1225.79 216.099 1226.48 215.077 1227.38 214.372C1228.29 213.662 1229.38 213.307 1230.66 213.307C1231.93 213.307 1233.02 213.662 1233.92 214.372C1234.83 215.077 1235.52 216.099 1236 217.44C1236.48 218.776 1236.72 220.386 1236.72 222.273C1236.72 224.17 1236.49 225.79 1236.01 227.131C1235.53 228.466 1234.84 229.486 1233.94 230.19C1233.03 230.889 1231.94 231.239 1230.66 231.239ZM1230.66 229.364C1231.93 229.364 1232.92 228.75 1233.62 227.523C1234.33 226.295 1234.68 224.545 1234.68 222.273C1234.68 220.761 1234.52 219.474 1234.19 218.412C1233.88 217.349 1233.41 216.54 1232.81 215.983C1232.22 215.426 1231.5 215.148 1230.66 215.148C1229.39 215.148 1228.41 215.77 1227.7 217.014C1226.99 218.253 1226.63 220.006 1226.63 222.273C1226.63 223.784 1226.79 225.068 1227.11 226.125C1227.43 227.182 1227.89 227.986 1228.48 228.537C1229.09 229.088 1229.81 229.364 1230.66 229.364ZM1239.55 227.42V225.682L1247.22 213.545H1248.49V216.239H1247.63L1241.84 225.409V225.545H1252.17V227.42H1239.55ZM1247.77 231V226.892V226.082V213.545H1249.78V231H1247.77Z"
        fill="#A9448C"
        id="path1270"
      />
      <path
        d="M1102.94 207.545V225H1100.83V209.761H1100.73L1096.47 212.591V210.443L1100.83 207.545H1102.94ZM1113.66 225.239C1112.37 225.239 1111.28 224.889 1110.38 224.19C1109.47 223.486 1108.78 222.466 1108.3 221.131C1107.83 219.79 1107.59 218.17 1107.59 216.273C1107.59 214.386 1107.83 212.776 1108.3 211.44C1108.79 210.099 1109.48 209.077 1110.38 208.372C1111.29 207.662 1112.38 207.307 1113.66 207.307C1114.93 207.307 1116.02 207.662 1116.92 208.372C1117.83 209.077 1118.52 210.099 1119 211.44C1119.48 212.776 1119.72 214.386 1119.72 216.273C1119.72 218.17 1119.49 219.79 1119.01 221.131C1118.53 222.466 1117.84 223.486 1116.94 224.19C1116.03 224.889 1114.94 225.239 1113.66 225.239ZM1113.66 223.364C1114.93 223.364 1115.92 222.75 1116.62 221.523C1117.33 220.295 1117.68 218.545 1117.68 216.273C1117.68 214.761 1117.52 213.474 1117.19 212.412C1116.88 211.349 1116.41 210.54 1115.81 209.983C1115.22 209.426 1114.5 209.148 1113.66 209.148C1112.39 209.148 1111.41 209.77 1110.7 211.014C1109.99 212.253 1109.63 214.006 1109.63 216.273C1109.63 217.784 1109.79 219.068 1110.11 220.125C1110.43 221.182 1110.89 221.986 1111.48 222.537C1112.09 223.088 1112.81 223.364 1113.66 223.364ZM1128.42 225.239C1127.42 225.239 1126.52 225.04 1125.72 224.642C1124.91 224.244 1124.27 223.699 1123.79 223.006C1123.31 222.312 1123.04 221.523 1123 220.636H1125.04C1125.12 221.426 1125.48 222.08 1126.12 222.597C1126.76 223.108 1127.53 223.364 1128.42 223.364C1129.13 223.364 1129.77 223.196 1130.33 222.861C1130.89 222.526 1131.33 222.065 1131.65 221.48C1131.97 220.889 1132.13 220.222 1132.13 219.477C1132.13 218.716 1131.97 218.037 1131.63 217.44C1131.3 216.838 1130.85 216.364 1130.27 216.017C1129.69 215.67 1129.03 215.494 1128.28 215.489C1127.75 215.483 1127.2 215.565 1126.64 215.736C1126.07 215.901 1125.61 216.114 1125.25 216.375L1123.27 216.136L1124.33 207.545H1133.39V209.42H1126.1L1125.49 214.568H1125.59C1125.95 214.284 1126.39 214.048 1126.93 213.861C1127.47 213.673 1128.04 213.58 1128.62 213.58C1129.69 213.58 1130.64 213.835 1131.48 214.347C1132.32 214.852 1132.98 215.545 1133.45 216.426C1133.94 217.307 1134.18 218.312 1134.18 219.443C1134.18 220.557 1133.93 221.551 1133.43 222.426C1132.93 223.295 1132.25 223.983 1131.38 224.489C1130.51 224.989 1129.53 225.239 1128.42 225.239Z"
        fill="#A9448C"
        id="path1272"
      />
      <path
        d="M1102.94 270.545V288H1100.83V272.761H1100.73L1096.47 275.591V273.443L1100.83 270.545H1102.94ZM1113.66 288.239C1112.37 288.239 1111.28 287.889 1110.38 287.19C1109.47 286.486 1108.78 285.466 1108.3 284.131C1107.83 282.79 1107.59 281.17 1107.59 279.273C1107.59 277.386 1107.83 275.776 1108.3 274.44C1108.79 273.099 1109.48 272.077 1110.38 271.372C1111.29 270.662 1112.38 270.307 1113.66 270.307C1114.93 270.307 1116.02 270.662 1116.92 271.372C1117.83 272.077 1118.52 273.099 1119 274.44C1119.48 275.776 1119.72 277.386 1119.72 279.273C1119.72 281.17 1119.49 282.79 1119.01 284.131C1118.53 285.466 1117.84 286.486 1116.94 287.19C1116.03 287.889 1114.94 288.239 1113.66 288.239ZM1113.66 286.364C1114.93 286.364 1115.92 285.75 1116.62 284.523C1117.33 283.295 1117.68 281.545 1117.68 279.273C1117.68 277.761 1117.52 276.474 1117.19 275.412C1116.88 274.349 1116.41 273.54 1115.81 272.983C1115.22 272.426 1114.5 272.148 1113.66 272.148C1112.39 272.148 1111.41 272.77 1110.7 274.014C1109.99 275.253 1109.63 277.006 1109.63 279.273C1109.63 280.784 1109.79 282.068 1110.11 283.125C1110.43 284.182 1110.89 284.986 1111.48 285.537C1112.09 286.088 1112.81 286.364 1113.66 286.364ZM1128.76 288.239C1128.04 288.227 1127.33 288.091 1126.61 287.83C1125.89 287.568 1125.24 287.128 1124.65 286.509C1124.06 285.884 1123.59 285.04 1123.23 283.977C1122.87 282.909 1122.69 281.568 1122.69 279.955C1122.69 278.409 1122.84 277.04 1123.12 275.847C1123.41 274.648 1123.84 273.639 1124.39 272.821C1124.94 271.997 1125.6 271.372 1126.38 270.946C1127.16 270.52 1128.05 270.307 1129.03 270.307C1130.01 270.307 1130.88 270.503 1131.64 270.895C1132.41 271.281 1133.03 271.821 1133.51 272.514C1134 273.207 1134.31 274.006 1134.45 274.909H1132.37C1132.18 274.125 1131.8 273.474 1131.25 272.957C1130.69 272.44 1129.95 272.182 1129.03 272.182C1127.68 272.182 1126.61 272.77 1125.84 273.946C1125.06 275.122 1124.67 276.773 1124.67 278.898H1124.8C1125.12 278.415 1125.5 278.003 1125.94 277.662C1126.38 277.315 1126.87 277.048 1127.4 276.861C1127.94 276.673 1128.5 276.58 1129.1 276.58C1130.1 276.58 1131.01 276.83 1131.84 277.33C1132.67 277.824 1133.34 278.509 1133.84 279.384C1134.34 280.253 1134.59 281.25 1134.59 282.375C1134.59 283.455 1134.35 284.443 1133.86 285.341C1133.38 286.233 1132.7 286.943 1131.83 287.472C1130.96 287.994 1129.93 288.25 1128.76 288.239ZM1128.76 286.364C1129.47 286.364 1130.12 286.185 1130.68 285.827C1131.26 285.469 1131.71 284.989 1132.04 284.386C1132.38 283.784 1132.54 283.114 1132.54 282.375C1132.54 281.653 1132.38 280.997 1132.06 280.406C1131.74 279.81 1131.3 279.335 1130.74 278.983C1130.18 278.631 1129.54 278.455 1128.83 278.455C1128.29 278.455 1127.78 278.562 1127.32 278.778C1126.85 278.989 1126.44 279.278 1126.09 279.648C1125.74 280.017 1125.47 280.44 1125.27 280.918C1125.07 281.389 1124.97 281.886 1124.97 282.409C1124.97 283.102 1125.14 283.75 1125.46 284.352C1125.79 284.955 1126.24 285.44 1126.81 285.81C1127.38 286.179 1128.03 286.364 1128.76 286.364Z"
        fill="#A9448C"
        id="path1274"
      />
      <path
        d="M1102.94 333.545V351H1100.83V335.761H1100.73L1096.47 338.591V336.443L1100.83 333.545H1102.94ZM1113.66 351.239C1112.37 351.239 1111.28 350.889 1110.38 350.19C1109.47 349.486 1108.78 348.466 1108.3 347.131C1107.83 345.79 1107.59 344.17 1107.59 342.273C1107.59 340.386 1107.83 338.776 1108.3 337.44C1108.79 336.099 1109.48 335.077 1110.38 334.372C1111.29 333.662 1112.38 333.307 1113.66 333.307C1114.93 333.307 1116.02 333.662 1116.92 334.372C1117.83 335.077 1118.52 336.099 1119 337.44C1119.48 338.776 1119.72 340.386 1119.72 342.273C1119.72 344.17 1119.49 345.79 1119.01 347.131C1118.53 348.466 1117.84 349.486 1116.94 350.19C1116.03 350.889 1114.94 351.239 1113.66 351.239ZM1113.66 349.364C1114.93 349.364 1115.92 348.75 1116.62 347.523C1117.33 346.295 1117.68 344.545 1117.68 342.273C1117.68 340.761 1117.52 339.474 1117.19 338.412C1116.88 337.349 1116.41 336.54 1115.81 335.983C1115.22 335.426 1114.5 335.148 1113.66 335.148C1112.39 335.148 1111.41 335.77 1110.7 337.014C1109.99 338.253 1109.63 340.006 1109.63 342.273C1109.63 343.784 1109.79 345.068 1110.11 346.125C1110.43 347.182 1110.89 347.986 1111.48 348.537C1112.09 349.088 1112.81 349.364 1113.66 349.364ZM1123.04 351L1130.85 335.557V335.42H1121.85V333.545H1133.03V335.523L1125.26 351H1123.04Z"
        fill="#A9448C"
        id="path1276"
      />
      <path
        d="M1102.94 410.545V428H1100.83V412.761H1100.73L1096.47 415.591V413.443L1100.83 410.545H1102.94ZM1113.66 428.239C1112.37 428.239 1111.28 427.889 1110.38 427.19C1109.47 426.486 1108.78 425.466 1108.3 424.131C1107.83 422.79 1107.59 421.17 1107.59 419.273C1107.59 417.386 1107.83 415.776 1108.3 414.44C1108.79 413.099 1109.48 412.077 1110.38 411.372C1111.29 410.662 1112.38 410.307 1113.66 410.307C1114.93 410.307 1116.02 410.662 1116.92 411.372C1117.83 412.077 1118.52 413.099 1119 414.44C1119.48 415.776 1119.72 417.386 1119.72 419.273C1119.72 421.17 1119.49 422.79 1119.01 424.131C1118.53 425.466 1117.84 426.486 1116.94 427.19C1116.03 427.889 1114.94 428.239 1113.66 428.239ZM1113.66 426.364C1114.93 426.364 1115.92 425.75 1116.62 424.523C1117.33 423.295 1117.68 421.545 1117.68 419.273C1117.68 417.761 1117.52 416.474 1117.19 415.412C1116.88 414.349 1116.41 413.54 1115.81 412.983C1115.22 412.426 1114.5 412.148 1113.66 412.148C1112.39 412.148 1111.41 412.77 1110.7 414.014C1109.99 415.253 1109.63 417.006 1109.63 419.273C1109.63 420.784 1109.79 422.068 1110.11 423.125C1110.43 424.182 1110.89 424.986 1111.48 425.537C1112.09 426.088 1112.81 426.364 1113.66 426.364ZM1128.55 428.239C1127.38 428.239 1126.35 428.031 1125.45 427.616C1124.56 427.196 1123.86 426.619 1123.36 425.886C1122.86 425.148 1122.62 424.307 1122.62 423.364C1122.62 422.625 1122.76 421.943 1123.06 421.318C1123.35 420.687 1123.76 420.162 1124.27 419.741C1124.78 419.315 1125.36 419.045 1126 418.932V418.83C1125.16 418.614 1124.5 418.145 1124 417.423C1123.51 416.696 1123.26 415.869 1123.27 414.943C1123.26 414.057 1123.49 413.264 1123.94 412.565C1124.4 411.866 1125.02 411.315 1125.82 410.912C1126.62 410.509 1127.53 410.307 1128.55 410.307C1129.57 410.307 1130.47 410.509 1131.26 410.912C1132.06 411.315 1132.68 411.866 1133.14 412.565C1133.6 413.264 1133.83 414.057 1133.84 414.943C1133.83 415.869 1133.58 416.696 1133.08 417.423C1132.59 418.145 1131.93 418.614 1131.11 418.83V418.932C1131.74 419.045 1132.31 419.315 1132.82 419.741C1133.32 420.162 1133.72 420.687 1134.03 421.318C1134.33 421.943 1134.48 422.625 1134.49 423.364C1134.48 424.307 1134.22 425.148 1133.72 425.886C1133.22 426.619 1132.52 427.196 1131.63 427.616C1130.74 428.031 1129.72 428.239 1128.55 428.239ZM1128.55 426.364C1129.34 426.364 1130.03 426.236 1130.6 425.98C1131.17 425.724 1131.62 425.364 1131.93 424.898C1132.24 424.432 1132.4 423.886 1132.41 423.261C1132.4 422.602 1132.23 422.02 1131.89 421.514C1131.56 421.009 1131.1 420.611 1130.52 420.321C1129.95 420.031 1129.29 419.886 1128.55 419.886C1127.81 419.886 1127.14 420.031 1126.56 420.321C1125.98 420.611 1125.52 421.009 1125.19 421.514C1124.86 422.02 1124.7 422.602 1124.7 423.261C1124.7 423.886 1124.85 424.432 1125.15 424.898C1125.47 425.364 1125.91 425.724 1126.49 425.98C1127.07 426.236 1127.76 426.364 1128.55 426.364ZM1128.55 418.08C1129.18 418.08 1129.73 417.955 1130.22 417.705C1130.7 417.455 1131.09 417.105 1131.37 416.656C1131.64 416.207 1131.79 415.682 1131.79 415.08C1131.79 414.489 1131.65 413.974 1131.38 413.537C1131.1 413.094 1130.72 412.753 1130.24 412.514C1129.76 412.27 1129.2 412.148 1128.55 412.148C1127.9 412.148 1127.33 412.27 1126.84 412.514C1126.35 412.753 1125.97 413.094 1125.71 413.537C1125.44 413.974 1125.31 414.489 1125.32 415.08C1125.31 415.682 1125.44 416.207 1125.72 416.656C1125.99 417.105 1126.38 417.455 1126.87 417.705C1127.36 417.955 1127.92 418.08 1128.55 418.08Z"
        fill="#A9448C"
        id="path1278"
      />
      <path
        d="M1102.94 522.545V540H1100.83V524.761H1100.73L1096.47 527.591V525.443L1100.83 522.545H1102.94ZM1113.66 540.239C1112.37 540.239 1111.28 539.889 1110.38 539.19C1109.47 538.486 1108.78 537.466 1108.3 536.131C1107.83 534.79 1107.59 533.17 1107.59 531.273C1107.59 529.386 1107.83 527.776 1108.3 526.44C1108.79 525.099 1109.48 524.077 1110.38 523.372C1111.29 522.662 1112.38 522.307 1113.66 522.307C1114.93 522.307 1116.02 522.662 1116.92 523.372C1117.83 524.077 1118.52 525.099 1119 526.44C1119.48 527.776 1119.72 529.386 1119.72 531.273C1119.72 533.17 1119.49 534.79 1119.01 536.131C1118.53 537.466 1117.84 538.486 1116.94 539.19C1116.03 539.889 1114.94 540.239 1113.66 540.239ZM1113.66 538.364C1114.93 538.364 1115.92 537.75 1116.62 536.523C1117.33 535.295 1117.68 533.545 1117.68 531.273C1117.68 529.761 1117.52 528.474 1117.19 527.412C1116.88 526.349 1116.41 525.54 1115.81 524.983C1115.22 524.426 1114.5 524.148 1113.66 524.148C1112.39 524.148 1111.41 524.77 1110.7 526.014C1109.99 527.253 1109.63 529.006 1109.63 531.273C1109.63 532.784 1109.79 534.068 1110.11 535.125C1110.43 536.182 1110.89 536.986 1111.48 537.537C1112.09 538.088 1112.81 538.364 1113.66 538.364ZM1128.52 522.307C1129.24 522.312 1129.95 522.449 1130.67 522.716C1131.38 522.983 1132.04 523.426 1132.63 524.045C1133.22 524.659 1133.69 525.497 1134.05 526.56C1134.41 527.622 1134.59 528.955 1134.59 530.557C1134.59 532.108 1134.44 533.486 1134.14 534.69C1133.86 535.889 1133.43 536.901 1132.88 537.724C1132.34 538.548 1131.67 539.173 1130.89 539.599C1130.11 540.026 1129.23 540.239 1128.25 540.239C1127.27 540.239 1126.4 540.045 1125.63 539.659C1124.87 539.267 1124.24 538.724 1123.76 538.031C1123.27 537.332 1122.96 536.523 1122.83 535.602H1124.91C1125.09 536.403 1125.47 537.065 1126.02 537.588C1126.59 538.105 1127.33 538.364 1128.25 538.364C1129.59 538.364 1130.66 537.776 1131.43 536.599C1132.22 535.423 1132.61 533.761 1132.61 531.614H1132.47C1132.16 532.091 1131.78 532.503 1131.34 532.849C1130.9 533.196 1130.42 533.463 1129.88 533.651C1129.35 533.838 1128.78 533.932 1128.18 533.932C1127.18 533.932 1126.26 533.685 1125.43 533.19C1124.6 532.69 1123.93 532.006 1123.43 531.136C1122.94 530.261 1122.69 529.261 1122.69 528.136C1122.69 527.068 1122.93 526.091 1123.41 525.205C1123.89 524.312 1124.57 523.602 1125.43 523.074C1126.31 522.545 1127.34 522.29 1128.52 522.307ZM1128.52 524.182C1127.8 524.182 1127.16 524.361 1126.59 524.719C1126.02 525.071 1125.57 525.548 1125.23 526.151C1124.9 526.747 1124.74 527.409 1124.74 528.136C1124.74 528.864 1124.89 529.526 1125.21 530.122C1125.54 530.713 1125.98 531.185 1126.53 531.537C1127.1 531.884 1127.74 532.057 1128.45 532.057C1128.99 532.057 1129.49 531.952 1129.96 531.741C1130.43 531.526 1130.83 531.233 1131.18 530.864C1131.53 530.489 1131.81 530.065 1132.01 529.594C1132.2 529.116 1132.3 528.619 1132.3 528.102C1132.3 527.42 1132.14 526.781 1131.81 526.185C1131.49 525.588 1131.04 525.105 1130.46 524.736C1129.89 524.366 1129.25 524.182 1128.52 524.182Z"
        fill="#A9448C"
        id="path1280"
      />
      <path
        d="M1107.94 720.545V738H1105.83V722.761H1105.73L1101.47 725.591V723.443L1105.83 720.545H1107.94ZM1119.1 720.545V738H1116.99V722.761H1116.88L1112.62 725.591V723.443L1116.99 720.545H1119.1ZM1129.81 738.239C1128.53 738.239 1127.43 737.889 1126.53 737.19C1125.63 736.486 1124.94 735.466 1124.46 734.131C1123.98 732.79 1123.74 731.17 1123.74 729.273C1123.74 727.386 1123.98 725.776 1124.46 724.44C1124.94 723.099 1125.64 722.077 1126.54 721.372C1127.45 720.662 1128.54 720.307 1129.81 720.307C1131.09 720.307 1132.17 720.662 1133.08 721.372C1133.99 722.077 1134.68 723.099 1135.16 724.44C1135.64 725.776 1135.88 727.386 1135.88 729.273C1135.88 731.17 1135.64 732.79 1135.16 734.131C1134.69 735.466 1134 736.486 1133.09 737.19C1132.19 737.889 1131.1 738.239 1129.81 738.239ZM1129.81 736.364C1131.09 736.364 1132.07 735.75 1132.78 734.523C1133.48 733.295 1133.84 731.545 1133.84 729.273C1133.84 727.761 1133.67 726.474 1133.35 725.412C1133.03 724.349 1132.57 723.54 1131.97 722.983C1131.37 722.426 1130.65 722.148 1129.81 722.148C1128.55 722.148 1127.57 722.77 1126.86 724.014C1126.14 725.253 1125.79 727.006 1125.79 729.273C1125.79 730.784 1125.95 732.068 1126.27 733.125C1126.59 734.182 1127.04 734.986 1127.64 735.537C1128.24 736.088 1128.97 736.364 1129.81 736.364Z"
        fill="#A9448C"
        id="path1282"
      />
      <path
        d="M1107.94 791.545V809H1105.83V793.761H1105.73L1101.47 796.591V794.443L1105.83 791.545H1107.94ZM1119.1 791.545V809H1116.99V793.761H1116.88L1112.62 796.591V794.443L1116.99 791.545H1119.1ZM1130.26 791.545V809H1128.14V793.761H1128.04L1123.78 796.591V794.443L1128.14 791.545H1130.26Z"
        fill="#A9448C"
        id="path1284"
      />
      <path
        d="M1107.94 862.545V880H1105.83V864.761H1105.73L1101.47 867.591V865.443L1105.83 862.545H1107.94ZM1119.1 862.545V880H1116.99V864.761H1116.88L1112.62 867.591V865.443L1116.99 862.545H1119.1ZM1124.12 880V878.466L1129.88 872.159C1130.56 871.42 1131.11 870.778 1131.55 870.233C1131.99 869.682 1132.31 869.165 1132.52 868.682C1132.74 868.193 1132.85 867.682 1132.85 867.148C1132.85 866.534 1132.7 866.003 1132.4 865.554C1132.11 865.105 1131.72 864.759 1131.21 864.514C1130.7 864.27 1130.14 864.148 1129.51 864.148C1128.84 864.148 1128.25 864.287 1127.75 864.565C1127.26 864.838 1126.87 865.222 1126.6 865.716C1126.33 866.21 1126.2 866.79 1126.2 867.455H1124.19C1124.19 866.432 1124.42 865.534 1124.89 864.761C1125.37 863.989 1126.01 863.386 1126.82 862.955C1127.64 862.523 1128.56 862.307 1129.57 862.307C1130.6 862.307 1131.5 862.523 1132.29 862.955C1133.08 863.386 1133.7 863.969 1134.15 864.702C1134.6 865.435 1134.82 866.25 1134.82 867.148C1134.82 867.79 1134.71 868.418 1134.47 869.031C1134.25 869.639 1133.85 870.318 1133.28 871.068C1132.72 871.812 1131.94 872.722 1130.94 873.795L1127.02 877.989V878.125H1135.13V880H1124.12Z"
        fill="#A9448C"
        id="path1286"
      />
      <path
        d="M1107.94 933.545V951H1105.83V935.761H1105.73L1101.47 938.591V936.443L1105.83 933.545H1107.94ZM1119.1 933.545V951H1116.99V935.761H1116.88L1112.62 938.591V936.443L1116.99 933.545H1119.1ZM1130.02 951.239C1128.89 951.239 1127.89 951.045 1127.01 950.659C1126.13 950.273 1125.44 949.736 1124.92 949.048C1124.41 948.355 1124.13 947.551 1124.09 946.636H1126.23C1126.28 947.199 1126.47 947.685 1126.81 948.094C1127.15 948.497 1127.6 948.81 1128.15 949.031C1128.7 949.253 1129.31 949.364 1129.98 949.364C1130.73 949.364 1131.4 949.233 1131.98 948.972C1132.56 948.71 1133.01 948.347 1133.34 947.881C1133.67 947.415 1133.84 946.875 1133.84 946.261C1133.84 945.619 1133.68 945.054 1133.36 944.565C1133.04 944.071 1132.57 943.685 1131.96 943.406C1131.35 943.128 1130.6 942.989 1129.71 942.989H1128.31V941.114H1129.71C1130.4 941.114 1131.01 940.989 1131.53 940.739C1132.06 940.489 1132.47 940.136 1132.77 939.682C1133.07 939.227 1133.22 938.693 1133.22 938.08C1133.22 937.489 1133.09 936.974 1132.83 936.537C1132.57 936.099 1132.2 935.759 1131.72 935.514C1131.25 935.27 1130.69 935.148 1130.05 935.148C1129.45 935.148 1128.88 935.259 1128.35 935.48C1127.82 935.696 1127.39 936.011 1127.05 936.426C1126.72 936.835 1126.53 937.33 1126.51 937.909H1124.46C1124.49 936.994 1124.77 936.193 1125.29 935.506C1125.8 934.812 1126.48 934.273 1127.32 933.886C1128.16 933.5 1129.08 933.307 1130.09 933.307C1131.16 933.307 1132.09 933.526 1132.86 933.963C1133.64 934.395 1134.23 934.966 1134.64 935.676C1135.06 936.386 1135.27 937.153 1135.27 937.977C1135.27 938.96 1135.01 939.798 1134.49 940.491C1133.98 941.185 1133.28 941.665 1132.4 941.932V942.068C1133.51 942.25 1134.37 942.719 1134.99 943.474C1135.61 944.224 1135.91 945.153 1135.91 946.261C1135.91 947.21 1135.66 948.062 1135.14 948.818C1134.63 949.568 1133.93 950.159 1133.04 950.591C1132.16 951.023 1131.15 951.239 1130.02 951.239Z"
        fill="#A9448C"
        id="path1288"
      />
      <path
        d="M1107.94 1004.55V1022H1105.83V1006.76H1105.73L1101.47 1009.59V1007.44L1105.83 1004.55H1107.94ZM1119.1 1004.55V1022H1116.99V1006.76H1116.88L1112.62 1009.59V1007.44L1116.99 1004.55H1119.1ZM1123.71 1018.42V1016.68L1131.38 1004.55H1132.64V1007.24H1131.79L1125.99 1016.41V1016.55H1136.32V1018.42H1123.71ZM1131.93 1022V1017.89V1017.08V1004.55H1133.94V1022H1131.93Z"
        fill="#A9448C"
        id="path1290"
      />
      <path
        d="M1107.94 1065.55V1083H1105.83V1067.76H1105.73L1101.47 1070.59V1068.44L1105.83 1065.55H1107.94ZM1119.1 1065.55V1083H1116.99V1067.76H1116.88L1112.62 1070.59V1068.44L1116.99 1065.55H1119.1ZM1129.57 1083.24C1128.57 1083.24 1127.67 1083.04 1126.87 1082.64C1126.07 1082.24 1125.43 1081.7 1124.95 1081.01C1124.46 1080.31 1124.2 1079.52 1124.15 1078.64H1126.2C1126.28 1079.43 1126.64 1080.08 1127.27 1080.6C1127.91 1081.11 1128.68 1081.36 1129.57 1081.36C1130.29 1081.36 1130.93 1081.2 1131.48 1080.86C1132.05 1080.53 1132.49 1080.07 1132.8 1079.48C1133.13 1078.89 1133.29 1078.22 1133.29 1077.48C1133.29 1076.72 1133.12 1076.04 1132.79 1075.44C1132.46 1074.84 1132 1074.36 1131.42 1074.02C1130.84 1073.67 1130.18 1073.49 1129.44 1073.49C1128.9 1073.48 1128.36 1073.57 1127.79 1073.74C1127.23 1073.9 1126.77 1074.11 1126.4 1074.38L1124.43 1074.14L1125.48 1065.55H1134.55V1067.42H1127.26L1126.64 1072.57H1126.74C1127.1 1072.28 1127.55 1072.05 1128.09 1071.86C1128.63 1071.67 1129.19 1071.58 1129.78 1071.58C1130.85 1071.58 1131.8 1071.84 1132.63 1072.35C1133.47 1072.85 1134.13 1073.55 1134.61 1074.43C1135.09 1075.31 1135.34 1076.31 1135.34 1077.44C1135.34 1078.56 1135.09 1079.55 1134.59 1080.43C1134.09 1081.3 1133.41 1081.98 1132.54 1082.49C1131.67 1082.99 1130.68 1083.24 1129.57 1083.24Z"
        fill="#A9448C"
        id="path1292"
      />
      <path
        d="M1107.94 1134.55V1152H1105.83V1136.76H1105.73L1101.47 1139.59V1137.44L1105.83 1134.55H1107.94ZM1119.1 1134.55V1152H1116.99V1136.76H1116.88L1112.62 1139.59V1137.44L1116.99 1134.55H1119.1ZM1129.91 1152.24C1129.2 1152.23 1128.48 1152.09 1127.77 1151.83C1127.05 1151.57 1126.4 1151.13 1125.81 1150.51C1125.22 1149.88 1124.74 1149.04 1124.38 1147.98C1124.03 1146.91 1123.85 1145.57 1123.85 1143.95C1123.85 1142.41 1123.99 1141.04 1124.28 1139.85C1124.57 1138.65 1124.99 1137.64 1125.54 1136.82C1126.09 1136 1126.76 1135.37 1127.54 1134.95C1128.32 1134.52 1129.2 1134.31 1130.19 1134.31C1131.16 1134.31 1132.03 1134.5 1132.8 1134.89C1133.56 1135.28 1134.19 1135.82 1134.67 1136.51C1135.15 1137.21 1135.47 1138.01 1135.61 1138.91H1133.53C1133.34 1138.12 1132.96 1137.47 1132.4 1136.96C1131.85 1136.44 1131.11 1136.18 1130.19 1136.18C1128.84 1136.18 1127.77 1136.77 1126.99 1137.95C1126.22 1139.12 1125.83 1140.77 1125.82 1142.9H1125.96C1126.28 1142.41 1126.66 1142 1127.09 1141.66C1127.54 1141.32 1128.03 1141.05 1128.56 1140.86C1129.09 1140.67 1129.66 1140.58 1130.26 1140.58C1131.26 1140.58 1132.17 1140.83 1133 1141.33C1133.83 1141.82 1134.49 1142.51 1134.99 1143.38C1135.49 1144.25 1135.74 1145.25 1135.74 1146.38C1135.74 1147.45 1135.5 1148.44 1135.02 1149.34C1134.54 1150.23 1133.86 1150.94 1132.98 1151.47C1132.11 1151.99 1131.09 1152.25 1129.91 1152.24ZM1129.91 1150.36C1130.63 1150.36 1131.27 1150.18 1131.84 1149.83C1132.41 1149.47 1132.87 1148.99 1133.2 1148.39C1133.53 1147.78 1133.7 1147.11 1133.7 1146.38C1133.7 1145.65 1133.54 1145 1133.21 1144.41C1132.89 1143.81 1132.45 1143.34 1131.89 1142.98C1131.34 1142.63 1130.7 1142.45 1129.98 1142.45C1129.44 1142.45 1128.94 1142.56 1128.47 1142.78C1128.01 1142.99 1127.6 1143.28 1127.25 1143.65C1126.9 1144.02 1126.63 1144.44 1126.43 1144.92C1126.23 1145.39 1126.13 1145.89 1126.13 1146.41C1126.13 1147.1 1126.29 1147.75 1126.62 1148.35C1126.95 1148.95 1127.39 1149.44 1127.96 1149.81C1128.54 1150.18 1129.19 1150.36 1129.91 1150.36Z"
        fill="#A9448C"
        id="path1294"
      />
      <path
        d="M1107.94 1197.55V1215H1105.83V1199.76H1105.73L1101.47 1202.59V1200.44L1105.83 1197.55H1107.94ZM1119.1 1197.55V1215H1116.99V1199.76H1116.88L1112.62 1202.59V1200.44L1116.99 1197.55H1119.1ZM1124.66 1215L1132.47 1199.56V1199.42H1123.47V1197.55H1134.65V1199.52L1126.88 1215H1124.66Z"
        fill="#A9448C"
        id="path1296"
      />
      <path
        d="M1106.94 1259.55V1277H1104.83V1261.76H1104.73L1100.47 1264.59V1262.44L1104.83 1259.55H1106.94ZM1118.1 1259.55V1277H1115.99V1261.76H1115.88L1111.62 1264.59V1262.44L1115.99 1259.55H1118.1ZM1128.71 1277.24C1127.54 1277.24 1126.51 1277.03 1125.61 1276.62C1124.72 1276.2 1124.02 1275.62 1123.52 1274.89C1123.02 1274.15 1122.77 1273.31 1122.78 1272.36C1122.77 1271.62 1122.92 1270.94 1123.21 1270.32C1123.51 1269.69 1123.91 1269.16 1124.42 1268.74C1124.94 1268.32 1125.52 1268.05 1126.15 1267.93V1267.83C1125.32 1267.61 1124.65 1267.14 1124.16 1266.42C1123.66 1265.7 1123.42 1264.87 1123.43 1263.94C1123.42 1263.06 1123.64 1262.26 1124.1 1261.57C1124.55 1260.87 1125.18 1260.32 1125.97 1259.91C1126.78 1259.51 1127.69 1259.31 1128.71 1259.31C1129.72 1259.31 1130.63 1259.51 1131.42 1259.91C1132.22 1260.32 1132.84 1260.87 1133.3 1261.57C1133.76 1262.26 1133.99 1263.06 1133.99 1263.94C1133.99 1264.87 1133.74 1265.7 1133.24 1266.42C1132.74 1267.14 1132.09 1267.61 1131.27 1267.83V1267.93C1131.9 1268.05 1132.47 1268.32 1132.97 1268.74C1133.48 1269.16 1133.88 1269.69 1134.18 1270.32C1134.48 1270.94 1134.64 1271.62 1134.64 1272.36C1134.64 1273.31 1134.38 1274.15 1133.88 1274.89C1133.38 1275.62 1132.68 1276.2 1131.79 1276.62C1130.9 1277.03 1129.88 1277.24 1128.71 1277.24ZM1128.71 1275.36C1129.5 1275.36 1130.18 1275.24 1130.76 1274.98C1131.33 1274.72 1131.77 1274.36 1132.09 1273.9C1132.4 1273.43 1132.56 1272.89 1132.56 1272.26C1132.56 1271.6 1132.39 1271.02 1132.05 1270.51C1131.72 1270.01 1131.26 1269.61 1130.68 1269.32C1130.11 1269.03 1129.45 1268.89 1128.71 1268.89C1127.97 1268.89 1127.3 1269.03 1126.72 1269.32C1126.14 1269.61 1125.68 1270.01 1125.34 1270.51C1125.01 1271.02 1124.85 1271.6 1124.86 1272.26C1124.85 1272.89 1125 1273.43 1125.31 1273.9C1125.62 1274.36 1126.07 1274.72 1126.65 1274.98C1127.23 1275.24 1127.91 1275.36 1128.71 1275.36ZM1128.71 1267.08C1129.34 1267.08 1129.89 1266.95 1130.37 1266.7C1130.86 1266.45 1131.24 1266.11 1131.52 1265.66C1131.8 1265.21 1131.94 1264.68 1131.95 1264.08C1131.94 1263.49 1131.8 1262.97 1131.53 1262.54C1131.26 1262.09 1130.88 1261.75 1130.4 1261.51C1129.91 1261.27 1129.35 1261.15 1128.71 1261.15C1128.06 1261.15 1127.49 1261.27 1127 1261.51C1126.51 1261.75 1126.13 1262.09 1125.86 1262.54C1125.6 1262.97 1125.47 1263.49 1125.47 1264.08C1125.47 1264.68 1125.6 1265.21 1125.87 1265.66C1126.15 1266.11 1126.53 1266.45 1127.02 1266.7C1127.51 1266.95 1128.07 1267.08 1128.71 1267.08Z"
        fill="#A9448C"
        id="path1298"
      />
      <path
        d="M1102.94 1346.55V1364H1100.83V1348.76H1100.73L1096.47 1351.59V1349.44L1100.83 1346.55H1102.94ZM1114.1 1346.55V1364H1111.99V1348.76H1111.88L1107.62 1351.59V1349.44L1111.99 1346.55H1114.1ZM1124.68 1346.31C1125.39 1346.31 1126.11 1346.45 1126.82 1346.72C1127.54 1346.98 1128.19 1347.43 1128.78 1348.05C1129.38 1348.66 1129.85 1349.5 1130.21 1350.56C1130.57 1351.62 1130.74 1352.95 1130.74 1354.56C1130.74 1356.11 1130.6 1357.49 1130.3 1358.69C1130.01 1359.89 1129.59 1360.9 1129.04 1361.72C1128.49 1362.55 1127.83 1363.17 1127.05 1363.6C1126.27 1364.03 1125.39 1364.24 1124.4 1364.24C1123.43 1364.24 1122.55 1364.05 1121.79 1363.66C1121.03 1363.27 1120.4 1362.72 1119.91 1362.03C1119.43 1361.33 1119.12 1360.52 1118.98 1359.6H1121.06C1121.25 1360.4 1121.62 1361.07 1122.18 1361.59C1122.74 1362.11 1123.48 1362.36 1124.4 1362.36C1125.75 1362.36 1126.81 1361.78 1127.59 1360.6C1128.38 1359.42 1128.77 1357.76 1128.77 1355.61H1128.63C1128.31 1356.09 1127.93 1356.5 1127.5 1356.85C1127.06 1357.2 1126.57 1357.46 1126.04 1357.65C1125.51 1357.84 1124.94 1357.93 1124.34 1357.93C1123.34 1357.93 1122.42 1357.68 1121.58 1357.19C1120.75 1356.69 1120.09 1356.01 1119.59 1355.14C1119.09 1354.26 1118.85 1353.26 1118.85 1352.14C1118.85 1351.07 1119.09 1350.09 1119.56 1349.2C1120.05 1348.31 1120.72 1347.6 1121.59 1347.07C1122.47 1346.55 1123.49 1346.29 1124.68 1346.31ZM1124.68 1348.18C1123.96 1348.18 1123.32 1348.36 1122.74 1348.72C1122.17 1349.07 1121.72 1349.55 1121.39 1350.15C1121.06 1350.75 1120.89 1351.41 1120.89 1352.14C1120.89 1352.86 1121.05 1353.53 1121.37 1354.12C1121.69 1354.71 1122.13 1355.18 1122.69 1355.54C1123.25 1355.88 1123.89 1356.06 1124.61 1356.06C1125.15 1356.06 1125.65 1355.95 1126.12 1355.74C1126.58 1355.53 1126.99 1355.23 1127.34 1354.86C1127.69 1354.49 1127.96 1354.07 1128.16 1353.59C1128.36 1353.12 1128.46 1352.62 1128.46 1352.1C1128.46 1351.42 1128.3 1350.78 1127.97 1350.18C1127.64 1349.59 1127.19 1349.11 1126.62 1348.74C1126.05 1348.37 1125.4 1348.18 1124.68 1348.18Z"
        fill="#A9448C"
        id="path1300"
      />
      <path
        d="M930.943 1352.55V1370H928.83V1354.76H928.727L924.466 1357.59V1355.44L928.83 1352.55H930.943ZM935.963 1370V1368.47L941.724 1362.16C942.401 1361.42 942.957 1360.78 943.395 1360.23C943.832 1359.68 944.156 1359.16 944.366 1358.68C944.582 1358.19 944.69 1357.68 944.69 1357.15C944.69 1356.53 944.543 1356 944.247 1355.55C943.957 1355.11 943.56 1354.76 943.054 1354.51C942.548 1354.27 941.98 1354.15 941.349 1354.15C940.679 1354.15 940.094 1354.29 939.594 1354.57C939.099 1354.84 938.716 1355.22 938.443 1355.72C938.176 1356.21 938.043 1356.79 938.043 1357.45H936.031C936.031 1356.43 936.267 1355.53 936.739 1354.76C937.21 1353.99 937.852 1353.39 938.665 1352.95C939.483 1352.52 940.401 1352.31 941.418 1352.31C942.44 1352.31 943.347 1352.52 944.136 1352.95C944.926 1353.39 945.545 1353.97 945.994 1354.7C946.443 1355.43 946.668 1356.25 946.668 1357.15C946.668 1357.79 946.551 1358.42 946.318 1359.03C946.091 1359.64 945.693 1360.32 945.125 1361.07C944.562 1361.81 943.781 1362.72 942.781 1363.8L938.861 1367.99V1368.12H946.974V1370H935.963ZM956.188 1370.24C954.903 1370.24 953.81 1369.89 952.906 1369.19C952.003 1368.49 951.313 1367.47 950.835 1366.13C950.358 1364.79 950.119 1363.17 950.119 1361.27C950.119 1359.39 950.358 1357.78 950.835 1356.44C951.318 1355.1 952.011 1354.08 952.915 1353.37C953.824 1352.66 954.915 1352.31 956.188 1352.31C957.46 1352.31 958.548 1352.66 959.452 1353.37C960.361 1354.08 961.054 1355.1 961.531 1356.44C962.014 1357.78 962.256 1359.39 962.256 1361.27C962.256 1363.17 962.017 1364.79 961.54 1366.13C961.062 1367.47 960.372 1368.49 959.469 1369.19C958.565 1369.89 957.472 1370.24 956.188 1370.24ZM956.188 1368.36C957.46 1368.36 958.449 1367.75 959.153 1366.52C959.858 1365.3 960.21 1363.55 960.21 1361.27C960.21 1359.76 960.048 1358.47 959.724 1357.41C959.406 1356.35 958.946 1355.54 958.344 1354.98C957.747 1354.43 957.028 1354.15 956.188 1354.15C954.926 1354.15 953.94 1354.77 953.23 1356.01C952.52 1357.25 952.165 1359.01 952.165 1361.27C952.165 1362.78 952.324 1364.07 952.642 1365.12C952.96 1366.18 953.418 1366.99 954.014 1367.54C954.616 1368.09 955.341 1368.36 956.188 1368.36Z"
        fill="#A9448C"
        id="path1302"
      />
      <path
        d="M930.943 1282.55V1300H928.83V1284.76H928.727L924.466 1287.59V1285.44L928.83 1282.55H930.943ZM935.963 1300V1298.47L941.724 1292.16C942.401 1291.42 942.957 1290.78 943.395 1290.23C943.832 1289.68 944.156 1289.16 944.366 1288.68C944.582 1288.19 944.69 1287.68 944.69 1287.15C944.69 1286.53 944.543 1286 944.247 1285.55C943.957 1285.11 943.56 1284.76 943.054 1284.51C942.548 1284.27 941.98 1284.15 941.349 1284.15C940.679 1284.15 940.094 1284.29 939.594 1284.57C939.099 1284.84 938.716 1285.22 938.443 1285.72C938.176 1286.21 938.043 1286.79 938.043 1287.45H936.031C936.031 1286.43 936.267 1285.53 936.739 1284.76C937.21 1283.99 937.852 1283.39 938.665 1282.95C939.483 1282.52 940.401 1282.31 941.418 1282.31C942.44 1282.31 943.347 1282.52 944.136 1282.95C944.926 1283.39 945.545 1283.97 945.994 1284.7C946.443 1285.43 946.668 1286.25 946.668 1287.15C946.668 1287.79 946.551 1288.42 946.318 1289.03C946.091 1289.64 945.693 1290.32 945.125 1291.07C944.562 1291.81 943.781 1292.72 942.781 1293.8L938.861 1297.99V1298.12H946.974V1300H935.963ZM956.631 1282.55V1300H954.517V1284.76H954.415L950.153 1287.59V1285.44L954.517 1282.55H956.631Z"
        fill="#A9448C"
        id="path1304"
      />
      <path
        d="M930.943 1212.55V1230H928.83V1214.76H928.727L924.466 1217.59V1215.44L928.83 1212.55H930.943ZM935.963 1230V1228.47L941.724 1222.16C942.401 1221.42 942.957 1220.78 943.395 1220.23C943.832 1219.68 944.156 1219.16 944.366 1218.68C944.582 1218.19 944.69 1217.68 944.69 1217.15C944.69 1216.53 944.543 1216 944.247 1215.55C943.957 1215.11 943.56 1214.76 943.054 1214.51C942.548 1214.27 941.98 1214.15 941.349 1214.15C940.679 1214.15 940.094 1214.29 939.594 1214.57C939.099 1214.84 938.716 1215.22 938.443 1215.72C938.176 1216.21 938.043 1216.79 938.043 1217.45H936.031C936.031 1216.43 936.267 1215.53 936.739 1214.76C937.21 1213.99 937.852 1213.39 938.665 1212.95C939.483 1212.52 940.401 1212.31 941.418 1212.31C942.44 1212.31 943.347 1212.52 944.136 1212.95C944.926 1213.39 945.545 1213.97 945.994 1214.7C946.443 1215.43 946.668 1216.25 946.668 1217.15C946.668 1217.79 946.551 1218.42 946.318 1219.03C946.091 1219.64 945.693 1220.32 945.125 1221.07C944.562 1221.81 943.781 1222.72 942.781 1223.8L938.861 1227.99V1228.12H946.974V1230H935.963ZM950.494 1230V1228.47L956.256 1222.16C956.932 1221.42 957.489 1220.78 957.926 1220.23C958.364 1219.68 958.688 1219.16 958.898 1218.68C959.114 1218.19 959.222 1217.68 959.222 1217.15C959.222 1216.53 959.074 1216 958.778 1215.55C958.489 1215.11 958.091 1214.76 957.585 1214.51C957.08 1214.27 956.511 1214.15 955.881 1214.15C955.21 1214.15 954.625 1214.29 954.125 1214.57C953.631 1214.84 953.247 1215.22 952.974 1215.72C952.707 1216.21 952.574 1216.79 952.574 1217.45H950.562C950.562 1216.43 950.798 1215.53 951.27 1214.76C951.741 1213.99 952.384 1213.39 953.196 1212.95C954.014 1212.52 954.932 1212.31 955.949 1212.31C956.972 1212.31 957.878 1212.52 958.668 1212.95C959.457 1213.39 960.077 1213.97 960.526 1214.7C960.974 1215.43 961.199 1216.25 961.199 1217.15C961.199 1217.79 961.082 1218.42 960.849 1219.03C960.622 1219.64 960.224 1220.32 959.656 1221.07C959.094 1221.81 958.312 1222.72 957.312 1223.8L953.392 1227.99V1228.12H961.506V1230H950.494Z"
        fill="#A9448C"
        id="path1306"
      />
      <path
        d="M930.943 1142.55V1160H928.83V1144.76H928.727L924.466 1147.59V1145.44L928.83 1142.55H930.943ZM935.963 1160V1158.47L941.724 1152.16C942.401 1151.42 942.957 1150.78 943.395 1150.23C943.832 1149.68 944.156 1149.16 944.366 1148.68C944.582 1148.19 944.69 1147.68 944.69 1147.15C944.69 1146.53 944.543 1146 944.247 1145.55C943.957 1145.11 943.56 1144.76 943.054 1144.51C942.548 1144.27 941.98 1144.15 941.349 1144.15C940.679 1144.15 940.094 1144.29 939.594 1144.57C939.099 1144.84 938.716 1145.22 938.443 1145.72C938.176 1146.21 938.043 1146.79 938.043 1147.45H936.031C936.031 1146.43 936.267 1145.53 936.739 1144.76C937.21 1143.99 937.852 1143.39 938.665 1142.95C939.483 1142.52 940.401 1142.31 941.418 1142.31C942.44 1142.31 943.347 1142.52 944.136 1142.95C944.926 1143.39 945.545 1143.97 945.994 1144.7C946.443 1145.43 946.668 1146.25 946.668 1147.15C946.668 1147.79 946.551 1148.42 946.318 1149.03C946.091 1149.64 945.693 1150.32 945.125 1151.07C944.562 1151.81 943.781 1152.72 942.781 1153.8L938.861 1157.99V1158.12H946.974V1160H935.963ZM956.392 1160.24C955.267 1160.24 954.264 1160.05 953.384 1159.66C952.509 1159.27 951.813 1158.74 951.295 1158.05C950.784 1157.36 950.506 1156.55 950.46 1155.64H952.608C952.653 1156.2 952.847 1156.68 953.188 1157.09C953.528 1157.5 953.974 1157.81 954.526 1158.03C955.077 1158.25 955.688 1158.36 956.358 1158.36C957.108 1158.36 957.773 1158.23 958.352 1157.97C958.932 1157.71 959.386 1157.35 959.716 1156.88C960.045 1156.41 960.21 1155.88 960.21 1155.26C960.21 1154.62 960.051 1154.05 959.733 1153.57C959.415 1153.07 958.949 1152.68 958.335 1152.41C957.722 1152.13 956.972 1151.99 956.085 1151.99H954.688V1150.11H956.085C956.778 1150.11 957.386 1149.99 957.909 1149.74C958.438 1149.49 958.849 1149.14 959.145 1148.68C959.446 1148.23 959.597 1147.69 959.597 1147.08C959.597 1146.49 959.466 1145.97 959.205 1145.54C958.943 1145.1 958.574 1144.76 958.097 1144.51C957.625 1144.27 957.068 1144.15 956.426 1144.15C955.824 1144.15 955.256 1144.26 954.722 1144.48C954.193 1144.7 953.761 1145.01 953.426 1145.43C953.091 1145.84 952.909 1146.33 952.881 1146.91H950.835C950.869 1145.99 951.145 1145.19 951.662 1144.51C952.179 1143.81 952.855 1143.27 953.69 1142.89C954.531 1142.5 955.455 1142.31 956.46 1142.31C957.54 1142.31 958.466 1142.53 959.239 1142.96C960.011 1143.39 960.605 1143.97 961.02 1144.68C961.435 1145.39 961.642 1146.15 961.642 1146.98C961.642 1147.96 961.384 1148.8 960.866 1149.49C960.355 1150.18 959.659 1150.66 958.778 1150.93V1151.07C959.881 1151.25 960.741 1151.72 961.361 1152.47C961.98 1153.22 962.29 1154.15 962.29 1155.26C962.29 1156.21 962.031 1157.06 961.514 1157.82C961.003 1158.57 960.304 1159.16 959.418 1159.59C958.531 1160.02 957.523 1160.24 956.392 1160.24Z"
        fill="#A9448C"
        id="path1308"
      />
      <path
        d="M930.943 1072.55V1090H928.83V1074.76H928.727L924.466 1077.59V1075.44L928.83 1072.55H930.943ZM935.963 1090V1088.47L941.724 1082.16C942.401 1081.42 942.957 1080.78 943.395 1080.23C943.832 1079.68 944.156 1079.16 944.366 1078.68C944.582 1078.19 944.69 1077.68 944.69 1077.15C944.69 1076.53 944.543 1076 944.247 1075.55C943.957 1075.11 943.56 1074.76 943.054 1074.51C942.548 1074.27 941.98 1074.15 941.349 1074.15C940.679 1074.15 940.094 1074.29 939.594 1074.57C939.099 1074.84 938.716 1075.22 938.443 1075.72C938.176 1076.21 938.043 1076.79 938.043 1077.45H936.031C936.031 1076.43 936.267 1075.53 936.739 1074.76C937.21 1073.99 937.852 1073.39 938.665 1072.95C939.483 1072.52 940.401 1072.31 941.418 1072.31C942.44 1072.31 943.347 1072.52 944.136 1072.95C944.926 1073.39 945.545 1073.97 945.994 1074.7C946.443 1075.43 946.668 1076.25 946.668 1077.15C946.668 1077.79 946.551 1078.42 946.318 1079.03C946.091 1079.64 945.693 1080.32 945.125 1081.07C944.562 1081.81 943.781 1082.72 942.781 1083.8L938.861 1087.99V1088.12H946.974V1090H935.963ZM949.71 1086.42V1084.68L957.381 1072.55H958.642V1075.24H957.79L951.994 1084.41V1084.55H962.324V1086.42H949.71ZM957.926 1090V1085.89V1085.08V1072.55H959.938V1090H957.926Z"
        fill="#A9448C"
        id="path1310"
      />
      <path
        d="M930.943 1002.55V1020H928.83V1004.76H928.727L924.466 1007.59V1005.44L928.83 1002.55H930.943ZM935.963 1020V1018.47L941.724 1012.16C942.401 1011.42 942.957 1010.78 943.395 1010.23C943.832 1009.68 944.156 1009.16 944.366 1008.68C944.582 1008.19 944.69 1007.68 944.69 1007.15C944.69 1006.53 944.543 1006 944.247 1005.55C943.957 1005.11 943.56 1004.76 943.054 1004.51C942.548 1004.27 941.98 1004.15 941.349 1004.15C940.679 1004.15 940.094 1004.29 939.594 1004.57C939.099 1004.84 938.716 1005.22 938.443 1005.72C938.176 1006.21 938.043 1006.79 938.043 1007.45H936.031C936.031 1006.43 936.267 1005.53 936.739 1004.76C937.21 1003.99 937.852 1003.39 938.665 1002.95C939.483 1002.52 940.401 1002.31 941.418 1002.31C942.44 1002.31 943.347 1002.52 944.136 1002.95C944.926 1003.39 945.545 1003.97 945.994 1004.7C946.443 1005.43 946.668 1006.25 946.668 1007.15C946.668 1007.79 946.551 1008.42 946.318 1009.03C946.091 1009.64 945.693 1010.32 945.125 1011.07C944.562 1011.81 943.781 1012.72 942.781 1013.8L938.861 1017.99V1018.12H946.974V1020H935.963ZM955.949 1020.24C954.949 1020.24 954.048 1020.04 953.247 1019.64C952.446 1019.24 951.804 1018.7 951.321 1018.01C950.838 1017.31 950.574 1016.52 950.528 1015.64H952.574C952.653 1016.43 953.011 1017.08 953.648 1017.6C954.29 1018.11 955.057 1018.36 955.949 1018.36C956.665 1018.36 957.301 1018.2 957.858 1017.86C958.42 1017.53 958.861 1017.07 959.179 1016.48C959.503 1015.89 959.665 1015.22 959.665 1014.48C959.665 1013.72 959.497 1013.04 959.162 1012.44C958.832 1011.84 958.378 1011.36 957.798 1011.02C957.219 1010.67 956.557 1010.49 955.812 1010.49C955.278 1010.48 954.73 1010.57 954.168 1010.74C953.605 1010.9 953.142 1011.11 952.778 1011.38L950.801 1011.14L951.858 1002.55H960.926V1004.42H953.631L953.017 1009.57H953.119C953.477 1009.28 953.926 1009.05 954.466 1008.86C955.006 1008.67 955.568 1008.58 956.153 1008.58C957.222 1008.58 958.173 1008.84 959.009 1009.35C959.849 1009.85 960.509 1010.55 960.986 1011.43C961.469 1012.31 961.71 1013.31 961.71 1014.44C961.71 1015.56 961.46 1016.55 960.96 1017.43C960.466 1018.3 959.784 1018.98 958.915 1019.49C958.045 1019.99 957.057 1020.24 955.949 1020.24Z"
        fill="#A9448C"
        id="path1312"
      />
      <path
        d="M930.943 932.545V950H928.83V934.761H928.727L924.466 937.591V935.443L928.83 932.545H930.943ZM935.963 950V948.466L941.724 942.159C942.401 941.42 942.957 940.778 943.395 940.233C943.832 939.682 944.156 939.165 944.366 938.682C944.582 938.193 944.69 937.682 944.69 937.148C944.69 936.534 944.543 936.003 944.247 935.554C943.957 935.105 943.56 934.759 943.054 934.514C942.548 934.27 941.98 934.148 941.349 934.148C940.679 934.148 940.094 934.287 939.594 934.565C939.099 934.838 938.716 935.222 938.443 935.716C938.176 936.21 938.043 936.79 938.043 937.455H936.031C936.031 936.432 936.267 935.534 936.739 934.761C937.21 933.989 937.852 933.386 938.665 932.955C939.483 932.523 940.401 932.307 941.418 932.307C942.44 932.307 943.347 932.523 944.136 932.955C944.926 933.386 945.545 933.969 945.994 934.702C946.443 935.435 946.668 936.25 946.668 937.148C946.668 937.79 946.551 938.418 946.318 939.031C946.091 939.639 945.693 940.318 945.125 941.068C944.562 941.812 943.781 942.722 942.781 943.795L938.861 947.989V948.125H946.974V950H935.963ZM956.29 950.239C955.574 950.227 954.858 950.091 954.142 949.83C953.426 949.568 952.773 949.128 952.182 948.509C951.591 947.884 951.116 947.04 950.759 945.977C950.401 944.909 950.222 943.568 950.222 941.955C950.222 940.409 950.366 939.04 950.656 937.847C950.946 936.648 951.366 935.639 951.918 934.821C952.469 933.997 953.134 933.372 953.912 932.946C954.696 932.52 955.58 932.307 956.562 932.307C957.54 932.307 958.409 932.503 959.17 932.895C959.938 933.281 960.563 933.821 961.045 934.514C961.528 935.207 961.841 936.006 961.983 936.909H959.903C959.71 936.125 959.335 935.474 958.778 934.957C958.222 934.44 957.483 934.182 956.562 934.182C955.21 934.182 954.145 934.77 953.366 935.946C952.594 937.122 952.205 938.773 952.199 940.898H952.335C952.653 940.415 953.031 940.003 953.469 939.662C953.912 939.315 954.401 939.048 954.935 938.861C955.469 938.673 956.034 938.58 956.631 938.58C957.631 938.58 958.545 938.83 959.375 939.33C960.205 939.824 960.869 940.509 961.369 941.384C961.869 942.253 962.119 943.25 962.119 944.375C962.119 945.455 961.878 946.443 961.395 947.341C960.912 948.233 960.233 948.943 959.358 949.472C958.489 949.994 957.466 950.25 956.29 950.239ZM956.29 948.364C957.006 948.364 957.648 948.185 958.216 947.827C958.79 947.469 959.241 946.989 959.571 946.386C959.906 945.784 960.074 945.114 960.074 944.375C960.074 943.653 959.912 942.997 959.588 942.406C959.27 941.81 958.83 941.335 958.267 940.983C957.71 940.631 957.074 940.455 956.358 940.455C955.818 940.455 955.315 940.562 954.849 940.778C954.384 940.989 953.974 941.278 953.622 941.648C953.276 942.017 953.003 942.44 952.804 942.918C952.605 943.389 952.506 943.886 952.506 944.409C952.506 945.102 952.668 945.75 952.991 946.352C953.321 946.955 953.77 947.44 954.338 947.81C954.912 948.179 955.562 948.364 956.29 948.364Z"
        fill="#A9448C"
        id="path1314"
      />
      <path
        d="M930.943 862.545V880H928.83V864.761H928.727L924.466 867.591V865.443L928.83 862.545H930.943ZM935.963 880V878.466L941.724 872.159C942.401 871.42 942.957 870.778 943.395 870.233C943.832 869.682 944.156 869.165 944.366 868.682C944.582 868.193 944.69 867.682 944.69 867.148C944.69 866.534 944.543 866.003 944.247 865.554C943.957 865.105 943.56 864.759 943.054 864.514C942.548 864.27 941.98 864.148 941.349 864.148C940.679 864.148 940.094 864.287 939.594 864.565C939.099 864.838 938.716 865.222 938.443 865.716C938.176 866.21 938.043 866.79 938.043 867.455H936.031C936.031 866.432 936.267 865.534 936.739 864.761C937.21 863.989 937.852 863.386 938.665 862.955C939.483 862.523 940.401 862.307 941.418 862.307C942.44 862.307 943.347 862.523 944.136 862.955C944.926 863.386 945.545 863.969 945.994 864.702C946.443 865.435 946.668 866.25 946.668 867.148C946.668 867.79 946.551 868.418 946.318 869.031C946.091 869.639 945.693 870.318 945.125 871.068C944.562 871.812 943.781 872.722 942.781 873.795L938.861 877.989V878.125H946.974V880H935.963ZM951.04 880L958.847 864.557V864.42H949.847V862.545H961.028V864.523L953.256 880H951.04Z"
        fill="#A9448C"
        id="path1316"
      />
      <path
        d="M930.943 792.545V810H928.83V794.761H928.727L924.466 797.591V795.443L928.83 792.545H930.943ZM935.963 810V808.466L941.724 802.159C942.401 801.42 942.957 800.778 943.395 800.233C943.832 799.682 944.156 799.165 944.366 798.682C944.582 798.193 944.69 797.682 944.69 797.148C944.69 796.534 944.543 796.003 944.247 795.554C943.957 795.105 943.56 794.759 943.054 794.514C942.548 794.27 941.98 794.148 941.349 794.148C940.679 794.148 940.094 794.287 939.594 794.565C939.099 794.838 938.716 795.222 938.443 795.716C938.176 796.21 938.043 796.79 938.043 797.455H936.031C936.031 796.432 936.267 795.534 936.739 794.761C937.21 793.989 937.852 793.386 938.665 792.955C939.483 792.523 940.401 792.307 941.418 792.307C942.44 792.307 943.347 792.523 944.136 792.955C944.926 793.386 945.545 793.969 945.994 794.702C946.443 795.435 946.668 796.25 946.668 797.148C946.668 797.79 946.551 798.418 946.318 799.031C946.091 799.639 945.693 800.318 945.125 801.068C944.562 801.812 943.781 802.722 942.781 803.795L938.861 807.989V808.125H946.974V810H935.963ZM956.085 810.239C954.915 810.239 953.881 810.031 952.983 809.616C952.091 809.196 951.395 808.619 950.895 807.886C950.395 807.148 950.148 806.307 950.153 805.364C950.148 804.625 950.293 803.943 950.588 803.318C950.884 802.687 951.287 802.162 951.798 801.741C952.315 801.315 952.892 801.045 953.528 800.932V800.83C952.693 800.614 952.028 800.145 951.534 799.423C951.04 798.696 950.795 797.869 950.801 796.943C950.795 796.057 951.02 795.264 951.474 794.565C951.929 793.866 952.554 793.315 953.349 792.912C954.151 792.509 955.063 792.307 956.085 792.307C957.097 792.307 958 792.509 958.795 792.912C959.591 793.315 960.216 793.866 960.67 794.565C961.131 795.264 961.364 796.057 961.369 796.943C961.364 797.869 961.111 798.696 960.611 799.423C960.116 800.145 959.46 800.614 958.642 800.83V800.932C959.273 801.045 959.841 801.315 960.347 801.741C960.852 802.162 961.256 802.687 961.557 803.318C961.858 803.943 962.011 804.625 962.017 805.364C962.011 806.307 961.756 807.148 961.25 807.886C960.75 808.619 960.054 809.196 959.162 809.616C958.276 810.031 957.25 810.239 956.085 810.239ZM956.085 808.364C956.875 808.364 957.557 808.236 958.131 807.98C958.705 807.724 959.148 807.364 959.46 806.898C959.773 806.432 959.932 805.886 959.938 805.261C959.932 804.602 959.761 804.02 959.426 803.514C959.091 803.009 958.634 802.611 958.054 802.321C957.48 802.031 956.824 801.886 956.085 801.886C955.341 801.886 954.676 802.031 954.091 802.321C953.511 802.611 953.054 803.009 952.719 803.514C952.389 804.02 952.227 804.602 952.233 805.261C952.227 805.886 952.378 806.432 952.685 806.898C952.997 807.364 953.443 807.724 954.023 807.98C954.602 808.236 955.29 808.364 956.085 808.364ZM956.085 800.08C956.71 800.08 957.264 799.955 957.747 799.705C958.236 799.455 958.619 799.105 958.898 798.656C959.176 798.207 959.318 797.682 959.324 797.08C959.318 796.489 959.179 795.974 958.906 795.537C958.634 795.094 958.256 794.753 957.773 794.514C957.29 794.27 956.727 794.148 956.085 794.148C955.432 794.148 954.861 794.27 954.372 794.514C953.884 794.753 953.506 795.094 953.239 795.537C952.972 795.974 952.841 796.489 952.847 797.08C952.841 797.682 952.974 798.207 953.247 798.656C953.526 799.105 953.909 799.455 954.398 799.705C954.886 799.955 955.449 800.08 956.085 800.08Z"
        fill="#A9448C"
        id="path1318"
      />
      <path
        d="M930.943 722.545V740H928.83V724.761H928.727L924.466 727.591V725.443L928.83 722.545H930.943ZM935.963 740V738.466L941.724 732.159C942.401 731.42 942.957 730.778 943.395 730.233C943.832 729.682 944.156 729.165 944.366 728.682C944.582 728.193 944.69 727.682 944.69 727.148C944.69 726.534 944.543 726.003 944.247 725.554C943.957 725.105 943.56 724.759 943.054 724.514C942.548 724.27 941.98 724.148 941.349 724.148C940.679 724.148 940.094 724.287 939.594 724.565C939.099 724.838 938.716 725.222 938.443 725.716C938.176 726.21 938.043 726.79 938.043 727.455H936.031C936.031 726.432 936.267 725.534 936.739 724.761C937.21 723.989 937.852 723.386 938.665 722.955C939.483 722.523 940.401 722.307 941.418 722.307C942.44 722.307 943.347 722.523 944.136 722.955C944.926 723.386 945.545 723.969 945.994 724.702C946.443 725.435 946.668 726.25 946.668 727.148C946.668 727.79 946.551 728.418 946.318 729.031C946.091 729.639 945.693 730.318 945.125 731.068C944.562 731.812 943.781 732.722 942.781 733.795L938.861 737.989V738.125H946.974V740H935.963ZM956.051 722.307C956.767 722.312 957.483 722.449 958.199 722.716C958.915 722.983 959.568 723.426 960.159 724.045C960.75 724.659 961.224 725.497 961.582 726.56C961.94 727.622 962.119 728.955 962.119 730.557C962.119 732.108 961.972 733.486 961.676 734.69C961.386 735.889 960.966 736.901 960.415 737.724C959.869 738.548 959.205 739.173 958.42 739.599C957.642 740.026 956.761 740.239 955.778 740.239C954.801 740.239 953.929 740.045 953.162 739.659C952.401 739.267 951.776 738.724 951.287 738.031C950.804 737.332 950.494 736.523 950.358 735.602H952.438C952.625 736.403 952.997 737.065 953.554 737.588C954.116 738.105 954.858 738.364 955.778 738.364C957.125 738.364 958.188 737.776 958.966 736.599C959.75 735.423 960.142 733.761 960.142 731.614H960.006C959.688 732.091 959.31 732.503 958.872 732.849C958.435 733.196 957.949 733.463 957.415 733.651C956.881 733.838 956.313 733.932 955.71 733.932C954.71 733.932 953.793 733.685 952.957 733.19C952.128 732.69 951.463 732.006 950.963 731.136C950.469 730.261 950.222 729.261 950.222 728.136C950.222 727.068 950.46 726.091 950.938 725.205C951.42 724.312 952.097 723.602 952.966 723.074C953.841 722.545 954.869 722.29 956.051 722.307ZM956.051 724.182C955.335 724.182 954.69 724.361 954.116 724.719C953.548 725.071 953.097 725.548 952.761 726.151C952.432 726.747 952.267 727.409 952.267 728.136C952.267 728.864 952.426 729.526 952.744 730.122C953.068 730.713 953.509 731.185 954.065 731.537C954.628 731.884 955.267 732.057 955.983 732.057C956.523 732.057 957.026 731.952 957.491 731.741C957.957 731.526 958.364 731.233 958.71 730.864C959.063 730.489 959.338 730.065 959.537 729.594C959.736 729.116 959.835 728.619 959.835 728.102C959.835 727.42 959.67 726.781 959.341 726.185C959.017 725.588 958.568 725.105 957.994 724.736C957.426 724.366 956.778 724.182 956.051 724.182Z"
        fill="#A9448C"
        id="path1320"
      />
      <path
        d="M933.943 503.545V521H931.83V505.761H931.727L927.466 508.591V506.443L931.83 503.545H933.943ZM944.861 521.239C943.736 521.239 942.733 521.045 941.852 520.659C940.977 520.273 940.281 519.736 939.764 519.048C939.253 518.355 938.974 517.551 938.929 516.636H941.077C941.122 517.199 941.315 517.685 941.656 518.094C941.997 518.497 942.443 518.81 942.994 519.031C943.545 519.253 944.156 519.364 944.827 519.364C945.577 519.364 946.241 519.233 946.821 518.972C947.401 518.71 947.855 518.347 948.185 517.881C948.514 517.415 948.679 516.875 948.679 516.261C948.679 515.619 948.52 515.054 948.202 514.565C947.884 514.071 947.418 513.685 946.804 513.406C946.19 513.128 945.44 512.989 944.554 512.989H943.156V511.114H944.554C945.247 511.114 945.855 510.989 946.378 510.739C946.906 510.489 947.318 510.136 947.614 509.682C947.915 509.227 948.065 508.693 948.065 508.08C948.065 507.489 947.935 506.974 947.673 506.537C947.412 506.099 947.043 505.759 946.565 505.514C946.094 505.27 945.537 505.148 944.895 505.148C944.293 505.148 943.724 505.259 943.19 505.48C942.662 505.696 942.23 506.011 941.895 506.426C941.56 506.835 941.378 507.33 941.349 507.909H939.304C939.338 506.994 939.614 506.193 940.131 505.506C940.648 504.812 941.324 504.273 942.159 503.886C943 503.5 943.923 503.307 944.929 503.307C946.009 503.307 946.935 503.526 947.707 503.963C948.48 504.395 949.074 504.966 949.489 505.676C949.903 506.386 950.111 507.153 950.111 507.977C950.111 508.96 949.852 509.798 949.335 510.491C948.824 511.185 948.128 511.665 947.247 511.932V512.068C948.349 512.25 949.21 512.719 949.83 513.474C950.449 514.224 950.759 515.153 950.759 516.261C950.759 517.21 950.5 518.062 949.983 518.818C949.472 519.568 948.773 520.159 947.886 520.591C947 521.023 945.991 521.239 944.861 521.239ZM959.938 521.239C958.653 521.239 957.56 520.889 956.656 520.19C955.753 519.486 955.063 518.466 954.585 517.131C954.108 515.79 953.869 514.17 953.869 512.273C953.869 510.386 954.108 508.776 954.585 507.44C955.068 506.099 955.761 505.077 956.665 504.372C957.574 503.662 958.665 503.307 959.938 503.307C961.21 503.307 962.298 503.662 963.202 504.372C964.111 505.077 964.804 506.099 965.281 507.44C965.764 508.776 966.006 510.386 966.006 512.273C966.006 514.17 965.767 515.79 965.29 517.131C964.812 518.466 964.122 519.486 963.219 520.19C962.315 520.889 961.222 521.239 959.938 521.239ZM959.938 519.364C961.21 519.364 962.199 518.75 962.903 517.523C963.608 516.295 963.96 514.545 963.96 512.273C963.96 510.761 963.798 509.474 963.474 508.412C963.156 507.349 962.696 506.54 962.094 505.983C961.497 505.426 960.778 505.148 959.938 505.148C958.676 505.148 957.69 505.77 956.98 507.014C956.27 508.253 955.915 510.006 955.915 512.273C955.915 513.784 956.074 515.068 956.392 516.125C956.71 517.182 957.168 517.986 957.764 518.537C958.366 519.088 959.091 519.364 959.938 519.364Z"
        fill="#A9448C"
        id="path1322"
      />
      <path
        d="M933.943 438.545V456H931.83V440.761H931.727L927.466 443.591V441.443L931.83 438.545H933.943ZM944.861 456.239C943.736 456.239 942.733 456.045 941.852 455.659C940.977 455.273 940.281 454.736 939.764 454.048C939.253 453.355 938.974 452.551 938.929 451.636H941.077C941.122 452.199 941.315 452.685 941.656 453.094C941.997 453.497 942.443 453.81 942.994 454.031C943.545 454.253 944.156 454.364 944.827 454.364C945.577 454.364 946.241 454.233 946.821 453.972C947.401 453.71 947.855 453.347 948.185 452.881C948.514 452.415 948.679 451.875 948.679 451.261C948.679 450.619 948.52 450.054 948.202 449.565C947.884 449.071 947.418 448.685 946.804 448.406C946.19 448.128 945.44 447.989 944.554 447.989H943.156V446.114H944.554C945.247 446.114 945.855 445.989 946.378 445.739C946.906 445.489 947.318 445.136 947.614 444.682C947.915 444.227 948.065 443.693 948.065 443.08C948.065 442.489 947.935 441.974 947.673 441.537C947.412 441.099 947.043 440.759 946.565 440.514C946.094 440.27 945.537 440.148 944.895 440.148C944.293 440.148 943.724 440.259 943.19 440.48C942.662 440.696 942.23 441.011 941.895 441.426C941.56 441.835 941.378 442.33 941.349 442.909H939.304C939.338 441.994 939.614 441.193 940.131 440.506C940.648 439.812 941.324 439.273 942.159 438.886C943 438.5 943.923 438.307 944.929 438.307C946.009 438.307 946.935 438.526 947.707 438.963C948.48 439.395 949.074 439.966 949.489 440.676C949.903 441.386 950.111 442.153 950.111 442.977C950.111 443.96 949.852 444.798 949.335 445.491C948.824 446.185 948.128 446.665 947.247 446.932V447.068C948.349 447.25 949.21 447.719 949.83 448.474C950.449 449.224 950.759 450.153 950.759 451.261C950.759 452.21 950.5 453.062 949.983 453.818C949.472 454.568 948.773 455.159 947.886 455.591C947 456.023 945.991 456.239 944.861 456.239ZM960.381 438.545V456H958.267V440.761H958.165L953.903 443.591V441.443L958.267 438.545H960.381Z"
        fill="#A9448C"
        id="path1324"
      />
      <path
        d="M933.943 373.545V391H931.83V375.761H931.727L927.466 378.591V376.443L931.83 373.545H933.943ZM944.861 391.239C943.736 391.239 942.733 391.045 941.852 390.659C940.977 390.273 940.281 389.736 939.764 389.048C939.253 388.355 938.974 387.551 938.929 386.636H941.077C941.122 387.199 941.315 387.685 941.656 388.094C941.997 388.497 942.443 388.81 942.994 389.031C943.545 389.253 944.156 389.364 944.827 389.364C945.577 389.364 946.241 389.233 946.821 388.972C947.401 388.71 947.855 388.347 948.185 387.881C948.514 387.415 948.679 386.875 948.679 386.261C948.679 385.619 948.52 385.054 948.202 384.565C947.884 384.071 947.418 383.685 946.804 383.406C946.19 383.128 945.44 382.989 944.554 382.989H943.156V381.114H944.554C945.247 381.114 945.855 380.989 946.378 380.739C946.906 380.489 947.318 380.136 947.614 379.682C947.915 379.227 948.065 378.693 948.065 378.08C948.065 377.489 947.935 376.974 947.673 376.537C947.412 376.099 947.043 375.759 946.565 375.514C946.094 375.27 945.537 375.148 944.895 375.148C944.293 375.148 943.724 375.259 943.19 375.48C942.662 375.696 942.23 376.011 941.895 376.426C941.56 376.835 941.378 377.33 941.349 377.909H939.304C939.338 376.994 939.614 376.193 940.131 375.506C940.648 374.812 941.324 374.273 942.159 373.886C943 373.5 943.923 373.307 944.929 373.307C946.009 373.307 946.935 373.526 947.707 373.963C948.48 374.395 949.074 374.966 949.489 375.676C949.903 376.386 950.111 377.153 950.111 377.977C950.111 378.96 949.852 379.798 949.335 380.491C948.824 381.185 948.128 381.665 947.247 381.932V382.068C948.349 382.25 949.21 382.719 949.83 383.474C950.449 384.224 950.759 385.153 950.759 386.261C950.759 387.21 950.5 388.062 949.983 388.818C949.472 389.568 948.773 390.159 947.886 390.591C947 391.023 945.991 391.239 944.861 391.239ZM954.244 391V389.466L960.006 383.159C960.682 382.42 961.239 381.778 961.676 381.233C962.114 380.682 962.438 380.165 962.648 379.682C962.864 379.193 962.972 378.682 962.972 378.148C962.972 377.534 962.824 377.003 962.528 376.554C962.239 376.105 961.841 375.759 961.335 375.514C960.83 375.27 960.261 375.148 959.631 375.148C958.96 375.148 958.375 375.287 957.875 375.565C957.381 375.838 956.997 376.222 956.724 376.716C956.457 377.21 956.324 377.79 956.324 378.455H954.312C954.312 377.432 954.548 376.534 955.02 375.761C955.491 374.989 956.134 374.386 956.946 373.955C957.764 373.523 958.682 373.307 959.699 373.307C960.722 373.307 961.628 373.523 962.418 373.955C963.207 374.386 963.827 374.969 964.276 375.702C964.724 376.435 964.949 377.25 964.949 378.148C964.949 378.79 964.832 379.418 964.599 380.031C964.372 380.639 963.974 381.318 963.406 382.068C962.844 382.812 962.062 383.722 961.062 384.795L957.142 388.989V389.125H965.256V391H954.244Z"
        fill="#A9448C"
        id="path1326"
      />
      <path
        d="M933.943 308.545V326H931.83V310.761H931.727L927.466 313.591V311.443L931.83 308.545H933.943ZM944.861 326.239C943.736 326.239 942.733 326.045 941.852 325.659C940.977 325.273 940.281 324.736 939.764 324.048C939.253 323.355 938.974 322.551 938.929 321.636H941.077C941.122 322.199 941.315 322.685 941.656 323.094C941.997 323.497 942.443 323.81 942.994 324.031C943.545 324.253 944.156 324.364 944.827 324.364C945.577 324.364 946.241 324.233 946.821 323.972C947.401 323.71 947.855 323.347 948.185 322.881C948.514 322.415 948.679 321.875 948.679 321.261C948.679 320.619 948.52 320.054 948.202 319.565C947.884 319.071 947.418 318.685 946.804 318.406C946.19 318.128 945.44 317.989 944.554 317.989H943.156V316.114H944.554C945.247 316.114 945.855 315.989 946.378 315.739C946.906 315.489 947.318 315.136 947.614 314.682C947.915 314.227 948.065 313.693 948.065 313.08C948.065 312.489 947.935 311.974 947.673 311.537C947.412 311.099 947.043 310.759 946.565 310.514C946.094 310.27 945.537 310.148 944.895 310.148C944.293 310.148 943.724 310.259 943.19 310.48C942.662 310.696 942.23 311.011 941.895 311.426C941.56 311.835 941.378 312.33 941.349 312.909H939.304C939.338 311.994 939.614 311.193 940.131 310.506C940.648 309.812 941.324 309.273 942.159 308.886C943 308.5 943.923 308.307 944.929 308.307C946.009 308.307 946.935 308.526 947.707 308.963C948.48 309.395 949.074 309.966 949.489 310.676C949.903 311.386 950.111 312.153 950.111 312.977C950.111 313.96 949.852 314.798 949.335 315.491C948.824 316.185 948.128 316.665 947.247 316.932V317.068C948.349 317.25 949.21 317.719 949.83 318.474C950.449 319.224 950.759 320.153 950.759 321.261C950.759 322.21 950.5 323.062 949.983 323.818C949.472 324.568 948.773 325.159 947.886 325.591C947 326.023 945.991 326.239 944.861 326.239ZM960.142 326.239C959.017 326.239 958.014 326.045 957.134 325.659C956.259 325.273 955.563 324.736 955.045 324.048C954.534 323.355 954.256 322.551 954.21 321.636H956.358C956.403 322.199 956.597 322.685 956.938 323.094C957.278 323.497 957.724 323.81 958.276 324.031C958.827 324.253 959.438 324.364 960.108 324.364C960.858 324.364 961.523 324.233 962.102 323.972C962.682 323.71 963.136 323.347 963.466 322.881C963.795 322.415 963.96 321.875 963.96 321.261C963.96 320.619 963.801 320.054 963.483 319.565C963.165 319.071 962.699 318.685 962.085 318.406C961.472 318.128 960.722 317.989 959.835 317.989H958.438V316.114H959.835C960.528 316.114 961.136 315.989 961.659 315.739C962.188 315.489 962.599 315.136 962.895 314.682C963.196 314.227 963.347 313.693 963.347 313.08C963.347 312.489 963.216 311.974 962.955 311.537C962.693 311.099 962.324 310.759 961.847 310.514C961.375 310.27 960.818 310.148 960.176 310.148C959.574 310.148 959.006 310.259 958.472 310.48C957.943 310.696 957.511 311.011 957.176 311.426C956.841 311.835 956.659 312.33 956.631 312.909H954.585C954.619 311.994 954.895 311.193 955.412 310.506C955.929 309.812 956.605 309.273 957.44 308.886C958.281 308.5 959.205 308.307 960.21 308.307C961.29 308.307 962.216 308.526 962.989 308.963C963.761 309.395 964.355 309.966 964.77 310.676C965.185 311.386 965.392 312.153 965.392 312.977C965.392 313.96 965.134 314.798 964.616 315.491C964.105 316.185 963.409 316.665 962.528 316.932V317.068C963.631 317.25 964.491 317.719 965.111 318.474C965.73 319.224 966.04 320.153 966.04 321.261C966.04 322.21 965.781 323.062 965.264 323.818C964.753 324.568 964.054 325.159 963.168 325.591C962.281 326.023 961.273 326.239 960.142 326.239Z"
        fill="#A9448C"
        id="path1328"
      />
      <path
        d="M933.943 243.545V261H931.83V245.761H931.727L927.466 248.591V246.443L931.83 243.545H933.943ZM944.861 261.239C943.736 261.239 942.733 261.045 941.852 260.659C940.977 260.273 940.281 259.736 939.764 259.048C939.253 258.355 938.974 257.551 938.929 256.636H941.077C941.122 257.199 941.315 257.685 941.656 258.094C941.997 258.497 942.443 258.81 942.994 259.031C943.545 259.253 944.156 259.364 944.827 259.364C945.577 259.364 946.241 259.233 946.821 258.972C947.401 258.71 947.855 258.347 948.185 257.881C948.514 257.415 948.679 256.875 948.679 256.261C948.679 255.619 948.52 255.054 948.202 254.565C947.884 254.071 947.418 253.685 946.804 253.406C946.19 253.128 945.44 252.989 944.554 252.989H943.156V251.114H944.554C945.247 251.114 945.855 250.989 946.378 250.739C946.906 250.489 947.318 250.136 947.614 249.682C947.915 249.227 948.065 248.693 948.065 248.08C948.065 247.489 947.935 246.974 947.673 246.537C947.412 246.099 947.043 245.759 946.565 245.514C946.094 245.27 945.537 245.148 944.895 245.148C944.293 245.148 943.724 245.259 943.19 245.48C942.662 245.696 942.23 246.011 941.895 246.426C941.56 246.835 941.378 247.33 941.349 247.909H939.304C939.338 246.994 939.614 246.193 940.131 245.506C940.648 244.812 941.324 244.273 942.159 243.886C943 243.5 943.923 243.307 944.929 243.307C946.009 243.307 946.935 243.526 947.707 243.963C948.48 244.395 949.074 244.966 949.489 245.676C949.903 246.386 950.111 247.153 950.111 247.977C950.111 248.96 949.852 249.798 949.335 250.491C948.824 251.185 948.128 251.665 947.247 251.932V252.068C948.349 252.25 949.21 252.719 949.83 253.474C950.449 254.224 950.759 255.153 950.759 256.261C950.759 257.21 950.5 258.062 949.983 258.818C949.472 259.568 948.773 260.159 947.886 260.591C947 261.023 945.991 261.239 944.861 261.239ZM953.835 257.42V255.682L961.506 243.545H962.767V246.239H961.915L956.119 255.409V255.545H966.449V257.42H953.835ZM962.051 261V256.892V256.082V243.545H964.062V261H962.051Z"
        fill="#A9448C"
        id="path1330"
      />
      <path
        d="M933.943 178.545V196H931.83V180.761H931.727L927.466 183.591V181.443L931.83 178.545H933.943ZM944.861 196.239C943.736 196.239 942.733 196.045 941.852 195.659C940.977 195.273 940.281 194.736 939.764 194.048C939.253 193.355 938.974 192.551 938.929 191.636H941.077C941.122 192.199 941.315 192.685 941.656 193.094C941.997 193.497 942.443 193.81 942.994 194.031C943.545 194.253 944.156 194.364 944.827 194.364C945.577 194.364 946.241 194.233 946.821 193.972C947.401 193.71 947.855 193.347 948.185 192.881C948.514 192.415 948.679 191.875 948.679 191.261C948.679 190.619 948.52 190.054 948.202 189.565C947.884 189.071 947.418 188.685 946.804 188.406C946.19 188.128 945.44 187.989 944.554 187.989H943.156V186.114H944.554C945.247 186.114 945.855 185.989 946.378 185.739C946.906 185.489 947.318 185.136 947.614 184.682C947.915 184.227 948.065 183.693 948.065 183.08C948.065 182.489 947.935 181.974 947.673 181.537C947.412 181.099 947.043 180.759 946.565 180.514C946.094 180.27 945.537 180.148 944.895 180.148C944.293 180.148 943.724 180.259 943.19 180.48C942.662 180.696 942.23 181.011 941.895 181.426C941.56 181.835 941.378 182.33 941.349 182.909H939.304C939.338 181.994 939.614 181.193 940.131 180.506C940.648 179.812 941.324 179.273 942.159 178.886C943 178.5 943.923 178.307 944.929 178.307C946.009 178.307 946.935 178.526 947.707 178.963C948.48 179.395 949.074 179.966 949.489 180.676C949.903 181.386 950.111 182.153 950.111 182.977C950.111 183.96 949.852 184.798 949.335 185.491C948.824 186.185 948.128 186.665 947.247 186.932V187.068C948.349 187.25 949.21 187.719 949.83 188.474C950.449 189.224 950.759 190.153 950.759 191.261C950.759 192.21 950.5 193.062 949.983 193.818C949.472 194.568 948.773 195.159 947.886 195.591C947 196.023 945.991 196.239 944.861 196.239ZM959.699 196.239C958.699 196.239 957.798 196.04 956.997 195.642C956.196 195.244 955.554 194.699 955.071 194.006C954.588 193.312 954.324 192.523 954.278 191.636H956.324C956.403 192.426 956.761 193.08 957.398 193.597C958.04 194.108 958.807 194.364 959.699 194.364C960.415 194.364 961.051 194.196 961.608 193.861C962.17 193.526 962.611 193.065 962.929 192.48C963.253 191.889 963.415 191.222 963.415 190.477C963.415 189.716 963.247 189.037 962.912 188.44C962.582 187.838 962.128 187.364 961.548 187.017C960.969 186.67 960.307 186.494 959.562 186.489C959.028 186.483 958.48 186.565 957.918 186.736C957.355 186.901 956.892 187.114 956.528 187.375L954.551 187.136L955.608 178.545H964.676V180.42H957.381L956.767 185.568H956.869C957.227 185.284 957.676 185.048 958.216 184.861C958.756 184.673 959.318 184.58 959.903 184.58C960.972 184.58 961.923 184.835 962.759 185.347C963.599 185.852 964.259 186.545 964.736 187.426C965.219 188.307 965.46 189.312 965.46 190.443C965.46 191.557 965.21 192.551 964.71 193.426C964.216 194.295 963.534 194.983 962.665 195.489C961.795 195.989 960.807 196.239 959.699 196.239Z"
        fill="#A9448C"
        id="path1332"
      />
      <path
        d="M821.943 180.545V198H819.83V182.761H819.727L815.466 185.591V183.443L819.83 180.545H821.943ZM832.861 198.239C831.736 198.239 830.733 198.045 829.852 197.659C828.977 197.273 828.281 196.736 827.764 196.048C827.253 195.355 826.974 194.551 826.929 193.636H829.077C829.122 194.199 829.315 194.685 829.656 195.094C829.997 195.497 830.443 195.81 830.994 196.031C831.545 196.253 832.156 196.364 832.827 196.364C833.577 196.364 834.241 196.233 834.821 195.972C835.401 195.71 835.855 195.347 836.185 194.881C836.514 194.415 836.679 193.875 836.679 193.261C836.679 192.619 836.52 192.054 836.202 191.565C835.884 191.071 835.418 190.685 834.804 190.406C834.19 190.128 833.44 189.989 832.554 189.989H831.156V188.114H832.554C833.247 188.114 833.855 187.989 834.378 187.739C834.906 187.489 835.318 187.136 835.614 186.682C835.915 186.227 836.065 185.693 836.065 185.08C836.065 184.489 835.935 183.974 835.673 183.537C835.412 183.099 835.043 182.759 834.565 182.514C834.094 182.27 833.537 182.148 832.895 182.148C832.293 182.148 831.724 182.259 831.19 182.48C830.662 182.696 830.23 183.011 829.895 183.426C829.56 183.835 829.378 184.33 829.349 184.909H827.304C827.338 183.994 827.614 183.193 828.131 182.506C828.648 181.812 829.324 181.273 830.159 180.886C831 180.5 831.923 180.307 832.929 180.307C834.009 180.307 834.935 180.526 835.707 180.963C836.48 181.395 837.074 181.966 837.489 182.676C837.903 183.386 838.111 184.153 838.111 184.977C838.111 185.96 837.852 186.798 837.335 187.491C836.824 188.185 836.128 188.665 835.247 188.932V189.068C836.349 189.25 837.21 189.719 837.83 190.474C838.449 191.224 838.759 192.153 838.759 193.261C838.759 194.21 838.5 195.062 837.983 195.818C837.472 196.568 836.773 197.159 835.886 197.591C835 198.023 833.991 198.239 832.861 198.239ZM848.04 198.239C847.324 198.227 846.608 198.091 845.892 197.83C845.176 197.568 844.523 197.128 843.932 196.509C843.341 195.884 842.866 195.04 842.509 193.977C842.151 192.909 841.972 191.568 841.972 189.955C841.972 188.409 842.116 187.04 842.406 185.847C842.696 184.648 843.116 183.639 843.668 182.821C844.219 181.997 844.884 181.372 845.662 180.946C846.446 180.52 847.33 180.307 848.312 180.307C849.29 180.307 850.159 180.503 850.92 180.895C851.688 181.281 852.313 181.821 852.795 182.514C853.278 183.207 853.591 184.006 853.733 184.909H851.653C851.46 184.125 851.085 183.474 850.528 182.957C849.972 182.44 849.233 182.182 848.312 182.182C846.96 182.182 845.895 182.77 845.116 183.946C844.344 185.122 843.955 186.773 843.949 188.898H844.085C844.403 188.415 844.781 188.003 845.219 187.662C845.662 187.315 846.151 187.048 846.685 186.861C847.219 186.673 847.784 186.58 848.381 186.58C849.381 186.58 850.295 186.83 851.125 187.33C851.955 187.824 852.619 188.509 853.119 189.384C853.619 190.253 853.869 191.25 853.869 192.375C853.869 193.455 853.628 194.443 853.145 195.341C852.662 196.233 851.983 196.943 851.108 197.472C850.239 197.994 849.216 198.25 848.04 198.239ZM848.04 196.364C848.756 196.364 849.398 196.185 849.966 195.827C850.54 195.469 850.991 194.989 851.321 194.386C851.656 193.784 851.824 193.114 851.824 192.375C851.824 191.653 851.662 190.997 851.338 190.406C851.02 189.81 850.58 189.335 850.017 188.983C849.46 188.631 848.824 188.455 848.108 188.455C847.568 188.455 847.065 188.562 846.599 188.778C846.134 188.989 845.724 189.278 845.372 189.648C845.026 190.017 844.753 190.44 844.554 190.918C844.355 191.389 844.256 191.886 844.256 192.409C844.256 193.102 844.418 193.75 844.741 194.352C845.071 194.955 845.52 195.44 846.088 195.81C846.662 196.179 847.312 196.364 848.04 196.364Z"
        fill="#A9448C"
        id="path1334"
      />
      <path
        d="M821.943 246.545V264H819.83V248.761H819.727L815.466 251.591V249.443L819.83 246.545H821.943ZM832.861 264.239C831.736 264.239 830.733 264.045 829.852 263.659C828.977 263.273 828.281 262.736 827.764 262.048C827.253 261.355 826.974 260.551 826.929 259.636H829.077C829.122 260.199 829.315 260.685 829.656 261.094C829.997 261.497 830.443 261.81 830.994 262.031C831.545 262.253 832.156 262.364 832.827 262.364C833.577 262.364 834.241 262.233 834.821 261.972C835.401 261.71 835.855 261.347 836.185 260.881C836.514 260.415 836.679 259.875 836.679 259.261C836.679 258.619 836.52 258.054 836.202 257.565C835.884 257.071 835.418 256.685 834.804 256.406C834.19 256.128 833.44 255.989 832.554 255.989H831.156V254.114H832.554C833.247 254.114 833.855 253.989 834.378 253.739C834.906 253.489 835.318 253.136 835.614 252.682C835.915 252.227 836.065 251.693 836.065 251.08C836.065 250.489 835.935 249.974 835.673 249.537C835.412 249.099 835.043 248.759 834.565 248.514C834.094 248.27 833.537 248.148 832.895 248.148C832.293 248.148 831.724 248.259 831.19 248.48C830.662 248.696 830.23 249.011 829.895 249.426C829.56 249.835 829.378 250.33 829.349 250.909H827.304C827.338 249.994 827.614 249.193 828.131 248.506C828.648 247.812 829.324 247.273 830.159 246.886C831 246.5 831.923 246.307 832.929 246.307C834.009 246.307 834.935 246.526 835.707 246.963C836.48 247.395 837.074 247.966 837.489 248.676C837.903 249.386 838.111 250.153 838.111 250.977C838.111 251.96 837.852 252.798 837.335 253.491C836.824 254.185 836.128 254.665 835.247 254.932V255.068C836.349 255.25 837.21 255.719 837.83 256.474C838.449 257.224 838.759 258.153 838.759 259.261C838.759 260.21 838.5 261.062 837.983 261.818C837.472 262.568 836.773 263.159 835.886 263.591C835 264.023 833.991 264.239 832.861 264.239ZM842.79 264L850.597 248.557V248.42H841.597V246.545H852.778V248.523L845.006 264H842.79Z"
        fill="#A9448C"
        id="path1336"
      />
      <path
        d="M821.943 312.545V330H819.83V314.761H819.727L815.466 317.591V315.443L819.83 312.545H821.943ZM832.861 330.239C831.736 330.239 830.733 330.045 829.852 329.659C828.977 329.273 828.281 328.736 827.764 328.048C827.253 327.355 826.974 326.551 826.929 325.636H829.077C829.122 326.199 829.315 326.685 829.656 327.094C829.997 327.497 830.443 327.81 830.994 328.031C831.545 328.253 832.156 328.364 832.827 328.364C833.577 328.364 834.241 328.233 834.821 327.972C835.401 327.71 835.855 327.347 836.185 326.881C836.514 326.415 836.679 325.875 836.679 325.261C836.679 324.619 836.52 324.054 836.202 323.565C835.884 323.071 835.418 322.685 834.804 322.406C834.19 322.128 833.44 321.989 832.554 321.989H831.156V320.114H832.554C833.247 320.114 833.855 319.989 834.378 319.739C834.906 319.489 835.318 319.136 835.614 318.682C835.915 318.227 836.065 317.693 836.065 317.08C836.065 316.489 835.935 315.974 835.673 315.537C835.412 315.099 835.043 314.759 834.565 314.514C834.094 314.27 833.537 314.148 832.895 314.148C832.293 314.148 831.724 314.259 831.19 314.48C830.662 314.696 830.23 315.011 829.895 315.426C829.56 315.835 829.378 316.33 829.349 316.909H827.304C827.338 315.994 827.614 315.193 828.131 314.506C828.648 313.812 829.324 313.273 830.159 312.886C831 312.5 831.923 312.307 832.929 312.307C834.009 312.307 834.935 312.526 835.707 312.963C836.48 313.395 837.074 313.966 837.489 314.676C837.903 315.386 838.111 316.153 838.111 316.977C838.111 317.96 837.852 318.798 837.335 319.491C836.824 320.185 836.128 320.665 835.247 320.932V321.068C836.349 321.25 837.21 321.719 837.83 322.474C838.449 323.224 838.759 324.153 838.759 325.261C838.759 326.21 838.5 327.062 837.983 327.818C837.472 328.568 836.773 329.159 835.886 329.591C835 330.023 833.991 330.239 832.861 330.239ZM847.835 330.239C846.665 330.239 845.631 330.031 844.733 329.616C843.841 329.196 843.145 328.619 842.645 327.886C842.145 327.148 841.898 326.307 841.903 325.364C841.898 324.625 842.043 323.943 842.338 323.318C842.634 322.687 843.037 322.162 843.548 321.741C844.065 321.315 844.642 321.045 845.278 320.932V320.83C844.443 320.614 843.778 320.145 843.284 319.423C842.79 318.696 842.545 317.869 842.551 316.943C842.545 316.057 842.77 315.264 843.224 314.565C843.679 313.866 844.304 313.315 845.099 312.912C845.901 312.509 846.813 312.307 847.835 312.307C848.847 312.307 849.75 312.509 850.545 312.912C851.341 313.315 851.966 313.866 852.42 314.565C852.881 315.264 853.114 316.057 853.119 316.943C853.114 317.869 852.861 318.696 852.361 319.423C851.866 320.145 851.21 320.614 850.392 320.83V320.932C851.023 321.045 851.591 321.315 852.097 321.741C852.602 322.162 853.006 322.687 853.307 323.318C853.608 323.943 853.761 324.625 853.767 325.364C853.761 326.307 853.506 327.148 853 327.886C852.5 328.619 851.804 329.196 850.912 329.616C850.026 330.031 849 330.239 847.835 330.239ZM847.835 328.364C848.625 328.364 849.307 328.236 849.881 327.98C850.455 327.724 850.898 327.364 851.21 326.898C851.523 326.432 851.682 325.886 851.688 325.261C851.682 324.602 851.511 324.02 851.176 323.514C850.841 323.009 850.384 322.611 849.804 322.321C849.23 322.031 848.574 321.886 847.835 321.886C847.091 321.886 846.426 322.031 845.841 322.321C845.261 322.611 844.804 323.009 844.469 323.514C844.139 324.02 843.977 324.602 843.983 325.261C843.977 325.886 844.128 326.432 844.435 326.898C844.747 327.364 845.193 327.724 845.773 327.98C846.352 328.236 847.04 328.364 847.835 328.364ZM847.835 320.08C848.46 320.08 849.014 319.955 849.497 319.705C849.986 319.455 850.369 319.105 850.648 318.656C850.926 318.207 851.068 317.682 851.074 317.08C851.068 316.489 850.929 315.974 850.656 315.537C850.384 315.094 850.006 314.753 849.523 314.514C849.04 314.27 848.477 314.148 847.835 314.148C847.182 314.148 846.611 314.27 846.122 314.514C845.634 314.753 845.256 315.094 844.989 315.537C844.722 315.974 844.591 316.489 844.597 317.08C844.591 317.682 844.724 318.207 844.997 318.656C845.276 319.105 845.659 319.455 846.148 319.705C846.636 319.955 847.199 320.08 847.835 320.08Z"
        fill="#A9448C"
        id="path1338"
      />
      <path
        d="M821.943 378.545V396H819.83V380.761H819.727L815.466 383.591V381.443L819.83 378.545H821.943ZM832.861 396.239C831.736 396.239 830.733 396.045 829.852 395.659C828.977 395.273 828.281 394.736 827.764 394.048C827.253 393.355 826.974 392.551 826.929 391.636H829.077C829.122 392.199 829.315 392.685 829.656 393.094C829.997 393.497 830.443 393.81 830.994 394.031C831.545 394.253 832.156 394.364 832.827 394.364C833.577 394.364 834.241 394.233 834.821 393.972C835.401 393.71 835.855 393.347 836.185 392.881C836.514 392.415 836.679 391.875 836.679 391.261C836.679 390.619 836.52 390.054 836.202 389.565C835.884 389.071 835.418 388.685 834.804 388.406C834.19 388.128 833.44 387.989 832.554 387.989H831.156V386.114H832.554C833.247 386.114 833.855 385.989 834.378 385.739C834.906 385.489 835.318 385.136 835.614 384.682C835.915 384.227 836.065 383.693 836.065 383.08C836.065 382.489 835.935 381.974 835.673 381.537C835.412 381.099 835.043 380.759 834.565 380.514C834.094 380.27 833.537 380.148 832.895 380.148C832.293 380.148 831.724 380.259 831.19 380.48C830.662 380.696 830.23 381.011 829.895 381.426C829.56 381.835 829.378 382.33 829.349 382.909H827.304C827.338 381.994 827.614 381.193 828.131 380.506C828.648 379.812 829.324 379.273 830.159 378.886C831 378.5 831.923 378.307 832.929 378.307C834.009 378.307 834.935 378.526 835.707 378.963C836.48 379.395 837.074 379.966 837.489 380.676C837.903 381.386 838.111 382.153 838.111 382.977C838.111 383.96 837.852 384.798 837.335 385.491C836.824 386.185 836.128 386.665 835.247 386.932V387.068C836.349 387.25 837.21 387.719 837.83 388.474C838.449 389.224 838.759 390.153 838.759 391.261C838.759 392.21 838.5 393.062 837.983 393.818C837.472 394.568 836.773 395.159 835.886 395.591C835 396.023 833.991 396.239 832.861 396.239ZM847.801 378.307C848.517 378.312 849.233 378.449 849.949 378.716C850.665 378.983 851.318 379.426 851.909 380.045C852.5 380.659 852.974 381.497 853.332 382.56C853.69 383.622 853.869 384.955 853.869 386.557C853.869 388.108 853.722 389.486 853.426 390.69C853.136 391.889 852.716 392.901 852.165 393.724C851.619 394.548 850.955 395.173 850.17 395.599C849.392 396.026 848.511 396.239 847.528 396.239C846.551 396.239 845.679 396.045 844.912 395.659C844.151 395.267 843.526 394.724 843.037 394.031C842.554 393.332 842.244 392.523 842.108 391.602H844.188C844.375 392.403 844.747 393.065 845.304 393.588C845.866 394.105 846.608 394.364 847.528 394.364C848.875 394.364 849.938 393.776 850.716 392.599C851.5 391.423 851.892 389.761 851.892 387.614H851.756C851.438 388.091 851.06 388.503 850.622 388.849C850.185 389.196 849.699 389.463 849.165 389.651C848.631 389.838 848.063 389.932 847.46 389.932C846.46 389.932 845.543 389.685 844.707 389.19C843.878 388.69 843.213 388.006 842.713 387.136C842.219 386.261 841.972 385.261 841.972 384.136C841.972 383.068 842.21 382.091 842.688 381.205C843.17 380.312 843.847 379.602 844.716 379.074C845.591 378.545 846.619 378.29 847.801 378.307ZM847.801 380.182C847.085 380.182 846.44 380.361 845.866 380.719C845.298 381.071 844.847 381.548 844.511 382.151C844.182 382.747 844.017 383.409 844.017 384.136C844.017 384.864 844.176 385.526 844.494 386.122C844.818 386.713 845.259 387.185 845.815 387.537C846.378 387.884 847.017 388.057 847.733 388.057C848.273 388.057 848.776 387.952 849.241 387.741C849.707 387.526 850.114 387.233 850.46 386.864C850.813 386.489 851.088 386.065 851.287 385.594C851.486 385.116 851.585 384.619 851.585 384.102C851.585 383.42 851.42 382.781 851.091 382.185C850.767 381.588 850.318 381.105 849.744 380.736C849.176 380.366 848.528 380.182 847.801 380.182Z"
        fill="#A9448C"
        id="path1340"
      />
      <path
        d="M821.943 444.545V462H819.83V446.761H819.727L815.466 449.591V447.443L819.83 444.545H821.943ZM826.554 458.42V456.682L834.224 444.545H835.486V447.239H834.634L828.838 456.409V456.545H839.168V458.42H826.554ZM834.77 462V457.892V457.082V444.545H836.781V462H834.77ZM848.055 462.239C846.771 462.239 845.677 461.889 844.773 461.19C843.87 460.486 843.18 459.466 842.702 458.131C842.225 456.79 841.987 455.17 841.987 453.273C841.987 451.386 842.225 449.776 842.702 448.44C843.185 447.099 843.879 446.077 844.782 445.372C845.691 444.662 846.782 444.307 848.055 444.307C849.327 444.307 850.415 444.662 851.319 445.372C852.228 446.077 852.921 447.099 853.398 448.44C853.881 449.776 854.123 451.386 854.123 453.273C854.123 455.17 853.884 456.79 853.407 458.131C852.93 459.466 852.239 460.486 851.336 461.19C850.433 461.889 849.339 462.239 848.055 462.239ZM848.055 460.364C849.327 460.364 850.316 459.75 851.021 458.523C851.725 457.295 852.077 455.545 852.077 453.273C852.077 451.761 851.915 450.474 851.592 449.412C851.273 448.349 850.813 447.54 850.211 446.983C849.614 446.426 848.896 446.148 848.055 446.148C846.793 446.148 845.808 446.77 845.097 448.014C844.387 449.253 844.032 451.006 844.032 453.273C844.032 454.784 844.191 456.068 844.509 457.125C844.827 458.182 845.285 458.986 845.881 459.537C846.484 460.088 847.208 460.364 848.055 460.364Z"
        fill="#A9448C"
        id="path1342"
      />
      <path
        d="M821.943 510.545V528H819.83V512.761H819.727L815.466 515.591V513.443L819.83 510.545H821.943ZM826.554 524.42V522.682L834.224 510.545H835.486V513.239H834.634L828.838 522.409V522.545H839.168V524.42H826.554ZM834.77 528V523.892V523.082V510.545H836.781V528H834.77ZM848.263 510.545V528H846.15V512.761H846.048L841.786 515.591V513.443L846.15 510.545H848.263Z"
        fill="#A9448C"
        id="path1344"
      />
      <path
        d="M820.943 722.545V740H818.83V724.761H818.727L814.466 727.591V725.443L818.83 722.545H820.943ZM825.554 736.42V734.682L833.224 722.545H834.486V725.239H833.634L827.838 734.409V734.545H838.168V736.42H825.554ZM833.77 740V735.892V735.082V722.545H835.781V740H833.77ZM841.362 740V738.466L847.123 732.159C847.799 731.42 848.356 730.778 848.793 730.233C849.231 729.682 849.555 729.165 849.765 728.682C849.981 728.193 850.089 727.682 850.089 727.148C850.089 726.534 849.941 726.003 849.646 725.554C849.356 725.105 848.958 724.759 848.452 724.514C847.947 724.27 847.379 724.148 846.748 724.148C846.077 724.148 845.492 724.287 844.992 724.565C844.498 724.838 844.114 725.222 843.842 725.716C843.575 726.21 843.441 726.79 843.441 727.455H841.43C841.43 726.432 841.665 725.534 842.137 724.761C842.609 723.989 843.251 723.386 844.063 722.955C844.881 722.523 845.799 722.307 846.816 722.307C847.839 722.307 848.745 722.523 849.535 722.955C850.325 723.386 850.944 723.969 851.393 724.702C851.842 725.435 852.066 726.25 852.066 727.148C852.066 727.79 851.95 728.418 851.717 729.031C851.489 729.639 851.092 730.318 850.523 731.068C849.961 731.812 849.18 732.722 848.18 733.795L844.259 737.989V738.125H852.373V740H841.362Z"
        fill="#A9448C"
        id="path1346"
      />
      <path
        d="M820.943 791.545V809H818.83V793.761H818.727L814.466 796.591V794.443L818.83 791.545H820.943ZM825.554 805.42V803.682L833.224 791.545H834.486V794.239H833.634L827.838 803.409V803.545H838.168V805.42H825.554ZM833.77 809V804.892V804.082V791.545H835.781V809H833.77ZM847.259 809.239C846.134 809.239 845.131 809.045 844.251 808.659C843.376 808.273 842.68 807.736 842.163 807.048C841.651 806.355 841.373 805.551 841.327 804.636H843.475C843.521 805.199 843.714 805.685 844.055 806.094C844.396 806.497 844.842 806.81 845.393 807.031C845.944 807.253 846.555 807.364 847.225 807.364C847.975 807.364 848.64 807.233 849.219 806.972C849.799 806.71 850.254 806.347 850.583 805.881C850.913 805.415 851.077 804.875 851.077 804.261C851.077 803.619 850.918 803.054 850.6 802.565C850.282 802.071 849.816 801.685 849.202 801.406C848.589 801.128 847.839 800.989 846.952 800.989H845.555V799.114H846.952C847.646 799.114 848.254 798.989 848.776 798.739C849.305 798.489 849.717 798.136 850.012 797.682C850.313 797.227 850.464 796.693 850.464 796.08C850.464 795.489 850.333 794.974 850.072 794.537C849.81 794.099 849.441 793.759 848.964 793.514C848.492 793.27 847.935 793.148 847.293 793.148C846.691 793.148 846.123 793.259 845.589 793.48C845.06 793.696 844.629 794.011 844.293 794.426C843.958 794.835 843.776 795.33 843.748 795.909H841.702C841.737 794.994 842.012 794.193 842.529 793.506C843.046 792.812 843.722 792.273 844.558 791.886C845.398 791.5 846.322 791.307 847.327 791.307C848.407 791.307 849.333 791.526 850.106 791.963C850.879 792.395 851.472 792.966 851.887 793.676C852.302 794.386 852.509 795.153 852.509 795.977C852.509 796.96 852.251 797.798 851.734 798.491C851.222 799.185 850.526 799.665 849.646 799.932V800.068C850.748 800.25 851.609 800.719 852.228 801.474C852.847 802.224 853.157 803.153 853.157 804.261C853.157 805.21 852.898 806.062 852.381 806.818C851.87 807.568 851.171 808.159 850.285 808.591C849.398 809.023 848.39 809.239 847.259 809.239Z"
        fill="#A9448C"
        id="path1348"
      />
      <path
        d="M820.943 860.545V878H818.83V862.761H818.727L814.466 865.591V863.443L818.83 860.545H820.943ZM825.554 874.42V872.682L833.224 860.545H834.486V863.239H833.634L827.838 872.409V872.545H838.168V874.42H825.554ZM833.77 878V873.892V873.082V860.545H835.781V878H833.77ZM840.952 874.42V872.682L848.623 860.545H849.884V863.239H849.032L843.237 872.409V872.545H853.566V874.42H840.952ZM849.168 878V873.892V873.082V860.545H851.18V878H849.168Z"
        fill="#A9448C"
        id="path1350"
      />
      <path
        d="M820.943 929.545V947H818.83V931.761H818.727L814.466 934.591V932.443L818.83 929.545H820.943ZM825.554 943.42V941.682L833.224 929.545H834.486V932.239H833.634L827.838 941.409V941.545H838.168V943.42H825.554ZM833.77 947V942.892V942.082V929.545H835.781V947H833.77ZM846.816 947.239C845.816 947.239 844.915 947.04 844.114 946.642C843.313 946.244 842.671 945.699 842.188 945.006C841.705 944.312 841.441 943.523 841.396 942.636H843.441C843.521 943.426 843.879 944.08 844.515 944.597C845.157 945.108 845.924 945.364 846.816 945.364C847.532 945.364 848.168 945.196 848.725 944.861C849.288 944.526 849.728 944.065 850.046 943.48C850.37 942.889 850.532 942.222 850.532 941.477C850.532 940.716 850.364 940.037 850.029 939.44C849.7 938.838 849.245 938.364 848.665 938.017C848.086 937.67 847.424 937.494 846.68 937.489C846.146 937.483 845.597 937.565 845.035 937.736C844.472 937.901 844.009 938.114 843.646 938.375L841.668 938.136L842.725 929.545H851.793V931.42H844.498L843.884 936.568H843.987C844.344 936.284 844.793 936.048 845.333 935.861C845.873 935.673 846.435 935.58 847.021 935.58C848.089 935.58 849.04 935.835 849.876 936.347C850.717 936.852 851.376 937.545 851.853 938.426C852.336 939.307 852.577 940.312 852.577 941.443C852.577 942.557 852.327 943.551 851.827 944.426C851.333 945.295 850.651 945.983 849.782 946.489C848.913 946.989 847.924 947.239 846.816 947.239Z"
        fill="#A9448C"
        id="path1352"
      />
      <path
        d="M820.943 998.545V1016H818.83V1000.76H818.727L814.466 1003.59V1001.44L818.83 998.545H820.943ZM825.554 1012.42V1010.68L833.224 998.545H834.486V1001.24H833.634L827.838 1010.41V1010.55H838.168V1012.42H825.554ZM833.77 1016V1011.89V1011.08V998.545H835.781V1016H833.77ZM847.157 1016.24C846.441 1016.23 845.725 1016.09 845.009 1015.83C844.293 1015.57 843.64 1015.13 843.049 1014.51C842.458 1013.88 841.984 1013.04 841.626 1011.98C841.268 1010.91 841.089 1009.57 841.089 1007.95C841.089 1006.41 841.234 1005.04 841.523 1003.85C841.813 1002.65 842.234 1001.64 842.785 1000.82C843.336 999.997 844.001 999.372 844.779 998.946C845.563 998.52 846.447 998.307 847.43 998.307C848.407 998.307 849.276 998.503 850.038 998.895C850.805 999.281 851.43 999.821 851.913 1000.51C852.396 1001.21 852.708 1002.01 852.85 1002.91H850.771C850.577 1002.12 850.202 1001.47 849.646 1000.96C849.089 1000.44 848.35 1000.18 847.43 1000.18C846.077 1000.18 845.012 1000.77 844.234 1001.95C843.461 1003.12 843.072 1004.77 843.066 1006.9H843.202C843.521 1006.41 843.898 1006 844.336 1005.66C844.779 1005.32 845.268 1005.05 845.802 1004.86C846.336 1004.67 846.901 1004.58 847.498 1004.58C848.498 1004.58 849.413 1004.83 850.242 1005.33C851.072 1005.82 851.737 1006.51 852.237 1007.38C852.737 1008.25 852.987 1009.25 852.987 1010.38C852.987 1011.45 852.745 1012.44 852.262 1013.34C851.779 1014.23 851.1 1014.94 850.225 1015.47C849.356 1015.99 848.333 1016.25 847.157 1016.24ZM847.157 1014.36C847.873 1014.36 848.515 1014.18 849.083 1013.83C849.657 1013.47 850.109 1012.99 850.438 1012.39C850.773 1011.78 850.941 1011.11 850.941 1010.38C850.941 1009.65 850.779 1009 850.455 1008.41C850.137 1007.81 849.697 1007.34 849.134 1006.98C848.577 1006.63 847.941 1006.45 847.225 1006.45C846.685 1006.45 846.183 1006.56 845.717 1006.78C845.251 1006.99 844.842 1007.28 844.489 1007.65C844.143 1008.02 843.87 1008.44 843.671 1008.92C843.472 1009.39 843.373 1009.89 843.373 1010.41C843.373 1011.1 843.535 1011.75 843.859 1012.35C844.188 1012.95 844.637 1013.44 845.205 1013.81C845.779 1014.18 846.43 1014.36 847.157 1014.36Z"
        fill="#A9448C"
        id="path1354"
      />
      <path
        d="M820.943 1067.55V1085H818.83V1069.76H818.727L814.466 1072.59V1070.44L818.83 1067.55H820.943ZM825.554 1081.42V1079.68L833.224 1067.55H834.486V1070.24H833.634L827.838 1079.41V1079.55H838.168V1081.42H825.554ZM833.77 1085V1080.89V1080.08V1067.55H835.781V1085H833.77ZM841.907 1085L849.714 1069.56V1069.42H840.714V1067.55H851.896V1069.52L844.123 1085H841.907Z"
        fill="#A9448C"
        id="path1356"
      />
      <path
        d="M820.943 1136.55V1154H818.83V1138.76H818.727L814.466 1141.59V1139.44L818.83 1136.55H820.943ZM825.554 1150.42V1148.68L833.224 1136.55H834.486V1139.24H833.634L827.838 1148.41V1148.55H838.168V1150.42H825.554ZM833.77 1154V1149.89V1149.08V1136.55H835.781V1154H833.77ZM846.952 1154.24C845.782 1154.24 844.748 1154.03 843.85 1153.62C842.958 1153.2 842.262 1152.62 841.762 1151.89C841.262 1151.15 841.015 1150.31 841.021 1149.36C841.015 1148.62 841.16 1147.94 841.455 1147.32C841.751 1146.69 842.154 1146.16 842.665 1145.74C843.183 1145.32 843.759 1145.05 844.396 1144.93V1144.83C843.56 1144.61 842.896 1144.14 842.401 1143.42C841.907 1142.7 841.663 1141.87 841.668 1140.94C841.663 1140.06 841.887 1139.26 842.342 1138.57C842.796 1137.87 843.421 1137.32 844.217 1136.91C845.018 1136.51 845.93 1136.31 846.952 1136.31C847.964 1136.31 848.867 1136.51 849.663 1136.91C850.458 1137.32 851.083 1137.87 851.538 1138.57C851.998 1139.26 852.231 1140.06 852.237 1140.94C852.231 1141.87 851.978 1142.7 851.478 1143.42C850.984 1144.14 850.327 1144.61 849.509 1144.83V1144.93C850.14 1145.05 850.708 1145.32 851.214 1145.74C851.719 1146.16 852.123 1146.69 852.424 1147.32C852.725 1147.94 852.879 1148.62 852.884 1149.36C852.879 1150.31 852.623 1151.15 852.117 1151.89C851.617 1152.62 850.921 1153.2 850.029 1153.62C849.143 1154.03 848.117 1154.24 846.952 1154.24ZM846.952 1152.36C847.742 1152.36 848.424 1152.24 848.998 1151.98C849.572 1151.72 850.015 1151.36 850.327 1150.9C850.64 1150.43 850.799 1149.89 850.805 1149.26C850.799 1148.6 850.629 1148.02 850.293 1147.51C849.958 1147.01 849.501 1146.61 848.921 1146.32C848.347 1146.03 847.691 1145.89 846.952 1145.89C846.208 1145.89 845.543 1146.03 844.958 1146.32C844.379 1146.61 843.921 1147.01 843.586 1147.51C843.256 1148.02 843.094 1148.6 843.1 1149.26C843.094 1149.89 843.245 1150.43 843.552 1150.9C843.864 1151.36 844.31 1151.72 844.89 1151.98C845.469 1152.24 846.157 1152.36 846.952 1152.36ZM846.952 1144.08C847.577 1144.08 848.131 1143.95 848.614 1143.7C849.103 1143.45 849.487 1143.11 849.765 1142.66C850.043 1142.21 850.185 1141.68 850.191 1141.08C850.185 1140.49 850.046 1139.97 849.773 1139.54C849.501 1139.09 849.123 1138.75 848.64 1138.51C848.157 1138.27 847.594 1138.15 846.952 1138.15C846.299 1138.15 845.728 1138.27 845.239 1138.51C844.751 1138.75 844.373 1139.09 844.106 1139.54C843.839 1139.97 843.708 1140.49 843.714 1141.08C843.708 1141.68 843.842 1142.21 844.114 1142.66C844.393 1143.11 844.776 1143.45 845.265 1143.7C845.754 1143.95 846.316 1144.08 846.952 1144.08Z"
        fill="#A9448C"
        id="path1358"
      />
      <path
        d="M820.943 1205.55V1223H818.83V1207.76H818.727L814.466 1210.59V1208.44L818.83 1205.55H820.943ZM825.554 1219.42V1217.68L833.224 1205.55H834.486V1208.24H833.634L827.838 1217.41V1217.55H838.168V1219.42H825.554ZM833.77 1223V1218.89V1218.08V1205.55H835.781V1223H833.77ZM846.918 1205.31C847.634 1205.31 848.35 1205.45 849.066 1205.72C849.782 1205.98 850.435 1206.43 851.026 1207.05C851.617 1207.66 852.092 1208.5 852.45 1209.56C852.808 1210.62 852.987 1211.95 852.987 1213.56C852.987 1215.11 852.839 1216.49 852.543 1217.69C852.254 1218.89 851.833 1219.9 851.282 1220.72C850.737 1221.55 850.072 1222.17 849.288 1222.6C848.509 1223.03 847.629 1223.24 846.646 1223.24C845.668 1223.24 844.796 1223.05 844.029 1222.66C843.268 1222.27 842.643 1221.72 842.154 1221.03C841.671 1220.33 841.362 1219.52 841.225 1218.6H843.305C843.492 1219.4 843.864 1220.07 844.421 1220.59C844.984 1221.11 845.725 1221.36 846.646 1221.36C847.992 1221.36 849.055 1220.78 849.833 1219.6C850.617 1218.42 851.009 1216.76 851.009 1214.61H850.873C850.555 1215.09 850.177 1215.5 849.739 1215.85C849.302 1216.2 848.816 1216.46 848.282 1216.65C847.748 1216.84 847.18 1216.93 846.577 1216.93C845.577 1216.93 844.66 1216.68 843.825 1216.19C842.995 1215.69 842.33 1215.01 841.83 1214.14C841.336 1213.26 841.089 1212.26 841.089 1211.14C841.089 1210.07 841.327 1209.09 841.805 1208.2C842.288 1207.31 842.964 1206.6 843.833 1206.07C844.708 1205.55 845.737 1205.29 846.918 1205.31ZM846.918 1207.18C846.202 1207.18 845.558 1207.36 844.984 1207.72C844.415 1208.07 843.964 1208.55 843.629 1209.15C843.299 1209.75 843.134 1210.41 843.134 1211.14C843.134 1211.86 843.293 1212.53 843.612 1213.12C843.935 1213.71 844.376 1214.18 844.933 1214.54C845.495 1214.88 846.134 1215.06 846.85 1215.06C847.39 1215.06 847.893 1214.95 848.359 1214.74C848.825 1214.53 849.231 1214.23 849.577 1213.86C849.93 1213.49 850.205 1213.07 850.404 1212.59C850.603 1212.12 850.702 1211.62 850.702 1211.1C850.702 1210.42 850.538 1209.78 850.208 1209.18C849.884 1208.59 849.435 1208.11 848.862 1207.74C848.293 1207.37 847.646 1207.18 846.918 1207.18Z"
        fill="#A9448C"
        id="path1360"
      />
      <path
        d="M820.943 1274.55V1292H818.83V1276.76H818.727L814.466 1279.59V1277.44L818.83 1274.55H820.943ZM831.418 1292.24C830.418 1292.24 829.517 1292.04 828.716 1291.64C827.915 1291.24 827.273 1290.7 826.79 1290.01C826.307 1289.31 826.043 1288.52 825.997 1287.64H828.043C828.122 1288.43 828.48 1289.08 829.116 1289.6C829.759 1290.11 830.526 1290.36 831.418 1290.36C832.134 1290.36 832.77 1290.2 833.327 1289.86C833.889 1289.53 834.33 1289.07 834.648 1288.48C834.972 1287.89 835.134 1287.22 835.134 1286.48C835.134 1285.72 834.966 1285.04 834.631 1284.44C834.301 1283.84 833.847 1283.36 833.267 1283.02C832.688 1282.67 832.026 1282.49 831.281 1282.49C830.747 1282.48 830.199 1282.57 829.636 1282.74C829.074 1282.9 828.611 1283.11 828.247 1283.38L826.27 1283.14L827.327 1274.55H836.395V1276.42H829.099L828.486 1281.57H828.588C828.946 1281.28 829.395 1281.05 829.935 1280.86C830.474 1280.67 831.037 1280.58 831.622 1280.58C832.69 1280.58 833.642 1280.84 834.477 1281.35C835.318 1281.85 835.977 1282.55 836.455 1283.43C836.938 1284.31 837.179 1285.31 837.179 1286.44C837.179 1287.56 836.929 1288.55 836.429 1289.43C835.935 1290.3 835.253 1290.98 834.384 1291.49C833.514 1291.99 832.526 1292.24 831.418 1292.24ZM846.258 1292.24C844.974 1292.24 843.88 1291.89 842.977 1291.19C842.073 1290.49 841.383 1289.47 840.906 1288.13C840.428 1286.79 840.19 1285.17 840.19 1283.27C840.19 1281.39 840.428 1279.78 840.906 1278.44C841.388 1277.1 842.082 1276.08 842.985 1275.37C843.894 1274.66 844.985 1274.31 846.258 1274.31C847.531 1274.31 848.619 1274.66 849.522 1275.37C850.431 1276.08 851.124 1277.1 851.602 1278.44C852.085 1279.78 852.326 1281.39 852.326 1283.27C852.326 1285.17 852.087 1286.79 851.61 1288.13C851.133 1289.47 850.442 1290.49 849.539 1291.19C848.636 1291.89 847.542 1292.24 846.258 1292.24ZM846.258 1290.36C847.531 1290.36 848.519 1289.75 849.224 1288.52C849.928 1287.3 850.281 1285.55 850.281 1283.27C850.281 1281.76 850.119 1280.47 849.795 1279.41C849.477 1278.35 849.016 1277.54 848.414 1276.98C847.817 1276.43 847.099 1276.15 846.258 1276.15C844.996 1276.15 844.011 1276.77 843.3 1278.01C842.59 1279.25 842.235 1281.01 842.235 1283.27C842.235 1284.78 842.394 1286.07 842.712 1287.12C843.031 1288.18 843.488 1288.99 844.085 1289.54C844.687 1290.09 845.411 1290.36 846.258 1290.36Z"
        fill="#A9448C"
        id="path1362"
      />
      <path
        d="M820.943 1343.55V1361H818.83V1345.76H818.727L814.466 1348.59V1346.44L818.83 1343.55H820.943ZM831.418 1361.24C830.418 1361.24 829.517 1361.04 828.716 1360.64C827.915 1360.24 827.273 1359.7 826.79 1359.01C826.307 1358.31 826.043 1357.52 825.997 1356.64H828.043C828.122 1357.43 828.48 1358.08 829.116 1358.6C829.759 1359.11 830.526 1359.36 831.418 1359.36C832.134 1359.36 832.77 1359.2 833.327 1358.86C833.889 1358.53 834.33 1358.07 834.648 1357.48C834.972 1356.89 835.134 1356.22 835.134 1355.48C835.134 1354.72 834.966 1354.04 834.631 1353.44C834.301 1352.84 833.847 1352.36 833.267 1352.02C832.688 1351.67 832.026 1351.49 831.281 1351.49C830.747 1351.48 830.199 1351.57 829.636 1351.74C829.074 1351.9 828.611 1352.11 828.247 1352.38L826.27 1352.14L827.327 1343.55H836.395V1345.42H829.099L828.486 1350.57H828.588C828.946 1350.28 829.395 1350.05 829.935 1349.86C830.474 1349.67 831.037 1349.58 831.622 1349.58C832.69 1349.58 833.642 1349.84 834.477 1350.35C835.318 1350.85 835.977 1351.55 836.455 1352.43C836.938 1353.31 837.179 1354.31 837.179 1355.44C837.179 1356.56 836.929 1357.55 836.429 1358.43C835.935 1359.3 835.253 1359.98 834.384 1360.49C833.514 1360.99 832.526 1361.24 831.418 1361.24ZM846.701 1343.55V1361H844.587V1345.76H844.485L840.224 1348.59V1346.44L844.587 1343.55H846.701Z"
        fill="#A9448C"
        id="path1364"
      />
      <path
        d="M643.943 1335.55V1353H641.83V1337.76H641.727L637.466 1340.59V1338.44L641.83 1335.55H643.943ZM654.418 1353.24C653.418 1353.24 652.517 1353.04 651.716 1352.64C650.915 1352.24 650.273 1351.7 649.79 1351.01C649.307 1350.31 649.043 1349.52 648.997 1348.64H651.043C651.122 1349.43 651.48 1350.08 652.116 1350.6C652.759 1351.11 653.526 1351.36 654.418 1351.36C655.134 1351.36 655.77 1351.2 656.327 1350.86C656.889 1350.53 657.33 1350.07 657.648 1349.48C657.972 1348.89 658.134 1348.22 658.134 1347.48C658.134 1346.72 657.966 1346.04 657.631 1345.44C657.301 1344.84 656.847 1344.36 656.267 1344.02C655.688 1343.67 655.026 1343.49 654.281 1343.49C653.747 1343.48 653.199 1343.57 652.636 1343.74C652.074 1343.9 651.611 1344.11 651.247 1344.38L649.27 1344.14L650.327 1335.55H659.395V1337.42H652.099L651.486 1342.57H651.588C651.946 1342.28 652.395 1342.05 652.935 1341.86C653.474 1341.67 654.037 1341.58 654.622 1341.58C655.69 1341.58 656.642 1341.84 657.477 1342.35C658.318 1342.85 658.977 1343.55 659.455 1344.43C659.938 1345.31 660.179 1346.31 660.179 1347.44C660.179 1348.56 659.929 1349.55 659.429 1350.43C658.935 1351.3 658.253 1351.98 657.384 1352.49C656.514 1352.99 655.526 1353.24 654.418 1353.24ZM663.565 1353V1351.47L669.326 1345.16C670.002 1344.42 670.559 1343.78 670.996 1343.23C671.434 1342.68 671.758 1342.16 671.968 1341.68C672.184 1341.19 672.292 1340.68 672.292 1340.15C672.292 1339.53 672.144 1339 671.849 1338.55C671.559 1338.11 671.161 1337.76 670.656 1337.51C670.15 1337.27 669.582 1337.15 668.951 1337.15C668.281 1337.15 667.695 1337.29 667.195 1337.57C666.701 1337.84 666.317 1338.22 666.045 1338.72C665.778 1339.21 665.644 1339.79 665.644 1340.45H663.633C663.633 1339.43 663.869 1338.53 664.34 1337.76C664.812 1336.99 665.454 1336.39 666.266 1335.95C667.085 1335.52 668.002 1335.31 669.019 1335.31C670.042 1335.31 670.948 1335.52 671.738 1335.95C672.528 1336.39 673.147 1336.97 673.596 1337.7C674.045 1338.43 674.269 1339.25 674.269 1340.15C674.269 1340.79 674.153 1341.42 673.92 1342.03C673.692 1342.64 673.295 1343.32 672.727 1344.07C672.164 1344.81 671.383 1345.72 670.383 1346.8L666.462 1350.99V1351.12H674.576V1353H663.565Z"
        fill="#A9448C"
        id="path1366"
      />
      <path
        d="M488.943 1335.55V1353H486.83V1337.76H486.727L482.466 1340.59V1338.44L486.83 1335.55H488.943ZM499.418 1353.24C498.418 1353.24 497.517 1353.04 496.716 1352.64C495.915 1352.24 495.273 1351.7 494.79 1351.01C494.307 1350.31 494.043 1349.52 493.997 1348.64H496.043C496.122 1349.43 496.48 1350.08 497.116 1350.6C497.759 1351.11 498.526 1351.36 499.418 1351.36C500.134 1351.36 500.77 1351.2 501.327 1350.86C501.889 1350.53 502.33 1350.07 502.648 1349.48C502.972 1348.89 503.134 1348.22 503.134 1347.48C503.134 1346.72 502.966 1346.04 502.631 1345.44C502.301 1344.84 501.847 1344.36 501.267 1344.02C500.688 1343.67 500.026 1343.49 499.281 1343.49C498.747 1343.48 498.199 1343.57 497.636 1343.74C497.074 1343.9 496.611 1344.11 496.247 1344.38L494.27 1344.14L495.327 1335.55H504.395V1337.42H497.099L496.486 1342.57H496.588C496.946 1342.28 497.395 1342.05 497.935 1341.86C498.474 1341.67 499.037 1341.58 499.622 1341.58C500.69 1341.58 501.642 1341.84 502.477 1342.35C503.318 1342.85 503.977 1343.55 504.455 1344.43C504.938 1345.31 505.179 1346.31 505.179 1347.44C505.179 1348.56 504.929 1349.55 504.429 1350.43C503.935 1351.3 503.253 1351.98 502.384 1352.49C501.514 1352.99 500.526 1353.24 499.418 1353.24ZM514.462 1353.24C513.337 1353.24 512.335 1353.05 511.454 1352.66C510.579 1352.27 509.883 1351.74 509.366 1351.05C508.854 1350.36 508.576 1349.55 508.531 1348.64H510.678C510.724 1349.2 510.917 1349.68 511.258 1350.09C511.599 1350.5 512.045 1350.81 512.596 1351.03C513.147 1351.25 513.758 1351.36 514.428 1351.36C515.178 1351.36 515.843 1351.23 516.423 1350.97C517.002 1350.71 517.457 1350.35 517.786 1349.88C518.116 1349.41 518.281 1348.88 518.281 1348.26C518.281 1347.62 518.121 1347.05 517.803 1346.57C517.485 1346.07 517.019 1345.68 516.406 1345.41C515.792 1345.13 515.042 1344.99 514.156 1344.99H512.758V1343.11H514.156C514.849 1343.11 515.457 1342.99 515.979 1342.74C516.508 1342.49 516.92 1342.14 517.215 1341.68C517.516 1341.23 517.667 1340.69 517.667 1340.08C517.667 1339.49 517.536 1338.97 517.275 1338.54C517.013 1338.1 516.644 1337.76 516.167 1337.51C515.695 1337.27 515.138 1337.15 514.496 1337.15C513.894 1337.15 513.326 1337.26 512.792 1337.48C512.263 1337.7 511.832 1338.01 511.496 1338.43C511.161 1338.84 510.979 1339.33 510.951 1339.91H508.906C508.94 1338.99 509.215 1338.19 509.732 1337.51C510.249 1336.81 510.925 1336.27 511.761 1335.89C512.602 1335.5 513.525 1335.31 514.531 1335.31C515.61 1335.31 516.536 1335.53 517.309 1335.96C518.082 1336.39 518.675 1336.97 519.09 1337.68C519.505 1338.39 519.712 1339.15 519.712 1339.98C519.712 1340.96 519.454 1341.8 518.937 1342.49C518.425 1343.18 517.729 1343.66 516.849 1343.93V1344.07C517.951 1344.25 518.812 1344.72 519.431 1345.47C520.05 1346.22 520.36 1347.15 520.36 1348.26C520.36 1349.21 520.102 1350.06 519.585 1350.82C519.073 1351.57 518.374 1352.16 517.488 1352.59C516.602 1353.02 515.593 1353.24 514.462 1353.24Z"
        fill="#A9448C"
        id="path1368"
      />
      <path
        d="M502.943 1191.55V1209H500.83V1193.76H500.727L496.466 1196.59V1194.44L500.83 1191.55H502.943ZM513.418 1209.24C512.418 1209.24 511.517 1209.04 510.716 1208.64C509.915 1208.24 509.273 1207.7 508.79 1207.01C508.307 1206.31 508.043 1205.52 507.997 1204.64H510.043C510.122 1205.43 510.48 1206.08 511.116 1206.6C511.759 1207.11 512.526 1207.36 513.418 1207.36C514.134 1207.36 514.77 1207.2 515.327 1206.86C515.889 1206.53 516.33 1206.07 516.648 1205.48C516.972 1204.89 517.134 1204.22 517.134 1203.48C517.134 1202.72 516.966 1202.04 516.631 1201.44C516.301 1200.84 515.847 1200.36 515.267 1200.02C514.688 1199.67 514.026 1199.49 513.281 1199.49C512.747 1199.48 512.199 1199.57 511.636 1199.74C511.074 1199.9 510.611 1200.11 510.247 1200.38L508.27 1200.14L509.327 1191.55H518.395V1193.42H511.099L510.486 1198.57H510.588C510.946 1198.28 511.395 1198.05 511.935 1197.86C512.474 1197.67 513.037 1197.58 513.622 1197.58C514.69 1197.58 515.642 1197.84 516.477 1198.35C517.318 1198.85 517.977 1199.55 518.455 1200.43C518.938 1201.31 519.179 1202.31 519.179 1203.44C519.179 1204.56 518.929 1205.55 518.429 1206.43C517.935 1207.3 517.253 1207.98 516.384 1208.49C515.514 1208.99 514.526 1209.24 513.418 1209.24ZM522.156 1205.42V1203.68L529.826 1191.55H531.087V1194.24H530.235L524.44 1203.41V1203.55H534.769V1205.42H522.156ZM530.371 1209V1204.89V1204.08V1191.55H532.383V1209H530.371Z"
        fill="#A9448C"
        id="path1370"
      />
      <path
        d="M632.943 1191.55V1209H630.83V1193.76H630.727L626.466 1196.59V1194.44L630.83 1191.55H632.943ZM643.418 1209.24C642.418 1209.24 641.517 1209.04 640.716 1208.64C639.915 1208.24 639.273 1207.7 638.79 1207.01C638.307 1206.31 638.043 1205.52 637.997 1204.64H640.043C640.122 1205.43 640.48 1206.08 641.116 1206.6C641.759 1207.11 642.526 1207.36 643.418 1207.36C644.134 1207.36 644.77 1207.2 645.327 1206.86C645.889 1206.53 646.33 1206.07 646.648 1205.48C646.972 1204.89 647.134 1204.22 647.134 1203.48C647.134 1202.72 646.966 1202.04 646.631 1201.44C646.301 1200.84 645.847 1200.36 645.267 1200.02C644.688 1199.67 644.026 1199.49 643.281 1199.49C642.747 1199.48 642.199 1199.57 641.636 1199.74C641.074 1199.9 640.611 1200.11 640.247 1200.38L638.27 1200.14L639.327 1191.55H648.395V1193.42H641.099L640.486 1198.57H640.588C640.946 1198.28 641.395 1198.05 641.935 1197.86C642.474 1197.67 643.037 1197.58 643.622 1197.58C644.69 1197.58 645.642 1197.84 646.477 1198.35C647.318 1198.85 647.977 1199.55 648.455 1200.43C648.938 1201.31 649.179 1202.31 649.179 1203.44C649.179 1204.56 648.929 1205.55 648.429 1206.43C647.935 1207.3 647.253 1207.98 646.384 1208.49C645.514 1208.99 644.526 1209.24 643.418 1209.24ZM658.019 1209.24C657.019 1209.24 656.119 1209.04 655.317 1208.64C654.516 1208.24 653.874 1207.7 653.391 1207.01C652.908 1206.31 652.644 1205.52 652.599 1204.64H654.644C654.724 1205.43 655.082 1206.08 655.718 1206.6C656.36 1207.11 657.127 1207.36 658.019 1207.36C658.735 1207.36 659.371 1207.2 659.928 1206.86C660.491 1206.53 660.931 1206.07 661.249 1205.48C661.573 1204.89 661.735 1204.22 661.735 1203.48C661.735 1202.72 661.567 1202.04 661.232 1201.44C660.903 1200.84 660.448 1200.36 659.869 1200.02C659.289 1199.67 658.627 1199.49 657.883 1199.49C657.349 1199.48 656.8 1199.57 656.238 1199.74C655.675 1199.9 655.212 1200.11 654.849 1200.38L652.871 1200.14L653.928 1191.55H662.996V1193.42H655.701L655.087 1198.57H655.19C655.548 1198.28 655.996 1198.05 656.536 1197.86C657.076 1197.67 657.638 1197.58 658.224 1197.58C659.292 1197.58 660.244 1197.84 661.079 1198.35C661.92 1198.85 662.579 1199.55 663.056 1200.43C663.539 1201.31 663.781 1202.31 663.781 1203.44C663.781 1204.56 663.531 1205.55 663.031 1206.43C662.536 1207.3 661.854 1207.98 660.985 1208.49C660.116 1208.99 659.127 1209.24 658.019 1209.24Z"
        fill="#A9448C"
        id="path1372"
      />
      <path
        d="M598.943 1007.55V1025H596.83V1009.76H596.727L592.466 1012.59V1010.44L596.83 1007.55H598.943ZM609.418 1025.24C608.418 1025.24 607.517 1025.04 606.716 1024.64C605.915 1024.24 605.273 1023.7 604.79 1023.01C604.307 1022.31 604.043 1021.52 603.997 1020.64H606.043C606.122 1021.43 606.48 1022.08 607.116 1022.6C607.759 1023.11 608.526 1023.36 609.418 1023.36C610.134 1023.36 610.77 1023.2 611.327 1022.86C611.889 1022.53 612.33 1022.07 612.648 1021.48C612.972 1020.89 613.134 1020.22 613.134 1019.48C613.134 1018.72 612.966 1018.04 612.631 1017.44C612.301 1016.84 611.847 1016.36 611.267 1016.02C610.688 1015.67 610.026 1015.49 609.281 1015.49C608.747 1015.48 608.199 1015.57 607.636 1015.74C607.074 1015.9 606.611 1016.11 606.247 1016.38L604.27 1016.14L605.327 1007.55H614.395V1009.42H607.099L606.486 1014.57H606.588C606.946 1014.28 607.395 1014.05 607.935 1013.86C608.474 1013.67 609.037 1013.58 609.622 1013.58C610.69 1013.58 611.642 1013.84 612.477 1014.35C613.318 1014.85 613.977 1015.55 614.455 1016.43C614.938 1017.31 615.179 1018.31 615.179 1019.44C615.179 1020.56 614.929 1021.55 614.429 1022.43C613.935 1023.3 613.253 1023.98 612.384 1024.49C611.514 1024.99 610.526 1025.24 609.418 1025.24ZM624.36 1025.24C623.644 1025.23 622.928 1025.09 622.212 1024.83C621.496 1024.57 620.843 1024.13 620.252 1023.51C619.661 1022.88 619.187 1022.04 618.829 1020.98C618.471 1019.91 618.292 1018.57 618.292 1016.95C618.292 1015.41 618.437 1014.04 618.727 1012.85C619.016 1011.65 619.437 1010.64 619.988 1009.82C620.539 1009 621.204 1008.37 621.982 1007.95C622.766 1007.52 623.65 1007.31 624.633 1007.31C625.61 1007.31 626.479 1007.5 627.241 1007.89C628.008 1008.28 628.633 1008.82 629.116 1009.51C629.599 1010.21 629.911 1011.01 630.053 1011.91H627.974C627.781 1011.12 627.406 1010.47 626.849 1009.96C626.292 1009.44 625.553 1009.18 624.633 1009.18C623.281 1009.18 622.215 1009.77 621.437 1010.95C620.664 1012.12 620.275 1013.77 620.269 1015.9H620.406C620.724 1015.41 621.102 1015 621.539 1014.66C621.982 1014.32 622.471 1014.05 623.005 1013.86C623.539 1013.67 624.104 1013.58 624.701 1013.58C625.701 1013.58 626.616 1013.83 627.445 1014.33C628.275 1014.82 628.94 1015.51 629.44 1016.38C629.94 1017.25 630.19 1018.25 630.19 1019.38C630.19 1020.45 629.948 1021.44 629.465 1022.34C628.982 1023.23 628.303 1023.94 627.428 1024.47C626.559 1024.99 625.536 1025.25 624.36 1025.24ZM624.36 1023.36C625.076 1023.36 625.718 1023.18 626.286 1022.83C626.86 1022.47 627.312 1021.99 627.641 1021.39C627.977 1020.78 628.144 1020.11 628.144 1019.38C628.144 1018.65 627.982 1018 627.658 1017.41C627.34 1016.81 626.9 1016.34 626.337 1015.98C625.781 1015.63 625.144 1015.45 624.428 1015.45C623.888 1015.45 623.386 1015.56 622.92 1015.78C622.454 1015.99 622.045 1016.28 621.692 1016.65C621.346 1017.02 621.073 1017.44 620.874 1017.92C620.675 1018.39 620.576 1018.89 620.576 1019.41C620.576 1020.1 620.738 1020.75 621.062 1021.35C621.391 1021.95 621.84 1022.44 622.408 1022.81C622.982 1023.18 623.633 1023.36 624.36 1023.36Z"
        fill="#A9448C"
        id="path1374"
      />
      <path
        d="M598.943 908.545V926H596.83V910.761H596.727L592.466 913.591V911.443L596.83 908.545H598.943ZM609.418 926.239C608.418 926.239 607.517 926.04 606.716 925.642C605.915 925.244 605.273 924.699 604.79 924.006C604.307 923.312 604.043 922.523 603.997 921.636H606.043C606.122 922.426 606.48 923.08 607.116 923.597C607.759 924.108 608.526 924.364 609.418 924.364C610.134 924.364 610.77 924.196 611.327 923.861C611.889 923.526 612.33 923.065 612.648 922.48C612.972 921.889 613.134 921.222 613.134 920.477C613.134 919.716 612.966 919.037 612.631 918.44C612.301 917.838 611.847 917.364 611.267 917.017C610.688 916.67 610.026 916.494 609.281 916.489C608.747 916.483 608.199 916.565 607.636 916.736C607.074 916.901 606.611 917.114 606.247 917.375L604.27 917.136L605.327 908.545H614.395V910.42H607.099L606.486 915.568H606.588C606.946 915.284 607.395 915.048 607.935 914.861C608.474 914.673 609.037 914.58 609.622 914.58C610.69 914.58 611.642 914.835 612.477 915.347C613.318 915.852 613.977 916.545 614.455 917.426C614.938 918.307 615.179 919.312 615.179 920.443C615.179 921.557 614.929 922.551 614.429 923.426C613.935 924.295 613.253 924.983 612.384 925.489C611.514 925.989 610.526 926.239 609.418 926.239ZM619.11 926L626.917 910.557V910.42H617.917V908.545H629.099V910.523L621.326 926H619.11Z"
        fill="#A9448C"
        id="path1376"
      />
      <path
        d="M598.943 809.545V827H596.83V811.761H596.727L592.466 814.591V812.443L596.83 809.545H598.943ZM609.418 827.239C608.418 827.239 607.517 827.04 606.716 826.642C605.915 826.244 605.273 825.699 604.79 825.006C604.307 824.312 604.043 823.523 603.997 822.636H606.043C606.122 823.426 606.48 824.08 607.116 824.597C607.759 825.108 608.526 825.364 609.418 825.364C610.134 825.364 610.77 825.196 611.327 824.861C611.889 824.526 612.33 824.065 612.648 823.48C612.972 822.889 613.134 822.222 613.134 821.477C613.134 820.716 612.966 820.037 612.631 819.44C612.301 818.838 611.847 818.364 611.267 818.017C610.688 817.67 610.026 817.494 609.281 817.489C608.747 817.483 608.199 817.565 607.636 817.736C607.074 817.901 606.611 818.114 606.247 818.375L604.27 818.136L605.327 809.545H614.395V811.42H607.099L606.486 816.568H606.588C606.946 816.284 607.395 816.048 607.935 815.861C608.474 815.673 609.037 815.58 609.622 815.58C610.69 815.58 611.642 815.835 612.477 816.347C613.318 816.852 613.977 817.545 614.455 818.426C614.938 819.307 615.179 820.312 615.179 821.443C615.179 822.557 614.929 823.551 614.429 824.426C613.935 825.295 613.253 825.983 612.384 826.489C611.514 826.989 610.526 827.239 609.418 827.239ZM624.156 827.239C622.985 827.239 621.951 827.031 621.053 826.616C620.161 826.196 619.465 825.619 618.965 824.886C618.465 824.148 618.218 823.307 618.224 822.364C618.218 821.625 618.363 820.943 618.658 820.318C618.954 819.687 619.357 819.162 619.869 818.741C620.386 818.315 620.962 818.045 621.599 817.932V817.83C620.763 817.614 620.099 817.145 619.604 816.423C619.11 815.696 618.866 814.869 618.871 813.943C618.866 813.057 619.09 812.264 619.545 811.565C619.999 810.866 620.624 810.315 621.42 809.912C622.221 809.509 623.133 809.307 624.156 809.307C625.167 809.307 626.07 809.509 626.866 809.912C627.661 810.315 628.286 810.866 628.741 811.565C629.201 812.264 629.434 813.057 629.44 813.943C629.434 814.869 629.181 815.696 628.681 816.423C628.187 817.145 627.531 817.614 626.712 817.83V817.932C627.343 818.045 627.911 818.315 628.417 818.741C628.923 819.162 629.326 819.687 629.627 820.318C629.928 820.943 630.082 821.625 630.087 822.364C630.082 823.307 629.826 824.148 629.32 824.886C628.82 825.619 628.124 826.196 627.232 826.616C626.346 827.031 625.32 827.239 624.156 827.239ZM624.156 825.364C624.945 825.364 625.627 825.236 626.201 824.98C626.775 824.724 627.218 824.364 627.531 823.898C627.843 823.432 628.002 822.886 628.008 822.261C628.002 821.602 627.832 821.02 627.496 820.514C627.161 820.009 626.704 819.611 626.124 819.321C625.55 819.031 624.894 818.886 624.156 818.886C623.411 818.886 622.746 819.031 622.161 819.321C621.582 819.611 621.124 820.009 620.789 820.514C620.46 821.02 620.298 821.602 620.303 822.261C620.298 822.886 620.448 823.432 620.755 823.898C621.067 824.364 621.513 824.724 622.093 824.98C622.673 825.236 623.36 825.364 624.156 825.364ZM624.156 817.08C624.781 817.08 625.335 816.955 625.817 816.705C626.306 816.455 626.69 816.105 626.968 815.656C627.246 815.207 627.388 814.682 627.394 814.08C627.388 813.489 627.249 812.974 626.977 812.537C626.704 812.094 626.326 811.753 625.843 811.514C625.36 811.27 624.798 811.148 624.156 811.148C623.502 811.148 622.931 811.27 622.442 811.514C621.954 811.753 621.576 812.094 621.309 812.537C621.042 812.974 620.911 813.489 620.917 814.08C620.911 814.682 621.045 815.207 621.317 815.656C621.596 816.105 621.979 816.455 622.468 816.705C622.957 816.955 623.519 817.08 624.156 817.08Z"
        fill="#A9448C"
        id="path1378"
      />
      <path
        d="M598.943 710.545V728H596.83V712.761H596.727L592.466 715.591V713.443L596.83 710.545H598.943ZM609.418 728.239C608.418 728.239 607.517 728.04 606.716 727.642C605.915 727.244 605.273 726.699 604.79 726.006C604.307 725.312 604.043 724.523 603.997 723.636H606.043C606.122 724.426 606.48 725.08 607.116 725.597C607.759 726.108 608.526 726.364 609.418 726.364C610.134 726.364 610.77 726.196 611.327 725.861C611.889 725.526 612.33 725.065 612.648 724.48C612.972 723.889 613.134 723.222 613.134 722.477C613.134 721.716 612.966 721.037 612.631 720.44C612.301 719.838 611.847 719.364 611.267 719.017C610.688 718.67 610.026 718.494 609.281 718.489C608.747 718.483 608.199 718.565 607.636 718.736C607.074 718.901 606.611 719.114 606.247 719.375L604.27 719.136L605.327 710.545H614.395V712.42H607.099L606.486 717.568H606.588C606.946 717.284 607.395 717.048 607.935 716.861C608.474 716.673 609.037 716.58 609.622 716.58C610.69 716.58 611.642 716.835 612.477 717.347C613.318 717.852 613.977 718.545 614.455 719.426C614.938 720.307 615.179 721.312 615.179 722.443C615.179 723.557 614.929 724.551 614.429 725.426C613.935 726.295 613.253 726.983 612.384 727.489C611.514 727.989 610.526 728.239 609.418 728.239ZM624.121 710.307C624.837 710.312 625.553 710.449 626.269 710.716C626.985 710.983 627.638 711.426 628.229 712.045C628.82 712.659 629.295 713.497 629.653 714.56C630.011 715.622 630.19 716.955 630.19 718.557C630.19 720.108 630.042 721.486 629.746 722.69C629.457 723.889 629.036 724.901 628.485 725.724C627.94 726.548 627.275 727.173 626.491 727.599C625.712 728.026 624.832 728.239 623.849 728.239C622.871 728.239 621.999 728.045 621.232 727.659C620.471 727.267 619.846 726.724 619.357 726.031C618.874 725.332 618.565 724.523 618.428 723.602H620.508C620.695 724.403 621.067 725.065 621.624 725.588C622.187 726.105 622.928 726.364 623.849 726.364C625.195 726.364 626.258 725.776 627.036 724.599C627.82 723.423 628.212 721.761 628.212 719.614H628.076C627.758 720.091 627.38 720.503 626.942 720.849C626.505 721.196 626.019 721.463 625.485 721.651C624.951 721.838 624.383 721.932 623.781 721.932C622.781 721.932 621.863 721.685 621.028 721.19C620.198 720.69 619.533 720.006 619.033 719.136C618.539 718.261 618.292 717.261 618.292 716.136C618.292 715.068 618.531 714.091 619.008 713.205C619.491 712.312 620.167 711.602 621.036 711.074C621.911 710.545 622.94 710.29 624.121 710.307ZM624.121 712.182C623.406 712.182 622.761 712.361 622.187 712.719C621.619 713.071 621.167 713.548 620.832 714.151C620.502 714.747 620.337 715.409 620.337 716.136C620.337 716.864 620.496 717.526 620.815 718.122C621.138 718.713 621.579 719.185 622.136 719.537C622.698 719.884 623.337 720.057 624.053 720.057C624.593 720.057 625.096 719.952 625.562 719.741C626.028 719.526 626.434 719.233 626.781 718.864C627.133 718.489 627.408 718.065 627.607 717.594C627.806 717.116 627.906 716.619 627.906 716.102C627.906 715.42 627.741 714.781 627.411 714.185C627.087 713.588 626.638 713.105 626.065 712.736C625.496 712.366 624.849 712.182 624.121 712.182Z"
        fill="#A9448C"
        id="path1380"
      />
      <path
        d="M648.943 525.545V543H646.83V527.761H646.727L642.466 530.591V528.443L646.83 525.545H648.943ZM659.759 543.239C659.043 543.227 658.327 543.091 657.611 542.83C656.895 542.568 656.241 542.128 655.651 541.509C655.06 540.884 654.585 540.04 654.227 538.977C653.869 537.909 653.69 536.568 653.69 534.955C653.69 533.409 653.835 532.04 654.125 530.847C654.415 529.648 654.835 528.639 655.386 527.821C655.938 526.997 656.602 526.372 657.381 525.946C658.165 525.52 659.048 525.307 660.031 525.307C661.009 525.307 661.878 525.503 662.639 525.895C663.406 526.281 664.031 526.821 664.514 527.514C664.997 528.207 665.31 529.006 665.452 529.909H663.372C663.179 529.125 662.804 528.474 662.247 527.957C661.69 527.44 660.952 527.182 660.031 527.182C658.679 527.182 657.614 527.77 656.835 528.946C656.063 530.122 655.673 531.773 655.668 533.898H655.804C656.122 533.415 656.5 533.003 656.938 532.662C657.381 532.315 657.869 532.048 658.403 531.861C658.938 531.673 659.503 531.58 660.099 531.58C661.099 531.58 662.014 531.83 662.844 532.33C663.673 532.824 664.338 533.509 664.838 534.384C665.338 535.253 665.588 536.25 665.588 537.375C665.588 538.455 665.347 539.443 664.864 540.341C664.381 541.233 663.702 541.943 662.827 542.472C661.957 542.994 660.935 543.25 659.759 543.239ZM659.759 541.364C660.474 541.364 661.116 541.185 661.685 540.827C662.259 540.469 662.71 539.989 663.04 539.386C663.375 538.784 663.543 538.114 663.543 537.375C663.543 536.653 663.381 535.997 663.057 535.406C662.739 534.81 662.298 534.335 661.736 533.983C661.179 533.631 660.543 533.455 659.827 533.455C659.287 533.455 658.784 533.562 658.318 533.778C657.852 533.989 657.443 534.278 657.091 534.648C656.744 535.017 656.472 535.44 656.273 535.918C656.074 536.389 655.974 536.886 655.974 537.409C655.974 538.102 656.136 538.75 656.46 539.352C656.79 539.955 657.239 540.44 657.807 540.81C658.381 541.179 659.031 541.364 659.759 541.364ZM674.633 543.239C673.349 543.239 672.255 542.889 671.352 542.19C670.448 541.486 669.758 540.466 669.281 539.131C668.803 537.79 668.565 536.17 668.565 534.273C668.565 532.386 668.803 530.776 669.281 529.44C669.763 528.099 670.457 527.077 671.36 526.372C672.269 525.662 673.36 525.307 674.633 525.307C675.906 525.307 676.994 525.662 677.897 526.372C678.806 527.077 679.499 528.099 679.977 529.44C680.46 530.776 680.701 532.386 680.701 534.273C680.701 536.17 680.462 537.79 679.985 539.131C679.508 540.466 678.817 541.486 677.914 542.19C677.011 542.889 675.917 543.239 674.633 543.239ZM674.633 541.364C675.906 541.364 676.894 540.75 677.599 539.523C678.303 538.295 678.656 536.545 678.656 534.273C678.656 532.761 678.494 531.474 678.17 530.412C677.852 529.349 677.391 528.54 676.789 527.983C676.192 527.426 675.474 527.148 674.633 527.148C673.371 527.148 672.386 527.77 671.675 529.014C670.965 530.253 670.61 532.006 670.61 534.273C670.61 535.784 670.769 537.068 671.087 538.125C671.406 539.182 671.863 539.986 672.46 540.537C673.062 541.088 673.786 541.364 674.633 541.364Z"
        fill="#A9448C"
        id="path1382"
      />
      <path
        d="M652.943 433.545V451H650.83V435.761H650.727L646.466 438.591V436.443L650.83 433.545H652.943ZM663.759 451.239C663.043 451.227 662.327 451.091 661.611 450.83C660.895 450.568 660.241 450.128 659.651 449.509C659.06 448.884 658.585 448.04 658.227 446.977C657.869 445.909 657.69 444.568 657.69 442.955C657.69 441.409 657.835 440.04 658.125 438.847C658.415 437.648 658.835 436.639 659.386 435.821C659.938 434.997 660.602 434.372 661.381 433.946C662.165 433.52 663.048 433.307 664.031 433.307C665.009 433.307 665.878 433.503 666.639 433.895C667.406 434.281 668.031 434.821 668.514 435.514C668.997 436.207 669.31 437.006 669.452 437.909H667.372C667.179 437.125 666.804 436.474 666.247 435.957C665.69 435.44 664.952 435.182 664.031 435.182C662.679 435.182 661.614 435.77 660.835 436.946C660.063 438.122 659.673 439.773 659.668 441.898H659.804C660.122 441.415 660.5 441.003 660.938 440.662C661.381 440.315 661.869 440.048 662.403 439.861C662.938 439.673 663.503 439.58 664.099 439.58C665.099 439.58 666.014 439.83 666.844 440.33C667.673 440.824 668.338 441.509 668.838 442.384C669.338 443.253 669.588 444.25 669.588 445.375C669.588 446.455 669.347 447.443 668.864 448.341C668.381 449.233 667.702 449.943 666.827 450.472C665.957 450.994 664.935 451.25 663.759 451.239ZM663.759 449.364C664.474 449.364 665.116 449.185 665.685 448.827C666.259 448.469 666.71 447.989 667.04 447.386C667.375 446.784 667.543 446.114 667.543 445.375C667.543 444.653 667.381 443.997 667.057 443.406C666.739 442.81 666.298 442.335 665.736 441.983C665.179 441.631 664.543 441.455 663.827 441.455C663.287 441.455 662.784 441.562 662.318 441.778C661.852 441.989 661.443 442.278 661.091 442.648C660.744 443.017 660.472 443.44 660.273 443.918C660.074 444.389 659.974 444.886 659.974 445.409C659.974 446.102 660.136 446.75 660.46 447.352C660.79 447.955 661.239 448.44 661.807 448.81C662.381 449.179 663.031 449.364 663.759 449.364ZM679.076 433.545V451H676.962V435.761H676.86L672.599 438.591V436.443L676.962 433.545H679.076Z"
        fill="#A9448C"
        id="path1384"
      />
      <path
        d="M648.943 324.545V342H646.83V326.761H646.727L642.466 329.591V327.443L646.83 324.545H648.943ZM659.759 342.239C659.043 342.227 658.327 342.091 657.611 341.83C656.895 341.568 656.241 341.128 655.651 340.509C655.06 339.884 654.585 339.04 654.227 337.977C653.869 336.909 653.69 335.568 653.69 333.955C653.69 332.409 653.835 331.04 654.125 329.847C654.415 328.648 654.835 327.639 655.386 326.821C655.938 325.997 656.602 325.372 657.381 324.946C658.165 324.52 659.048 324.307 660.031 324.307C661.009 324.307 661.878 324.503 662.639 324.895C663.406 325.281 664.031 325.821 664.514 326.514C664.997 327.207 665.31 328.006 665.452 328.909H663.372C663.179 328.125 662.804 327.474 662.247 326.957C661.69 326.44 660.952 326.182 660.031 326.182C658.679 326.182 657.614 326.77 656.835 327.946C656.063 329.122 655.673 330.773 655.668 332.898H655.804C656.122 332.415 656.5 332.003 656.938 331.662C657.381 331.315 657.869 331.048 658.403 330.861C658.938 330.673 659.503 330.58 660.099 330.58C661.099 330.58 662.014 330.83 662.844 331.33C663.673 331.824 664.338 332.509 664.838 333.384C665.338 334.253 665.588 335.25 665.588 336.375C665.588 337.455 665.347 338.443 664.864 339.341C664.381 340.233 663.702 340.943 662.827 341.472C661.957 341.994 660.935 342.25 659.759 342.239ZM659.759 340.364C660.474 340.364 661.116 340.185 661.685 339.827C662.259 339.469 662.71 338.989 663.04 338.386C663.375 337.784 663.543 337.114 663.543 336.375C663.543 335.653 663.381 334.997 663.057 334.406C662.739 333.81 662.298 333.335 661.736 332.983C661.179 332.631 660.543 332.455 659.827 332.455C659.287 332.455 658.784 332.562 658.318 332.778C657.852 332.989 657.443 333.278 657.091 333.648C656.744 334.017 656.472 334.44 656.273 334.918C656.074 335.389 655.974 335.886 655.974 336.409C655.974 337.102 656.136 337.75 656.46 338.352C656.79 338.955 657.239 339.44 657.807 339.81C658.381 340.179 659.031 340.364 659.759 340.364ZM668.94 342V340.466L674.701 334.159C675.377 333.42 675.934 332.778 676.371 332.233C676.809 331.682 677.133 331.165 677.343 330.682C677.559 330.193 677.667 329.682 677.667 329.148C677.667 328.534 677.519 328.003 677.224 327.554C676.934 327.105 676.536 326.759 676.031 326.514C675.525 326.27 674.957 326.148 674.326 326.148C673.656 326.148 673.07 326.287 672.57 326.565C672.076 326.838 671.692 327.222 671.42 327.716C671.153 328.21 671.019 328.79 671.019 329.455H669.008C669.008 328.432 669.244 327.534 669.715 326.761C670.187 325.989 670.829 325.386 671.641 324.955C672.46 324.523 673.377 324.307 674.394 324.307C675.417 324.307 676.323 324.523 677.113 324.955C677.903 325.386 678.522 325.969 678.971 326.702C679.42 327.435 679.644 328.25 679.644 329.148C679.644 329.79 679.528 330.418 679.295 331.031C679.067 331.639 678.67 332.318 678.102 333.068C677.539 333.812 676.758 334.722 675.758 335.795L671.837 339.989V340.125H679.951V342H668.94Z"
        fill="#A9448C"
        id="path1386"
      />
      <path
        d="M648.943 160.545V178H646.83V162.761H646.727L642.466 165.591V163.443L646.83 160.545H648.943ZM659.759 178.239C659.043 178.227 658.327 178.091 657.611 177.83C656.895 177.568 656.241 177.128 655.651 176.509C655.06 175.884 654.585 175.04 654.227 173.977C653.869 172.909 653.69 171.568 653.69 169.955C653.69 168.409 653.835 167.04 654.125 165.847C654.415 164.648 654.835 163.639 655.386 162.821C655.938 161.997 656.602 161.372 657.381 160.946C658.165 160.52 659.048 160.307 660.031 160.307C661.009 160.307 661.878 160.503 662.639 160.895C663.406 161.281 664.031 161.821 664.514 162.514C664.997 163.207 665.31 164.006 665.452 164.909H663.372C663.179 164.125 662.804 163.474 662.247 162.957C661.69 162.44 660.952 162.182 660.031 162.182C658.679 162.182 657.614 162.77 656.835 163.946C656.063 165.122 655.673 166.773 655.668 168.898H655.804C656.122 168.415 656.5 168.003 656.938 167.662C657.381 167.315 657.869 167.048 658.403 166.861C658.938 166.673 659.503 166.58 660.099 166.58C661.099 166.58 662.014 166.83 662.844 167.33C663.673 167.824 664.338 168.509 664.838 169.384C665.338 170.253 665.588 171.25 665.588 172.375C665.588 173.455 665.347 174.443 664.864 175.341C664.381 176.233 663.702 176.943 662.827 177.472C661.957 177.994 660.935 178.25 659.759 178.239ZM659.759 176.364C660.474 176.364 661.116 176.185 661.685 175.827C662.259 175.469 662.71 174.989 663.04 174.386C663.375 173.784 663.543 173.114 663.543 172.375C663.543 171.653 663.381 170.997 663.057 170.406C662.739 169.81 662.298 169.335 661.736 168.983C661.179 168.631 660.543 168.455 659.827 168.455C659.287 168.455 658.784 168.562 658.318 168.778C657.852 168.989 657.443 169.278 657.091 169.648C656.744 170.017 656.472 170.44 656.273 170.918C656.074 171.389 655.974 171.886 655.974 172.409C655.974 173.102 656.136 173.75 656.46 174.352C656.79 174.955 657.239 175.44 657.807 175.81C658.381 176.179 659.031 176.364 659.759 176.364ZM674.837 178.239C673.712 178.239 672.71 178.045 671.829 177.659C670.954 177.273 670.258 176.736 669.741 176.048C669.229 175.355 668.951 174.551 668.906 173.636H671.053C671.099 174.199 671.292 174.685 671.633 175.094C671.974 175.497 672.42 175.81 672.971 176.031C673.522 176.253 674.133 176.364 674.803 176.364C675.553 176.364 676.218 176.233 676.798 175.972C677.377 175.71 677.832 175.347 678.161 174.881C678.491 174.415 678.656 173.875 678.656 173.261C678.656 172.619 678.496 172.054 678.178 171.565C677.86 171.071 677.394 170.685 676.781 170.406C676.167 170.128 675.417 169.989 674.531 169.989H673.133V168.114H674.531C675.224 168.114 675.832 167.989 676.354 167.739C676.883 167.489 677.295 167.136 677.59 166.682C677.891 166.227 678.042 165.693 678.042 165.08C678.042 164.489 677.911 163.974 677.65 163.537C677.388 163.099 677.019 162.759 676.542 162.514C676.07 162.27 675.513 162.148 674.871 162.148C674.269 162.148 673.701 162.259 673.167 162.48C672.638 162.696 672.207 163.011 671.871 163.426C671.536 163.835 671.354 164.33 671.326 164.909H669.281C669.315 163.994 669.59 163.193 670.107 162.506C670.624 161.812 671.3 161.273 672.136 160.886C672.977 160.5 673.9 160.307 674.906 160.307C675.985 160.307 676.911 160.526 677.684 160.963C678.457 161.395 679.05 161.966 679.465 162.676C679.88 163.386 680.087 164.153 680.087 164.977C680.087 165.96 679.829 166.798 679.312 167.491C678.8 168.185 678.104 168.665 677.224 168.932V169.068C678.326 169.25 679.187 169.719 679.806 170.474C680.425 171.224 680.735 172.153 680.735 173.261C680.735 174.21 680.477 175.062 679.96 175.818C679.448 176.568 678.749 177.159 677.863 177.591C676.977 178.023 675.968 178.239 674.837 178.239Z"
        fill="#A9448C"
        id="path1388"
      />
      <path
        d="M535.943 153.545V171H533.83V155.761H533.727L529.466 158.591V156.443L533.83 153.545H535.943ZM546.759 171.239C546.043 171.227 545.327 171.091 544.611 170.83C543.895 170.568 543.241 170.128 542.651 169.509C542.06 168.884 541.585 168.04 541.227 166.977C540.869 165.909 540.69 164.568 540.69 162.955C540.69 161.409 540.835 160.04 541.125 158.847C541.415 157.648 541.835 156.639 542.386 155.821C542.938 154.997 543.602 154.372 544.381 153.946C545.165 153.52 546.048 153.307 547.031 153.307C548.009 153.307 548.878 153.503 549.639 153.895C550.406 154.281 551.031 154.821 551.514 155.514C551.997 156.207 552.31 157.006 552.452 157.909H550.372C550.179 157.125 549.804 156.474 549.247 155.957C548.69 155.44 547.952 155.182 547.031 155.182C545.679 155.182 544.614 155.77 543.835 156.946C543.063 158.122 542.673 159.773 542.668 161.898H542.804C543.122 161.415 543.5 161.003 543.938 160.662C544.381 160.315 544.869 160.048 545.403 159.861C545.938 159.673 546.503 159.58 547.099 159.58C548.099 159.58 549.014 159.83 549.844 160.33C550.673 160.824 551.338 161.509 551.838 162.384C552.338 163.253 552.588 164.25 552.588 165.375C552.588 166.455 552.347 167.443 551.864 168.341C551.381 169.233 550.702 169.943 549.827 170.472C548.957 170.994 547.935 171.25 546.759 171.239ZM546.759 169.364C547.474 169.364 548.116 169.185 548.685 168.827C549.259 168.469 549.71 167.989 550.04 167.386C550.375 166.784 550.543 166.114 550.543 165.375C550.543 164.653 550.381 163.997 550.057 163.406C549.739 162.81 549.298 162.335 548.736 161.983C548.179 161.631 547.543 161.455 546.827 161.455C546.287 161.455 545.784 161.562 545.318 161.778C544.852 161.989 544.443 162.278 544.091 162.648C543.744 163.017 543.472 163.44 543.273 163.918C543.074 164.389 542.974 164.886 542.974 165.409C542.974 166.102 543.136 166.75 543.46 167.352C543.79 167.955 544.239 168.44 544.807 168.81C545.381 169.179 546.031 169.364 546.759 169.364ZM555.531 167.42V165.682L563.201 153.545H564.462V156.239H563.61L557.815 165.409V165.545H568.144V167.42H555.531ZM563.746 171V166.892V166.082V153.545H565.758V171H563.746Z"
        fill="#A9448C"
        id="path1390"
      />
      <path
        d="M534.943 333.545V351H532.83V335.761H532.727L528.466 338.591V336.443L532.83 333.545H534.943ZM545.759 351.239C545.043 351.227 544.327 351.091 543.611 350.83C542.895 350.568 542.241 350.128 541.651 349.509C541.06 348.884 540.585 348.04 540.227 346.977C539.869 345.909 539.69 344.568 539.69 342.955C539.69 341.409 539.835 340.04 540.125 338.847C540.415 337.648 540.835 336.639 541.386 335.821C541.938 334.997 542.602 334.372 543.381 333.946C544.165 333.52 545.048 333.307 546.031 333.307C547.009 333.307 547.878 333.503 548.639 333.895C549.406 334.281 550.031 334.821 550.514 335.514C550.997 336.207 551.31 337.006 551.452 337.909H549.372C549.179 337.125 548.804 336.474 548.247 335.957C547.69 335.44 546.952 335.182 546.031 335.182C544.679 335.182 543.614 335.77 542.835 336.946C542.063 338.122 541.673 339.773 541.668 341.898H541.804C542.122 341.415 542.5 341.003 542.938 340.662C543.381 340.315 543.869 340.048 544.403 339.861C544.938 339.673 545.503 339.58 546.099 339.58C547.099 339.58 548.014 339.83 548.844 340.33C549.673 340.824 550.338 341.509 550.838 342.384C551.338 343.253 551.588 344.25 551.588 345.375C551.588 346.455 551.347 347.443 550.864 348.341C550.381 349.233 549.702 349.943 548.827 350.472C547.957 350.994 546.935 351.25 545.759 351.239ZM545.759 349.364C546.474 349.364 547.116 349.185 547.685 348.827C548.259 348.469 548.71 347.989 549.04 347.386C549.375 346.784 549.543 346.114 549.543 345.375C549.543 344.653 549.381 343.997 549.057 343.406C548.739 342.81 548.298 342.335 547.736 341.983C547.179 341.631 546.543 341.455 545.827 341.455C545.287 341.455 544.784 341.562 544.318 341.778C543.852 341.989 543.443 342.278 543.091 342.648C542.744 343.017 542.472 343.44 542.273 343.918C542.074 344.389 541.974 344.886 541.974 345.409C541.974 346.102 542.136 346.75 542.46 347.352C542.79 347.955 543.239 348.44 543.807 348.81C544.381 349.179 545.031 349.364 545.759 349.364ZM560.394 351.239C559.394 351.239 558.494 351.04 557.692 350.642C556.891 350.244 556.249 349.699 555.766 349.006C555.283 348.312 555.019 347.523 554.974 346.636H557.019C557.099 347.426 557.457 348.08 558.093 348.597C558.735 349.108 559.502 349.364 560.394 349.364C561.11 349.364 561.746 349.196 562.303 348.861C562.866 348.526 563.306 348.065 563.624 347.48C563.948 346.889 564.11 346.222 564.11 345.477C564.11 344.716 563.942 344.037 563.607 343.44C563.278 342.838 562.823 342.364 562.244 342.017C561.664 341.67 561.002 341.494 560.258 341.489C559.724 341.483 559.175 341.565 558.613 341.736C558.05 341.901 557.587 342.114 557.224 342.375L555.246 342.136L556.303 333.545H565.371V335.42H558.076L557.462 340.568H557.565C557.923 340.284 558.371 340.048 558.911 339.861C559.451 339.673 560.013 339.58 560.599 339.58C561.667 339.58 562.619 339.835 563.454 340.347C564.295 340.852 564.954 341.545 565.431 342.426C565.914 343.307 566.156 344.312 566.156 345.443C566.156 346.557 565.906 347.551 565.406 348.426C564.911 349.295 564.229 349.983 563.36 350.489C562.491 350.989 561.502 351.239 560.394 351.239Z"
        fill="#A9448C"
        id="path1392"
      />
      <path
        d="M536.943 433.545V451H534.83V435.761H534.727L530.466 438.591V436.443L534.83 433.545H536.943ZM547.759 451.239C547.043 451.227 546.327 451.091 545.611 450.83C544.895 450.568 544.241 450.128 543.651 449.509C543.06 448.884 542.585 448.04 542.227 446.977C541.869 445.909 541.69 444.568 541.69 442.955C541.69 441.409 541.835 440.04 542.125 438.847C542.415 437.648 542.835 436.639 543.386 435.821C543.938 434.997 544.602 434.372 545.381 433.946C546.165 433.52 547.048 433.307 548.031 433.307C549.009 433.307 549.878 433.503 550.639 433.895C551.406 434.281 552.031 434.821 552.514 435.514C552.997 436.207 553.31 437.006 553.452 437.909H551.372C551.179 437.125 550.804 436.474 550.247 435.957C549.69 435.44 548.952 435.182 548.031 435.182C546.679 435.182 545.614 435.77 544.835 436.946C544.063 438.122 543.673 439.773 543.668 441.898H543.804C544.122 441.415 544.5 441.003 544.938 440.662C545.381 440.315 545.869 440.048 546.403 439.861C546.938 439.673 547.503 439.58 548.099 439.58C549.099 439.58 550.014 439.83 550.844 440.33C551.673 440.824 552.338 441.509 552.838 442.384C553.338 443.253 553.588 444.25 553.588 445.375C553.588 446.455 553.347 447.443 552.864 448.341C552.381 449.233 551.702 449.943 550.827 450.472C549.957 450.994 548.935 451.25 547.759 451.239ZM547.759 449.364C548.474 449.364 549.116 449.185 549.685 448.827C550.259 448.469 550.71 447.989 551.04 447.386C551.375 446.784 551.543 446.114 551.543 445.375C551.543 444.653 551.381 443.997 551.057 443.406C550.739 442.81 550.298 442.335 549.736 441.983C549.179 441.631 548.543 441.455 547.827 441.455C547.287 441.455 546.784 441.562 546.318 441.778C545.852 441.989 545.443 442.278 545.091 442.648C544.744 443.017 544.472 443.44 544.273 443.918C544.074 444.389 543.974 444.886 543.974 445.409C543.974 446.102 544.136 446.75 544.46 447.352C544.79 447.955 545.239 448.44 545.807 448.81C546.381 449.179 547.031 449.364 547.759 449.364ZM562.735 451.239C562.019 451.227 561.303 451.091 560.587 450.83C559.871 450.568 559.218 450.128 558.627 449.509C558.036 448.884 557.562 448.04 557.204 446.977C556.846 445.909 556.667 444.568 556.667 442.955C556.667 441.409 556.812 440.04 557.102 438.847C557.391 437.648 557.812 436.639 558.363 435.821C558.914 434.997 559.579 434.372 560.357 433.946C561.141 433.52 562.025 433.307 563.008 433.307C563.985 433.307 564.854 433.503 565.616 433.895C566.383 434.281 567.008 434.821 567.491 435.514C567.974 436.207 568.286 437.006 568.428 437.909H566.349C566.156 437.125 565.781 436.474 565.224 435.957C564.667 435.44 563.928 435.182 563.008 435.182C561.656 435.182 560.59 435.77 559.812 436.946C559.039 438.122 558.65 439.773 558.644 441.898H558.781C559.099 441.415 559.477 441.003 559.914 440.662C560.357 440.315 560.846 440.048 561.38 439.861C561.914 439.673 562.479 439.58 563.076 439.58C564.076 439.58 564.991 439.83 565.82 440.33C566.65 440.824 567.315 441.509 567.815 442.384C568.315 443.253 568.565 444.25 568.565 445.375C568.565 446.455 568.323 447.443 567.84 448.341C567.357 449.233 566.678 449.943 565.803 450.472C564.934 450.994 563.911 451.25 562.735 451.239ZM562.735 449.364C563.451 449.364 564.093 449.185 564.661 448.827C565.235 448.469 565.687 447.989 566.016 447.386C566.352 446.784 566.519 446.114 566.519 445.375C566.519 444.653 566.357 443.997 566.033 443.406C565.715 442.81 565.275 442.335 564.712 441.983C564.156 441.631 563.519 441.455 562.803 441.455C562.263 441.455 561.761 441.562 561.295 441.778C560.829 441.989 560.42 442.278 560.067 442.648C559.721 443.017 559.448 443.44 559.249 443.918C559.05 444.389 558.951 444.886 558.951 445.409C558.951 446.102 559.113 446.75 559.437 447.352C559.766 447.955 560.215 448.44 560.783 448.81C561.357 449.179 562.008 449.364 562.735 449.364Z"
        fill="#A9448C"
        id="path1394"
      />
      <path
        d="M537.943 529.545V547H535.83V531.761H535.727L531.466 534.591V532.443L535.83 529.545H537.943ZM548.759 547.239C548.043 547.227 547.327 547.091 546.611 546.83C545.895 546.568 545.241 546.128 544.651 545.509C544.06 544.884 543.585 544.04 543.227 542.977C542.869 541.909 542.69 540.568 542.69 538.955C542.69 537.409 542.835 536.04 543.125 534.847C543.415 533.648 543.835 532.639 544.386 531.821C544.938 530.997 545.602 530.372 546.381 529.946C547.165 529.52 548.048 529.307 549.031 529.307C550.009 529.307 550.878 529.503 551.639 529.895C552.406 530.281 553.031 530.821 553.514 531.514C553.997 532.207 554.31 533.006 554.452 533.909H552.372C552.179 533.125 551.804 532.474 551.247 531.957C550.69 531.44 549.952 531.182 549.031 531.182C547.679 531.182 546.614 531.77 545.835 532.946C545.063 534.122 544.673 535.773 544.668 537.898H544.804C545.122 537.415 545.5 537.003 545.938 536.662C546.381 536.315 546.869 536.048 547.403 535.861C547.938 535.673 548.503 535.58 549.099 535.58C550.099 535.58 551.014 535.83 551.844 536.33C552.673 536.824 553.338 537.509 553.838 538.384C554.338 539.253 554.588 540.25 554.588 541.375C554.588 542.455 554.347 543.443 553.864 544.341C553.381 545.233 552.702 545.943 551.827 546.472C550.957 546.994 549.935 547.25 548.759 547.239ZM548.759 545.364C549.474 545.364 550.116 545.185 550.685 544.827C551.259 544.469 551.71 543.989 552.04 543.386C552.375 542.784 552.543 542.114 552.543 541.375C552.543 540.653 552.381 539.997 552.057 539.406C551.739 538.81 551.298 538.335 550.736 537.983C550.179 537.631 549.543 537.455 548.827 537.455C548.287 537.455 547.784 537.562 547.318 537.778C546.852 537.989 546.443 538.278 546.091 538.648C545.744 539.017 545.472 539.44 545.273 539.918C545.074 540.389 544.974 540.886 544.974 541.409C544.974 542.102 545.136 542.75 545.46 543.352C545.79 543.955 546.239 544.44 546.807 544.81C547.381 545.179 548.031 545.364 548.759 545.364ZM558.485 547L566.292 531.557V531.42H557.292V529.545H568.474V531.523L560.701 547H558.485Z"
        fill="#A9448C"
        id="path1396"
      />
      <path
        d="M285.943 341.545V359H283.83V343.761H283.727L279.466 346.591V344.443L283.83 341.545H285.943ZM296.759 359.239C296.043 359.227 295.327 359.091 294.611 358.83C293.895 358.568 293.241 358.128 292.651 357.509C292.06 356.884 291.585 356.04 291.227 354.977C290.869 353.909 290.69 352.568 290.69 350.955C290.69 349.409 290.835 348.04 291.125 346.847C291.415 345.648 291.835 344.639 292.386 343.821C292.938 342.997 293.602 342.372 294.381 341.946C295.165 341.52 296.048 341.307 297.031 341.307C298.009 341.307 298.878 341.503 299.639 341.895C300.406 342.281 301.031 342.821 301.514 343.514C301.997 344.207 302.31 345.006 302.452 345.909H300.372C300.179 345.125 299.804 344.474 299.247 343.957C298.69 343.44 297.952 343.182 297.031 343.182C295.679 343.182 294.614 343.77 293.835 344.946C293.063 346.122 292.673 347.773 292.668 349.898H292.804C293.122 349.415 293.5 349.003 293.938 348.662C294.381 348.315 294.869 348.048 295.403 347.861C295.938 347.673 296.503 347.58 297.099 347.58C298.099 347.58 299.014 347.83 299.844 348.33C300.673 348.824 301.338 349.509 301.838 350.384C302.338 351.253 302.588 352.25 302.588 353.375C302.588 354.455 302.347 355.443 301.864 356.341C301.381 357.233 300.702 357.943 299.827 358.472C298.957 358.994 297.935 359.25 296.759 359.239ZM296.759 357.364C297.474 357.364 298.116 357.185 298.685 356.827C299.259 356.469 299.71 355.989 300.04 355.386C300.375 354.784 300.543 354.114 300.543 353.375C300.543 352.653 300.381 351.997 300.057 351.406C299.739 350.81 299.298 350.335 298.736 349.983C298.179 349.631 297.543 349.455 296.827 349.455C296.287 349.455 295.784 349.562 295.318 349.778C294.852 349.989 294.443 350.278 294.091 350.648C293.744 351.017 293.472 351.44 293.273 351.918C293.074 352.389 292.974 352.886 292.974 353.409C292.974 354.102 293.136 354.75 293.46 355.352C293.79 355.955 294.239 356.44 294.807 356.81C295.381 357.179 296.031 357.364 296.759 357.364ZM311.531 359.239C310.36 359.239 309.326 359.031 308.428 358.616C307.536 358.196 306.84 357.619 306.34 356.886C305.84 356.148 305.593 355.307 305.599 354.364C305.593 353.625 305.738 352.943 306.033 352.318C306.329 351.687 306.732 351.162 307.244 350.741C307.761 350.315 308.337 350.045 308.974 349.932V349.83C308.138 349.614 307.474 349.145 306.979 348.423C306.485 347.696 306.241 346.869 306.246 345.943C306.241 345.057 306.465 344.264 306.92 343.565C307.374 342.866 307.999 342.315 308.795 341.912C309.596 341.509 310.508 341.307 311.531 341.307C312.542 341.307 313.445 341.509 314.241 341.912C315.036 342.315 315.661 342.866 316.116 343.565C316.576 344.264 316.809 345.057 316.815 345.943C316.809 346.869 316.556 347.696 316.056 348.423C315.562 349.145 314.906 349.614 314.087 349.83V349.932C314.718 350.045 315.286 350.315 315.792 350.741C316.298 351.162 316.701 351.687 317.002 352.318C317.303 352.943 317.457 353.625 317.462 354.364C317.457 355.307 317.201 356.148 316.695 356.886C316.195 357.619 315.499 358.196 314.607 358.616C313.721 359.031 312.695 359.239 311.531 359.239ZM311.531 357.364C312.32 357.364 313.002 357.236 313.576 356.98C314.15 356.724 314.593 356.364 314.906 355.898C315.218 355.432 315.377 354.886 315.383 354.261C315.377 353.602 315.207 353.02 314.871 352.514C314.536 352.009 314.079 351.611 313.499 351.321C312.925 351.031 312.269 350.886 311.531 350.886C310.786 350.886 310.121 351.031 309.536 351.321C308.957 351.611 308.499 352.009 308.164 352.514C307.835 353.02 307.673 353.602 307.678 354.261C307.673 354.886 307.823 355.432 308.13 355.898C308.442 356.364 308.888 356.724 309.468 356.98C310.048 357.236 310.735 357.364 311.531 357.364ZM311.531 349.08C312.156 349.08 312.71 348.955 313.192 348.705C313.681 348.455 314.065 348.105 314.343 347.656C314.621 347.207 314.763 346.682 314.769 346.08C314.763 345.489 314.624 344.974 314.352 344.537C314.079 344.094 313.701 343.753 313.218 343.514C312.735 343.27 312.173 343.148 311.531 343.148C310.877 343.148 310.306 343.27 309.817 343.514C309.329 343.753 308.951 344.094 308.684 344.537C308.417 344.974 308.286 345.489 308.292 346.08C308.286 346.682 308.42 347.207 308.692 347.656C308.971 348.105 309.354 348.455 309.843 348.705C310.332 348.955 310.894 349.08 311.531 349.08Z"
        fill="#A9448C"
        id="path1398"
      />
      <path
        d="M285.943 178.545V196H283.83V180.761H283.727L279.466 183.591V181.443L283.83 178.545H285.943ZM296.759 196.239C296.043 196.227 295.327 196.091 294.611 195.83C293.895 195.568 293.241 195.128 292.651 194.509C292.06 193.884 291.585 193.04 291.227 191.977C290.869 190.909 290.69 189.568 290.69 187.955C290.69 186.409 290.835 185.04 291.125 183.847C291.415 182.648 291.835 181.639 292.386 180.821C292.938 179.997 293.602 179.372 294.381 178.946C295.165 178.52 296.048 178.307 297.031 178.307C298.009 178.307 298.878 178.503 299.639 178.895C300.406 179.281 301.031 179.821 301.514 180.514C301.997 181.207 302.31 182.006 302.452 182.909H300.372C300.179 182.125 299.804 181.474 299.247 180.957C298.69 180.44 297.952 180.182 297.031 180.182C295.679 180.182 294.614 180.77 293.835 181.946C293.063 183.122 292.673 184.773 292.668 186.898H292.804C293.122 186.415 293.5 186.003 293.938 185.662C294.381 185.315 294.869 185.048 295.403 184.861C295.938 184.673 296.503 184.58 297.099 184.58C298.099 184.58 299.014 184.83 299.844 185.33C300.673 185.824 301.338 186.509 301.838 187.384C302.338 188.253 302.588 189.25 302.588 190.375C302.588 191.455 302.347 192.443 301.864 193.341C301.381 194.233 300.702 194.943 299.827 195.472C298.957 195.994 297.935 196.25 296.759 196.239ZM296.759 194.364C297.474 194.364 298.116 194.185 298.685 193.827C299.259 193.469 299.71 192.989 300.04 192.386C300.375 191.784 300.543 191.114 300.543 190.375C300.543 189.653 300.381 188.997 300.057 188.406C299.739 187.81 299.298 187.335 298.736 186.983C298.179 186.631 297.543 186.455 296.827 186.455C296.287 186.455 295.784 186.562 295.318 186.778C294.852 186.989 294.443 187.278 294.091 187.648C293.744 188.017 293.472 188.44 293.273 188.918C293.074 189.389 292.974 189.886 292.974 190.409C292.974 191.102 293.136 191.75 293.46 192.352C293.79 192.955 294.239 193.44 294.807 193.81C295.381 194.179 296.031 194.364 296.759 194.364ZM311.496 178.307C312.212 178.312 312.928 178.449 313.644 178.716C314.36 178.983 315.013 179.426 315.604 180.045C316.195 180.659 316.67 181.497 317.028 182.56C317.386 183.622 317.565 184.955 317.565 186.557C317.565 188.108 317.417 189.486 317.121 190.69C316.832 191.889 316.411 192.901 315.86 193.724C315.315 194.548 314.65 195.173 313.866 195.599C313.087 196.026 312.207 196.239 311.224 196.239C310.246 196.239 309.374 196.045 308.607 195.659C307.846 195.267 307.221 194.724 306.732 194.031C306.249 193.332 305.94 192.523 305.803 191.602H307.883C308.07 192.403 308.442 193.065 308.999 193.588C309.562 194.105 310.303 194.364 311.224 194.364C312.57 194.364 313.633 193.776 314.411 192.599C315.195 191.423 315.587 189.761 315.587 187.614H315.451C315.133 188.091 314.755 188.503 314.317 188.849C313.88 189.196 313.394 189.463 312.86 189.651C312.326 189.838 311.758 189.932 311.156 189.932C310.156 189.932 309.238 189.685 308.403 189.19C307.573 188.69 306.908 188.006 306.408 187.136C305.914 186.261 305.667 185.261 305.667 184.136C305.667 183.068 305.906 182.091 306.383 181.205C306.866 180.312 307.542 179.602 308.411 179.074C309.286 178.545 310.315 178.29 311.496 178.307ZM311.496 180.182C310.781 180.182 310.136 180.361 309.562 180.719C308.994 181.071 308.542 181.548 308.207 182.151C307.877 182.747 307.712 183.409 307.712 184.136C307.712 184.864 307.871 185.526 308.19 186.122C308.513 186.713 308.954 187.185 309.511 187.537C310.073 187.884 310.712 188.057 311.428 188.057C311.968 188.057 312.471 187.952 312.937 187.741C313.403 187.526 313.809 187.233 314.156 186.864C314.508 186.489 314.783 186.065 314.982 185.594C315.181 185.116 315.281 184.619 315.281 184.102C315.281 183.42 315.116 182.781 314.786 182.185C314.462 181.588 314.013 181.105 313.44 180.736C312.871 180.366 312.224 180.182 311.496 180.182Z"
        fill="#A9448C"
        id="path1400"
      />
    </svg>
  );
};
export default Phase5;
