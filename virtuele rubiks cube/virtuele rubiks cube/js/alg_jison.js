

var alg_jison = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"TOP_LEVEL_ALG":4,"EOF":5,"OPTIONAL_WHITESPACE":6,"LAYER":7,"NUMBER":8,"REPETITION":9,"AMOUNT":10,"PRIME":11,"COMMENT":12,"COMMENT_SHORT":13,"COMMENT_LONG":14,"BASE_WIDE":15,"BASE_W":16,"BASE_LOWERCASE":17,"BASE":18,"BASE_UPPERCASE":19,"BASE_ROTATION":20,"BASE_SLICE":21,"BLOCK":22,"DASH":23,"TIMESTAMP":24,"AT":25,"FLOAT":26,"SECONDS":27,"WHITESPACE":28,"REPEATABLE":29,"OPEN_BRACKET":30,"NESTED_ALG":31,"COMMA":32,"CLOSE_BRACKET":33,"COLON":34,"OPEN_PARENTHESIS":35,"CLOSE_PARENTHESIS":36,"REPEATED":37,"PAUSE":38,"NEWLINE":39,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",8:"NUMBER",11:"PRIME",13:"COMMENT_SHORT",14:"COMMENT_LONG",16:"BASE_W",17:"BASE_LOWERCASE",19:"BASE_UPPERCASE",20:"BASE_ROTATION",21:"BASE_SLICE",23:"DASH",25:"AT",26:"FLOAT",27:"SECONDS",28:"WHITESPACE",30:"OPEN_BRACKET",32:"COMMA",33:"CLOSE_BRACKET",34:"COLON",35:"OPEN_PARENTHESIS",36:"CLOSE_PARENTHESIS",38:"PAUSE",39:"NEWLINE"},
productions_: [0,[3,2],[3,2],[7,1],[9,1],[10,1],[10,2],[10,1],[12,1],[12,1],[15,1],[15,1],[18,1],[18,1],[18,1],[18,1],[22,1],[22,2],[22,2],[22,4],[24,3],[6,2],[6,0],[29,1],[29,5],[29,5],[29,3],[37,1],[37,2],[37,1],[37,1],[37,1],[31,3],[31,2],[4,1],[4,3],[4,2]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1: return $$[$0-1]; 
break;
case 2: return []; 
break;
case 3:this.$ = parseInt($$[$0]);
break;
case 4:this.$ = parseInt($$[$0]);
break;
case 6:this.$ = -$$[$0-1];
break;
case 7:this.$ = -1;
break;
case 8:this.$ = {type: "comment_short", comment: $$[$0]};
break;
case 9:this.$ = {type: "comment_long", comment: $$[$0]};
break;
case 16:this.$ = {type: "move", base: $$[$0]};
break;
case 17:this.$ = {type: "move", base: $$[$0], layer: $$[$0-1]};
break;
case 18:this.$ = {type: "move", base: $$[$0], endLayer: $$[$0-1]};
break;
case 19:this.$ = {type: "move", base: $$[$0], startLayer: $$[$0-3], endLayer: $$[$0-1]};
break;
case 20:this.$ = {type: "timestamp", time: parseFloat($$[$0-1])};
break;
case 24:this.$ = {"type": "commutator", "A": $$[$0-3], "B": $$[$0-1]};
break;
case 25:this.$ = {"type": "conjugate", "A": $$[$0-3], "B": $$[$0-1]};
break;
case 26:this.$ = {"type": "group", "A": $$[$0-1]};
break;
case 27:$$[$0].amount = 1; this.$ = $$[$0];
break;
case 28:$$[$0-1].amount = $$[$0]; this.$ = $$[$0-1];
break;
case 29:this.$ = {type: "pause"};
break;
case 30:this.$ = {type: "newline"};
break;
case 32:this.$ = [$$[$0-1]]; $$[$0-1].location = _$[$0-1];
break;
case 33:this.$ = $$[$0-1].concat($$[$0]);
break;
case 35:this.$ = [$$[$0-1]]; $$[$0-1].location = _$[$0-1];
break;
case 36:this.$ = $$[$0-1].concat($$[$0]);
break;
}
},
table: [{3:1,4:2,5:[2,22],6:3,8:[2,22],13:[2,22],14:[2,22],16:[2,22],17:[2,22],19:[2,22],20:[2,22],21:[2,22],25:[2,22],28:[1,5],30:[2,22],31:4,35:[2,22],38:[2,22],39:[2,22]},{1:[3]},{4:7,5:[1,6],6:8,8:[2,22],13:[2,22],14:[2,22],16:[2,22],17:[2,22],19:[2,22],20:[2,22],21:[2,22],25:[2,22],28:[1,5],30:[2,22],31:4,35:[2,22],38:[2,22],39:[2,22]},{5:[1,9],7:23,8:[1,28],12:16,13:[1,20],14:[1,21],15:24,16:[1,29],17:[1,30],18:22,19:[1,25],20:[1,26],21:[1,27],22:17,24:10,25:[1,12],29:13,30:[1,18],35:[1,19],37:11,38:[1,14],39:[1,15]},{5:[2,34],6:32,8:[2,34],13:[2,34],14:[2,34],16:[2,34],17:[2,34],19:[2,34],20:[2,34],21:[2,34],25:[2,34],28:[1,5],30:[2,34],31:31,35:[2,34],38:[2,34],39:[2,34]},{5:[2,22],6:33,8:[2,22],13:[2,22],14:[2,22],16:[2,22],17:[2,22],19:[2,22],20:[2,22],21:[2,22],25:[2,22],28:[1,5],30:[2,22],32:[2,22],33:[2,22],34:[2,22],35:[2,22],36:[2,22],38:[2,22],39:[2,22]},{1:[2,1]},{4:7,5:[2,36],6:8,8:[2,36],13:[2,36],14:[2,36],16:[2,36],17:[2,36],19:[2,36],20:[2,36],21:[2,36],25:[2,36],28:[1,5],30:[2,36],31:4,35:[2,36],38:[2,36],39:[2,36]},{7:23,8:[1,28],12:16,13:[1,20],14:[1,21],15:24,16:[1,29],17:[1,30],18:22,19:[1,25],20:[1,26],21:[1,27],22:17,24:10,25:[1,12],29:13,30:[1,18],35:[1,19],37:11,38:[1,14],39:[1,15]},{1:[2,2]},{5:[2,22],6:34,8:[2,22],13:[2,22],14:[2,22],16:[2,22],17:[2,22],19:[2,22],20:[2,22],21:[2,22],25:[2,22],28:[1,5],30:[2,22],35:[2,22],38:[2,22],39:[2,22]},{5:[2,22],6:35,8:[2,22],13:[2,22],14:[2,22],16:[2,22],17:[2,22],19:[2,22],20:[2,22],21:[2,22],25:[2,22],28:[1,5],30:[2,22],32:[2,22],33:[2,22],34:[2,22],35:[2,22],36:[2,22],38:[2,22],39:[2,22]},{26:[1,36]},{5:[2,27],8:[1,40],9:38,10:37,11:[1,39],13:[2,27],14:[2,27],16:[2,27],17:[2,27],19:[2,27],20:[2,27],21:[2,27],25:[2,27],28:[2,27],30:[2,27],32:[2,27],33:[2,27],34:[2,27],35:[2,27],36:[2,27],38:[2,27],39:[2,27]},{5:[2,29],8:[2,29],13:[2,29],14:[2,29],16:[2,29],17:[2,29],19:[2,29],20:[2,29],21:[2,29],25:[2,29],28:[2,29],30:[2,29],32:[2,29],33:[2,29],34:[2,29],35:[2,29],36:[2,29],38:[2,29],39:[2,29]},{5:[2,30],8:[2,30],13:[2,30],14:[2,30],16:[2,30],17:[2,30],19:[2,30],20:[2,30],21:[2,30],25:[2,30],28:[2,30],30:[2,30],32:[2,30],33:[2,30],34:[2,30],35:[2,30],36:[2,30],38:[2,30],39:[2,30]},{5:[2,31],8:[2,31],13:[2,31],14:[2,31],16:[2,31],17:[2,31],19:[2,31],20:[2,31],21:[2,31],25:[2,31],28:[2,31],30:[2,31],32:[2,31],33:[2,31],34:[2,31],35:[2,31],36:[2,31],38:[2,31],39:[2,31]},{5:[2,23],8:[2,23],11:[2,23],13:[2,23],14:[2,23],16:[2,23],17:[2,23],19:[2,23],20:[2,23],21:[2,23],25:[2,23],28:[2,23],30:[2,23],32:[2,23],33:[2,23],34:[2,23],35:[2,23],36:[2,23],38:[2,23],39:[2,23]},{6:32,8:[2,22],13:[2,22],14:[2,22],16:[2,22],17:[2,22],19:[2,22],20:[2,22],21:[2,22],28:[1,5],30:[2,22],31:41,35:[2,22],38:[2,22],39:[2,22]},{6:32,8:[2,22],13:[2,22],14:[2,22],16:[2,22],17:[2,22],19:[2,22],20:[2,22],21:[2,22],28:[1,5],30:[2,22],31:42,35:[2,22],38:[2,22],39:[2,22]},{5:[2,8],8:[2,8],13:[2,8],14:[2,8],16:[2,8],17:[2,8],19:[2,8],20:[2,8],21:[2,8],25:[2,8],28:[2,8],30:[2,8],32:[2,8],33:[2,8],34:[2,8],35:[2,8],36:[2,8],38:[2,8],39:[2,8]},{5:[2,9],8:[2,9],13:[2,9],14:[2,9],16:[2,9],17:[2,9],19:[2,9],20:[2,9],21:[2,9],25:[2,9],28:[2,9],30:[2,9],32:[2,9],33:[2,9],34:[2,9],35:[2,9],36:[2,9],38:[2,9],39:[2,9]},{5:[2,16],8:[2,16],11:[2,16],13:[2,16],14:[2,16],16:[2,16],17:[2,16],19:[2,16],20:[2,16],21:[2,16],25:[2,16],28:[2,16],30:[2,16],32:[2,16],33:[2,16],34:[2,16],35:[2,16],36:[2,16],38:[2,16],39:[2,16]},{15:44,16:[1,29],17:[1,30],19:[1,43],23:[1,45]},{5:[2,12],8:[2,12],11:[2,12],13:[2,12],14:[2,12],16:[2,12],17:[2,12],19:[2,12],20:[2,12],21:[2,12],25:[2,12],28:[2,12],30:[2,12],32:[2,12],33:[2,12],34:[2,12],35:[2,12],36:[2,12],38:[2,12],39:[2,12]},{5:[2,13],8:[2,13],11:[2,13],13:[2,13],14:[2,13],16:[2,13],17:[2,13],19:[2,13],20:[2,13],21:[2,13],25:[2,13],28:[2,13],30:[2,13],32:[2,13],33:[2,13],34:[2,13],35:[2,13],36:[2,13],38:[2,13],39:[2,13]},{5:[2,14],8:[2,14],11:[2,14],13:[2,14],14:[2,14],16:[2,14],17:[2,14],19:[2,14],20:[2,14],21:[2,14],25:[2,14],28:[2,14],30:[2,14],32:[2,14],33:[2,14],34:[2,14],35:[2,14],36:[2,14],38:[2,14],39:[2,14]},{5:[2,15],8:[2,15],11:[2,15],13:[2,15],14:[2,15],16:[2,15],17:[2,15],19:[2,15],20:[2,15],21:[2,15],25:[2,15],28:[2,15],30:[2,15],32:[2,15],33:[2,15],34:[2,15],35:[2,15],36:[2,15],38:[2,15],39:[2,15]},{16:[2,3],17:[2,3],19:[2,3],23:[2,3]},{5:[2,10],8:[2,10],11:[2,10],13:[2,10],14:[2,10],16:[2,10],17:[2,10],19:[2,10],20:[2,10],21:[2,10],25:[2,10],28:[2,10],30:[2,10],32:[2,10],33:[2,10],34:[2,10],35:[2,10],36:[2,10],38:[2,10],39:[2,10]},{5:[2,11],8:[2,11],11:[2,11],13:[2,11],14:[2,11],16:[2,11],17:[2,11],19:[2,11],20:[2,11],21:[2,11],25:[2,11],28:[2,11],30:[2,11],32:[2,11],33:[2,11],34:[2,11],35:[2,11],36:[2,11],38:[2,11],39:[2,11]},{5:[2,33],6:32,8:[2,33],13:[2,33],14:[2,33],16:[2,33],17:[2,33],19:[2,33],20:[2,33],21:[2,33],25:[2,33],28:[1,5],30:[2,33],31:31,32:[2,33],33:[2,33],34:[2,33],35:[2,33],36:[2,33],38:[2,33],39:[2,33]},{7:23,8:[1,28],12:16,13:[1,20],14:[1,21],15:24,16:[1,29],17:[1,30],18:22,19:[1,25],20:[1,26],21:[1,27],22:17,29:13,30:[1,18],35:[1,19],37:11,38:[1,14],39:[1,15]},{5:[2,21],8:[2,21],13:[2,21],14:[2,21],16:[2,21],17:[2,21],19:[2,21],20:[2,21],21:[2,21],25:[2,21],28:[2,21],30:[2,21],32:[2,21],33:[2,21],34:[2,21],35:[2,21],36:[2,21],38:[2,21],39:[2,21]},{5:[2,35],8:[2,35],13:[2,35],14:[2,35],16:[2,35],17:[2,35],19:[2,35],20:[2,35],21:[2,35],25:[2,35],28:[2,35],30:[2,35],35:[2,35],38:[2,35],39:[2,35]},{5:[2,32],8:[2,32],13:[2,32],14:[2,32],16:[2,32],17:[2,32],19:[2,32],20:[2,32],21:[2,32],25:[2,32],28:[2,32],30:[2,32],32:[2,32],33:[2,32],34:[2,32],35:[2,32],36:[2,32],38:[2,32],39:[2,32]},{27:[1,46]},{5:[2,28],8:[2,28],13:[2,28],14:[2,28],16:[2,28],17:[2,28],19:[2,28],20:[2,28],21:[2,28],25:[2,28],28:[2,28],30:[2,28],32:[2,28],33:[2,28],34:[2,28],35:[2,28],36:[2,28],38:[2,28],39:[2,28]},{5:[2,5],8:[2,5],11:[1,47],13:[2,5],14:[2,5],16:[2,5],17:[2,5],19:[2,5],20:[2,5],21:[2,5],25:[2,5],28:[2,5],30:[2,5],32:[2,5],33:[2,5],34:[2,5],35:[2,5],36:[2,5],38:[2,5],39:[2,5]},{5:[2,7],8:[2,7],13:[2,7],14:[2,7],16:[2,7],17:[2,7],19:[2,7],20:[2,7],21:[2,7],25:[2,7],28:[2,7],30:[2,7],32:[2,7],33:[2,7],34:[2,7],35:[2,7],36:[2,7],38:[2,7],39:[2,7]},{5:[2,4],8:[2,4],11:[2,4],13:[2,4],14:[2,4],16:[2,4],17:[2,4],19:[2,4],20:[2,4],21:[2,4],25:[2,4],28:[2,4],30:[2,4],32:[2,4],33:[2,4],34:[2,4],35:[2,4],36:[2,4],38:[2,4],39:[2,4]},{6:32,8:[2,22],13:[2,22],14:[2,22],16:[2,22],17:[2,22],19:[2,22],20:[2,22],21:[2,22],28:[1,5],30:[2,22],31:31,32:[1,48],34:[1,49],35:[2,22],38:[2,22],39:[2,22]},{6:32,8:[2,22],13:[2,22],14:[2,22],16:[2,22],17:[2,22],19:[2,22],20:[2,22],21:[2,22],28:[1,5],30:[2,22],31:31,35:[2,22],36:[1,50],38:[2,22],39:[2,22]},{5:[2,17],8:[2,17],11:[2,17],13:[2,17],14:[2,17],16:[2,17],17:[2,17],19:[2,17],20:[2,17],21:[2,17],25:[2,17],28:[2,17],30:[2,17],32:[2,17],33:[2,17],34:[2,17],35:[2,17],36:[2,17],38:[2,17],39:[2,17]},{5:[2,18],8:[2,18],11:[2,18],13:[2,18],14:[2,18],16:[2,18],17:[2,18],19:[2,18],20:[2,18],21:[2,18],25:[2,18],28:[2,18],30:[2,18],32:[2,18],33:[2,18],34:[2,18],35:[2,18],36:[2,18],38:[2,18],39:[2,18]},{7:51,8:[1,28]},{5:[2,20],8:[2,20],13:[2,20],14:[2,20],16:[2,20],17:[2,20],19:[2,20],20:[2,20],21:[2,20],25:[2,20],28:[2,20],30:[2,20],35:[2,20],38:[2,20],39:[2,20]},{5:[2,6],8:[2,6],13:[2,6],14:[2,6],16:[2,6],17:[2,6],19:[2,6],20:[2,6],21:[2,6],25:[2,6],28:[2,6],30:[2,6],32:[2,6],33:[2,6],34:[2,6],35:[2,6],36:[2,6],38:[2,6],39:[2,6]},{6:32,8:[2,22],13:[2,22],14:[2,22],16:[2,22],17:[2,22],19:[2,22],20:[2,22],21:[2,22],28:[1,5],30:[2,22],31:52,35:[2,22],38:[2,22],39:[2,22]},{6:32,8:[2,22],13:[2,22],14:[2,22],16:[2,22],17:[2,22],19:[2,22],20:[2,22],21:[2,22],28:[1,5],30:[2,22],31:53,35:[2,22],38:[2,22],39:[2,22]},{5:[2,26],8:[2,26],11:[2,26],13:[2,26],14:[2,26],16:[2,26],17:[2,26],19:[2,26],20:[2,26],21:[2,26],25:[2,26],28:[2,26],30:[2,26],32:[2,26],33:[2,26],34:[2,26],35:[2,26],36:[2,26],38:[2,26],39:[2,26]},{15:54,16:[1,29],17:[1,30]},{6:32,8:[2,22],13:[2,22],14:[2,22],16:[2,22],17:[2,22],19:[2,22],20:[2,22],21:[2,22],28:[1,5],30:[2,22],31:31,33:[1,55],35:[2,22],38:[2,22],39:[2,22]},{6:32,8:[2,22],13:[2,22],14:[2,22],16:[2,22],17:[2,22],19:[2,22],20:[2,22],21:[2,22],28:[1,5],30:[2,22],31:31,33:[1,56],35:[2,22],38:[2,22],39:[2,22]},{5:[2,19],8:[2,19],11:[2,19],13:[2,19],14:[2,19],16:[2,19],17:[2,19],19:[2,19],20:[2,19],21:[2,19],25:[2,19],28:[2,19],30:[2,19],32:[2,19],33:[2,19],34:[2,19],35:[2,19],36:[2,19],38:[2,19],39:[2,19]},{5:[2,24],8:[2,24],11:[2,24],13:[2,24],14:[2,24],16:[2,24],17:[2,24],19:[2,24],20:[2,24],21:[2,24],25:[2,24],28:[2,24],30:[2,24],32:[2,24],33:[2,24],34:[2,24],35:[2,24],36:[2,24],38:[2,24],39:[2,24]},{5:[2,25],8:[2,25],11:[2,25],13:[2,25],14:[2,25],16:[2,25],17:[2,25],19:[2,25],20:[2,25],21:[2,25],25:[2,25],28:[2,25],30:[2,25],32:[2,25],33:[2,25],34:[2,25],35:[2,25],36:[2,25],38:[2,25],39:[2,25]}],
defaultActions: {6:[2,1],9:[2,2]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == 'undefined') {
        this.lexer.yylloc = {};
    }
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === 'function') {
        this.parseError = this.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || EOF;
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + this.lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: this.lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: this.lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                this.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.2.1 */
var lexer = (function(){
var lexer = {

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input) {
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0: this.begin("timestamp"); return 25 
break;
case 1:return 26
break;
case 2: this.popState(); return 27 
break;
case 3:return "WHITESPACE"
break;
case 4:return "NUMBER"
break;
case 5:return "DASH"
break;
case 6:return "BASE_W"
break;
case 7:return "BASE_UPPERCASE"
break;
case 8:return "BASE_LOWERCASE"
break;
case 9:return "BASE_ROTATION"
break;
case 10:return "BASE_SLICE"
break;
case 11:return "PRIME"
break;
case 12:return "PAUSE"
break;
case 13:return "COMMENT_SHORT"
break;
case 14:return "COMMENT_LONG"
break;
case 15:return "NEWLINE"
break;
case 16:return "OPEN_BRACKET"
break;
case 17:return "CLOSE_BRACKET"
break;
case 18:return "OPEN_PARENTHESIS"
break;
case 19:return "CLOSE_PARENTHESIS"
break;
case 20:return "COMMA"
break;
case 21:return "COLON"
break;
case 22:return "EOF"
break;
case 23:return "INVALID"
break;
}
},
rules: [/^(?:@)/,/^(?:[0-9]+(\.[0-9]+)?)/,/^(?:s\b)/,/^(?:[^\S\r\n]+)/,/^(?:[0-9]+)/,/^(?:-)/,/^(?:(Rw|Fw|Uw|Bw|Lw|Dw))/,/^(?:(R|F|U|B|L|D))/,/^(?:(r|f|u|b|l|d))/,/^(?:(x|y|z))/,/^(?:(M|E|S|m|e|s))/,/^(?:')/,/^(?:\.)/,/^(?:\/\/[^\n\r]*)/,/^(?:\/\*[^]*?\*\/)/,/^(?:[\n\r])/,/^(?:\[)/,/^(?:\])/,/^(?:\()/,/^(?:\))/,/^(?:,)/,/^(?::)/,/^(?:$)/,/^(?:.)/],
conditions: {"timestamp":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],"inclusive":true},"INITIAL":{"rules":[0,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],"inclusive":true}}
};
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = alg_jison;
exports.Parser = alg_jison.Parser;
exports.parse = function () { return alg_jison.parse.apply(alg_jison, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}