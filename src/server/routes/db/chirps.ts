import { Query } from './connection';

const all = async () => Query('SELECT * FROM users u JOIN chirps l ON l.userid = u.id ORDER BY l.id ASC;');
const one = async (id: string) => Query('SELECT * FROM users u JOIN chirps l ON l.userid = u.id WHERE l.id=?', [id])
const post = async (userid: number, text: string, location: string) =>
    Query(`INSERT INTO chirps(userid, text, location) VALUES(${userid}, "${text}", "${location}");`)
const put = async (id: string, userid: number, text: string, location: string) =>
    Query(`UPDATE chirps SET userid=${userid}, text="${text}", location="${location}" WHERE id = ?`, [id])
const del = async (id: string) => Query('DELETE from chirps WHERE id = ?', [id])

const Chirps = {
    all,
    one,
    post,
    put,
    del,
}

export default Chirps;