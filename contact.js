(function() {
    $(document).ready(function() {
        return $('#contact-form-client').submit(function(e) {
            var  email, message, name, subject;
            
            name = document.getElementById('inputName');
            email = document.getElementById('inputEmail');
            subject = document.getElementById('inputSubject');
            message = document.getElementById('inputMessage');
            if (!name.value || !email.value || !message.value || !subject.value) {
                alertify.error('Please check your entries');
                return false;
            } else {
                $.ajax({
                    method: 'POST',
                    url: 'https://formspree.io/xyynywje',
                    data: $('#contact-form-client').serialize(),
                    datatype: 'json'
                });
                e.preventDefault();
                $(this).get(0).reset();
                return alertify.success('Message sent');
            }
        });
    });

}).call(this);