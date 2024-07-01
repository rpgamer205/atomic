// Executa o código quando o DOM estiver totalmente carregado
document.addEventListener('DOMContentLoaded', () => {
    // Obtém os elementos do formulário e seções de feedback
    const feedbackForm = document.getElementById('feedback-form');
    const feedbackList = document.getElementById('feedback-items');
    const totalFeedbacks = document.getElementById('total-feedbacks');
    const averageRating = document.getElementById('average-rating');
    const fiveStarCount = document.getElementById('five-star-count');

    // Array para armazenar os feedbacks
    let feedbacks = [];

    // Adiciona um evento ao formulário de feedback
    feedbackForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Obtém os valores dos campos do formulário
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const rating = parseInt(document.getElementById('rating').value);
        const comments = document.getElementById('comments').value;

        // Cria um objeto de feedback
        const feedback = { name, email, rating, comments };
        // Adiciona o feedback ao array
        feedbacks.push(feedback);

        // Atualiza a lista de feedbacks e estatísticas
        updateFeedbackList();
        updateStatistics();

        // Limpa o formulário
        feedbackForm.reset();
    });

    // Atualiza a lista de feedbacks na tela
    function updateFeedbackList() {
        feedbackList.innerHTML = '';
        feedbacks.forEach(feedback => {
            const listItem = document.createElement('li');

            // Cria elementos para nome, estrelas e comentários
            const nameElement = document.createElement('span');
            nameElement.className = 'name';
            nameElement.textContent = feedback.name;

            const starsElement = document.createElement('span');
            starsElement.className = 'stars';
            starsElement.textContent = '⭐'.repeat(feedback.rating);

            const commentsElement = document.createElement('p');
            commentsElement.textContent = feedback.comments;

            // Adiciona os elementos ao item da lista
            listItem.appendChild(nameElement);
            listItem.appendChild(starsElement);
            listItem.appendChild(commentsElement);

            feedbackList.appendChild(listItem);
        });
    }

    // Atualiza as estatísticas de feedback
    function updateStatistics() {
        const total = feedbacks.length;
        const average = feedbacks.reduce((acc, curr) => acc + curr.rating, 0) / total || 0;
        const fiveStar = feedbacks.filter(f => f.rating === 5).length;

        totalFeedbacks.textContent = total;
        averageRating.textContent = average.toFixed;
    }
});
