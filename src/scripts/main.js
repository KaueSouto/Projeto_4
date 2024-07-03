$(document).ready(function () {
    // Esconde o header quando a página é rolada para baixo além da altura do elemento .hero
    function handleScroll() {
        let heroHeight = document.querySelector(".hero").clientHeight;
        $(window).on("scroll", function () {
            let scrollTop = $(this).scrollTop();
            if (heroHeight > scrollTop) {
                $("header").addClass("header--is-hidden");
            } else {
                $("header").removeClass("header--is-hidden");
            }
        });
    }

    // Mostra/Esconde as informações do item da biblioteca ao passar o mouse
    function handleBibliotecaItemHover() {
        $(".biblioteca__item").on("mouseenter", function () {
            $(this).find(".biblioteca__item__info").css({ opacity: "1", visibility: "visible" });
        }).on("mouseleave", function () {
            $(this).find(".biblioteca__item__info").css({ opacity: "0", visibility: "hidden" });
        });
    }

    // Alterna entre abas nos botões de tabulação
    function handleTabButtonClick() {
        $("[data-tab-button]").on("click", function () {
            let tabId = $(this).data("tab-button");
            let tabContent = $(`[data-tab-id="${tabId}"]`);

            $("[data-tab-id]").removeClass("is-active");
            tabContent.addClass("is-active");

            $("[data-tab-button]").removeClass("tabs__button--is-active");
            $(this).addClass("tabs__button--is-active");
        });
    }

    // Alterna entre categorias nos botões de tabulação
    function handleTabCategoriaClick() {
        $("[data-tab-categoria]").on("click", function () {
            let categoriaId = $(this).data("tab-categoria");
            let categoriaContent = $(`[data-tab-id="${categoriaId}"]`);

            $("[data-tab-id]").removeClass("categoria-ativa");
            categoriaContent.addClass("categoria-ativa");

            $("[data-tab-categoria]").removeClass("tabs__button--is-active");
            $(this).addClass("tabs__button--is-active");
        });
    }

    // Inicializa todas as funções
    function init() {
        handleScroll();
        handleBibliotecaItemHover();
        handleTabButtonClick();
        handleTabCategoriaClick();
    }

    // Chama a função de inicialização
    init();
});
