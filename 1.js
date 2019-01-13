// Переменные ///////////////
var ist = [];

var step = ['', '', '²', '³', '⁴', '⁵', '⁶', '⁷']

var AX = [[], [], []];
var AXX = [[], [], [], []];
var AXX2 = [[], [], [], []];
var AXYZ = [[], [], []];
var Polin_2 = [];

var M = [];
var M1 = [];

// Переменный \\\\\\\\\\\\\\


var genArray = function () {
    var arr, len, i;
    if (arguments.length > 0) {
        len = [].slice.call(arguments, 0, 1)[0];
        arr = new Array(len);
        for (i = 0; i < len; i++) {
            arr[i] = genArray.apply(null, [].slice.call(arguments, 1));
        }
    } else {
        return null; //or whatever you want to initialize values to.
    }
    return arr;
};

function polinom() 
{
    ist = [];
    
    koll_strok_XYZ = Math.pow(k,koll_peremen);
    for (var i = 0; i < koll_strok_XYZ; i++)
    {
        ist[i] = +document.getElementById("fx_tab_" + i).value;
    }

    AX = genArray(3, 11, 11);
    AXX = genArray(11, 11, 11, 5);
    AXX2 = genArray(11, 11, 11, 5);
    AXYZ = genArray(11, 11, 11);
    
    M = [];
    M1 = [];
    

    /////////////
    form_2_1()
    var m1 = mnoget();
    var m2 = mnog_2();

    var theElement = document.getElementById("elem");
    theElement.innerHTML = form_2();

    var theElement = document.getElementById("elem2");
    theElement.innerHTML = form_2_1();

    var theElement = document.getElementById("elem3");
    theElement.innerHTML = m1;

    var theElement = document.getElementById("elem4");
    theElement.innerHTML = m2;

    var theElement = document.getElementById("elem5");
    theElement.innerHTML = Polin_2;
}

function otr_1(x, y, z, n) {
    var A = []
    if (n == 0) { return null}
    if (x > 0) { A[0] = 'x' + step[x] }
    if (y > 0) { A[1] = 'y' + step[y] }
    if (z > 0) { A[2] = 'z' + step[z] }

    return A.join('');
}

function jj(x, n, k)
{
    if (k == 3){
        switch (n) {
            case 0: A = '2' + x + '²+1'; break;
            case 1: A = '2' + x + '²+2' + x; break;
            case 2: A = '2' + x + '²+' + x; break;
            default: console.log('error!')}
    }
    if (k == 5){
        switch (n) {
            case 0: A = '4' + x + '⁴+1'; break;
            case 1: A = '4' + x + '⁴+' + '4' + x + '³+' + '4' + x + '²+' + '4' + x; break;
            case 2: A = '4' + x + '⁴+' + '3' + x + '³+' + x + '²+' + '2' + x; break;
            case 3: A = '4' + x + '⁴+' + '2' + x + '³+' + x + '²+' + '3' + x; break;
            case 4: A = '4' + x + '⁴+' + x + '³+' + '4' + x + '²+' + x; break;
            default: console.log('error!')}
    }
    
    return A;
}

function j(x, n) { return 'j' + n + '(' + x + ')'; }

function koff(x, n, k, i2) {
    if (k == 3) {
        switch (n) {
            case 0: AX[x][0 + 11 - k][i2] = 2; AX[x][1 + 11 - k][i2] = 0; AX[x][2 + 11 - k][i2] = 1; break;
            case 1: AX[x][0 + 11 - k][i2] = 2; AX[x][1 + 11 - k][i2] = 2; AX[x][2 + 11 - k][i2] = 0; break;
            case 2: AX[x][0 + 11 - k][i2] = 2; AX[x][1 + 11 - k][i2] = 1; AX[x][2 + 11 - k][i2] = 0; break;
            default: console.log('error!')
        }
    }
    if (k == 5) {
        switch (n) {
            case 0: AX[x][0 + 11 - k][i2] = 4; AX[x][1 + 11 - k][i2] = 0; AX[x][2 + 11 - k][i2] = 0;
                    AX[x][3 + 11 - k][i2] = 0; AX[x][4 + 11 - k][i2] = 1; break;

            case 1: AX[x][0 + 11 - k][i2] = 4; AX[x][1 + 11 - k][i2] = 4; AX[x][2 + 11 - k][i2] = 4;
                    AX[x][3 + 11 - k][i2] = 4; AX[x][4 + 11 - k][i2] = 0; break;

            case 2: AX[x][0 + 11 - k][i2] = 4; AX[x][1 + 11 - k][i2] = 3; AX[x][2 + 11 - k][i2] = 1;
                    AX[x][3 + 11 - k][i2] = 2; AX[x][4 + 11 - k][i2] = 0; break;

            case 3: AX[x][0 + 11 - k][i2] = 4; AX[x][1 + 11 - k][i2] = 2; AX[x][2 + 11 - k][i2] = 1;
                    AX[x][3 + 11 - k][i2] = 3; AX[x][4 + 11 - k][i2] = 0; break;

            case 4: AX[x][0 + 11 - k][i2] = 4; AX[x][1 + 11 - k][i2] = 1; AX[x][2 + 11 - k][i2] = 4;
                    AX[x][3 + 11 - k][i2] = 1; AX[x][4 + 11 - k][i2] = 0; break;
            default: console.log('error!')
        }
    }
}

function form_2() {
    var X = [];
    var Y = [];
    var Z = [];
    var C = [];
    var i2 = 0;
    
        for (var i = 0; i < koll_strok_XYZ; i++)
        {
            if (ist[i] != 0) {

                switch (koll_peremen) {
                    case 3: Z[i2] = j('z', table_z_m[i]);
                    case 2: Y[i2] = j('y', table_y_m[i]);
                    case 1: X[i2] = j('x', table_x_m[i]);
                        break;
                    default: console.log('error!')
                }

                C[i2] = (ist[i] == 1 ? '' : (ist[i] + '*')) + X[i2] + (Y[i2] == null ? '' : ('*' + Y[i2])) + (Z[i2] == null ? '' : ('*' + Z[i2]))
                i2++;
            }
        }
   
    return C.join(' + ');
}

function form_2_1()
{
    var X = [];
    var Y = [];
    var Z = [];
    var C = [];
    var i2 = 0;

    for (var i = 0; i < koll_strok_XYZ; i++) {
        if (ist[i] != 0) {

            switch (koll_peremen) {
                case 3: Z[i2] = '(' + jj('z', table_z_m[i], k) + ')'; koff(2, table_z_m[i], k, i);
                case 2: Y[i2] = '(' + jj('y', table_y_m[i], k) + ')'; koff(1, table_y_m[i], k, i);
                case 1: X[i2] = '(' + jj('x', table_x_m[i], k) + ')'; koff(0, table_x_m[i], k, i);
                    break;
                default: console.log('error!');
            }

            C[i2] = (ist[i] == 1 ? '' : (ist[i])) + X[i2] + (Y[i2] == null ? '' : (Y[i2])) + (Z[i2] == null ? '' : (Z[i2]))
            M[i2] = (ist[i] == 1 ? '' : (ist[i]));
            M1[i] = (ist[i] == 1 ? 1 : (ist[i]));
            i2++;
        }
    }
    
    return C.join(' + ');
}

function mnoget() {
    var bb = [];
    var bb2 = [];
    var bb3 = [];
    var BB = [];
    var ii2 = 0;
    var i90 = 0;

    for (var i = 0; i < koll_strok_XYZ; i++) {
        if (ist[i] != 0) {
            ii2 = 0;
            for (var i2 = 0; i2 < k; i2++) {
                for (var i3 = 0; i3 < k; i3++) {
                    for (var i4 = 0; i4 < k; i4++) {
                        //console.log('i= '+ i)
                        //console.log(AXX)
                        AXX[i2][i3][i4][i] = AX[0][10 - i2][i] * (koll_peremen >= 2 ? AX[1][10 - i3][i] : 1) * (koll_peremen >= 3 ? AX[2][10 - i4][i] : 1)
                        //if (AXX[i2][i3][i4][i] != 0) { ii2++; }
                        AXX2[i2][i3][i4][i] = AXX[i2][i3][i4][i] * (M1[i] == '' ? 1 : M1[i]);
                        AXYZ[i2][i3][i4] += AXX2[i2][i3][i4][i];
                        bb[ii2] = ((AXX2[i2][i3][i4][i] == 1) ? ((i2 == 0 && i3 == 0 && i4 == 0) ? 1 : '') : AXX2[i2][i3][i4][i]) + otr_1(i2, i3, i4, AXX2[i2][i3][i4][i]);
                        ii2++;
                        if (koll_peremen == 2) { break; }
                        if (koll_peremen == 1) { break; }
                    }
                    if (koll_peremen == 1) { break; }
                }
            }

            bb = bb.reverse();
            var i89 = 0;
            for (var i88 = 0; i88 < bb.length; i88++) {
                if (bb[i88] != 0) { bb2[i89] = bb[i88]; i89++; }
            }
            bb3[i90] = bb2.join(' + ');
            i90++;
            bb = [];
            bb2 = [];
        }
    }
    //console.log(AX)
    //console.log(AXX)

    for (var i = 0; i < bb3.length; i++) {
        BB[i] = '(' + bb3[i] + ')';
    }

    //return BB.join(' ╬ ');
    return BB.join(' + ');
}

function mnog_2() {
    var bb = [];
    var bb2 = [];
    var bb11 = [];
    var bb22 = [];
    var ii2 = 0;
    Polin_2 = [];
    
    for (var i2 = 0; i2 < k; i2++) {
        for (var i3 = 0; i3 < k; i3++) {
            for (var i4 = 0; i4 < k; i4++) {
                bb[ii2] = ((AXYZ[i2][i3][i4] == 1) ? ((i2 == 0 && i3 == 0 && i4 == 0) ? 1 : '') : AXYZ[i2][i3][i4]) + otr_1(i2, i3, i4, AXYZ[i2][i3][i4]);
                bb11[ii2] = ((AXYZ[i2][i3][i4] == 1) ? ((i2 == 0 && i3 == 0 && i4 == 0) ? 1 : '') : (AXYZ[i2][i3][i4] % k == 1 ? '' : AXYZ[i2][i3][i4] % k)) + otr_1(i2, i3, i4, AXYZ[i2][i3][i4]%k);
                ii2++;
                if (koll_peremen == 2) { break; }
                if (koll_peremen == 1) { break; }
            }
            if (koll_peremen == 1) { break; }
        }
    }

    bb = bb.reverse();
    var i89 = 0;
    for (var i88 = 0; i88 < bb.length; i88++) {
        if (bb[i88] != 0) { bb2[i89] = bb[i88]; i89++; }
    }

    bb11 = bb11.reverse();
    var i89 = 0;
    for (var i88 = 0; i88 < bb.length; i88++) {
        if (bb11[i88] != 0) { bb22[i89] = bb11[i88]; i89++; }
    }
    Polin_2 = bb22.join(' + ');
 
    //console.log(AXYZ)

    if (Math.max.apply(null, ist) == 0) { return '' } else {
        return bb2.join(' + ');
    }
    
}
