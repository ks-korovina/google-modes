(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
	typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
	(factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

var e = [/^class(?![a-zA-Z\¡-\￿_0-9])/, /^(?:struct|union)(?![a-zA-Z\¡-\￿_0-9])/, /^namespace(?![a-zA-Z\¡-\￿_0-9])/, /^throw(?![a-zA-Z\¡-\￿_0-9])/, /^try(?![a-zA-Z\¡-\￿_0-9])/, /^asm(?![a-zA-Z\¡-\￿_0-9])/, /^using(?![a-zA-Z\¡-\￿_0-9])/, /^enum(?![a-zA-Z\¡-\￿_0-9])/, /^for(?![a-zA-Z\¡-\￿_0-9])/, /^while(?![a-zA-Z\¡-\￿_0-9])/, /^do(?![a-zA-Z\¡-\￿_0-9])/, /^if(?![a-zA-Z\¡-\￿_0-9])/, /^switch(?![a-zA-Z\¡-\￿_0-9])/, /^(?:break|continue)(?![a-zA-Z\¡-\￿_0-9])/, /^goto(?![a-zA-Z\¡-\￿_0-9])/, /^return(?![a-zA-Z\¡-\￿_0-9])/, /^default(?![a-zA-Z\¡-\￿_0-9])/, /^case(?![a-zA-Z\¡-\￿_0-9])/, /^alignas(?![a-zA-Z\¡-\￿_0-9])/, /^(?:0x[0-9a-fA-F\']+|0b[01\']+|(?:[0-9][0-9\']*(?:\.[0-9\']*)?|\.[0-9][0-9\']*)(?:[eE]\-?[0-9\']*)?)[LlUuFf]?/, /^virtual(?![a-zA-Z\¡-\￿_0-9])/, /^(?:private|public|protected)(?![a-zA-Z\¡-\￿_0-9])/, /^catch(?![a-zA-Z\¡-\￿_0-9])/, /^typename(?![a-zA-Z\¡-\￿_0-9])/, /^auto(?![a-zA-Z\¡-\￿_0-9])/, /^else(?![a-zA-Z\¡-\￿_0-9])/, /^(?:\:\:|[a-zA-Z\¡-\￿_][a-zA-Z\¡-\￿_0-9]* *\:\:)/, /^[a-zA-Z\¡-\￿_][a-zA-Z\¡-\￿_0-9]*(?=\<)/, /^export(?![a-zA-Z\¡-\￿_0-9])/, /^template(?![a-zA-Z\¡-\￿_0-9])/, /^(?!(?:new|delete)(?![a-zA-Z\¡-\￿_0-9]))/, /^(?:inline|virtual|explicit|friend|constexpr)(?![a-zA-Z\¡-\￿_0-9])/, /^(?:register|static|extern|typedef)(?![a-zA-Z\¡-\￿_0-9])/, /^(?:const|volatile)(?![a-zA-Z\¡-\￿_0-9])/, /^(?:unsigned|signed|long)(?![a-zA-Z\¡-\￿_0-9])/, /^(?:int|float|double)(?![a-zA-Z\¡-\￿_0-9])/, /^[a-zA-Z\¡-\￿_][a-zA-Z\¡-\￿_0-9]*/, [0, /^[a-zA-Z\¡-\￿_]/, /^[a-zA-Z\¡-\￿_0-9]*/, [5, 296]], /^delete(?![a-zA-Z\¡-\￿_0-9])/, /^new(?![a-zA-Z\¡-\￿_0-9])/, /^sizeof(?![a-zA-Z\¡-\￿_0-9])/, /^this(?![a-zA-Z\¡-\￿_0-9])/, /^(?:dynamic|static|const|reinterpret)_cast(?![a-zA-Z\¡-\￿_0-9])/, /^(?:true|false|null)(?![a-zA-Z\¡-\￿_0-9])/, /^operator(?![a-zA-Z\¡-\￿_0-9])/, /^(?:\!|\+|\-|\/|\*|\%|\>\>?|\<\<?|\=|\|\|?|\&\&?)\=?/, /^noexcept(?![a-zA-Z\¡-\￿_0-9])/, /^(?:\+\+|\-\-)/, [1, "\n", "\t", " "], /^\@(?:member|param|arg(?:ument)?|module|namespace|typedef)(?![a-zA-Z\¡-\￿_])/, /^\@[a-zA-Z\¡-\￿_]+/, /^[a-zA-Z\¡-\￿_]+/, [0, /^(?!\*\/|\@[a-zA-Z\¡-\￿_]|\{)/, /^[^]/], /^[a-zA-Z\¡-\￿_][a-zA-Z\¡-\￿_0-9]*(?= *\()/];
var nodes = [
  [2, 6, 2, {"name":"preprocessorLine","token":"meta"},
   0, 2],
  [/^[^]/, 0],
  [1, 9, 3],
  [2, 11, 4, {"name":"Statement"}],
  [0, 2,
   0, 1],
  [3, "keyword", e[7], -1,
   3, "keyword", e[15], -1,
   3, "keyword", e[11], -1,
   3, "keyword", e[25], -1,
   3, "keyword", e[8], -1,
   3, "keyword", e[9], -1,
   3, "keyword", e[10], -1,
   3, "keyword", e[13], -1,
   3, "keyword", e[14], -1,
   3, "keyword", e[16], -1,
   3, "keyword", e[17], -1,
   3, "keyword", e[12], -1,
   3, "keyword", e[1], -1,
   3, "keyword", e[40], -1,
   3, "keyword", e[24], -1,
   3, "keyword", e[31], -1,
   3, "keyword", e[32], -1,
   3, "type", e[34], -1,
   3, "type", e[35], -1,
   3, "keyword", e[33], -1,
   3, "atom", e[43], -1,
   1, 161, -1,
   3, "number", e[19], -1,
   2, 166, -1, {"name":"string","token":"string"},
   2, 170, -1, {"name":"prefixOp","token":"operator"},
   3, "operator", e[47], -1,
   3, "operator", e[45], -1,
   2, 171, -1, {"name":"comment","token":"comment"},
   3, "keyword", e[2], -1,
   3, "keyword", e[23], -1,
   3, "keyword", e[39], -1,
   3, "keyword", e[38], -1,
   3, "keyword", e[41], -1,
   3, "keyword", e[4], -1,
   3, "keyword", e[22], -1,
   3, "keyword", e[3], -1,
   3, "keyword", e[46], -1,
   3, "keyword", e[5], -1,
   3, "keyword", e[28], -1,
   3, "keyword", e[29], -1,
   3, "keyword", e[0], -1,
   3, "keyword", e[20], -1,
   3, "keyword", e[21], -1,
   3, "keyword", e[44], -1,
   3, "keyword", e[6], -1,
   3, "keyword", e[18], -1,
   3, "keyword", e[42], -1,
   /^[^]/, -1],
  ["#", 7],
  [/^(?!\/\/|\/\*|\\)./, 7,
   "\\", 8,
   0, -1],
  [/^[^]/, 7],
  [/^[ \t]/, 9,
   "\n", 10,
   2, 171, 9, {"name":"comment","token":"comment"},
   0, -1],
  [2, 6, 9, {"name":"preprocessorLine","token":"meta"},
   0, 9],
  [3, "keyword", e[0], 12,
   3, "keyword", e[1], 12,
   3, "keyword", e[2], 32,
   3, "keyword", e[3], 40,
   3, "keyword", e[4], 44,
   3, "keyword", e[5], 59,
   3, "keyword", e[6], 65,
   2, 177, 77, {"name":"TemplateHead"},
   [7, "constructorAhead"], 79,
   0, 82,
   3, "keyword", e[7], 93,
   3, "keyword", e[8], 97,
   3, "keyword", e[9], 98,
   3, "keyword", e[10], 99,
   3, "keyword", e[11], 123,
   3, "keyword", e[12], 131,
   2, 188, -1, {"name":"Block"},
   3, "keyword", e[13], 135,
   3, "keyword", e[14], 137,
   3, "keyword", e[15], 141,
   3, "keyword", e[1], 145,
   2, 192, 151, {"name":"DeclType"},
   3, "keyword", e[16], 153,
   3, "keyword", e[17], 154,
   [0, /^[a-zA-Z\¡-\￿_]/, /^[a-zA-Z\¡-\￿_0-9]*/, [5, 209]], 153,
   ";", -1,
   1, 210, 159],
  [1, 9, 13],
  [3, "keyword", e[18], 14,
   0, 15],
  [1, 9, 16],
  [1, 9, 17],
  ["(", 18],
  [1, 249, 19],
  [1, 9, 20],
  [1, 9, 21],
  [3, "number", e[19], 22],
  [":", 23,
   0, 24],
  [1, 9, 25],
  [1, 9, 26],
  [1, 9, 27],
  [")", 15],
  [3, "keyword", e[20], 28,
   0, 28],
  [";", -1,
   2, 252, -1, {"name":"ClassBody"}],
  [1, 9, 29],
  [3, "keyword", e[21], 30,
   0, 30],
  [1, 9, 31],
  [1, 258, 24],
  [1, 9, 33],
  [1, 249, 34,
   0, 34],
  [1, 9, 35],
  [3, "operator", "=", 36,
   2, 188, -1, {"name":"Block"}],
  [1, 9, 37],
  [1, 161, 38],
  [1, 9, 39],
  [";", -1],
  [1, 9, 41],
  [1, 210, 42],
  [1, 9, 43],
  [";", -1],
  [1, 9, 45],
  [2, 188, 46, {"name":"Block"}],
  [1, 9, 47],
  [3, "keyword", e[22], 48,
   0, -1],
  [1, 9, 49],
  ["(", 50],
  [1, 9, 51],
  [1, 258, 52],
  [1, 9, 53],
  [1, 249, 54,
   0, 54],
  [1, 9, 55],
  [")", 56],
  [1, 9, 57],
  [2, 188, 58, {"name":"Block"}],
  [1, 9, 47],
  [1, 9, 60],
  ["{", 61],
  [1, 9, 62],
  [2, 166, 63, {"name":"string","token":"string"}],
  [1, 9, 64],
  ["}", -1],
  [1, 9, 66],
  [3, "keyword", e[23], 67,
   3, "keyword", e[2], 68,
   0, 68],
  [1, 9, 69],
  [1, 9, 70],
  [1, 258, 71],
  [1, 161, 71],
  [1, 9, 72],
  ["=", 73,
   0, 74],
  [1, 9, 75],
  [1, 9, 76],
  [1, 258, 74],
  [";", -1],
  [1, 9, 78],
  [2, 11, -1, {"name":"Statement"}],
  [1, 249, 80],
  [1, 9, 81],
  [2, 269, -1, {"name":"FunctionDef"}],
  [3, "meta", e[26], 83],
  [1, 9, 84],
  [0, 82,
   3, "keyword", e[24], 85,
   e[30], 86,
   2, 295, 87, {"name":"qualifiedVariableName","token":"qualified"}],
  [1, 9, 88],
  [3, "type", e[37], 85],
  [1, 9, 89],
  [1, 300, 90,
   1, 9, 91],
  [1, 307, 92,
   ";", -1],
  [1, 9, 88],
  [1, 322, -1],
  [1, 9, 89],
  [1, 9, 94],
  [1, 249, 95,
   0, 95],
  [1, 9, 96],
  [2, 332, -1, {"name":"BlockOf"},
   0, -1],
  [1, 9, 100],
  [1, 9, 101],
  [1, 9, 102],
  ["(", 103],
  [2, 350, 104, {"name":"CondExpr"}],
  [2, 11, 105, {"name":"Statement"}],
  [1, 9, 106],
  [1, 9, 107],
  [1, 9, 108],
  [2, 11, 109, {"name":"Statement"}],
  [2, 11, -1, {"name":"Statement"}],
  [3, "keyword", e[9], 110],
  [1, 9, 111],
  [1, 9, 112],
  [1, 210, 113,
   0, 113],
  [2, 350, 114, {"name":"CondExpr"}],
  [1, 9, 115],
  [1, 9, 116],
  [";", 117],
  [";", -1],
  [1, 9, 118],
  [1, 210, 119,
   0, 119],
  [1, 9, 120],
  [")", 121],
  [1, 9, 122],
  [2, 11, -1, {"name":"Statement"}],
  [1, 9, 124],
  [2, 350, 125, {"name":"CondExpr"}],
  [1, 9, 126],
  [2, 11, 127, {"name":"Statement"}],
  [1, 9, 128],
  [3, "keyword", e[25], 129,
   0, -1],
  [1, 9, 130],
  [2, 11, -1, {"name":"Statement"}],
  [1, 9, 132],
  [2, 350, 133, {"name":"CondExpr"}],
  [1, 9, 134],
  [2, 188, -1, {"name":"Block"}],
  [1, 9, 136],
  [";", -1],
  [1, 9, 138],
  [e[36], 139],
  [1, 9, 140],
  [";", -1],
  [1, 9, 142],
  [1, 210, 143,
   0, 143],
  [1, 9, 144],
  [";", -1],
  [1, 9, 146],
  [1, 249, 147,
   0, 147],
  [1, 9, 148],
  [2, 355, 149, {"name":"BlockOf"},
   0, 149],
  [1, 9, 150],
  [";", -1],
  [1, 9, 152],
  [1, 322, -1],
  [1, 9, 155],
  [1, 9, 156],
  [":", 157],
  [1, 210, 153],
  [1, 9, 158],
  [2, 11, -1, {"name":"Statement"}],
  [1, 9, 160],
  [";", -1],
  [0, 162,
   3, "variable", e[27], 165,
   2, 377, -1, {"name":"unqualifiedVariableName","token":"variable"}],
  [3, "meta", e[26], 163],
  [0, 162,
   3, "variable qualified", e[27], 164,
   2, 295, -1, {"name":"qualifiedVariableName","token":"qualified"}],
  [2, 378, -1, {"name":"TemplateArgs"}],
  [2, 378, -1, {"name":"TemplateArgs"}],
  [/^(?:(?:L|u8?|U|R)(?=[\'\"]))?/, 167],
  [/^\'(?:\\.(?:(?!\').)*|.)\'/, -1,
   "\"", 168],
  ["\\", 169,
   [0, /^(?!\")/, /^[^]/], 168,
   "\"", -1],
  [/^[^]/, 168],
  [3, "keyword", e[23], -1,
   /^(?:\+\+|\-\-|\!|\~|\&|\*|\+)/, -1],
  [/^\/\*\*(?!\/)/, 172,
   "/*", 176,
   /^\/\/.*/, -1],
  [0, 173,
   2, 383, 172, {"name":"doccomment.braced"},
   0, 174],
  [e[52], 175],
  [2, 391, 174, {"name":"doccomment.tagGroup"},
   "*/", -1],
  [0, 173,
   0, 172],
  [[0, /^(?!\*\/)/, /^[^]/], 176,
   "*/", -1],
  [3, "keyword", e[28], 178,
   0, 178],
  [1, 9, 179],
  [3, "keyword", e[29], 180],
  [1, 9, 181],
  ["<", 182],
  [1, 9, 183],
  [1, 399, 184],
  [1, 9, 185],
  [">", 186],
  [1, 9, 187],
  [1, 9, -1],
  ["{", 189],
  [1, 9, 190],
  [2, 11, 191, {"name":"Statement"},
   "}", -1],
  [1, 9, 190],
  [0, 193,
   0, 194,
   3, "keyword", e[24], 205,
   e[30], 206],
  [3, "keyword", e[31], 195,
   3, "keyword", e[32], 195,
   3, "keyword", e[33], 195],
  [3, "type", e[34], 196],
  [1, 9, 197],
  [1, 9, 198],
  [0, 193,
   3, "keyword", e[24], 199,
   0, 200,
   0, 201],
  [0, 194,
   3, "type", e[35], 199,
   0, 199],
  [1, 9, 202],
  [3, "type", e[34], 203],
  [3, "meta", e[26], 201,
   3, "type", e[36], 199],
  [1, 300, 204,
   0, -1],
  [0, 200,
   3, "type", e[35], 199,
   0, 199],
  [1, 9, 202],
  [1, 9, 207],
  [3, "type", e[37], 205],
  [1, 300, 208,
   0, -1],
  [1, 9, 207],
  [e[48], 209,
   /^\:(?!\:)/, -1],
  [3, "keyword", e[38], 211,
   3, "keyword", e[39], 212,
   2, 170, 213, {"name":"prefixOp","token":"operator"},
   3, "keyword", e[40], 213,
   3, "keyword", e[41], 246,
   "[", 226,
   3, "keyword", e[42], 227,
   2, 413, 228, {"name":"ParenExpr"},
   3, "atom", e[43], 246,
   3, "number", e[19], 246,
   2, 166, 246, {"name":"string","token":"string"},
   2, 418, 246, {"name":"BlockOf"},
   1, 161, 246],
  [1, 9, 214],
  [1, 9, 215],
  [1, 9, 210],
  ["[", 216,
   0, 213],
  ["[", 217,
   0, 218],
  [1, 9, 219],
  [1, 9, 220],
  [1, 9, 221],
  ["]", 213],
  ["]", 218],
  ["(", 222,
   0, 213],
  [1, 9, 223],
  [1, 210, 224],
  [1, 9, 225],
  [")", 213],
  [1, 9, 229],
  [1, 9, 230],
  [1, 9, 231],
  [1, 428, 232],
  ["<", 233],
  [1, 210, 246,
   0, 246],
  [1, 9, 234],
  [1, 9, 235],
  ["]", 236],
  [1, 258, 237],
  [1, 9, 238],
  [1, 9, 239],
  [2, 269, 246, {"name":"FunctionDef"}],
  [">", 240],
  [1, 9, 241],
  ["(", 242],
  [1, 9, 243],
  [1, 210, 244],
  [1, 9, 245],
  [")", 246],
  [1, 9, 247],
  [1, 307, 248,
   0, -1],
  [1, 9, 247],
  [3, "keyword", e[44], 250,
   0, 251],
  [3, "operator", e[45], -1,
   2, 170, -1, {"name":"prefixOp","token":"operator"}],
  [3, "meta", e[26], 251,
   3, "def", /^\~?[a-zA-Z\¡-\￿_][a-zA-Z\¡-\￿_0-9]*/, -1],
  ["{", 253],
  [1, 9, 254],
  [3, "keyword", e[21], 255,
   2, 438, 256, {"name":"ObjectMember"},
   "}", -1],
  [1, 9, 257],
  [1, 9, 254],
  [":", 256],
  [3, "keyword", e[23], 259,
   0, 261],
  [1, 9, 260],
  [1, 258, -1],
  [3, "keyword", e[31], 262,
   3, "keyword", e[32], 262,
   3, "keyword", e[33], 262,
   3, "keyword", e[24], 263,
   0, 264,
   0, 265],
  [1, 9, 261],
  [1, 9, 266],
  [3, "type", e[34], 267],
  [3, "meta", e[26], 265,
   3, "type", e[36], 263],
  [1, 300, 268,
   0, -1],
  [0, 264,
   3, "type", e[35], 263,
   0, 263],
  [1, 9, 266],
  [2, 446, 270, {"name":"ParamList"}],
  [1, 9, 271],
  [3, "keyword", e[33], 272,
   /^(?:\&|\&\&)?/, 273],
  [1, 9, 271],
  [1, 9, 274],
  [3, "keyword", e[46], 275,
   3, "keyword", e[3], 276,
   0, 287],
  [1, 9, 277],
  [1, 9, 278],
  ["(", 279,
   0, 287],
  ["(", 280],
  [1, 9, 281],
  [1, 9, 282],
  [1, 210, 283],
  [1, 451, 284],
  [1, 9, 285],
  [1, 9, 286],
  [")", 287],
  [")", 287],
  [1, 9, 288],
  ["->", 289,
   0, 291],
  [1, 9, 290],
  [1, 258, 291],
  [1, 9, 292],
  [2, 457, 293, {"name":"InitializerList"},
   0, 293],
  [1, 9, 294],
  [";", -1,
   2, 188, -1, {"name":"Block"}],
  [2, 377, -1, {"name":"unqualifiedVariableName","token":"variable"}],
  [/^(?![a-zA-Z\¡-\￿_0-9])/, 297],
  [1, 9, 298],
  [1, 300, 298,
   1, 9, 299],
  [/^[a-zA-Z\¡-\￿_]/, -1],
  [2, 378, -1, {"name":"TemplateArgs"},
   "::", 301,
   "[", 303,
   /^[\*\&]/, -1,
   3, "keyword", e[33], -1],
  [1, 9, 302],
  [1, 258, -1],
  [1, 9, 304],
  [3, "number", e[19], 305,
   0, 305],
  [1, 9, 306],
  ["]", -1],
  [2, 460, -1, {"name":"ArgList"},
   "[", 308,
   3, "operator", e[47], -1,
   /^(?:\-\>|\.)/, 312,
   3, "operator", e[45], 314,
   "?", 316],
  [1, 9, 309],
  [1, 210, 310],
  [1, 9, 311],
  ["]", -1],
  [1, 9, 313],
  [2, 465, -1, {"name":"fieldName","token":"property"}],
  [1, 9, 315],
  [1, 210, -1],
  [1, 9, 317],
  [1, 210, 318],
  [1, 9, 319],
  [":", 320],
  [1, 9, 321],
  [1, 210, -1],
  [1, 466, 323],
  [1, 9, 324],
  [2, 269, -1, {"name":"FunctionDef"},
   1, 473, 325,
   0, 325],
  [1, 9, 326],
  [",", 327,
   ";", -1],
  [1, 9, 328],
  [1, 249, 329],
  [1, 9, 330],
  [1, 473, 331,
   0, 331],
  [1, 9, 326],
  ["{", 333],
  [1, 9, 334],
  [1, 249, 335,
   0, 348],
  [1, 9, 336],
  [3, "operator", "=", 337,
   0, 338],
  [1, 9, 339],
  [1, 9, 340],
  [1, 210, 338],
  [",", 341,
   0, 348],
  [1, 9, 342],
  [1, 249, 343],
  [1, 9, 344],
  [3, "operator", "=", 345,
   0, 346],
  [1, 9, 347],
  [1, 9, 340],
  [1, 210, 346],
  [1, 9, 349],
  ["}", -1],
  ["(", 351],
  [1, 9, 352],
  [1, 210, 353,
   0, 353],
  [1, 9, 354],
  [")", -1],
  ["{", 356],
  [1, 9, 357],
  [1, 258, 358,
   0, 375],
  [1, 9, 359],
  [2, 465, 360, {"name":"fieldName","token":"property"},
   0, 360],
  [1, 9, 361],
  [":", 362,
   0, 363],
  [1, 9, 364],
  [1, 9, 365],
  [3, "number", e[19], 363],
  [";", 366,
   0, 375],
  [1, 9, 367],
  [1, 258, 368],
  [1, 9, 369],
  [2, 465, 370, {"name":"fieldName","token":"property"},
   0, 370],
  [1, 9, 371],
  [":", 372,
   0, 373],
  [1, 9, 374],
  [1, 9, 365],
  [3, "number", e[19], 373],
  [1, 9, 376],
  ["}", -1],
  [3, "callee", e[53], -1,
   e[36], -1],
  ["<", 379],
  [1, 9, 380],
  [1, 476, 381],
  [1, 9, 382],
  [">", -1],
  ["{", 384],
  [3, "tag", e[49], 385,
   3, "tag", e[50], 386,
   2, 490, 390, {"name":"doccomment.type","token":"type"}],
  [e[48], 385,
   "{", 387,
   0, 386],
  [[0, /^(?!\}|\*\/)/, /^[^]/], 386,
   0, 390],
  [2, 490, 388, {"name":"doccomment.type","token":"type"}],
  ["}", 389],
  [e[48], 389,
   3, "def", e[51], 386,
   0, 386],
  ["}", -1],
  [3, "tag", e[49], 392,
   3, "tag", e[50], 396],
  [e[48], 392,
   "{", 393,
   0, 396],
  [2, 490, 394, {"name":"doccomment.type","token":"type"}],
  ["}", 395],
  [e[48], 395,
   3, "def", e[51], 396,
   0, 396],
  [0, 397,
   2, 383, 396, {"name":"doccomment.braced"},
   0, -1],
  [e[52], 398],
  [0, 397,
   0, 396],
  [1, 491, 400,
   0, 401,
   0, -1],
  [1, 9, 402],
  [3, "keyword", e[31], 403,
   3, "keyword", e[32], 403,
   1, 249, 404],
  [",", 405,
   0, -1],
  [1, 9, 401],
  [1, 9, 406],
  [1, 9, 407],
  [1, 473, 400,
   0, 400],
  [1, 491, 408,
   0, 409],
  [1, 9, 402],
  [3, "keyword", e[31], 410,
   3, "keyword", e[32], 410,
   1, 249, 411],
  [1, 9, 409],
  [1, 9, 412],
  [1, 473, 408,
   0, 408],
  ["(", 414],
  [1, 9, 415],
  [1, 210, 416,
   0, 416],
  [1, 9, 417],
  [")", -1],
  ["{", 419],
  [1, 9, 420],
  [1, 210, 421,
   0, 426],
  [1, 9, 422],
  [",", 423,
   0, 426],
  [1, 9, 424],
  [1, 210, 425],
  [1, 9, 422],
  [1, 9, 427],
  ["}", -1],
  ["&", 429,
   "=", 430,
   3, "keyword", e[41], 430,
   0, -1],
  [1, 9, 431],
  [1, 9, 432],
  [1, 161, 430,
   0, 430],
  [",", 433,
   0, -1],
  [1, 9, 434],
  ["&", 435,
   "=", 436,
   3, "keyword", e[41], 436],
  [1, 9, 437],
  [1, 9, 432],
  [1, 161, 436,
   0, 436],
  [3, "keyword", e[31], 439,
   3, "keyword", e[32], 439,
   3, "keyword", e[33], 439,
   3, "def", [0, [7, "localConstructorAhead"], /^\~?/, /^[a-zA-Z\¡-\￿_]/, /^[a-zA-Z\¡-\￿_0-9]*/], 442,
   1, 258, 440],
  [1, 9, 438],
  [1, 9, 441],
  [1, 466, 442],
  [1, 9, 443],
  [1, 473, 444,
   0, 444,
   2, 269, -1, {"name":"FunctionDef"}],
  [1, 9, 445],
  [";", -1],
  ["(", 447],
  [1, 9, 448],
  [1, 502, 449],
  [1, 9, 450],
  [")", -1],
  [1, 258, 452,
   0, -1],
  [1, 9, 453],
  [",", 454,
   0, -1],
  [1, 9, 455],
  [1, 258, 456],
  [1, 9, 453],
  [":", 458],
  [1, 9, 459],
  [1, 512, -1],
  ["(", 461],
  [1, 9, 462],
  [1, 518, 463],
  [1, 9, 464],
  [")", -1],
  [3, "callee", e[53], -1,
   e[36], -1],
  [0, 467,
   "(", 469],
  [/^(?:\*|\&\&|\&)/, 468,
   1, 249, -1],
  [1, 9, 467],
  [1, 9, 470],
  [1, 466, 471],
  [1, 9, 472],
  [")", -1],
  [3, "operator", "=", 474,
   2, 418, -1, {"name":"BlockOf"}],
  [1, 9, 475],
  [1, 210, -1],
  [1, 491, 477,
   0, 478,
   0, -1],
  [1, 9, 479],
  [3, "keyword", e[31], 480,
   3, "keyword", e[32], 480,
   1, 258, 481],
  [",", 482,
   0, -1],
  [1, 9, 478],
  [1, 9, 483],
  [1, 9, 484],
  [1, 473, 477,
   0, 477],
  [1, 491, 485,
   0, 486],
  [1, 9, 479],
  [3, "keyword", e[31], 487,
   3, "keyword", e[32], 487,
   1, 258, 488],
  [1, 9, 486],
  [1, 9, 489],
  [1, 473, 485,
   0, 485],
  [1, 524, -1],
  [3, "keyword", e[29], 492,
   0, 494],
  [1, 9, 493],
  [2, 378, 494, {"name":"TemplateArgs"}],
  [1, 9, 495],
  [3, "keyword", e[0], 496,
   3, "keyword", e[23], 496],
  [1, 9, 497],
  [1, 249, 498],
  [1, 9, 499],
  [3, "operator", "=", 500,
   0, -1],
  [1, 9, 501],
  [1, 161, -1],
  [1, 258, 503,
   0, -1],
  [1, 9, 504],
  [1, 249, 505,
   0, 505],
  [1, 9, 506],
  [",", 507,
   0, -1],
  [1, 9, 508],
  [1, 258, 509],
  [1, 9, 510],
  [1, 249, 511,
   0, 511],
  [1, 9, 506],
  [1, 528, 513,
   0, -1],
  [1, 9, 514],
  [",", 515,
   0, -1],
  [1, 9, 516],
  [1, 528, 517],
  [1, 9, 514],
  [1, 210, 519,
   0, -1],
  [1, 9, 520],
  [",", 521,
   0, -1],
  [1, 9, 522],
  [1, 210, 523],
  [1, 9, 520],
  [/^(?!\}|\*\/)/, 525,
   0, -1],
  ["{", 526,
   /^[^]/, 524],
  [1, 524, 527],
  [/^\}?/, 524],
  [2, 465, 529, {"name":"fieldName","token":"property"}],
  [1, 9, 530],
  ["(", 531,
   "{", 532],
  [1, 9, 533],
  [1, 9, 534],
  [1, 518, 535],
  [1, 518, 536],
  [1, 9, 537],
  [1, 9, 538],
  [")", -1],
  ["}", -1]
];
var start = 0;
var token = 5;


var cpp = Object.freeze({
	nodes: nodes,
	start: start,
	token: token
});

function storeLocal(context, name, scopes) {
  for (var cx = context; cx; cx = cx.parent)
    { if (scopes.indexOf(cx.name) > -1)
      { return (cx.locals || (cx.locals = [])).push(name) } }
}
function isLocal(context, name) {
  for (var cx = context; cx; cx = cx.parent)
    { if (cx.locals && cx.locals.indexOf(name) > -1) { return true } }
  return false
}

var varRE = /(^|\s)variable($|\s)/;

function markLocals(type, scopes, stream, state) {
  if (type == "def")
    { storeLocal(state.context, stream.current(), scopes); }
  else if (varRE.test(type) && !/qualified/.test(type) &&
           isLocal(state.context, stream.current()))
    { type = type.replace(varRE, "$1variable-2$2"); }
  return type
}

function hasSubStatement(context) {
  var m = /^(if|for|do|while)\b/.exec(context.startLine.slice(context.startPos));
  return m && m[1]
}

function isSwitch(context) {
  return context && context.name == "Statement" &&
    /^switch\b/.test(context.startLine.slice(context.startPos))
}

function isLabel(text) {
  return text && /^\s*(case|default)\b/.test(text)
}

function aligned(cx) {
  return !/^\s*((\/\/.*)?$|.*=>)/.test(cx.startLine.slice(cx.startPos + 1))
}

var bracketed = {
  Block: "}", BlockOf: "}", ClassBody: "}", ObjectLiteral: "}", EnumBody: "}", ArrayInitializer: "}",
  ArrayLiteral: "]",
  ParamList: ")", SimpleParamList: ")", ArgList: ")", ParenExpr: ")", CondExpr: ")", TemplateArgs: ")", ForSpec: ")",
  TypeParams: ">", TypeArgs: ">"
};

function statementIndent(cx, config) {
  for (;; cx = cx.parent) {
    if (!cx) { return 0 }
    if (cx.name == "Statement" || cx.name == "ObjectMember" || cx.name == "ClassItem" || cx.name == "NewExpr")
      { return CodeMirror.countColumn(cx.startLine, null, config.tabSize) }
  }
}

function plus(result, add) {
  return typeof result == "number" ? result + add : result
}

function findIndent(cx, textAfter, curLine, config) {
  if (!cx) { return 0 }
  if (cx.name == "string" || cx.name == "comment") { return CodeMirror.Pass }

  var brack = bracketed[cx.name];
  if (brack) {
    var closed = textAfter && textAfter.charAt(0) == brack;
    if (config.align !== false && curLine != cx.startLine && aligned(cx))
      { return CodeMirror.countColumn(cx.startLine, cx.startPos, config.tabSize) + (closed ? 0 : 1) }

    if (cx.name == "Block" || cx.name == "ClassBody" || cx.name == "BlockOf" || cx.name == "EnumBody") {
      // Skip wrapping statement context
      var skipCx = cx;
      if (cx.parent && cx.parent.name == "Statement" && cx.parent.parent &&
          cx.parent.parent.name == "Statement" && hasSubStatement(cx.parent.parent))
        { skipCx = cx.parent.parent; }
      return statementIndent(skipCx, config) + (
        /^(public|private|protected)\s*:/.test(textAfter) ? 1 :
        closed ? 0 :
        isSwitch(cx.parent) && !isLabel(textAfter) ? 2 * config.indentUnit
        : config.indentUnit
      )
    }

    var flat = closed && brack != ")" || curLine == cx.startLine && cx.name != "CondExpr";
    return findIndent(cx.parent, closed ? null : textAfter, cx.startLine, config) +
      (flat ? 0 : config.indentUnit * (brack == ")" || brack == ">" ? 2 : 1))
  } else if (cx.name == "Statement" || cx.name == "ObjectMember" || cx.name == "ClassItem") {
    var base = statementIndent(cx, config);
    if (!curLine && hasSubStatement(cx))
      { return base + (/^else\b/.test(textAfter) ? 0 : config.indentUnit) }
    var flat$1 = curLine == cx.startLine ||
        curLine && CodeMirror.countColumn(curLine, null, config.tabSize) <= base;
    return base + (flat$1 ? 0 : 2 * config.indentUnit)
  } else if (cx.name == "ArrowRest") {
    return plus(findIndent(cx.parent, textAfter, cx.startLine, config), config.indentUnit)
  } else {
    return plus(findIndent(cx.parent, textAfter, curLine, config),
                cx.name == "InitializerList" ? 2 : cx.name == "ThrowsClause" ? 2 * config.indentUnit : 0)
  }
}

function indent(state, textAfter, line, config) {
  if (textAfter.charAt(0) == "#") { return 0 }
  var top = state.context && state.context.name;
  if (top == "DeclType" || top == "BeforeStatement" || top == "AnnotationHead" || top == "TemplateHead")
    { return statementIndent(state.context, config) }
  if ((top == "doccomment.braced" || top == "doccomment.tagGroup") && !/^\s*(@|\*\/)/.test(textAfter))
    { return CodeMirror.countColumn(state.context.startLine, null, config.tabSize) + 2 * config.indentUnit }

  return findIndent(state.contextAt(line, line.length - textAfter.length), textAfter, null, config)
}

function constructorAhead(line, pos) {
  var match = /^(\w+)::~?(\w+)/.exec(line.slice(pos));
  return match && match[1] == match[2]
}

function localConstructorAhead(line, pos, cx) {
  var ahead = /^~?(\w+)/.exec(line.slice(pos));
  if (!ahead) { return false }
  while (cx.name != "Statement") { cx = cx.parent; }
  var className = /\bclass\s+(\w+)/.exec(cx.startLine.slice(cx.startPos));
  return className ? className[1] == ahead[1] : false
}

var scopes = ["Block", "FunctionDef"];

var CppMode = (function (superclass) {
  function CppMode(conf) {
    superclass.call(this, cpp, {
      predicates: {constructorAhead: constructorAhead, localConstructorAhead: localConstructorAhead}
    });
    this.conf = conf;
  }

  if ( superclass ) CppMode.__proto__ = superclass;
  CppMode.prototype = Object.create( superclass && superclass.prototype );
  CppMode.prototype.constructor = CppMode;

  CppMode.prototype.token = function token$$1 (stream, state) {
    return markLocals(superclass.prototype.token.call(this, stream, state), scopes, stream, state)
  };

  CppMode.prototype.indent = function indent$1 (state, textAfter, line) {
    return indent(state, textAfter, line, this.conf)
  };

  return CppMode;
}(CodeMirror.GrammarMode));

CppMode.prototype.electricInput = /^\s*(?:case .*?:|default:|\{\}?|\})$/;
CppMode.prototype.blockCommentStart = "/*";
CppMode.prototype.blockCommentEnd = "*/";
CppMode.prototype.blockCommentContinue = " * ";
CppMode.prototype.lineComment = "//";
CppMode.prototype.fold = "brace";

CodeMirror.defineMode("google-cpp", function (conf) { return new CppMode(conf); });

})));
