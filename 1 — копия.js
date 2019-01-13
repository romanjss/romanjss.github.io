var ist = [];
var xx = [0, 0, 0, 1, 1, 1, 2, 2, 2];
var yy = [0, 1, 2, 0, 1, 2, 0, 1, 2];

var Ax = [];
var Ax2 = [];
var A1 = [];

var By = [];
var By2 = [];
var B1 = [];

var M = [];


var A_x2_y2 = [];
var A_x2_y = [];
var A_x2 = [];
var A_x_y2 = [];
var A_x_y = [];
var A_x = [];
var A_y2 = [];
var A_y = [];
var A_1 = [];

var B_xx_yy_1 = [];

//var B_x2_y2 = 0;
//var B_x2_y = 0;
//var B_x2 = 0;
//var B_x_y2 = 0;
//var B_x_y = 0;
//var B_x = 0;
//var B_y2 = 0;
//var B_y = 0;
//var B_1 = 0;



function polinom() 
{
    
    ist[0] = document.getElementById("0").value;
    ist[1] = document.getElementById("1").value;
    ist[2] = document.getElementById("2").value;
    ist[3] = document.getElementById("3").value;
    ist[4] = document.getElementById("4").value;
    ist[5] = document.getElementById("5").value;
    ist[6] = document.getElementById("6").value;
    ist[7] = document.getElementById("7").value;
    ist[8] = document.getElementById("8").value;

    Ax = [];
    Ax2 = [];
    A1 = [];

    By = [];
    By2 = [];
    B1 = [];

    M = [];

    A_x2_y2 = [];
    A_x2_y = [];
    A_x2 = [];
    A_x_y2 = [];
    A_x_y = [];
    A_x = [];
    A_y2 = [];
    A_y = [];
    A_1 = [];

    B_xx_yy_1 = [0,0,0,0,0,0,0,0,0];


    
    

    form_2_2();

    
    //console.log(Ax2);
    //console.log(Ax);
    //console.log(A1);

    //console.log(By2);
    //console.log(By);
    //console.log(B1);

    //console.log(M);

    //console.log('____________');

    mnoget();
    mnog_1();
    mnog_2();
    Polin_1();

    var theElement = document.getElementById("elem");
    theElement.innerHTML = form_2();

    var theElement = document.getElementById("elem2");
    theElement.innerHTML = form_2_1();

    var theElement = document.getElementById("elem3");
    theElement.innerHTML = mnog_1();

    var theElement = document.getElementById("elem4");
    theElement.innerHTML = Polin_1();

    var theElement = document.getElementById("elem5");
    theElement.innerHTML = Polin_2();

    console.log(table_x_m);
    console.log(table_y_m);
    console.log(table_z_m);

}
        //'2x²+1'
        //'2x²+2x'
        //'2x²+x'

function j0(x,k)
{
    A = '';

    if(k==3){A = '2'+ x +'²+1';}
    
    if(k==5)
    {
        
    }
    return A;
}

function j1(x,k)
{
    A = '';

    if(k==3){A = '2'+ x +'²+2' + x;}
    
    if(k==5)
    {
        
    }
    return A;
}

function j2(x,k)
{
    A = '';

    if(k==3) { A = '2' + x +'²+' +x;}
    
    if(k==5)
    {
        
    }
    return A;
}

function form_2() {
    A = '';
    X = [];
    Y = [];
    C = [];
    i2 = 0;

    for (var i = 0; i < 9; i++) {
        if (ist[i] != 0) {

            if (xx[i] == 0) {
                X[i2] = 'j0(x)';
            }

            if (xx[i] == 1) {
                X[i2] = 'j1(x)';
            }

            if (xx[i] == 2) {
                X[i2] = 'j2(x)';
            }

            if (yy[i] == 0) {
                Y[i2] = 'j0(y)';
            }

            if (yy[i] == 1) {
                Y[i2] = 'j1(y)';
            }

            if (yy[i] == 2) {
                Y[i2] = 'j2(y)';
            }

            if (ist[i] == 1) {
                C[i2] = X[i2] + '*' + Y[i2]
            }

            if (ist[i] == 2) {
                C[i2] = '2*' + X[i2] + '*' +  Y[i2]
            }

            i2++;


        }

    }
    
    return C.join(' + ');
}

function form_2_1()
{
    A = '';
    X = [];
    Y = [];
    C = [];
    i2 = 0;
    
    for (var i = 0; i < 9; i++)
    {
        if (ist[i] != 0)
        {

            if (xx[i] == 0) {
                X[i2] = '(' + j0('x', 3) + ')';
            }

            if (xx[i] == 1) {
                X[i2] = '(' + j1('x', 3) + ')';
            }

            if (xx[i] == 2) {
                X[i2] = '(' + j2('x', 3) + ')';
            }

            if (yy[i] == 0) {
                Y[i2] = '(' + j0('y', 3) + ')';
            }

            if (yy[i] == 1) {
                Y[i2] = '(' + j1('y', 3) + ')';
            }

            if (yy[i] == 2) {
                Y[i2] = '(' + j2('y', 3) + ')';
            }

            if (ist[i] == 1) {
                C[i2] = X[i2] + Y[i2]
            }

            if (ist[i] == 2) {
                C[i2] = '2' + X[i2] + Y[i2]
            }
            
            i2++;

            
        }
        
    }

    return C.join(' + ');

}

function form_2_2() {
    

    i2 = 0;


    for (var i = 0; i < 9; i++) {
        if (ist[i] != 0) {

            if (xx[i] == 0) { Ax2[i2] = 2; Ax[i2] = 0; A1[i2] = 1; }

            if (xx[i] == 1) { Ax2[i2] = 2; Ax[i2] = 2; A1[i2] = 0; }

            if (xx[i] == 2) { Ax2[i2] = 2; Ax[i2] = 1; A1[i2] = 0; }

            if (yy[i] == 0) { By2[i2] = 2; By[i2] = 0; B1[i2] = 1; }

            if (yy[i] == 1) { By2[i2] = 2; By[i2] = 2; B1[i2] = 0; }

            if (yy[i] == 2) { By2[i2] = 2; By[i2] = 1; B1[i2] = 0; }


            if (ist[i] == 1) { M[i2] = 1; }

            if (ist[i] == 2) { M[i2] = 2; }

            i2++;
        }

    }
    

}

function mnoget() {

    for (var i = 0; i < Ax.length; i++) {

        A_x2_y2[i] = Ax2[i] * By2[i];
        A_x2_y[i] = Ax2[i] * By[i];
        A_x2[i] = Ax2[i] * B1[i];

        A_x_y2[i] = Ax[i] * By2[i];
        A_x_y[i] = Ax[i] * By[i];
        A_x[i] = Ax[i] * B1[i];

        A_y2[i] = A1[i] * By2[i];
        A_y[i] = A1[i] * By[i];
        A_1[i] = A1[i] * B1[i];

    }

}

function mnog_1() {

    var AAAA = [];
    var BB = [];
    var bb = [];
    var i2 = 0;

    for (var i = 0; i < Ax.length; i++) {

        i2 = 0;

        if (A_x2_y2[i] != 0) { bb[i2] = A_x2_y2[i] + 'x²y²'; i2++;}
        if (A_x2_y[i] != 0) { bb[i2] = A_x2_y[i] + 'x²y'; i2++;}
        if (A_x2[i] != 0) { bb[i2] = A_x2[i] + 'x²'; i2++;}
        if (A_x_y2[i] != 0) { bb[i2] = A_x_y2[i] + 'xy²'; i2++;}
        if (A_x_y[i] != 0) { bb[i2] = A_x_y[i] + 'xy'; i2++;}
        if (A_x[i] != 0) { bb[i2] = A_x[i] + 'x'; i2++;}
        if (A_y2[i] != 0) { bb[i2] = A_y2[i] + 'y²'; i2++;}
        if (A_y[i] != 0) { bb[i2] = A_y[i] + 'y'; i2++;}
        if (A_1[i] != 0) { bb[i2] = A_1[i]; i2++;}
        
        AAAA[i] = bb.join('+');

        bb = [];
    }
    

    for (var i = 0; i < Ax.length; i++) {
        BB[i] = ((M[i] == 1) ? '' : M[i]) + '(' + AAAA[i] + ')';
    }
    
    return BB.join(' + ');
}

function mnog_2() {


    for (var i = 0; i < Ax.length; i++) {

        if (A_x2_y2[i] != 0) { B_xx_yy_1[0] += A_x2_y2[i] * M[i]; }
        if (A_x2_y[i] != 0) { B_xx_yy_1[1] += A_x2_y[i] * M[i]; }
        if (A_x2[i] != 0) { B_xx_yy_1[2] += A_x2[i] * M[i]; }
        if (A_x_y2[i] != 0) { B_xx_yy_1[3] += A_x_y2[i] * M[i]; }
        if (A_x_y[i] != 0) { B_xx_yy_1[4] += A_x_y[i] * M[i]; }
        if (A_x[i] != 0) { B_xx_yy_1[5] += A_x[i] * M[i]; }
        if (A_y2[i] != 0) { B_xx_yy_1[6] += A_y2[i] * M[i]; }
        if (A_y[i] != 0) { B_xx_yy_1[7] += A_y[i] * M[i]; }
        if (A_1[i] != 0) { B_xx_yy_1[8] += A_1[i] * M[i]; }
        
    }

    
}

function Polin_1() {

    var Polin_1 = [];


    var i2 = 0;

        if (B_xx_yy_1[0] != 0) { Polin_1[i2] = B_xx_yy_1[0] + 'x²y²'; i2++; }
        if (B_xx_yy_1[1] != 0) { Polin_1[i2] = B_xx_yy_1[1] + 'x²y'; i2++; }
        if (B_xx_yy_1[2] != 0) { Polin_1[i2] = B_xx_yy_1[2] + 'x²'; i2++; }
        if (B_xx_yy_1[3] != 0) { Polin_1[i2] = B_xx_yy_1[3] + 'xy²'; i2++; }
        if (B_xx_yy_1[4] != 0) { Polin_1[i2] = B_xx_yy_1[4] + 'xy'; i2++; }
        if (B_xx_yy_1[5] != 0) { Polin_1[i2] = B_xx_yy_1[5] + 'x'; i2++; }
        if (B_xx_yy_1[6] != 0) { Polin_1[i2] = B_xx_yy_1[6] + 'y²'; i2++; }
        if (B_xx_yy_1[7] != 0) { Polin_1[i2] = B_xx_yy_1[7] + 'y'; i2++; }
        if (B_xx_yy_1[8] != 0) { Polin_1[i2] = B_xx_yy_1[8]; i2++; }
    
    //console.log(B_xx_yy_1)
    //console.log(Polin_1.join(' + '))

    return Polin_1.join(' + ')
}

function Polin_2() {

    var Polin_2 = [];


    var i2 = 0;


    B_xx_yy_1[0] = B_xx_yy_1[0] % 3;
    B_xx_yy_1[1] = B_xx_yy_1[1] % 3;
    B_xx_yy_1[2] = B_xx_yy_1[2] % 3;
    B_xx_yy_1[3] = B_xx_yy_1[3] % 3;
    B_xx_yy_1[4] = B_xx_yy_1[4] % 3;
    B_xx_yy_1[5] = B_xx_yy_1[5] % 3;
    B_xx_yy_1[6] = B_xx_yy_1[6] % 3;
    B_xx_yy_1[7] = B_xx_yy_1[7] % 3;
    B_xx_yy_1[8] = B_xx_yy_1[8] % 3;

    

    if (B_xx_yy_1[0] != 0) { Polin_2[i2] = ((B_xx_yy_1[0] == 1) ? '' : B_xx_yy_1[0]) + 'x²y²'; i2++; }
    if (B_xx_yy_1[1] != 0) { Polin_2[i2] = ((B_xx_yy_1[1] == 1) ? '' : B_xx_yy_1[1]) + 'x²y'; i2++; }
    if (B_xx_yy_1[2] != 0) { Polin_2[i2] = ((B_xx_yy_1[2] == 1) ? '' : B_xx_yy_1[2]) + 'x²'; i2++; }
    if (B_xx_yy_1[3] != 0) { Polin_2[i2] = ((B_xx_yy_1[3] == 1) ? '' : B_xx_yy_1[3]) + 'xy²'; i2++; }
    if (B_xx_yy_1[4] != 0) { Polin_2[i2] = ((B_xx_yy_1[4] == 1) ? '' : B_xx_yy_1[4]) + 'xy'; i2++; }
    if (B_xx_yy_1[5] != 0) { Polin_2[i2] = ((B_xx_yy_1[5] == 1) ? '' : B_xx_yy_1[5]) + 'x'; i2++; }
    if (B_xx_yy_1[6] != 0) { Polin_2[i2] = ((B_xx_yy_1[6] == 1) ? '' : B_xx_yy_1[6]) + 'y²'; i2++; }
    if (B_xx_yy_1[7] != 0) { Polin_2[i2] = ((B_xx_yy_1[7] == 1) ? '' : B_xx_yy_1[7]) + 'y'; i2++; }
    if (B_xx_yy_1[8] != 0) { Polin_2[i2] = B_xx_yy_1[8]; i2++; }

    //console.log(B_xx_yy_1)
    //console.log(Polin_1.join(' + '))

    return Polin_2.join(' + ')

}
