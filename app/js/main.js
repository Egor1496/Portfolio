const COLOR_THEME_LIST = [
	[
		"--base-color: #fff;",
		"--light-color: #F5F5F5;",
		"--low-priority-color: #4c4a58;",
		"--primary-color: #7562E0;",
		"--secondary-color: #282162;",
		"--dark-color: #000036;",
		"--section-bg: #1a1a29;",
		"--darrk-bg: #181824;",
		"--icon-color: none;",
		"--button-radius: 0px;",
	],
	[
		"--base-color: #ffffff;",
		"--light-color: #f5f5f5;",
		"--low-priority-color: #848191;",
		"--primary-color: #e0ba62;",
		"--secondary-color: #623321;",
		"--dark-color: #003601;",
		"--section-bg: #1e291a;",
		"--darrk-bg: #1a2418;",
		"--icon-color: none;",
		"--button-radius: 5px;",
	],
	[
		"--base-color: #ffffff;",
		"--light-color: #f5f5f5;",
		"--low-priority-color: #305a5a;",
		"--primary-color: #e09f62;",
		"--secondary-color: #623321;",
		"--dark-color: #2a0036;",
		"--section-bg: #1b1a29;",
		"--darrk-bg: #241818;",
		"--icon-color: none;",
		"--button-radius: 10px;",
	],
	[
		"--base-color: #ffffff;",
		"--light-color: #f5f5f5;",
		"--low-priority-color: #2f4646;",
		"--primary-color: #959f3c;",
		"--secondary-color: #21623a;",
		"--dark-color: #033600;",
		"--section-bg: #1b291a;",
		"--darrk-bg: #222418;",
		"--icon-color: none;",
		"--button-radius: 20px;",
	],
	[
		"--base-color: #000000;",
		"--light-color: #2b2b2b;",
		"--low-priority-color: #bfdddd;",
		"--primary-color: #443b34;",
		"--secondary-color: #231813;",
		"--dark-color: #302832;",
		"--section-bg: #a3a1c8;",
		"--darrk-bg: #d0b5b5;",
		"--icon-color: invert(100%);",
		"--button-radius: 20px;",
	],
	[
		"--base-color: #000000;",
		"--light-color: #343434;",
		"--low-priority-color: #c4bfda;",
		"--primary-color: #eb389a;",
		"--secondary-color: #ffffe3;",
		"--dark-color: #8bc2f0;",
		"--section-bg: #c2f08b;",
		"--darrk-bg: #fff3f3;",
		"--icon-color: invert(60%);",
		"--button-radius: 20px;",
	],
	[
		"--base-color: #000000;",
		"--light-color: #343434;",
		"--low-priority-color: #beffd8;",
		"--primary-color: #FF6347;",
		"--secondary-color: #ffffe3;",
		"--dark-color: #8bc2f0;",
		"--section-bg: #F0E68C;",
		"--darrk-bg: #fff3f3;",
		"--icon-color: invert(60%);",
		"--button-radius: 20px;",
	],
	[
		"--base-color: #fff;",
		"--light-color: #b3b3b3;",
		"--low-priority-color: #6c6c6c;",
		"--primary-color: #380080;",
		"--secondary-color: #ffffe3;",
		"--dark-color: #8bc2f0;",
		"--section-bg: #262626;",
		"--darrk-bg: #626262;",
		"--icon-color: none;",
		"--button-radius: 20px;",
	],
	[
		"--base-color: #000000;",
		"--light-color: #343434;",
		"--low-priority-color: #d9d9d9;",
		"--primary-color: #fbff4c;",
		"--secondary-color: #ffffe3;",
		"--dark-color: #8bc2f0;",
		"--section-bg: #92f08c;",
		"--darrk-bg: #fff3f3;",
		"--icon-color: invert(60%);",
		"--button-radius: 20px;",
	],
];

const SHADOW = [
	[
		"--text-shadow-button: 2px 2px 4px var(--primary-color);",
		"--box-shadow-button: 0px 0px 3px var(--primary-color);",
		"--text-shadow-title: 1px 1px var(--low-priority-color), 2px 2px var(--low-priority-color);",
		"--text-shadow-big: 1px 1px var(--low-priority-color), 2px 2px var(--low-priority-color), 3px 3px var(--low-priority-color), 4px 4px var(--low-priority-color), 5px 5px var(--low-priority-color), 6px 6px var(--low-priority-color), 7px 7px 2px var(--low-priority-color);",
		"--text-shadow-nav: 1px 1px var(--low-priority-color), 2px 2px var(--low-priority-color), 3px 3px var(--low-priority-color), 4px 4px var(--low-priority-color);",
	],
	[
		"--text-shadow-button: -2px -2px 4px var(--primary-color);",
		"--box-shadow-button: text-shadow: 1px 1px var(--primary-color), 2px 2px var(--primary-color), 3px 3px var(--primary-color), 4px 4px var(--primary-color), 5px 5px var(--primary-color), 6px 6px var(--primary-color), 7px 7px 2px var(--primary-color);",
		"--text-shadow-title: -1px -1px var(--low-priority-color), -2px -2px var(--low-priority-color);",
		"--text-shadow-big: -1px -1px var(--low-priority-color), -2px -2px var(--low-priority-color), -3px -3px var(--low-priority-color), -4px -4px var(--low-priority-color), -5px -5px var(--low-priority-color), -6px -6px var(--low-priority-color), -7px -7px -2px var(--low-priority-color);",
		"--text-shadow-nav: -1px -1px var(--low-priority-color), -2px -2px var(--low-priority-color), -3px -3px var(--low-priority-color), -4px -4px var(--low-priority-color);",
	],
	[
		"--text-shadow-button: 2px 2px 10px var(--primary-color);",
		"--box-shadow-button: text-shadow: -1px -1px var(--primary-color), -2px -2px var(--primary-color), -3px -3px var(--primary-color), -4px -4px var(--primary-color), -5px -5px var(--primary-color), -6px -6px var(--primary-color), -7px -7px 2px var(--primary-color);",
		"--text-shadow-title: 2px 2px var(--low-priority-color), 3px 3px var(--low-priority-color);",
		"--text-shadow-big: 0 1px var(--low-priority-color), 0 2px var(--low-priority-color), 0 3px var(--low-priority-color), 0 4px var(--low-priority-color), 0 5px var(--low-priority-color), 0 6px var(--low-priority-color), 0 7px 2px var(--low-priority-color);",
		"--text-shadow-nav: 0 1px var(--low-priority-color), 0 2px var(--low-priority-color), 0 3px var(--low-priority-color), 0 4px var(--low-priority-color);",
	],
	[
		"--text-shadow-button: -2px -2px 10px var(--primary-color);",
		"--box-shadow-button: 0px 0px 10px var(--primary-color);",
		"--text-shadow-title: -2px -2px var(--low-priority-color), -3px -3px var(--low-priority-color);",
		"--text-shadow-big: 0 -1px var(--low-priority-color), 0 -2px var(--low-priority-color), 0 -3px var(--low-priority-color), 0 -4px var(--low-priority-color), 0 -5px var(--low-priority-color), 0 -6px var(--low-priority-color), 0 -7px 2px var(--low-priority-color);",
		"--text-shadow-nav: -1px var(--low-priority-color), -2px var(--low-priority-color), -3px var(--low-priority-color), -4px var(--low-priority-color);",
	],
];

const BG_PATTERN = [
	[
		"--section-pattern: linear-gradient(63deg, rgba(100, 100, 100, .05) 23%, transparent 23%) 7px 0, linear-gradient(63deg, transparent 74%, rgba(100, 100, 100, .05) 78%), linear-gradient(63deg, transparent 34%, rgba(100, 100, 100, .05) 38%, rgba(100, 100, 100, .05) 58%, transparent 62%), rgba(100, 100, 100, .05);",
		"--section-pattern-size: 16px 48px;",
	],
	[
		"--section-pattern: linear-gradient(115deg, transparent 75%, rgba(100, 100, 100, .05) 75%) 0 0, linear-gradient(245deg, transparent 75%, rgba(100, 100, 100, .05) 75%) 0 0, linear-gradient(115deg, transparent 75%, rgba(100, 100, 100, .05) 75%) 7px -15px, linear-gradient(245deg, transparent 75%, rgba(100, 100, 100, .05) 75%) 7px -15px, #36c;",
		"--section-pattern-size: 15px 30px;",
	],
	[
		"--section-pattern: linear-gradient(135deg, rgba(100, 100, 100, .05) 25%, transparent 25%) -50px 0, linear-gradient(225deg, rgba(100, 100, 100, .05) 25%, transparent 25%) -50px 0, linear-gradient(315deg, rgba(100, 100, 100, .05) 25%, transparent 25%), linear-gradient(45deg, rgba(100, 100, 100, .05) 25%, transparent 25%);",
		"--section-pattern-size: 100px 100px;",
	],
	[
		"--section-pattern: linear-gradient(135deg, transparent 21px, rgba(100, 100, 100, .05) 22px, rgba(100, 100, 100, .05) 24px, transparent 24px, transparent 67px, rgba(100, 100, 100, .05) 67px, rgba(100, 100, 100, .05) 69px, transparent 69px), linear-gradient(225deg, transparent 21px, rgba(100, 100, 100, .05) 22px, rgba(100, 100, 100, .05) 24px, transparent 24px, transparent 67px, rgba(100, 100, 100, .05) 67px, rgba(100, 100, 100, .05) 69px, transparent 69px)0 64px;",
		"--section-pattern-size: 64px 128px;",
	],
	[
		"--section-pattern: radial-gradient(rgba(100, 100, 100, .05) 4%, rgba(100, 100, 100, .05) 9%, hsla(0, 100%, 20%, 0) 9%) 0 0, radial-gradient(rgba(100, 100, 100, .05) 4%, rgba(100, 100, 100, .05) 8%, hsla(0, 100%, 20%, 0) 10%) 50px 50px, radial-gradient(rgba(100, 100, 100, .05) 20%, hsla(0, 100%, 20%, 0)) 50px 0, radial-gradient(rgba(100, 100, 100, .05) 20%, hsla(0, 100%, 20%, 0)) 0 50px, radial-gradient(hsla(0, 100%, 20%, 0.05) 35%, hsla(0, 100%, 20%, 0) 60%) 50px 0, radial-gradient(hsla(0, 100%, 20%, 0.05) 35%, hsla(0, 100%, 20%, 0) 60%) 100px 50px, radial-gradient(hsla(0, 100%, 15%, 0.05), hsla(0, 100%, 20%, 0)) 0 0, radial-gradient(hsla(0, 100%, 15%, 0.05), hsla(0, 100%, 20%, 0)) 50px 50px, linear-gradient(45deg, hsla(0, 100%, 20%, 0) 49%, hsla(0, 100%, 0%, 0.05) 50%, hsla(0, 100%, 20%, 0) 70%) 0 0, linear-gradient(-45deg, hsla(0, 100%, 20%, 0) 49%, hsla(0, 100%, 0%, 0.05) 50%, hsla(0, 100%, 20%, 0) 70%) 0 0;",
		"--section-pattern-size: 100px 100px;",
	],
	[
		"--section-pattern: radial-gradient(rgba(100, 100, 100, .05) 9px, transparent 10px), repeating-radial-gradient(rgba(100, 100, 100, .05) 0, rgba(100, 100, 100, .05) 4px, transparent 5px, transparent 20px, rgba(100, 100, 100, .05) 21px, rgba(100, 100, 100, .05) 25px, transparent 26px, transparent 50px);",
		"--section-pattern-size: 30px 30px, 90px 90px;",
	],
	[
		"--section-pattern: radial-gradient(circle closest-side at 60% 43%, rgba(100, 100, 100, .05) 26%, rgba(187,0,51,0) 27%), radial-gradient(circle closest-side at 40% 43%, rgba(100, 100, 100, .05) 26%, rgba(187,0,51,0) 27%), radial-gradient(circle closest-side at 40% 22%, rgba(100, 100, 100, .05) 45%, rgba(221,51,85,0) 46%), radial-gradient(circle closest-side at 60% 22%, rgba(100, 100, 100, .05) 45%, rgba(221,51,85,0) 46%), radial-gradient(circle closest-side at 50% 35%, rgba(100, 100, 100, .05) 30%, rgba(221,51,85,0) 31%), radial-gradient(circle closest-side at 60% 43%, rgba(100, 100, 100, .05) 26%, rgba(187,0,51,0) 27%) 50px 50px, radial-gradient(circle closest-side at 40% 43%, rgba(100, 100, 100, .05) 26%, rgba(187,0,51,0) 27%) 50px 50px, radial-gradient(circle closest-side at 40% 22%, rgba(100, 100, 100, .05) 45%, rgba(221,51,85,0) 46%) 50px 50px, radial-gradient(circle closest-side at 60% 22%, rgba(100, 100, 100, .05) 45%, rgba(221,51,85,0) 46%) 50px 50px, radial-gradient(circle closest-side at 50% 35%, rgba(100, 100, 100, .05) 30%, rgba(221,51,85,0) 31%) 50px 50px;",
		"--section-pattern-size: 100px 100px;",
	],
	[
		"--section-pattern: repeating-linear-gradient(120deg, rgba(100, 100, 100, .05), rgba(100, 100, 100, .05) 1px, transparent 1px, transparent 60px), repeating-linear-gradient(60deg, rgba(100, 100, 100, .05), rgba(100, 100, 100, .05) 1px, transparent 1px, transparent 60px), linear-gradient(60deg, rgba(100, 100, 100, .05) 25%, transparent 25%, transparent 75%, rgba(100, 100, 100, .05) 75%, rgba(100, 100, 100, .05)), linear-gradient(120deg, rgba(100, 100, 100, .05) 25%, transparent 25%, transparent 75%, rgba(100, 100, 100, .05) 75%, rgba(100, 100, 100, .05));",
		"--section-pattern-size: 70px 120px;",
	],
	[
		"--section-pattern: radial-gradient(circle at 100% 50%, transparent 20%, rgba(100, 100, 100, .05) 21%, rgba(100, 100, 100, .05) 34%, transparent 35%, transparent), radial-gradient(circle at 0% 50%, transparent 20%, rgba(100, 100, 100, .05) 21%, rgba(100, 100, 100, .05) 34%, transparent 35%, transparent) 0 -50px;",
		"--section-pattern-size: 75px 100px;",
	],
	[
		"--section-pattern: radial-gradient(circle, transparent 20%, rgba(100, 100, 100, .05) 20%, rgba(100, 100, 100, .05) 80%, transparent 80%, transparent), radial-gradient(circle, transparent 20%, rgba(100, 100, 100, .05) 20%, rgba(100, 100, 100, .05) 80%, transparent 80%, transparent) 50px 50px, linear-gradient(transparent 8px, transparent 8px) 0 -4px, linear-gradient(90deg, transparent 8px, transparent 8px) -4px 0;",
		"--section-pattern-size: 100px 100px, 100px 100px, 50px 50px, 50px 50px;",
	],
];

const SECTION_WAVE = [
	`
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none"><path fill="var(--darrk-bg)" fill-opacity="1" d="M0,256L6.2,256C12.3,256,25,256,37,229.3C49.2,203,62,149,74,144C86.2,139,98,181,111,218.7C123.1,256,135,288,148,293.3C160,299,172,277,185,256C196.9,235,209,213,222,197.3C233.8,181,246,171,258,138.7C270.8,107,283,53,295,48C307.7,43,320,85,332,96C344.6,107,357,85,369,90.7C381.5,96,394,128,406,133.3C418.5,139,431,117,443,117.3C455.4,117,468,139,480,160C492.3,181,505,203,517,224C529.2,245,542,267,554,245.3C566.2,224,578,160,591,133.3C603.1,107,615,117,628,138.7C640,160,652,192,665,208C676.9,224,689,224,702,224C713.8,224,726,224,738,224C750.8,224,763,224,775,186.7C787.7,149,800,75,812,64C824.6,53,837,107,849,149.3C861.5,192,874,224,886,229.3C898.5,235,911,213,923,224C935.4,235,948,277,960,256C972.3,235,985,149,997,112C1009.2,75,1022,85,1034,96C1046.2,107,1058,117,1071,149.3C1083.1,181,1095,235,1108,261.3C1120,288,1132,288,1145,250.7C1156.9,213,1169,139,1182,128C1193.8,117,1206,171,1218,160C1230.8,149,1243,75,1255,85.3C1267.7,96,1280,192,1292,240C1304.6,288,1317,288,1329,288C1341.5,288,1354,288,1366,266.7C1378.5,245,1391,203,1403,165.3C1415.4,128,1428,96,1434,80L1440,64L1440,320L1433.8,320C1427.7,320,1415,320,1403,320C1390.8,320,1378,320,1366,320C1353.8,320,1342,320,1329,320C1316.9,320,1305,320,1292,320C1280,320,1268,320,1255,320C1243.1,320,1231,320,1218,320C1206.2,320,1194,320,1182,320C1169.2,320,1157,320,1145,320C1132.3,320,1120,320,1108,320C1095.4,320,1083,320,1071,320C1058.5,320,1046,320,1034,320C1021.5,320,1009,320,997,320C984.6,320,972,320,960,320C947.7,320,935,320,923,320C910.8,320,898,320,886,320C873.8,320,862,320,849,320C836.9,320,825,320,812,320C800,320,788,320,775,320C763.1,320,751,320,738,320C726.2,320,714,320,702,320C689.2,320,677,320,665,320C652.3,320,640,320,628,320C615.4,320,603,320,591,320C578.5,320,566,320,554,320C541.5,320,529,320,517,320C504.6,320,492,320,480,320C467.7,320,455,320,443,320C430.8,320,418,320,406,320C393.8,320,382,320,369,320C356.9,320,345,320,332,320C320,320,308,320,295,320C283.1,320,271,320,258,320C246.2,320,234,320,222,320C209.2,320,197,320,185,320C172.3,320,160,320,148,320C135.4,320,123,320,111,320C98.5,320,86,320,74,320C61.5,320,49,320,37,320C24.6,320,12,320,6,320L0,320Z"></path></svg>
	`,
	`
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none"><path fill="var(--darrk-bg)" fill-opacity="1" d="M0,288L6.2,277.3C12.3,267,25,245,37,218.7C49.2,192,62,160,74,149.3C86.2,139,98,149,111,144C123.1,139,135,117,148,122.7C160,128,172,160,185,197.3C196.9,235,209,277,222,282.7C233.8,288,246,256,258,240C270.8,224,283,224,295,208C307.7,192,320,160,332,170.7C344.6,181,357,235,369,256C381.5,277,394,267,406,224C418.5,181,431,107,443,117.3C455.4,128,468,224,480,240C492.3,256,505,192,517,176C529.2,160,542,192,554,181.3C566.2,171,578,117,591,106.7C603.1,96,615,128,628,138.7C640,149,652,139,665,128C676.9,117,689,107,702,101.3C713.8,96,726,96,738,101.3C750.8,107,763,117,775,117.3C787.7,117,800,107,812,90.7C824.6,75,837,53,849,58.7C861.5,64,874,96,886,106.7C898.5,117,911,107,923,138.7C935.4,171,948,245,960,240C972.3,235,985,149,997,144C1009.2,139,1022,213,1034,208C1046.2,203,1058,117,1071,69.3C1083.1,21,1095,11,1108,37.3C1120,64,1132,128,1145,144C1156.9,160,1169,128,1182,133.3C1193.8,139,1206,181,1218,192C1230.8,203,1243,181,1255,149.3C1267.7,117,1280,75,1292,64C1304.6,53,1317,75,1329,96C1341.5,117,1354,139,1366,122.7C1378.5,107,1391,53,1403,32C1415.4,11,1428,21,1434,26.7L1440,32L1440,320L1433.8,320C1427.7,320,1415,320,1403,320C1390.8,320,1378,320,1366,320C1353.8,320,1342,320,1329,320C1316.9,320,1305,320,1292,320C1280,320,1268,320,1255,320C1243.1,320,1231,320,1218,320C1206.2,320,1194,320,1182,320C1169.2,320,1157,320,1145,320C1132.3,320,1120,320,1108,320C1095.4,320,1083,320,1071,320C1058.5,320,1046,320,1034,320C1021.5,320,1009,320,997,320C984.6,320,972,320,960,320C947.7,320,935,320,923,320C910.8,320,898,320,886,320C873.8,320,862,320,849,320C836.9,320,825,320,812,320C800,320,788,320,775,320C763.1,320,751,320,738,320C726.2,320,714,320,702,320C689.2,320,677,320,665,320C652.3,320,640,320,628,320C615.4,320,603,320,591,320C578.5,320,566,320,554,320C541.5,320,529,320,517,320C504.6,320,492,320,480,320C467.7,320,455,320,443,320C430.8,320,418,320,406,320C393.8,320,382,320,369,320C356.9,320,345,320,332,320C320,320,308,320,295,320C283.1,320,271,320,258,320C246.2,320,234,320,222,320C209.2,320,197,320,185,320C172.3,320,160,320,148,320C135.4,320,123,320,111,320C98.5,320,86,320,74,320C61.5,320,49,320,37,320C24.6,320,12,320,6,320L0,320Z"></path></svg>
		`,
	`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none"><path fill="var(--darrk-bg)" fill-opacity="1" d="M0,192L72,96L144,64L216,128L288,288L360,224L432,32L504,64L576,0L648,32L720,256L792,96L864,256L936,96L1008,224L1080,128L1152,192L1224,32L1296,96L1368,192L1440,32L1440,320L1368,320L1296,320L1224,320L1152,320L1080,320L1008,320L936,320L864,320L792,320L720,320L648,320L576,320L504,320L432,320L360,320L288,320L216,320L144,320L72,320L0,320Z"></path></svg>`,
	`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none"><path fill="var(--darrk-bg)" fill-opacity="1" d="M0,192L36.9,288L73.8,128L110.8,192L147.7,32L184.6,128L221.5,256L258.5,256L295.4,256L332.3,0L369.2,160L406.2,96L443.1,160L480,288L516.9,288L553.8,256L590.8,128L627.7,192L664.6,288L701.5,64L738.5,288L775.4,32L812.3,256L849.2,96L886.2,0L923.1,256L960,96L996.9,192L1033.8,96L1070.8,128L1107.7,160L1144.6,224L1181.5,288L1218.5,64L1255.4,0L1292.3,288L1329.2,96L1366.2,224L1403.1,288L1440,32L1440,320L1403.1,320L1366.2,320L1329.2,320L1292.3,320L1255.4,320L1218.5,320L1181.5,320L1144.6,320L1107.7,320L1070.8,320L1033.8,320L996.9,320L960,320L923.1,320L886.2,320L849.2,320L812.3,320L775.4,320L738.5,320L701.5,320L664.6,320L627.7,320L590.8,320L553.8,320L516.9,320L480,320L443.1,320L406.2,320L369.2,320L332.3,320L295.4,320L258.5,320L221.5,320L184.6,320L147.7,320L110.8,320L73.8,320L36.9,320L0,320Z"></path></svg>`,
];

$(document).ready(() => {
	$("head").append(
		"<style> :root{" +
			COLOR_THEME_LIST[getRandomInt(0, COLOR_THEME_LIST.length - 1)].join("\n") +
			SHADOW[getRandomInt(0, SHADOW.length - 1)].join("\n") +
			BG_PATTERN[getRandomInt(0, BG_PATTERN.length - 1)].join("\n") +
			"}</style>"
	);
	$("section").append('<div class="section_wave section_wave--top">' + SECTION_WAVE[getRandomInt(0, SECTION_WAVE.length - 1)] + "</div>");
	$("section").append('<div class="section_wave section_wave--bottom">' + SECTION_WAVE[getRandomInt(0, SECTION_WAVE.length - 1)] + "</div>");
});

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
