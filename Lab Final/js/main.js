var songs = [{
    key: 1,
    artist: 'Journey',
    song: 'Don\'t Stop Believing',
    time: '03:50',
    album: 'Greatest Hits',
    rating: 4,
    genre: 'Rock',
    cover: 'images/g.jpg'
}, {
    key: 2,
    artist: 'Motley Crue',
    song: 'Ten Seconds To Love',
    time: '03:55',
    album: 'Shout At The Devil',
    rating: 5,
    genre: 'Pop',
    cover: 'images/f.jpg'
}, {
    key: 3,
    artist: 'Motley Crue',
    song: 'Wild Side',
    time: '02:30',
    album: 'Greatest Hits',
    rating: 3,
    genre: 'Pop',
    cover: 'images/a.jpg'
}, {
    key: 4,
    artist: 'Def Leppard',
    song: 'Photograph',
    time: '04:25',
    album: 'Histeria',
    rating: 4,
    genre: 'Classical',
    cover: 'images/b.jpg'
}, {
    key: 5,
    artist: 'Kiss',
    song: 'Lord Of Thunder',
    time: '03:20',
    album: 'Destroyer',
    rating: 4,
    genre: 'Techno',
    cover: 'images/c.jpg'
}, {
    key: 6,
    artist: 'Ozzy Obsourne',
    song: 'Crazy Train',
    time: '04:56',
    album: 'Blizzard Of Oz',
    rating: 2,
    genre: 'Rock',
    cover: 'images/d.jpg'
}, {
    key: 7,
    artist: 'Yanni',
    song: 'The Rain Must Fall',
    time: '05:50',
    album: 'Acropolis',
    rating: 4,
    genre: 'Classical',
    cover: 'images/e.jpg'
}];

var favorites = [];

function initData() {

    var form = document.querySelector('#search-form');
    var reset = document.querySelector('#reset');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        var formFields = this.elements;

        var artist = formFields['artist'].value;
        var song = formFields['song'].value;
        var album = formFields['album'].value;
        var genre = formFields['genre'].value;

        if (!artist && !song && !album && !genre) {
            showDialogMessage('Please enter search criteria', 'Attention');
            return;
        }

        var filteredList = songs.filter(a => {
            return (artist ? a['artist'].toLowerCase().startsWith(artist.toLowerCase()) : true) &&
                (song ? a['song'].toLowerCase().startsWith(song.toLowerCase()) : true) &&
                (album ? a['album'].toLowerCase().startsWith(album.toLowerCase()) : true) &&
                (genre ? a['genre'].toLowerCase().startsWith(genre.toLowerCase()) : true);
        });

        setSongList(filteredList);
    });

    reset.addEventListener('click', function () {

        for (var i = 0; i < 4; i++)
            form.elements[i].value = '';

        setSongList([]);
        favorites = [];
        updateFavorites();

    });

}

initData();

function setSongList(list) {

    //show / hide song list
    var container = document.querySelector('.middle-part.list-area');

    if (!list.length) {
        container.className += ' hidden';
        return;
    }
    else container.className = container.className.replace(' hidden', '');
    //end show / hide


    var table = document.querySelector('#song-list');
    var tbody = table.querySelector('tbody');

    //first Clear the table
    tbody.querySelectorAll('tr').forEach(row => row.remove());

    //add all items to table
    list.forEach(item => {
        var tr = document.createElement('tr');
        tr.appendChild(createTD(item['artist']));
        tr.appendChild(createTD(item['song']));
        tr.appendChild(createTD(item['time']));
        tr.appendChild(createTD(item['album']));
        tr.appendChild(createStars(item['rating']));
        tr.appendChild(createTD(item['genre']));
        tr.appendChild(createFavorite(item));
        tr.appendChild(createDownload(item));

        tbody.appendChild(tr);
    })

    function createTD(txt) {
        var td = document.createElement('td');
        td.innerHTML = txt;
        return td;
    }

    function createStars(count) {
        var td = document.createElement('td');
        var div = document.createElement('div');

        for (var i = 1; i <= 5; i++) {
            var star = document.createElement('i');
            star.className = `${(i <= count ? 'fa' : 'far')} fa-star`;
            div.appendChild(star);
        }

        td.appendChild(div);
        return td;
    }

    function createFavorite(item) {
        var td = document.createElement('td');
        var button = document.createElement('button');
        button.id = `btn-${item.key}`;
        button.title = 'Add To Favorites';

        var icon = document.createElement('i');
        icon.className = favorites.map(a => a.key).indexOf(item.key) > -1 ? 'fa fa-heart' : 'far fa-heart';

        button.addEventListener('click', function (e) {
            e.preventDefault();

            //check if the item is in favorites or not
            var idx = favorites.map(a => a.key).indexOf(item.key);
            if (idx > -1) {
                //the item is in favorites
                //will be removed
                this.title = 'Add To Favorites';
                this.querySelector('i').className = 'far fa-heart';
                favorites.splice(idx, 1);
            }
            //the item will be added to favorites
            else {
                this.title = 'Remove From Favorites';
                this.querySelector('i').className = 'fa fa-heart';
                favorites.push(item);
            }

            updateFavorites();
        })

        button.appendChild(icon);
        td.appendChild(button);
        return td;
    }

    function createDownload(item) {
        var td = document.createElement('td');
        var button = document.createElement('button');
        button.title = 'Download';
        var icon = document.createElement('i');
        icon.className = 'fa fa-download';

        button.addEventListener('click', function (e) {
            e.preventDefault();

            showDialogMessage(`\'${item['song']}\' has downloaded successfully.....`, 'Download Completed');

        })

        button.appendChild(icon);
        td.appendChild(button);
        return td;
    }
}

function updateFavorites() {

    function checkShowHide() { //using this function twice
        //hide / show favorites
        var container = document.querySelector('.middle-part.color-blue');

        if (!favorites.length) container.className += ' hidden';
        else container.className = container.className.replace(' hidden', '');
    }

    checkShowHide();

    var div = document.querySelector('#favorites');

    //first remove existing items
    div.querySelectorAll('.image').forEach(image => image.remove());

    favorites.forEach(item => {
        var mainDiv = document.createElement('div');
        mainDiv.className = 'image item';

        mainDiv.addEventListener('click', function (e) {
            e.preventDefault();

            //remove clicked item from favorites
            var idx = favorites.map(a => a.key).indexOf(item.key);
            if (idx > -1) {
                var table = document.querySelector('#song-list');
                var button = table.querySelector(`#btn-${item.key}`);
                if (button) button.querySelector('i').className = 'far fa-heart';

                favorites.splice(idx, 1);
                this.remove();
                checkShowHide();
            }
        })

        var innerDiv = document.createElement('div');
        innerDiv.style = `background-image: url(${item.cover})`;

        mainDiv.appendChild(innerDiv);
        div.appendChild(mainDiv);
    })
}

function showDialogMessage(txt, title) {
    //jQueryUI dialog setup
    var $dialog = $('<div>');
    $dialog.html($('<div>').append($('<i>', { class: 'fa fa-info-circle' })).append($('<span>', { text: txt })));
    $dialog.attr('title', title);
    $dialog.dialog({
        modal: true,
        autoOpen: true,
        show: {
            effect: "blind",
            duration: 200
        },
        hide: {
            effect: "fade",
            duration: 200
        }
    });
}