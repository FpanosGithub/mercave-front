
function seleccionReducer(state, action) {

  switch (action.type) {
    case 'SELECCIONAR_MENU':
      return {...state,
                menu:action.payload,
                seleccion_eje:'todos',
                seleccion_vagon:'todos',
                seleccion_bogie:'todos',
                seleccion_cambiador:'todos', 
                };
    case 'SELECCIONAR_EJE':
      return {...state, seleccion_eje:action.payload};
    case 'SELECCIONAR_VAGON':
      return {...state, seleccion_vagon:action.payload};
    case 'SELECCIONAR_BOGIE':
      return {...state, seleccion_bogie:action.payload};
    case 'SELECCIONAR_CAMBIADOR':
      return {...state, seleccion_cambiador:action.payload};
    default:
      throw new Error();
    }
  }

  export default seleccionReducer;