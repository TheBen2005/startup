export async function LoginOrSignup({ endpoint }) {
    const response = await fetch(endpoint, {
        method: 'post',
        body: JSON.stringify({ email: email, password: password }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    if (response?.status === 200) {
        localStorage.setItem('userName', userName);
        props.onLogin(userName);
    } else {
        const body = await response.json();
        setDisplayError(`⚠ Error: ${body.msg}`);
    }




}