function loadTimetable() {
    $('#calControl').css({'position':'sticky'});
    $(window).off("scroll");

    meetingListDataF = JSON.parse(window.localStorage.getItem('meetingListDataF'));
    meetingListDataS = JSON.parse(window.localStorage.getItem('meetingListDataS'));

    $('.calPreview').removeClass('hidden');
        
    generateToolbarSelectionList(meetingListDataF, 'F');
    generateToolbarSelectionList(meetingListDataS, 'S');

    toggleViewTimetablePlanBtn();
    console.log('Successfully loaded timetable!')
}

function saveTimetable() {
    window.localStorage.setItem('meetingListDataF', JSON.stringify(meetingListDataF));
    window.localStorage.setItem('meetingListDataS', JSON.stringify(meetingListDataS));
}

loadTimetable();
setTimeout(saveTimetable, 3000);