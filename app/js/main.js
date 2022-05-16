const COLOR_THEME_LIST = [
	[
		"--text-color-1: #fff;",
		"--text-color-2: #F5F5F5;",
		"--front-color-1: #4c4a58;",
		"--front-color-2: #7562E0;",
		"--front-color-3: #282162;",
		"--back-color-1: #000036;",
		"--back-color-2: #1a1a29;",
		"--back-color-3: #181824;",
		"--icon-color: none;",
		"--button-radius: 0px;",
	],
	[
		"--text-color-1: #fff;",
		"--text-color-2: #F5F5F5;",
		"--front-color-1: #4c4a58;",
		"--front-color-2: #7ce062;",
		"--front-color-3: #346221;",
		"--back-color-1: #003600;",
		"--back-color-2: #222c1e;",
		"--back-color-3: #1a2418;",
		"--icon-color: none;",
		"--button-radius: 0px;",
	],
	[
		"--text-color-1: #fff;",
		"--text-color-2: #F5F5F5;",
		"--front-color-1: #4c4a58;",
		"--front-color-2: #62e0d0;",
		"--front-color-3: #215e62;",
		"--back-color-1: #003336;",
		"--back-color-2: #1e2c2c;",
		"--back-color-3: #182224;",
		"--icon-color: none;",
		"--button-radius: 0px;",
	],
	[
		"--text-color-1: #ffffff;",
		"--text-color-2: #f5f5f5;",
		"--front-color-1: #829181;",
		"--front-color-2: #e0ba62;",
		"--front-color-3: #623321;",
		"--back-color-1: #003601;",
		"--back-color-2: #1e291a;",
		"--back-color-3: #1a2418;",
		"--icon-color: none;",
		"--button-radius: 5px;",
	],
	[
		"--text-color-1: #ffffff;",
		"--text-color-2: #f5f5f5;",
		"--front-color-1: #305a5a;",
		"--front-color-2: #e09f62;",
		"--front-color-3: #623321;",
		"--back-color-1: #2a0036;",
		"--back-color-2: #1b1a29;",
		"--back-color-3: #241818;",
		"--icon-color: none;",
		"--button-radius: 10px;",
	],
	[
		"--text-color-1: #ffffff;",
		"--text-color-2: #f5f5f5;",
		"--front-color-1: #2f4646;",
		"--front-color-2: #959f3c;",
		"--front-color-3: #21623a;",
		"--back-color-1: #033600;",
		"--back-color-2: #1b291a;",
		"--back-color-3: #222418;",
		"--icon-color: none;",
		"--button-radius: 15px;",
	],
	[
		"--text-color-1: #000000;",
		"--text-color-2: #2b2b2b;",
		"--front-color-1: #c9d7ff;",
		"--front-color-2: #443b34;",
		"--front-color-3: #231813;",
		"--back-color-1: #302832;",
		"--back-color-2: #a3a1c8;",
		"--back-color-3: #d0b5b5;",
		"--icon-color: invert(100%);",
		"--button-radius: 20px;",
	],
	[
		"--text-color-1: #000000;",
		"--text-color-2: #343434;",
		"--front-color-1: #c4bfda;",
		"--front-color-2: #eb389a;",
		"--front-color-3: #ffffe3;",
		"--back-color-1: #8bc2f0;",
		"--back-color-2: #c2f08b;",
		"--back-color-3: #fff3f3;",
		"--icon-color: invert(60%);",
		"--button-radius: 25px;",
	],
	[
		"--text-color-1: #000000;",
		"--text-color-2: #343434;",
		"--front-color-1: #fff3f3;",
		"--front-color-2: #FF6347;",
		"--front-color-3: #ffffe3;",
		"--back-color-1: #8bc2f0;",
		"--back-color-2: #F0E68C;",
		"--back-color-3: #fff3f3;",
		"--icon-color: invert(60%);",
		"--button-radius: 30px;",
	],
	[
		"--text-color-1: #000000;",
		"--text-color-2: #343434;",
		"--front-color-1: #e1deff;",
		"--front-color-2: #477eff;",
		"--front-color-3: #e3e4ff;",
		"--back-color-1: #8b8df0;",
		"--back-color-2: #988cf0;",
		"--back-color-3: #f3f3ff;",
		"--icon-color: invert(60%);",
		"--button-radius: 30px;",
	],
	[
		"--text-color-1: #000000;",
		"--text-color-2: #343434;",
		"--front-color-1: #fadeff;",
		"--front-color-2: #ff47ab;",
		"--front-color-3: #fce3ff;",
		"--back-color-1: #f08be7;",
		"--back-color-2: #ef8cf0;",
		"--back-color-3: #fff3ff;",
		"--icon-color: invert(60%);",
		"--button-radius: 30px;",
	],
	[
		"--text-color-1: #000000;",
		"--text-color-2: #343434;",
		"--front-color-1: #def4ff;",
		"--front-color-2: #47caff;",
		"--front-color-3: #e3f2ff;",
		"--back-color-1: #8be1f0;",
		"--back-color-2: #8cb8f0;",
		"--back-color-3: #f3faff;",
		"--icon-color: invert(60%);",
		"--button-radius: 30px;",
	],
	[
		"--text-color-1: #fff;",
		"--text-color-2: #e8e8e8;",
		"--front-color-1: #5d5d5d;",
		"--front-color-2: #cecece;",
		"--front-color-3: #ffffff;",
		"--back-color-1: #8bc2f0;",
		"--back-color-2: #262626;",
		"--back-color-3: #000000;",
		"--icon-color: none;",
		"--button-radius: 30px;",
	],
	[
		"--text-color-1: #000000;",
		"--text-color-2: #262626;",
		"--front-color-1: #b3b3b3;",
		"--front-color-2: #000000;",
		"--front-color-3: #cecece;",
		"--back-color-1: #5d5d5d;",
		"--back-color-2: #c3c3c3;",
		"--back-color-3: #fff;",
		"--icon-color: none;",
		"--button-radius: 30px;",
	],
	[
		"--text-color-1: #000000;",
		"--text-color-2: #343434;",
		"--front-color-1: #d9d9d9;",
		"--front-color-2: #fbff4c;",
		"--front-color-3: #ffffe3;",
		"--back-color-1: #8bc2f0;",
		"--back-color-2: #92f08c;",
		"--back-color-3: #fff3f3;",
		"--icon-color: invert(60%);",
		"--button-radius: 30px;",
	],
];

const SHADOW = [
	[
		"--text-shadow-button: 2px 2px 4px var(--front-color-2);",
		"--box-shadow-button: 0px 0px 3px var(--front-color-2);",
		"--text-shadow-title: 1px 1px var(--front-color-1), 2px 2px var(--front-color-1);",
		"--text-shadow-big: 1px 1px var(--front-color-1), 2px 2px var(--front-color-1), 3px 3px var(--front-color-1), 4px 4px var(--front-color-1), 5px 5px var(--front-color-1), 6px 6px var(--front-color-1), 7px 7px 2px var(--front-color-1);",
		"--text-shadow-nav: 1px 1px var(--front-color-1), 2px 2px var(--front-color-1), 3px 3px var(--front-color-1), 4px 4px var(--front-color-1);",
	],
	[
		"--text-shadow-button: -2px -2px 4px var(--front-color-2);",
		"--box-shadow-button: text-shadow: 1px 1px var(--front-color-2), 2px 2px var(--front-color-2), 3px 3px var(--front-color-2), 4px 4px var(--front-color-2), 5px 5px var(--front-color-2), 6px 6px var(--front-color-2), 7px 7px 2px var(--front-color-2);",
		"--text-shadow-title: -1px -1px var(--front-color-1), -2px -2px var(--front-color-1);",
		"--text-shadow-big: -1px -1px var(--front-color-1), -2px -2px var(--front-color-1), -3px -3px var(--front-color-1), -4px -4px var(--front-color-1), -5px -5px var(--front-color-1), -6px -6px var(--front-color-1), -7px -7px -2px var(--front-color-1);",
		"--text-shadow-nav: -1px -1px var(--front-color-1), -2px -2px var(--front-color-1), -3px -3px var(--front-color-1), -4px -4px var(--front-color-1);",
	],
	[
		"--text-shadow-button: 2px 2px 10px var(--front-color-2);",
		"--box-shadow-button: text-shadow: -1px -1px var(--front-color-2), -2px -2px var(--front-color-2), -3px -3px var(--front-color-2), -4px -4px var(--front-color-2), -5px -5px var(--front-color-2), -6px -6px var(--front-color-2), -7px -7px 2px var(--front-color-2);",
		"--text-shadow-title: 2px 2px var(--front-color-1), 3px 3px var(--front-color-1);",
		"--text-shadow-big: 0 1px var(--front-color-1), 0 2px var(--front-color-1), 0 3px var(--front-color-1), 0 4px var(--front-color-1), 0 5px var(--front-color-1), 0 6px var(--front-color-1), 0 7px 2px var(--front-color-1);",
		"--text-shadow-nav: 0 1px var(--front-color-1), 0 2px var(--front-color-1), 0 3px var(--front-color-1), 0 4px var(--front-color-1);",
	],
	[
		"--text-shadow-button: -2px -2px 10px var(--front-color-2);",
		"--box-shadow-button: 0px 0px 10px var(--front-color-2);",
		"--text-shadow-title: -2px -2px var(--front-color-1), -3px -3px var(--front-color-1);",
		"--text-shadow-big: 0 -1px var(--front-color-1), 0 -2px var(--front-color-1), 0 -3px var(--front-color-1), 0 -4px var(--front-color-1), 0 -5px var(--front-color-1), 0 -6px var(--front-color-1), 0 -7px 2px var(--front-color-1);",
		"--text-shadow-nav: -1px var(--front-color-1), -2px var(--front-color-1), -3px var(--front-color-1), -4px var(--front-color-1);",
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
	[
		`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none"><path fill="var(--back-color-3)" fill-opacity="1" d="M0,224L6.2,218.7C12.3,213,25,203,37,170.7C49.2,139,62,85,74,64C86.2,43,98,53,111,74.7C123.1,96,135,128,148,144C160,160,172,160,185,165.3C196.9,171,209,181,222,165.3C233.8,149,246,107,258,85.3C270.8,64,283,64,295,101.3C307.7,139,320,213,332,240C344.6,267,357,245,369,208C381.5,171,394,117,406,85.3C418.5,53,431,43,443,53.3C455.4,64,468,96,480,106.7C492.3,117,505,107,517,101.3C529.2,96,542,96,554,101.3C566.2,107,578,117,591,149.3C603.1,181,615,235,628,234.7C640,235,652,181,665,181.3C676.9,181,689,235,702,218.7C713.8,203,726,117,738,90.7C750.8,64,763,96,775,122.7C787.7,149,800,171,812,192C824.6,213,837,235,849,224C861.5,213,874,171,886,144C898.5,117,911,107,923,96C935.4,85,948,75,960,74.7C972.3,75,985,85,997,96C1009.2,107,1022,117,1034,112C1046.2,107,1058,85,1071,85.3C1083.1,85,1095,107,1108,133.3C1120,160,1132,192,1145,186.7C1156.9,181,1169,139,1182,122.7C1193.8,107,1206,117,1218,144C1230.8,171,1243,213,1255,229.3C1267.7,245,1280,235,1292,240C1304.6,245,1317,267,1329,282.7C1341.5,299,1354,309,1366,309.3C1378.5,309,1391,299,1403,282.7C1415.4,267,1428,245,1434,234.7L1440,224L1440,320L1433.8,320C1427.7,320,1415,320,1403,320C1390.8,320,1378,320,1366,320C1353.8,320,1342,320,1329,320C1316.9,320,1305,320,1292,320C1280,320,1268,320,1255,320C1243.1,320,1231,320,1218,320C1206.2,320,1194,320,1182,320C1169.2,320,1157,320,1145,320C1132.3,320,1120,320,1108,320C1095.4,320,1083,320,1071,320C1058.5,320,1046,320,1034,320C1021.5,320,1009,320,997,320C984.6,320,972,320,960,320C947.7,320,935,320,923,320C910.8,320,898,320,886,320C873.8,320,862,320,849,320C836.9,320,825,320,812,320C800,320,788,320,775,320C763.1,320,751,320,738,320C726.2,320,714,320,702,320C689.2,320,677,320,665,320C652.3,320,640,320,628,320C615.4,320,603,320,591,320C578.5,320,566,320,554,320C541.5,320,529,320,517,320C504.6,320,492,320,480,320C467.7,320,455,320,443,320C430.8,320,418,320,406,320C393.8,320,382,320,369,320C356.9,320,345,320,332,320C320,320,308,320,295,320C283.1,320,271,320,258,320C246.2,320,234,320,222,320C209.2,320,197,320,185,320C172.3,320,160,320,148,320C135.4,320,123,320,111,320C98.5,320,86,320,74,320C61.5,320,49,320,37,320C24.6,320,12,320,6,320L0,320Z"></path></svg>`,
		`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none"><path fill="var(--back-color-3)" fill-opacity="1" d="M0,64L6.2,90.7C12.3,117,25,171,37,208C49.2,245,62,267,74,272C86.2,277,98,267,111,240C123.1,213,135,171,148,165.3C160,160,172,192,185,218.7C196.9,245,209,267,222,266.7C233.8,267,246,245,258,218.7C270.8,192,283,160,295,160C307.7,160,320,192,332,218.7C344.6,245,357,267,369,272C381.5,277,394,267,406,250.7C418.5,235,431,213,443,197.3C455.4,181,468,171,480,154.7C492.3,139,505,117,517,101.3C529.2,85,542,75,554,64C566.2,53,578,43,591,53.3C603.1,64,615,96,628,106.7C640,117,652,107,665,90.7C676.9,75,689,53,702,64C713.8,75,726,117,738,133.3C750.8,149,763,139,775,149.3C787.7,160,800,192,812,176C824.6,160,837,96,849,106.7C861.5,117,874,203,886,202.7C898.5,203,911,117,923,106.7C935.4,96,948,160,960,186.7C972.3,213,985,203,997,170.7C1009.2,139,1022,85,1034,69.3C1046.2,53,1058,75,1071,117.3C1083.1,160,1095,224,1108,261.3C1120,299,1132,309,1145,288C1156.9,267,1169,213,1182,192C1193.8,171,1206,181,1218,186.7C1230.8,192,1243,192,1255,186.7C1267.7,181,1280,171,1292,176C1304.6,181,1317,203,1329,229.3C1341.5,256,1354,288,1366,298.7C1378.5,309,1391,299,1403,266.7C1415.4,235,1428,181,1434,154.7L1440,128L1440,320L1433.8,320C1427.7,320,1415,320,1403,320C1390.8,320,1378,320,1366,320C1353.8,320,1342,320,1329,320C1316.9,320,1305,320,1292,320C1280,320,1268,320,1255,320C1243.1,320,1231,320,1218,320C1206.2,320,1194,320,1182,320C1169.2,320,1157,320,1145,320C1132.3,320,1120,320,1108,320C1095.4,320,1083,320,1071,320C1058.5,320,1046,320,1034,320C1021.5,320,1009,320,997,320C984.6,320,972,320,960,320C947.7,320,935,320,923,320C910.8,320,898,320,886,320C873.8,320,862,320,849,320C836.9,320,825,320,812,320C800,320,788,320,775,320C763.1,320,751,320,738,320C726.2,320,714,320,702,320C689.2,320,677,320,665,320C652.3,320,640,320,628,320C615.4,320,603,320,591,320C578.5,320,566,320,554,320C541.5,320,529,320,517,320C504.6,320,492,320,480,320C467.7,320,455,320,443,320C430.8,320,418,320,406,320C393.8,320,382,320,369,320C356.9,320,345,320,332,320C320,320,308,320,295,320C283.1,320,271,320,258,320C246.2,320,234,320,222,320C209.2,320,197,320,185,320C172.3,320,160,320,148,320C135.4,320,123,320,111,320C98.5,320,86,320,74,320C61.5,320,49,320,37,320C24.6,320,12,320,6,320L0,320Z"></path></svg>`,
		`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none"><path fill="var(--back-color-3)" fill-opacity="1" d="M0,96L6.2,117.3C12.3,139,25,181,37,170.7C49.2,160,62,96,74,112C86.2,128,98,224,111,229.3C123.1,235,135,149,148,117.3C160,85,172,107,185,144C196.9,181,209,235,222,234.7C233.8,235,246,181,258,170.7C270.8,160,283,192,295,181.3C307.7,171,320,117,332,85.3C344.6,53,357,43,369,64C381.5,85,394,139,406,160C418.5,181,431,171,443,165.3C455.4,160,468,160,480,165.3C492.3,171,505,181,517,202.7C529.2,224,542,256,554,229.3C566.2,203,578,117,591,80C603.1,43,615,53,628,80C640,107,652,149,665,138.7C676.9,128,689,64,702,37.3C713.8,11,726,21,738,64C750.8,107,763,181,775,213.3C787.7,245,800,235,812,197.3C824.6,160,837,96,849,85.3C861.5,75,874,117,886,144C898.5,171,911,181,923,181.3C935.4,181,948,171,960,192C972.3,213,985,267,997,250.7C1009.2,235,1022,149,1034,144C1046.2,139,1058,213,1071,208C1083.1,203,1095,117,1108,74.7C1120,32,1132,32,1145,64C1156.9,96,1169,160,1182,192C1193.8,224,1206,224,1218,224C1230.8,224,1243,224,1255,202.7C1267.7,181,1280,139,1292,138.7C1304.6,139,1317,181,1329,176C1341.5,171,1354,117,1366,90.7C1378.5,64,1391,64,1403,85.3C1415.4,107,1428,149,1434,170.7L1440,192L1440,320L1433.8,320C1427.7,320,1415,320,1403,320C1390.8,320,1378,320,1366,320C1353.8,320,1342,320,1329,320C1316.9,320,1305,320,1292,320C1280,320,1268,320,1255,320C1243.1,320,1231,320,1218,320C1206.2,320,1194,320,1182,320C1169.2,320,1157,320,1145,320C1132.3,320,1120,320,1108,320C1095.4,320,1083,320,1071,320C1058.5,320,1046,320,1034,320C1021.5,320,1009,320,997,320C984.6,320,972,320,960,320C947.7,320,935,320,923,320C910.8,320,898,320,886,320C873.8,320,862,320,849,320C836.9,320,825,320,812,320C800,320,788,320,775,320C763.1,320,751,320,738,320C726.2,320,714,320,702,320C689.2,320,677,320,665,320C652.3,320,640,320,628,320C615.4,320,603,320,591,320C578.5,320,566,320,554,320C541.5,320,529,320,517,320C504.6,320,492,320,480,320C467.7,320,455,320,443,320C430.8,320,418,320,406,320C393.8,320,382,320,369,320C356.9,320,345,320,332,320C320,320,308,320,295,320C283.1,320,271,320,258,320C246.2,320,234,320,222,320C209.2,320,197,320,185,320C172.3,320,160,320,148,320C135.4,320,123,320,111,320C98.5,320,86,320,74,320C61.5,320,49,320,37,320C24.6,320,12,320,6,320L0,320Z"></path></svg>`,
	],
	[
		`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none"><path fill="var(--back-color-3)" fill-opacity="1" d="M0,96L36.9,160L73.8,288L110.8,64L147.7,224L184.6,32L221.5,128L258.5,64L295.4,128L332.3,32L369.2,160L406.2,192L443.1,96L480,64L516.9,128L553.8,32L590.8,224L627.7,64L664.6,192L701.5,288L738.5,128L775.4,64L812.3,128L849.2,64L886.2,32L923.1,192L960,192L996.9,256L1033.8,256L1070.8,96L1107.7,32L1144.6,128L1181.5,128L1218.5,256L1255.4,128L1292.3,224L1329.2,192L1366.2,288L1403.1,128L1440,256L1440,320L1403.1,320L1366.2,320L1329.2,320L1292.3,320L1255.4,320L1218.5,320L1181.5,320L1144.6,320L1107.7,320L1070.8,320L1033.8,320L996.9,320L960,320L923.1,320L886.2,320L849.2,320L812.3,320L775.4,320L738.5,320L701.5,320L664.6,320L627.7,320L590.8,320L553.8,320L516.9,320L480,320L443.1,320L406.2,320L369.2,320L332.3,320L295.4,320L258.5,320L221.5,320L184.6,320L147.7,320L110.8,320L73.8,320L36.9,320L0,320Z"></path></svg>`,
		`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none"><path fill="var(--back-color-3)" ffill-opacity="1" d="M0,128L36.9,96L73.8,288L110.8,160L147.7,288L184.6,224L221.5,128L258.5,224L295.4,96L332.3,0L369.2,32L406.2,96L443.1,32L480,128L516.9,128L553.8,192L590.8,224L627.7,64L664.6,64L701.5,288L738.5,192L775.4,32L812.3,288L849.2,128L886.2,320L923.1,288L960,128L996.9,0L1033.8,224L1070.8,288L1107.7,128L1144.6,128L1181.5,64L1218.5,160L1255.4,160L1292.3,288L1329.2,160L1366.2,288L1403.1,96L1440,160L1440,320L1403.1,320L1366.2,320L1329.2,320L1292.3,320L1255.4,320L1218.5,320L1181.5,320L1144.6,320L1107.7,320L1070.8,320L1033.8,320L996.9,320L960,320L923.1,320L886.2,320L849.2,320L812.3,320L775.4,320L738.5,320L701.5,320L664.6,320L627.7,320L590.8,320L553.8,320L516.9,320L480,320L443.1,320L406.2,320L369.2,320L332.3,320L295.4,320L258.5,320L221.5,320L184.6,320L147.7,320L110.8,320L73.8,320L36.9,320L0,320Z"></path></svg>`,
		`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none"><path fill="var(--back-color-3)" fill-opacity="1" d="M0,160L36.9,224L73.8,96L110.8,224L147.7,160L184.6,192L221.5,192L258.5,288L295.4,96L332.3,256L369.2,160L406.2,288L443.1,32L480,96L516.9,64L553.8,160L590.8,128L627.7,64L664.6,0L701.5,128L738.5,128L775.4,64L812.3,96L849.2,256L886.2,192L923.1,256L960,64L996.9,64L1033.8,192L1070.8,256L1107.7,160L1144.6,128L1181.5,32L1218.5,64L1255.4,192L1292.3,288L1329.2,128L1366.2,96L1403.1,96L1440,192L1440,320L1403.1,320L1366.2,320L1329.2,320L1292.3,320L1255.4,320L1218.5,320L1181.5,320L1144.6,320L1107.7,320L1070.8,320L1033.8,320L996.9,320L960,320L923.1,320L886.2,320L849.2,320L812.3,320L775.4,320L738.5,320L701.5,320L664.6,320L627.7,320L590.8,320L553.8,320L516.9,320L480,320L443.1,320L406.2,320L369.2,320L332.3,320L295.4,320L258.5,320L221.5,320L184.6,320L147.7,320L110.8,320L73.8,320L36.9,320L0,320Z"></path></svg>`,
	],
];

$(document).ready(() => {
	$("head").append(
		"<style> :root{" +
			COLOR_THEME_LIST[getRandomInt(0, COLOR_THEME_LIST.length - 1)].join("\n") +
			SHADOW[getRandomInt(0, SHADOW.length - 1)].join("\n") +
			BG_PATTERN[getRandomInt(0, BG_PATTERN.length - 1)].join("\n") +
			"}</style>"
	);
	const randomWave = getRandomInt(0, SECTION_WAVE.length - 1);
	$("section").append(
		'<div class="section_wave section_wave--top">' + SECTION_WAVE[randomWave][getRandomInt(0, SECTION_WAVE[randomWave].length - 1)] + "</div>"
	);
	$("section").append(
		'<div class="section_wave section_wave--bottom">' + SECTION_WAVE[randomWave][getRandomInt(0, SECTION_WAVE[randomWave].length - 1)] + "</div>"
	);
});

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
