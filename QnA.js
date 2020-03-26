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
          </div>`
};

$(document).ready(() => {
  $('.row').append(config.name);
});
