/*function printTimeStamp() {
    const date = new Date();
    return `${date.getHours()}:${date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`}:${
        date.getSeconds() > 9 ? date.getSeconds() : `0${date.getSeconds()}`
    }`;
}

function getUserWithoutPromise() {
    let user = { firstName: "Namn" };
    return user;
}

function getUserWithPromise(ok) {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            if (!ok) reject(printTimeStamp() + "Något blev fel!");
            else reslove({ firstName: "Namn" });
        }, 3000);
    });
}

const user = getUserWithoutPromise();
console.log(printTimeStamp(), user);*/

const url = 'http://localhost:3000/users';

fetch(url, { mode: "cors" })
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then((users) => {
        console.log(users);
        const html = users.map(user => `<p>${user.firstName}</p>`).join("");
        document.body.insertAdjacentHTML("beforeend", html);
});