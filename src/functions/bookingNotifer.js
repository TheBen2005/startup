// IMPORTANT: WEBSOCKETPLACEHOLDER. A real WebSocket connection to my server will replace this timer.
export function bookingNotifier(onBooking) {
    const interval = setInterval(() => {
        onBooking({ dayId: 1, time: '1:00 PM' });
    }, 8000);

    return () => clearInterval(interval);
}