document.getElementById('submissionForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var email_list = document.getElementById('email').value;

    var url_list = 'https://docs.google.com/forms/d/e/1FAIpQLSd6hvdmGvy7Xd5281G2PXnyXKWSEX9rLzK5X8P7fqL2P4H0qw/formResponse';
    var formData = new FormData();
    formData.append('entry.772505350', email_list);

    fetch(url_list, {
        method: 'POST',
        body: formData,
        // mode: 'no-cors'
    }).then(response => {
        alert('Form submitted successfully!');
    }).catch(error => {
        alert('Error submitting form! Try again.');
    });
});
