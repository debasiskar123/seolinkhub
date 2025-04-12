const questions = document.querySelectorAll('.faq-question');

questions.forEach(question => {
  question.addEventListener('click', () => {
    const isActive = question.classList.contains('active');
    questions.forEach(q => q.classList.remove('active'));
    if (!isActive) question.classList.add('active');
  });
});