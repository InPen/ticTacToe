#!/bin/bash

# sh scripts/json/sign-in.sh

API="${API_ORIGIN:-https://aqueous-atoll-85096.herokuapp.com}"
URL_PATH="/games"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Token token=$TOKEN"\
  --header "Content-Type: application/json" \

echo
