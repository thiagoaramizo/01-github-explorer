import { RepositoryItem } from "./RepositoryItem"
import '../styles/repositories.scss'
import { useEffect, useState } from "react"

const repo = {
    name: 'Unform',
    description: 'Forms em React',
    link: 'https://github.com/thiagoaramizo'
}

interface Repository {
    repository: {
        id: string
        name: string
        description: string
        html_url: string
    }
}

export function RepositoryList(){

    const [repositories, setRepositories] = useState<Repository[]>([])

    useEffect( () => {
        fetch('https://api.github.com/users/thiagoaramizo/repos')
            .then( response => response.json() )
            .then( data => setRepositories(data as Repository[]) )
    }, [] )
    
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                {repositories.map((repo) => <RepositoryItem repository={repo} key={repo.id}/>)}
            </ul>
        </section>
    )
}