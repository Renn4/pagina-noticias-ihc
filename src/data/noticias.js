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
            parrafo: 'Parrafo corto añadiendo contexto al título de la noticia. Palabras para rellenar.',
            parrafoSecundario: 'Párrafo corto desarrollando un poco más en la noticia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
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
            autor: 'Martín Peralta Grandi',
            fecha: '29/11/22',
            imagen: 'https://fotos.perfil.com/2024/07/25/trim/876/492/fintechs-1842044.jpg',
            descripcionImagen1: 'Las tecnologías Fintech son aquellas que nutren a los sistemas bancarios digitales.',
            cuerpo1:'En los últimos años, las startups fintech han emergido como una fuerza transformadora en la economía global. Estas empresas innovadoras están redefiniendo la forma en que interactuamos con el dinero, ofreciendo soluciones accesibles para pagos, financiamiento, ahorro y más. Al democratizar los servicios financieros, han logrado conectar a comunidades desatendidas, promover la inclusión financiera y agilizar procesos que antes eran lentos y costosos. Este auge no solo está cambiando la industria financiera, sino que también está impulsando nuevas oportunidades económicas a escala mundial.',
            imagen2: 'https://finnovating.com/wp-content/uploads/2021/10/Mapa-argentina-insside.png',
            descripcionImagen2: 'Mapa de startups Fintech en Argentina.',
            textoImagen2: 'Las startups fintech han puesto a disposición herramientas que antes eran exclusivas de grandes corporaciones o instituciones financieras tradicionales. Desde aplicaciones de pagos instantáneos hasta plataformas de inversión accesibles para el usuario promedio, estas empresas han hecho que las finanzas sean más fáciles de entender y manejar. Para las pequeñas y medianas empresas, la posibilidad de acceder a financiamiento alternativo ha sido clave para impulsar su crecimiento en un entorno competitivo.',
            cuerpo2: 'Con el uso de inteligencia artificial, blockchain y big data, las fintech están resolviendo problemas complejos de manera eficiente. Por ejemplo, los algoritmos de aprendizaje automático han optimizado los sistemas de crédito, permitiendo evaluaciones más precisas de riesgo en tiempo real. Por otro lado, el blockchain garantiza transacciones seguras y transparentes, eliminando intermediarios y reduciendo costos para los usuarios.',
            imagen3:'https://www.semana.com/resizer/v2/6TSCIYKFA5FXLN7GDB6P3BOX6Q.jpg?auth=7cf885d8b11d6f7ac1b4dd55843797eb3655f1a1addee489f70d2129c4969ba6&smart=true&quality=75&width=1280&height=720',
            descripcionImagen3: 'El uso de las tecnologías Fintech es improtante en el portafolio de cualquier financiera.',
            textoImagen3: 'Aunque el sector fintech está lleno de promesas, también enfrenta desafíos significativos, como la regulación y la ciberseguridad. La necesidad de adaptarse a marcos regulatorios en constante evolución y garantizar la protección de datos personales son prioridades críticas para estas empresas. A medida que el sector madura, se espera que las fintech se conviertan en un pilar esencial de la economía, integrándose con las instituciones financieras tradicionales para ofrecer soluciones híbridas que beneficien a todos los sectores de la sociedad.',
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
            parrafo: 'Según JP Morgan, el PIB argumento crecerá a una tasa anualizada del 8,5% en el tercer trimestre de este año. ¿Es una estimación realista?',
            parrafoSecundario: 'Este pronóstico se basa en una combinación de factores, como un incremento en la actividad agrícola tras una temporada de sequías, una recuperación en el consumo interno impulsada por medidas económicas recientes y un repunte en las exportaciones.',
            video: 'https://www.youtube.com/embed/SbR632MRVEs?si=hr7Ibq46LpmcnfNz',
            descripcionDeVideo: 'Análisis de los dichos de JP Morgan sobre la situación económica de Argentina. ',
            cuerpo:'Según JP Morgan, el Producto Interno Bruto (PIB) de Argentina crecerá a una tasa anualizada del 8,5% en el tercer trimestre de este año. Esta proyección, sorprendente para muchos, surge en un contexto económico marcado por desafíos estructurales, alta inflación y una fuerte volatilidad en los mercados internacionales. Pero, ¿qué tan realista es esta estimación y qué factores la respaldan? Por un lado, el informe destaca un aumento significativo en la actividad agrícola, especialmente en la producción de soja y maíz, tras las lluvias que ayudaron a revertir parcialmente los efectos de una sequía prolongada. Este sector, históricamente clave para la economía argentina, ha contribuido no solo al crecimiento del PIB, sino también a una mejora en las exportaciones, generando divisas vitales para un país con restricciones cambiarias. Además, el consumo interno ha mostrado signos de recuperación. Las recientes medidas del gobierno, como bonos salariales y subsidios a sectores vulnerables, parecen haber incentivado el gasto en el corto plazo. El aumento en la actividad comercial y el turismo interno también han jugado un rol importante en dinamizar la economía. Sin embargo, el panorama no es del todo alentador. Los niveles de inflación siguen siendo alarmantemente altos, erosionando el poder adquisitivo de la población y generando incertidumbre en las inversiones a largo plazo. Por otra parte, las reservas internacionales del Banco Central siguen bajo presión, y las expectativas de devaluación generan tensiones en el mercado cambiario. Los analistas coinciden en que, si bien es posible que el PIB crezca al 8,5% en el tercer trimestre, esto podría ser un rebote puntual más que un indicador de recuperación sostenida. "El crecimiento a esta tasa es factible en un trimestre específico, pero la sostenibilidad dependerá de una combinación de políticas que aborden los problemas estructurales, como la inflación, la deuda y la falta de confianza en el mercado financiero", explicó un economista local. En definitiva, la proyección de JP Morgan invita a reflexionar sobre las potencialidades y limitaciones de la economía argentina en un año decisivo. Si bien hay señales positivas, el camino hacia una recuperación sólida y duradera sigue lleno de desafíos.',
            autor: 'Sebastián Manzini',
        }
    },
    { 
        /* economia - podcast */
        id: 4, tamaño: 'pequeña', 
        contenido: {
            tipo: 'podcast', 
            categoria: 'economía',  
            titulo: '9 Esto es un placeholder de título.',
            parrafo: 'Parrafo corto añadiendo contexto al título de la noticia. Palabras para rellenar.',
            autor: 'Gustavo Cerati',
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
            autor: 'Gustavo Ariel Peralta',
            introduccion: 'En el complicado mundo de la política, las decisiones más simples pueden convertirse en procesos interminables. Desde debates acalorados hasta comités especiales, todo parece más difícil de lo que debería. Pero, ¿qué pasa cuando se trata de algo tan básico como cambiar un foco? Quizás el resultado te sorprenda.',
            cuerpo: 'Tras largas deliberaciones, los políticos finalmente acuerdan un plan para cambiar el foco. Primero, deben definir quién asumirá la responsabilidad de supervisar el proceso, lo que genera otra ronda de debates. Algunos proponen la creación de un comité especializado, mientras otros sugieren que sea parte de una nueva iniciativa nacional de eficiencia energética. Cada propuesta, por supuesto, viene acompañada de informes detallados, consultas con expertos y encuestas a la ciudadanía para garantizar transparencia y respaldo popular. Cuando finalmente se selecciona el modelo de foco, otro conflicto surge: ¿debería ser un LED por su eficiencia, o un incandescente por nostalgia histórica? La discusión se torna aún más técnica, abarcando desde el nivel de emisión lumínica hasta el impacto psicológico del color de la luz en el bienestar de los ciudadanos. La prensa, por su parte, sigue cada paso con titulares que van desde lo cómico hasta lo indignado, convirtiendo el cambio del foco en un tema de interés nacional. Finalmente, llega el día de la instalación. Un grupo de técnicos, rodeados de políticos y cámaras, realiza la tarea en lo que debería haber sido un sencillo acto de mantenimiento. Sin embargo, la ceremonia incluye discursos, aplausos y hasta un momento de silencio en honor al antiguo foco. Y así, algo tan trivial se convierte en un reflejo perfecto de cómo las instituciones pueden transformar lo cotidiano en un espectáculo digno de análisis.',
            imagen: 'https://media.istockphoto.com/id/1422527508/photo/adult-man-wearing-light-bulb.jpg?s=612x612&w=0&k=20&c=pl0vgHo4gqMhOh5w9zJtI5yzoQXSu7R1F1qklptO_js=',
            descripcionDeImagen: 'Hombre colocando un foquito.',
            fecha: '03/04/19',
        }
    },
    {
        /* politica - reportaje */
        id: 6, tamaño: 'pequeña',
        contenido: {
            tipo: 'reportaje', 
            categoria: 'política', 
            titulo: 'Esto es un placeholder de título.',
            parrafo: 'Parrafo corto añadiendo contexto al título de la noticia. Palabras para rellenar.',
        }
    },
    {
        /* politica - video */
        id: 7, tamaño: 'pequeña',
        contenido: {
            tipo: 'video', 
            categoria: 'política', 
            titulo: 'Esto es un placeholder de título.',
            parrafo: 'Parrafo corto añadiendo contexto al título de la noticia. Palabras para rellenar.',
        }
    },
    {
        /* politica - podcast */
        id: 8, tamaño: 'pequeña',
        contenido: {
            tipo: 'podcast', 
            categoria: 'política', 
            titulo: 'Esto es un placeholder de título.',
            parrafo: 'Parrafo corto añadiendo contexto al título de la noticia. Palabras para rellenar.',
        }
    },
    {
        /* deportes - articulo */
        id: 9, tamaño: 'pequeña',
        contenido: {
            tipo: 'articulo', 
            categoria: 'deportes', 
            titulo: 'Esto es un placeholder de título.',
            parrafo: 'Parrafo corto añadiendo contexto al título de la noticia. Palabras para rellenar.',
        }
    },
    {
        /* deportes - reportaje */
        id: 10, tamaño: 'pequeña',
        contenido: {
            tipo: 'reportaje', 
            categoria: 'deportes', 
            titulo: 'Esto es un placeholder de título.',
            parrafo: 'Parrafo corto añadiendo contexto al título de la noticia. Palabras para rellenar.',
        }
    },
    { 
        /* deportes - video */
        id: 11, tamaño: 'pequeña', 
        contenido: {
            tipo: 'video', 
            categoria: 'deportes',  
            titulo: '12 Esto es un placeholder de título.',
            parrafo: 'Parrafo corto añadiendo contexto al título de la noticia. Palabras para rellenar.',
            autor: 'Hughie',
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
            parrafo: 'Un podcast de variedad de temas deportivos contemporáneos.',
            parrafoSecundario: 'Chuck Klosterman se une a Bill Simmons de The Ringer para discutir una gran variedad de temas, incluido el estado actual de los deportes universitarios, las lecciones aprendidas (o no) de las elecciones de 2024, el superestrellato moderno de la NBA, cómo ha evolucionado la relación del público con las celebridades. evolucionado, la próxima generación de documentales, pensamientos de la pelea Tyson-Paul , Los Soprano de HBO y más.',
            cuerpo: 'Chuck Klosterman se une a Bill Simmons de The Ringer para discutir una gran variedad de temas, incluido el estado actual de los deportes universitarios, las lecciones aprendidas (o no) de las elecciones de 2024, el superestrellato moderno de la NBA, cómo ha evolucionado la relación del público con las celebridades. evolucionado, la próxima generación de documentales, pensamientos de la pelea Tyson-Paul , Los Soprano de HBO y más.',
            podcastUrl: 'https://open.spotify.com/embed/episode/5jxtR3u6VqKrKLXZR1BYyI?utm_source=generator',
            autor: 'Matías Peralta Grandi',
        }
    },
    { 
        /* mundo - articulo */
        id: 13, tamaño: 'pequeña', 
        contenido: {
            tipo: 'articulo', 
            categoria: 'mundo', 
            titulo: '10 Esto es un placeholder de título.',
            parrafo: 'Parrafo corto añadiendo contexto al título de la noticia. Palabras para rellenar.',
            autor: 'Serj Tankian',
        }
    },
    { 
        /* mundo - reportaje */
        id: 14, tamaño: 'pequeña', 
        contenido: {
            tipo: 'reportaje', 
            categoria: 'mundo',
            titulo: 'Crisis Global del Agua: Países en Riesgo y Soluciones Internacionales.',
            imagen: 'https://www.lavanguardia.com/files/og_thumbnail/uploads/2023/02/01/63dab63f571cf.jpeg',
            parrafo: 'Millones enfrentan la escasez de agua potable mientras expertos advierten sobre conflictos futuros; iniciativas internacionales buscan soluciones sostenibles urgentes.',
            descripcionImagen1: 'Lagos retroceden a desiertos, mientras la situación hídrica parece empeorar.',
            cuerpo1:'La crisis global del agua se ha convertido en uno de los desafíos más urgentes para la humanidad. Con más de dos mil millones de personas viviendo en países con estrés hídrico, la escasez de agua dulce afecta tanto a países en desarrollo como a potencias económicas. En naciones como India, Sudáfrica y México, el acceso al agua potable es cada vez más limitado debido a la sobreexplotación de acuíferos, el cambio climático y la contaminación de fuentes hídricas. En otras regiones, como el Medio Oriente y el norte de África, las guerras por el control de recursos hídricos se están intensificando, exacerbando una crisis que ya amenaza la estabilidad social y económica de estas naciones.',
            imagen2: 'https://cdn.statcdn.com/Infographic/images/teaser/31832.jpeg',
            descripcionImagen2: 'Medidas de consumición de agua en distintos paises.',
            textoImagen2: 'El impacto de la falta de acceso al agua potable y a saneamiento básico es devastador: enfermedades como el cólera, la diarrea y el tifus se propagan rápidamente en comunidades donde las condiciones de higiene son precarias. Además, la escasez de agua afecta la producción agrícola, lo que conduce a la inseguridad alimentaria, particularmente en áreas que dependen de la agricultura para su sustento. En países como Yemen, las sequías recurrentes y la falta de infraestructura para la distribución del agua están obligando a millones de personas a depender de fuentes de agua no tratadas, lo que empeora la calidad de vida y la esperanza de vida.',
            cuerpo2: 'En respuesta a este desafío, las soluciones internacionales han cobrado relevancia. Organizaciones como las Naciones Unidas y la Organización Mundial de la Salud (OMS) han impulsado iniciativas de cooperación que incluyen la construcción de infraestructura hídrica, la mejora en la gestión de los recursos y el desarrollo de tecnologías de desalinización de agua.',
            imagen3:'https://fandelagua.com/wp-content/uploads/2021/02/Enfermedades-causadas-por-la-falta-de-saneamiento-de-agua-03.png',
            descripcionImagen3: 'La falta de saneamiento del agua trae graves consecuencias para las poblaciones de muchos pueblos sub-desarrollados.',
            textoImagen3: 'A nivel global, se han promovido acuerdos para garantizar el acceso equitativo al agua entre países que comparten cuencas hidrográficas y la implementación de políticas de conservación y uso eficiente del agua. Sin embargo, a pesar de estos esfuerzos, la crisis persiste y se intensifica, lo que requiere un compromiso aún mayor de todos los sectores para proteger uno de los recursos más fundamentales para la vida.',
            autor: 'Santiago Peralta Grandi',
        }
    },
    {
        /* mundo - video */
        id: 15, tamaño: 'pequeña',
        contenido: {
            tipo: 'video', 
            categoria: 'mundo', 
            titulo: 'Esto es un placeholder de título.',
            parrafo: 'Parrafo corto añadiendo contexto al título de la noticia. Palabras para rellenar.',
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
            autor: 'Hoan Nguyen',
            podcastUrl: 'https://open.spotify.com/embed/episode/7ITAvW0k9YXrcIbfsII0qR?utm_source=generator',
            cuerpo: 'En el podcast "Inside the Fall of Syrias Brutal Dictatorship" de The Daily, se explora cómo el régimen autoritario de Bashar al-Assad en Siria, conocido por su represión extrema y violaciones de derechos humanos, comenzó a enfrentar un desafío significativo con el estallido de la guerra civil en 2011. A través de testimonios y análisis detallados, el episodio revela las tensiones internas dentro del gobierno sirio, así como las intervenciones de potencias extranjeras y grupos rebeldes que jugaron un papel crucial en el declive del régimen. Además, se abordan las consecuencias devastadoras para la población civil y cómo este conflicto transformó tanto a Siria como al equilibrio geopolítico en toda la región. A lo largo del podcast, también se profundiza en los eventos que han marcado el futuro del país y de su liderazgo. A pesar de la resistencia feroz y las tácticas brutales de Assad, se analiza cómo su control absoluto sobre ciertas regiones comenzó a desmoronarse, mientras que las intervenciones externas y la lucha interna por el poder complicaron aún más la situación. El episodio proporciona una visión clara de los efectos de la guerra, cómo ha alterado las relaciones internacionales y lo incierto que es el futuro de Siria. Es un análisis profundo de la lucha por la supervivencia en un conflicto complejo y devastador.',
            imagen: 'https://static01.nyt.com/images/2024/12/08/multimedia/08dc-realign-fzwc/08dc-realign-fzwc-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
            descripcionDeImagen: '',
            fecha: '12/06/23',
        }
    },
    { 
        /* entretenimiento - articulo */
        id: 17, tamaño: 'grande', 
        contenido: {
            tipo: 'articulo', 
            categoria: 'entretenimiento',  
            titulo: '11 Esto es un placeholder de título.',
            parrafo: 'Parrafo corto añadiendo contexto al título de la noticia. Palabras para rellenar.',
            parrafoSecundario: 'Párrafo corto desarrollando un poco más en la noticia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            autor: 'Himiko Kikuchi',
        }
    },
    {
        /* entretenimiento - reportaje */
        id: 18, tamaño: 'pequeña',
        contenido: {
            tipo: 'reportaje', 
            categoria: 'entretenimiento', 
            titulo: 'Esto es un placeholder de título.',
            parrafo: 'Parrafo corto añadiendo contexto al título de la noticia. Palabras para rellenar.',
        }
    },
    { 
        /* entretenimiento - video */
        id: 19, tamaño: 'pequeña', 
        contenido: {
            tipo: 'video', 
            categoria: 'entretenimiento',
            titulo: '5 Esto es un placeholder de título.',
            parrafo: 'Parrafo corto añadiendo contexto al título de la noticia. Palabras para rellenar.',
            autor: 'Julia Grandi',
        }
    },
    {
        /* entretenimiento - podcast */
        id: 20, tamaño: 'pequeña',
        contenido: {
            tipo: 'podcast', 
            categoria: 'entretenimiento', 
            titulo: 'Esto es un placeholder de título.',
            parrafo: 'Parrafo corto añadiendo contexto al título de la noticia. Palabras para rellenar.',
        }
    },
    
];

export default noticias;