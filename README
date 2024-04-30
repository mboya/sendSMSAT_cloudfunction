# Cloud Function : Google, send sms using AT.

## Dependencies

```
 - gcloud cli
 - africastalking account, this is the get the api keys for authentication
```

## Setup the app

```npm install```

## Deploy app to cloud function

```
 gcloud functions deploy sendSMS /
    --runtime=nodejs20 /
    --gen2 /
    --trigger-http /
    --region={REGION} /
    --allow-unauthenticated /
    --set-env-vars API_KEY={api_key},USERNAME={username}
```

## Testing

You will get a url after deployment, then you will send a POST request with the username and message