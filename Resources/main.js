$(document).ready(function () {
  //Add row
  $(".form-add").submit(function (e) {
    e.preventDefault();
    // Get values
    let number = $("input[name= number]").val();
    let firstName = $("input[name= first-name]").val();
    let middleName = $("input[name= middle-name]").val();
    let lastName = $("input[name= last-name]").val();
    let address = $("input[name= address]").val();
    let barangay = $("input[name= barangay]").val();
    let province = $("input[name= province]").val();
    let country = $("input[name= country]").val();
    let zipcode = $("input[name= zipcode]").val();
    let department = $("#dept-select option:selected").val();
    let designation = $("#desg-select option:selected").val();
    let type = $("#type-select option:selected").val();
    let status = $("#status-select option:selected").val();

    // Append new Row
    $(".actual-table tbody").append(
      "<tr data-number='" +
        number +
        "'data-fname='" +
        firstName +
        "'data-mname='" +
        middleName +
        "'data-lname='" +
        lastName +
        "'data-address='" +
        address +
        "'data-barangay='" +
        barangay +
        "'data-province='" +
        province +
        "'data-country='" +
        country +
        "'data-zipcode='" +
        zipcode +
        "'data-department='" +
        department +
        "'data-designation='" +
        designation +
        "'data-type='" +
        type +
        "'data-status='" +
        status +
        "'><td>" +
        number +
        "</td><td>" +
        firstName +
        "</td> <td>" +
        middleName +
        "</td><td>" +
        lastName +
        "</td><td>" +
        address +
        "</td><td>" +
        barangay +
        "</td><td>" +
        province +
        "</td><td>" +
        country +
        "</td><td>" +
        zipcode +
        "</td><td>" +
        department +
        "</td><td>" +
        designation +
        "</td><td>" +
        type +
        "</td><td>" +
        status +
        "</td><td><button class='btn btn-outline-info btn-edit'>Edit</button></td><td><button class='btn btn-outline-danger btn-del'>Delete</button></td><td><button class='btn btn-outline-warning btn-leave'>Leave</button></td></tr>"
    );

    $("input").val("");
  });

  //Delete row
  $("body").on("click", ".btn-del", function () {
    $(this).parents("tr").remove();
  });

  //Edit row

  $("body").on("click", ".btn-edit", function () {
    let number = $(this).parents("tr").attr("data-number");
    let fname = $(this).parents("tr").attr("data-fname");
    let mname = $(this).parents("tr").attr("data-mname");
    let lname = $(this).parents("tr").attr("data-lname");
    let address = $(this).parents("tr").attr("data-address");
    let barangay = $(this).parents("tr").attr("data-barangay");
    let province = $(this).parents("tr").attr("data-province");
    let country = $(this).parents("tr").attr("data-country");
    let zipcode = $(this).parents("tr").attr("data-zipcode");
    let department = $(this).parents("tr").attr("data-department");
    let designation = $(this).parents("tr").attr("data-designation");
    let type = $(this).parents("tr").attr("data-type");
    let status = $(this).parents("tr").attr("data-status");

    console.log(status);

    $(this)
      .parents("tr")
      .find("td:eq(0)")
      .html(
        "<input type='text' name='edit_number' class='form-control' value='" +
          number +
          "'/> "
      );

    $(this)
      .parents("tr")
      .find("td:eq(1)")
      .html(
        "<input type='text' name='edit_fname' class='form-control' value='" +
          fname +
          "'/> "
      );

    $(this)
      .parents("tr")
      .find("td:eq(2)")
      .html(
        "<input type='text' name='edit_mname' class='form-control' value='" +
          mname +
          "'/> "
      );

    $(this)
      .parents("tr")
      .find("td:eq(3)")
      .html(
        "<input type='text' name='edit_lname' class='form-control' value='" +
          lname +
          "'/> "
      );

    $(this)
      .parents("tr")
      .find("td:eq(4)")
      .html(
        "<input type='text' name='edit_address' class='form-control' value='" +
          address +
          "'/> "
      );

    $(this)
      .parents("tr")
      .find("td:eq(5)")
      .html(
        "<input type='text' name='edit_barangay' class='form-control' value='" +
          barangay +
          "'/> "
      );

    $(this)
      .parents("tr")
      .find("td:eq(6)")
      .html(
        "<input type='text' name='edit_province' class='form-control' value='" +
          province +
          "'/> "
      );

    $(this)
      .parents("tr")
      .find("td:eq(7)")
      .html(
        "<input type='text' name='edit_country' class='form-control' value='" +
          country +
          "'/> "
      );

    $(this)
      .parents("tr")
      .find("td:eq(8)")
      .html(
        "<input type='text' name='edit_zipcode' class='form-control' value='" +
          zipcode +
          "'/> "
      );

    $(this)
      .parents("tr")
      .find("td:eq(9)")
      .html(
        "<select name='edit-department' class='form-control' id='dept-select'>" +
          '<option value="Marketing">Marketing</option>' +
          '<option value="Shipping">Shipping</option>' +
          "</select>"
      );

    $("#dept-select option[value='" + department + "']").attr(
      "selected",
      "selected"
    );

    $(this)
      .parents("tr")
      .find("td:eq(10)")
      .html(
        "<select name='edit-designation' class='form-control' id='desg-select'>" +
          '<option value="Team Leader">Team Leader</option>' +
          '<option value="Member">Member</option>' +
          "</select>"
      );

    $("#desg-select option[value='" + designation + "']").attr(
      "selected",
      "selected"
    );

    $(this)
      .parents("tr")
      .find("td:eq(11)")
      .html(
        "<select name='edit-type' class='form-control' id='type-select'>" +
          '<option value="Full-time">Full-time</option>' +
          '<option value="Part-time">Part-time</option>' +
          "</select>"
      );

    $("#type-select option[value='" + type + "']").attr("selected", "selected");

    $(this)
      .parents("tr")
      .find("td:eq(12)")
      .html(
        "<select name='edit-status' class='form-control' id='status-select' >" +
          '<option value="Active">Active</option>' +
          '<option value="Inactive">Inactive</option>' +
          '<option value="Resigned">Resigned</option>' +
          "</select>"
      );

    $("#status-select option[value='" + status + "']").attr(
      "selected",
      "selected"
    );

    $(this)
      .parents("tr")
      .find("td:eq(13)")
      .prepend("<button class='btn btn-outline-info btn-save'>Save</button>");
    $(this).hide();
  });

  // Save changes

  $("body").on("click", ".btn-save", function () {
    let number = $(this).parents("tr").find("input[name='edit_number']").val();
    let fname = $(this).parents("tr").find("input[name='edit_fname']").val();
    let mname = $(this).parents("tr").find("input[name='edit_mname']").val();
    let lname = $(this).parents("tr").find("input[name='edit_lname']").val();
    let address = $(this)
      .parents("tr")
      .find("input[name='edit_address']")
      .val();
    let barangay = $(this)
      .parents("tr")
      .find("input[name='edit_barangay']")
      .val();
    let province = $(this)
      .parents("tr")
      .find("input[name='edit_province']")
      .val();
    let country = $(this)
      .parents("tr")
      .find("input[name='edit_country']")
      .val();
    let zipcode = $(this)
      .parents("tr")
      .find("input[name='edit_zipcode']")
      .val();

    let department = $(this)
      .parents("tr")
      .find("#dept-select option:selected")
      .val();

    let designation = $(this)
      .parents("tr")
      .find("#desg-select option:selected")
      .val();

    let type = $(this).parents("tr").find("#type-select option:selected").val();

    let status = $(this)
      .parents("tr")
      .find("#status-select option:selected")
      .val();

    // Change text to new
    $(this).parents("tr").find("td:eq(0)").text(number);
    $(this).parents("tr").find("td:eq(1)").text(fname);
    $(this).parents("tr").find("td:eq(2)").text(mname);
    $(this).parents("tr").find("td:eq(3)").text(lname);
    $(this).parents("tr").find("td:eq(4)").text(address);
    $(this).parents("tr").find("td:eq(5)").text(barangay);
    $(this).parents("tr").find("td:eq(6)").text(province);
    $(this).parents("tr").find("td:eq(7)").text(country);
    $(this).parents("tr").find("td:eq(8)").text(zipcode);
    $(this).parents("tr").find("td:eq(9)").text(department);
    $(this).parents("tr").find("td:eq(10)").text(designation);
    $(this).parents("tr").find("td:eq(11)").text(type);
    $(this).parents("tr").find("td:eq(12)").text(status);

    // Change data
    $(this).parents("tr").attr("data-number", number);
    $(this).parents("tr").attr("data-fname", fname);
    $(this).parents("tr").attr("data-mname", mname);
    $(this).parents("tr").attr("data-lname", lname);
    $(this).parents("tr").attr("data-address", address);
    $(this).parents("tr").attr("data-barangay", barangay);
    $(this).parents("tr").attr("data-province", province);
    $(this).parents("tr").attr("data-country", country);
    $(this).parents("tr").attr("data-zipcode", zipcode);
    $(this).parents("tr").attr("data-department", department);
    $(this).parents("tr").attr("data-desination", designation);
    $(this).parents("tr").attr("data-type", type);
    $(this).parents("tr").attr("data-status", status);

    // Button switch
    $(this).parents("tr").find(".btn-edit").show();
    $(this).parents("tr").find(".btn-save").remove();
    console.log(status);
  });

  // Change div lists
  var employeeDivBtn = $(".employee-list-btn");
  var leaveDivBtn = $(".leave-list-btn");
  var signatoriesBtn = $(".signatories-list-btn");
  var employeeDiv = $(".employee-list-container");
  var leaveDiv = $(".leave-list-container");
  var signatoriesDiv = $(".signatories-list-container");

  employeeDivBtn.on("click", function () {
    employeeDiv.css("display", "block");
    leaveDiv.css("display", "none");
    signatoriesDiv.css("display", "none");
    employeeDivBtn.addClass("active");
    leaveDivBtn.removeClass("active");
    signatoriesBtn.removeClass("active");
  });

  leaveDivBtn.on("click", function () {
    leaveDiv.css("display", "block");
    employeeDiv.css("display", "none");
    signatoriesDiv.css("display", "none");
    employeeDivBtn.removeClass("active");
    leaveDivBtn.addClass("active");
    signatoriesBtn.removeClass("active");
  });

  signatoriesBtn.on("click", function () {
    signatoriesDiv.css("display", "block");
    leaveDiv.css("display", "none");
    employeeDiv.css("display", "none");
    employeeDivBtn.removeClass("active");
    leaveDivBtn.removeClass("active");
    signatoriesBtn.addClass("active");
  });

  // Leave-btn-modal
  var exitModal = $(".exit-modal");
  var leaveModalContainer = $(".leave-modal-container");
  var leaveModal = $(".leave-modal");
  var overlay = $(".overlay");
  var signatoriesModalContainer = $(".signatories-modal-container");
  var signatoriesModal = $(".singatories-modal");

  // Exit modal
  exitModal.on("click", function () {
    leaveModal.css("display", "none");
    leaveModalContainer.css("display", "none");
    signatoriesModal.css("display", "none");
    signatoriesModalContainer.css("display", "none");
    overlay.css("display", "none");
  });

  overlay.on("click", function () {
    leaveModal.css("display", "none");
    leaveModalContainer.css("display", "none");
    overlay.css("display", "none");
    signatoriesModal.css("display", "none");
    signatoriesModalContainer.css("display", "none");
  });

  // Show modal
  $("body").on("click", ".btn-leave", function () {
    leaveModal.css("display", "block");
    leaveModalContainer.css("display", "block");
    overlay.css("display", "block");
  });

  $("body").on("click", ".add-signatories-btn", function () {
    signatoriesModalContainer.css("display", "block");
    signatoriesModal.css("display", "block");
    overlay.css("display", "block");
  });
});
