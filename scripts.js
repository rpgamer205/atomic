document.addEventListener('DOMContentLoaded', function() {
    const feedbackForm = document.getElementById('feedback-form');
    const feedbackItems = document.getElementById('feedback-items');
    const totalFeedbacksElement = document.getElementById('total-feedbacks');
    const averageProductRatingElement = document.getElementById('average-product-rating');
    const averageServiceRatingElement = document.getElementById('average-service-rating');

    let totalFeedbacks = 0;
    let totalProductRating = 0;
    let totalServiceRating = 0;

    feedbackForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Captura dos valores do formulário
        const productRating = parseInt(document.getElementById('product-rating').value);
        const serviceRating = parseInt(document.getElementById('service-rating').value);
        const comments = document.getElementById('comments').value;

        // Verifica se os campos obrigatórios estão preenchidos
        if (!productRating || !serviceRating || !comments) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        // Cálculo da média de avaliações
        totalFeedbacks++;
        totalProductRating += productRating;
        totalServiceRating += serviceRating;

        const averageProductRating = (totalProductRating / totalFeedbacks).toFixed(1);
        const averageServiceRating = (totalServiceRating / totalFeedbacks).toFixed(1);

        // Atualização dos elementos na página
        totalFeedbacksElement.textContent = totalFeedbacks;
        averageProductRatingElement.textContent = averageProductRating;
        averageServiceRatingElement.textContent = averageServiceRating;

        // Criação de um novo feedback item para exibição
        const feedbackItem = document.createElement('li');
        feedbackItem.innerHTML = `<strong>Avaliação do Produto:</strong> ${productRating} estrelas, <strong>Avaliação do Atendimento:</strong> ${serviceRating} estrelas<br><strong>Comentários:</strong> ${comments}`;
        feedbackItems.appendChild(feedbackItem);

        // Limpa o formulário após o envio
        feedbackForm.reset();
    });
});
