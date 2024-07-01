document.addEventListener('DOMContentLoaded', function() {
    const feedbackForm = document.getElementById('feedback-form');
    const feedbackItems = document.getElementById('feedback-items');
    const totalFeedbacksElement = document.getElementById('total-feedbacks');
    const averageProductRatingElement = document.getElementById('average-product-rating');
    const averageServiceRatingElement = document.getElementById('average-service-rating');

    let savedFeedbacks = JSON.parse(localStorage.getItem('savedFeedbacks')) || [];

    totalFeedbacksElement.textContent = savedFeedbacks.length;

    // Função para calcular a média das avaliações
    function calculateAverageRatings() {
        let totalProductRating = 0;
        let totalServiceRating = 0;

        savedFeedbacks.forEach(feedback => {
            totalProductRating += parseInt(feedback.productRating);
            totalServiceRating += parseInt(feedback.serviceRating);
        });

        const totalFeedbacks = savedFeedbacks.length;
        const averageProductRating = totalFeedbacks > 0 ? (totalProductRating / totalFeedbacks).toFixed(1) : '0';
        const averageServiceRating = totalFeedbacks > 0 ? (totalServiceRating / totalFeedbacks).toFixed(1) : '0';

        averageProductRatingElement.textContent = averageProductRating;
        averageServiceRatingElement.textContent = averageServiceRating;
    }

    // Função para exibir os feedbacks salvos
    function renderFeedbacks() {
        feedbackItems.innerHTML = '';

        savedFeedbacks.forEach((feedback, index) => {
            const feedbackItem = document.createElement('li');
            feedbackItem.innerHTML = `<strong>Avaliação do Produto:</strong> ${feedback.productRating} estrelas, <strong>Avaliação do Atendimento:</strong> ${feedback.serviceRating} estrelas<br><strong>Comentários:</strong> ${feedback.comments}`;
            feedbackItems.appendChild(feedbackItem);
        });
    }

    // Ao carregar a página, exibe os feedbacks salvos e calcula as médias
    renderFeedbacks();
    calculateAverageRatings();

    // Event listener para o formulário de feedback
    feedbackForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Captura dos valores do formulário
        const productRating = document.getElementById('product-rating').value;
        const serviceRating = document.getElementById('service-rating').value;
        const comments = document.getElementById('comments').value;

        // Verifica se os campos obrigatórios estão preenchidos
        if (!productRating || !serviceRating || !comments) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        // Salva o feedback no array de feedbacks salvos
        savedFeedbacks.push({
            productRating: productRating,
            serviceRating: serviceRating,
            comments: comments
        });

        // Salva os feedbacks atualizados no localStorage
        localStorage.setItem('savedFeedbacks', JSON.stringify(savedFeedbacks));

        // Atualiza os elementos na página
        totalFeedbacksElement.textContent = savedFeedbacks.length;
        calculateAverageRatings();
        renderFeedbacks();

        // Limpa o formulário após o envio
        feedbackForm.reset();
    });
});
