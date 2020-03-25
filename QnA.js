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
        $('.col-md-6.first').append(`<div class="col-6 favoriteColor">
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
            $('.error').remove();
            if (favoriteColor.length) {
              $('.col-6.favoriteColor').hide();
              $('.col-md-6.first').append(`<div class="col-6 pet">
              <label for="pet">Do you have a pet?</label>
              <label class="form-check-label" for="yesRadio">
                Yes
              </label>
              <input
                type="radio"
                name="exampleRadios"
                id="yesRadio"
                value="yes"
              />
              <label class="form-check-label" for="noRadio">
                No
              </label>
              <input
                type="radio"
                name="exampleRadios"
                id="noRadio"
                value="no"
              />`);
              $('.user-name').after(
                `<p class="user-fav-color">My favorite color is <span id="fav-color">${favoriteColor}</span>.</p>`
              );
              $('#fav-color').css('color', `${favoriteColor}`);

              $('#yesRadio').click(() => {
                $('.col-6.sports').hide();
                $('.col-6.pet').after(`<div class="col-6 petname">
                <label for="petName">What is your pets name?</label>
                <input
                  type="text"
                  id="petName"
                  class="form-control"
                  autocomplete="off"
                  placeholder="Enter your pet's name"
                  name="petName"
                />
              </div>`);
                $('#petName').keypress(e => {
                  if (e.which === 13) {
                    const petName = $('#petName').val();
                    const petNameRegex = /^[a-zA-Z ]{2,15}$/;
                    const validPetName = petNameRegex.test(petName);
                    $('.error').remove();
                    if (petName.length < 3 || petName.length > 15) {
                      $('#petName').after(
                        '<span class="error">Pet name can only be 3-15 characters long!</span>'
                      );
                    } else if (!validPetName) {
                      $('#petName').after(
                        '<span class="error">Please enter a valid pet name!</span>'
                      );
                    } else {
                      // Valid petname
                      $('.col-6.pet').hide();
                      $('.col-6.petname').hide();
                      $('.user-fav-color').after(
                        `<p class="user-fav-pet">I have a pet, its name is ${petName}. </p>`
                      );
                      $('.user-fav-pet').after(
                        `<img class="thank-you" src="./images/thankyou.jpeg" width="300" height="300" />`
                      );
                    }
                  }
                });
              });

              $('#noRadio').click(() => {
                $('.user-fav-color').after(
                  '<p class="user-fav-sports hidden">I follow</p>'
                );

                $('.col-6.petname').hide();
                $('.col-6.pet').after(`<div class="col-6 sports">
                <label for="sports">What sports do you follow?</label>
                <div id="sports-list-checkbox"></div>
              </div>`);
                $.get('http://api.myjson.com/bins/14sfwn', data => {
                  for (let i = 0; i < data.length; i++) {
                    $('#sports-list-checkbox').append(
                      `<div id="sportsCheckbox" class="form-check form-check-inline ">
                      <label id="sree" class="form-check-label" for="sportsCheckbox1">
                      ${data[i].name} 
                      <input name=${data[i].name} type="checkbox" id="sportsCheckbox1" class="form-check-input" 
                      value="${data[i].code}">
                      </label>
                      </div>`
                    );

                    let sportsList;
                    let unSelectedSports;
                    let sportsToRemove;

                    $(`input[name=${data[i].name}]`).click(() => {
                      if ($(`input[name=${data[i].name}]`).prop('checked')) {
                        sportsList = $('#sportsCheckbox1:checked')
                          .map(function() {
                            return $(this).attr('name');
                          })
                          .get();

                        const followedSports = sportsList
                          .map(el => el)
                          .join(', ')
                          .replace(/,([^,]*)$/, ' and$1');

                        $('.user-fav-sports.hidden').removeClass('hidden');

                        $('.user-fav-sports')
                          .html(`<span>${followedSports}</span>`)
                          .prepend(
                            `<span>I don't have a pet yet. I follow  </span>`
                          )
                          .append('.');
                      } else {
                        $('#sportsCheckbox1:not(:checked)').each(function() {
                          unSelectedSports = sportsList.filter(sport => {
                            return $(this).attr('name') === sport;
                          });
                          sportsToRemove = sportsList.filter(
                            i => !unSelectedSports.includes(i)
                          );
                        });
                        sportsList.pop(sportsToRemove);
                        const followedSports = sportsList
                          .map(el => el)
                          .join(', ')
                          .replace(/,([^,]*)$/, ' and$1');

                        $('.user-fav-sports.hidden').removeClass('hidden');

                        $('.user-fav-sports')
                          .html(`<span>${followedSports}</span>`)
                          .prepend(
                            `<span>I don't have a pet yet. I follow  </span>`
                          )
                          .append('.');

                        if (!followedSports) {
                          $('.user-fav-sports').hide();
                        }
                      }
                    });
                  }
                });
              });
            } else {
              $('#favoriteColor').after(
                '<span class="error">Please select your favorite color!</span>'
              );
            }
          }
        });

        $('.col-md-6').after(
          `<div class="col-md-6 second"><p class="user-name">Hi my name is ${name}.</p></div>`
        );
      }
    }
  });
});
