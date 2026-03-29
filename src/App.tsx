import React from 'react';
import { Phone, MapPin, Clock, Shield, Star, Wrench, ChevronRight, Disc, Snowflake, LifeBuoy, PenTool as Tool, Quote, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { FaVk, FaTelegramPlane } from 'react-icons/fa';

const App: React.FC = () => {
  const [activeFaq, setActiveFaq] = React.useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-dark text-white selection:bg-primary selection:text-white w-full max-w-[100vw] overflow-x-hidden">
      {/* 1. Header & Hero Section */}
      <header className="fixed top-0 left-0 w-full z-50 bg-dark/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Tool className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-display font-extrabold uppercase tracking-tighter">
                Tire<span className="text-primary">Master</span> NN
              </span>
            </div>
            <div className="hidden lg:block w-px h-6 bg-white/10"></div>
            <span className="text-[10px] text-white/50 uppercase tracking-[0.2em] hidden lg:block leading-none">
              Шиномонтаж в Нижнем Новгороде
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
            <a href="#prices" className="text-sm font-medium hover:text-primary transition-colors">Цены</a>
            <a href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-3">
              <a href="https://vk.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center hover:bg-secondary/20 transition-all group">
                <FaVk className="text-lg text-secondary group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://t.me" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center hover:bg-secondary/20 transition-all group">
                <FaTelegramPlane className="text-lg text-secondary group-hover:scale-110 transition-transform -translate-x-[1px] translate-y-[0.5px]" />
              </a>
            </div>
            <div className="flex flex-col items-end mr-2">
              <a href="tel:+79990000000" className="text-sm md:text-base font-bold hover:text-primary transition-colors whitespace-nowrap leading-none">+7 999 000 00 00</a>
            </div>
            <a href="#appointment" className="hidden lg:block border border-primary/40 text-primary hover:bg-primary hover:text-white px-5 py-2 text-xs font-bold transition-all rounded-xl uppercase tracking-wider">Записаться</a>
          </div>
        </div>
      </header>

      <section className="relative pt-32 pb-20 overflow-hidden min-h-[90vh] flex items-center">
        {/* Background Effects */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/20 blur-[120px] rounded-full -z-10"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full -z-10"></div>
        
        <div className="container mx-auto px-6 sm:px-4 grid lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full text-center md:text-left lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-xs uppercase tracking-widest font-semibold text-white/60">Премиум сервис в Нижнем Новгороде</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
              <span className="whitespace-nowrap">Профессиональный</span> <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Шиномонтаж</span>
            </h1>
            <p className="text-base sm:text-lg text-white/60 mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed">
              Вернем вашему автомобилю идеальную плавность хода. Высокоточное оборудование Hoffman, опытные мастера и бережное отношение к вашим дискам.
            </p>
            <div className="w-full max-w-full overflow-hidden flex flex-col items-stretch md:items-start px-4 md:px-0">
              <div className="flex flex-col md:flex-row md:justify-start gap-4 w-full md:w-auto">
                <a href="#appointment" className="btn-primary w-full md:w-auto text-center flex items-center justify-center gap-2">
                  Записаться на замену <ChevronRight className="w-5 h-5 flex-shrink-0" />
                </a>
                <a href="#services" className="px-4 md:px-8 py-4 bg-white/5 border border-white/20 rounded-xl font-bold transition-all hover:bg-white/10 flex items-center justify-center gap-2 w-full md:w-auto text-center">
                  Смотреть услуги
                </a>
              </div>
            </div>
            
            <div className="mt-12 flex items-center gap-8 text-white/40">
              <div className="flex flex-col text-center sm:text-left">
                <span className="text-2xl font-bold text-white">15+</span>
                <span className="text-[10px] uppercase tracking-wider text-white/60">Лет опыта</span>
              </div>
              <div className="w-px h-10 bg-white/10"></div>
              <div className="flex flex-col text-center sm:text-left">
                <span className="text-2xl font-bold text-white">4000+</span>
                <span className="text-[10px] uppercase tracking-wider text-white/60">Довольных клиентов</span>
              </div>
              <div className="w-px h-10 bg-white/10"></div>
              <div className="flex flex-col text-center sm:text-left">
                <span className="text-2xl font-bold text-white">6 мес.</span>
                <span className="text-[10px] uppercase tracking-wider text-white/60">Гарантии</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative lg:col-span-5"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1578844251758-2f71da64c96f?q=80&w=1600&auto=format&fit=crop" 
                alt="Профессиональный шиномонтаж" 
                className="w-full h-auto object-cover rounded-3xl"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 z-20 bg-dark-lighter p-6 pr-12 rounded-2xl border border-white/10 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                  <Clock className="text-green-500 w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-white/40 uppercase tracking-widest">Работаем</div>
                  <div className="text-lg font-bold">24 / 7</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Services Section */}
      <section id="services" className="py-24 bg-dark-lighter">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Наши Услуги</h2>
            <p className="text-white/60 max-w-2xl mx-auto italic">Полный спектр работ для вашей безопасности на дороге</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[ 
              { title: "Сезонная переобувка", desc: "Комплексная замена шин с балансировкой и проверкой давления.", icon: Snowflake, price: "от 1 800 ₽" },
              { title: "Выездной шиномонтаж", desc: "Приедем к вам в любую точку города в течение 30 минут.", icon: MapPin, price: "от 2 500 ₽" },
              { title: "Правка дисков", desc: "Восстановление геометрии литых и стальных дисков на стенде.", icon: Disc, price: "от 1 200 ₽" },
              { title: "Хранение шин", desc: "Соблюдение температурного режима и влажности. Застраховано.", icon: Shield, price: "от 2 000 ₽ / сезон" },
              { title: "Ремонт порезов", desc: "Устранение грыж и боковых порезов любой сложности.", icon: LifeBuoy, price: "от 500 ₽" },
              { title: "Ошиповка", desc: "Восстановление выпавших шипов на зимней резине.", icon: Wrench, price: "от 15 ₽ / шип" }
            ].map((s, i) => (
              <div key={i} className="p-8 bg-dark rounded-2xl border border-white/5 hover:border-primary/50 hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full shadow-lg hover:shadow-primary/10">
                <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <s.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-white/60 text-sm mb-6 leading-relaxed">{s.desc}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                  <span className="text-primary font-bold">{s.price}</span>
                  <a href="#appointment" className="text-[10px] uppercase tracking-widest font-bold flex items-center gap-1 text-white/40 group-hover:text-primary transition-colors cursor-pointer">
                    Подробнее <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why Us Section */}
      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[160px] rounded-full -z-10"></div>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="h-64 rounded-2xl overflow-hidden shadow-2xl">
                    <img src="/images/1.png" alt="Tire Service 1" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 text-center">
                    <div className="text-4xl font-black mb-2">100%</div>
                    <div className="text-[11px] text-white/60 uppercase tracking-[0.2em] font-bold">Гарантия качества</div>
                  </div>
                </div>
                <div className="space-y-6 pt-12">
                  <div className="p-8 bg-primary rounded-2xl text-center text-white shadow-xl shadow-primary/20">
                    <div className="text-4xl font-black mb-2">20 мин.</div>
                    <div className="text-[11px] text-white/90 uppercase tracking-[0.2em] font-bold">Время ожидания</div>
                  </div>
                  <div className="h-64 rounded-2xl overflow-hidden shadow-2xl">
                    <img src="/images/2.png" alt="Tire Service 2" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">Почему выбирают именно <span className="text-primary truncate">TireMaster</span></h2>
              <ul className="space-y-6">
                {[
                  { title: "Точность Hoffman", text: "Используем лучшее немецкое оборудование для балансировки с точностью до 1 грамма." },
                  { title: "Бережный шиномонтаж", text: "Работаем с любым профилем (от R13 до R24) и материалом дисков без царапин." },
                  { title: "Комфорт клиента", text: "Уютная зона ожидания: мягкие диваны, ароматный кофе, Wi-Fi и TV." },
                  { title: "Прозрачная цена", text: "Никаких скрытых платежей. Вы знаете стоимость еще до начала работ." }
                ].map((item, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 group"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform"></div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                      <p className="text-white/60 text-[15px] leading-relaxed">{item.text}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Process (Steps) Section */}
      <section className="py-24 bg-dark-lighter border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold mb-4">Как это происходит?</h2>
            <p className="text-white/60 italic text-sm">Всего 3 простых шага до идеальной езды</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-10 left-[15%] w-[70%] h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent -z-10"></div>
            
            {[
              { num: "01", title: "Запись", text: "Оставляете заявку на сайте или звоните нам." },
              { num: "02", title: "Заезд", text: "Приезжаете в удобное время. Мы уже ждем." },
              { num: "03", title: "Замена", text: "Мы выполняем работу за 20-30 минут." }
            ].map((step, i) => (
              <div key={i} className="text-center group relative">
                <div className="w-20 h-20 rounded-3xl bg-dark border border-white/5 flex items-center justify-center mx-auto mb-8 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-500 shadow-xl">
                  <span className="text-2xl font-black text-primary group-hover:scale-110 transition-transform">{step.num}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed max-w-[250px] mx-auto">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Pricing Section */}
      <section id="prices" className="py-24 bg-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-dark-lighter rounded-[40px] border border-white/5 p-8 md:p-16 overflow-hidden relative shadow-2xl">
            <div className="flex flex-col gap-6 mb-12 relative">
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">Наши <span className="text-primary">Цены</span></h2>
                <p className="text-white/40 text-sm sm:text-base">Стоимость полного комплекса (4 колеса, балансировка, грузики)</p>
              </div>
            </div>
            
            <div className="space-y-3">
              {[
                { size: "R13 - R14", price: "1 800 ₽" },
                { size: "R15", price: "2 200 ₽" },
                { size: "R16 - R17", price: "2 600 ₽" },
                { size: "R18 - R19", price: "3 200 ₽" },
                { size: "R20+", price: "от 4 000 ₽" }
              ].map((row, i) => (
                <div key={i} className="flex items-center justify-between p-5 md:p-6 rounded-2xl border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all cursor-default group">
                  <div className="flex items-center gap-4">
                    <span className="font-bold text-lg md:text-xl text-white/90">{row.size}</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="text-xl md:text-2xl font-black text-white">{row.price}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12">
              <p className="text-sm text-white/50 italic mb-10 text-center">* Цены указаны за легковые автомобили. Кроссоверы и внедорожники +20% к стоимости.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#appointment" className="btn-primary w-full sm:w-auto text-center">Записаться на сервис</a>
                <button className="px-8 py-4 border border-white/10 rounded-xl font-bold hover:bg-white/5 transition-all w-full sm:w-auto text-white/60 hover:text-white">Скачать прайс (.pdf)</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Reviews Section */}
      <section id="reviews" className="py-24 bg-dark-lighter relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-extrabold mb-4">Что говорят <span className="text-primary">Клиенты</span></h2>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <p className="text-white/60 font-medium">Более 500 положительных отзывов</p>
                <div className="hidden sm:block w-px h-4 bg-white/10"></div>
                <a href="https://yandex.ru/maps" target="_blank" rel="noreferrer" className="flex items-center gap-2 group cursor-pointer">
                  <span className="text-yellow-500 font-bold">5.0</span>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                  </div>
                  <span className="text-[10px] text-white/40 uppercase font-black tracking-widest group-hover:text-primary transition-colors">Яндекс.Карты</span>
                </a>
              </div>
            </div>
            <a href="https://yandex.ru/maps" target="_blank" rel="noreferrer" className="hidden lg:flex px-6 py-3 bg-white/5 border border-white/10 rounded-xl items-center gap-2 font-bold hover:bg-white/10 transition-all text-sm group">
              Читать все отзывы <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Алексей К.", date: "2 недели назад", avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop", text: "Лучший шиномонтаж в районе. Приехал с боковым порезом, думал колесо на выброс. Мастера сделали за 40 минут, дали гарантию. Очень доволен!", rating: 5 },
              { name: "Мария С.", date: "1 месяц назад", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop", text: "Очень чистый бокс, вежливый персонал. Пока меняли резину, пила кофе в уютной зоне ожидания. Все быстро и профессионально. Рекомендую!", rating: 5 },
              { name: "Дмитрий В.", date: "3 дня назад", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop", text: "Оборудование реально новое, Hoffman. Балансировка идеальная, на трассе руль не бьет. Цены адекватные для такого уровня сервиса.", rating: 5 }
            ].map((review, i) => (
              <div key={i} className="p-8 bg-dark rounded-3xl border border-white/10 relative group hover:border-primary/20 transition-all shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                    <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">{review.name}</div>
                    <div className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold">{review.date}</div>
                  </div>
                </div>
                <div className="flex text-yellow-500 mb-5">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-white/70 text-[15px] leading-relaxed relative z-10">"{review.text}"</p>
                <div className="absolute top-8 right-8 text-white/5 pointer-events-none">
                  <Quote className="w-16 h-16 fill-current" />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center lg:hidden">
            <a href="https://yandex.ru/maps" target="_blank" rel="noreferrer" className="inline-flex px-8 py-4 bg-white/5 border border-white/10 rounded-xl items-center gap-2 font-bold hover:bg-white/10 transition-all text-sm group">
              Читать все отзывы на Яндексе <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* 7. FAQ Section */}
      <section className="py-24 bg-dark">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Остались вопросы?</h2>
            <p className="text-white/60">Мы собрали самые частые вопросы наших клиентов</p>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "Сколько времени занимает комплексная переобувка?", a: "В среднем процесс занимает 20-30 минут для одного автомобиля при наличии предварительной записи." },
              { q: "Нужно ли записываться заранее?", a: "Мы рекомендуем записываться заранее, особенно в сезон, чтобы избежать очередей. Но мы также принимаем клиентов в порядке живой очереди." },
              { q: "Даете ли вы гарантию на свои работы?", a: "Да, мы предоставляем гарантию 6 месяцев на все выполненные работы, включая балансировку и ремонт порезов." },
              { q: "Работаете ли вы с датчиками давления (TPMS)?", a: "Безусловно. Наши мастера обучены работе с системами TPMS и гарантируют их сохранность при монтаже." }
            ].map((item, i) => (
              <div 
                key={i} 
                onClick={() => toggleFaq(i)}
                className={`bg-white/2 border rounded-2xl p-6 transition-all cursor-pointer group hover:bg-white/5 ${activeFaq === i ? 'border-primary/30 shadow-lg' : 'border-white/5'}`}
              >
                <div className="flex items-center justify-between">
                  <h4 className={`font-bold text-lg transition-colors ${activeFaq === i ? 'text-primary' : ''}`}>{item.q}</h4>
                  <ChevronDown className={`w-5 h-5 text-primary transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`} />
                </div>
                {activeFaq === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-white/60 text-[15px] leading-relaxed mt-4 pt-6 border-t border-white/5 pb-2">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="appointment" className="py-32 bg-dark relative overflow-hidden scroll-mt-40 flex items-center min-h-[70vh]">
        {/* Horizontal Glowing Separator */}
        <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-white/20 via-white/5 to-transparent z-20"></div>
        <div className="absolute top-0 right-0 w-1/2 h-px bg-gradient-to-l from-primary/30 to-transparent blur-[4px] z-10"></div>
        <div className="absolute top-0 right-0 w-1/3 h-[2px] bg-gradient-to-l from-white/40 to-transparent blur-[10px] z-10"></div>
        
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 blur-[100px] rounded-full"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 bg-dark p-8 md:p-16 rounded-[40px] shadow-2xl border border-white/10">
            <div className="text-center md:text-left flex-1">
              <h2 className="text-3xl md:text-5xl font-black mb-4 leading-tight text-white">Запишитесь на сервис <br /><span className="text-primary">со скидкой 10%</span></h2>
              <p className="text-white/60 text-lg">Оставьте заявку сейчас и получите бонус на первое посещение</p>
            </div>
            
            <div className="hidden md:block relative">
              <div className="w-px h-64 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
              <div className="absolute inset-0 w-px h-64 bg-white/10 blur-[4px]"></div>
            </div>
            
            <div className="w-full md:w-auto flex flex-col gap-4 flex-1">
              <input type="tel" placeholder="+7 (___) ___-__-__" className="bg-white/10 border border-white/20 px-8 py-4 rounded-xl focus:outline-none focus:border-primary transition-colors text-lg font-bold text-white placeholder:text-white/20 w-full" />
              <button className="btn-primary w-full py-5 text-lg">Получить скидку</button>
              <p className="text-[10px] text-white/30 text-center leading-tight">
                Нажимая на кнопку, вы соглашаетесь с <a href="#" className="underline hover:text-primary">политикой обработки данных</a> в соответствии с ФЗ-152.
              </p>
            </div>
          </div>
          
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 relative overflow-hidden group">
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="grid md:grid-cols-3 gap-12 relative z-10">
                <div className="flex flex-col items-center text-center group/item">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover/item:bg-primary transition-all duration-500 shadow-lg border border-primary/20">
                    <MapPin className="text-primary w-7 h-7 group-hover/item:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-white/40 text-[10px] uppercase tracking-[0.2em] mb-2 font-black">Адрес</div>
                    <div className="font-bold text-white text-base leading-snug">г. Нижний Новгород,<br /> пл. Минина и Пожарского</div>
                  </div>
                </div>
                
                <div className="flex flex-col items-center text-center group/item">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover/item:bg-primary transition-all duration-500 shadow-lg border border-primary/20">
                    <Phone className="text-primary w-7 h-7 group-hover/item:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-white/40 text-[10px] uppercase tracking-[0.2em] mb-2 font-black">Телефон</div>
                    <div className="font-bold text-xl text-white">
                      <a href="tel:+79990000000" className="hover:text-primary transition-colors">+7 999 000 00 00</a>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col items-center text-center group/item">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover/item:bg-primary transition-all duration-500 shadow-lg border border-primary/20">
                    <Clock className="text-primary w-7 h-7 group-hover/item:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-white/40 text-[10px] uppercase tracking-[0.2em] mb-2 font-black">Режим работы</div>
                    <div className="font-bold text-white text-base leading-snug">Круглосуточно,<br /> 24/7 без выходных</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Map Section */}
      <section id="contacts" className="bg-dark pb-24">
        <div className="container mx-auto px-4">
          <div className="h-[450px] rounded-[40px] overflow-hidden border border-white/10 relative group grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
            <iframe 
              src="https://yandex.ru/map-widget/v1/?ll=44.006857%2C56.326887&z=16&pt=44.006857%2C56.326887,pm2rdm" 
              width="100%" 
              height="100%" 
              frameBorder="0"
              className="absolute inset-0"
              title="Yandex Map"
            ></iframe>
            <div className="absolute inset-0 pointer-events-none border-[12px] border-dark rounded-[40px]"></div>
          </div>
        </div>
      </section>

      {/* 9. Contacts & Footer */}
      <footer id="contacts" className="pt-24 pb-12 bg-dark-lighter">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Tool className="text-white w-6 h-6" />
                </div>
                <span className="text-xl font-display font-extrabold uppercase tracking-tighter text-white">
                  Tire<span className="text-primary">Master</span> NN
                </span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed mb-6">
                Премиальное обслуживание вашего автомобиля в Нижнем Новгороде. Мы заботимся о вашей безопасности на каждом километре.
              </p>
              <div className="flex items-center gap-4">
                <a href="https://t.me" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors group">
                  <FaTelegramPlane className="text-xl group-hover:scale-110 transition-transform -translate-x-[1px] translate-y-[0.5px]" />
                </a>
                <a href="https://vk.com" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors group">
                  <FaVk className="text-xl group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-8 text-white uppercase tracking-widest text-xs">Навигация</h4>
              <ul className="space-y-4 text-sm text-white/40">
                <li><a href="#services" className="hover:text-primary transition-colors">Услуги</a></li>
                <li><a href="#prices" className="hover:text-primary transition-colors">Цены</a></li>
                <li><a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a></li>
                <li><a href="#contacts" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-8 text-white uppercase tracking-widest text-xs">Контакты</h4>
              <ul className="space-y-4 text-sm text-white/40">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>г. Нижний Новгород,<br />пл. Минина и Пожарского</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="font-bold text-white">+7 999 000 00 00</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>Ежедневно: 24 / 7</span>
                </li>
              </ul>
            </div>
            </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-white/20 text-xs text-center md:text-left">
              © 2026 TireMaster NN. Нижний Новгород.
            </p>
            <div className="flex gap-8 text-[10px] text-white/20 uppercase tracking-widest font-bold">
              <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white transition-colors">Договор оферты</a>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Fixed mobile call button */}
      <div className="fixed bottom-6 right-6 z-[60] md:hidden">
        <a href="tel:+79990000000" className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(249,115,22,0.6)] animate-bounce">
          <Phone className="text-white w-8 h-8" />
        </a>
      </div>
    </div>
  );
};

export default App;
