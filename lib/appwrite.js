import { Account, Client } from 'react-native-appwrite';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.jsm.aora',
    projectId: '6659f8a60039954adabd',
    databaseId: '6659fa1000139c25f88f',
    userCollectionId: '6659fa30003d47a9448c',
    videoCollectionId: '6659fa7500129def8f5c',
    storageId: '6659fbca0019bb34bb24'
};

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint)
    .setProject(config.projectId)
    .setPlatform(config.platform)
;

const account = new Account(client);

export const createUser = () => {
    account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
        .then(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
};
