document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.carousel-nav button').forEach(button => {
        button.addEventListener('click', () => {
            const targetPage = button.dataset.page;
            const currentPage = location.pathname.split('/').pop();

            if (currentPage !== targetPage) {
                window.location.href = targetPage;
            }
        });
    });
});
