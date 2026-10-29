
export function getDays(tutorId) {
    const saved = localStorage.getItem('availability');
    if (saved) {
        return JSON.parse(saved);
    }

    const availability = [
        { id: 1, day: 'Wed', date: 28, title: 'Wednesday, October 28', times: ['9:00 AM', '1:00 PM', '2:00 PM', '6:00 PM'] },
        { id: 2, day: 'Thu', date: 29, title: 'Thursday, October 29', times: ['9:00 AM', '10:00 AM', '1:00 PM', '4:00 PM'] },
    ];
    return availability;
}