/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        
        $('#section-bio').css('border', '2px solid blue').css('border-radius', '10px').css('margin', '10px').css('padding', '5px');
        $('#section-praise').css('border', '2px solid white').css('border-radius', '10px').css('margin', '10px').css('padding', '5px');
        $('#section-quotes').css('border', '2px solid black').css('border-radius', '10px').css('margin', '10px').css('padding', '5px');
        
        let topRated = data.discography.topRated;
        let topRatedTitles = _.map(topRated, function(recording) {
            return $('<li>').text(recording.title);
        });
        $('#list-top-rated').append(topRatedTitles);
        
        $('<section>').attr('id', 'section-recordings').appendTo('#sidebar');
        $('<ul>').attr('id', 'list-recordings').appendTo('#section-recordings');
        
        let recordings = data.discography.recordings;
        let recordingListElements = _.map(recordings, function(track){
            let $listElement = $('<li>').attr('class', 'recording');
                $listElement.append($('<div>').attr('class', 'title').text('Title: ' + track.title));
                $listElement.append($('<div>').attr('class', 'artist').text('Artist: ' + track.artist));
                $listElement.append($('<div>').attr('class', 'release').text('Release: ' + track.release));
                $listElement.append($('<div>').attr('class', 'year').text('Year: ' + track.year));
            return $listElement;
        });
        console.log(recordingListElements);
        $('#list-recordings').append(recordingListElements);
        
        let $divImageTopRated = $('<div>').attr('id', 'img-container-top-rated').attr('class', 'image-container');
        let $topRatedImage = $('<img>').attr('id', 'top-rated-image').attr('class', 'image').attr('src', topRated[0].art);
        $divImageTopRated.append($topRatedImage);
        $('#header-top-rated').append($divImageTopRated);
        
        let $divImageRecording = $('<div>').attr('id', 'img-container-recording').attr('class', 'image-container');
        let $recordingImage = $('<img>').attr('id', 'recording-image').attr('class', 'image').attr('src', recordings[0].art);
        $divImageRecording.append($recordingImage);
        $('#section-recordings').prepend($divImageRecording);
        
        
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


