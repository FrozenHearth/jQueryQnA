$(document).ready(() => {
  $.get('http://api.myjson.com/bins/14sfwn', data => {
    for (let i = 0; i < data.length; i++) {
      $('#sports-list-checkbox').append(
        `<div class="form-check form-check-inline"><input type=\"checkbox\" class=\"form-check-input\" value=\"${data[i].code}\"> <label class=\"form-check-label\" for=\"inlineCheckbox1\">${data[i].name}</label></div>`
      );
    }
  });
  $('#name').keypress(e => {
    if (e.which === 13) {
      const name = $('#name').val();
      const nameRegex = /^[a-zA-Z ]{3,15}$/;
      const validName = nameRegex.test(name);

      $('.error').remove();

      if (name.length < 3 || name.length > 15) {
        $('#name').after(
          '<span class="error">Name can only be 3-15 characters long!</span>'
        );
      } else if (!validName) {
        $('#name').after(
          '<span class="error">Please enter a valid name!</span>'
        );
      } else {
        $('.col-4.name').remove();
        $('.col-md').after(
          `<div class="col-md second"><p class="user-name">Hi my name is ${name}.</p></div>`
        );
      }
    }
  });
  $('#favoriteColor').keypress(e => {
    if (e.which === 13) {
      const favoriteColor = $('#favoriteColor').val();
      if (favoriteColor.length) {
        $('.col-4.favoriteColor').remove();
        $('.user-name').after(
          `<span>My favorite color is ${favoriteColor}.</span>`
        );
      } else {
        $('#favoriteColor').after(
          '<span class="error">Please select your favorite color!</span>'
        );
      }
    }
  });
  $('#favoriteColor').blur(() => {
    const favoriteColor = $('#favoriteColor').val();
    if (!favoriteColor.length) {
      $('#favoriteColor').after(
        '<span class="error">Please select your favorite color!</span>'
      );
    } else if (favoriteColor.length) {
      $('.error').remove();
    }
  });
});
