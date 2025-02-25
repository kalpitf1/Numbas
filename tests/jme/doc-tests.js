var doc_tests = 
[
    {
        "name": "Arithmetic",
        "fns": [
            {
                "name": "x+y",
                "examples": [
                    {
                        "in": "1+2",
                        "out": "3"
                    },
                    {
                        "in": "vector(1,2)+vector(3,4)",
                        "out": "vector(4,6)"
                    },
                    {
                        "in": "matrix([1,2],[3,4])+matrix([5,6],[7,8])",
                        "out": "matrix([6,8],[10,12])"
                    },
                    {
                        "in": "[1,2,3]+4",
                        "out": "[1,2,3,4]"
                    },
                    {
                        "in": "[1,2,3]+[4,5,6]",
                        "out": "[1,2,3,4,5,6]"
                    },
                    {
                        "in": "\"hi \"+\"there\"",
                        "out": "\"hi there\""
                    }
                ]
            },
            {
                "name": "x-y",
                "examples": [
                    {
                        "in": "1-2",
                        "out": "-1"
                    },
                    {
                        "in": "vector(3,2)-vector(1,4)",
                        "out": "vector(2,-2)"
                    },
                    {
                        "in": "matrix([5,6],[3,4])-matrix([1,2],[7,8])",
                        "out": "matrix([4,4],[-4,-4])"
                    }
                ]
            },
            {
                "name": "x*y",
                "examples": [
                    {
                        "in": "1*2",
                        "out": "2"
                    },
                    {
                        "in": "2*vector(1,2,3)",
                        "out": "vector(2,4,6)"
                    },
                    {
                        "in": "matrix([1,2],[3,4])*2",
                        "out": "matrix([2,4],[6,8])"
                    },
                    {
                        "in": "matrix([1,2],[3,4])*vector(1,2)",
                        "out": "vector(5,11)"
                    }
                ]
            },
            {
                "name": "x/y",
                "examples": [
                    {
                        "in": "1.2/3",
                        "out": "0.4"
                    }
                ]
            },
            {
                "name": "x^y",
                "examples": [
                    {
                        "in": "3^2",
                        "out": "9"
                    },
                    {
                        "in": "e^(pi * i)",
                        "out": "-1"
                    }
                ]
            },
            {
                "name": "exp(x)",
                "examples": []
            }
        ]
    },
    {
        "name": "Number operations",
        "fns": [
            {
                "name": "decimal(n)",
                "examples": []
            },
            {
                "name": "rational(n)",
                "examples": [
                    {
                        "in": "rational(pi)",
                        "out": "355/113"
                    }
                ]
            },
            {
                "name": "int(n)",
                "examples": [
                    {
                        "in": "int(3.0)",
                        "out": "3"
                    }
                ]
            },
            {
                "name": "abs(x)",
                "examples": [
                    {
                        "in": "abs(-8)",
                        "out": "8"
                    },
                    {
                        "in": "abs(3-4i)",
                        "out": "5"
                    },
                    {
                        "in": "abs(\"Hello\")",
                        "out": "5"
                    },
                    {
                        "in": "abs([1,2,3])",
                        "out": "3"
                    },
                    {
                        "in": "len([1,2,3])",
                        "out": "3"
                    },
                    {
                        "in": "len(set([1,2,2]))",
                        "out": "2"
                    },
                    {
                        "in": "length(vector(3,4))",
                        "out": "5"
                    },
                    {
                        "in": "abs(vector(3,4,12))",
                        "out": "13"
                    },
                    {
                        "in": "len([\"a\": 1, \"b\": 2, \"c\": 1])",
                        "out": "3"
                    }
                ]
            },
            {
                "name": "arg(z)",
                "examples": [
                    {
                        "in": "arg(-1)",
                        "out": "pi"
                    }
                ]
            },
            {
                "name": "re(z)",
                "examples": [
                    {
                        "in": "re(1+2i)",
                        "out": "1"
                    }
                ]
            },
            {
                "name": "im(z)",
                "examples": [
                    {
                        "in": "im(1+2i)",
                        "out": "2"
                    }
                ]
            },
            {
                "name": "conj(z)",
                "examples": [
                    {
                        "in": "conj(1+i)",
                        "out": "1-i"
                    }
                ]
            },
            {
                "name": "isint(x)",
                "examples": [
                    {
                        "in": "isint(4.0)",
                        "out": "true"
                    }
                ]
            },
            {
                "name": "iszero(n)",
                "examples": []
            },
            {
                "name": "sqrt(x)",
                "examples": [
                    {
                        "in": "sqrt(4)",
                        "out": "2"
                    },
                    {
                        "in": "sqrt(-1)",
                        "out": "i"
                    }
                ]
            },
            {
                "name": "root(x,n)",
                "examples": [
                    {
                        "in": "root(8,3)",
                        "out": "2"
                    }
                ]
            },
            {
                "name": "ln(x)",
                "examples": [
                    {
                        "in": "ln(e)",
                        "out": "1"
                    }
                ]
            },
            {
                "name": "log(x,b)",
                "examples": [
                    {
                        "in": "log(100)",
                        "out": "2"
                    },
                    {
                        "in": "log(343,7)",
                        "out": "3"
                    }
                ]
            },
            {
                "name": "degrees(x)",
                "examples": [
                    {
                        "in": "degrees(pi/2)",
                        "out": "90"
                    }
                ]
            },
            {
                "name": "radians(x)",
                "examples": [
                    {
                        "in": "radians(180)",
                        "out": "pi"
                    }
                ]
            },
            {
                "name": "sign(x)",
                "examples": [
                    {
                        "in": "sign(3)",
                        "out": "1"
                    },
                    {
                        "in": "sign(-3)",
                        "out": "-1"
                    }
                ]
            },
            {
                "name": "max(a,b)",
                "examples": [
                    {
                        "in": "max(46,2)",
                        "out": "46"
                    },
                    {
                        "in": "max([1,2,3])",
                        "out": "3"
                    }
                ]
            },
            {
                "name": "min(a,b)",
                "examples": [
                    {
                        "in": "min(3,2)",
                        "out": "2"
                    },
                    {
                        "in": "min([1,2,3])",
                        "out": "1"
                    },
                    {
                        "in": "min(1/2, 2/3)",
                        "out": "1/2"
                    }
                ]
            },
            {
                "name": "clamp(x,a,b)",
                "examples": [
                    {
                        "in": "clamp(1,0,2)",
                        "out": "1"
                    },
                    {
                        "in": "clamp(-1,0,2)",
                        "out": "0"
                    },
                    {
                        "in": "clamp(3,0,2)",
                        "out": "2"
                    }
                ]
            },
            {
                "name": "precround(n,d)",
                "examples": [
                    {
                        "in": "precround(pi,5)",
                        "out": "3.14159"
                    },
                    {
                        "in": "precround(matrix([[0.123,4.56],[54,98.765]]),2)",
                        "out": "matrix([0.12,4.56],[54,98.77])"
                    },
                    {
                        "in": "precround(vector(1/3,2/3),1)",
                        "out": "vector(0.3,0.7)"
                    }
                ]
            },
            {
                "name": "siground(n,f)",
                "examples": [
                    {
                        "in": "siground(pi,3)",
                        "out": "3.14"
                    },
                    {
                        "in": "siground(matrix([[0.123,4.56],[54,98.765]]),2)",
                        "out": "matrix([0.12,4.6],[54,99])"
                    },
                    {
                        "in": "siground(vector(10/3,20/3),2)",
                        "out": "vector(3.3,6.7)"
                    }
                ]
            },
            {
                "name": "withintolerance(a,b,t)",
                "examples": [
                    {
                        "in": "withintolerance(pi,22/7,0.1)",
                        "out": "true"
                    }
                ]
            },
            {
                "name": "dpformat(n,d,[style])",
                "examples": [
                    {
                        "in": "dpformat(1.2,4)",
                        "out": "\"1.2000\""
                    }
                ]
            },
            {
                "name": "countdp(n)",
                "examples": [
                    {
                        "in": "countdp(\"1.0\")",
                        "out": "1"
                    },
                    {
                        "in": "countdp(\"1\")",
                        "out": "0"
                    },
                    {
                        "in": "countdp(\"not a number\")",
                        "out": "0"
                    }
                ]
            },
            {
                "name": "sigformat(n,d,[style])",
                "examples": [
                    {
                        "in": "sigformat(4,3)",
                        "out": "\"4.00\""
                    }
                ]
            },
            {
                "name": "countsigfigs(n)",
                "examples": [
                    {
                        "in": "countsigfigs(\"1\")",
                        "out": "1"
                    },
                    {
                        "in": "countsigfigs(\"100\")",
                        "out": "1"
                    },
                    {
                        "in": "countsigfigs(\"1.0\")",
                        "out": "2"
                    },
                    {
                        "in": "countsigfigs(\"not a number\")",
                        "out": "0"
                    }
                ]
            },
            {
                "name": "togivenprecision(str, precisionType, precision, strict)",
                "examples": [
                    {
                        "in": "togivenprecision(\"1\",\"dp\",1,true)",
                        "out": "false"
                    },
                    {
                        "in": "togivenprecision(\"1\",\"dp\",1,false)",
                        "out": "true"
                    },
                    {
                        "in": "togivenprecision(\"1.0\",\"dp\",1,true)",
                        "out": "true"
                    },
                    {
                        "in": "togivenprecision(\"100\",\"sigfig\",1,true)",
                        "out": "true"
                    },
                    {
                        "in": "togivenprecision(\"100\",\"sigfig\",3,true)",
                        "out": "true"
                    }
                ]
            },
            {
                "name": "tonearest(a,b)",
                "examples": [
                    {
                        "in": "tonearest(1.234,0.1)",
                        "out": "1.2"
                    }
                ]
            },
            {
                "name": "formatnumber(n,style)",
                "examples": [
                    {
                        "in": "formatnumber(1234.567,\"eu\")",
                        "out": "\"1.234,567\""
                    }
                ]
            },
            {
                "name": "scientificnumberlatex(n)",
                "examples": [
                    {
                        "in": "scientificnumberlatex(123)",
                        "out": "\"1.23 \\\\times 10^{2}\""
                    }
                ]
            },
            {
                "name": "scientificnumberhtml(n)",
                "examples": [
                    {
                        "in": "scientificnumberhtml(123)",
                        "out": "html(\"<span>1.23 \u00d7 10<sup>2</sup></span>\")"
                    }
                ]
            },
            {
                "name": "cleannumber(str, styles)",
                "examples": [
                    {
                        "in": "cleannumber(\"100 000,02\",[\"si-fr\"])",
                        "out": "\"100000.02\""
                    },
                    {
                        "in": "cleannumber(\" 1 \")",
                        "out": "\"1\""
                    },
                    {
                        "in": "cleannumber(\"1.0\")",
                        "out": "\"1.0\""
                    }
                ]
            },
            {
                "name": "matchnumber(str,styles)",
                "examples": [
                    {
                        "in": "matchnumber(\"1.234\",[\"plain\",\"eu\"])",
                        "out": "[ \"1.234\", 1.234 ]"
                    },
                    {
                        "in": "matchnumber(\"1,234\",[\"plain\",\"eu\"])",
                        "out": "[ \"1,234\", 1.234 ]"
                    },
                    {
                        "in": "matchnumber(\"5 000 things\",[\"plain\",\"si-en\"])",
                        "out": "[ \"5 000\", 5000 ]"
                    },
                    {
                        "in": "matchnumber(\"apple\",[\"plain\"])",
                        "out": "[ \"\", NaN ]"
                    }
                ]
            },
            {
                "name": "parsenumber(string,style)",
                "examples": [
                    {
                        "in": "parsenumber(\"1 234,567\",\"si-fr\")",
                        "out": "1234.567"
                    },
                    {
                        "in": "parsenumber(\"1.001\",[\"si-fr\",\"eu\"])",
                        "out": "1001"
                    }
                ]
            },
            {
                "name": "parsenumber_or_fraction(string,style)",
                "examples": [
                    {
                        "in": "parsenumber_or_fraction(\"1/2\")",
                        "out": "0.5"
                    }
                ]
            },
            {
                "name": "parsedecimal(string,style)",
                "examples": [
                    {
                        "in": "parsedecimal(\"1 234,567\",\"si-fr\")",
                        "out": "1234.567"
                    },
                    {
                        "in": "parsedecimal(\"1.001\",[\"si-fr\",\"eu\"])",
                        "out": "1001"
                    }
                ]
            },
            {
                "name": "parsedecimal_or_fraction(string,style)",
                "examples": [
                    {
                        "in": "parsedecimal_or_fraction(\"1/2\")",
                        "out": "0.5"
                    }
                ]
            },
            {
                "name": "isnan(n)",
                "examples": [
                    {
                        "in": "isnan(1)",
                        "out": "false"
                    },
                    {
                        "in": "isnan(parsenumber(\"a\",\"en\"))",
                        "out": "true"
                    }
                ]
            }
        ]
    },
    {
        "name": "Trigonometry",
        "fns": [
            {
                "name": "sin(x)",
                "examples": []
            },
            {
                "name": "cos(x)",
                "examples": []
            },
            {
                "name": "tan(x)",
                "examples": []
            },
            {
                "name": "cosec(x)",
                "examples": []
            },
            {
                "name": "sec(x)",
                "examples": []
            },
            {
                "name": "cot(x)",
                "examples": []
            },
            {
                "name": "arcsin(x)",
                "examples": []
            },
            {
                "name": "arccos(x)",
                "examples": []
            },
            {
                "name": "arctan(x)",
                "examples": []
            },
            {
                "name": "atan2(y,x)",
                "examples": [
                    {
                        "in": "atan2(0,1)",
                        "out": "0"
                    },
                    {
                        "in": "atan2(sin(1),cos(1))",
                        "out": "1"
                    },
                    {
                        "in": "atan2(sin(pi/4), cos(pi/4)) / pi",
                        "out": "0.25"
                    },
                    {
                        "in": "atan2(sin(pi/4), -cos(pi/4)) / pi",
                        "out": "0.75"
                    }
                ]
            },
            {
                "name": "sinh(x)",
                "examples": []
            },
            {
                "name": "cosh(x)",
                "examples": []
            },
            {
                "name": "tanh(x)",
                "examples": []
            },
            {
                "name": "cosech(x)",
                "examples": []
            },
            {
                "name": "sech(x)",
                "examples": []
            },
            {
                "name": "coth(x)",
                "examples": []
            },
            {
                "name": "arcsinh(x)",
                "examples": []
            },
            {
                "name": "arccosh(x)",
                "examples": []
            },
            {
                "name": "arctanh(x)",
                "examples": []
            }
        ]
    },
    {
        "name": "Number theory",
        "fns": [
            {
                "name": "x!",
                "examples": [
                    {
                        "in": "fact(3)",
                        "out": "6"
                    },
                    {
                        "in": "3!",
                        "out": "6"
                    },
                    {
                        "in": "fact(5.5)",
                        "out": "287.885277815"
                    }
                ]
            },
            {
                "name": "factorise(n)",
                "examples": [
                    {
                        "in": "factorise(18)",
                        "out": "[1,2]"
                    },
                    {
                        "in": "factorise(70)",
                        "out": "[1,0,1,1]"
                    }
                ]
            },
            {
                "name": "gamma(x)",
                "examples": [
                    {
                        "in": "gamma(3)",
                        "out": "2"
                    },
                    {
                        "in": "gamma(1+i)",
                        "out": "0.4980156681 - 0.1549498283i"
                    }
                ]
            },
            {
                "name": "ceil(x)",
                "examples": [
                    {
                        "in": "ceil(3.2)",
                        "out": "4"
                    },
                    {
                        "in": "ceil(-1.3+5.4i)",
                        "out": "-1+6i"
                    }
                ]
            },
            {
                "name": "floor(x)",
                "examples": [
                    {
                        "in": "floor(3.5)",
                        "out": "3"
                    }
                ]
            },
            {
                "name": "round(x)",
                "examples": [
                    {
                        "in": "round(0.1)",
                        "out": "0"
                    },
                    {
                        "in": "round(0.9)",
                        "out": "1"
                    },
                    {
                        "in": "round(4.5)",
                        "out": "5"
                    },
                    {
                        "in": "round(-0.5)",
                        "out": "0"
                    }
                ]
            },
            {
                "name": "trunc(x)",
                "examples": [
                    {
                        "in": "trunc(3.3)",
                        "out": "3"
                    },
                    {
                        "in": "trunc(-3.3)",
                        "out": "-3"
                    }
                ]
            },
            {
                "name": "fract(x)",
                "examples": [
                    {
                        "in": "fract(4.3)",
                        "out": "0.3"
                    }
                ]
            },
            {
                "name": "rational_approximation(n,[accuracy])",
                "examples": [
                    {
                        "in": "rational_approximation(pi)",
                        "out": "[355,113]"
                    },
                    {
                        "in": "rational_approximation(pi,3)",
                        "out": "[22,7]"
                    }
                ]
            },
            {
                "name": "mod(a,b)",
                "examples": [
                    {
                        "in": "mod(5,3)",
                        "out": "2"
                    }
                ]
            },
            {
                "name": "perm(n,k)",
                "examples": [
                    {
                        "in": "perm(5,2)",
                        "out": "20"
                    }
                ]
            },
            {
                "name": "comb(n,k)",
                "examples": [
                    {
                        "in": "comb(5,2)",
                        "out": "10"
                    }
                ]
            },
            {
                "name": "gcd(a,b)",
                "examples": [
                    {
                        "in": "gcd(12,16)",
                        "out": "4"
                    }
                ]
            },
            {
                "name": "gcd_without_pi_or_i(a,b)",
                "examples": [
                    {
                        "in": "gcd_without_pi_or_i(6*pi, 9)",
                        "out": "3"
                    }
                ]
            },
            {
                "name": "coprime(a,b)",
                "examples": [
                    {
                        "in": "coprime(12,16)",
                        "out": "false"
                    },
                    {
                        "in": "coprime(2,3)",
                        "out": "true"
                    },
                    {
                        "in": "coprime(1,3)",
                        "out": "true"
                    },
                    {
                        "in": "coprime(1,1)",
                        "out": "true"
                    }
                ]
            },
            {
                "name": "lcm(a,b)",
                "examples": [
                    {
                        "in": "lcm(8,12)",
                        "out": "24"
                    },
                    {
                        "in": "lcm(8,12,5)",
                        "out": "120"
                    }
                ]
            },
            {
                "name": "x|y",
                "examples": [
                    {
                        "in": "4|8",
                        "out": "true"
                    }
                ]
            }
        ]
    },
    {
        "name": "Vector and matrix arithmetic",
        "fns": [
            {
                "name": "vector(a1,a2,...,aN)",
                "examples": []
            },
            {
                "name": "matrix(row1,row2,...,rowN)",
                "examples": []
            },
            {
                "name": "id(n)",
                "examples": [
                    {
                        "in": "id(3)",
                        "out": "matrix([1,0,0],[0,1,0],[0,0,1])"
                    }
                ]
            },
            {
                "name": "numrows(matrix)",
                "examples": [
                    {
                        "in": "numrows(matrix([1,2],[3,4],[5,6]))",
                        "out": "3"
                    }
                ]
            },
            {
                "name": "numcolumns(matrix)",
                "examples": [
                    {
                        "in": "numcolumns(matrix([1,2],[3,4],[5,6]))",
                        "out": "2"
                    }
                ]
            },
            {
                "name": "rowvector(a1,a2,...,aN)",
                "examples": [
                    {
                        "in": "rowvector(1,2)",
                        "out": "matrix([1,2])"
                    },
                    {
                        "in": "rowvector([1,2])",
                        "out": "matrix([1,2])"
                    }
                ]
            },
            {
                "name": "dot(x,y)",
                "examples": [
                    {
                        "in": "dot(vector(1,2,3),vector(4,5,6))",
                        "out": "32"
                    },
                    {
                        "in": "dot(matrix([1],[2]), matrix([3],[4]))",
                        "out": "11"
                    }
                ]
            },
            {
                "name": "cross(x,y)",
                "examples": [
                    {
                        "in": "cross(vector(1,2,3),vector(4,5,6))",
                        "out": "vector(-3,6,-3)"
                    },
                    {
                        "in": "cross(matrix([1],[2],[3]), matrix([4],[5],[6]))",
                        "out": "vector(-3,6,-3)"
                    }
                ]
            },
            {
                "name": "angle(a,b)",
                "examples": [
                    {
                        "in": "angle(vector(1,0),vector(0,1))",
                        "out": "1.5707963268"
                    }
                ]
            },
            {
                "name": "is_zero(x)",
                "examples": [
                    {
                        "in": "is_zero(vector(0,0,0))",
                        "out": "true"
                    }
                ]
            },
            {
                "name": "det(x)",
                "examples": [
                    {
                        "in": "det(matrix([1,2],[3,4]))",
                        "out": "-2"
                    },
                    {
                        "in": "det(matrix([1,2,3],[4,5,6],[7,8,9]))",
                        "out": "0"
                    }
                ]
            },
            {
                "name": "transpose(x)",
                "examples": [
                    {
                        "in": "transpose(matrix([1,2],[3,4]))",
                        "out": "matrix([1,3],[2,4])"
                    },
                    {
                        "in": "transpose(vector(1,2,3))",
                        "out": "matrix([1,2,3])"
                    }
                ]
            },
            {
                "name": "sum_cells(m)",
                "examples": [
                    {
                        "in": "sum_cells(matrix([1,2],[3,4]))",
                        "out": "10"
                    }
                ]
            }
        ]
    },
    {
        "name": "Strings",
        "fns": [
            {
                "name": "x[n]",
                "examples": [
                    {
                        "in": "\"hello\"[1]",
                        "out": "\"e\""
                    }
                ]
            },
            {
                "name": "x[a..b]",
                "examples": [
                    {
                        "in": "\"hello\"[1..4]",
                        "out": "\"ell\""
                    }
                ]
            },
            {
                "name": "substring in string",
                "examples": [
                    {
                        "in": "\"plain\" in \"explains\"",
                        "out": "true"
                    }
                ]
            },
            {
                "name": "string(x)",
                "examples": [
                    {
                        "in": "string(123)",
                        "out": "\"123\""
                    },
                    {
                        "in": "string(x)",
                        "out": "\"x\""
                    },
                    {
                        "in": "string(expression(\"0.5\"))",
                        "out": "\"0.5\""
                    },
                    {
                        "in": "string(expression(\"0.5\"),\"fractionNumbers\")",
                        "out": "\"1/2\""
                    }
                ]
            },
            {
                "name": "latex(x)",
                "examples": [
                    {
                        "in": "latex(expression(\"x^2 + 3/4\"))",
                        "out": "\"x^{2} + \\\\frac{3}{4}\""
                    }
                ]
            },
            {
                "name": "safe(x)",
                "examples": []
            },
            {
                "name": "render(x, values)",
                "examples": [
                    {
                        "in": "render(safe(\"I have {num_apples} apples.\"), [\"num_apples\": 5])",
                        "out": "\"I have 5 apples.\""
                    },
                    {
                        "in": "render(safe(\"Let $x = \\\\var{x}$\"), [\"x\": 2])",
                        "out": "\"Let $x = {2}$\""
                    }
                ]
            },
            {
                "name": "capitalise(x)",
                "examples": []
            },
            {
                "name": "pluralise(n,singular,plural)",
                "examples": []
            },
            {
                "name": "upper(x)",
                "examples": []
            },
            {
                "name": "lower(x)",
                "examples": []
            },
            {
                "name": "join(strings, delimiter)",
                "examples": [
                    {
                        "in": "join(['a','b','c'],',')",
                        "out": "\"a,b,c\""
                    }
                ]
            },
            {
                "name": "split(string,delimiter)",
                "examples": [
                    {
                        "in": "split(\"a,b,c,d\",\",\")",
                        "out": "[\"a\",\"b\",\"c\",\"d\"]"
                    }
                ]
            },
            {
                "name": "match_regex(pattern,str,flags)",
                "examples": [
                    {
                        "in": "match_regex(\"\\\\d+\",\"01234\")",
                        "out": "[\"01234\"]"
                    },
                    {
                        "in": "match_regex(\"a(b+)\",\"abbbb\")",
                        "out": "[\"abbbb\",\"bbbb\"]"
                    },
                    {
                        "in": "match_regex(\"a(b+)\",\"ABBBB\")",
                        "out": "[]"
                    },
                    {
                        "in": "match_regex(\"a(b+)\",\"ABBBB\",\"i\")",
                        "out": "[\"ABBBB\",\"BBBB\"]"
                    }
                ]
            },
            {
                "name": "split_regex(string,pattern,flags)",
                "examples": [
                    {
                        "in": "split_regex(\"a, b,c, d \",\", *\")",
                        "out": "[\"a\",\"b\",\"c\",\"d\"]"
                    },
                    {
                        "in": "split_regex(\"this and that AND THIS\",\" and \",\"i\")",
                        "out": "[\"this\",\"that\",\"THIS\"]"
                    }
                ]
            },
            {
                "name": "replace_regex(pattern,replacement,string,flags)",
                "examples": [
                    {
                        "in": "replace_regex(\"day\",\"DAY\",\"Monday Tuesday Wednesday\")",
                        "out": "\"MonDAY Tuesday Wednesday\""
                    },
                    {
                        "in": "replace_regex(\"day\",\"DAY\",\"Monday Tuesday Wednesday\",\"g\")",
                        "out": "\"MonDAY TuesDAY WednesDAY\""
                    },
                    {
                        "in": "replace_regex(\"a\",\"o\",\"Aardvark\")",
                        "out": "\"Aordvark\""
                    },
                    {
                        "in": "replace_regex(\"a\",\"o\",\"Aardvark\",\"i\")",
                        "out": "\"oardvark\""
                    },
                    {
                        "in": "replace_regex(\"a\",\"o\",\"Aardvark\",\"ig\")",
                        "out": "\"oordvork\""
                    },
                    {
                        "in": "replace_regex(safe(\"(\\\\d+)x(\\\\d+)\"),\"$1 by $2\",\"32x24\")",
                        "out": "\"32 by 24\""
                    },
                    {
                        "in": "replace_regex(safe(\"a{2}\"),\"c\",\"a aa aaa\")",
                        "out": "\"a c aaa\""
                    }
                ]
            },
            {
                "name": "trim(str)",
                "examples": [
                    {
                        "in": "trim(\" a string  \")",
                        "out": "\"a string\""
                    }
                ]
            },
            {
                "name": "currency(n,prefix,suffix)",
                "examples": [
                    {
                        "in": "currency(123.321,\"\u00a3\",\"\")",
                        "out": "\"\u00a3123.32\""
                    }
                ]
            },
            {
                "name": "separateThousands(n,separator)",
                "examples": [
                    {
                        "in": "separateThousands(1234567.1234,\",\")",
                        "out": "\"1,234,567.1234\""
                    }
                ]
            },
            {
                "name": "unpercent(str)",
                "examples": [
                    {
                        "in": "unpercent(\"2%\")",
                        "out": "0.02"
                    }
                ]
            },
            {
                "name": "lpad(str, n, prefix)",
                "examples": [
                    {
                        "in": "lpad(\"3\", 2, \"0\")",
                        "out": "\"03\""
                    }
                ]
            },
            {
                "name": "rpad(str, n, suffix)",
                "examples": [
                    {
                        "in": "rpad(\"3\", 2, \"0\")",
                        "out": "\"30\""
                    }
                ]
            },
            {
                "name": "formatstring(str, values)",
                "examples": [
                    {
                        "in": "formatstring(\"Their name is %s\",[\"Hortense\"])",
                        "out": "\"Their name is Hortense\""
                    },
                    {
                        "in": "formatstring(\"You should %s the %s\",[\"simplify\",\"denominator\"])",
                        "out": "\"You should simplify the denominator\""
                    }
                ]
            },
            {
                "name": "letterordinal(n)",
                "examples": [
                    {
                        "in": "letterordinal(0)",
                        "out": "\"a\""
                    },
                    {
                        "in": "letterordinal(1)",
                        "out": "\"b\""
                    },
                    {
                        "in": "letterordinal(26)",
                        "out": "\"aa\""
                    }
                ]
            },
            {
                "name": "translate(str, arguments)",
                "examples": [
                    {
                        "in": "translate(\"question.header\",[\"number\": 2])",
                        "out": "\"Question 2\""
                    }
                ]
            },
            {
                "name": "isbool(str)",
                "examples": [
                    {
                        "in": "isbool(\"true\")",
                        "out": "true"
                    },
                    {
                        "in": "isbool(\"YES\")",
                        "out": "true"
                    },
                    {
                        "in": "isbool(\"no\")",
                        "out": "true"
                    },
                    {
                        "in": "isbool(\"y\")",
                        "out": "false"
                    }
                ]
            }
        ]
    },
    {
        "name": "Logic",
        "fns": [
            {
                "name": "x<y",
                "examples": []
            },
            {
                "name": "x>y",
                "examples": []
            },
            {
                "name": "x<=y",
                "examples": []
            },
            {
                "name": "x>=y",
                "examples": []
            },
            {
                "name": "x<>y",
                "examples": []
            },
            {
                "name": "x=y",
                "examples": []
            },
            {
                "name": "isclose(x,y,[rel_tol],[abs_tol])",
                "examples": []
            },
            {
                "name": "resultsequal(a,b,checkingFunction,accuracy)",
                "examples": [
                    {
                        "in": "resultsequal(22/7,pi,\"absdiff\",0.001)",
                        "out": "false"
                    },
                    {
                        "in": "resultsequal(22/7,pi,\"reldiff\",0.001)",
                        "out": "true"
                    }
                ]
            },
            {
                "name": "x and y",
                "examples": []
            },
            {
                "name": "not x",
                "examples": []
            },
            {
                "name": "x or y",
                "examples": []
            },
            {
                "name": "x xor y",
                "examples": []
            },
            {
                "name": "x implies y",
                "examples": []
            }
        ]
    },
    {
        "name": "Collections",
        "fns": [
            {
                "name": "x[y]",
                "examples": [
                    {
                        "in": "[0,1,2,3][1]",
                        "out": "1"
                    },
                    {
                        "in": "vector(0,1,2)[2]",
                        "out": "2"
                    },
                    {
                        "in": "matrix([0,1,2],[3,4,5],[6,7,8])[0]",
                        "out": "vector(0,1,2)"
                    },
                    {
                        "in": "[\"a\": 1, \"b\": 2][\"a\"]",
                        "out": "1"
                    }
                ]
            },
            {
                "name": "x[a..b]",
                "examples": [
                    {
                        "in": "[0,1,2,3,4,5][1..3]",
                        "out": "[1,2]"
                    },
                    {
                        "in": "[0,1,2,3,4,5][1..6#2]",
                        "out": "[1,3,5]"
                    }
                ]
            },
            {
                "name": "x in collection",
                "examples": [
                    {
                        "in": "3 in [1,2,3,4]",
                        "out": "true"
                    },
                    {
                        "in": "3 in (set(1,2,3,4) and set(2,4,6,8))",
                        "out": "false"
                    },
                    {
                        "in": "\"a\" in [\"a\": 1]",
                        "out": "true"
                    }
                ]
            }
        ]
    },
    {
        "name": "Ranges",
        "fns": [
            {
                "name": "a..b",
                "examples": []
            },
            {
                "name": "range#step",
                "examples": []
            },
            {
                "name": "a except b",
                "examples": []
            }
        ]
    },
    {
        "name": "Lists",
        "fns": [
            {
                "name": "repeat(expression,n)",
                "examples": []
            },
            {
                "name": "all(list)",
                "examples": [
                    {
                        "in": "all([true,true])",
                        "out": "true"
                    },
                    {
                        "in": "all([true,false])",
                        "out": "false"
                    },
                    {
                        "in": "all([])",
                        "out": "true"
                    }
                ]
            },
            {
                "name": "some(list)",
                "examples": [
                    {
                        "in": "some([false,true,false])",
                        "out": "true"
                    },
                    {
                        "in": "some([false,false,false])",
                        "out": "false"
                    },
                    {
                        "in": "some([])",
                        "out": "false"
                    }
                ]
            },
            {
                "name": "map(expression,name[s],d)",
                "examples": [
                    {
                        "in": "map(x+1,x,1..3)",
                        "out": "[2,3,4]"
                    },
                    {
                        "in": "map(capitalise(s),s,[\"jim\",\"bob\"])",
                        "out": "[\"Jim\",\"Bob\"]"
                    },
                    {
                        "in": "map(sqrt(x^2+y^2),[x,y],[ [3,4], [5,12] ])",
                        "out": "[5,13]"
                    },
                    {
                        "in": "map(x+1,x,id(2))",
                        "out": "matrix([2,1],[1,2])"
                    },
                    {
                        "in": "map(sqrt(x),x,vector(1,4,9))",
                        "out": "vector(1,2,3)"
                    }
                ]
            },
            {
                "name": "filter(expression,name,d)",
                "examples": [
                    {
                        "in": "filter(x>5,x,[1,3,5,7,9])",
                        "out": "[7,9]"
                    }
                ]
            },
            {
                "name": "foldl(expression,accumulator_name, item_name, first_value, d)",
                "examples": [
                    {
                        "in": "foldl(total + x, total, x, 0, [1,2,3])",
                        "out": "6"
                    },
                    {
                        "in": "foldl(if(len(x)>len(longest),x,longest), longest, x, \"\", [\"banana\",\"pineapple\",\"plum\"])",
                        "out": "\"pineapple\""
                    }
                ]
            },
            {
                "name": "iterate(expression,name,initial,times)",
                "examples": [
                    {
                        "in": "iterate(x+1, x, 0, 3)",
                        "out": "[0,1,2,3]"
                    },
                    {
                        "in": "iterate([b,a+b], [a,b], [1,1], 3)",
                        "out": "[ [1,1], [1,2], [2,3], [3,5] ]"
                    },
                    {
                        "in": "iterate(l[1..len(l)]+[l[0]], l, [\"a\",\"b\",\"c\"], 3)",
                        "out": "[ [\"a\",\"b\",\"c\"], [\"b\",\"c\",\"a\"], [\"c\",\"a\",\"b\"], [\"a\",\"b\",\"c\"] ]"
                    }
                ]
            },
            {
                "name": "iterate_until(expression,name,initial,condition,max_iterations)",
                "examples": [
                    {
                        "in": "iterate_until(if(mod(x,2)=0,x/2,3x+1), x, 5, x=1)",
                        "out": "[ 5, 16, 8, 4, 2, 1 ]"
                    },
                    {
                        "in": "iterate_until([b,mod(a,b)], [a,b], [37,32], b=0)",
                        "out": "[ [ 37, 32 ], [ 32, 5 ], [ 5, 2 ], [ 2, 1 ], [ 1, 0 ] ]"
                    }
                ]
            },
            {
                "name": "take(n,expression,name,d)",
                "examples": [
                    {
                        "in": "take(3,gcd(x,6)=1,x,10..30)",
                        "out": "[11,13,17]"
                    }
                ]
            },
            {
                "name": "flatten(lists)",
                "examples": [
                    {
                        "in": "flatten([ [1,2], [3,4] ])",
                        "out": "[1,2,3,4]"
                    }
                ]
            },
            {
                "name": "let(name,definition,...,expression)",
                "examples": [
                    {
                        "in": "let([a,b,c],[1,5,6],d,sqrt(b^2-4*a*c), [(-b+d)/2, (-b-d)/2])",
                        "out": "[-2,-3]"
                    },
                    {
                        "in": "let(x,1, y,2, x+y)",
                        "out": "3"
                    },
                    {
                        "in": "let([\"x\": 1, \"y\": 2], x+y)",
                        "out": "3"
                    }
                ]
            },
            {
                "name": "sort(x)",
                "examples": [
                    {
                        "in": "sort([4,2,1,3])",
                        "out": "[1,2,3,4]"
                    }
                ]
            },
            {
                "name": "sort_destinations(x)",
                "examples": [
                    {
                        "in": "sort_destinations([4,2,1,3])",
                        "out": "[3,1,0,2]"
                    },
                    {
                        "in": "sort_destinations([1,2,3,4])",
                        "out": "[0,1,2,3]"
                    }
                ]
            },
            {
                "name": "sort_by(key,list)",
                "examples": [
                    {
                        "in": "sort_by(0, [[5,0], [3,2], [4,4]])",
                        "out": "[[3,2], [4,4], [5,0]]"
                    },
                    {
                        "in": "sort_by(\"width\", [[\"label\": \"M\", \"width\": 20], [\"label\": \"L\", \"width\": 30], [\"label\": \"S\", \"width\": 10]])",
                        "out": "[[\"label\": \"S\", \"width\": 10], [\"label\": \"M\", \"width\": 20], [\"label\": \"L\", \"width\": 30]]"
                    }
                ]
            },
            {
                "name": "group_by(key,list)",
                "examples": [
                    {
                        "in": "group_by(0, [[0,0], [3,2], [0,4]])",
                        "out": "[[0, [[0,0], [0,4]]], [3, [[3,2]]]]"
                    },
                    {
                        "in": "group_by(\"a\", [[\"a\": 1, \"b\": \"M\"], [\"a\": 2, \"b\": \"S\"], [\"a\": 1, \"b\": \"XL\"]])",
                        "out": "[[1,[[\"a\": 1, \"b\": \"M\"], [\"a\": 1, \"b\": \"XL\"]]], [2, [[\"a\": 2, \"b\": \"S\"]]]]"
                    }
                ]
            },
            {
                "name": "reverse(x)",
                "examples": [
                    {
                        "in": "reverse([1,2,3])",
                        "out": "[3,2,1]"
                    }
                ]
            },
            {
                "name": "indices(list,value)",
                "examples": [
                    {
                        "in": "indices([1,0,1,0],1)",
                        "out": "[0,2]"
                    },
                    {
                        "in": "indices([2,4,6],4)",
                        "out": "[1]"
                    },
                    {
                        "in": "indices([1,2,3],5)",
                        "out": "[]"
                    }
                ]
            },
            {
                "name": "distinct(x)",
                "examples": [
                    {
                        "in": "distinct([1,2,3,1,4,3])",
                        "out": "[1,2,3,4]"
                    }
                ]
            },
            {
                "name": "list(x)",
                "examples": [
                    {
                        "in": "list(set(1,2,3))",
                        "out": "[1,2,3]"
                    },
                    {
                        "in": "list(vector(1,2))",
                        "out": "[1,2]"
                    },
                    {
                        "in": "list(matrix([1,2],[3,4]))",
                        "out": "[[1,2], [3,4]]"
                    }
                ]
            },
            {
                "name": "make_variables(definitions)",
                "examples": []
            },
            {
                "name": "satisfy(names,definitions,conditions,maxRuns)",
                "examples": []
            },
            {
                "name": "sum(numbers)",
                "examples": [
                    {
                        "in": "sum([1,2,3])",
                        "out": "6"
                    },
                    {
                        "in": "sum(vector(4,5,6))",
                        "out": "15"
                    }
                ]
            },
            {
                "name": "prod(list)",
                "examples": [
                    {
                        "in": "prod([2,3,4])",
                        "out": "24"
                    }
                ]
            },
            {
                "name": "product(list1,list2,...,listN)",
                "examples": [
                    {
                        "in": "product([1,2],[a,b])",
                        "out": "[ [1,a], [1,b], [2,a], [2,b] ]"
                    },
                    {
                        "in": "product([1,2],2)",
                        "out": "[ [1,1], [1,2], [2,1], [2,2] ]"
                    }
                ]
            },
            {
                "name": "zip(list1,list2,...,listN)",
                "examples": [
                    {
                        "in": "zip([1,2,3],[4,5,6])",
                        "out": "[ [1,4], [2,5], [3,6] ]"
                    }
                ]
            },
            {
                "name": "combinations(collection,r)",
                "examples": [
                    {
                        "in": "combinations([1,2,3],2)",
                        "out": "[ [1,2], [1,3], [2,3] ]"
                    }
                ]
            },
            {
                "name": "combinations_with_replacement(collection,r)",
                "examples": [
                    {
                        "in": "combinations_with_replacement([1,2,3],2)",
                        "out": "[ [1,1], [1,2], [1,3], [2,2], [2,3], [3,3] ]"
                    }
                ]
            },
            {
                "name": "permutations(collection,r)",
                "examples": [
                    {
                        "in": "permutations([1,2,3],2)",
                        "out": "[ [1,2], [1,3], [2,1], [2,3], [3,1], [3,2] ]"
                    }
                ]
            },
            {
                "name": "frequencies(collection)",
                "examples": [
                    {
                        "in": "frequencies([1,2,3,2,2,1])",
                        "out": "[ [1,2], [2,3], [3,1] ]"
                    }
                ]
            },
            {
                "name": "enumerate(collection)",
                "examples": [
                    {
                        "in": "enumerate([\"A\",\"B\",\"C\"])",
                        "out": "[ [0,\"A\"], [1,\"B\"], [2,\"C\"] ]"
                    }
                ]
            },
            {
                "name": "frequencies(collection)",
                "examples": [
                    {
                        "in": "frequencies([\"a\",\"a\",\"c\",\"b\",\"c\",\"a\"])",
                        "out": "[ [\"a\",3], [\"c\",2], [\"b\",1] ]"
                    }
                ]
            }
        ]
    },
    {
        "name": "Dictionaries",
        "fns": [
            {
                "name": "dict[key]",
                "examples": [
                    {
                        "in": "[\"a\": 1, \"b\": 2][\"a\"]",
                        "out": "1"
                    }
                ]
            },
            {
                "name": "get(dict,key,default)",
                "examples": [
                    {
                        "in": "get([\"a\":1], \"a\", 0)",
                        "out": "1"
                    },
                    {
                        "in": "get([\"a\":1], \"b\", 0)",
                        "out": "0"
                    }
                ]
            },
            {
                "name": "dict(a:b, c:d, ...)",
                "examples": []
            },
            {
                "name": "keys(dict)",
                "examples": [
                    {
                        "in": "keys([\"a\": 1, \"b\": 2, \"c\": 1])",
                        "out": "[\"a\",\"b\",\"c\"]"
                    }
                ]
            },
            {
                "name": "values(dict,[keys])",
                "examples": [
                    {
                        "in": "values([\"a\": 1, \"b\": 2, \"c\": 1])",
                        "out": "[1,2,1]"
                    },
                    {
                        "in": "values([\"a\": 1, \"b\": 2, \"c\": 3], [\"b\",\"a\"])",
                        "out": "[2,1]"
                    }
                ]
            },
            {
                "name": "items(dict)",
                "examples": [
                    {
                        "in": "items([\"a\": 1, \"b\": 2, \"c\": 1])",
                        "out": "[ [\"a\",1], [\"b\",2], [\"c\",1] ]"
                    }
                ]
            }
        ]
    },
    {
        "name": "Sets",
        "fns": [
            {
                "name": "set(elements)",
                "examples": []
            },
            {
                "name": "union(a,b)",
                "examples": [
                    {
                        "in": "union(set(1,2,3),set(2,4,6))",
                        "out": "set(1,2,3,4,6)"
                    },
                    {
                        "in": "set(1,2,3) or set(2,4,6)",
                        "out": "set(1,2,3,4,6)"
                    }
                ]
            },
            {
                "name": "intersection(a,b)",
                "examples": [
                    {
                        "in": "intersection(set(1,2,3),set(2,4,6))",
                        "out": "set(2)"
                    },
                    {
                        "in": "set(1,2,3) and set(2,4,6)",
                        "out": "set(2)"
                    }
                ]
            },
            {
                "name": "a-b",
                "examples": [
                    {
                        "in": "set(1,2,3,4) - set(2,4,6)",
                        "out": "set(1,3)"
                    }
                ]
            }
        ]
    },
    {
        "name": "Randomisation",
        "fns": [
            {
                "name": "random(x)",
                "examples": []
            },
            {
                "name": "weighted_random(x)",
                "examples": []
            },
            {
                "name": "deal(n)",
                "examples": []
            },
            {
                "name": "reorder(list,order)",
                "examples": [
                    {
                        "in": "reorder([0,1,2,3],[3,2,0,1])",
                        "out": "[3,2,0,1]"
                    },
                    {
                        "in": "reorder([\"a\",\"b\",\"c\",\"d\"],[3,2,0,1])",
                        "out": "[\"d\",\"c\",\"a\",\"b\"]"
                    }
                ]
            },
            {
                "name": "shuffle(x)",
                "examples": []
            },
            {
                "name": "shuffle_together(lists)",
                "examples": []
            }
        ]
    },
    {
        "name": "Control flow",
        "fns": [
            {
                "name": "award(a,b)",
                "examples": [
                    {
                        "in": "award(5,true)",
                        "out": "5"
                    }
                ]
            },
            {
                "name": "if(p,a,b)",
                "examples": [
                    {
                        "in": "if(false,1,0)",
                        "out": "0"
                    }
                ]
            },
            {
                "name": "switch(p1,a1,p2,a2, ..., pn,an,d)",
                "examples": [
                    {
                        "in": "switch(true,1,false,0,3)",
                        "out": "1"
                    },
                    {
                        "in": "switch(false,1,true,0,3)",
                        "out": "0"
                    },
                    {
                        "in": "switch(false,1,false,0,3)",
                        "out": "3"
                    }
                ]
            },
            {
                "name": "assert(condition, value)",
                "examples": []
            },
            {
                "name": "try(expression, name, except)",
                "examples": [
                    {
                        "in": "try(eval(expression(\"x+\")),err, \"Error: \"+err)",
                        "out": "\"Error: Not enough arguments for operation <code>+</code>\""
                    },
                    {
                        "in": "try(1+2,err,0)",
                        "out": "3"
                    }
                ]
            }
        ]
    },
    {
        "name": "HTML",
        "fns": [
            {
                "name": "html(x)",
                "examples": []
            },
            {
                "name": "isnonemptyhtml(str)",
                "examples": [
                    {
                        "in": "isnonemptyhtml(\"<p>Yes</p>\")",
                        "out": "true"
                    },
                    {
                        "in": "isnonemptyhtml(\"<p></p>\")",
                        "out": "false"
                    }
                ]
            },
            {
                "name": "table(data), table(data,headers)",
                "examples": []
            },
            {
                "name": "image(url)",
                "examples": []
            },
            {
                "name": "max_width(width,element)",
                "examples": []
            },
            {
                "name": "max_height(width,element)",
                "examples": []
            }
        ]
    },
    {
        "name": "JSON",
        "fns": [
            {
                "name": "json_decode(json)",
                "examples": [
                    {
                        "in": "json_decode(safe(' {\"a\": 1, \"b\": [2,true,\"thing\"]} '))",
                        "out": "[\"a\": 1, \"b\": [2,true,\"thing\"]]"
                    }
                ]
            },
            {
                "name": "json_encode(data)",
                "examples": [
                    {
                        "in": "json_encode([1,\"a\",true])",
                        "out": "\"[1,\\\"a\\\",true]\""
                    }
                ]
            }
        ]
    },
    {
        "name": "Sub-expressions",
        "fns": [
            {
                "name": "expression(string)",
                "examples": []
            },
            {
                "name": "parse(string)",
                "examples": []
            },
            {
                "name": "eval(expression, values)",
                "examples": [
                    {
                        "in": "eval(expression(\"1+2\"))",
                        "out": "3"
                    },
                    {
                        "in": "eval(expression(\"x+1\"), [\"x\":1])",
                        "out": "2"
                    }
                ]
            },
            {
                "name": "args(expression)",
                "examples": [
                    {
                        "in": "args(expression(\"f(x)\"))",
                        "out": "[expression(\"x\")]"
                    },
                    {
                        "in": "args(expression(\"1+2+3\"))",
                        "out": "[expression(\"1+2\"), expression(\"3\")]"
                    },
                    {
                        "in": "args(expression(\"1\"))",
                        "out": "[]"
                    }
                ]
            },
            {
                "name": "type(expression)",
                "examples": [
                    {
                        "in": "type(expression(\"x\"))",
                        "out": "\"name\""
                    },
                    {
                        "in": "type(expression(\"1\"))",
                        "out": "\"integer\""
                    },
                    {
                        "in": "type(expression(\"x+1\"))",
                        "out": "\"op\""
                    },
                    {
                        "in": "type(expression(\"sin(x)\"))",
                        "out": "\"function\""
                    }
                ]
            },
            {
                "name": "name(string)",
                "examples": [
                    {
                        "in": "name(\"x\")",
                        "out": "x"
                    }
                ]
            },
            {
                "name": "op(name)",
                "examples": []
            },
            {
                "name": "function(name)",
                "examples": []
            },
            {
                "name": "exec(op, arguments)",
                "examples": [
                    {
                        "in": "exec(op(\"+\"), [2,1])",
                        "out": "expression(\"2+1\")"
                    },
                    {
                        "in": "exec(op(\"-\"), [2,name(\"x\")])",
                        "out": "expression(\"2-x\")"
                    }
                ]
            },
            {
                "name": "findvars(expression)",
                "examples": [
                    {
                        "in": "findvars(expression(\"x+1\"))",
                        "out": "[\"x\"]"
                    },
                    {
                        "in": "findvars(expression(\"x + x*y\"))",
                        "out": "[\"x\",\"y\"]"
                    },
                    {
                        "in": "findvars(expression(\"map(x+2, x, [1,2,3])\"))",
                        "out": "[]"
                    }
                ]
            },
            {
                "name": "substitute(variables,expression)",
                "examples": [
                    {
                        "in": "substitute([\"x\": 1], expression(\"x + y\"))",
                        "out": "expression(\"1 + y\")"
                    },
                    {
                        "in": "substitute([\"x\": 1, \"y\": expression(\"sqrt(z+2)\")], expression(\"x + y\"))",
                        "out": "expression(\"1 + sqrt(z + 2)\")"
                    }
                ]
            },
            {
                "name": "simplify(expression,rules)",
                "examples": [
                    {
                        "in": "simplify(expression(\"1*x+cos(pi)\"),\"unitfactor\")",
                        "out": "expression(\"x+cos(pi)\")"
                    },
                    {
                        "in": "simplify(expression(\"1*x+cos(pi)\"),[\"basic\",\"unitfactor\",\"trig\"])",
                        "out": "expression(\"x-1\")"
                    }
                ]
            },
            {
                "name": "expand_juxtapositions(expression, options)",
                "examples": [
                    {
                        "in": "expand_juxtapositions(expression(\"xy\"))",
                        "out": "expression(\"x*y\")"
                    },
                    {
                        "in": "expand_juxtapositions(expression(\"x'y\"))",
                        "out": "expression(\"x\\'*y\")"
                    },
                    {
                        "in": "expand_juxtapositions(expression(\"pizza\"))",
                        "out": "expression(\"pi*z*z*a\")"
                    },
                    {
                        "in": "expand_juxtapositions(expression(\"hat:abc\"))",
                        "out": "expression(\"hat:a*b*c\")"
                    },
                    {
                        "in": "expand_juxtapositions(expression(\"xcos(x)\"))",
                        "out": "expression(\"x*cos(x)\")"
                    },
                    {
                        "in": "expand_juxtapositions(expression(\"lnabs(x)\"))",
                        "out": "expression(\"ln(abs(x))\")"
                    },
                    {
                        "in": "expand_juxtapositions(expression(\"ln*abs(x)\"))",
                        "out": "expression(\"ln(abs(x))\")"
                    },
                    {
                        "in": "expand_juxtapositions(expression(\"xy\"),[\"singleLetterVariables\": false])",
                        "out": "expression(\"xy\")"
                    },
                    {
                        "in": "expand_juxtapositions(expression(\"x(x+1)\"))",
                        "out": "expression(\"x*(x+1)\")"
                    },
                    {
                        "in": "expand_juxtapositions(expression(\"x(x+1)\"),[\"noUnknownFunctions\": false])",
                        "out": "expression(\"x(x+1)\")"
                    },
                    {
                        "in": "expand_juxtapositions(expression(\"ln*abs(x)\"),[\"implicitFunctionComposition\": false, \"singleLetterVariables\": true, \"noUnknownFunctions\": true])",
                        "out": "expression(\"l*n*abs(x)\")"
                    },
                    {
                        "in": "expand_juxtapositions(expression(\"xy^z\"))",
                        "out": "expression(\"x*y^z\")"
                    },
                    {
                        "in": "expand_juxtapositions(expression(\"xy!\"))",
                        "out": "expression(\"x*y!\")"
                    }
                ]
            },
            {
                "name": "canonical_compare(expr1,expr2)",
                "examples": [
                    {
                        "in": "canonical_compare(a,b)",
                        "out": "-1"
                    },
                    {
                        "in": "canonical_compare(f(y),g(x))",
                        "out": "1"
                    },
                    {
                        "in": "canonical_compare(f(x),g(x))",
                        "out": "-1"
                    },
                    {
                        "in": "canonical_compare(\"a\",\"b\")",
                        "out": "0"
                    }
                ]
            },
            {
                "name": "numerical_compare(a,b)",
                "examples": [
                    {
                        "in": "numerical_compare(expression(\"x^2\"), expression(\"x*x\"))",
                        "out": "true"
                    },
                    {
                        "in": "numerical_compare(expression(\"x^2\"), expression(\"2x\"))",
                        "out": "false"
                    },
                    {
                        "in": "numerical_compare(expression(\"x^2\"), expression(\"y^2\"))",
                        "out": "false"
                    }
                ]
            },
            {
                "name": "scope_case_sensitive(expression, case_sensitive)",
                "examples": [
                    {
                        "in": "scope_case_sensitive(let(x,1,X,2,x+X), true)",
                        "out": "3"
                    }
                ]
            }
        ]
    },
    {
        "name": "Calculus",
        "fns": [
            {
                "name": "diff(expression,variable)",
                "examples": [
                    {
                        "in": "diff(expression(\"x^2 + 2x + 4\"), \"x\")",
                        "out": "expression(\"2x + 2\")"
                    },
                    {
                        "in": "diff(expression(\"x * y + 3x + 2y\"), \"x\")",
                        "out": "expression(\"y + 3\")"
                    },
                    {
                        "in": "diff(expression(\"cos(x^2)\"), \"x\")",
                        "out": "expression(\"-2 * sin(x^2) * x\")"
                    }
                ]
            }
        ]
    },
    {
        "name": "Pattern-matching sub-expressions",
        "fns": [
            {
                "name": "match(expr, pattern, options)",
                "examples": [
                    {
                        "in": "match(expression(\"x+1\"),\"?;a + ?;b\")",
                        "out": "[\"match\": true, \"groups\": [\"a\": expression(\"x\"), \"b\": expression(\"1\"), \"_match\": expression(\"x+1\")]]"
                    },
                    {
                        "in": "match(expression(\"sin(x)\"), \"?;a + ?;b\")",
                        "out": "[\"match\": false, \"groups\": dict()]"
                    },
                    {
                        "in": "match(expression(\"x+1\"),\"1+?;a\")",
                        "out": "[\"match\": true, \"groups\": [\"a\": expression(\"x\"), \"_match\": expression(\"x+1\")]]"
                    }
                ]
            },
            {
                "name": "matches(expr, pattern, options)",
                "examples": [
                    {
                        "in": "matches(expression(\"x+1\"),\"?;a + ?;b\")",
                        "out": "true"
                    },
                    {
                        "in": "matches(expression(\"sin(x)\"), \"?;a + ?;b\")",
                        "out": "false"
                    }
                ]
            },
            {
                "name": "replace(pattern, replacement, expr)",
                "examples": [
                    {
                        "in": "replace(\"?;x + ?;y\", \"x*y\", expression(\"1+2\"))",
                        "out": "expression(\"1*2\")"
                    },
                    {
                        "in": "replace(\"?;x + ?;y\", \"f(x,y)\", expression(\"1+2+3\"))",
                        "out": "expression(\"f(f(1,2),3)\")"
                    },
                    {
                        "in": "replace(\"0*?\", \"0\", expression(\"0*sin(x) + x*0 + 2*cos(0*pi)\"))",
                        "out": "expression(\"0 + 0 + 2*cos(0)\")"
                    }
                ]
            }
        ]
    },
    {
        "name": "Identifying data types",
        "fns": [
            {
                "name": "type(x)",
                "examples": [
                    {
                        "in": "type(1)",
                        "out": "\"integer\""
                    }
                ]
            },
            {
                "name": "x isa type",
                "examples": [
                    {
                        "in": "1 isa \"number\"",
                        "out": "true"
                    },
                    {
                        "in": "x isa \"name\"",
                        "out": "true"
                    }
                ]
            },
            {
                "name": "x as type",
                "examples": [
                    {
                        "in": "dec(1.23) as \"number\"",
                        "out": "1.23"
                    },
                    {
                        "in": "set(1,2,3) as \"list\"",
                        "out": "[1,2,3]"
                    }
                ]
            },
            {
                "name": "infer_variable_types(expression)",
                "examples": [
                    {
                        "in": "infer_variable_types(expression(\"x^2\"))",
                        "out": "[\"x\": \"number\"]"
                    },
                    {
                        "in": "infer_variable_types(expression(\"union(a,b)\"))",
                        "out": "[\"a\": \"set\", \"b\": \"set\"]"
                    },
                    {
                        "in": "infer_variable_types(expression(\"k*det(a)\"))",
                        "out": "[ \"k\": \"number\", \"a\": \"matrix\" ]"
                    }
                ]
            },
            {
                "name": "infer_type(expression)",
                "examples": [
                    {
                        "in": "infer_type(expression(\"x+2\"))",
                        "out": "\"number\""
                    },
                    {
                        "in": "infer_type(expression(\"id(n)\"))",
                        "out": "\"matrix\""
                    },
                    {
                        "in": "infer_type(expression(\"random(2,true)\"))",
                        "out": "\"?\""
                    }
                ]
            },
            {
                "name": "scope_case_sensitive(expression, case_sensitive)",
                "examples": [
                    {
                        "in": "scope_case_sensitive(findvars(expression(\"x+X\")))",
                        "out": "[\"X\",\"x\"]"
                    }
                ]
            }
        ]
    },
    {
        "name": "Inspecting the evaluation scope",
        "fns": [
            {
                "name": "definedvariables()",
                "examples": []
            },
            {
                "name": "isset(name)",
                "examples": []
            },
            {
                "name": "unset(names, expression)",
                "examples": []
            }
        ]
    }
]
