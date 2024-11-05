{
    const deviceWidthSmall = 768;
    const deviceWidthIsSmall = () => window.innerWidth <= deviceWidthSmall;

    const menuElement = document.getElementById('menu');
    const menuToggleElement = document.getElementById('menuToggle');
    const menuActiveCSSClassModifier = 'js-menu_active'; // Для показа/скрытия меню.

    menuToggleElement.addEventListener('click', function () {
        if (deviceWidthIsSmall()) {
            menuElement.classList.toggle(menuActiveCSSClassModifier);
        }
    });

    // Убираем меню, если экран становится больше `deviceWidthSmall`px.
    window.addEventListener('resize', function () {
        if (!deviceWidthIsSmall) {
            menuElement.classList.remove(menuActiveCSSClassModifier);
        }
    });
}

{
    const sliderElement = document.getElementById('percentageSlider');
    const sliderValueElement = document.getElementById('sliderValue');
    sliderElement.oninput = function () {
        sliderValueElement.innerText = this.value;
    }
}
