const config = {
  name: `<div class="col-md-6 first">
            <div class="col-6 name">
              <label for="name">What's your name</label>

              <input
                id="name"
                autocomplete="off"
                type="text"
                minlength="3"
                maxlength="15"
                class="form-control"
                placeholder="Enter your name"
                name="name"
              />
            </div>
          </div>`,
  error: `<span class="error"></span>`,
  favColor: `<div class="col-6 favoriteColor">
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
       </div>`,
  hasPet: `<div class="col-6 pet">
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
                    />`,
  petName: `<div class="col-6 petname">
               <label for="petName">What is your pets name?</label>
               <input
                 type="text"
                 id="petName"
                 class="form-control"
                 autocomplete="off"
                 placeholder="Enter your pet's name"
                 name="petName"
               />
            </div>`,
  sportsFollowed: `<div class="col-6 sports">
                    <label for="sports">What sports do you follow?</label>
                    <div id="sports-list-checkbox"></div>
                  </div>`
};

$(document).ready(() => {
  console.log(config.error);

  $('.row').append(config.name);
  $('#name').keypress(e => {
    if (e.which === 13) {
      e.preventDefault();

      const name = $('#name').val();
      const nameRegex = /^[a-zA-Z ]{3,15}$/;
      const validName = nameRegex.test(name);
      $('.error').remove();

      if (name.length < 3 || name.length > 15) {
        $('#name').after(config.error);
        $('.error').text('Name can only be between 3 and 15 characters long!');
      } else if (!validName) {
        $('#name').after(config.error);
        $('.error').text('Please enter a valid name!');
      } else {
        // if valid name
        $('.col-6.name').hide();
        $('.col-md-6.first').append(config.favColor);
      }
    }
  });
});
