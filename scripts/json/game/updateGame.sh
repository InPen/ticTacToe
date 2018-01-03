#!/bin/bash

# ID=2 sh scripts/json/change-password.sh
API="${API_ORIGIN:-https://aqueous-atoll-85096.herokuapp.com}"
URL_PATH="/games/${ID}"

curl "${API}${URL_PATH}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
      "game": {
        "cell": {
          "index": "'"${INDEX}"'",
          "value": "'"${VALUE}"'"
      },
      "over": "'"${OVER}"'"
    }
  }'

echo
