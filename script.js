    const orders = Array.from(document.querySelectorAll('button.order'));
    orders.forEach((order) => {
        order.addEventListener('click', function(event) {
            let classData = order.dataset['order'];
            const dropdowns = Array.from(document.querySelectorAll('.dropdown'));
            dropdowns.forEach((dropdown) => {
                if (dropdown.classList.contains(classData)) {
                    dropdown.classList.toggle('show');
                }
                else {
                    dropdown.classList.remove('show');
                }
            });
        });
    });
    
    const closes = Array.from(document.querySelectorAll('.close'));
    closes.forEach((close) => {
        close.addEventListener('click', function(event) {
            const dropdowns = Array.from(document.querySelectorAll('.dropdown'));
            dropdowns.forEach((dropdown) => {
               dropdown.classList.remove('show');
            });
        });
    });