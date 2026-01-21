import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [birthData, setBirthData] = useState({
    date: '',
    time: '',
    place: ''
  });

  const [natalResult, setNatalResult] = useState('');

  const calculateNatalChart = () => {
    if (!birthData.date || !birthData.time) {
      setNatalResult('Пожалуйста, заполните все поля для расчёта натальной карты.');
      return;
    }

    const interpretations = [
      'Ваше Солнце в знаке указывает на сильную творческую энергию и лидерские качества.',
      'Луна в вашей карте говорит об эмоциональной глубине и интуитивном восприятии мира.',
      'Восходящий знак определяет вашу внешнюю манеру и первое впечатление, которое вы производите.',
      'Меркурий влияет на ваш стиль общения и способность к обучению.',
      'Венера раскрывает ваше отношение к любви, красоте и гармонии.'
    ];

    const result = interpretations.join(' ');
    setNatalResult(result);
  };

  const services = [
    {
      icon: 'Sparkles',
      title: 'Гадание на Таро',
      description: 'Откройте тайны прошлого, настоящего и будущего через древнюю мудрость карт Таро',
      price: 'от 3000 ₽'
    },
    {
      icon: 'Flame',
      title: 'Руническое гадание',
      description: 'Скандинавские руны раскроют скрытые пути и дадут ответы на важные вопросы',
      price: 'от 2500 ₽'
    },
    {
      icon: 'Star',
      title: 'Астрология',
      description: 'Индивидуальный астрологический прогноз и анализ влияния планет на вашу судьбу',
      price: 'от 5000 ₽'
    },
    {
      icon: 'Moon',
      title: 'Натальная карта',
      description: 'Полный разбор вашей натальной карты с рекомендациями по жизненному пути',
      price: 'от 7000 ₽'
    },
    {
      icon: 'Heart',
      title: 'Любовная магия',
      description: 'Привороты, обряды на привлечение любви и укрепление отношений',
      price: 'от 10000 ₽'
    },
    {
      icon: 'Eye',
      title: 'Ясновидение',
      description: 'Сеанс ясновидения для получения ответов на самые важные вопросы',
      price: 'от 4000 ₽'
    }
  ];

  const reviews = [
    {
      name: 'Елена М.',
      text: 'Удивительная точность! Всё, что предсказала Мария, сбылось в точности. Рекомендую всем!',
      rating: 5
    },
    {
      name: 'Дмитрий П.',
      text: 'Благодаря натальной карте я понял свои сильные стороны и направление в жизни. Спасибо!',
      rating: 5
    },
    {
      name: 'Анна К.',
      text: 'Гадание на Таро помогло мне принять важное решение. Очень благодарна за помощь и поддержку.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Sparkles" className="text-primary" size={28} />
            <span className="text-2xl font-cormorant font-bold">Мария Таролог</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#natal" className="hover:text-primary transition-colors">Натальная карта</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Записаться
          </Button>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 stars-bg opacity-40"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Icon name="Moon" className="text-primary animate-float" size={80} />
                <div className="absolute inset-0 animate-glow">
                  <Icon name="Sparkles" className="text-accent absolute top-0 right-0" size={24} />
                  <Icon name="Star" className="text-accent absolute bottom-0 left-0" size={20} />
                </div>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-cormorant font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Раскройте тайны судьбы
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Профессиональная таролог и ясновидящая с 15-летним опытом помогу вам найти ответы на волнующие вопросы
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground mystic-glow">
                <Icon name="Calendar" className="mr-2" size={20} />
                Записаться на сеанс
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Онлайн-консультация
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-center mb-4">
            Мои услуги
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Выберите подходящую услугу для получения ответов на ваши вопросы
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift mystic-glow border-border bg-card">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 mx-auto">
                    <Icon name={service.icon as any} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-2xl font-cormorant text-center">{service.title}</CardTitle>
                  <CardDescription className="text-center">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-accent mb-4">{service.price}</p>
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="natal" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-center mb-4">
            Калькулятор натальной карты
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Узнайте, что звёзды говорят о вашей судьбе
          </p>
          <Card className="mystic-glow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl font-cormorant">
                <Icon name="Stars" className="text-primary" size={28} />
                Введите данные для расчёта
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="date">Дата рождения</Label>
                  <Input
                    id="date"
                    type="date"
                    value={birthData.date}
                    onChange={(e) => setBirthData({ ...birthData, date: e.target.value })}
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Время рождения</Label>
                  <Input
                    id="time"
                    type="time"
                    value={birthData.time}
                    onChange={(e) => setBirthData({ ...birthData, time: e.target.value })}
                    className="bg-background"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="place">Место рождения</Label>
                <Input
                  id="place"
                  type="text"
                  placeholder="Город, страна"
                  value={birthData.place}
                  onChange={(e) => setBirthData({ ...birthData, place: e.target.value })}
                  className="bg-background"
                />
              </div>
              <Button 
                onClick={calculateNatalChart}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                size="lg"
              >
                <Icon name="Sparkles" className="mr-2" size={20} />
                Рассчитать натальную карту
              </Button>
              {natalResult && (
                <Card className="bg-primary/10 border-primary/30">
                  <CardHeader>
                    <CardTitle className="text-xl font-cormorant">Интерпретация</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{natalResult}</p>
                    <Button variant="outline" className="mt-4 border-primary text-primary">
                      Получить полный разбор
                    </Button>
                  </CardContent>
                </Card>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-center mb-4">
            Отзывы клиентов
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Что говорят люди, которым я помогла
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="hover-lift border-border">
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-accent fill-accent" size={18} />
                    ))}
                  </div>
                  <CardTitle className="text-lg font-cormorant">{review.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-2xl text-center">
          <Icon name="Moon" className="text-primary mx-auto mb-6 animate-float" size={60} />
          <h2 className="text-4xl md:text-5xl font-cormorant font-bold mb-4">
            Запишитесь на консультацию
          </h2>
          <p className="text-muted-foreground mb-8">
            Свяжитесь со мной любым удобным способом
          </p>
          <div className="flex flex-col gap-4">
            <Card className="mystic-glow">
              <CardContent className="flex items-center justify-between p-6">
                <div className="flex items-center gap-4">
                  <Icon name="Phone" className="text-primary" size={24} />
                  <div className="text-left">
                    <p className="font-semibold">Телефон</p>
                    <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                  </div>
                </div>
                <Button variant="outline" className="border-primary text-primary">
                  Позвонить
                </Button>
              </CardContent>
            </Card>
            <Card className="mystic-glow">
              <CardContent className="flex items-center justify-between p-6">
                <div className="flex items-center gap-4">
                  <Icon name="MessageCircle" className="text-primary" size={24} />
                  <div className="text-left">
                    <p className="font-semibold">WhatsApp / Telegram</p>
                    <p className="text-muted-foreground">Быстрая связь</p>
                  </div>
                </div>
                <Button variant="outline" className="border-primary text-primary">
                  Написать
                </Button>
              </CardContent>
            </Card>
            <Card className="mystic-glow">
              <CardContent className="flex items-center justify-between p-6">
                <div className="flex items-center gap-4">
                  <Icon name="Mail" className="text-primary" size={24} />
                  <div className="text-left">
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">maria.tarot@example.com</p>
                  </div>
                </div>
                <Button variant="outline" className="border-primary text-primary">
                  Отправить
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Sparkles" className="text-primary" size={24} />
            <span className="text-xl font-cormorant font-bold">Мария Таролог</span>
          </div>
          <p className="text-muted-foreground mb-4">
            Профессиональные эзотерические услуги с 2010 года
          </p>
          <div className="flex gap-4 justify-center">
            <Icon name="Instagram" className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" size={24} />
            <Icon name="Youtube" className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" size={24} />
            <Icon name="Facebook" className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" size={24} />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
