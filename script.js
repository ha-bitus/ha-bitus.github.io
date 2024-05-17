document.getElementById('submissionForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var email_list = document.getElementById('email').value;

    var url_list = 'https://docs.google.com/forms/d/e/1FAIpQLSey7RQ1RdcutPzqU9FeMvBjAM8WkGKf6iKsJw504usxm5SPYQ/formResponse';
    var formData = new FormData();
    formData.append('entry.1718038678', email_list);

    fetch(url_list, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
    }).then(response => {
        alert('Form submitted successfully!');
    }).catch(error => {
        alert('Error submitting form! Try again.');
    });
});
