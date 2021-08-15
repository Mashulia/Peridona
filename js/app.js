$(function () {

  let nav = $('#nav'),
    contacts = $('#contacts'),
    burger = $('#burger');

  burger.on('click', function (evt) {
    evt.preventDefault();

    nav.toggleClass('show');
    contacts.toggleClass('show');
    burger.toggleClass('active');
  });
});

// Validate

new JustValidate('.form', {
  rules: {
    name: {
      minLength: 2,
      maxLength: 30
    },
    email: {
      required: true,
      email: true
    },
    text: {
      required: true
    },
  },
});

new JustValidate('.footer__form-subscription', {
  rules: {
    email: {
      required: true,
      email: true
    }
  },
});