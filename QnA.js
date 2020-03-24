$(document).ready(() => {
  $('#name').keypress(e => {
    if (e.which === 13) {
      e.preventDefault();

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
        // if valid name
        $('.col-6.name').hide();
        $('.col-md-6').append(`<div class="col-6 favoriteColor">
        <label for="favoriteColor">What's your favorite color?</label>
        <input
          id="favoriteColor"
          class="form-control"
          placeholder="Select a color"
          list="colors"
          autocomplete="off"
          name="favoriteColor"
        />

        <datalist id="colors">
          <option value="vi">Violet</option>
          <option value="Indigo">Indigo</option>
          <option value="Blue">Blue</option>
          <option value="Green">Green</option>
          <option value="Yellow">Yellow</option>
          <option value="Orange">Orange</option>
          <option value="Red">Red</option>
          <option value="Pink">Pink</option>
          <option value="Gray">Gray</option>
          <option value="Black">Black</option>
          <option value="Purple">Purple</option>
          <option value="Aqua">Aqua</option>
          <option value="Amber">Amber</option>
          <option value="Maroon">Maroon</option>
          <option value="Brown">Brown</option>
        </datalist>
      </div>`);
        $('#favoriteColor').keyup(e => {
          if (e.which === 13) {
            const favoriteColor = $('#favoriteColor').val();
            if (favoriteColor.length) {
              $('.col-6.favoriteColor').hide();
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
        $('.col-md-6').after(
          `<div class="col-md-6 second"><p class="user-name">Hi my name is ${name}.</p></div>`
        );
      }
    }
  });

  $.get('http://api.myjson.com/bins/14sfwn', data => {
    for (let i = 0; i < data.length; i++) {
      $('#sports-list-checkbox').append(
        `<div class="form-check form-check-inline"><input type=\"checkbox\" class=\"form-check-input\" value=\"${data[i].code}\"> <label class=\"form-check-label\" for=\"inlineCheckbox1\">${data[i].name}</label></div>`
      );
    }
  });
});
