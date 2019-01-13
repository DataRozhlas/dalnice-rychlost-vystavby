/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/graf1.js":
/*!*********************!*\
  !*** ./js/graf1.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Highcharts.chart('graf1', {\n  title: {\n    text: 'Eurostat: Kolik kilometrů dálnic bylo v provozu v různých evropských zemích v letech 1993 až 2018'\n  },\n  subtitle: {\n    text: 'Kliknutím na jejich název v legendě můžete do srovnání přidat (či odebrat) další státy; údaje jsou vždy k 1. lednu daného roku'\n  },\n  yAxis: {\n    title: {\n      text: 'kilometry dálnic v provozu'\n    }\n  },\n  legend: {\n    layout: 'vertical',\n    align: 'right',\n    verticalAlign: 'middle'\n  },\n  credits: {\n    text: 'Zdroje dat: Eurostat (1993-2016), ŘSD (2017-2018)',\n    href: 'http://appsso.eurostat.ec.europa.eu/nui/submitViewTableAction.do'\n  },\n  tooltip: {\n    split: true,\n    valueSuffix: 'km'\n  },\n  plotOptions: {\n    series: {\n      label: {\n        connectorAllowed: false\n      },\n      pointStart: 1993,\n      connectNulls: true\n    }\n  },\n  series: [{\n    name: 'Česko (dálnice I. i II. třídy)',\n    data: [390.00, 392.00, 414.00, 423.00, 486.00, 499.40, 499.40, 499.40, 517.60, 517.70, 518.00, 546.00, 564.00, 633.00, 657.00, 691.00, 729.00, 734.00, 745.00, 751.00, 776.00, 776.00, 776.00, 1222.66, 1240.00, 1257.00, 1261.00]\n  }, {\n    name: 'Česko (jen dálnice I. třídy)',\n    data: [390.00, 392.00, 414.00, 423.00, 486.00, 499.40, 499.40, 499.40, 517.60, 517.70, 518.00, 546.00, 564.00, 633.00, 657.00, 691.00, 729.00, 734.00, 745.00, 751.00, 776.00, 776.00, 776.00, 781.20, 793.69, 811.03, 814.43]\n  }, {\n    name: 'Maďarsko',\n    data: [269.00, 293.00, 335.00, 365.00, 382.00, 448.00, 448.00, 448.00, 448.00, 533.00, 542.00, 569.00, 636.00, 785.00, 858.00, 1273.70, 1273.00, 1477.00, 1515.50, 1515.10, 1766.90, 1781.80, 1883.90, 1924.00, null, null, null]\n  }, {\n    name: 'Polsko',\n    data: [231.00, 245.00, 246.00, 258.00, 264.00, 268.00, 317.00, 358.00, 398.00, 405.00, 405.00, 552.00, 552.00, 663.00, 663.00, 765.00, 849.00, 857.00, 1070.00, 1365.00, 1482.00, 1556.00, 1559.00, 1640.00, null, 1703.8, null]\n  }, {\n    name: 'Slovensko',\n    data: [198.00, 198.00, 198.00, 215.00, 218.90, 292.00, 295.00, 295.70, 296.40, 301.60, 312.80, 316.20, 327.50, 327.50, 364.50, 384.00, 391.00, 415.70, 419.20, 419.20, 419.80, 419.70, 463.10, 463.20, 479.00, 483.70, null]\n  }, {\n    name: 'Belgie',\n    data: [1665.00, 1666.00, 1666.00, 1674.00, 1679.00, 1682.00, 1691.00, 1702.00, 1727.00, 1729.00, 1729.00, 1747.00, 1747.00, 1763.00, 1763.00, 1763.00, 1763.00, 1763.00, null, null, null, null, null, null, null, null, null],\n    visible: false\n  }, {\n    name: 'Británie',\n    data: [3323.92, 3360.16, 3379.81, 3408.29, 3490.59, 3534.95, 3563.64, 3580.89, 3590.69, 3592.09, 3592.09, 3637.99, 3632.69, 3669.64, 3673.64, 3672.81, 3673.91, 3671.81, 3685.70, 3732.52, 3756.02, 3759.62, 3768.43, 3764.33, null, null, null],\n    visible: false\n  }, {\n    name: 'Bulharsko',\n    data: [null, null, null, 314.00, 314.00, 319.00, 324.00, 324.00, 328.00, 328.00, 328.00, 331.00, 331.00, 394.00, 418.00, 418.00, 418.00, 437.00, 458.00, 541.00, 605.00, 610.00, 734.00, 740.00, null, null, null],\n    visible: false\n  }, {\n    name: 'Chorvatsko',\n    data: [302.00, 302.00, 302.00, 318.00, 330.00, 330.00, 382.00, 411.00, 429.00, 613.00, 754.00, 925.00, 1016.00, 1081.00, 1156.00, 1199.00, 1244.00, 1244.00, 1254.00, 1254.00, 1289.00, 1290.00, 1310.00, 1310.00, null, null, null],\n    visible: false\n  }, {\n    name: 'Dánsko',\n    data: [747.00, 796.00, 796.00, 832.00, 855.00, 873.00, 892.00, 953.00, 971.00, 1010.00, null, null, null, 1071.00, 1111.00, 1128.00, null, null, null, null, null, null, null, 1255.00, null, null, null],\n    visible: false\n  }, {\n    name: 'Estonsko',\n    data: [62.00, 64.00, 65.00, 65.00, 68.00, 73.60, 86.60, 93.00, 93.00, 98.00, 98.00, 96.00, 99.00, 99.00, 96.00, 104.00, 100.00, 115.00, 115.00, 124.00, 140.00, 141.00, 147.00, 145.00, null, null, null],\n    visible: false\n  }, {\n    name: 'Finsko',\n    data: [337.00, 388.00, 394.00, 431.00, 444.00, 473.00, 512.00, 549.00, 591.00, 603.00, 653.00, 653.00, 693.00, 700.00, 700.00, 739.00, 765.00, 779.00, 790.00, 780.00, 810.00, 881.00, 881.00, 890.00, null, null, null],\n    visible: false\n  }, {\n    name: 'Francie',\n    data: [7614.00, 7956.00, 8275.00, 8596.00, 8864.00, 9303.00, 9626.00, 9766.00, 10068.00, 10223.00, 10379.00, 10486.00, 10800.00, 10848.00, 10958.00, 11042.00, 11163.00, 11392.00, 11413.00, 11413.00, 11552.00, 11560.00, 11599.00, 11612.00, null, null, null],\n    visible: false\n  }, {\n    name: 'Irsko',\n    data: [53.00, 72.00, 70.00, 80.00, 94.00, 103.00, 103.00, 103.00, 125.00, 125.00, 176.00, 192.00, 247.00, null, 269.00, 423.00, 663.00, 900.27, 900.00, 900.00, 897.00, 897.00, 916.00, 916.00, null, null, null],\n    visible: false\n  }, {\n    name: 'Itálie',\n    data: [6401.00, 6375.00, 6435.00, 6465.00, 6469.00, 6478.00, 6478.00, 6478.00, 6478.00, 6487.00, 6487.00, 6532.00, 6542.00, 6554.00, 6588.00, 6629.00, 6661.00, 6668.00, 6668.00, 6726.00, 6751.00, 6844.00, 6943.00, null, null, null, null],\n    visible: false\n  }, {\n    name: 'Kypr',\n    data: [154.00, 159.00, 167.50, 167.50, 193.50, 204.00, 216.00, 240.00, 257.00, 268.00, 268.00, 268.00, 276.00, 257.00, 257.00, 257.00, 257.00, 257.00, 257.00, 257.00, 257.00, 257.00, 272.00, 272.00, null, null, null],\n    visible: false\n  }, {\n    name: 'Litva',\n    data: [394.00, 394.00, 394.00, 404.00, 410.00, 417.00, 417.00, 417.00, 417.00, 417.00, 417.00, 417.00, 417.00, 309.00, 309.00, 309.00, 309.00, 309.00, 309.00, 309.00, 309.00, 309.00, 309.00, 314.00, null, null, null],\n    visible: false\n  }, {\n    name: 'Lotyšsko',\n    data: [0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, null, null, null],\n    visible: false\n  }, {\n    name: 'Lucembursko',\n    data: [100.00, 121.00, null, null, null, 115.00, 115.00, 114.00, 115.00, 126.00, 147.00, 146.00, 147.00, 147.00, 147.00, 147.00, 152.00, 152.00, 152.00, 152.00, 152.00, 152.00, 161.00, 161.00, null, null, null],\n    visible: false\n  }, {\n    name: 'Německo',\n    data: [11080.00, 11143.00, 11190.00, 11246.00, 11309.00, 11427.00, 11515.00, 11712.00, 11786.00, 12037.00, 12044.00, 12174.00, 12363.00, 12531.00, 12594.00, 12645.00, 12813.00, 12819.00, 12845.00, 12879.00, 12917.00, 12949.00, 12993.00, 12996.00, null, null, null],\n    visible: false\n  }, {\n    name: 'Nizozemsko',\n    data: [null, null, 2208.00, null, 2336.00, 2225.00, 2291.00, 2265.00, 2499.00, 2516.00, 2542.00, 2585.00, 2600.00, 2604.00, 2582.00, 2637.00, 2631.00, 2646.00, 2651.00, 2658.00, 2666.00, 2678.00, 2730.00, 2756.00, null, null, null],\n    visible: false\n  }, {\n    name: 'Portugalsko',\n    data: [579.00, 587.00, 687.00, 710.00, 797.00, 1252.00, 1441.00, 1482.00, 1659.00, 1835.00, null, null, null, 2545.00, 2613.00, 2673.00, 2705.00, 2737.00, 2737.00, 2988.00, 3035.00, 3065.00, 3065.00, 3065.00, null, null, null],\n    visible: false\n  }, {\n    name: 'Rakousko',\n    data: [1557.00, 1559.00, 1596.00, 1607.00, 1613.00, 1613.00, 1634.00, 1633.00, 1645.00, 1645.00, 1670.00, 1677.00, 1677.00, 1678.00, 1696.00, 1696.00, 1696.00, 1719.00, 1719.00, 1719.00, 1719.00, 1719.00, null, null, null, null, null],\n    visible: false\n  }, {\n    name: 'Rumunsko',\n    data: [113.00, 113.00, 113.00, 113.00, 113.00, 113.00, 113.00, 113.00, 113.00, 113.00, 113.00, 228.00, 228.00, 228.00, 281.00, 281.00, 321.00, 332.00, 350.00, 550.00, 644.00, 683.00, 747.00, 747.00, null, null, null],\n    visible: false\n  }, {\n    name: 'Slovinsko',\n    data: [254.00, 268.00, 277.00, 310.00, 331.00, 369.00, 382.00, 382.00, 435.00, 456.00, 478.00, 483.00, 569.00, 579.00, 578.00, 696.00, 747.00, 768.00, 768.00, 769.00, 769.00, 769.00, 773.00, 773.00, null, null, null],\n    visible: false\n  }, {\n    name: 'Španělsko',\n    data: [6577.00, 6497.00, 6962.00, 7295.00, 7750.00, 8269.00, 8893.00, 9049.00, 9571.00, 9739.00, 10296.00, 10747.00, 11432.00, 12073.00, 13013.00, 13518.00, 14021.00, 14262.00, 14531.00, 14701.00, 14981.00, 15049.00, 15336.00, 15444.00, null, null, null],\n    visible: false\n  }, {\n    name: 'Švédsko',\n    data: [1061.00, 1125.00, 1262.00, 1350.00, 1423.00, 1439.00, 1484.00, 1499.00, 1507.00, 1544.00, 1591.00, 1684.00, 1677.00, 1744.00, 1836.00, 1857.00, 1923.00, 1971.00, 1957.00, 2004.00, 2044.00, 2088.00, 2119.00, 2118.00, null, null, null],\n    visible: false\n  }, {\n    name: 'Švýcarsko',\n    data: [1184.00, 1184.00, null, null, 1258.00, 1262.00, 1267.00, 1270.00, 1305.00, 1342.00, 1351.00, 1341.00, 1358.00, 1361.00, 1383.00, 1383.00, 1406.00, 1406.00, 1415.00, 1419.00, 1419.00, 1429.00, 1440.00, 1447.00, null, null, null],\n    visible: false\n  }, {\n    name: 'Turecko',\n    data: [1070.00, 1167.00, 1246.00, 1405.00, 1560.00, 1726.00, null, 1674.00, 1696.00, 1714.00, 1753.00, 1662.00, 1667.00, 1908.00, 1908.00, 1922.00, 2036.00, 2080.00, 2119.00, 2127.00, 2127.00, 2282.00, 2159.00, 2542.00, null, null, null],\n    visible: false\n  }],\n  responsive: {\n    rules: [{\n      condition: {\n        maxWidth: 500\n      },\n      chartOptions: {\n        legend: {\n          layout: 'horizontal',\n          align: 'center',\n          verticalAlign: 'bottom'\n        }\n      }\n    }]\n  }\n});\n\n//# sourceURL=webpack:///./js/graf1.js?");

/***/ }),

/***/ "./js/graf2.js":
/*!*********************!*\
  !*** ./js/graf2.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Highcharts.chart('graf2', {\n  chart: {\n    type: 'bar'\n  },\n  title: {\n    text: 'Počet úkonů potřebných pro vyřízení stavebního povolení'\n  },\n  plotOptions: {\n    bar: {\n      dataLabels: {\n        enabled: true\n      }\n    }\n  },\n  xAxis: {\n    categories: [\"Dánsko\", \"Kypr\", \"Černá hora\", \"Švédsko\", \"Francie\", \"Německo\", \"Británie\", \"Slovensko\", \"Belgie\", \"Irsko\", \"Estonsko\", \"Ukrajina\", \"Rakousko\", \"Lucemnursko\", \"Norsko\", \"Srbsko\", \"Makedonie\", \"Gruzie\", \"Itálie\", \"Polsko\", \"Nizozemsko\", \"Švýcarsko\", \"Litva\", \"Slovinsko\", \"Lotyšsko\", \"Portugalsko\", \"Rusko\", \"Izrael\", \"Španělsko\", \"Malta\", \"Kosovo\", \"San Marino\", \"Bosna a Hercegovina\", \"Bělorusko\", \"Albánie\", \"Island\", \"Finsko\", \"Chorvatsko\", \"Řecko\", \"Turecko\", \"Bulharsko\", \"Kazachstán\", \"Arménie\", \"Maďarsko\", \"Ázerbájdžán\", \"Česko\", \"Rumunsko\", \"Moldávie\"],\n    title: {\n      enabled: false\n    }\n  },\n  yAxis: {\n    title: {\n      enabled: false\n    }\n  },\n  legend: {\n    enabled: false\n  },\n  credits: {\n    enabled: true,\n    text: 'Zdroj: Světová banka',\n    href: 'http://www.doingbusiness.org/content/dam/doingBusiness/media/Annual-Reports/English/DB2018-Full-Report.pdf'\n  },\n  series: [{\n    name: 'počet úkonů',\n    data: [7, 8, 8, 8, 9, 9, 9, 10, 10, 10, 10, 10, 11, 11, 11, 11, 11, 11, 12, {\n      y: 12,\n      color: \"#c91b12\"\n    }, 13, 13, 13, 14, 14, 14, 14, 15, 15, 15, 15, 15, 16, 16, 17, 17, 17, 18, 18, 18, 18, 19, 19, 20, 21, {\n      y: 21,\n      color: \"#c91b12\"\n    }, 24, 28],\n    color: '#315389'\n  }]\n});\n\n//# sourceURL=webpack:///./js/graf2.js?");

/***/ }),

/***/ "./js/graf3.js":
/*!*********************!*\
  !*** ./js/graf3.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Highcharts.chart('graf3', {\n  chart: {\n    type: 'column'\n  },\n  title: {\n    text: 'Délky dálnic zprovozněné v letech 1971–2018'\n  },\n  subtitle: {\n    text: 'Graf obsahuje i úseky bývalých rychlostních silnic, které nebyly zařazeny k 1. 1. 2016 do sítě dálnic; červeně roky, kdy byl ministrem dopravy Dan Ťok'\n  },\n  yAxis: {\n    title: {\n      text: 'kilometry dálnic v provozu'\n    }\n  },\n  credits: {\n    text: 'Zdroje dat: NKÚ a ŘSD',\n    href: 'https://nku.cz/assets/kon-zavery/K17005.pdf'\n  },\n  tooltip: {\n    valueSuffix: 'km'\n  },\n  plotOptions: {\n    series: {\n      pointStart: 1971,\n      dataLabels: {\n        enabled: true\n      }\n    }\n  },\n  series: [{\n    name: 'délka zprovozněných dálnic',\n    data: [23, 15, 22, 13, 26, 28, 71, 37, 42, 78, 25, 17, 26, 43, 36, 19, 2, 16, 16, 28, 9, 5, 30, 1, 25, 35, 71, 13, 14, 7, 23, 4, 28, 22, 17, 78, 46, 46, 59, 52, 16, 11, 40, {\n      y: 0,\n      color: '#c91b12'\n    }, {\n      y: 5,\n      color: '#c91b12'\n    }, {\n      y: 16,\n      color: '#c91b12'\n    }, {\n      y: 17,\n      color: '#c91b12'\n    }, {\n      y: 4,\n      color: '#c91b12'\n    }],\n    color: '#315389'\n  }]\n});\n\n//# sourceURL=webpack:///./js/graf3.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _targetblank__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./targetblank */ \"./js/targetblank.js\");\n/* harmony import */ var _targetblank__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_targetblank__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _graf1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graf1 */ \"./js/graf1.js\");\n/* harmony import */ var _graf1__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_graf1__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _graf2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./graf2 */ \"./js/graf2.js\");\n/* harmony import */ var _graf2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_graf2__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _graf3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graf3 */ \"./js/graf3.js\");\n/* harmony import */ var _graf3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_graf3__WEBPACK_IMPORTED_MODULE_3__);\n // pro otvírání odkazů v novém okně\n\n\n\n\n\n//# sourceURL=webpack:///./js/script.js?");

/***/ }),

/***/ "./js/targetblank.js":
/*!***************************!*\
  !*** ./js/targetblank.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\n  var links = document.getElementsByTagName(\"a\");\n  Array.prototype.forEach.call(links, function (link) {\n    if (link.hostname !== window.location.hostname) {\n      link.target = \"_blank\";\n      link.rel = \"noopener noreferrer\";\n    }\n  });\n});\n\n//# sourceURL=webpack:///./js/targetblank.js?");

/***/ })

/******/ });