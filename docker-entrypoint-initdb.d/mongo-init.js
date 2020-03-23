print('Start creating database ##########################')
db = db.getSiblingDB('api_dev_db');
db.createUser(
    {
        user: 'api_user',
        pwd:  'api1234',
        roles: [{role: 'readWrite', db: 'api_dev_db'}],
    }
);

db = db.getSiblingDB('api_test_db');
db.createUser(
    {
        user: 'api_user',
        pwd:  'api1234',
        roles: [{role: 'readWrite', db: 'api_test_db'}],
    }
);
print('End creating database ##########################')
