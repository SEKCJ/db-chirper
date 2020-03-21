import { Query } from './connection';

const all = async () => Query('SELECT * FROM users');
const one = async (id: string) => Query('SELECT * FROM users WHERE id = ?', [id])
const post = async (name: string, email: string, password: string) =>
    Query(`INSERT INTO users(name, email, password) VALUES("${name}", "${email}", "${password}");`)
const put = async (id: string, name: string, email: string, password: string) =>
    Query(`UPDATE users SET name="${name}", email="${email}", password="${password}" WHERE id = ?`, [id])
const del = async (id: string) => Query('DELETE from users WHERE id = ?', [id])

const Users = {
    all,
    one,
    post,
    put,
    del,
}

export default Users;