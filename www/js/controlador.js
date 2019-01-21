
$.controlador = {};

$.controlador.panel_activo = "";

/**
 * Metodo para alternar entre paneles.
 */

$.controlador.activarPanel = function (panel_nuevo) {


    $($.controlador.panel_activo).hide();
    $(panel_nuevo).show();
    $.controlador.panel_activo = panel_nuevo;

}
/**
 * Método para inicializar la aplicación
 */
$.controlador.init = function (panel_inicial) {
    $('[id ^= "menu_"]').each(function () {
        let id_menu ="#"+$(this).attr('id');
        let id_panel = id_menu.replace('menu_', 'panel_');

        $(id_menu).click($.controlador.activarPanel(id_panel));        

    });

    $(".panel").hide();
    $.controlador.activarPanel(panel_inicial);

};
