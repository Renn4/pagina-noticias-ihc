const noticias = [
    { id: 1, tamaño: 'pequeña', contenido: 'Noticia 1' },
    { id: 2, tamaño: 'pequeña', contenido: 'Noticia 2' },
    { id: 3, tamaño: 'grande', contenido: 'Noticia 3' },
    { id: 4, tamaño: 'pequeña', contenido: 'Noticia 4' },
    { id: 5, tamaño: 'pequeña', contenido: 'Noticia 5' },
    { id: 6, tamaño: 'grande', contenido: 'Noticia 6' },
    { id: 7, tamaño: 'grande', contenido: 'Noticia 7' },
    { id: 8, tamaño: 'pequeña', contenido: 'Noticia 8' },
    { id: 9, tamaño: 'pequeña', contenido: 'Noticia 9' },
    { id: 10, tamaño: 'pequeña', contenido: 'Noticia 10' }
  ];

const noticiasPequenas = noticias.filter(noticia => noticia.tamaño === 'pequeña');
const noticiasGrandes = noticias.filter(noticia => noticia.tamaño === 'grande');

const distribuirNoticiasAleatoriamente = () => {
    
    const filas = [];
    let filaActual = [];
    let restantesPequenas = [...noticiasPequenas];
    let restantesGrandes = [...noticiasGrandes];
  
    while (restantesPequenas.length > 0 || restantesGrandes.length > 0) {
        // Si la fila está llena (4 elementos), la añadimos y empezamos una nueva
        if (filaActual.length === 4) {
          filas.push(filaActual);
          filaActual = [];
        }
    
        // Ahora distribuimos las noticias de manera aleatoria, respetando las reglas:
        const espacioLibre = 4 - filaActual.length;
    
        if (espacioLibre >= 2 && restantesGrandes.length > 0) {
          // Caso 1: Si hay 2 o más espacios libres y hay noticias grandes disponibles
          if (Math.random() < 0.5) {
            // 50% de probabilidad de agregar una noticia grande
            const noticiaGrande = restantesGrandes.pop();
            filaActual.push(noticiaGrande);
          } else {
            // Si no se eligió una grande, agregar una noticia pequeña
            const noticiaPequena = restantesPequenas.pop();
            filaActual.push(noticiaPequena);
          }
        } else if (espacioLibre === 1 && restantesPequenas.length > 0) {
          // Caso 2: Si solo queda 1 espacio libre, agregar una noticia pequeña
          const noticiaPequena = restantesPequenas.pop();
          filaActual.push(noticiaPequena);
        } else if (espacioLibre > 0 && restantesPequenas.length > 0) {
          // Caso 3: Si hay espacio libre, agregar una noticia pequeña
          const noticiaPequena = restantesPequenas.pop();
          filaActual.push(noticiaPequena);
        }
    }
  
    // Si queda una fila incompleta al final, la añadimos
    if (filaActual.length > 0) {
      filas.push(filaActual);
    }
  
    return filas;
  };

  const filasNoticias = distribuirNoticiasAleatoriamente();

  return (
    <div className="contenedor-grid-noticias">
      {filasNoticias.flat().map((noticia, i) => (
        noticia.tamaño === 'grande' ? (
          <CartaNoticiaGrande key={i} contenido={noticia.contenido} tamañoTexto={tamañoTexto} confContraste={confContraste} />
        ) : (
          <CartaNoticia key={i} contenido={noticia.contenido} tamañoTexto={tamañoTexto} confContraste={confContraste}/>
        )
      ))}
    </div>
  );