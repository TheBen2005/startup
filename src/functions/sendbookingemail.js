const SERVICE_ID = 'service_o0ogt3t';
const TEMPLATE_ID = 'template_bnj3kpp';
const PUBLIC_KEY = 'aX6k02wVQZ9I9oSL_';

export async function sendBookingEmail(tutorName, slot, contact) {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
            service_id: SERVICE_ID,
            template_id: TEMPLATE_ID,
            user_id: PUBLIC_KEY,
            template_params: {
                tutor_name: tutorName,
                day: slot.day,
                time: slot.time,
                student_name: `${contact.firstName} ${contact.lastName || ''}`,
                student_email: contact.email,
                student_phone: contact.phone || 'Not provided',
            },
        }),
    });
    return response.ok;
}