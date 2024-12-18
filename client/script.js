const url = 'http://localhost:3000/users';

fetch(url)
    .then((response) => response.json())
    .then((users) => {
        console.log(users);

        const ul = document.createElement("ul");
        ul.classList.add("class-list"); //klass för styling

        users.forEach(user => {
            const li = document.createElement("li"); 
            li.classList.add("class-item"); //klass för styling
            li.innerHTML = `
            <p><strong>Namn:</strong> ${user.firstName} ${user.lastName}</p>
            <p><strong>Användarnamn:</strong> ${user.username}</p>
            <p><strong>ID:</strong> ${user.id}</p>
            <p><strong>Färg:</strong> ${user.color}</p>
            `;

            li.style.backgroundColor = user.color;

            ul.appendChild(li);
        });

        document.body.appendChild(ul);
});