$(document).ready(() => {
  $.get('http://api.myjson.com/bins/14sfwn', data => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      $('#sports-list-checkbox').append(
        `<div class="form-check form-check-inline"><input type=\"checkbox\" class=\"form-check-input\" value=\"${data[i].code}\"> <label class=\"form-check-label\" for=\"inlineCheckbox1\">${data[i].name}</label></div>`
      );
    }
  });
});
