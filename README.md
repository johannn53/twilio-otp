# OTP SERVICE USING NODEJS

Simple SMS OTP service using Twilio.
Before you can test it, make sure you already have a Twilio account to get your own Twilio account key and service key (dont worry its free). You can register here https://www.twilio.com/try-twilio.

Im using the "Verify" products on Twilio, so make sure you add the same product to your account to get the same service product key. To add product, you can go to "Explore product" and search "verify"

## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server using nodemon

```bash
  npm run dev
```

1. I asume you already registered your Twilio account. copy file **.env.example**, and paste it in the same directory with name **.env**
2. Change the value inside the env using your Twilio key

## API Reference

#### Send OTP request

```http
  POST localhost:6000/api/v1/otp/send
```

#### Request Body

| Parameter     | Type     | Description                                        |
| :------------ | :------- | :------------------------------------------------- |
| `countryCode` | `string` | **Required**. phone number country code            |
| `phoneNumber` | `string` | **Required**. phone numbers (without country code) |

#### Verify OTP

```http
  POST localhost:6000/api/v1/otp/verify
```

| Parameter     | Type     | Description                                        |
| :------------ | :------- | :------------------------------------------------- |
| `countryCode` | `string` | **Required**. phone number country code            |
| `phoneNumber` | `string` | **Required**. phone numbers (without country code) |
| `otp`         | `string` | **Required**. OTP code                             |

## Authors

- [@arijohand](https://www.linkedin.com/in/arijohand/)
