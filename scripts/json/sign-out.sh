#!/bin/bash

# ID=2 TOKEN=tokengoeshere sh scripts/json/sign-out.sh

curl "https://aqueous-atoll-85096.herokuapp.com/sign-out/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}"

echo
