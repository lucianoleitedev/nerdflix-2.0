document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const menuList = document.querySelector('#main-menu ul');

    menuIcon.addEventListener('click', function () {
        // Alterna a visibilidade e o layout da lista de menu ao clicar no ícone do menu
        if (menuList.style.display === 'flex') {
            menuList.style.display = 'none';
        } else {
            const rect = menuIcon.getBoundingClientRect();
            menuList.style.display = 'flex';
            menuList.style.flexDirection = 'column'; // Muda a direção do flex para coluna
            menuList.style.position = 'fixed';
            menuList.style.top = rect.bottom + 'px';
            menuList.style.left = '0';
            menuList.style.right = '0';
            menuList.style.zIndex = '1';
        }
    });
});








