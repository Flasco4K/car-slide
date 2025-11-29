var models = [
    {
        name: 'Golf 7.5 Gti',
        Image: 'img/IMG_4769.jpg',
        link: 'https://binekarac.vw.com.tr/tr/modeller-fiyatlar/arac-modelleri/yeni-golf.html'
    },
    {
        name: 'Golf 7.5 Gti',
        Image: 'img/IMG_4785.jpg',
        link: 'https://binekarac.vw.com.tr/tr/modeller-fiyatlar/arac-modelleri/yeni-golf.html'
    },
    {
        name: 'Golf 7.5 Gti',
        Image: 'img/IMG_4911.jpg',
        link: 'https://binekarac.vw.com.tr/tr/modeller-fiyatlar/arac-modelleri/yeni-golf.html'
    },
    {
        name: 'Golf 7.5 Gti',
        Image: 'img/IMG_5085.jpg',
        link: 'https://binekarac.vw.com.tr/tr/modeller-fiyatlar/arac-modelleri/yeni-golf.html'
    },
    {
        name: 'Golf 7.5 Gti',
        Image: 'img/IMG_5187.jpg',
        link: 'https://binekarac.vw.com.tr/tr/modeller-fiyatlar/arac-modelleri/yeni-golf.html'
    },
];

var index = 0;
var slaytCount = models.length;
var interval

var settings = {
    duration: "2000",
    random: false
};

init(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener //Sol Buton
    ('click', function () {

        index--;
        showSlide(index);
        console.log(index);

    });

document.querySelector('.fa-arrow-circle-right').addEventListener //Sağ Buton
    ('click', function () {

        index++;
        showSlide(index);
        console.log(index);

    });
document.querySelectorAll('.arrow').forEach(function (item) {
    item.addEventListener('mouseenter', function () {
        clearInterval(interval);
    })
});
document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
})

function init(settings) {

    var prev;
    interval = setInterval(function () {

        if (settings.random) {
            //random index
            do {
                index = Math.floor(Math.random() * slaytCount);
            } while (index == prev)
            prev = index;
        } else {
            //artan index
            if (slaytCount == index + 1) {
                index = -1;
            }
            showSlide(index);
            console.log(index);
            index++;

        }
        showSlide(index);

    }, settings.duration)

}


function showSlide(i) {

    index = i;

    if (i < 0) {
        index = slaytCount - 1;
    }
    if (i >= slaytCount) {
        index = 0;
    }

    document.querySelector('.card-img-top').setAttribute('src', models[index].Image);
    document.querySelector('.card-title').textContent = models[index].name;
    document.querySelector('.card-link').setAttribute('href', models[index].link);
}



