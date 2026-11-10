
export async function getDays(tutorId) {
    const response = await fetch(`/api/tutors/${tutorId}/days`);
    if (response.status === 200) {
        return response.json();
    }
    return [];
}