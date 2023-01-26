## Технологии

- CRA или NextJS
- React (Функциональные компоненты предпочтительнее)
- MobX (Он используется на проекте)
- SCSS

## Задание

> Реализовать простой список постов блога с возможностью детального просмотра. Дизайн и доп. функционал на свой вкус.
> 

### Главная страница

- Сверстать список постов
    - Изображение
    - Название поста
    - Имя автора поста
    - Ссылку на детальную страницу
    - Пагинация (10 постов на страницу: `/posts?_limit=10&_page=0`)
- Подключить API
    - Получение списка постов: GET [https://jsonplaceholder.typicode.com/posts?_limit=10&_page=0](https://jsonplaceholder.typicode.com/posts?_limit=10&_page=0)
    - Получение списка пользователей: GET [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)
    - Получение случайного изображения: SRC [https://picsum.photos/1500/1500.jpg?random=${id}](https://picsum.photos/1500/1500.jpg?random=${props?.post?.id})

### Детальная страница

- Сверстать пост
    - Изображение
    - Название поста
    - Имя автора поста
    - Текст поста
- Подключить API
    - Получение поста: GET [https://jsonplaceholder.typicode.com/posts/<id>](https://jsonplaceholder.typicode.com/posts/ID)
    - Получение одного пользователя: GET [https://jsonplaceholder.typicode.com/users/<id>](https://jsonplaceholder.typicode.com/users/ID)
    - Получение случайного изображения: SRC [https://picsum.photos/1500/1500.jpg?random=${id}](https://picsum.photos/1500/1500.jpg?random=${props?.post?.id})

### Плюсом будет

- Реализовать
    - С использованием UI Components Antd
    - С использованием Axios
    - Добавление нового поста, сделать в модальном окне.
        - Результат запроса вывести в консоль. Возможно, потребуется дополнительный заголовок: `'CONTENT-TYPE': 'APPLICATION/JSON; CHARSET=UTF-8'`.
- Подключение API
    - Реализация с использованием FormData: POST [https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts)
