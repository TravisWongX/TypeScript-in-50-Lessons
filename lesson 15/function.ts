type Result = {
    title: string,
    url: string,
    abstract: string
}

declare function search(
    query: string,
    tags?: string[]
): Result[]

search('Ember')
search('Ember', ['JS', 'TS'])