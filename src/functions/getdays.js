
export async function getDays(tutorId, endpoint) {
    const response = await fetch(endpoint, {
            method: 'post',
            body: JSON.stringify({ tutorId: tutorId }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        if (response?.status === 200) {
            return response.json();
        } else {
            const body = await response.json();
            setDisplayError(`⚠ Error: ${body.msg}`);
        }
}