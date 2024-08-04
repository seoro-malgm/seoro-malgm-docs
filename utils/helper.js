// 클립보드 복사
export const copyText = (text, target) => {
  const board = navigator.clipboard;
  board
    .writeText(text)
    .then(() => {
      window.alert(
        `${target ? `${target} ` : ""}` + "클립보드에 복사되었습니다."
      );
    })
    .catch(error => {
      window.toast(error);
    });
};

// 이미지 리사이즈
export const resize = {
  init: function (outputQuality) {
    this.outputQuality = outputQuality === "undefined" ? 1 : outputQuality;
  },

  photo: function (standard, file, maxSize, outputType, callback) {
    var _this = this;
    const reader = new FileReader();
    reader.onload = function (readerEvent) {
      if (standard === "h") {
        _this.resizeWidth(
          readerEvent.target.result,
          maxSize,
          outputType,
          callback
        );
      } else if (standard === "w") {
        _this.resizeHeight(
          readerEvent.target.result,
          maxSize,
          outputType,
          callback
        );
      }
    };
    reader.readAsDataURL(file);
  },
  // 가로 폭을 resize함
  resizeWidth: function (dataURL, maxSize, outputType, callback) {
    const _this = this;
    const image = new Image();
    image.onload = function (imageEvent) {
      // 이미지를 onload할 때 resize 함
      const canvas = document.createElement("canvas"); //const가 안되길래 let으로 바꿨음
      let width = image.width;
      let height = image.height;

      if (height > maxSize) {
        width *= maxSize / height;
        height = maxSize;
      }
      canvas.width = width;
      canvas.height = height;
      canvas.getContext("2d").drawImage(image, 0, 0, width, height);
      _this.output(canvas, outputType, callback);
    };
    image.src = dataURL;
  },
  // 세로 높이를 resize함
  resizeHeight: function (dataURL, maxSize, outputType, callback) {
    const _this = this;
    const image = new Image();
    image.onload = function (imageEvent) {
      const canvas = document.createElement("canvas");
      let width = image.width;
      let height = image.height;

      if (width > maxSize) {
        height *= maxSize / width;
        width = maxSize;
      }
      canvas.width = width;
      canvas.height = height;
      canvas.getContext("2d").drawImage(image, 0, 0, width, height);
      _this.output(canvas, outputType, callback);
    };
    image.src = dataURL;
  },
  output: function (canvas, outputType, callback) {
    switch (outputType) {
      case "object":
        canvas.toBlob(
          function (blob) {
            const obj = {
              blob: blob,
              url: canvas.toDataURL("image/png", 1)
            };
            callback(obj);
          },
          "image/png",
          1
        );
        break;

      case "file":
        canvas.toBlob(
          function () {
            callback(blob);
          },
          "image/png",
          1
        );
        break;

      case "dataURL":
        callback(canvas.toDataURL("image/png", 1));
        break;
    }
  }
};

// 해시 생성
// export const createHash = () => {
//   const timestamp = new Date().getTime();
//   let hashString = "";
//   const hashChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   while (hashString.length < 7) {
//     hashString += hashChars.charAt(Math.floor(Math.random() * hashChars.length));
//   }
//   return timestamp.toString() + hashString;
// };

// pin 상태인지 표시
export const isPinned = date => {
  const value = new Date(date);
  // const val = value.setHours(value.getHours() + 9);
  const time = new Date(value).getTime();
  const now = new Date().getTime();
  const gap = (now - time) / (1000 * 60);
  return !!(gap > 0);
};

// 시간 생성
export const getTimestamp = date => {
  const value = new Date(date);
  // const val = value.setHours(value.getHours() + 9);
  const time = new Date(value).getTime();
  const now = new Date().getTime();
  const gap = (now - time) / (1000 * 60);

  if (gap < 1) {
    return "지금";
  }
  if (gap < 2) {
    return "1분 전";
  }
  if (gap < 3) {
    return "3분 전";
  }
  if (gap < 5) {
    return `5분 전`;
  } else if (gap > 5 && gap < 30) {
    return `30분 전`;
  } else if (gap > 60 && gap < 120) {
    // 60~120분 전
    return `1시간 이내`;
  } else if (gap > 120 && gap < 180) {
    // 120~180분 전
    return `3시간 이내`;
  } else if (gap > 180 && gap < 1440) {
    // 180분 ~ 24시간 전
    return `오늘`;
  } else if (gap > 1440 && gap < 2880) {
    // 24시간 ~ 48시간 전
    return `하루 전`;
  } else if (gap > 2880 && gap < 8640) {
    // 48시간 ~ 48시간 전
    return `2일 전`;
  } else if (gap > 8640 && gap < 20160) {
    // 48시간 ~ 6일 전
    return `이번 주`;
  } else {
    return value.toLocaleDateString();
  }
};

export const createHash = () => {
  const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const hyphenPosition = Math.floor(Math.random() * 6) + 1; // 1부터 6까지
  let hash = "";

  function getRandomChar() {
    return characters.charAt(Math.floor(Math.random() * characters.length));
  }

  for (let i = 0; i < 6; i++) {
    // 6자리 문자열 생성
    if (i === hyphenPosition) {
      hash += "-";
    }
    hash += getRandomChar();
  }
  return hash;
};

export const createcode = () => {
  const characters = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ"; // 헷갈리는 문자 제거: 0, 1, I, O, L
  const length = 8; // 예약번호의 길이 설정
  let code = "";

  function getRandomChar() {
    return characters.charAt(Math.floor(Math.random() * characters.length));
  }

  for (let i = 0; i < length; i++) {
    code += getRandomChar();
  }

  return code;
};

export const pageCalculation = (limit, count) => {
  //총 페이지 수
  let totalPage = Math.ceil(count / limit);
  //값이 없을 경우 1
  if (totalPage < 1) totalPage = 1;
  return totalPage;
};

//number-validation
export const numberValidation = event => {
  let target = event.target.value;

  return (target = target.replace(/[^0-9]/g, ""));
};

//string-trim
export const validateStringExist = text => {
  return typeof text === "string" && text.trim().length > 0;
};

//input trim
export const onRemoveNonDigitCharacters = (event, type = "normal") => {
  let target = event.target.value;
  if (type === "email") {
    target = target.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, "");
  }
  return (target = target.replace(/\s/gi, ""));
};

//email
export const validateEmailHelper = email => {
  const regExp =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  if (!email?.match(regExp)) {
    return false;
  } else {
    return true;
  }
};

//숫자
export const validateNumHelper = text => {
  const regExp = /[0-9]/g;
  if (!text?.match(regExp)) {
    return false;
  } else {
    return true;
  }
};

//phone
export const validatePhoneHelper = phone => {
  const regExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
  if (!phone?.match(regExp)) {
    return false;
  } else {
    return true;
  }
};

// id
export const validateIdHelper = text => {
  const regExp = /^[a-z0-9_]{2,14}$/;
  if (!text?.match(regExp)) {
    return false;
  } else {
    return true;
  }
};
// nickname
export const validateNicknameHelper = (str, length) => {
  const nicknameRegex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/;
  const nickname =
    String(str).length >= 2 &&
    nicknameRegex.test(str) &&
    String(str).length <= length;
  return nickname;
};

export const getTime = time => {
  const min = Math.floor(time / 60);
  const sec = time % 60;

  return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
};

/**
 * 가격을 비교하여 퍼센트 구하기, 시초가, 현재가로 구하지 않을때 따로 사용한다.
 * @param {number|string} referenceNumber 기준으로 삼을 숫자
 * @param {number|string} compareNumber 비교할 숫자
 */
export const comparePrices = (referenceNumber, compareNumber) => {
  // 음수 양수 상태, 클래스바인딩을 위함
  const status =
    +compareNumber === +referenceNumber
      ? "default"
      : +compareNumber - +referenceNumber < 0
        ? "down"
        : "up";
  const per = ((+compareNumber - +referenceNumber) / +referenceNumber) * 100;
  return {
    status,
    per: !isNaN(per)
      ? `${status === "up" ? "+" : ""}${per.toFixed(2).toLocaleString()}%`
      : "0.00%",
    price: Number(+compareNumber - +referenceNumber).toLocaleString()
  };
};

/**
 * 마켓의 시초가, 현재가를 가지고 상태 표현하기
 * @param {Market} 마켓
 */
export const getMarketStatus = market => {
  if (!market) return { status: "default", per: "0.00%", price: "0" };
  const { open, last } = market;
  // 음수 양수 상태, 클래스바인딩을 위함
  const status =
    +open === +last ? "default" : +last - +open < 0 ? "down" : "up";
  const per = ((+last - +open) / +open) * 100;
  return {
    status,
    per:
      !isNaN(per) && "0.00%" ? `${per.toFixed(2).toLocaleString()}%` : "0.00%",
    price: Number(+last - +open).toLocaleString()
  };
};

/**
 * query를 path에 value가 있는 것만 & 추가하여 넣기
 * query를 null로 보낼때 아예 실행이 안되는 API가 있어 제작되었음
 * @param {object} paramObject query로 넣어야하는 값들을 모두 object 형태로 넣어 실행함
 * @return {string} ?query=value&query=value 형태의 string으로 변환함
 */
export const paramToQuery = paramObject => {
  const arr = [];
  for (const [key, value] of Object.entries(paramObject)) {
    if (value !== null && value !== undefined) {
      arr.push(`${key}=${value}`);
    }
  }
  return `?${arr.join("&")}`;
};

/**
 * 전체값으로부터 비중 구하기
 * @param {Number} total 전체값
 * @param {Number} value 비율로 구하려는 값
 * @return {Number} amount
 */
export const getEvalAmount = (total, value) => {
  const amount = toLocaleFormat({
    text: Number((+value / +total) * 100),
    fixed: 2
  });
  return amount;
};

export const getMillion = number => {
  const result = (+number / 1000000)
    .toFixed(2)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return `${result}백만`;
};

/**
 * 호가 krw시장의 범위
 */
export const orderBookUnits = (number, quote_unit) => {
  function getNumber(text) {
    const number = Number(
      typeof text === "string" && text.includes(",")
        ? text.replaceAll(",", "")
        : text
    );
    return number;
  }
  const num = getNumber(number);
  // btc 단계인경우 8단위로 고정
  if (quote_unit === "btc") {
    return toLocaleFormat({
      text: num,
      fixed: 8
    });
  }

  const range = [
    // [최소, 최대, 소수점단위]
    [0, 1, 4],
    [1, 10, 3],
    [10, 100, 2],
    [100, 1000, 1],
    [1000, 5000, 0],
    [5000, 10000, 0],
    [10000, 50000, 0],
    [50000, 100000, 0],
    [100000, 500000, 0],
    [500000, 1000000, 0],
    [1000000, Infinity, 0]
  ];

  const index = range.findIndex(r => {
    return r[0] <= num && num < r[1];
  });
  const fixed = range[index][2];
  return toLocaleFormat({
    text: num,
    fixed: fixed
  });
};
/**
 * 호가단위 -.+단위로 변경하기
 * @param {Number} number 기준할 숫자
 * @param {Number} boolean -인지 +인지 여부 -1, +1 로 전달받음. 음수 변환을 위해 사용
 */
export const unitHandler = (number, boolean) => {
  const bool = boolean > 0;

  function getNumber(text) {
    const number = Number(
      typeof text === "string" && text.includes(",")
        ? text.replaceAll(",", "")
        : text
    );
    return number;
  }

  const num = getNumber(number);
  const range = [
    // [이상, 미만, 단위]
    [0, 1, 0.0001],
    [1, 10, 0.001],
    [10, 100, 0.01],
    [100, 1000, 0.1],
    [1000, 5000, 1],
    [5000, 10000, 5],
    [10000, 50000, 10],
    [50000, 100000, 50],
    [100000, 500000, 100],
    [500000, 1000000, 500],
    [1000000, Infinity, 1000]
  ];
  const index = range.findIndex(r => {
    return r[0] <= num && num < r[1];
  });
  const unit = range[index][2];

  const result = bool ? num + unit : num - unit;
  return result > 0 ? Number(result).toFixed(4) : 0;
};

export const toLocaleFormat = ({
  text = "",
  fixed = 1,
  minFixed,
  maxFixed
}) => {
  if (!text) {
    return "0";
  }
  const str = text + "";
  const result = Number(str.split(",").join("")).toLocaleString(undefined, {
    minimumFractionDigits: minFixed,
    // 소수점이 없는 표현을 할수가 없다 fixed가 언제나 들어가면 - 2022-11-29.ljh
    //minimumFractionDigits: minFixed || fixed,
    maximumFractionDigits: maxFixed || fixed
  });
  return result;
};

export const toLocalePercent = (text = "0%") => {
  if (!text) {
    return "0%";
  }
  const str = text + "";
  const result = Number(
    str.split(",").join("").replace("%", "")
  ).toLocaleString(undefined, {
    minimumFractionDigits: 2
  });
  return result + "%";
};

export const getNumberUnit = number => {
  let num = number;
  let temp = "";
  if (num === 0) {
    return "불가능";
  }
  if (num === -1) {
    return "무제한";
  }
  if (num / 100000000 >= 1) {
    temp += Math.floor(num / 100000000) + "억";
    num = num % 100000000;
  }
  if (num / 10000000 >= 1) {
    temp += Math.floor(num / 10000000) + "천만";
    num = num % 10000000;
  }
  if (num / 10000 >= 1) {
    temp += Math.floor(num / 10000) + "만";
  }
  return (temp += "원");
};

// match해야할 패턴 string을 리턴함
export const fuzzyMatcher = text => {
  if (!text || text === "") return [];
  text.replace(/[/\-\\^$*+?.()|[\]{}]/g, "\\$&");

  // 영문이 포함된경우 영문으로 검색
  const enRegex = new RegExp(/^[A-Za-z]+$/);
  // 영문인경우
  if (enRegex.test(text)) {
    const pattern = text.toUpperCase();
    return pattern;
  }
  // 한국어로 테스트
  const koRegex = new RegExp(/^[ㄱ-힣]+$/);
  if (koRegex.test(text)) {
    let res = "", // 초성으로 변환
      choArr = [
        "ㄱ",
        "ㄲ",
        "ㄴ",
        "ㄷ",
        "ㄸ",
        "ㄹ",
        "ㅁ",
        "ㅂ",
        "ㅃ",
        "ㅅ",
        "ㅆ",
        "ㅇ",
        "ㅈ",
        "ㅉ",
        "ㅊ",
        "ㅋ",
        "ㅌ",
        "ㅍ",
        "ㅎ"
      ];
    for (let i in text) {
      const code = Math.floor((text[i].charCodeAt() - 44032) / 588);
      res += code >= 0 ? choArr[code] : text[i];
    }

    return res;
  }

  // 그외엔 text 그대로 return
  return text;
};

//한영 자동 전환(보류)
// const ENG_KEY = 'rRseEfaqQtTdwWczxvgkoiOjpuPhynbml';
// const KOR_KEY =
//     'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎㅏㅐㅑㅒㅓㅔㅕㅖㅗㅛㅜㅠㅡㅣ';
// const CHO_DATA = 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ';
// const JUNG_DATA = 'ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ';
// const JONG_DATA = 'ㄱㄲㄳㄴㄵㄶㄷㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅄㅅㅆㅇㅈㅊㅋㅌㅍㅎ';
// export const korTypeToEng = (src) => {
//     let res = '';
//     if (src.length == 0) return res;

//     for (let i = 0; i < src.length; i++) {
//         let ch = src.charAt(i);
//         let nCode = ch.charCodeAt(0);
//         let nCho = CHO_DATA.indexOf(ch),
//             nJung = JUNG_DATA.indexOf(ch),
//             nJong = JONG_DATA.indexOf(ch);
//         let arrKeyIndex = [-1, -1, -1, -1, -1];
//         if (0xac00 <= nCode && nCode <= 0xd7a3) {
//             nCode -= 0xac00;
//             arrKeyIndex[0] = Math.floor(nCode / (21 * 28)); // 초성
//             arrKeyIndex[1] = Math.floor(nCode / 28) % 21; // 중성
//             arrKeyIndex[3] = (nCode % 28) - 1; // 종성\
//         } else if (nCho != -1)
//             // 초성 자음
//             arrKeyIndex[0] = nCho;
//         else if (nJung != -1)
//             // 중성
//             arrKeyIndex[1] = nJung;
//         else if (nJong != -1)
//             // 종성 자음
//             arrKeyIndex[3] = nJong;
//         // 한글이 아님
//         else res += ch;

//         // 실제 Key Index로 변경. 초성은 순서 동일
//         if (arrKeyIndex[1] != -1) {
//             if (arrKeyIndex[1] == 9) {
//                 // ㅘ
//                 arrKeyIndex[1] = 27;
//                 arrKeyIndex[2] = 19;
//             } else if (arrKeyIndex[1] == 10) {
//                 // ㅙ
//                 arrKeyIndex[1] = 27;
//                 arrKeyIndex[2] = 20;
//             } else if (arrKeyIndex[1] == 11) {
//                 // ㅚ
//                 arrKeyIndex[1] = 27;
//                 arrKeyIndex[2] = 32;
//             } else if (arrKeyIndex[1] == 14) {
//                 // ㅝ
//                 arrKeyIndex[1] = 29;
//                 arrKeyIndex[2] = 23;
//             } else if (arrKeyIndex[1] == 15) {
//                 // ㅞ
//                 arrKeyIndex[1] = 29;
//                 arrKeyIndex[2] = 24;
//             } else if (arrKeyIndex[1] == 16) {
//                 // ㅟ
//                 arrKeyIndex[1] = 29;
//                 arrKeyIndex[2] = 32;
//             } else if (arrKeyIndex[1] == 19) {
//                 // ㅢ
//                 arrKeyIndex[1] = 31;
//                 arrKeyIndex[2] = 32;
//             } else {
//                 arrKeyIndex[1] = KOR_KEY.indexOf(
//                     JUNG_DATA.charAt(arrKeyIndex[1])
//                 );
//                 arrKeyIndex[2] = -1;
//             }
//         }
//         if (arrKeyIndex[3] != -1) {
//             console.log('아니라고?');
//             if (arrKeyIndex[3] == 2) {
//                 // ㄳ
//                 arrKeyIndex[3] = 0;
//                 arrKeyIndex[4] = 9;
//             } else if (arrKeyIndex[3] == 4) {
//                 // ㄵ
//                 arrKeyIndex[3] = 2;
//                 arrKeyIndex[4] = 12;
//             } else if (arrKeyIndex[3] == 5) {
//                 // ㄶ
//                 arrKeyIndex[3] = 2;
//                 arrKeyIndex[4] = 18;
//             } else if (arrKeyIndex[3] == 8) {
//                 // ㄺ
//                 arrKeyIndex[3] = 5;
//                 arrKeyIndex[4] = 0;
//             } else if (arrKeyIndex[3] == 9) {
//                 // ㄻ
//                 arrKeyIndex[3] = 5;
//                 arrKeyIndex[4] = 6;
//             } else if (arrKeyIndex[3] == 10) {
//                 // ㄼ
//                 arrKeyIndex[3] = 5;
//                 arrKeyIndex[4] = 7;
//             } else if (arrKeyIndex[3] == 11) {
//                 // ㄽ
//                 arrKeyIndex[3] = 5;
//                 arrKeyIndex[4] = 9;
//             } else if (arrKeyIndex[3] == 12) {
//                 // ㄾ
//                 arrKeyIndex[3] = 5;
//                 arrKeyIndex[4] = 16;
//             } else if (arrKeyIndex[3] == 13) {
//                 // ㄿ
//                 arrKeyIndex[3] = 5;
//                 arrKeyIndex[4] = 17;
//             } else if (arrKeyIndex[3] == 14) {
//                 // ㅀ
//                 arrKeyIndex[3] = 5;
//                 arrKeyIndex[4] = 18;
//             } else if (arrKeyIndex[3] == 17) {
//                 // ㅄ
//                 arrKeyIndex[3] = 7;
//                 arrKeyIndex[4] = 9;
//             } else {
//                 arrKeyIndex[3] = KOR_KEY.indexOf(
//                     JONG_DATA.charAt(arrKeyIndex[3])
//                 );
//                 arrKeyIndex[4] = -1;
//             }
//         }

//         for (let j = 0; j < 5; j++) {
//             if (arrKeyIndex[j] != -1) res += ENG_KEY.charAt(arrKeyIndex[j]);
//         }
//     }

//     return res;
// };
