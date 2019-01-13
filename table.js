
var k = 2;
var str = '';

var table_x_m = [];
var table_y_m = [];
var table_z_m = [];

function fased_1()
    {
        var fased = '<td><a>X</a></td>\
                    <td><a>Y</a></td>\
                    <td><a>F(x,y)</a></td>\
                    <td><input type="button" value="Решить полином" onclick="polinom()" /></td>';

        if (koll_peremen == 1)
        {
            fased = '<td><a>X</a></td>\
                    <td><a>F(x)</a></td>\
                    <td><input type="button" value="Решить полином" onclick="polinom()" /></td>';
        }else
        if (koll_peremen == 2)
        {
            fased = '<td><a>X</a></td>\
                    <td><a>Y</a></td>\
                    <td><a>F(x,y)</a></td>\
                    <td><input type="button" value="Решить полином" onclick="polinom()" /></td>';
        }else
        if (koll_peremen == 3)
        {
            fased = '<td><a>X</a></td>\
                    <td><a>Y</a></td>\
                    <td><a>Z</a></td>\
                    <td><a>F(x,y,z)</a></td>\
                    <td><input type="button" value="Решить полином" onclick="polinom()" /></td>';
        }
        return fased;
    }

function table_XYZ_1(koll_peremen,k)
{
    var table_XYZ = '';
    var table_XYZ_2 = '';

    var table_x = 0;
    var table_y = 0;
    var table_z = 0;
    var table_id_F = 0;
    var table_X_znach = '';
    var table_Y_znach = '';
    var table_Z_znach = '';

    var table_XYZ_znach = '';
    var koll_strok_XYZ = 0;

    table_x_m = [];
    table_y_m = [];
    table_z_m = [];
    
    

    
    koll_strok_XYZ = Math.pow(k,koll_peremen);
    

    for (var i = 0; i < koll_strok_XYZ; i++)
    {
        table_X_znach = '<td><a>' + table_x + '</a></td>';
        table_Y_znach = '<td><a>' + table_y + '</a></td>';
        table_Z_znach = '<td><a>' + table_z + '</a></td>';

        table_x_m[i] = table_x;
        table_y_m[i] = table_y;
        table_z_m[i] = table_z;

        if (koll_peremen == 1) 
        {
            table_XYZ_znach = table_X_znach;
            table_x++;
        } else
            if (koll_peremen == 2) 
            {
                table_XYZ_znach = table_X_znach + table_Y_znach;
                
                table_y++;
                if(table_y == k){table_x++;}
                if(table_y == k){table_y = 0;}
            } else
                if (koll_peremen == 3) 
                {
                    table_XYZ_znach = table_X_znach + table_Y_znach + table_Z_znach;
                    table_z++;
                    if(table_z == k){table_y++;}
                    if(table_z == k){table_z = 0;}
                    if(table_y == k){table_x++;}
                    if(table_y == k){table_y = 0;}
                    
                }



        table_XYZ = '<tr>\
                    ' + table_XYZ_znach + '\
                    <td><input type="number" class="form-control" value="0" min="0" max="' + (k-1) + '" step="1" id="fx_tab_'+ table_id_F + '" /></td>\
                    </tr>';


        table_id_F++;

        table_XYZ_2 += table_XYZ;
        console.log(table_XYZ)
    }
    

        // console.log(table_x_m);
        // console.log(table_y_m);
        // console.log(table_z_m);
    return table_XYZ_2;
}

function apdateTable(){
    

    k = +document.getElementById("k").value;
    koll_peremen = +document.getElementById("koll_peremen").value;
    console.log(koll_peremen);
    var fased = '';
    var table_XYZ = '';

    fased = fased_1();
    var table_XYZ_3 = table_XYZ_1(koll_peremen,k);
    



    str = '<table class="table table-bordered table-condensed">\
                <tbody>\
                    <tr>' + fased + '</tr>\
                    ' + table_XYZ_3 +
                '</tbody>\
            </table>'
}


//window.setInterval("refreshDiv()", 500);
function refreshDiv() {
    apdateTable();
    document.getElementById("table").innerHTML = str;
} 
