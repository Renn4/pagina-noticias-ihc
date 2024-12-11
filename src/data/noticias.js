/*
    Componentes básicos de una noticia:
    - imagen
    - titulo
    - parrafo
    - autor
    - fecha

    Componentes adicionales de una noticia grande:
    -parrafoSecundario

    Componentes de un artículo:
    - introduccion
    - cuerpo
    - imagen (misma que la de la portada)
    - descripcionDeImagen

    Componentes de un reportaje:
    - imagen (misma que portada)
    - descripcionImagen1
    - cuerpo1
    - imagen2
    - descripcionImagen2
    - textoImagen2
    - cuerpo2
    - imagen3
    - descripcionImagen3
    - textoImagen3

    Componentes de un video:
    - imagen (para portada)
    - video
    - descripcionDeVideo
    - cuerpo

    Componentes de un podcast:
    - 
*/ 

const noticias = [
    { 
        /* economia - articulo */
        id: 1, tamaño: 'grande', 
        contenido: {
            tipo: 'articulo', 
            categoria: 'economía', 
            titulo: 'Cómo la Inflación Impacta en el Poder Adquisitivo de las Familias',
            parrafo: 'La inflación es uno de los fenómenos económicos más debatidos y con mayor impacto en la vida cotidiana de las familias.',
            parrafoSecundario: 'Cuando los precios suben de manera sostenida, el poder adquisitivo de los hogares disminuye, limitando su capacidad para cubrir necesidades básicas y ahorrar para el futuro.',
            autor: 'Geronimo Manzini',
            introduccion: 'El panorama económico actual está marcado por cambios profundos. Desde la innovación tecnológica hasta la transición hacia energías renovables, los sectores productivos enfrentan nuevos desafíos y oportunidades. Mientras tanto, las tasas de inflación y las políticas monetarias siguen influyendo en las decisiones de consumidores y empresas. En este contexto, analizar las dinámicas económicas globales resulta crucial para comprender las tendencias que definirán el futuro. Por ello, este artículo explora cómo diferentes factores, como el comercio internacional, el mercado laboral y la inversión en tecnología, están configurando una nueva era económica.',
            cuerpo: 'La economía global está atravesando un período de transformaciones significativas impulsadas por diversos factores, desde avances tecnológicos hasta transiciones en los modelos energéticos. La adopción de tecnologías disruptivas, como la inteligencia artificial y el blockchain, no solo está modificando la forma en que operan las empresas, sino también influyendo en la estructura de los mercados laborales. Al mismo tiempo, la presión para adoptar prácticas sostenibles está llevando a un rediseño en sectores clave como la energía y la manufactura, lo que abre nuevas oportunidades de inversión pero también plantea retos regulatorios. Por otro lado, las políticas monetarias implementadas para controlar la inflación están teniendo efectos mixtos en diferentes regiones. Mientras que algunos países logran estabilizar sus economías, otros enfrentan desaceleraciones y mayores niveles de desigualdad. El comercio internacional, tradicionalmente un motor de crecimiento, también muestra signos de tensión debido a conflictos geopolíticos y a la creciente tendencia hacia la regionalización. Estas dinámicas ponen de manifiesto la necesidad de estrategias más colaborativas y flexibles para gestionar las incertidumbres económicas. En este contexto, las empresas y los gobiernos deben adaptarse rápidamente para mantenerse competitivos. La inversión en innovación, la diversificación de mercados y el fortalecimiento de políticas sociales son herramientas clave para garantizar un crecimiento sostenible. Este análisis busca explorar cómo estas tendencias están configurando una economía más compleja y dinámica, donde los actores deben estar preparados para aprovechar las oportunidades sin perder de vista los riesgos inherentes a este nuevo escenario.',
            imagen: 'https://media.istockphoto.com/id/1399575283/photo/money-makes-the-world-go-round.jpg?s=612x612&w=0&k=20&c=RkaZ8Vb_7zN7AvlaBSJ3rj-3YxdQFHODQ5F25xlZ1tM=',
            descripcionDeImagen: 'Ilustración de un globo terráqueo rodeado de monedas.',
            fecha: '10/10/14',
        }
    },
    { 
        /* economia - reportaje */
        id: 2, tamaño: 'pequeña', 
        contenido: {
            tipo: 'reportaje', 
            categoria: 'economía',
            titulo: 'El Auge de las Startups Fintech: Transformando la Economía Global',
            parrafo: 'Las startups fintech están revolucionando la economía mundial, ofreciendo soluciones innovadoras que simplifican pagos, créditos y servicios financieros.',
            imagen: 'https://fotos.perfil.com/2024/07/25/trim/876/492/fintechs-1842044.jpg',
            descripcionDeImagen: 'Una imagen de CGI de un globo terráqueo rodeado de monedas.',
            descripcionImagen1: 'Las tecnologías Fintech son aquellas que nutren a los sistemas bancarios digitales.',
            cuerpo1:'En los últimos años, las startups fintech han emergido como una fuerza transformadora en la economía global. Estas empresas innovadoras están redefiniendo la forma en que interactuamos con el dinero, ofreciendo soluciones accesibles para pagos, financiamiento, ahorro y más. Al democratizar los servicios financieros, han logrado conectar a comunidades desatendidas, promover la inclusión financiera y agilizar procesos que antes eran lentos y costosos. Este auge no solo está cambiando la industria financiera, sino que también está impulsando nuevas oportunidades económicas a escala mundial.',
            imagen2: 'https://finnovating.com/wp-content/uploads/2021/10/Mapa-argentina-insside.png',
            descripcionImagen2: 'Mapa de startups Fintech en Argentina.',
            textoImagen2: 'Las startups fintech han puesto a disposición herramientas que antes eran exclusivas de grandes corporaciones o instituciones financieras tradicionales. Desde aplicaciones de pagos instantáneos hasta plataformas de inversión accesibles para el usuario promedio, estas empresas han hecho que las finanzas sean más fáciles de entender y manejar. Para las pequeñas y medianas empresas, la posibilidad de acceder a financiamiento alternativo ha sido clave para impulsar su crecimiento en un entorno competitivo.',
            cuerpo2: 'Con el uso de inteligencia artificial, blockchain y big data, las fintech están resolviendo problemas complejos de manera eficiente. Por ejemplo, los algoritmos de aprendizaje automático han optimizado los sistemas de crédito, permitiendo evaluaciones más precisas de riesgo en tiempo real. Por otro lado, el blockchain garantiza transacciones seguras y transparentes, eliminando intermediarios y reduciendo costos para los usuarios.',
            imagen3:'https://www.semana.com/resizer/v2/6TSCIYKFA5FXLN7GDB6P3BOX6Q.jpg?auth=7cf885d8b11d6f7ac1b4dd55843797eb3655f1a1addee489f70d2129c4969ba6&smart=true&quality=75&width=1280&height=720',
            descripcionImagen3: 'El uso de las tecnologías Fintech es improtante en el portafolio de cualquier financiera.',
            textoImagen3: 'Aunque el sector fintech está lleno de promesas, también enfrenta desafíos significativos, como la regulación y la ciberseguridad. La necesidad de adaptarse a marcos regulatorios en constante evolución y garantizar la protección de datos personales son prioridades críticas para estas empresas. A medida que el sector madura, se espera que las fintech se conviertan en un pilar esencial de la economía, integrándose con las instituciones financieras tradicionales para ofrecer soluciones híbridas que beneficien a todos los sectores de la sociedad.',
            autor: 'Martín Peralta Grandi',
            fecha: '29/11/22',
        }
    }, 
    { 
        /* economia - video */
        id: 3, tamaño: 'grande', 
        contenido: {
            tipo: 'video', 
            categoria: 'economía', 
            titulo: '¿Puede la economía argentina crecer al 8,5%?',
            imagen: 'https://img.youtube.com/vi/SbR632MRVEs/hqdefault.jpg',
            descripcionDeImagen: 'Una foto del ministro Luis Caputo.',
            parrafo: 'Según JP Morgan, el PIB argumento crecerá a una tasa anualizada del 8,5% en el tercer trimestre de este año. ¿Es una estimación realista?',
            parrafoSecundario: 'Este pronóstico se basa en una combinación de factores, como un incremento en la actividad agrícola tras una temporada de sequías, una recuperación en el consumo interno impulsada por medidas económicas recientes y un repunte en las exportaciones.',
            video: 'https://www.youtube.com/embed/SbR632MRVEs?si=hr7Ibq46LpmcnfNz',
            descripcionDeVideo: 'Análisis de los dichos de JP Morgan sobre la situación económica de Argentina. ',
            cuerpo:'Según JP Morgan, el Producto Interno Bruto (PIB) de Argentina crecerá a una tasa anualizada del 8,5% en el tercer trimestre de este año. Esta proyección, sorprendente para muchos, surge en un contexto económico marcado por desafíos estructurales, alta inflación y una fuerte volatilidad en los mercados internacionales. Pero, ¿qué tan realista es esta estimación y qué factores la respaldan? Por un lado, el informe destaca un aumento significativo en la actividad agrícola, especialmente en la producción de soja y maíz, tras las lluvias que ayudaron a revertir parcialmente los efectos de una sequía prolongada. Este sector, históricamente clave para la economía argentina, ha contribuido no solo al crecimiento del PIB, sino también a una mejora en las exportaciones, generando divisas vitales para un país con restricciones cambiarias. Además, el consumo interno ha mostrado signos de recuperación. Las recientes medidas del gobierno, como bonos salariales y subsidios a sectores vulnerables, parecen haber incentivado el gasto en el corto plazo. El aumento en la actividad comercial y el turismo interno también han jugado un rol importante en dinamizar la economía. Sin embargo, el panorama no es del todo alentador. Los niveles de inflación siguen siendo alarmantemente altos, erosionando el poder adquisitivo de la población y generando incertidumbre en las inversiones a largo plazo. Por otra parte, las reservas internacionales del Banco Central siguen bajo presión, y las expectativas de devaluación generan tensiones en el mercado cambiario. Los analistas coinciden en que, si bien es posible que el PIB crezca al 8,5% en el tercer trimestre, esto podría ser un rebote puntual más que un indicador de recuperación sostenida. "El crecimiento a esta tasa es factible en un trimestre específico, pero la sostenibilidad dependerá de una combinación de políticas que aborden los problemas estructurales, como la inflación, la deuda y la falta de confianza en el mercado financiero", explicó un economista local. En definitiva, la proyección de JP Morgan invita a reflexionar sobre las potencialidades y limitaciones de la economía argentina en un año decisivo. Si bien hay señales positivas, el camino hacia una recuperación sólida y duradera sigue lleno de desafíos.',
            autor: 'Sebastián Manzini',
            fecha: '02/04/24'
        }
    },
    { 
        /* economia - podcast */
        id: 4, tamaño: 'pequeña', 
        contenido: {
            tipo: 'podcast', 
            categoria: 'economía',  
            titulo: 'Oferta y demanda, y la clasificación de bienes y servicios',
            imagen: 'https://i.scdn.co/image/ab6765630000ba8a10ab3cbf25ef67fbf892374e',
            descripcionDeImagen: 'Una carátula representativa del canal de youtube del autor, Economía Para Novatos',
            parrafo: 'Nueva entrega de Economía Para Novatos, un podcast educacional sobre el tema.',
            podcastUrl: 'https://open.spotify.com/embed/episode/4q4QoBlhIsymtdcTgLMnHu?utm_source=generator',
            cuerpo: 'En esta nueva entrega vamos a analizar la teoría más famosa de la economía: La oferta y la demanda. Además, vamos a explicar dos tipos de clasificaciones de bienes y servicios: Sustitutos y complementarios y normales, inferiores y superiores. Espero que os ayude a entender todo un poco más! Gracias por escucharme!',
            autor: 'Gustavo Cerati',
            fecha: '09/11/24'
        }
    },
    
    {
        /* politica - articulo */
        id: 5, tamaño: 'pequeña', 
        contenido: {
            tipo: 'articulo', 
            categoria: 'política',
            titulo: '¿Cuántos políticos se necesitan para poner un foquito?',
            parrafo: 'Quizás el resultado te sorprenda.',
            introduccion: 'En el complicado mundo de la política, las decisiones más simples pueden convertirse en procesos interminables. Desde debates acalorados hasta comités especiales, todo parece más difícil de lo que debería. Pero, ¿qué pasa cuando se trata de algo tan básico como cambiar un foco? Quizás el resultado te sorprenda.',
            cuerpo: 'Tras largas deliberaciones, los políticos finalmente acuerdan un plan para cambiar el foco. Primero, deben definir quién asumirá la responsabilidad de supervisar el proceso, lo que genera otra ronda de debates. Algunos proponen la creación de un comité especializado, mientras otros sugieren que sea parte de una nueva iniciativa nacional de eficiencia energética. Cada propuesta, por supuesto, viene acompañada de informes detallados, consultas con expertos y encuestas a la ciudadanía para garantizar transparencia y respaldo popular. Cuando finalmente se selecciona el modelo de foco, otro conflicto surge: ¿debería ser un LED por su eficiencia, o un incandescente por nostalgia histórica? La discusión se torna aún más técnica, abarcando desde el nivel de emisión lumínica hasta el impacto psicológico del color de la luz en el bienestar de los ciudadanos. La prensa, por su parte, sigue cada paso con titulares que van desde lo cómico hasta lo indignado, convirtiendo el cambio del foco en un tema de interés nacional. Finalmente, llega el día de la instalación. Un grupo de técnicos, rodeados de políticos y cámaras, realiza la tarea en lo que debería haber sido un sencillo acto de mantenimiento. Sin embargo, la ceremonia incluye discursos, aplausos y hasta un momento de silencio en honor al antiguo foco. Y así, algo tan trivial se convierte en un reflejo perfecto de cómo las instituciones pueden transformar lo cotidiano en un espectáculo digno de análisis.',
            imagen: 'https://media.istockphoto.com/id/1422527508/photo/adult-man-wearing-light-bulb.jpg?s=612x612&w=0&k=20&c=pl0vgHo4gqMhOh5w9zJtI5yzoQXSu7R1F1qklptO_js=',
            descripcionDeImagen: 'Hombre colocando un foquito.',
            fecha: '03/04/19',
            autor: 'Gustavo Ariel Peralta',
        }
    },
    {
        /* politica - reportaje */
        id: 6, tamaño: 'pequeña',
        contenido: {
            tipo: 'reportaje', 
            categoria: 'política', 
            titulo: 'El Impacto de la Reforma Electoral en las Elecciones Locales',
            parrafo: 'En un entorno político marcado por la polarización y los debates legislativos, la reciente reforma electoral aprobada por el Congreso ha generado una ola de controversias.',
            imagen: 'https://www.utdt.edu/imagen/_170619778936502200.jpg',
            descripcionDeImagen: 'Un ciudadano efectuando su voto en la urna.',
            descripcionImagen1: 'Un ciudadano efectuando su voto en la urna.',
            cuerpo1: 'La ley propone modificaciones en aspectos clave del proceso electoral: Redistribución de Distritos Electorales: Con el objetivo de ajustar la representación en función de los censos actualizados, algunos distritos rurales se fusionarán, mientras que los urbanos verán un aumento en su representación. Críticos aseguran que esta medida podría disminuir la voz de las comunidades más pequeñas. Digitalización del Proceso Electoral: La implementación de urnas electrónicas busca agilizar el conteo de votos y reducir los errores humanos, pero ha despertado dudas sobre la ciberseguridad y el acceso desigual a la tecnología en zonas rurales. Límites al Financiamiento de Campañas: Se reducen los topes de gasto para los candidatos, una medida que busca nivelar el campo de juego pero que podría dificultar la visibilidad de candidatos independientes.',
            imagen2: 'https://media.lmneuquen.com/p/fbf9a09564f40f99c3028880595c8261/adjuntos/195/imagenes/007/735/0007735318/770x0/smart/congreso-1jpg.jpg',
            descripcionImagen2: 'El congreso ha aprobado las reformas en la última mesa.',
            textoImagen2: 'Los partidos de oposición han señalado que la reforma beneficia a la coalición gobernante al alterar las reglas a mitad del juego. "Esto no es una modernización, es una manipulación para perpetuarse en el poder", declaró la líder de un partido opositor en un reciente mitin. Por otro lado, el gobierno asegura que la reforma es una herramienta para garantizar elecciones más transparentes y representativas.',
            cuerpo2: 'En las calles, las opiniones están divididas. Ana López, una comerciante de 45 años, expresó su preocupación: "No entiendo cómo funcionará la urna electrónica. Si no hay papel, ¿cómo sabremos que el resultado es verdadero?". Mientras tanto, Roberto Jiménez, un estudiante universitario, ve con optimismo el cambio: "Es hora de modernizar el sistema. Las elecciones deben ser rápidas y seguras".',
            imagen3: 'https://paranahaciaelmundo.com/wp-content/uploads/2024/09/1684-3929.jpg',
            descripcionImagen3: 'Los debates previos a la elección tuvieron potentes discusiones.',
            textoImagen3: ' A medida que se acercan las elecciones locales, el impacto de esta reforma se convertirá en un tema central de análisis. Aunque las autoridades aseguran que las modificaciones fortalecerán el sistema democrático, las dudas persisten, y el verdadero test será la confianza ciudadana en el proceso. El debate está servido, y el tiempo dirá si esta reforma cumple con su propósito o si se convierte en un nuevo punto de quiebre en la política nacional.',
            fecha: '02/05/20',
            autor: 'María Belén Santamarina',
        }
    },
    {
        /* politica - video */
        id: 7, tamaño: 'grande',
        contenido: {
            tipo: 'video', 
            categoria: 'política', 
            titulo: '¿Qué es la política?',
            imagen: 'https://img.youtube.com/vi/N4ZXuG0hgCM/hqdefault.jpg',
            descripcionDeImagen: 'Una foto de Jorge Gómez.',
            parrafo: 'En este video, Jorge Gómez nos invita a reflexionar sobre una de las preguntas más fundamentales para entender la sociedad: ¿qué es la política?',
            parrafoSecundario:'De manera clara y accesible, explora el significado profundo de la política como herramienta para organizar la convivencia, resolver conflictos y construir un futuro común. Acompáñanos en este análisis que va más allá de las instituciones y los partidos, y nos lleva a comprender cómo nuestras decisiones colectivas influyen en el mundo que compartimos.',
            video: 'https://www.youtube.com/embed/N4ZXuG0hgCM?si=3Dh8748icLAg_Gfg',
            cuerpo: 'en el video "¿Qué es la política?" de Jorge Gómez, se nos presenta una reflexión profunda sobre la naturaleza de la política como un mecanismo de toma de decisiones colectivas. Gómez resalta que, aunque la política a menudo se percibe como distante o compleja, en realidad influye directamente en nuestra vida diaria, ya sea en las decisiones gubernamentales o en la distribución de recursos. La clave para entender este proceso radica en la participación activa y el compromiso ético, valores esenciales para fortalecer la democracia y lograr una sociedad más justa. Sin embargo, como señala el propio Gómez, el verdadero desafío es lograr que todos se involucren de manera significativa, pues la política no es solo una cuestión de poder, sino de responsabilidad compartida.',
            autor: 'Jorge Gómez',
            fecha: '12/12/2017',
        }
    },
    {
        /* politica - podcast */
        id: 8, tamaño: 'pequeña',
        contenido: {
            tipo: 'podcast', 
            categoria: 'política', 
            titulo: 'Se fortalece el Gobierno, ¿Se debilita la República?',
            parrafo: 'Carlos Pagni examina el fortalecimiento del liderazgo de Javier Milei, impulsado por mejoras económicas y divisiones en la oposición. ',
            imagen: 'https://pbs.twimg.com/profile_images/1651721795190378496/4GRMk9C3_400x400.jpg',
            descripcionDeImagen: 'Una foto de Carlos Pagni.',
            podcastUrl: 'https://open.spotify.com/embed/episode/5IV3sXSkJCFPpct9rmy62m?utm_source=generator',
            cuerpo: 'En el episodio del podcast "Se fortalece el gobierno, ¿se debilita la república?", Carlos Pagni analiza cómo el liderazgo de Javier Milei se percibe como fortalecido debido a factores económicos, políticos y sociales. Destaca la reducción del riesgo país como indicador de confianza financiera, impulsado por expectativas de mejora económica y ciertas medidas del gobierno. Además, resalta cómo el oficialismo aprovecha las divisiones internas en las oposiciones, especialmente en Juntos por el Cambio, para consolidar su posición política. Pagni también reflexiona sobre los riesgos que este fortalecimiento del gobierno podría implicar para la institucionalidad republicana, señalando que concentraciones de poder similares han generado tensiones históricas en Argentina. Utiliza referencias al "manual de Maquiavelo" para describir la estrategia política de Milei, orientada a neutralizar a quienes lo ayudaron a alcanzar el poder​',
            autor: 'Carlos Pagni',
            fecha: '13/02/19',
        }
    },
    {
        /* deportes - articulo */
        id: 9, tamaño: 'pequeña',
        contenido: {
            tipo: 'articulo', 
            categoria: 'deportes', 
            titulo: 'El Triunfo de Argentina en el Clásico Sudamericano',
            imagen: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2023/11/22/17006221865714.jpg',
            descripcionDeImagen: 'La selección argentina celebrando su victoria.',
            parrafo: 'la selección argentina venció a Brasil 2-1, consolidándose como líder de las eliminatorias sudamericanas.',
            introduccion: 'En un emocionante partido disputado en el Estadio Monumental, la selección argentina venció a Brasil 2-1, consolidándose como líder de las eliminatorias sudamericanas. El equipo de Lionel Scaloni demostró una vez más su superioridad en un clásico cargado de pasión y rivalidad.',
            cuerpo: 'La noche comenzó con un gol temprano de Lionel Messi, quien aprovechó un preciso pase de Julián Álvarez para abrir el marcador en el minuto 15. Brasil respondió rápidamente con un tanto de Vinícius Jr., igualando el marcador antes del descanso. En la segunda mitad, Argentina mostró su mejor versión, dominando la posesión y generando múltiples ocasiones de gol. El tanto decisivo llegó al minuto 78, cuando Enzo Fernández remató de cabeza tras un córner ejecutado por Rodrigo De Paul. La victoria refuerza la posición de Argentina como favorita en las eliminatorias, extendiendo su racha de partidos invictos y asegurando su lugar como contendiente clave para el próximo Mundial. Mientras tanto, Brasil enfrenta dudas sobre su rendimiento y la continuidad de su entrenador.',
            autor: 'Carmen Sosa',
            fecha: '23/11/24',
        }
    },
    {
        /* deportes - reportaje */
        id: 10, tamaño: 'pequeña',
        contenido: {
            tipo: 'reportaje', 
            categoria: 'deportes', 
            titulo: 'El Renacer de un Ídolo: La Vuelta Triunfal de Rafael Nadal a las Canchas',
            parrafo: 'Después de meses de incertidumbre debido a una lesión que lo mantuvo alejado del tenis, Rafael Nadal regresó a las canchas con una determinación inquebrantable.',
            imagen: 'https://forbesenespanol.com/_next/image?url=https%3A%2F%2Feditorial.forbesenespanol.com%2Fwp-content%2Fuploads%2F2024%2F11%2FRAFA.png%3Fv%3D25501790&w=3840&q=75',
            descripcionDeImagen: 'El renovado Rafael Nadal celebrando su más reciente victoria.',
            descripcionImagen1: 'El renovado Rafael Nadal celebrando su más reciente victoria.',
            cuerpo1: 'El mallorquín, considerado uno de los mejores tenistas de todos los tiempos, demostró una vez más por qué su nombre está grabado en la historia del deporte. Su reciente victoria en el Masters 1000 de Roma no solo marcó su retorno a la élite, sino también un nuevo capítulo en su legendaria carrera.',
            imagen2: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/07/02/16567890145681.jpg',
            descripcionImagen2: ' “Cuando quieres algo con mucha intensidad, ningún sacrificio es demasiado grande.” ',
            textoImagen2: ' La lesión que lo apartó del circuito en 2023 fue uno de los desafíos más duros en la vida de Nadal. Las dudas sobre su regreso eran constantes, y el propio tenista llegó a plantearse el retiro. Sin embargo, con el apoyo de su equipo médico, familia y seguidores, logró superar los obstáculos físicos y mentales. En una rueda de prensa previa a su regreso, Nadal declaró: “No sé cuánto tiempo me queda en el tenis, pero daré todo lo que tengo mientras pueda competir.”',
            cuerpo2: ' Su vuelta al circuito fue un evento cargado de emociones. Aunque el inicio fue titubeante, Nadal recuperó su mejor nivel en el Masters 1000 de Roma. En la final, enfrentó al joven prodigio Carlos Alcaraz, quien está llamado a ser su sucesor. El partido fue una batalla épica de tres sets en la que Nadal desplegó su habitual intensidad y capacidad de lucha, cerrando el encuentro con un emocionante 7-6, 3-6, 6-4.',
            imagen3: 'https://fotografias.larazon.es/clipping/cmsimages02/2024/09/13/637B2A76-8430-409F-8DA7-5DF7F297A550/tenista-espanol-rafael-nadal-muestra-alegria-finalizar-partido-primera-ronda-barcelona-open-banc-sabadell-trofeo-conde-godo-tenis_98.jpg?crop=8524,4796,x0,y840&width=1900&height=1069&optimize=low&format=webply',
            descripcionImagen3: ' “No importa cuántas veces caigas, lo importante es cómo te levantas.” ',
            textoImagen3: 'Con este triunfo, Nadal alcanzó su título número 93, consolidándose aún más como un referente del deporte. Su historia es un recordatorio de que la perseverancia y la mentalidad positiva son clave para superar la adversidad. ',
            autor: 'Chad Jepperty',
            fecha: '27/03/24',
        }
    },
    { 
        /* deportes - video */
        id: 11, tamaño: 'pequeña', 
        contenido: {
            tipo: 'video', 
            categoria: 'deportes',  
            titulo: 'Remontada del Atlético Madrid 4-3 versus Sevilla',
            imagen: 'https://img.youtube.com/vi/jb9sArn-bI8/hqdefault.jpg',
            descripcionDeImagen:'Griezmann festejando un gol.',
            parrafo: 'En un partido lleno de emociones, el Atlético de Madrid protagonizó una remontada épica para vencer al Sevilla 4-3 en el Wanda Metropolitano.',
            video: 'https://www.youtube.com/embed/jb9sArn-bI8?si=d--9pvcgREp48-AT',
            descripcionDeVideo: 'Con un doblete de Griezmann, Madrid se posicionó sobre su rival en esta ocasión.',
            cuerpo: 'La noche en el Wanda Metropolitano fue testigo de uno de los partidos más emocionantes de la temporada. El Sevilla comenzó dominando el encuentro y rápidamente puso en aprietos a la defensa rojiblanca con goles de alta factura. Sin embargo, el Atlético de Madrid, fiel a su espíritu combativo, no tardó en responder. Antoine Griezmann fue el gran héroe de la noche. Con su inteligencia táctica y capacidad goleadora, el delantero francés lideró la remontada anotando dos goles cruciales. El apoyo de jugadores como Koke y Morata, quienes aportaron al dinamismo ofensivo, fue vital para mantener la presión sobre el Sevilla. El gol decisivo llegó en los minutos finales, cuando una jugada colectiva perfectamente orquestada culminó en un remate que selló el 4-3 definitivo. La afición celebró con euforia el esfuerzo y determinación de su equipo, que no solo logró la victoria sino también envió un mensaje contundente al resto de los equipos de La Liga: el Atlético nunca se rinde. Este resultado deja al equipo de Diego Simeone con grandes expectativas en su lucha por los puestos de la parte alta de la tabla, mientras el Sevilla deberá replantearse sus estrategias para seguir siendo competitivo en una temporada tan exigente.',
            autor: 'ESPN Deportes',
            fecha: '09/12/24',
        }
    },
    { 
        /* deportes - podcast */
        id: 12, tamaño: 'grande', 
        contenido: {
            tipo: 'podcast',
            categoria: 'deportes',
            titulo: 'un registro de vacaciones sobre cualquier cosa con Chuck Klosterman',
            imagen: 'https://proassetspdlcom.cdnstatics2.com/usuaris/autores/fotos/82/original/000081721_1_WEB_Chuck_Klosterman_photo_by_Joanna_Ceciliani_202211251222.jpg',
            descripcionDeImagen: 'Una foto de Chuck Klosterman.',
            parrafo: 'Un podcast de variedad de temas deportivos contemporáneos.',
            parrafoSecundario: 'Chuck Klosterman se une a Bill Simmons de The Ringer para discutir una gran variedad de temas, incluido el estado actual de los deportes universitarios, las lecciones aprendidas (o no) de las elecciones de 2024, el superestrellato moderno de la NBA, cómo ha evolucionado la relación del público con las celebridades. evolucionado, la próxima generación de documentales, pensamientos de la pelea Tyson-Paul , Los Soprano de HBO y más.',
            cuerpo: 'Chuck Klosterman se une a Bill Simmons de The Ringer para discutir una gran variedad de temas, incluido el estado actual de los deportes universitarios, las lecciones aprendidas (o no) de las elecciones de 2024, el superestrellato moderno de la NBA, cómo ha evolucionado la relación del público con las celebridades. evolucionado, la próxima generación de documentales, pensamientos de la pelea Tyson-Paul , Los Soprano de HBO y más.',
            podcastUrl: 'https://open.spotify.com/embed/episode/5jxtR3u6VqKrKLXZR1BYyI?utm_source=generator',
            autor: 'Matías Peralta Grandi',
            fecha: '',
        }
    },
    { 
        /* mundo - articulo */
        id: 13, tamaño: 'pequeña', 
        contenido: {
            tipo: 'articulo', 
            categoria: 'mundo', 
            titulo: 'Histórico Acuerdo en la COP30: Hacia un Futuro Más Verde',
            imagen: 'https://oconvergente.com.br/wp-content/uploads/2023/12/capa-cop30-1068x575.jpg',
            descripcionDeImagen: 'Se ha celebrado una asamblea sobre el Cambio Climático, esta vez en Brasil.',
            parrafo: 'En un giro decisivo para la lucha global contra el cambio climático, los líderes de más de 190 países lograron un histórico acuerdo en la Conferencia de las Naciones Unidas sobre el Cambio Climático (COP30), celebrada en Brasil.',
            introduccion: 'Tras semanas de intensas negociaciones, se pactaron compromisos vinculantes para reducir las emisiones de gases de efecto invernadero, proteger la biodiversidad y acelerar la transición hacia energías renovables.',
            cuerpo: ' El acuerdo establece que para 2035 los países desarrollados deben reducir sus emisiones al menos un 60 % respecto a los niveles de 1990, mientras que los países en vías de desarrollo recibirán mayores fondos para avanzar en tecnologías limpias y resiliencia climática. Además, se creó un fondo internacional de emergencia para las naciones más afectadas por desastres climáticos, que será financiado por un impuesto global al carbono. A pesar de los avances, algunos sectores expresaron preocupación por la implementación práctica del acuerdo. Activistas medioambientales señalan que las metas aún son insuficientes para limitar el aumento de la temperatura global a 1.5°C. Asimismo, algunos países con economías dependientes de los combustibles fósiles manifestaron reservas sobre los plazos y financiamientos previstos. El acuerdo de la COP30 ha sido recibido con esperanza por la comunidad internacional. Expertos lo califican como un "momento bisagra" en la lucha contra el cambio climático, aunque insisten en que el éxito dependerá de la acción inmediata y la cooperación global. En palabras del Secretario General de la ONU, “Este acuerdo no es el final de la lucha, sino el principio de una nueva era de responsabilidad climática.” El compromiso alcanzado en la COP30 es una señal de que, a pesar de las diferencias, el mundo puede unirse para enfrentar los desafíos más urgentes de nuestra era. Ahora, la atención se centra en cómo los gobiernos, empresas y ciudadanos traducirán estos compromisos en acciones concretas para proteger el planeta y garantizar un futuro más sostenible para las próximas generaciones.',
            autor: 'Serj Tankian',
            fecha: '',
        }
    },
    { 
        /* mundo - reportaje */
        id: 14, tamaño: 'grande', 
        contenido: {
            tipo: 'reportaje', 
            categoria: 'mundo',
            titulo: 'Crisis Global del Agua: Países en Riesgo y Soluciones Internacionales.',
            imagen: 'https://www.lavanguardia.com/files/og_thumbnail/uploads/2023/02/01/63dab63f571cf.jpeg',
            parrafo: 'Una crisis existencial que se encuentra presente hace décadas, una vez más acecha.',
            parrafoSecundario: 'Millones enfrentan la escasez de agua potable mientras expertos advierten sobre conflictos futuros; iniciativas internacionales buscan soluciones sostenibles urgentes.',
            descripcionDeImagen: 'Tierra resquebrajada y seca, donde antes había un cuerpo de agua.',
            descripcionImagen1: 'Tierra resquebrajada y seca, donde antes había un cuerpo de agua.',
            cuerpo1:'La crisis global del agua se ha convertido en uno de los desafíos más urgentes para la humanidad. Con más de dos mil millones de personas viviendo en países con estrés hídrico, la escasez de agua dulce afecta tanto a países en desarrollo como a potencias económicas. En naciones como India, Sudáfrica y México, el acceso al agua potable es cada vez más limitado debido a la sobreexplotación de acuíferos, el cambio climático y la contaminación de fuentes hídricas. En otras regiones, como el Medio Oriente y el norte de África, las guerras por el control de recursos hídricos se están intensificando, exacerbando una crisis que ya amenaza la estabilidad social y económica de estas naciones.',
            imagen2: 'https://cdn.statcdn.com/Infographic/images/teaser/31832.jpeg',
            descripcionImagen2: 'Medidas de consumición de agua en distintos paises.',
            textoImagen2: 'El impacto de la falta de acceso al agua potable y a saneamiento básico es devastador: enfermedades como el cólera, la diarrea y el tifus se propagan rápidamente en comunidades donde las condiciones de higiene son precarias. Además, la escasez de agua afecta la producción agrícola, lo que conduce a la inseguridad alimentaria, particularmente en áreas que dependen de la agricultura para su sustento. En países como Yemen, las sequías recurrentes y la falta de infraestructura para la distribución del agua están obligando a millones de personas a depender de fuentes de agua no tratadas, lo que empeora la calidad de vida y la esperanza de vida.',
            cuerpo2: 'En respuesta a este desafío, las soluciones internacionales han cobrado relevancia. Organizaciones como las Naciones Unidas y la Organización Mundial de la Salud (OMS) han impulsado iniciativas de cooperación que incluyen la construcción de infraestructura hídrica, la mejora en la gestión de los recursos y el desarrollo de tecnologías de desalinización de agua.',
            imagen3:'https://fandelagua.com/wp-content/uploads/2021/02/Enfermedades-causadas-por-la-falta-de-saneamiento-de-agua-03.png',
            descripcionImagen3: 'La falta de saneamiento del agua trae graves consecuencias para las poblaciones de muchos pueblos sub-desarrollados.',
            textoImagen3: 'A nivel global, se han promovido acuerdos para garantizar el acceso equitativo al agua entre países que comparten cuencas hidrográficas y la implementación de políticas de conservación y uso eficiente del agua. Sin embargo, a pesar de estos esfuerzos, la crisis persiste y se intensifica, lo que requiere un compromiso aún mayor de todos los sectores para proteger uno de los recursos más fundamentales para la vida.',
            autor: 'Santiago Peralta Grandi',
            fecha: '11/10/22',
        }
    },
    {
        /* mundo - video */
        id: 15, tamaño: 'pequeña',
        contenido: {
            tipo: 'video', 
            categoria: 'mundo', 
            titulo: 'El enigmático sospechoso del asesinato de Brian Thompson que sacude a la comunidad',
            imagen: 'https://img.youtube.com/vi/Zslp8pIETCs/hqdefault.jpg',
            descripcionDeImagen: 'Luigi Mangione siendo llevado a la corte.',
            video: 'https://www.youtube.com/embed/Zslp8pIETCs?si=rFi1EixCP0sYbA0f',
            descripcionDeVideo: 'Después de que el CEO de UnitedHealthcare fuera asesinado a tiros en una acera de Nueva York, la policía buscó al pistolero enmascarado con perros, drones y buzos. ',
            parrafo: 'Parrafo corto añadiendo contexto al título de la noticia. Palabras para rellenar.',
            cuerpo: 'El caso del asesinato de Brian Thompson ha conmocionado a la comunidad, y Luigi Mangione se ha convertido en el principal sospechoso. Con un perfil enigmático, Mangione ha sido objeto de múltiples investigaciones, aunque los detalles de su posible implicación siguen siendo ambiguos. Mientras la policía continúa recopilando pruebas, la tensión crece en la ciudad, con muchos cuestionándose las verdaderas motivaciones detrás del crimen. Este caso ha generado gran interés y especulación, manteniendo a la comunidad en vilo mientras se esperan respuestas definitivas.',
            autor: 'MILENIO',
            fecha: '11/12/24',
        }
    },
    { 
        /* mundo - podcast */
        id: 16, tamaño: 'pequeña', 
        contenido: {
            tipo: 'podcast', 
            categoria: 'mundo',  
            titulo: 'Dentro de la caída del brutal dictador de Siria',
            parrafo: 'Parrafo corto añadiendo contexto al título de la noticia. Palabras para rellenar.',
            podcastUrl: 'https://open.spotify.com/embed/episode/7ITAvW0k9YXrcIbfsII0qR?utm_source=generator',
            cuerpo: 'En el podcast "Inside the Fall of Syrias Brutal Dictatorship" de The Daily, se explora cómo el régimen autoritario de Bashar al-Assad en Siria, conocido por su represión extrema y violaciones de derechos humanos, comenzó a enfrentar un desafío significativo con el estallido de la guerra civil en 2011. A través de testimonios y análisis detallados, el episodio revela las tensiones internas dentro del gobierno sirio, así como las intervenciones de potencias extranjeras y grupos rebeldes que jugaron un papel crucial en el declive del régimen. Además, se abordan las consecuencias devastadoras para la población civil y cómo este conflicto transformó tanto a Siria como al equilibrio geopolítico en toda la región. A lo largo del podcast, también se profundiza en los eventos que han marcado el futuro del país y de su liderazgo. A pesar de la resistencia feroz y las tácticas brutales de Assad, se analiza cómo su control absoluto sobre ciertas regiones comenzó a desmoronarse, mientras que las intervenciones externas y la lucha interna por el poder complicaron aún más la situación. El episodio proporciona una visión clara de los efectos de la guerra, cómo ha alterado las relaciones internacionales y lo incierto que es el futuro de Siria. Es un análisis profundo de la lucha por la supervivencia en un conflicto complejo y devastador.',
            imagen: 'https://static01.nyt.com/images/2024/12/08/multimedia/08dc-realign-fzwc/08dc-realign-fzwc-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
            descripcionDeImagen: 'Ciudadanos Sirios celebrando la caída de su previo gobierno.',
            autor: 'Hoan Nguyen',
            fecha: '12/06/23',
        }
    },
    { 
        /* entretenimiento - articulo */
        id: 17, tamaño: 'grande', 
        contenido: {
            tipo: 'articulo', 
            categoria: 'entretenimiento',  
            titulo: 'El Fenómeno de "The Last of Us": Un Viaje Épico de Videojuego a Serie de Éxito',
            parrafo: 'La adaptación de la exitosa saga de videojuegos "The Last of Us" ha cautivado tanto a fanáticos como a nuevos espectadores. ',
            parrafoSecundario: 'La serie, que debutó en HBO, no solo mantiene la esencia de la historia original, sino que también la enriquece con nuevas capas emocionales.',
            imagen: 'https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F8886f165-9f52-4c02-86e5-1ec81f2832be_1456x819.jpeg',
            descripcionDeImagen: 'Ellie y Joel, los carismáticos protagonistas de la icónica franquicia.',
            introduccion: 'El videojuego "The Last of Us" no solo es conocido por su jugabilidad, sino por su narrativa profunda y personajes complejos. Al trasladar este mundo al formato televisivo, los creadores se enfrentaron al reto de mantener el equilibrio entre la acción y la emoción, y lo lograron con creces.',
            cuerpo:'La serie expande los eventos del juego, permitiendo a los espectadores sumergirse aún más en el apocalipsis post-pandemia mientras exploran las relaciones humanas en un contexto desgarrador. La química entre Pedro Pascal, quien interpreta a Joel, y Bella Ramsey, quien da vida a Ellie, es uno de los puntos clave que ha hecho que la serie se destaque. Ambos actores logran transmitir la intensidad emocional que caracteriza a los personajes en el videojuego, lo que genera una conexión instantánea con el público. Las actuaciones no solo son fuertes en momentos de acción, sino también en las escenas más íntimas, donde la vulnerabilidad de los personajes es más evidente. Desde su lanzamiento, "The Last of Us" ha marcado tendencia no solo por su narrativa y actuaciones, sino por su capacidad para abordar temas profundos como el amor, el sacrificio y la moralidad en tiempos de desesperación. Con una segunda temporada confirmada, los fans están ansiosos por ver cómo se desarrollan los próximos capítulos de esta historia épica. The Last of Us" es un ejemplo de cómo una buena historia puede trascender sus raíces y adaptarse a nuevos formatos sin perder su esencia. La serie de HBO no solo satisface a los fanáticos del videojuego, sino que también atrae a nuevos públicos, ofreciendo una experiencia emocionalmente rica y un recordatorio de lo que significa sobrevivir y conectar en un mundo roto.',
            autor: 'Gustavo Santaolalla',
            fecha: '31/07/21',
        }
    },
    {
        /* entretenimiento - reportaje */
        id: 18, tamaño: 'pequeña',
        contenido: {
            tipo: 'reportaje', 
            categoria: 'entretenimiento', 
            titulo: 'El Regreso de Taylor Swift a los Escenarios con "The Eras Tour"',
            parrafo: 'En un fenómeno sin precedentes, Taylor Swift ha regresado a los escenarios con su esperada gira mundial, The Eras Tour. ',
            imagen: 'https://fotos.perfil.com/2023/03/22/taylor-swift-portada-1532704.jpg',
            descripcionDeImagen: 'Taylor Swift en un atuendo rosado.',
            descripcionImagen1: 'La cantante en uno de sus particulares atuendos.',
            cuerpo1: 'Este tour no solo celebra su carrera musical de más de una década, sino que también se ha convertido en un evento cultural de gran escala. Desde el inicio de la gira, Swift ha logrado romper récords de taquilla, con conciertos que se han vendido en minutos. Con una puesta en escena espectacular y una selección de canciones que abarcan toda su carrera, el Eras Tour ha capturado la atención mundial.',
            imagen2: 'https://media.cnn.com/api/v1/images/stellar/prod/240510074800-03-taylor-swift-eras-tour-ttpd.jpg?c=original',
            descripcionImagen2: 'La magnitud de este tour fue tal que tuvo un impacto en la economía de Estados Unidos',
            textoImagen2: 'El tour no solo se centra en las canciones más populares de Swift, sino que también ofrece momentos íntimos donde la artista conecta profundamente con su audiencia. La crítica ha elogiado la evolución musical de la cantante y su habilidad para reinventarse sin perder su esencia. En términos de producción, The Eras Tour ha sido descrito como un despliegue visual impresionante, con una serie de cambios de vestuario y escenarios que representan las diferentes etapas de su carrera. Además, Taylor ha aprovechado la gira para promover sus nuevos trabajos, como el álbum Midnights.',
            cuerpo2: 'El impacto económico también ha sido notable, con ciudades enteras preparándose para la llegada de la estrella. Los fans de todo el mundo han viajado a diferentes países para vivir la experiencia única de estar presentes en este histórico evento. El Eras Tour no solo refuerza la popularidad de Taylor Swift, sino que también demuestra cómo una artista puede mantenerse relevante y conectar profundamente con diversas generaciones a través de la música.',
            imagen3: 'https://elplanetaurbano.com/wp-content/uploads/2024/12/The-Eras-Tour-Book-Planeta-Urbano-2024-1.jpeg',
            descripcionImagen3: 'El libro titulado "The Eras Tour Book" rompió récords de ventas tras el mítico tour.',
            textoImagen3: 'Este regreso ha dejado en claro que Taylor Swift sigue siendo una de las artistas más influyentes del siglo XXI, y su Eras Tour se perfila como uno de los mayores logros de su carrera.',
            autor: 'Catalina Pereyra Gómez',
            fecha: '13/12/2024',
        }
    },
    { 
        /* entretenimiento - video */
        id: 19, tamaño: 'pequeña', 
        contenido: {
            tipo: 'video', 
            categoria: 'entretenimiento',
            titulo: 'La esperada conclusión del Worlds 2024',
            imagen: 'https://img.youtube.com/vi/U-Rndl_2dNw/hqdefault.jpg',
            descripcionDeImagen: 'Una ilustración de Ibai y Faker, con la copa de Worlds 2024 en el medio.',
            parrafo: 'La conclusión del Worlds 2024 es un evento esperado con gran emoción por los fanáticos de los esports. ',
            video: 'https://www.youtube.com/embed/U-Rndl_2dNw?si=_TYCaojqaqeIuflA',
            descripcionDeVideo:' En este video, Ibai Llanos nos lleva a través de los momentos más vibrantes y emocionantes del torneo, destacando el impacto global de este campeonato de League of Legends.',
            cuerpo: 'El video no solo ofrece un resumen detallado de las finales del Worlds 2024, sino que también profundiza en la relevancia del evento dentro de la escena de los deportes electrónicos. Ibai Llanos, conocido por su carisma y conocimientos en el mundo de los esports, hace un análisis perspicaz sobre el nivel de competencia y la evolución de los equipos. Además, resalta la importancia de este torneo para los jugadores, quienes se enfrentan a una presión monumental en cada partida. En este contexto, el Worlds no solo es un espectáculo de habilidad y estrategia, sino también un espacio para el crecimiento y la consolidación de nuevos talentos. Ibai también comenta sobre los momentos clave del torneo, los jugadores más destacados y cómo la escena global de League of Legends ha influido en otros videojuegos de esports. Con su estilo único, Ibai hace que este video sea tanto informativo como entretenido para todos los seguidores de los esports.',
            autor: 'Ibai Llanos Garatea',
            fecha: '17/10/24',
        }
    },
    {
        /* entretenimiento - podcast */
        id: 20, tamaño: 'pequeña',
        contenido: {
            tipo: 'podcast', 
            categoria: 'entretenimiento', 
            imagen: 'https://image-cdn-ak.spotifycdn.com/image/ab67656300005f1f235134016ade08a4ff335a99',
            descripcionDeImagen:'Juanpa Zurita en el podcast de Yordi Rosado.',
            titulo: 'Juanpa Zurita, en vivo con Yordi Rosado.',
            parrafo: 'En este episodio de "La Saga", Yordi Rosado se encuentra cara a cara con Juanpa Zurita, uno de los influencers más conocidos de habla hispana.',
            podcastUrl: 'https://open.spotify.com/embed/episode/71kD6fN6OeDt11fXP9apgp?utm_source=generator',
            cuerpo: 'Juanpa Zurita, reconocido por su humor y creatividad en plataformas como YouTube e Instagram, revela en este episodio cómo su camino hacia el éxito no fue nada fácil. Aunque empezó como un joven con grandes sueños y un celular en mano, pronto se dio cuenta de que la perseverancia y la autenticidad son claves en el mundo de los influencers. Durante la charla, comparte cómo ha aprendido a manejar la presión y a mantener una conexión genuina con su audiencia, que ha sido clave en su continuo crecimiento. A lo largo del podcast, se tratan temas más allá de la fama y el dinero. Juanpa abre su corazón al hablar de sus inseguridades y cómo el equilibrio entre la vida personal y la vida pública es más difícil de lo que muchos creen. Además, comparte algunas anécdotas graciosas y momentos difíciles de su carrera que pocos conocen, ofreciendo una perspectiva única sobre la vida de un influencer de alto perfil. El episodio culmina con una reflexión sobre el futuro de las redes sociales y cómo Juanpa ve su carrera en los próximos años. Con su característico estilo relajado y cercano, este podcast no solo es entretenido, sino también inspirador para quienes buscan dejar su huella en el mundo digital.',
            autor: 'Yordi Rosado',
            fecha: '05/06/23',
        }
    },

];

export default noticias;