function make_album(artist: string, title: string, tracks?: number) {
    let albums = { artist, title };
    if (tracks) {
    albums['tracks'] = tracks;
    }
    return albums;
    }
    
    console.log(make_album("Artist One", "The First Album"));
    console.log(make_album("Artist Two", "The Second Album"));
    console.log(make_album("Artist Three", "The Third Album", 12));