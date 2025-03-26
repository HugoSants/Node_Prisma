# Node_Prisma
![Node.js Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/150px-Node.js_logo.svg.png)


## Fastify config

### Create application
```.

npm init -y

```

### Install Fastify
```.

npm install fastify

```

---

### Prisma installation

```.

npm install prisma --save-dev

```

### Prisma-Client instalation
```.

npm install @prisma/client

```

### Initializing Prisma
```.

npx prisma init

```

### Create Tables in the Database

```.

npx prisma migrate dev --name init

```

* Ou sincronizar o banco sem criar migrações:

```.

npx prisma db push

```

* After that, just start the application with Node.

```.

node name_file.js

```

