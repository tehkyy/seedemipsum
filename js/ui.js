document.addEventListener('DOMContentLoaded', function () {
    // Handle toggle button functionality
    document.querySelectorAll('.toggle-button').forEach(button => {
        button.addEventListener('click', function() {
            // Toggle the active state
            button.classList.toggle('active');

            // Handle the exact character count toggle specifically
            if (button.dataset.value === 'exactCharCount') {
                const exactCharGroup = document.getElementById('exactCharGroup');
                if (button.classList.contains('active')) {
                    exactCharGroup.classList.remove('hidden');
                } else {
                    exactCharGroup.classList.add('hidden');
                }
            }

            // You can add more specific handling here for other buttons
            // Example for 'startWithCornem':
            if (button.dataset.value === 'startWithCornem') {
                // Add any specific functionality you want to trigger here
            }
        });
    });
});
