
    function delete_row(row){
        
        var box = $("#mb-remove-row");
        box.addClass("open");
        
        box.find(".mb-control-yes").on("click",function(){
            box.removeClass("open");
            $("#"+row).hide("slow",function(){
                $(this).remove();
            });
        });
        
    }


    function delete_dep(rowId) {
        
        var box = $("#mb-remove-row");
        box.addClass("open");

        box.find(".mb-control-yes").off("click").on("click", function () {
            box.removeClass("open");
            // AJAX call to the server to delete the row
            $.ajax({
                url: document.getElementById('del').value,  // Replace with your actual Django URL
                type: 'GET',
                data: {'id': rowId },
                dataType:"json",
                success: function (data) {
                    if (data.success) {
                        $("#" + rowId).hide("slow", function () {
                            $(this).remove();
                        });
                    } else {
                        alert(data.error);
                    }
                   
       
                },
                error: function (error) {
                    console.error('Error:', error);
                   
                }
            });
        });
    }


    function edit_row(id) {
        document.getElementById('spinner'+id).className="fa fa-spinner";
        document.getElementById('dep').value=id
            
    $.ajax({
        type: "GET",
        url: document.getElementById("urlsfooter").value,
        data:{
            'id': id
        },
        dataType: "json",
        success: function(data) {
           document.getElementById("editdepname").value=data.editname;
           document.getElementById("editdepcode").value=data.editcode;
           document.getElementById("edtdepstat").value=data.editstatus;
           $("#modal_basic").modal('show');
           document.getElementById('spinner'+id).className="fa fa-pencil";
          

        },
        error: function (error){
            console.log(error);
        } 
    });
}

function update_row() {
    
    var id = document.getElementById("dep").value;
    var editname = document.getElementById("editdepname").value;
    var editcode = document.getElementById("editdepcode").value;
    var editstatus = document.getElementById("edtdepstat").value;

    $.ajax({
        type: "GET",
        url: document.getElementById("txtpath").value, 
        data: {
            'id': id,
            'editname': editname,
            'editcode': editcode,
            'editstatus': editstatus
        },
        dataType: "json",
        success: function (data) {
            if(data.success!=''){
                alert(data.success);
                $("#modal_basic").modal('hide');
                window.location.reload(true); 
            }
            else{
                alert(data.error);
            }
        },
        error: function (error) {
            // Handle error response
            console.error('error occured:',error);
           
 
        }
    });
}


function edit_desirow(id) {
    document.getElementById('spinner'+id).className="fa fa-spinner";
    document.getElementById('des').value=id
        
$.ajax({
    type: "GET",
    url: document.getElementById("footer").value,
    data:{
        'id': id
    },
    dataType: "json",
    success: function(data) {
       document.getElementById("editdesname").value=data.editname;
       document.getElementById("editdescode").value=data.editcode;
       document.getElementById("edtdesstat").value=data.editstatus;
       $("#modal_basic").modal('show');
       document.getElementById('spinner'+id).className="fa fa-pencil";
      
      

    },
    error: function (error){
        console.log(error);
    } 
});
}

function update_desrow() {
    
    var id = document.getElementById("des").value;
    var editname = document.getElementById("editdesname").value;
    var editcode = document.getElementById("editdescode").value;
    var editstatus = document.getElementById("edtdesstat").value;

    $.ajax({
        type: "GET",
        url: document.getElementById("path").value, 
        data: {
            'id': id,
            'editname': editname,
            'editcode': editcode,
            'editstatus': editstatus
        },
        dataType: "json",
        success: function (data) {
            if(data.success!=''){
                alert(data.success);
                $("#modal_basic").modal('hide');
                window.location.reload(true); 
            }
            else{
                alert(data.error);
            }
        },
        error: function (error) {
            // Handle error response
            console.error('error occured:',error);
           
 
        }
    });
}

function delete_des(rowId) {
        
    var box = $("#mb-remove-row");
    box.addClass("open");

    box.find(".mb-control-yes").off("click").on("click", function () {
        box.removeClass("open");
        // AJAX call to the server to delete the row
        console.log("efraeh")
        $.ajax({
            url: document.getElementById('del').value,  // Replace with your actual Django URL
            type: 'GET',
            data: {'id': rowId },
            dataType:"json",
            success: function (data) {
                if (data.success) {
                    $("#" + rowId).hide("slow", function () {
                        $(this).remove();
                    });
                } else {
                    alert(data.error);
                }
               
   
            },
            error: function (error) {
                console.error('Error:', error);
               
            }
        });
    });
}
function edit_qrow(id) {
    document.getElementById('spinner'+id).className="fa fa-spinner";
    document.getElementById('qua').value=id
        
$.ajax({
    type: "GET",
    url: document.getElementById("qual").value,
    data:{
        'id': id
    },
    dataType: "json",
    success: function(data) {
       document.getElementById("editqualname").value=data.editqualname;
    //    document.getElementById("editdepcode").value=data.editcode;
       document.getElementById("edtqualstat").value=data.edtqualstat;
       $("#modal_basic").modal('show');
       document.getElementById('spinner'+id).className="fa fa-pencil";
      

    },
    error: function (error){
        console.log(error);
    } 
});
}
function update_qualrow() {
    
    var id = document.getElementById("qua").value;
    var editname = document.getElementById("editqualname").value;
    // var editcode = document.getElementById("editdescode").value;
    var editstatus = document.getElementById("edtqualstat").value;

    $.ajax({
        type: "GET",
        url: document.getElementById("qpath").value, 
        data: {
            'id': id,
            'editname': editname,
            // 'editcode': editcode,
            'editstatus': editstatus
        },
        dataType: "json",
        success: function (data) {
            if(data.success!=''){
                alert(data.success);
                $("#modal_basic").modal('hide');
                window.location.reload(true); 
            }
            else{
                alert(data.error);
            }
        },
        error: function (error) {
            // Handle error response
            console.error('error occured:',error);
           
 
        }
    });
}

function delete_qua(rowId) {
    
        
    var box = $("#mb-remove-row");
    box.addClass("open");

    box.find(".mb-control-yes").off("click").on("click", function () {
        box.removeClass("open");
        // AJAX call to the server to delete the row
        $.ajax({
            url: document.getElementById('qu').value,  // Replace with your actual Django URL
            type: 'GET',
            data: {'id': rowId },
            dataType:"json",
            success: function (data) {
                if (data.success) {
                    $("#" + rowId).hide("slow", function () {
                        $(this).remove();
                    });
                } else {
                    alert(data.error);
                }
               
   
            },
            error: function (error) {
                console.error('Error:', error);
               
            }
        });
    });
}
function edit_classrow(id) {
    document.getElementById('spinner'+id).className="fa fa-spinner";
    document.getElementById('cls').value=id
        
$.ajax({
    type: "GET",
    url: document.getElementById("class1").value,
    data:{
        'id': id
    },
    dataType: "json",
    success: function(data) {
       document.getElementById("editclassname").value=data.editclassname;
    //    document.getElementById("editdepcode").value=data.editcode;
       document.getElementById("edtclassstat").value=data.edtclassstat;
       $("#modal_basic").modal('show');
       document.getElementById('spinner'+id).className="fa fa-pencil";
      

    },
    error: function (error){
        console.log(error);
    } 
});
}
function update_classrow() {
    
    var id = document.getElementById("cls").value;
    var editname = document.getElementById("editclassname").value;
    // var editcode = document.getElementById("editdescode").value;
    var editstatus = document.getElementById("edtclassstat").value;

    $.ajax({
        type: "GET",
        url: document.getElementById("cpath").value, 
        data: {
            'id': id,
            'editname': editname,
            // 'editcode': editcode,
            'editstatus': editstatus
        },
        dataType: "json",
        success: function (data) {
            if(data.success!=''){
                alert(data.success);
                $("#modal_basic").modal('hide');
                window.location.reload(true); 
            }
            else{
                alert(data.error);
            }
        },
        error: function (error) {
            // Handle error response
            console.error('error occured:',error);
           
 
        }
    });
}

function delete_class(rowId) {
    
        
    var box = $("#mb-remove-row");
    box.addClass("open");

    box.find(".mb-control-yes").off("click").on("click", function () {
        box.removeClass("open");
        // AJAX call to the server to delete the row
        $.ajax({
            url: document.getElementById('classs').value,  // Replace with your actual Django URL
            type: 'GET',
            data: {'id': rowId },
            dataType:"json",
            success: function (data) {
                if (data.success) {
                    $("#" + rowId).hide("slow", function () {
                        $(this).remove();
                    });
                } else {
                    alert(data.error);
                }
               
   
            },
            error: function (error) {
                console.error('Error:', error);
               
            }
        });
    });
}

function edit_div(id) {
    document.getElementById('spinner'+id).className="fa fa-spinner";
    document.getElementById('div').value=id
        
$.ajax({
    type: "GET",
    url: document.getElementById("dfooter").value,
    data:{
        'id': id
    },
    dataType: "json",
    success: function(data) {
       document.getElementById("editdivname").value=data.editname;
    //    document.getElementById("editdepcode").value=data.editcode;
       document.getElementById("edtdivstat").value=data.editstatus;
       $("#modal_basic").modal('show');
       document.getElementById('spinner'+id).className="fa fa-pencil";
      

    },
    error: function (error){
        console.log(error);
    } 
});
}

function update_div() {
    
    var id = document.getElementById("div").value;
    var editname = document.getElementById("editdivname").value;
    // var editcode = document.getElementById("editdepcode").value;
    var editstatus = document.getElementById("edtdivstat").value;

    $.ajax({
        type: "GET",
        url: document.getElementById("dpath").value, 
        data: {
            'id': id,
            'editname': editname,
            // 'editcode': editcode,
            'editstatus': editstatus
        },
        dataType: "json",
        success: function (data) {
            if(data.success!=''){
                alert(data.success);
                $("#modal_basic").modal('hide');
                window.location.reload(true); 
            }
            else{
                alert(data.error);
            }
        },
        error: function (error) {
            // Handle error response
            console.error('error occured:',error);
           
 
        }
    });
}
function delete_div(rowId) {
        
    var box = $("#mb-remove-row");
    box.addClass("open");

    box.find(".mb-control-yes").off("click").on("click", function () {
        box.removeClass("open");
        // AJAX call to the server to delete the row
        $.ajax({
            url: document.getElementById('divsn').value,  // Replace with your actual Django URL
            type: 'GET',
            data: {'id': rowId },
            dataType:"json",
            success: function (data) {
                if (data.success) {
                    $("#" + rowId).hide("slow", function () {
                        $(this).remove();
                    });
                } else {
                    alert(data.error);
                }
               
   
            },
            error: function (error) {
                console.error('Error:', error);
               
            }
        });
    });
}

function edit_emp(id) {
    document.getElementById('spinner'+id).className="fa fa-spinner";
    document.getElementById('emp').value=id
        
$.ajax({
    type: "GET",
    url: document.getElementById("efooter").value,
    data:{
        'id': id
    },
    dataType: "json",
    success: function(data) {
       document.getElementById("editempname").value=data.editname;
       document.getElementById("editemparea").value=data.editcode;
       document.getElementById("edtempstat").value=data.editstatus;
       $("#modal_basic").modal('show');
       document.getElementById('spinner'+id).className="fa fa-pencil";
      

    },
    error: function (error){
        console.log(error);
    } 
});
}

function update_emp() {
    
    var id = document.getElementById("emp").value;
    var editname = document.getElementById("editempname").value;
    var editcode = document.getElementById("editemparea").value;
    var editstatus = document.getElementById("edtempstat").value;

    $.ajax({
        type: "GET",
        url: document.getElementById("etxtpath").value, 
        data: {
            'id': id,
            'editname': editname,
            'editcode': editcode,
            'editstatus': editstatus,
        },
        dataType: "json",
        success: function (data) {
            if(data.success!=''){
                alert(data.success);
                $("#modal_basic").modal('hide');
                window.location.reload(true); 
            }
            else{
                alert(data.error);
            }
        },
        error: function (error) {
            // Handle error response
            console.error('error occured:',error);
           
 
        }
    });
}

function delete_emp(rowId) {
    var box = $("#mb-remove-row");
    box.addClass("open");

    box.find(".mb-control-yes").off("click").on("click", function () {
        box.removeClass("open");
        // AJAX call to the server to delete the row
        $.ajax({
            url: document.getElementById('edel').value,  // Replace with your actual Django URL
            type: 'GET',
            data: {'id': rowId },
            dataType:"json",
            success: function (data) {
                if (data.success) {
                    $("#" + rowId).hide("slow", function () {
                        $(this).remove();
                    });
                } else {
                    alert(data.error);
                }
               
   
            },
            error: function (error) {
                console.error('Error:', error);
               
            }
        });
    });
}

// function check(){
//     checkbox= document.getElementById("cbox");
//     var checks=document.querySelectorAll('.icheck');
//     checks.forEach(function(cb){
//         cb.checked = checkbox.checked
//     })
// }

function check() {
    const checkbox = document.getElementById("cbox");
    const checks = document.querySelectorAll('.icheck');
    checks.forEach(function (cb) {
        cb.checked = checkbox.checked;
    });
}

function validateAndSubmit() {
    const checks = document.querySelectorAll('.icheck:checked');

    if (checks.length === 0) {
        alert('Please select at least one checkbox before submitting.');
        return;
    }

    // If at least one checkbox is selected, proceed with form submission
    submitForm();
}

function submitForm() {
    const form = document.getElementById("myForm");
    // Perform form submission or further processing here
    form.submit(); // Example: submit the form
}

function edit_subrow(id) {
    document.getElementById('spinner'+id).className="fa fa-spinner";
    document.getElementById('subb').value=id
        
$.ajax({
    type: "GET",
    url: document.getElementById("sfooter").value,
    data:{
        'id': id
    },
    dataType: "json",
    success: function(data) {
       document.getElementById("editsubname").value=data.editname;
    //    document.getElementById("editdepcode").value=data.editcode;
       document.getElementById("edtsubstat").value=data.editstatus;
       $("#modal_basic").modal('show');
       document.getElementById('spinner'+id).className="fa fa-pencil";
      

    },
    error: function (error){
        console.log(error);
    } 
});
}

function update_subrow() {
    var id = document.getElementById("subb").value;
    var editname = document.getElementById("editsubname").value;
    var editstatus = document.getElementById("edtsubstat").value;
// alert(id+','+editname+','+editstatus+','+document.getElementById("spath").value)
    $.ajax({
        type: "GET",
        url: document.getElementById("spath").value,
        data: {
            'id': id,
            'editname': editname,
            'editstatus': editstatus
        },
        dataType: "json",
        success: function (data) {
            if (data.success !== '') {
                alert(data.success);
                $("#modal_basic").modal('hide');
                // You may want to update specific parts of the page here instead of a full reload
                window.location.reload(true);
            } else {
                alert(data.error);
            }
        },
        error: function (error) {
            // Handle error response
            console.error('Error occurred:', error);
            alert('An error occurred. Please try again.'); // Display a user-friendly error message
        }
    });
}

function delete_sub(rowId) {
        
    var box = $("#mb-remove-row");
    box.addClass("open");

    box.find(".mb-control-yes").off("click").on("click", function () {
        box.removeClass("open");
        // AJAX call to the server to delete the row
        $.ajax({
            url: document.getElementById('sdel').value,  // Replace with your actual Django URL
            type: 'GET',
            data: {'id': rowId },
            dataType:"json",
            success: function (data) {
                if (data.success) {
                    $("#" + rowId).hide("slow", function () {
                        $(this).remove();
                    });
                } else {
                    alert(data.error);
                }
               
   
            },
            error: function (error) {
                console.error('Error:', error);
               
            }
        });
    });
}

function view_sub(id) {
    0
    document.getElementById('spinner'+id).className="fa fa-spinner";
    document.getElementById('subb').value=id
        
$.ajax({
    type: "GET",
    url: document.getElementById("sview").value,
    data:{
        'id': id
    },
    dataType: "json",
    success: function(data) {
       document.getElementById("editsubname").value=data.editname;
    //    document.getElementById("editdepcode").value=data.editcode;
       document.getElementById("edtsubstat").value=data.editstatus;
       $("#modal_basic").modal('show');
       document.getElementById('spinner'+id).className="fa fa-pencil";
      

    },
    error: function (error){
        console.log(error);
    } 
});
}
function showdrowdown(){
    var employeeType = document.getElementById("Employee").value;
    console.log(employeeType);
        var selectedValue = JSON.parse(employeeType);
        var teacherFields = document.getElementById("additionaldropdown");
        if (selectedValue.area === "2") {
            teacherFields.style.display = "block";
        } else {
            teacherFields.style.display = "none";
        }
    }
    
    function showqrcode(imageUrl){
        $('qrCodeImage').attr('src', imageUrl);
        $('qrCodeModal').modal('show');

    }