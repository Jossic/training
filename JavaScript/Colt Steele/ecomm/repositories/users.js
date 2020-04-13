const fs = require('fs');
const crypto = require('crypto');

class UsersRepository {
    constructor(filename) {
        if (!filename) {
            throw new Error('Pour créer un repertoire il faut un filename');
        }

        this.filename = filename;
        try {
            fs.accessSync(this.filename);
        } catch (err) {
            fs.writeFileSync(this.filename, '[]');
        }
    }
    async getAll() {
        //Ouverture du fichier
        return JSON.parse(
            await fs.promises.readFile(this.filename, {
                encoding: 'utf8'
            }));
    }

    async create(attrs) {
        attrs.id = this.randomId();

        const records = await this.getAll();
        records.push(attrs);

        await this.writeAll(records);

        return attrs;
    }

    async writeAll(records) {
        await fs.promises.writeFile(this.filename, JSON.stringify(records, null, 2));
    }

    randomId() {
        return crypto.randomBytes(4).toString('hex');
    }

    async getOne(id) {
        const records = await this.getAll();
        return records.find(record => record.id === id);
    }

    async delete(id) {
        const records = await this.getAll();
        const filteredRecords = records.filter(record => record.id !== id);
        await this.writeAll(filteredRecords);
    }

    async update(id, attrs) {
        const records = await this.getAll();
        const record = records.find(record => record.id === id);

        if (!record) {
            throw new Error(`L'enregistement avec l'id ${id} n'a pas été trouvé`);
        }

        Object.assign(record, attrs);
        await this.writeAll(records);
    }

    async getOneBy(filters) {
        const records = await this.getAll();

        for (let record of records) {
            let found = true;

            for (const key in filters) {
                if (record[key] !== filters[key]) {
                    found = false;

                }
            }
            if (found) {
                return record;
            }
        }
    }
}

module.exports = new UsersRepository('users.json');

// const test = async () => {
//     const repo = new UsersRepository('users.json');

//     // créer un utilisateur
//     // await repo.create({ email: 'test@test.com', password: 'password' });

//     // trouver un utilisateur
//     // const user = await repo.getOne('ffffffffff ');

//     // supprimer un utilisateur en fonction de son id
//     // await repo.delete('4cfbbacf');
//     await repo.update('139e3e94', { name: 'Bidule' });

//     // console.log(user);

// };

// test();