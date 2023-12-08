function definirGeoLocalizacion(instancia) {  
  const APP = {
    TOKEN: 'pk.890591643afa7bba7e01f73847cf87dc',
    SEARCHURL: `https://us1.locationiq.com/v1/search.php?format=json&`,
    REVERSEURL: `https://us1.locationiq.com/v1/reverse.php?format=json&`,
    MAPURL: `https://maps.locationiq.com/v3/staticmap?`,
    data: null,
    init: () => {},
    doSearch: () => {
      switch (instancia) {
        case "navegador":
        case "registroPaciente":
          var selectedIndexProvincia = selectProvincia.selectedIndex;
          var selectedTextProvincia = selectProvincia.options[selectedIndexProvincia].text;
    
          var selectedIndexLocalidad = selectLocalidad.selectedIndex;
          var selectedTextLocalidad = selectLocalidad.options[selectedIndexLocalidad].text;
    
          var ubicacion = selectedTextProvincia +" "+ selectedTextLocalidad +" "+ inputCalle.value +" "+ inputAltura.value;
          break;
        case "registroProfesional":
          var selectedIndexProvincia = selectProvinciaConsultorio.selectedIndex;
          var selectedTextProvincia = selectProvinciaConsultorio.options[selectedIndexProvincia].text;
    
          var selectedIndexLocalidad = selectLocalidadConsultorio.selectedIndex;
          var selectedTextLocalidad = selectLocalidadConsultorio.options[selectedIndexLocalidad].text;
    
          var ubicacion = selectedTextProvincia +" "+ selectedTextLocalidad +" "+ inputCalleConsultorio.value +" "+ inputAlturaConsultorio.value;
          break;
        default:
          break;
      }

      let q = ubicacion;
      if (!q) return false;
      let url = `${APP.SEARCHURL}key=${APP.TOKEN}&q=${q}`;
      fetch(url)
        .then((resp) => {
          if (!resp.ok) throw new Error(resp.statusText);
          return resp.json();
        })
        .then((data) => {
          APP.data = data[0];
          APP.showSearchResults();
        })
    },
    showSearchResults: () => {
      switch (instancia) {
        case "registroPaciente":
          registrarPaciente(formulario, APP.data['lat'], APP.data['lon']);
          break;
        case "registroProfesional":
          registrarProfesional(formulario, tiposConsultas, ObrasSocialesIngresadas, APP.data['lat'], APP.data['lon']);
          break;
        case "navegador":
          editarPaciente(formularioEditarPaciente, APP.data['lat'], APP.data['lon']);
        default:
          break;
        }
    },
  }; 

  APP.doSearch();
}