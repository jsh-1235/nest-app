# NestJS

## Basic Settings

- npm i -g @nestjs/cli
- nest new project-name
- npm run start:dev

- nest g resource users
- nest g module users
- nest g controller users
- nest g service users

***

### .eslintrc.js

```json
 rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
```

### nest-cli.json

```json
{
  "collection": "@nestjs/schematics",
  "sourceRoot": "src",
  "compilerOptions": {
    "assets": [
      {
        "include": "./config/env/*.env",
        "outDir": "./dist"
      }
    ]
  }
}
```

## Package dependencies

### Configuration

- npm i dotenv
- npm i --save @nestjs/config
- npm install config
- npm i js-yaml
- npm i -D @types/js-yaml
- npm i joi
- npm install --save-dev @types/joi

### TypeScript

- npm i @nestjs/mapped-types
- npm i class-validator class-transformer

### Authentication

- npm install --save @nestjs/passport passport passport-local
- npm install --save-dev @types/passport-local
- npm install --save @nestjs/jwt passport-jwt
- npm install --save-dev @types/passport-jwt
- npm i -D uuid @types/uuid
- npm i nodemailer

### Database

- npm install --save @nestjs/typeorm typeorm mysql2
- npm install pg --save

### File Upload

- npm install --save @nestjs/serve-static
- npm i -D @types/multer

### Session

- npm i express-session
- npm i -D @types/express-session

### Cookies

- npm i cookie-parser
- npm i -D @types/cookie-parser

### Security

- npm i --save helmet
- npm i --save csurf
- npm i --save @nestjs/throttler
- npm i bcrypt
- npm i -D @types/bcrypt

### Compression

- npm i --save compression

## Socket.io

- npm i --save @nestjs/websockets @nestjs/platform-socket.io
- npm i --save-dev @types/socket.io
- npm i --save redis socket.io @socket.io/redis-adapter
- npm i --save @nestjs/platform-ws

### test

- npm i --save-dev @types/jest
