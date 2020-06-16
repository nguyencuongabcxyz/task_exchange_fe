const loginAPI = (accountInfo: {userName: string, 
    password: string}): Promise<{userName: string, token: string}> => {
    const result: {userName: string, token: string} = {
        userName: accountInfo.userName,
        token: 'erouersfjsaldfuoueorjeljljadfo739473dj',
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(result);
        }, 300)
    })
}

export default loginAPI;