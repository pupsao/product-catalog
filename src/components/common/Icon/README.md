# Icon usage guide

Компонент Icon є обгорткою над бібліотекою Lucide (lucide-react).
Прямий імпорт іконок з lucide-react у компонентах заборонений. Усі іконки в проєкті повинні використовуватись тільки через компонент Icon.

## Базове використання

<Icon name="home" />

## Дефолтні значення:

size = 16px
strokeWidth = 1.5
колір береться з CSS-властивості color (через currentColor)

Іконка не має жорстко заданого кольору та автоматично підлаштовується під колір тексту в контейнері.

## Зміна розміру

<Icon name="home" size={20} />

## Зміна кольору

Колір змінюється через CSS або Tailwind, оскільки іконка використовує currentColor.

1. Через Tailwind:
   <Icon name="home" className="text-red-500" />

2. Через звичайний CSS:
   .icon-danger {
   color: red;
   }

<Icon name="home" className="icon-danger" />

## Filled варіант

За замовчуванням іконки мають лише stroke. Для заповненої версії потрібно передати fill="currentColor".
<Icon name="heart" fill="currentColor" />

## Filled + колір:

<Icon 
  name="heart" 
  fill="currentColor" 
  className="text-red-500" 
/>

## Бейдж / лічильник

Компонент Icon не містить логіки бейджа або лічильника.
Для відображення кількості використовуйте контейнер з position: relative та абсолютний елемент поверх іконки.
