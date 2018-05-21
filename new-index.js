var interested_items = []
var interested_items_companytype =[]
var interested_items_years=[]
var interested_items_roles=[]
var filter_selected=[[0,0,0],[0,0,0]]


var curr_slot = 0
var small_bar_colors=[]
//if none r filled, fill 1. if 1 is filled, fill 2. 
//if 2 is filled, fill 1. 
//if both r filled, only allow compare. 

var highlight1
var years_role_csv_1
var years_role_csv_2

var elem_1 = null
var elem_2 = null
var ready_to_compare =0

var totals=[]

function reset() {
    
    location.reload();
    // var ready_to_compare =0
    
    // small_bar_colors=[]
    // interested_items = []
    // interested_items_companytype =[]
    // interested_items_years=[]
    // interested_items_roles=[]
    
    // totals=[]
    
    // curr_slot = 0
    // elem_1 = null
    // elem_2 = null
    // years_role_csv_1 = null
    // years_role_csv_2 = null
    // document.getElementById("filter1").style.display = "none"
    // document.getElementById("filter2").style.display = "none"
    // document.getElementById("type_1").innerHTML = ""
    // document.getElementById("type_2").innerHTML = ""
    // d3.selectAll("svg g g").remove();
    
    // document.getElementById('fields').classList.remove('filterbox-switch');
    // document.getElementById('fields').classList.add('filterbox');
    
    
    // var boxes = document.querySelectorAll("#fields > div") 
    // boxes.forEach(function(i){
    //     i.style.border=".0014em solid #3f3f3f"
    // })
    
    // var names = document.querySelectorAll("#fields > div> p") 
    // names.forEach(function(i){
    //     i.style.color="#969696";
    // })
}


function button_companytype() {
    document.getElementById("Dropdown_companytype_1").classList.toggle("show");
    
}

function button2_companytype() {
    document.getElementById("Dropdown_companytype_2").classList.toggle("show");
}

function button_years() {
    document.getElementById("Dropdown_years").classList.toggle("show");
}

function button_years_2() {
    document.getElementById("Dropdown_years_2").classList.toggle("show");
}

function button_role() {
    document.getElementById("Dropdown_roles").classList.toggle("show");
}

function button_role_2() {
    document.getElementById("Dropdown_roles_2").classList.toggle("show");
}





function select_designType(elem, designtype) {
    
    console.log(elem);

    if (interested_items.length == 0) {
        interested_items.push(designtype)
        curr_slot = 1
        elem_1 = elem
        document.getElementById("filter1").style.display = "block"
        document.getElementById("type_1").innerHTML = designtype
        document.getElementById("type_1").style.color = "white"
        // document.getElementById("loading").style.display="block"
        // document.getElementById("loading").style.border="none"
        // document.getElementById("loading").style.animation="fade-in 0.5s ease-in"
        document.getElementById("part_2").style.display="none"
        
        
        
        document.getElementById("color-key").style.display="block"
        
        var x=elem.querySelectorAll("p")
        
        // //var x=elem.querySelectorAll("#id")/////////////////////////////////////////////change color for all subgrids when click 
        x[0].style.color="white"
      

        console.log("interested:", interested_items, " curr_slot:", curr_slot)
        
        // add change instruction here
        var x = document.getElementById("instruction1");
                if (x.style.display === "block") {
                    x.style.display = "none";
                } else {
                    x.style.display = "none";
                }
        
        elem.style.border="0.2em solid #fff";
        elem.style.zIndex="100"
        elem.style.outline="none"
        
        // var boxes=document.getElementById('c')
        // boxes.style.color='#ffffff'
        // elem.style.fill='ffffff';
        
        
        
    } else if (interested_items.length == 1 && interested_items[0] != designtype) {
        interested_items.push(designtype)
        curr_slot = 2
        elem_2 = elem
        document.getElementById("filter2").style.display = "block"
        document.getElementById("type_2").innerHTML = designtype
        document.getElementById("type_2").style.color = "white"
        
        var x=elem.querySelectorAll("p")
        x[0].style.color="white"
        
        // document.getElementById("loading").style.display="block"
        // document.getElementById("loading").style.border="none"
        // document.getElementById("loading").style.animation="fade-in 0.5s ease-in"
        document.getElementById("part_2_2").style.display="none"
        console.log("interested:", interested_items, " curr_slot:", curr_slot)

         elem.style.border="0.2em solid #fff";
         elem.style.zIndex="100"
         elem.style.outline="none"
        
        var y = document.querySelectorAll("#fields > div> p")
        y.forEach(function(d) {
            
            if (d.innerHTML==interested_items[0].toUpperCase() || d.innerHTML==interested_items[1].toUpperCase()) {
            }
            else {d.innerHTML=""}
            
        document.getElementById('fields').classList.remove('filterbox');
        document.getElementById('fields').classList.add('filterbox-switch');
        
        document.getElementById("instruction2").style.display = "none";
        
        })
         
    } else if (interested_items.length == 2) {
        return
    }
    
    // console.log(interested_items, curr_slot)
    // console.log("selected")
    var filter = {
        '2': designtype
    };
    
    //d3.selectAll("svg > *").remove();
    filterData(filter, designtype, elem);

}

var agency_roles=[]




function select_companyType(companytype, num_type) {
    var this_elem
    var this_csv
    var these_drop_down_roles

    if (num_type == 1) {
        document.getElementById("reset").style.display = "block";
        filter_selected[0][0]=1
        curr_slot=1
        this_elem = elem_1
        this_csv = years_role_csv_1
        document.getElementById("big_companytype").innerHTML = companytype;
        these_drop_down_roles = "Dropdown_roles"
        interested_items_companytype.push(companytype)
        
        console.log(this_elem)
        d3.select(this_elem).selectAll("svg g g").each(function(d, i) {
                console.log(d)
                if (d.data.name!=companytype) {
                    console.log(d3.select(this).select("rect"))
                    d3.select(this).select("rect").style("fill-opacity", "0")
                }
            });
    }



    if (num_type == 2) {
        document.getElementById("reset").style.display = "block";
        filter_selected[1][0]=1
        curr_slot=2
        this_elem = elem_2
        this_csv = years_role_csv_2
        document.getElementById("big_companytype2").innerHTML = companytype;
        these_drop_down_roles = "Dropdown_roles_2"
        interested_items_companytype.push(companytype)
        
        console.log(interested_items_companytype)
        
        console.log(this_elem)
        d3.select(this_elem).selectAll("svg g g").each(function(d, i) {
                console.log(d)
                if (d.data.name!=companytype) {
                    console.log(d3.select(this).select("rect"))
                    d3.select(this).select("rect").style("fill-opacity", "0")
                }
            });
    }
    
    var displayStatus=true;
    var i=0
    var j=0
    for (i = 0; i < filter_selected.length; i++){
        var foo=filter_selected[i]
        for (j = 0; j < foo.length; j++){
            if (foo[j]==0){
            displayStatus=false
            console.log('i and j')
            console.log(j);
        };
            
        };
        
    };
    
    if (displayStatus==true){
        document.getElementById("compare").style.display="block";
        
    };

    var company_type = String(companytype)

    // var rect_elem = this_elem.querySelector('svg g g')

    // d3.selectAll(rect_elem).each(function(d, i) {
    //     if (i > 4) {
    //         console.log("coooooooollllllllll")
    //         d3.select(this).remove()
    //     }
    // });

    var dropdowndiv = document.getElementById(these_drop_down_roles);
    while (dropdowndiv.hasChildNodes()) {
        dropdowndiv.removeChild(dropdowndiv.firstChild);
    }

    var temp_csv = []
    //for loop, for all in this_csv, if csv[i][4].row==companytype, 
    // push to a new csv thing
    
    this_csv.forEach(function(element) {

        if (element[4].row == companytype) {
            temp_csv.push(element)
        }
    })
    var next_csv
    var this_map
    if (num_type == 1) {
        years_role_csv_1 = temp_csv
        animateValue("count_1", totals[0] , years_role_csv_1.length, 500);
        animateValue("denominator_1", 10527, totals[0], 500)
        console.log(years_role_csv_1)
        this_map = find_roles_map(years_role_csv_1, company_type)
    }
    
    if (num_type == 2) {
        years_role_csv_2 = temp_csv
        animateValue("count_2", totals[1] , years_role_csv_2.length, 500);
        animateValue("denominator_2", 10527, totals[1], 500)
        this_map = find_roles_map(years_role_csv_2, company_type)
    }
    
    
    for (i in this_map) {
            var dropdown_element = document.createElement('A');
            var t = document.createTextNode(i);
            dropdown_element.appendChild(t);
            var role_string = i;
            
            dropdown_element.title = role_string;

            dropdown_element.addEventListener("click", function() {
                console.log(this.title)
                select_role(this.title, num_type, companytype, this_map);
            }, false);
            dropdowndiv.appendChild(dropdown_element);
        }

    if (num_type == 1) {
        document.getElementById("part_3").style.display = "block";
        document.getElementById("big_companytype").disabled=true;
        document.getElementById("big_companytype").style.borderBottom="none"
    }

    if (num_type == 2) {
        document.getElementById("part_3_2").style.display = "block";
         document.getElementById("big_companytype2").disabled=true;
         document.getElementById("big_companytype2").style.borderBottom="none"
    }



    drawComparisonBox(companytype, this_elem);
    
    
}


function animateValue(id, start, end, duration) {
            var range = start-end;
            console.log(range)
            var end_10 = Math.ceil((end+1)/10)*10
            var start_10=Math.ceil((start+1)/10)*10
            var current = start_10;
            
            if (range<0) {
                var increment = 1
            }
            else { var increment = range > 50 ? -10 : -1}
            var stepTime = Math.abs(Math.floor(duration / range));
            
            var obj = document.getElementById(id);
            var timer = setInterval(function() {
                current += increment;
                if (id=='count_1' || id=='count_2'){
                        obj.innerHTML = '\xa0'+'\xa0'+current;
                    }
                    if (id=='denominator_1'|| id=='denominator_2'){
                        obj.innerHTML = current;
                    };
                // obj.innerHTML = '\xa0'+current+"\xa0" ;
                if (current == end_10) {
                    increment = range < 0 ? 1 : -1;
                    if (id=='count_1' || id=='count_2'){
                        obj.innerHTML = '\xa0'+'\xa0'+current;
                    }
                    if (id=='denominator_1'||id=='denominator_2'){
                        obj.innerHTML = current;
                    }
                    
                }
                if (current==end){
                    clearInterval(timer);
                }
            }, stepTime);
        }

function find_years_map(csv) {
    console.log(csv)
    var this_years_type_csv=[]
    var read_this
    var current_map={}
    
    
    const just_one_range = csv.map(row => row["0"])
    read_this = just_one_range
    
    
    read_this.forEach(function(item, index){
        
        if (!current_map.hasOwnProperty(item.row)) {
                current_map[item.row.toString()] = 1;
            }
            else if (current_map.hasOwnProperty(item.row)) {
                ++current_map[item.row.toString()]
            }
        })
    console.log(current_map)
    return current_map
}




function select_years(num_years, filterbox_num) {


    var this_csv
    var this_elem

    if (filterbox_num == 1) {
        curr_slot=1
        document.getElementById("reset").style.display = "block";
        
        filter_selected[0][1]=1
        
        
    } else if (filterbox_num == 2) {
        curr_slot=2
        document.getElementById("reset").style.display = "block";
        
        filter_selected[1][1]=1
        
    }
    console.log("SELECT YEARS FOR ALLLLLLLLLL    FILTERSSSSSSSSSSS");
    console.log(filter_selected);
    
    if (curr_slot==1) {
        this_csv = years_role_csv_1
        this_elem = elem_1
        var num_1= this_csv.length
        document.getElementById("big_years").innerHTML = num_years;
        
        if (interested_items.length==1) {
            document.getElementById("instruction2").style.display = "block";}
        else {document.getElementById("instruction2").style.display = "none"}
        
        interested_items_years.push(num_years)
        
    }
    else if (curr_slot==2) {
        this_csv = years_role_csv_2
        this_elem = elem_2
        var num_2= this_csv.length
        document.getElementById("big_years_2").innerHTML = num_years;
        interested_items_years.push(num_years)
        
        
    
    }
    
    var displayStatus=true;
    var i=0
    var j=0
    for (i = 0; i < filter_selected.length; i++){
        var foo=filter_selected[i]
        for (j = 0; j < foo.length; j++){
            if (foo[j]==0){
            displayStatus=false
            console.log('i and j')
            console.log(j);
        };
            
        };
        
    };
    
    if (displayStatus==true){
        document.getElementById("compare").style.display="block";
        
    };


    console.log("//select years//", "numtype:", filterbox_num)

    
    const just_years = this_csv.map(row => row["0"])
    // console.log(just_years)

    var less = 0
    var _1_4 = 0
    var _5_9 = 0
    var _10_14 = 0
    var _15_20 = 0
    var _20_plus = 0
    var total = just_years.length

    var filter_by_years_csv = []



    just_years.forEach(function(item, index) {
        // console.log(item.row)
        if (item.row == num_years) {
            filter_by_years_csv.push(this_csv[index])
        }
        if (item.row == "1-4 years") {
            ++_1_4
        } else if (item.row == "5-9 years") {
            ++_5_9
        } else if (item.row == "10-14 years") {
            ++_10_14
        } else if (item.row == "15-20 years") {
            ++_15_20
        } else if (item.row == "20+ years") {
            ++_20_plus
        } else if (item.row == "Less than 1 year") {
            ++less
        }
    });

    // console.log(_1_4, _5_9, _10_14, _15_20, _20_plus, less)
    _1_4 = (_1_4 / total)
    _5_9 = (_5_9 / total)
    _10_14 = (_10_14 / total)
    _15_20 = (_15_20 / total)
    _20_plus = (_20_plus / total)

    less = (less / total)

    var map = {
        "1-4 years": _1_4,
        "5-9 years": _5_9,
        "10-14 years": _10_14,
        "15-20 years": _15_20,
        "20+ years": _20_plus,
        "Less than 1 year": less
    }

    var multiplier = map[num_years]
    // var cur_highlight= interested_items[filterbox_num]
    console.log("map:", map)
    console.log("percentage:", multiplier, "numerator:", multiplier*total, "denominator:",total)



    var highlight_elem = this_elem.querySelector('svg g g #highlight')
    console.log(highlight_elem)
    
    var new_mid_hilite = d3.select(this_elem.querySelector('svg g'))
    var mid_hilite = new_mid_hilite.insert("g", 'g#highlight').attr("id", "mid-highlight").append("rect")
    mid_hilite
        .attr("x", d3.select(highlight_elem).attr("x"))
        .attr("y", d3.select(highlight_elem).attr("y"))
        .attr("height",d3.select(highlight_elem).attr("height"))
        .attr("width", d3.select(highlight_elem).attr("width"))
        .attr("id", "mid-highlight")
        .style("fill", d3.select(highlight_elem).style("fill"))
        .style("fill-opacity", "0.4")
        
    console.log(d3.select('svg g g #mid_hilite'))


    d3.select(highlight_elem)
        .transition()
        
        .attr("height", function(d) {
            return d.height * multiplier;
        });

    if (filterbox_num == 1) {
        years_role_csv_1 = filter_by_years_csv
        document.getElementById("big_years").innerHTML = num_years;
        
        animateValue("count_1", num_1, years_role_csv_1.length, 500)
        document.getElementById("reset").style.display = "block";
        
        document.getElementById("big_years").disabled=true;
        document.getElementById("big_years").style.borderBottom="none"
        

    } else if (filterbox_num == 2) {
        years_role_csv_2 = filter_by_years_csv
        document.getElementById("big_years_2").innerHTML = num_years;
        
        animateValue("count_2", num_2, years_role_csv_2.length, 500)
        
        console.log('FILTER BOX SELECTED IN 222222 for YEARS')
        document.getElementById("reset").style.display = "block";
        // document.getElementById("compare").style.display = "block";
        
        document.getElementById("big_years_2").disabled=true;
        document.getElementById("big_years_2").style.borderBottom="none"
        
    }
   
   
}

var max_y_axis_height


function find_roles_map(csv, companytype) {
    var this_role_type_csv=[]
    var read_this
    var current_map={}
    if (companytype == "Agency") {
        console.log("true")
        const just_one_type = csv.map(row => row["1"])
        read_this = just_one_type
    }
    
    else if (companytype=="In-house"){
        const just_one_type = csv.map(row => row["2"])
        read_this = just_one_type
    }
    else if (companytype=="Freelance"){
        const just_one_type = csv.map(row => row["1"])
        read_this = just_one_type
    }
    else if (companytype=="Other"){
        const just_one_type = csv.map(row => row["3"])
        read_this = just_one_type
    }
    
    read_this.forEach(function(item, index){
        
        if (!current_map.hasOwnProperty(item.row)) {
                current_map[item.row.toString()] = 1;
            }
            else if (current_map.hasOwnProperty(item.row)) {
                ++current_map[item.row.toString()]
            }
        })
        
        console.log(current_map) 
        return current_map
}

var years_map 

function select_role(string_name, num__type, companytype, map) {
    role = string_name;
    var this_csv
    var this_elem
    
    var this_role_type_csv=[]
    
    var com_num 
    if (companytype=="Agency" || companytype=="Freelance") {com_num = 1}
    else if (companytype=="In-house") {com_num = 2}
    else if (companytype=="Other") {com_num = 3}
    
    var these_drop_down_years

    if (num__type == 1) {
        filter_selected[0][2]=1
        curr_slot=1
        this_csv = years_role_csv_1
        console.log(this_csv)
        var num_1 = this_csv.length
        this_elem = elem_1
        document.getElementById("big_role").innerHTML = string_name;
        these_drop_down_years = "Dropdown_years"
        document.getElementById("part_4").style.display = "block";
        
        interested_items_roles.push(string_name)
        
        this_csv.forEach(function (item, index) {
            if (item[com_num].row==string_name) {
                this_role_type_csv.push(item)
            }
        })
        
        console.log(this_role_type_csv)
        years_role_csv_1= this_role_type_csv
        
        } else if (num__type == 2) {
        filter_selected[1][2]=1
        curr_slot=2
        this_csv = years_role_csv_2
        console.log(this_csv)
        var num_2 = this_csv.length
        this_elem = elem_2
        document.getElementById("big_role_2").innerHTML = string_name;
        
        these_drop_down_years = "Dropdown_years_2"
        
        document.getElementById("part_4_2").style.display = "block";
        
        interested_items_roles.push(string_name)
        
        
        
        
        
        this_csv.forEach(function (item, index) {
            if (item[com_num].row==string_name) {
                this_role_type_csv.push(item)
            }
           
        })
        years_role_csv_2= this_role_type_csv
    }
    
   var displayStatus=true;
    var i=0
    var j=0
    for (i = 0; i < filter_selected.length; i++){
        var foo=filter_selected[i]
        for (j = 0; j < foo.length; j++){
            if (foo[j]==0){
            displayStatus=false
            console.log('i and j')
            console.log(j);
        };
            
        };
        
    };
    
    if (displayStatus==true){
        document.getElementById("compare").style.display="block";
        
    };
    
    
        
        
    var dropdowndiv = document.getElementById(these_drop_down_years);
    while (dropdowndiv.hasChildNodes()) {
        dropdowndiv.removeChild(dropdowndiv.firstChild);
    }
    
    
    
    
    years_map = find_years_map(this_role_type_csv)
    
    
    for (i in years_map) {
            var dropdown_element = document.createElement('A');
            var t = document.createTextNode(i);
            dropdown_element.appendChild(t);
            var role_string = i;
            
            dropdown_element.title = role_string;

            dropdown_element.addEventListener("click", function() {
                console.log(this.title)
                select_years(this.title, num__type);
            }, false);
            dropdowndiv.appendChild(dropdown_element);
        }
    
    
    console.log("//select role//", "numtype:", num__type)
    var multiplier = which_role(string_name, map)
    
    if (curr_slot==1) {
        // console.log(num_1, this_csv.length)
        
        animateValue("count_1", num_1, this_role_type_csv.length, 500)
        document.getElementById("big_role").disabled=true;
        document.getElementById("big_role").style.borderBottom="none"
        
        
    }
    else if (curr_slot==2) {
        animateValue("count_2", num_2, this_role_type_csv.length, 500)
        max_y_axis_height = (years_role_csv_1.length > years_role_csv_2.length) ? years_role_csv_1.length : years_role_csv_2.length
        
        document.getElementById("big_role_2").disabled=true;
        document.getElementById("big_role_2").style.borderBottom="none"
    }
    
    
    highlight_elem = this_elem.querySelector('svg g g #highlight')
    var x
    d3.select(highlight_elem)
        .transition()
        
        .attr("width", function(d) {
            
            x = d.width - (d.width * multiplier)
            return d.width * multiplier
        })
        .attr("x", function(d) {
            x = d.rx + x
            return x
        });
        
    
}

        

function which_role(role_type, map) {
    
    var multiplier
    var total=0
    
    for (i in map) {
        total += map[i]
    }
    console.log(total)
    
    multiplier = map[role_type] / total

    console.log("total:", total, "percentage:", multiplier, "numerator:", total*multiplier)
    return multiplier
    
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) { //button dropdown does not disapeear after clikcing other buttons since they all have the same class ".dropbtn"

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}




function filterData(filter, designtype, elem) {

    // console.log(filter)
    d3.csv("DesignCensus.csv").then(function(data) {
        // console.log(data)


        csv = data.filter(function(row) {
            // run through all the filters, returning a boolean
            return ['2'].reduce(function(pass, column) {
                return pass && (
                    // pass if no filter is set
                    !filter[column] ||
                    // pass if the row's value is equal to the filter
                    // (i.e. the filter is set to a string)
                    row[column].includes(filter[column]) ||
                    // pass if the row's value is in an array of filter values
                    filter[column].indexOf(row[column]) >= 0
                );
            }, true);
        })
        
        var tree_1 = {}


        drawTreeMap(tree_1, csv, designtype, elem);
        
        console.log("THIS NEW NUBER STARTER", csv.length)
        
        
        totals.push(csv.length)
        
        if (curr_slot==1) {
            document.getElementById("count_1").innerHTML= "\xa0\xa0"+totals[0].toString() 
            document.getElementById("denominator_1").innerHTML= "10527"
            
        }
        if (curr_slot==2) {
            document.getElementById("count_2").innerHTML= "\xa0\xa0"+totals[1].toString() 
            document.getElementById("denominator_2").innerHTML= "10527"
        }
        
    })
};


function count_types(tree, csv, designtype) {

    const just_types_csv = csv.map(row => row["4"])
    if (curr_slot == 1) {
        years_role_csv_1 = csv.map(row => [{
            row: row["1"]
        }, {
            row: row['13']
        }, {
            row: row['14']
        }, {
            row: row['15']
        }, {
            row: row['4']
        }, {
            row: row['28'] //major
        }, {
            row: row['18'] //salary
        }, {
            row: row['26'] //education/degree
        }, {
            row: row['23'] //stability
        }, {
            row: row['42'] //future trends
        }, {
            row: row['43'] //future skills
        }, {
            row: row['2'] //current specialty
        }, {
            row: row['3'] //also good at 
        }])
    } //not filtered by company type!!!! only design type

    if (curr_slot == 2) {
        years_role_csv_2 = csv.map(row => [{
            row: row["1"]
        }, {
            row: row['13']
        }, {
            row: row['14']
        }, {
            row: row['15']
        }, {
            row: row['4']
        }, {
            row: row['28'] //major
        }, {
            row: row['18'] //salary
        }, {
            row: row['26'] //education/degree
        }, {
            row: row['23'] //stability
        }, {
            row: row['42'] //future trends
        }, {
            row: row['43'] //future skills
        }, {
            row: row['2'] //current specialty
        }, {
            row: row['3'] //also good at 
        }])
    } //not filtered by company type!!!! only design type


   
    var agency = 0
    var inhouse = 0
    var freelance = 0
    var other = 0
    var total = just_types_csv.length

    just_types_csv.forEach(function(item, index) {
        
        if (item == "Agency") {
            ++agency
        } else if (item == "In-house") {
            ++inhouse
        } else if (item == "Freelance") {
            ++freelance
        } else if (item == "Other") {
            ++other
        }
    });

    agency = (agency / total) * 100
    inhouse = (inhouse / total) * 100
    freelance = (freelance / total) * 100
    other = (other / total) * 100


    tree = {

        "name": designtype,
        "children": [{
                "name": "Agency",
                "size": agency,
                "color": "#532bf9",
                "delay":500
            },
            {
                "name": "In-house",
                "size": inhouse,
                "color": "#5fffd5",
                "delay":800
            },
            {
                "name": "Freelance",
                "size": freelance,
                "color": "#ffa1ed",
                "delay":1100
            },
            {
                "name": "Other",
                "size": other,
                 "color": "#f9ff00",
                 "delay":1400
            },

        ]
    }



    return tree

}

function drawTreeMap(tree, csv, designtype, elem) {
    
    var box_width = parseFloat(d3.select(elem).style('width'))
    var box_height = parseFloat(d3.select(elem).style('height'))
    var selected_tree = count_types(tree, csv, designtype)
    var treemapLayout = d3.treemap()
        .size([box_width, box_height])
        // .paddingOuter(1);
        
    treemapLayout.tile(d3.treemapSquarify)
    var root = d3.hierarchy(selected_tree)
    

    
    console.log(root)
    console.log(root.descendants())
    console.log(root.children)
    
    root.sum(function(d) {
        return d.size;
    });
    
    treemapLayout(root);
    var x = String(designtype)
    let g_elem = elem.querySelector('svg g');
    
    var com_color

    var nodes = d3.select(g_elem)
        .selectAll('rect')
        .data(root.children)
        .enter()
        .append('g')
        .attr("id", function(d) {
            return d.data.name
        })
        .attr('transform', function(d) {
            return 'translate(' + [d.x0, d.y0] + ')'
        })
    var rect_nodes = nodes
        .append('rect')
        .attr('width', function(d) {
            return d.x1 - d.x0;
        })
        .attr('height', function(d) {
            return d.y1 - d.y0;
        })
        .attr('id', function(d) {
            return d.data.name
        })
        .style("stroke", function(d) {
                return "none" 
            })
        // .style("stroke-width", "0.1em")
        // .style("stroke-opacity", "1")
        
    rect_nodes
        
            
            .style("fill", function(d) {
                    return d.data.color 
                })
            .style("fill-opacity", "1")
        .transition()
            .style("fill-opacity", function(d) {
                return "0.6" 
            })
        .transition()
            .style("fill-opacity", function(d) {
                return "0.2" 
            })
            
            
    
    rect_nodes
        // .on("mouseover", handleMouseOver)
        // .on("mouseout", handleMouseOut);
        
        function handleMouseOver(d, i) {  
            // Use D3 to select element, change color and size
            
            d3.select(this)
                .transition()
                .style("fill-opacity", "1")
                .style("fill", d.data.color)
        }
        function handleMouseOut(d, i) {
            // Use D3 to select element, change color back to normal
            d3.select(this)
                .transition()
                .style("fill-opacity", "0")
        }


    // nodes
    //     .append('text')
    //     .attr('dx', 4)
    //     .attr('dy', function(d) {
    //         return d.y1-d.y0-4
    //     })
    //     .style("fill", "white")
    //     .text(function(d) {
    //         if (d.data.name!= designtype){
    //         return d.data.name;}
    //     });

    
    console.log(nodes.select("#"+designtype).select("rect"))
    nodes.select("#"+designtype).select("rect")
      .style('stroke','none');
    nodes.select("#"+designtype).select("text")
      .style('fill','none');
    
    if (curr_slot==1) {
        document.getElementById("loading").style.display="none"
        document.getElementById("part_2").style.display="block"
    }
    
    if (curr_slot==2) {
        document.getElementById("loading").style.display="none"
        
        document.getElementById("part_2_2").style.display="block"
    }
    
    
      
}


function drawComparisonBox(company_type, this_elem) {
    var x0, y0, x1, y1
    var highlight1 = [x0, y0, x1, y1]
    var new_select_box
    var tru = 0
    var color
    
    
   
    
    
    if (curr_slot===1) {
        console.log("hello")
        if (company_type=="Agency") {color = "#532bf9"}
        else if (company_type=="In-house") {color = "#5fffd5"}
        else if (company_type=="Freelance") {color = "#ffa1ed"}
        else if (company_type=="Other") {color = "#f9ff00"}
        document.getElementById("color1").style.background=color;
        small_bar_colors.push(color)
        
        
        
        
    }
    else if (curr_slot===2) {
         
        if (company_type=="Agency") {color = "#532bf9"}
        else if (company_type=="In-house") {color = "#5fffd5"}
        else if (company_type=="Freelance") {color = "#ffa1ed"}
        else if (company_type=="Other") {color = "#f9ff00"}
        // console.log(this_elem)
        document.getElementById("color2").style.background=color
        small_bar_colors.push(color)
        console.log(small_bar_colors)
        
    }

    var companytype = String(company_type)

    rect_elem = this_elem

    // console.log(d3.selectAll("svg g g rect"))

    // console.log(d3.select(rect_elem).selectAll("svg g g rect"))

    new_elem = d3.select(rect_elem).selectAll("svg g g rect")
    new_elem.each(function(d, i) {
        // console.log(d)
        if (d.data.name == company_type) {
            // console.log(true)
            x0 = d.x0
            y0 = d.y0
            x1 = d.x1
            y1 = d.y1
            tru = i
            new_select_box = d3.select(this)
            // console.log(tru)
        }

    });
    // console.log(x0, y0, x1, y1)

    var newData = [{
        "rx": x0,
        "ry": y0, 
        "height": y1 - y0,
        "width": x1 - x0,
        "color": color
    }];

    var svg = d3.select(rect_elem).select("svg g")
    
    var highlight_box = svg.insert("g", 'g#' + companytype).attr("id", "highlight");

    var rectangles = highlight_box.selectAll("rect")
        .data(newData)
        .enter()
        .append("rect");

    var rectangleAttributes = rectangles
        .attr("x", function(d) {
            return d.rx;
        })
        .attr("y", function(d) {
            return d.ry;
        })
        .attr("height", function(d) {
            return d.height;
        })
        .attr("width", function(d) {
            return d.width;
        })
        .attr("id", "highlight")
        .style("fill", function(d) {
            return d.color;
        });
    
};

//////////////KAILINNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN////////////

var census;
var specialty = "none"
//var specialty_select = false
var company_type = "none"
//var company_type_select= false
var role = "none"
//var role_select = false
var years_exp = "none" 
//var years_exp_select = false


var specialty_col = "2";
var company_type_col = "4";
var role_col = ["13","14","15"];
var years_exp_col = "1";
var x;

function count_degree(csv) {
    console.log('this is filtered census in count function');
    console.log(csv);

    const degree = csv.map(row => row["7"])
    const new_degree= degree.map(row => row["row"]);
    console.log('NEW DEGREE');
    console.log(new_degree);

    var bachelor=0
    var master=0
    var doctorate =0
    var some_college =0
    var certificate=0
    var associate =0
    var high_school=0
    var total= degree.length
    
    
    
    new_degree.forEach(function(item, index){
        // console.log(item)
        if (item =="Bachelor's degree") {++bachelor}
        else if (item =="Master's degree") {++master}
        else if (item =="Doctorate") {++doctorate}
        else if (item=="Some college") {++some_college}
        else if (item=="Technical degree or certificate") {++certificate}
        else if (item=="Associate's degree") {++associate}
        else if (item=="High School or less") {++high_school}
     });

    var filtered_degree={content:[
    {"label": "Bachelor's degree", "value":bachelor },
    {"label": "Master's degree", "value":master },
    {"label": "Doctorate degree", "value":doctorate },
    {"label": "Some college", "value":some_college},
    {"label": "Technical degree or certificate", "value":certificate},
    {"label": "Associate's degree", "value":associate},
    {"label": "High School or less", "value":high_school}

    ]};
    console.log('filtered degree');
    console.log(filtered_degree);


    return(filtered_degree);
}


function count_stability(csv) {
    const stability = csv.map(row => row["8"])
    const new_stability= stability.map(row => row["row"]);
    

    var rock_solid=0
    var fairly_stable=0
    var somewhat_shaky =0
    var non_existent=0
    var not_sure =0
    var total= stability.length
    
    new_stability.forEach(function(item, index){
        // console.log(item)
        if (item =="Fairly stable") {++fairly_stable}
        else if (item =="Somewhat shaky") {++somewhat_shaky}
        else if (item =="Rock solid") {++rock_solid}
        else if (item=="Non-existent") {++non_existent}
        else if (item=="Not sure") {++not_sure}
        
     });

    var filtered_new_stability={content:[
    {"label": "Fairly stable", "value":fairly_stable },
    {"label": "Somewhat shaky", "value":somewhat_shaky },
    {"label": "Rock solid", "value":rock_solid },
    {"label": "Non-existent", "value":non_existent},
    {"label": "Not sure", "value":not_sure}

    ]};
    // console.log('filtered degree');
    // console.log(filtered_stability);


    return(filtered_new_stability);
}


var sal_bins=[]
var longest_len=0


function y_axis_finder(filtered_census,svg_name,colorCode) {

    // var formatCount = d3.format(",.0f");

    const salary = filtered_census.map(row => row["6"])
    const new_salary= salary.map(row => row["row"])
    
    // var new_svg_name="#"+svg_name
    // var svg = d3.select(new_svg_name),
    // margin = {top: 10, right: 30, bottom: 30, left: 30},
    // width = +svg.attr("width") - margin.left - margin.right,
    // height = +svg.attr("height") - margin.top - margin.bottom,
    // g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    // console.log("HISTOGRAM width and then height")
    // console.log(width);
    // console.log(height)
    
    
    var x = d3.scaleLinear()
   .domain([0,260000]);


    //thresh = d3.thresholdSturges(salary);
    var bins = d3.histogram()
    .domain(x.domain())
    .thresholds(x.ticks(10))
    (new_salary);
    
    console.log(bins)

    sal_bins.push(bins)
    console.log(sal_bins);
    
    if (sal_bins.length==2) {
        var big_sal = (years_role_csv_1.length>years_role_csv_2.length) ? sal_bins[0] : sal_bins[1]
        console.log(big_sal)
        
    
        big_sal.forEach(function(item) {
            if (item.length > longest_len) {
                longest_len = item.length;
            }
        });
    
    console.log("second round", longest_len)
    }
}






//draw histogram
function drawHistoSalary(filtered_census,svg_name,colorCode) {
    console.log(filtered_census);
    console.log("Start Drawing");
    var formatCount = d3.format(",.0f");

    // data= filtered census 
    const salary = filtered_census.map(row => row["6"])
    const new_salary= salary.map(row => row["row"])
    console.log("new salary:", new_salary)
    
    // console.log("salary:", salary)    
    
    console.log("length of salary list");
    console.log(salary.length);

    var new_svg_name="#"+svg_name
    var svg = d3.select(new_svg_name),
    margin = {top: 10, right: 30, bottom: 30, left: 30},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom,
    g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    console.log("HISTOGRAM width and then height")
    console.log(width);
    console.log(height)
    
    
    var x = d3.scaleLinear()
    .rangeRound([0, width]).domain([0,260000]);


    //thresh = d3.thresholdSturges(salary);
    var bins = d3.histogram()
    .domain(x.domain())
    .thresholds(x.ticks(10))
    (new_salary);
    
    
    
    var y = d3.scaleLinear()
    .domain([0,longest_len+3])
    // .domain([0,maxSalary])
    // .domain([0, d3.max(bins, function(d) { return d.length; })])
    .range([height, 0]);
    //var color = d3.scale.ordinal()
    //.range(["#fb5454", "#f1fb54", "#54befb"]);
    
    var y_axis = d3.axisLeft()
                  .scale(y);
                  
    svg.append("g")
       .attr("transform", "translate(30, 10)")
       .attr("class", "axisWhite")
       .call(y_axis);

    var bar = g.selectAll(".bar")
    .data(bins)
    .enter().append("g")
    .attr("class", "bar")
    .attr("transform", function(d) { return "translate(" + x(d.x0) + "," + y(d.length) + ")"; });
    
    //define color
    
    // var bar_colors = ["#000033", "#000066", "#000099", "#0000CC", "#0000FF", "#3333FF", "#6666FF", "#9999FF"];
    var bar_colors=getColorHisto(colorCode);
    
    bar.append("rect")
    .attr("x", 1)
    .attr("width", x(bins[0].x1) - x(bins[0].x0-1))
    .attr("height", function(d) { return height - y(d.length)})
    .attr("stroke", "#ffffff")
    .attr("stroke-width", "0.5px")
    // .attr("stroke", 1px)
    .attr("fill", function (d){ 
    	                        var val = Math.min.apply(null, d); // 这一行是取d 中最小值（也就是每一个单独长方形的左侧边的值）
    	                        var min_max = x.domain(); // x.domain（）是x轴最大最小值
    	                        var offset = (val - min_max[0]); // [0] 里面是x轴最小值， 
    	                        var bin_idx = offset/20000; //第几个 bin
    	                        var bin_idx=Math.floor(bin_idx);
    	                       // console.log('offset');
    	                       // console.log(offset);
    	                        console.log("BIN INDX");
    	                        
    	                        console.log(bin_idx)
    	                        var color = bar_colors[bin_idx]; // 选取bar_colors里面对应的颜色
    	                        console.log(color);
    	                        return color; });
    
    // .style('fill','white');
    // .style("fill", function(d) {
    //       return color(d.key);
    // });

    bar.append("text")
        .text(function(d) { 
            if (d.length==0){
                return ''
            }else{
            return formatCount(d.length) 
            }
        })
        .attr("dy", ".75em")
        .attr("y", -13)
        .attr("x", (x(bins[0].x1) - x(bins[0].x0)) / 2)
        .attr("text-anchor", "middle");

    g.append("g")
        .attr("class", "axisX")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x)
        .ticks(8));
        
            //   .tickFormat(d3.format(".0s")));
    console.log("End Drawing");
    
  
}

// function drawHistoMajor(filtered_census) {


// returns all keys that correspond to a specific value
// note that object means "dict"
function getKeyByValue(object, value) {
  var result_list = [];
  for (var e in object) {
    var curr_val = object[e];
    if (curr_val == value) {
      result_list.push(e);
    }
  }
  return result_list;
}

// returns k largest numbers in a list
function findKLargestNums(nums, k) {
  var result = nums.sort(function(a, b){return b-a});
  return result.slice(0,k);
};

// return Top K majors in a list
function countTopKMajors(k, major_dict) {
  var count_list = [];
  for (var major in major_dict) {
    count_list.push(major_dict[major]);
  }
  var top_count_vals = findKLargestNums(count_list, k);
  var no_duplicate_top_count_vals = Array.from(new Set(top_count_vals));
  var top_majors = [];
  for (var i = 0; i < no_duplicate_top_count_vals.length; i++) {
    var new_major_list = getKeyByValue(major_dict, no_duplicate_top_count_vals[i]);

    for (var j = 0; j < new_major_list.length; j++) {
      var new_major = new_major_list[j];
      if (new_major in top_majors) {
        continue;
      }
      top_majors.push(new_major_list[j]);
      if (top_majors.length == k) {
        return top_majors;
      
    }    
  }
  
  
  }
  console.log('TOPPPPPPPPPPPPPPPPPPPPPPPPPPP MAJOOORRR');
  console.log(top_majors);
  return top_majors;
};



// Returns a dict of structure: {key: major, val: count} 
function textMajor(csv,name_id_first,name_id_second,name_id_third){
  var major_dict = new Object();
  const major_column = csv.map(row => row["5"]);
  const new_major_column= major_column.map(row => row["row"])
  
  for (var i = 0; i<new_major_column.length; ++i) {
    var new_line = new_major_column[i];
    var new_line_major_list = new_line.split("|");
    for (var j = 0; j < new_line_major_list.length; j++) {
      var new_major = new_line_major_list[j];
      if (new_major in major_dict) {
        var temp = major_dict[new_major];
        temp++;
        major_dict[new_major] = temp;
      } else {
        major_dict[new_major] = 1;
      }
    }
  }
  var top_majors=countTopKMajors(3, major_dict);
  
  document.getElementById(name_id_first).innerHTML = top_majors[0];
  document.getElementById(name_id_second).innerHTML = top_majors[1];
  document.getElementById(name_id_third).innerHTML = top_majors[2];
}

function countTopKSkills(k, skill_dict) {
  var count_list = [];
  for (var skill in skill_dict) {
    count_list.push(skill_dict[skill]);
  }
  var top_count_vals = findKLargestNums(count_list, k);
  var no_duplicate_top_count_vals = Array.from(new Set(top_count_vals));
  var top_skills = [];
  for (var i = 0; i < no_duplicate_top_count_vals.length; i++) {
    var new_skill_list = getKeyByValue(skill_dict, no_duplicate_top_count_vals[i]);

    for (var j = 0; j < new_skill_list.length; j++) {
      var new_skill = new_skill_list[j];
      if (new_skill in top_skills) {
        continue;
      }
      top_skills.push(new_skill_list[j]);
      if (top_skills.length == k) {
        return top_skills;
      
      }    
    }
   }
  return top_skills;
};
  

function textTopSkill(csv,name_id_one, name_id_two,name_id_three){
  var skill_dict = new Object();
  const skill_column = csv.map(row => row["11"])
  const new_skill_column= skill_column.map(row => row["row"])
  for (var i = 0; i<new_skill_column.length; ++i) {
    var new_line = new_skill_column[i];
    var new_line_skill_list = new_line.split("|");
    for (var j = 0; j < new_line_skill_list.length; j++) {
      var new_skill = new_line_skill_list[j];
      if (new_skill in skill_dict) {
        var temp = skill_dict[new_skill];
        temp++;
        skill_dict[new_skill] = temp;
      } else {
        skill_dict[new_skill] = 1;
      }
    }
  }
  // console.log("TOP FIVE MAJORS");
  // console.log(majorList);
  var top_skills=countTopKSkills(3, skill_dict);
  console.log("TOPPPPPPPPP SKILLLLLLS")
  console.log(top_skills);
  document.getElementById(name_id_one).innerHTML = top_skills[0];
  document.getElementById(name_id_two).innerHTML = top_skills[1];
  document.getElementById(name_id_three).innerHTML = top_skills[2];
  
};
  // return major_dict;


function countTopKOtherSkills(k, other_skill_dict) {
  var count_list = [];
  for (var other_skill in other_skill_dict) {
    count_list.push(other_skill_dict[other_skill]);
  }
  var top_count_vals = findKLargestNums(count_list, k);
  var no_duplicate_top_count_vals = Array.from(new Set(top_count_vals));
  var top_other_skills = [];
  for (var i = 0; i < no_duplicate_top_count_vals.length; i++) {
    var new_other_skill_list = getKeyByValue(other_skill_dict, no_duplicate_top_count_vals[i]);

    for (var j = 0; j < new_other_skill_list.length; j++) {
      var new_other_skill = new_other_skill_list[j];
      if (new_other_skill in top_other_skills) {
        continue;
      }
      top_other_skills.push(new_other_skill_list[j]);
      if (top_other_skills.length == k) {
        return top_other_skills;
      
      }    
    }
   }
  return top_other_skills;
};



  

function textAlsoGoodAt(csv,id_name_one,id_name_two,id_name_three){
  var other_skill_dict = new Object();
  const other_skill_column = csv.map(row => row["12"])
  const new_other_skill_column= other_skill_column.map(row => row["row"])
  
  
  for (var i = 0; i<new_other_skill_column.length; ++i) {
    var new_line = new_other_skill_column[i];
    var new_line_other_skill_list = new_line.split("|");
    for (var j = 0; j < new_line_other_skill_list.length; j++) {
      var new_other_skill = new_line_other_skill_list[j];
      if (new_other_skill in other_skill_dict) {
        var temp = other_skill_dict[new_other_skill];
        temp++;
        other_skill_dict[new_other_skill] = temp;
      } else {
        other_skill_dict[new_other_skill] = 1;
      }
    }
  }
  var top_other_skills=countTopKOtherSkills(3, other_skill_dict);
  console.log("ALSO GOODDDDDDDDDDd AT");
  console.log(top_other_skills);

  document.getElementById(id_name_one).innerHTML = top_other_skills[0];
  document.getElementById(id_name_two).innerHTML = top_other_skills[1];
  document.getElementById(id_name_three).innerHTML = top_other_skills[2];
};

function getFutureTrends(data, idName_one,idName_two,idName_three){
    var trend_dict = new Object();
    const foo= data.map(row => row["9"])
    const trend= foo.map(row => row["row"])
    
    for (var i = 0; i<trend.length; ++i) {
    var new_trend = trend[i];
    var new_trend_list = new_trend.split("|");
    for (var j = 0; j < new_trend_list.length; j++) {
      var new_other_trend = new_trend_list[j];
      if (new_other_trend in trend_dict) {
        var temp = trend_dict[new_other_trend];
        temp++;
        trend_dict[new_other_trend] = temp;
      } else {
        trend_dict[new_other_trend] = 1;
      }
    }
  }
  // console.log("TOP FIVE MAJORS");
  // console.log(majorList);
  var top_trend=countTopKOtherSkills(3, trend_dict);
  
 
  document.getElementById(idName_one).innerHTML = top_trend[0]+";";
  document.getElementById(idName_two).innerHTML = top_trend[1]+';';
  document.getElementById(idName_three).innerHTML = top_trend[2]+";";
};
    
  

 function getColorList(filterColor) {
  if (filterColor=="#5fffd5"){
      var colorList=["#5fffd5","#57EBC5","#51DAB7","#49C5A7","#42B297","#3CA38B","#348F7B"];
  }
  if (filterColor=="#532bf9"){
      var colorList=["#532BF9","#4726D6","#3A20B2","#251678","#191155","#0C0B31","#00070F"];
  }
  if (filterColor=="#ffa1ed"){
      var colorList=["#ffa1ed","#EB94DB","#D98ACB","#C47DB9","#B373AA","#A1679A","#8C5C88"];
  }
  if (filterColor=="#f9ff00"){
      var colorList=["#f9ff00","#E5EB01","#D4DA02","#C0C503","#AEB504","#9DA305","#898F06"];
  }
  
  return colorList;
   
 };
 
 function getColorHisto(filterColor){
     if (filterColor=='#532bf9'){
         var colorList=["#532BF9","#4C28E6","#4726D6","#4123C5","#3A20B2","#341DA2","#251678","#28187F","#191155","#191155","#0C0B31","#00070F"]
     }
     if (filterColor=='#5fffd5'){
         var colorList=["#5fffd5","#57EBC5","#51DAB7","#49C5A7","#42B297","#3CA38B","#348F7B","#2E7D6D","#266A5E","#1E564E","#184540","#113332"]
     }
     if (filterColor=="#ffa1ed"){
         var colorList=["#ffa1ed","#EB94DB","#D98ACB","#C47DB9","#B373AA","#A1679A","#8C5C88","#7A5079","#664468","#543958","#422F49","#2E2237"]
     }
     if (filterColor=="#f9ff00"){
      var colorList=["#f9ff00","#E5EB01","#D4DA02","#C0C503","#AEB504","#9DA305","#898F06","#787D07","#646A09","#52580A","#41470B","#2D330C"];
  }
     return colorList;
 }
     
  
function drawPieChartDegree(filtered_census,svg_name,color_filter){
  console.log('hello world')




  var colorPie=getColorList(color_filter);


  var new_pie_config = {};
  new_pie_config.size = {
    canvasHeight: 450,
    canvasWidth: 500,
    pieInnerRadius: 0,
    pieOuterRadius:90
}
 
  
  var degreeSegments={};
  degreeSegments.segments=colorPie
  //degreeSegments.segments=["#45E5AC","#37B88D","#00070f","#00070f","#00070f","#00070f","#00070f","#00070f","#00070f","#00070f","#00070f","#00070f","#00070f"];
  

  var degreeColors={};
//   degreeColors.colors=degreeSegments;
//   new_pie_config.misc=degreeColors;
//   new_pie_config.misc.colors.segmentstroke=('#000000');
  
     
  new_pie_config.misc={
      colors:{
          segments: colorPie,
          segmentStroke:'#ffffff'
          
      },
      
      pieCenterOffset:{
        //   x:30,
          y:-50
      },
      canvasPadding:{
          left:0,
          top:0,
          bottom:0,
          right:0
      }
      
      
  };
  
  var pie_data = count_degree(filtered_census);
  pie_data.sortOrder="value-desc"; 
  new_pie_config.labels={
    inner:{
      hideWhenLessThanPercentage:100
    },
    
    outer:{
      format: "label-percentage2",
      hideWhenLessThanPercentage: null
    },
    mainLabel: {
      color: "#ffffff",
      font: 'Work Sans',
      fontSize: 9
    },
    percentage: {
      color: "#ffffff",
      font: 'Work Sans',
      fontSize: 9,
      decimalPlaces: 0
    },
    lines: {
	   // enabled: true,
		style: "curved",
		color: "#bbbbbb" // "segment" or a hex color
	}

  };
  
  //misc.colors.segmentStroke

  new_pie_config.data = pie_data;
  var pie = new d3pie(svg_name, new_pie_config);

    
};

function drawPieChartStability(filtered_census,svg_name,color_filter){

  var colorPie=getColorList(color_filter);
  var new_pie_config = {};

  var pie_data = count_stability(filtered_census);
  new_pie_config.size = {
    canvasHeight: 450,
    canvasWidth: 500,
    pieInnerRadius: 0,
    pieOuterRadius: 90
  };
  
  new_pie_config.misc={
      colors:{
          segments: colorPie,
          segmentStroke:'#ffffff'

          
      },
      
      pieCenterOffset:{
        //   x:30,
          y:-20
      },
      
      canvasPadding:{
          left:0,
          top:0,
          bottom:0
      }
      
      
  };
  
  
  pie_data.sortOrder="value-desc"; 
  new_pie_config.labels={
    inner:{
      hideWhenLessThanPercentage:100
    },
    
    outer:{
      format: "label-percentage2",
      hideWhenLessThanPercentage: null
    },
    mainLabel: {
      color: "#ffffff",
      font: 'Work Sans',
      fontSize: 9
    },
    percentage: {
      color: "#ffffff",
      font: 'Work Sans',
      fontSize: 9,
      decimalPlaces: 0
    },
    lines: {
	   // enabled: true,
		style: "curved",
		color: "#ffffff" // "segment" or a hex color
	}

  };
  
  new_pie_config.data = pie_data;
  var pie = new d3pie(svg_name, new_pie_config);

};


// var maxSalaryOne=0;
// var maxSalaryTwo=0;

function getMax(filtered_census, idName){
  const original_salary = filtered_census.map(row => row["6"]);
  const salary= original_salary.map(row => row["row"]);
//   console.log("THIS IS MASXXXXXX SALARY")
//   var max=0
//   var i=0
//   for (i = 0; i < salary.length; i++) {
//     if (salary[i]>max) {
//       max=salary[i]
//     }
//     console.log(max)
  
//   }
  
//   max=max.toString()
//   console.log("MAXXXXXX")
//   console.log(idName)
//   console.log(max)
  var max=Math.max(...salary);
  
  document.getElementById(idName).innerHTML = max;
  

};

function getMin(filtered_census, idName){
  const original_salary = filtered_census.map(row => row["6"]);
  const salary= original_salary.map(row => row["row"]);
//   var min=salary[0]
//   console.log('minimum')
//   console.log(min);
//   var i=0;
//   for (i = 1; i < salary.length; i++) {
//     if (salary[i] < min) {
//       min=salary[i]
//       console.log('in the loop of MINNNN')
//       console.log(min)
//     }
  
//   }
//   min=min.toString()
//   console.log("MINNNNNNNN FINAL")
//   console.log(idName)
//   console.log(min)
  var min=Math.min(...salary);
  document.getElementById(idName).innerHTML = min;

};

function getMedium(filtered_census, idName){
  const original_salary = filtered_census.map(row => row["6"]);
  const salary= original_salary.map(row => row["row"]);
  var medium='';
  var length=salary.length
  console.log(length%2)
  if (length%2==0){
    var num1=length/2;
    var num2=num1-1;
    var sum=Number(salary[num1])+Number(salary[num2])
    var medium=sum/2
    console.log('MEDIUM GO INTO EVEN LOOP');
    console.log('num1and2')
    console.log(num1);
    console.log(num2);
    console.log('get num in salary')
    console.log(salary[num1])
    console.log(salary[num2])
    console.log(sum)
    console.log(medium);
    medium=Math.floor(medium)
  }
  else if (Math.floor(length % 2) == 1){
    num1=(length+1)/2
    var medium=salary[num1]
    console.log(medium);
    medium=Math.floor(medium)
    console.log('MEDIUM GO INTO ODD LOOP');
    console.log(idName);
    console.log(medium);
  }

  
  medium=medium.toString();
  
  document.getElementById(idName).innerHTML = medium;
  

};

function getFilterContent(num,idName){
    var designTypeString=interested_items[num]+'professionals in'
    var companyString=interested_items_companytype[num]+'as a(n)'
    var rolesString=interested_items_roles[num]+'working for'
    var yearsString=interested_items_years[num]
    
    var filterContent=designTypeString+companyString+rolesString+yearsString
    console.log("company String")
    console.log(companyString)
    console.log('role String')
    console.log(rolesString)
    console.log('yearsString')
    console.log(yearsString)
    document.getElementById(idName).innerHTML=filterContent
    
};




// d3.csv(years_role_csv_1).then(drawHistoSalary);
// d3.csv(years_role_csv_2).then(drawHistoSalary);
function tempfunction() {
    console.log('YEAR ROLE CSV !2222222222')
    console.log(years_role_csv_2);
    document.getElementById("compareresult").style.display = "block";
    getMax(years_role_csv_1,"salary_max1");
    getMax(years_role_csv_2,"salary_max2");
    y_axis_finder(years_role_csv_1,"histo_svg1",small_bar_colors[0]);
    y_axis_finder(years_role_csv_2,"histo_svg2",small_bar_colors[1])
    drawHistoSalary(years_role_csv_1,"histo_svg1",small_bar_colors[0]);
    drawHistoSalary(years_role_csv_2,"histo_svg2",small_bar_colors[1]);
    drawPieChartDegree(years_role_csv_1,"piechart_degree_svg1",small_bar_colors[0]);
    drawPieChartDegree(years_role_csv_2,"piechart_degree_svg2",small_bar_colors[1]);
    drawPieChartStability(years_role_csv_1,"piechart_stability_svg1",small_bar_colors[0]);
    drawPieChartStability(years_role_csv_2,"piechart_stability_svg2",small_bar_colors[1]);
    textMajor(years_role_csv_1,"text_top_3_major_one_first","text_top_3_major_one_second","text_top_3_major_one_third");
    textMajor(years_role_csv_2,"text_top_3_major_two_first","text_top_3_major_two_second","text_top_3_major_two_third");
    textTopSkill(years_role_csv_1,"text_skill_one_first","text_skill_one_second","text_skill_one_third");
    textTopSkill(years_role_csv_2,"text_skill_two_first","text_skill_two_second","text_skill_two_third");
    textAlsoGoodAt(years_role_csv_1,"text_also_good_at_one_first","text_also_good_at_one_second","text_also_good_at_one_third");
    textAlsoGoodAt(years_role_csv_2,"text_also_good_at_two_first","text_also_good_at_two_second","text_also_good_at_two_third");
    
    getMedium(years_role_csv_1,"salary_medium1");
    getMin(years_role_csv_1,"salary_min1");
    getMedium(years_role_csv_2,"salary_medium2");
    getMin(years_role_csv_2,"salary_min2");
    // getFilterContent(0,'filter_one');
    // getFilterContent(1,'filter_two');
    getFutureTrends(years_role_csv_1,"text_future_one_first","text_future_one_second","text_future_one_third");
    getFutureTrends(years_role_csv_2,"text_future_two_first","text_future_two_second","text_future_two_third");
    document.getElementById("compare").style.display = "none";
    document.getElementById("fields").style.display = "none";
    
    
    
    
};
 
function hideCharts() {
    document.getElementById("compareresult").style.display = "none";
    document.getElementById("compare").style.display = "block";
}

function displayDisclaimer(){
    document.getElementById("disclaimer").style.display = "block";
    console.log("CAN YOU JUST DISPLAY THIS PLZZZZZZZZZ?????")
}

function hideDisclaimer(){
    document.getElementById("disclaimer").style.display = "none";
    console.log("CAN YOU JUST DISPLAY THIS PLZZZZZZZZZ?????")
}


      