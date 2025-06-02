document.addEventListener('DOMContentLoaded', function() {
    const result = document.getElementById('result');
    const personInfo = document.getElementById('personInfo');
    const personStats = document.getElementById('personStats');
    const personIcons = document.querySelectorAll('.person-icon');

    // Population data
    const population = {
        total: 100,
        men: 60,
        women: 40,
        maleMathematicians: 6,
        femaleMathematicians: 2
    };

    // Assign gender and mathematician status to each person icon
    personIcons.forEach((icon, index) => {
        // First 60 are men, rest are women
        const isMale = index < population.men;
        
        // First 6 men and first 2 women are mathematicians
        const isMathematician = 
            (isMale && index < population.maleMathematicians) || 
            (!isMale && (index - population.men) < population.femaleMathematicians);
        
        // Use neutral person icon for everyone
        icon.innerHTML = '<i class="fas fa-user"></i>';
        
        // Store data in the element for later use
        icon.dataset.personNumber = index + 1;
        icon.dataset.isMale = isMale;
        icon.dataset.isMathematician = isMathematician;
        
        // Make icon clickable
        icon.addEventListener('click', function() {
            const personNumber = parseInt(this.dataset.personNumber);
            const isMale = this.dataset.isMale === 'true';
            const isMathematician = this.dataset.isMathematician === 'true';
            
            displayResult(personNumber, isMale, isMathematician);
        });
    });

    function displayResult(personNumber, isMale, isMathematician) {
        // Remove all classes first
        personInfo.classList.remove('male', 'female', 'mathematician', 'non-mathematician');
        
        // Set the text and apply appropriate classes
        let statusText = '';
        
        if (isMale) {
            statusText = 'Nam';
            personInfo.classList.add('male');
        } else {
            statusText = 'Nữ';
            personInfo.classList.add('female');
        }
        
        if (isMathematician) {
            statusText += ' (Nhà toán học)';
            personInfo.classList.add('mathematician');
        } else {
            statusText += ' (Không phải nhà toán học)';
            personInfo.classList.add('non-mathematician');
        }
        
        personInfo.textContent = `Người #${personNumber}: ${statusText}`;
        
        // Show the result
        result.classList.remove('hidden');
    }
}); 