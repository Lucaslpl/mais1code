import axios from 'axios'
axios.get('https://api.github.com/users/Lucaslpl').then(res => {
    console.log(res.data)
})
