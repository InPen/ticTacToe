#!/bin/bash

# EMAIL=pikachu PASSWORD=pikachu sh scripts/url-encoded/sign-in.sh

curl "https://aqueous-atoll-85096.herokuapp.com/sign-in" \
  --include \
  --request POST \
  --header "Content-Type: application/x-www-form-urlencoded" \
  --data-urlencode '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'"
    }
  }'

echo
