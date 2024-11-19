console.log("connected");

$("#login-button").click(function (event) {
  event.preventDefault();

  let email = $("#email-address").val();
  let password = $("#password").val();
  let error = false;

  let repeatpass = $("#repeat-password").val() ?? undefined;

  if (email === "") {
    $("#email-address").addClass("is-invalid");
    error = true;
  } else {
    $("#email-address").removeClass("is-invalid");
  }

  if (password === "") {
    $("#password").addClass("is-invalid");
    error = true;
  } else {
    $("#password").removeClass("is-invalid");
  }
  console.log(repeatpass);

  if (repeatpass == "" || repeatpass !== password) {
    $("#repeat-password").addClass("is-invalid");
    error = true;
  } else {
    $("#repeat-password").removeClass("is-invalid");
  }

  if (!error) {
    $("#login-form").submit();
  }
});
