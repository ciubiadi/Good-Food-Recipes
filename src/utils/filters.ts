export function truncateWords(str: string, count: number) {
    console.log('truncateWords-str', str);
    if (!str) return str;
    return str.split(" ").slice(0, count).join(" ")
}