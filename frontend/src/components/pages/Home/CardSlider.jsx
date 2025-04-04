const CardSlider = () => {
    return (
        <div className="slaider">
            <h2 className="slaider__h2">Какие места стоит посетить</h2>
            <div className="slaider__img manifestation">
                <div className="card">
                    <div className="card__front">
                        <img src="/images/png1.jpg" alt="Вишневые деревья вдоль улицы в центре города Токио"/>
                    </div>
                    <div className="card__back">
                        <div className="slaideer__content">
                            <span className="span__slaider">Парк Омия</span> — это большая зеленая зона, расположенная в
                            центральном одноименном районе города Сайтама, на севере Токио. Этот красивый городской
                            парк,
                            известный своими многочисленными цветущими весной вишнями, является одним из лучших мест для
                            празднования ханами недалеко от Токио. На протяжении многих лет этот парк расширял свою
                            территорию и со временем распространился на соседние земли.Сейчас он обладает площадью около
                            68
                            гектаров разделен на три разные части:Дайичи, охватывающий территорию первоначального
                            парка.Дайни, территория, присоединенная во вторую очередь
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card__front">
                        <img src="/images/png2.jpg" alt="Храм Сэнсо-дзи"/>
                    </div>
                    <div className="card__back">
                        <div className="slaideer__content"> Мечтаете увидеть древнюю Японию? Добро пожаловать в
                            старейший
                            буддистский храм Токио — <span className="span__slaider">Сэнсо-дзи</span>. Это одно из
                            немногих мест
                            в столице, где можно мысленно перенестись на несколько веков назад и почувствовать себя
                            первооткрывателем загадочного острова самураев и гейш. У храма несколько названий. Первое,
                            более
                            полное, — Конрюдзан Сэнсо-дзи. В переводе на русский язык оно означает — «храм молодой травы
                            на
                            горе Золотого дракона». Второе — Асакуса Каннон. Асакуса — старинная деревня и современное
                            название района Токио, где стоит храм, а Каннон — имя божества, в честь которого он
                            построен.
                        </div>
                    </div>
                </div>  
                <div className="card">
                    <div className="card__front">
                        <img src="/images/png3.jpg" alt="Фудзияма-вершина"/>
                    </div>
                    <div className="card__back">
                        <div className="slaideer__content"><span className="span__slaider">Вулкан Фудзи</span> — самая
                            высокая гора
                            в Японии. Её высота — 3776 метров. Она образовалась в результате вулканической активности
                            около
                            ста тысяч лет назад. Сегодня гора Фудзи и её окрестности — популярная туристическая зона,
                            где
                            можно заниматься пешим туризмом, жить на природе и просто отдыхать.
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card__front">
                        <img src="/images/png4.jpg" alt="Гиндза"/>
                    </div>
                    <div className="card__back">
                        <div className="slaideer__content"><span className="span__slaider">Гиндза</span> (яп. 銀座,
                            «серебряный
                            двор» или «серебряный цех») — торговый квартал и культурный центр города в Тюо, одном из
                            специальных районов Токио. В Гиндзе расположено множество специализированных магазинов,
                            универсамов, ресторанов, баров, клубов и т. п. Гиндза считается одним из самых роскошных
                            торговых районов мира.Гиндза (яп. 銀座, «серебряный двор» или «серебряный цех») — торговый
                            квартал и культурный центр города в Тюо, одном из специальных районов Токио. В Гиндзе
                            расположено множество специализированных магазинов, универсамов, ресторанов, баров, клубов и
                            т.
                            п. Гиндза считается одним из самых роскошных торговых районов мира.
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card__front">
                        <img src="/images/png5.jpg" alt="Императорский дворец"/>
                    </div>
                    <div className="card__back">
                        <div className="slaideer__content"><span className="span__slaider">Императорский дворец</span> в
                            Токио (яп.
                            皇居 ко:кё) — дворец императора Японии в специальном районе Тиёда метрополии Токио.
                            Расположен
                            на территории бывшего замка Эдо. Используется со второй половины XIX века как резиденция
                            императоров и Императорского двора. Находится под контролем Управления Императорского двора
                            Японии. Общая площадь вместе с садами составляет 7,41 км². Архитектура зданий комплекса
                            является
                            смешанной: некоторые здания построены в европейском, а другие в традиционном стилях.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CardSlider;