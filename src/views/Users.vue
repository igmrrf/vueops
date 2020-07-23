<template>
    <div class="users">
        <h1>Users</h1>
        <form v-on:submit="addUser">
            <input
                type="text"
                name
                id
                v-model="newUser.name"
                placeholder="Enter Name"
            />

            <br />
            <input
                type="text"
                name
                id
                v-model="newUser.email"
                placeholder="Enter Email"
            />
            <br />
            <input type="submit" value="Submit" />
        </form>

        <ul>
            <li v-for="user in users" v-bind:key="user.id">
                <input
                    type="checkbox"
                    name
                    class="toggle"
                    id
                    v-model="user.contacted"
                />
                <span :class="{ contacted: user.contacted }">
                    {{ user.name }}: {{ user.email }}
                    <button v-on:click="deleteUser(user)">Delete</button>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "users",
    props: {
        msg: String,
    },
    data() {
        return {
            newUser: {},
            users: [
                {
                    id: 1,
                    name: "John Doe",
                    email: "johndoe@gmail.com",
                    contacted: false,
                },
                {
                    id: 2,
                    name: "Smith Stones",
                    email: "smithstones@gmail.com",
                    contacted: false,
                },
                {
                    id: 3,
                    name: "Sandra Dave",
                    email: "sandradave@gmail.com",
                    contacted: false,
                },
            ],
        };
    },
    methods: {
        addUser: function(e) {
            e.preventDefault();
            this.users.push(this.newUser);
            console.log(this.newUser);
            console.log(this.newUser.name);
            console.log(this.users);
        },
        deleteUser: function(user) {
            this.users.splice(this.users.indexOf(user), 1);
        },
    },
    created: function() {
        console.log("created ran");
        
        this.$http
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) => (this.users = res.data));
    },
};
</script>

<style scoped>
.contacted {
    text-decoration: line-through;
}
</style>
