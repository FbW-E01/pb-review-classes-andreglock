class Component {
    constructor(name) {
        this.name = name;
    }

    render() { 
        console.log(`<p>Component ${this.name}  rendering`);
    }
}

class UserCard extends Component {
    constructor(user) {
        super(user);
    }

    render() {
        console.log(`
        <div class="card card-user">
            <img class="card-img-top" src="user imageUrl here" alt>
            <div class="card-body">
                <h5 class="card-title">${this.name.user}</h5>
                <p class="card-text">To contact, please send a message to</p>
                <a
                    href="mailto:${this.name.email}"
                    class="btn btn-primary"
                >
                    ${this.name.email}
                </a>
            </div>
        </div>`);
    }
}

const usersArray = [
    {user: 'Bob', email: 'bob@email.com', imageUrl: 'http://www.bob.com'},
    {user: 'Linda', email: 'linda@email.com', imageUrl: 'http://www.linda.com'},
    {user: 'Angela', email: 'angela@email.com', imageUrl: 'http://www.angela.com'},
    {user: 'Alaska', email: 'alaska@email.com', imageUrl: 'http://www.alaska.com'},
    {user: 'Eureka', email: 'eureka@email.com', imageUrl: 'http://www.eureka.com'},
]

const users = usersArray.map(x => {
    return new UserCard(x);
})

console.log(users);
users.forEach(x => {
    x.render();
})

console.log(typeof UserCard);
console.log(typeof users[0]);