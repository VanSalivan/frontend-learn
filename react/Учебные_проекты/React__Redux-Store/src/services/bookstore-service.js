// Сервис получения данных о книгах

export default class BookstoreService {

    data = [
        {
            id: 1,
            title: 'Грокаем Алгоритмы',
            author: 'Бхаргава Адитья',
            price: 32,
            coverImage: "https://cdn1.ozone.ru/multimedia/1037901676.jpg"
        },
        {
            id: 2,
            title: 'JavaScript. Полное руководство',
            author: 'Флэнаган Дэвид',
            price: 45,
            coverImage: "https://cdn1.ozone.ru/s3/multimedia-d/wc1200/6029228593.jpg"
        }
    ];

    getBook() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.75) { // вероятность 25% на ошибку загрузки данных
                    reject(new Error("1 к 4 = 25% на ошибку загрузки данных"))
                } else {
                    resolve(this.data)
                }
            }, 700)
        });
    }

};