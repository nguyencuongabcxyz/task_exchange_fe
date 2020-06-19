type Action<P = any> = {
    type: string;
    payload: P;
}

export default Action;