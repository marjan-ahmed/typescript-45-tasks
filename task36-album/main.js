function make_album(artist, title, tracks) {
    var albums = { artist: artist, title: title };
    if (tracks) {
        albums['tracks'] = tracks;
    }
    return albums;
}
console.log(make_album("Artist One", "The First Album"));
console.log(make_album("Artist Two", "The Second Album"));
console.log(make_album("Artist Three", "The Third Album", 12));
