const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    getRepositories(e.target[0].value);
})

async function getRepositories(name){
    const response = await fetch(`https://api.github.com/users/${name}/repos`)
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => err)

    showRepositories(response);
}

function showRepositories(response){
    const userList = document.querySelector(".user-list");

    if(response.length > 0){
        const h1 = document.querySelector("h1");
        h1.innerHTML = `Repositórios do usuário: ${response[0].owner.login}`
        response.forEach((repository) => {
            userList.innerHTML += `
                <div class="container-repository">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journal-bookmark-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M6 1h6v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8z"/>
                        <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
                        <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
                    </svg>
        
                    <div class="repository-infos">
                        <div class="infos">
                            <h3 class="repository-name">${repository.name}</h3>
        
                            <div class="infos-lang-stars">
                                <span>${repository.language == null ? "Sem linguagem" : repository.language}</span>
        
                                <div class="stars">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                    <span>${repository.stargazers_count}</span>
                                </div>
                            </div>
                        </div>
                        <p class="repository-description">${repository.description === null ? "Sem descrição" : repository.description}</p>
                    </div>
                </div>
            `
        })
    }
    else{
        userList.innerHTML = "<h1>Nenhum repositório encontrado</h1>"
    }
}