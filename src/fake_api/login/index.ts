const loginAPI = (userName: string, password: string): Promise<{id: string, userName: string, token: string}> => {
    const result: {id: string, userName: string, token: string} = {
        id: 'userid01',
        userName: userName,
        token: 'erouersfjsaldfuoueorjeljljadfo739473dj',
    }
    const error = new Error('Loi roi!');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(error);
        }, 300)
    })
}

export default loginAPI;