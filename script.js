document.addEventListener('DOMContentLoaded', function () {
    console.log('Скрипт успешно подключен.');

    document.querySelectorAll('.cta a').forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            console.log('Клик по кнопке: ' + btn.textContent);
        });
    });
});
