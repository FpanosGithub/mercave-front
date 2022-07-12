
function filtroReducer(state, action) {
  
  switch (action.type) {
    case 'GRABAR_FILTRO':
      return  {...state,
              filtro: action.payload.filtro,
              };

    case 'FILTRAR_EJES':
      
      const ejes_filtrados_operador = action.payload.filter
      (function (eje) {return (state.operadores.includes(eje.operador))})

      const ejes_filtrados_keeper = ejes_filtrados_operador.filter
      (function(eje){return (state.keepers.includes(eje.keeper))})

      const ejes_filtrados_fabricantes = ejes_filtrados_keeper.filter
      (function(eje){return (state.fabricantes.includes(eje.fabricante))})

      const ejes_filtrados_mantenedores = ejes_filtrados_fabricantes.filter
      (function(eje){return (state.mantenedores.includes(eje.mantenedor))})
      
      const ejes_filtrados = ejes_filtrados_mantenedores.filter
      (function(eje){return (state.versiones_ejes.includes(eje.versiones_ejes))})
      
      return {...state,
                ejes_filtrados : ejes_filtrados,
                };
    
    default:
      throw new Error();
    }
  }

  export default filtroReducer;