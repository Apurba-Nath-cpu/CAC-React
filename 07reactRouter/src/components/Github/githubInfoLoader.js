export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Apurba-Nath-cpu')

    return response.json()
}