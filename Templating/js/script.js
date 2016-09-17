$(function () {
	
var html = $('#info').html();
var data = {
	title: 'Шевченко Александр Сергеевич',
	photo: {
      src: 'img/photo.jpg',
      alt: 'Мое фото',
    },
    basicActivity: 'Студент заборостроительной академии',
    whyFrontend: 'Хочу учить Frontend, потому что:',
    reason1: 'Мне это интересно;',
    reason2: 'За это хорошо платят;',
    reason3: 'Хочу больше зарабатывать',
    myPhone: 'Мой контактный номер телефона',
    phoneNumber: '+38 095-508-03-94',
    myFb: 'Мой адрес в Facebook:',
    fbLink: 'http:/Facebook.com',
    fbLinkTitle: 'Facebook',
    feedback: 'Мой фидбек:',
    myFeedback: 'Если нужен забор, обращайтесь!',

};
var content = tmpl(html, data);


$('body').append(content);


});