export const getErrorMessageByObject = (o: any, k: Array<string>, sep: string) => {
    const errorMsg = k.map(key => o[key]).filter(v => v).join(sep);
    return errorMsg;
}