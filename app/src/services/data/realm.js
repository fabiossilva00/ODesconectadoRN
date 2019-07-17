import Realm from 'realm'

export function openRealm() {
    Realm.open({
        schema: [
            {
                name: 'ODesconectado',
                properties:{
                    teste: 'int'
                }
            }
        ]
    })
    .then(realm => {
        realm.write(() => {
            realm.create('ODesconectado', {teste: 1})
        })
        console.log('Realm', realm.objects('ODesconectado'))
        return realm
    })
}
