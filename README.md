# AdminJS Firebase Adapter

Adapter for AdminJS which allows to add your own Firebase resources

### Prerequisites

You will need AdminJS panel configured for your project.
See [AdminJS Repository](https://github.com/SoftwareBrothers/adminjs) for instructions

You have to initialize your Firebase app before connecting resources to AdminJS.
That means you have to write something like:

```javascript
// Your firebase config see https://firebase.google.com/docs/web/setup
export const firebaseConfig = {
  // [...]
};

Firebase.initializeApp(firebaseConfig);
```

### Installing

To connect adapter to your AdminJS instance all you need is to:

1. Register this adapter into AdminJS instance
2. Write resource with schema
3. Pass resource to AdminJS config object

Check `example` folder for full example application!
```javascript
import * as firebase from "firebase";
import AdminJSExpress from '@adminjs/express';
import AdminJSFirebase from '@adminjs/firebase';
import AdminJS from 'adminjs'; 

const setupAdmin = async expressApp => {
  AdminJS.registerAdapter(AdminJSFirebase);
  const adminJs = new AdminJS({
    branding: {
      companyName: 'Firebase example',
    },
    resources: [
      {
        collection: firebase.firestore().collection('Users'),
        schema: {
          name: 'string',
          isAdmin: 'boolean',
          location: 'mixed',
          attributes: {
            type: 'mixed',
            schema: {
              birthdate: 'date',
              height: 'number',
              eyeColors: 'mixed',
            },
          },
        },
      },
    ],
  });

  const router = await AdminJSExpress.buildRouter(adminJs);
  app.use(adminJs.options.rootPath, router);
};
```

## Authors

- **Jonasz Wiącek** - _Initial work_ - [JonaszJestem](https://github.com/JonaszJestem)

## Known Issues

Described in Issues tab.

Feel free to contribute.

## License

This project is licensed under the MIT License
