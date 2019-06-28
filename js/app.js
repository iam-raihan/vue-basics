Vue.component('my-user-list', {
    props: ['users'],
    template: `
        <ol class="list-group">
            <li v-for="user in users" class="list-group-item list-group-item-action d-flex justify-content-between">
                {{ user.name | UpperCase }}
                <button v-on:click="$emit('remove-user', user)" class="btn btn-danger btn-circle">X</button>
            </li>
        </ol>
    `
})

const app = new Vue({
    el: '#app',
    components: [
        'my-user-list'
    ],
    data: {
        newUserName: '',
        users: [
            { name: 'Rick' },
            { name: 'Morty' },
            { name: 'Pikachu' }
        ]
    },
    filters: {
        UpperCase(text) {
            return text.toUpperCase()
        }
    },
    computed: {
        countUsers() {
            return this.users.length
        }
    },
    methods : {
        addNewUser() {
            this.users.push({name: this.newUserName})
            this.newUserName = ''
        },
        removeUser(selectedUser) {
            // var index = this.users.indexOf(selectedUser)
            // if (index > -1)
            //     this.users.splice(index, 1)
            
            this.users = this.users.filter((user) => user !== selectedUser)
        }
    },
    // life cycles
    created() {
        console.log('created')
    },
    mounted() {
        console.log('mounted')
    },
    updated() {
        console.log('updated')
    },
    destroyed() {
        console.log('destroyed')
    },
})

// setTimeout(() => {
//     app.$destroy()
// }, 5000)